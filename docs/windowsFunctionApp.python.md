# `windowsFunctionApp` Submodule <a name="`windowsFunctionApp` Submodule" id="@cdktf/provider-azurerm.windowsFunctionApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WindowsFunctionApp <a name="WindowsFunctionApp" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app azurerm_windows_function_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionApp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  service_plan_id: str,
  site_config: WindowsFunctionAppSiteConfig,
  app_settings: typing.Mapping[str] = None,
  auth_settings: WindowsFunctionAppAuthSettings = None,
  backup: WindowsFunctionAppBackup = None,
  builtin_logging_enabled: typing.Union[bool, IResolvable] = None,
  client_certificate_enabled: typing.Union[bool, IResolvable] = None,
  client_certificate_exclusion_paths: str = None,
  client_certificate_mode: str = None,
  connection_string: typing.Union[IResolvable, typing.List[WindowsFunctionAppConnectionString]] = None,
  content_share_force_disabled: typing.Union[bool, IResolvable] = None,
  daily_memory_time_quota: typing.Union[int, float] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  functions_extension_version: str = None,
  https_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: WindowsFunctionAppIdentity = None,
  key_vault_reference_identity_id: str = None,
  sticky_settings: WindowsFunctionAppStickySettings = None,
  storage_account: typing.Union[IResolvable, typing.List[WindowsFunctionAppStorageAccount]] = None,
  storage_account_access_key: str = None,
  storage_account_name: str = None,
  storage_key_vault_secret_id: str = None,
  storage_uses_managed_identity: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: WindowsFunctionAppTimeouts = None,
  virtual_network_subnet_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#location WindowsFunctionApp#location}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name of the Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#resource_group_name WindowsFunctionApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.servicePlanId">service_plan_id</a></code> | <code>str</code> | The ID of the App Service Plan within which to create this Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig">WindowsFunctionAppSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | A map of key-value pairs for [App Settings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-app-settings) and custom values. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.authSettings">auth_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings">WindowsFunctionAppAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup">WindowsFunctionAppBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.builtinLoggingEnabled">builtin_logging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should built in logging be enabled. Configures `AzureWebJobsDashboard` app setting based on the configured storage setting. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.clientCertificateEnabled">client_certificate_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the function app use Client Certificates. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.clientCertificateExclusionPaths">client_certificate_exclusion_paths</a></code> | <code>str</code> | Paths to exclude when using client certificates, separated by ; |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.clientCertificateMode">client_certificate_mode</a></code> | <code>str</code> | The mode of the Function App's client certificates requirement for incoming requests. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.connectionString">connection_string</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a>]]</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.contentShareForceDisabled">content_share_force_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Force disable the content share settings. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.dailyMemoryTimeQuota">daily_memory_time_quota</a></code> | <code>typing.Union[int, float]</code> | The amount of memory in gigabyte-seconds that your application is allowed to consume per day. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the Windows Function App enabled. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.functionsExtensionVersion">functions_extension_version</a></code> | <code>str</code> | The runtime version associated with the Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Can the Function App only be accessed via HTTPS? |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#id WindowsFunctionApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity">WindowsFunctionAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.keyVaultReferenceIdentityId">key_vault_reference_identity_id</a></code> | <code>str</code> | The User Assigned Identity to use for Key Vault access. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.stickySettings">sticky_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings">WindowsFunctionAppStickySettings</a></code> | sticky_settings block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.storageAccount">storage_account</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a>]]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | The access key which will be used to access the storage account for the Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.storageAccountName">storage_account_name</a></code> | <code>str</code> | The backend storage account name which will be used by this Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.storageKeyVaultSecretId">storage_key_vault_secret_id</a></code> | <code>str</code> | The Key Vault Secret ID, including version, that contains the Connection String to connect to the storage account for this Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.storageUsesManagedIdentity">storage_uses_managed_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the Function App use its Managed Identity to access storage? |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#tags WindowsFunctionApp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts">WindowsFunctionAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#virtual_network_subnet_id WindowsFunctionApp#virtual_network_subnet_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#location WindowsFunctionApp#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name of the Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#resource_group_name WindowsFunctionApp#resource_group_name}.

---

##### `service_plan_id`<sup>Required</sup> <a name="service_plan_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.servicePlanId"></a>

- *Type:* str

The ID of the App Service Plan within which to create this Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#service_plan_id WindowsFunctionApp#service_plan_id}

---

##### `site_config`<sup>Required</sup> <a name="site_config" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.siteConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig">WindowsFunctionAppSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#site_config WindowsFunctionApp#site_config}

---

##### `app_settings`<sup>Optional</sup> <a name="app_settings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.appSettings"></a>

- *Type:* typing.Mapping[str]

A map of key-value pairs for [App Settings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-app-settings) and custom values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_settings WindowsFunctionApp#app_settings}

---

##### `auth_settings`<sup>Optional</sup> <a name="auth_settings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.authSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings">WindowsFunctionAppAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#auth_settings WindowsFunctionApp#auth_settings}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.backup"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup">WindowsFunctionAppBackup</a>

backup block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#backup WindowsFunctionApp#backup}

---

##### `builtin_logging_enabled`<sup>Optional</sup> <a name="builtin_logging_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.builtinLoggingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should built in logging be enabled. Configures `AzureWebJobsDashboard` app setting based on the configured storage setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#builtin_logging_enabled WindowsFunctionApp#builtin_logging_enabled}

---

##### `client_certificate_enabled`<sup>Optional</sup> <a name="client_certificate_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.clientCertificateEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the function app use Client Certificates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_certificate_enabled WindowsFunctionApp#client_certificate_enabled}

---

##### `client_certificate_exclusion_paths`<sup>Optional</sup> <a name="client_certificate_exclusion_paths" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.clientCertificateExclusionPaths"></a>

- *Type:* str

Paths to exclude when using client certificates, separated by ;

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_certificate_exclusion_paths WindowsFunctionApp#client_certificate_exclusion_paths}

---

##### `client_certificate_mode`<sup>Optional</sup> <a name="client_certificate_mode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.clientCertificateMode"></a>

- *Type:* str

The mode of the Function App's client certificates requirement for incoming requests.

Possible values are `Required`, `Optional`, and `OptionalInteractiveUser`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_certificate_mode WindowsFunctionApp#client_certificate_mode}

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.connectionString"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a>]]

connection_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#connection_string WindowsFunctionApp#connection_string}

---

##### `content_share_force_disabled`<sup>Optional</sup> <a name="content_share_force_disabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.contentShareForceDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Force disable the content share settings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#content_share_force_disabled WindowsFunctionApp#content_share_force_disabled}

---

##### `daily_memory_time_quota`<sup>Optional</sup> <a name="daily_memory_time_quota" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.dailyMemoryTimeQuota"></a>

- *Type:* typing.Union[int, float]

The amount of memory in gigabyte-seconds that your application is allowed to consume per day.

Setting this value only affects function apps in Consumption Plans.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#daily_memory_time_quota WindowsFunctionApp#daily_memory_time_quota}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the Windows Function App enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#enabled WindowsFunctionApp#enabled}

---

##### `functions_extension_version`<sup>Optional</sup> <a name="functions_extension_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.functionsExtensionVersion"></a>

- *Type:* str

The runtime version associated with the Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#functions_extension_version WindowsFunctionApp#functions_extension_version}

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.httpsOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Can the Function App only be accessed via HTTPS?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#https_only WindowsFunctionApp#https_only}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#id WindowsFunctionApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity">WindowsFunctionAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#identity WindowsFunctionApp#identity}

---

##### `key_vault_reference_identity_id`<sup>Optional</sup> <a name="key_vault_reference_identity_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.keyVaultReferenceIdentityId"></a>

- *Type:* str

The User Assigned Identity to use for Key Vault access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#key_vault_reference_identity_id WindowsFunctionApp#key_vault_reference_identity_id}

---

##### `sticky_settings`<sup>Optional</sup> <a name="sticky_settings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.stickySettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings">WindowsFunctionAppStickySettings</a>

sticky_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#sticky_settings WindowsFunctionApp#sticky_settings}

---

##### `storage_account`<sup>Optional</sup> <a name="storage_account" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.storageAccount"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a>]]

storage_account block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#storage_account WindowsFunctionApp#storage_account}

---

##### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.storageAccountAccessKey"></a>

- *Type:* str

The access key which will be used to access the storage account for the Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#storage_account_access_key WindowsFunctionApp#storage_account_access_key}

---

##### `storage_account_name`<sup>Optional</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.storageAccountName"></a>

- *Type:* str

The backend storage account name which will be used by this Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#storage_account_name WindowsFunctionApp#storage_account_name}

---

##### `storage_key_vault_secret_id`<sup>Optional</sup> <a name="storage_key_vault_secret_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.storageKeyVaultSecretId"></a>

- *Type:* str

The Key Vault Secret ID, including version, that contains the Connection String to connect to the storage account for this Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#storage_key_vault_secret_id WindowsFunctionApp#storage_key_vault_secret_id}

---

##### `storage_uses_managed_identity`<sup>Optional</sup> <a name="storage_uses_managed_identity" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.storageUsesManagedIdentity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the Function App use its Managed Identity to access storage?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#storage_uses_managed_identity WindowsFunctionApp#storage_uses_managed_identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#tags WindowsFunctionApp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts">WindowsFunctionAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#timeouts WindowsFunctionApp#timeouts}

---

##### `virtual_network_subnet_id`<sup>Optional</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.Initializer.parameter.virtualNetworkSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#virtual_network_subnet_id WindowsFunctionApp#virtual_network_subnet_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings">put_auth_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putBackup">put_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putConnectionString">put_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig">put_site_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putStickySettings">put_sticky_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putStorageAccount">put_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetAppSettings">reset_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetAuthSettings">reset_auth_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetBackup">reset_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetBuiltinLoggingEnabled">reset_builtin_logging_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetClientCertificateEnabled">reset_client_certificate_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetClientCertificateExclusionPaths">reset_client_certificate_exclusion_paths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetClientCertificateMode">reset_client_certificate_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetConnectionString">reset_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetContentShareForceDisabled">reset_content_share_force_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetDailyMemoryTimeQuota">reset_daily_memory_time_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetFunctionsExtensionVersion">reset_functions_extension_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetHttpsOnly">reset_https_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetKeyVaultReferenceIdentityId">reset_key_vault_reference_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStickySettings">reset_sticky_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageAccount">reset_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageAccountAccessKey">reset_storage_account_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageAccountName">reset_storage_account_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageKeyVaultSecretId">reset_storage_key_vault_secret_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageUsesManagedIdentity">reset_storage_uses_managed_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetVirtualNetworkSubnetId">reset_virtual_network_subnet_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_auth_settings` <a name="put_auth_settings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings"></a>

```python
def put_auth_settings(
  enabled: typing.Union[bool, IResolvable],
  active_directory: WindowsFunctionAppAuthSettingsActiveDirectory = None,
  additional_login_parameters: typing.Mapping[str] = None,
  allowed_external_redirect_urls: typing.List[str] = None,
  default_provider: str = None,
  facebook: WindowsFunctionAppAuthSettingsFacebook = None,
  github: WindowsFunctionAppAuthSettingsGithub = None,
  google: WindowsFunctionAppAuthSettingsGoogle = None,
  issuer: str = None,
  microsoft: WindowsFunctionAppAuthSettingsMicrosoft = None,
  runtime_version: str = None,
  token_refresh_extension_hours: typing.Union[int, float] = None,
  token_store_enabled: typing.Union[bool, IResolvable] = None,
  twitter: WindowsFunctionAppAuthSettingsTwitter = None,
  unauthenticated_client_action: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the Authentication / Authorization feature be enabled?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#enabled WindowsFunctionApp#enabled}

---

###### `active_directory`<sup>Optional</sup> <a name="active_directory" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings.parameter.activeDirectory"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory">WindowsFunctionAppAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#active_directory WindowsFunctionApp#active_directory}

---

###### `additional_login_parameters`<sup>Optional</sup> <a name="additional_login_parameters" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings.parameter.additionalLoginParameters"></a>

- *Type:* typing.Mapping[str]

Specifies a map of Login Parameters to send to the OpenID Connect authorization endpoint when a user logs in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#additional_login_parameters WindowsFunctionApp#additional_login_parameters}

---

###### `allowed_external_redirect_urls`<sup>Optional</sup> <a name="allowed_external_redirect_urls" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings.parameter.allowedExternalRedirectUrls"></a>

- *Type:* typing.List[str]

Specifies a list of External URLs that can be redirected to as part of logging in or logging out of the Windows Web App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#allowed_external_redirect_urls WindowsFunctionApp#allowed_external_redirect_urls}

---

###### `default_provider`<sup>Optional</sup> <a name="default_provider" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings.parameter.defaultProvider"></a>

- *Type:* str

The default authentication provider to use when multiple providers are configured.

Possible values include: `AzureActiveDirectory`, `Facebook`, `Google`, `MicrosoftAccount`, `Twitter`, `Github`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#default_provider WindowsFunctionApp#default_provider}

---

###### `facebook`<sup>Optional</sup> <a name="facebook" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings.parameter.facebook"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook">WindowsFunctionAppAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#facebook WindowsFunctionApp#facebook}

---

###### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings.parameter.github"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub">WindowsFunctionAppAuthSettingsGithub</a>

github block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#github WindowsFunctionApp#github}

---

###### `google`<sup>Optional</sup> <a name="google" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings.parameter.google"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle">WindowsFunctionAppAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#google WindowsFunctionApp#google}

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings.parameter.issuer"></a>

- *Type:* str

The OpenID Connect Issuer URI that represents the entity which issues access tokens.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#issuer WindowsFunctionApp#issuer}

---

###### `microsoft`<sup>Optional</sup> <a name="microsoft" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings.parameter.microsoft"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft">WindowsFunctionAppAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#microsoft WindowsFunctionApp#microsoft}

---

###### `runtime_version`<sup>Optional</sup> <a name="runtime_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings.parameter.runtimeVersion"></a>

- *Type:* str

The RuntimeVersion of the Authentication / Authorization feature in use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#runtime_version WindowsFunctionApp#runtime_version}

---

###### `token_refresh_extension_hours`<sup>Optional</sup> <a name="token_refresh_extension_hours" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings.parameter.tokenRefreshExtensionHours"></a>

- *Type:* typing.Union[int, float]

The number of hours after session token expiration that a session token can be used to call the token refresh API.

Defaults to `72` hours.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#token_refresh_extension_hours WindowsFunctionApp#token_refresh_extension_hours}

---

###### `token_store_enabled`<sup>Optional</sup> <a name="token_store_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings.parameter.tokenStoreEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the Windows Web App durably store platform-specific security tokens that are obtained during login flows? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#token_store_enabled WindowsFunctionApp#token_store_enabled}

---

###### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings.parameter.twitter"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter">WindowsFunctionAppAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#twitter WindowsFunctionApp#twitter}

---

###### `unauthenticated_client_action`<sup>Optional</sup> <a name="unauthenticated_client_action" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putAuthSettings.parameter.unauthenticatedClientAction"></a>

- *Type:* str

The action to take when an unauthenticated client attempts to access the app. Possible values include: `RedirectToLoginPage`, `AllowAnonymous`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#unauthenticated_client_action WindowsFunctionApp#unauthenticated_client_action}

---

##### `put_backup` <a name="put_backup" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putBackup"></a>

```python
def put_backup(
  name: str,
  schedule: WindowsFunctionAppBackupSchedule,
  storage_account_url: str,
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putBackup.parameter.name"></a>

- *Type:* str

The name which should be used for this Backup.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}

---

###### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putBackup.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule">WindowsFunctionAppBackupSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#schedule WindowsFunctionApp#schedule}

---

###### `storage_account_url`<sup>Required</sup> <a name="storage_account_url" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putBackup.parameter.storageAccountUrl"></a>

- *Type:* str

The SAS URL to the container.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#storage_account_url WindowsFunctionApp#storage_account_url}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putBackup.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should this backup job be enabled?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#enabled WindowsFunctionApp#enabled}

---

##### `put_connection_string` <a name="put_connection_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putConnectionString"></a>

```python
def put_connection_string(
  value: typing.Union[IResolvable, typing.List[WindowsFunctionAppConnectionString]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putConnectionString.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a>]]

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#type WindowsFunctionApp#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#identity_ids WindowsFunctionApp#identity_ids}.

---

##### `put_site_config` <a name="put_site_config" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig"></a>

```python
def put_site_config(
  always_on: typing.Union[bool, IResolvable] = None,
  api_definition_url: str = None,
  api_management_api_id: str = None,
  app_command_line: str = None,
  application_insights_connection_string: str = None,
  application_insights_key: str = None,
  application_stack: WindowsFunctionAppSiteConfigApplicationStack = None,
  app_scale_limit: typing.Union[int, float] = None,
  app_service_logs: WindowsFunctionAppSiteConfigAppServiceLogs = None,
  cors: WindowsFunctionAppSiteConfigCors = None,
  default_documents: typing.List[str] = None,
  elastic_instance_minimum: typing.Union[int, float] = None,
  ftps_state: str = None,
  health_check_eviction_time_in_min: typing.Union[int, float] = None,
  health_check_path: str = None,
  http2_enabled: typing.Union[bool, IResolvable] = None,
  ip_restriction: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigIpRestriction]] = None,
  load_balancing_mode: str = None,
  managed_pipeline_mode: str = None,
  minimum_tls_version: str = None,
  pre_warmed_instance_count: typing.Union[int, float] = None,
  remote_debugging_enabled: typing.Union[bool, IResolvable] = None,
  remote_debugging_version: str = None,
  runtime_scale_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  scm_ip_restriction: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigScmIpRestriction]] = None,
  scm_minimum_tls_version: str = None,
  scm_use_main_ip_restriction: typing.Union[bool, IResolvable] = None,
  use32_bit_worker: typing.Union[bool, IResolvable] = None,
  vnet_route_all_enabled: typing.Union[bool, IResolvable] = None,
  websockets_enabled: typing.Union[bool, IResolvable] = None,
  worker_count: typing.Union[int, float] = None
) -> None
```

###### `always_on`<sup>Optional</sup> <a name="always_on" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.alwaysOn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this Windows Web App is Always On enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#always_on WindowsFunctionApp#always_on}

---

###### `api_definition_url`<sup>Optional</sup> <a name="api_definition_url" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.apiDefinitionUrl"></a>

- *Type:* str

The URL of the API definition that describes this Windows Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#api_definition_url WindowsFunctionApp#api_definition_url}

---

###### `api_management_api_id`<sup>Optional</sup> <a name="api_management_api_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.apiManagementApiId"></a>

- *Type:* str

The ID of the API Management API for this Windows Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#api_management_api_id WindowsFunctionApp#api_management_api_id}

---

###### `app_command_line`<sup>Optional</sup> <a name="app_command_line" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.appCommandLine"></a>

- *Type:* str

The program and any arguments used to launch this app via the command line. (Example `node myapp.js`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_command_line WindowsFunctionApp#app_command_line}

---

###### `application_insights_connection_string`<sup>Optional</sup> <a name="application_insights_connection_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.applicationInsightsConnectionString"></a>

- *Type:* str

The Connection String for linking the Windows Function App to Application Insights.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#application_insights_connection_string WindowsFunctionApp#application_insights_connection_string}

---

###### `application_insights_key`<sup>Optional</sup> <a name="application_insights_key" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.applicationInsightsKey"></a>

- *Type:* str

The Instrumentation Key for connecting the Windows Function App to Application Insights.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#application_insights_key WindowsFunctionApp#application_insights_key}

---

###### `application_stack`<sup>Optional</sup> <a name="application_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.applicationStack"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack">WindowsFunctionAppSiteConfigApplicationStack</a>

application_stack block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#application_stack WindowsFunctionApp#application_stack}

---

###### `app_scale_limit`<sup>Optional</sup> <a name="app_scale_limit" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.appScaleLimit"></a>

- *Type:* typing.Union[int, float]

The number of workers this function app can scale out to.

Only applicable to apps on the Consumption and Premium plan.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_scale_limit WindowsFunctionApp#app_scale_limit}

---

###### `app_service_logs`<sup>Optional</sup> <a name="app_service_logs" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.appServiceLogs"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs">WindowsFunctionAppSiteConfigAppServiceLogs</a>

app_service_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_service_logs WindowsFunctionApp#app_service_logs}

---

###### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.cors"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors">WindowsFunctionAppSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#cors WindowsFunctionApp#cors}

---

###### `default_documents`<sup>Optional</sup> <a name="default_documents" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.defaultDocuments"></a>

- *Type:* typing.List[str]

Specifies a list of Default Documents for the Windows Web App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#default_documents WindowsFunctionApp#default_documents}

---

###### `elastic_instance_minimum`<sup>Optional</sup> <a name="elastic_instance_minimum" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.elasticInstanceMinimum"></a>

- *Type:* typing.Union[int, float]

The number of minimum instances for this Windows Function App. Only affects apps on Elastic Premium plans.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#elastic_instance_minimum WindowsFunctionApp#elastic_instance_minimum}

---

###### `ftps_state`<sup>Optional</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.ftpsState"></a>

- *Type:* str

State of FTP / FTPS service for this function app.

Possible values include: `AllAllowed`, `FtpsOnly` and `Disabled`. Defaults to `Disabled`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#ftps_state WindowsFunctionApp#ftps_state}

---

###### `health_check_eviction_time_in_min`<sup>Optional</sup> <a name="health_check_eviction_time_in_min" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.healthCheckEvictionTimeInMin"></a>

- *Type:* typing.Union[int, float]

The amount of time in minutes that a node is unhealthy before being removed from the load balancer.

Possible values are between `2` and `10`. Defaults to `10`. Only valid in conjunction with `health_check_path`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#health_check_eviction_time_in_min WindowsFunctionApp#health_check_eviction_time_in_min}

---

###### `health_check_path`<sup>Optional</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.healthCheckPath"></a>

- *Type:* str

The path to be checked for this function app health.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#health_check_path WindowsFunctionApp#health_check_path}

---

###### `http2_enabled`<sup>Optional</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.http2Enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the http2 protocol should be enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#http2_enabled WindowsFunctionApp#http2_enabled}

---

###### `ip_restriction`<sup>Optional</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.ipRestriction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction">WindowsFunctionAppSiteConfigIpRestriction</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#ip_restriction WindowsFunctionApp#ip_restriction}.

---

###### `load_balancing_mode`<sup>Optional</sup> <a name="load_balancing_mode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.loadBalancingMode"></a>

- *Type:* str

The Site load balancing mode. Possible values include: `WeightedRoundRobin`, `LeastRequests`, `LeastResponseTime`, `WeightedTotalTraffic`, `RequestHash`, `PerSiteRoundRobin`. Defaults to `LeastRequests` if omitted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#load_balancing_mode WindowsFunctionApp#load_balancing_mode}

---

###### `managed_pipeline_mode`<sup>Optional</sup> <a name="managed_pipeline_mode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.managedPipelineMode"></a>

- *Type:* str

The Managed Pipeline mode. Possible values include: `Integrated`, `Classic`. Defaults to `Integrated`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#managed_pipeline_mode WindowsFunctionApp#managed_pipeline_mode}

---

###### `minimum_tls_version`<sup>Optional</sup> <a name="minimum_tls_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.minimumTlsVersion"></a>

- *Type:* str

The configures the minimum version of TLS required for SSL requests.

Possible values include: `1.0`, `1.1`, and  `1.2`. Defaults to `1.2`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#minimum_tls_version WindowsFunctionApp#minimum_tls_version}

---

###### `pre_warmed_instance_count`<sup>Optional</sup> <a name="pre_warmed_instance_count" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.preWarmedInstanceCount"></a>

- *Type:* typing.Union[int, float]

The number of pre-warmed instances for this function app. Only affects apps on an Elastic Premium plan.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#pre_warmed_instance_count WindowsFunctionApp#pre_warmed_instance_count}

---

###### `remote_debugging_enabled`<sup>Optional</sup> <a name="remote_debugging_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.remoteDebuggingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should Remote Debugging be enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#remote_debugging_enabled WindowsFunctionApp#remote_debugging_enabled}

---

###### `remote_debugging_version`<sup>Optional</sup> <a name="remote_debugging_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.remoteDebuggingVersion"></a>

- *Type:* str

The Remote Debugging Version. Possible values include `VS2017`, `VS2019`, and `VS2022`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#remote_debugging_version WindowsFunctionApp#remote_debugging_version}

---

###### `runtime_scale_monitoring_enabled`<sup>Optional</sup> <a name="runtime_scale_monitoring_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.runtimeScaleMonitoringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should Functions Runtime Scale Monitoring be enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#runtime_scale_monitoring_enabled WindowsFunctionApp#runtime_scale_monitoring_enabled}

---

###### `scm_ip_restriction`<sup>Optional</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.scmIpRestriction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction">WindowsFunctionAppSiteConfigScmIpRestriction</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#scm_ip_restriction WindowsFunctionApp#scm_ip_restriction}.

---

###### `scm_minimum_tls_version`<sup>Optional</sup> <a name="scm_minimum_tls_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.scmMinimumTlsVersion"></a>

- *Type:* str

Configures the minimum version of TLS required for SSL requests to the SCM site Possible values include: `1.0`, `1.1`, and  `1.2`. Defaults to `1.2`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#scm_minimum_tls_version WindowsFunctionApp#scm_minimum_tls_version}

---

###### `scm_use_main_ip_restriction`<sup>Optional</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.scmUseMainIpRestriction"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the Windows Function App `ip_restriction` configuration be used for the SCM also.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#scm_use_main_ip_restriction WindowsFunctionApp#scm_use_main_ip_restriction}

---

###### `use32_bit_worker`<sup>Optional</sup> <a name="use32_bit_worker" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.use32BitWorker"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the Windows Web App use a 32-bit worker.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#use_32_bit_worker WindowsFunctionApp#use_32_bit_worker}

---

###### `vnet_route_all_enabled`<sup>Optional</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.vnetRouteAllEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#vnet_route_all_enabled WindowsFunctionApp#vnet_route_all_enabled}

---

###### `websockets_enabled`<sup>Optional</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.websocketsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should Web Sockets be enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#websockets_enabled WindowsFunctionApp#websockets_enabled}

---

###### `worker_count`<sup>Optional</sup> <a name="worker_count" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putSiteConfig.parameter.workerCount"></a>

- *Type:* typing.Union[int, float]

The number of Workers for this Windows Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#worker_count WindowsFunctionApp#worker_count}

---

##### `put_sticky_settings` <a name="put_sticky_settings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putStickySettings"></a>

```python
def put_sticky_settings(
  app_setting_names: typing.List[str] = None,
  connection_string_names: typing.List[str] = None
) -> None
```

###### `app_setting_names`<sup>Optional</sup> <a name="app_setting_names" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putStickySettings.parameter.appSettingNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_setting_names WindowsFunctionApp#app_setting_names}.

---

###### `connection_string_names`<sup>Optional</sup> <a name="connection_string_names" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putStickySettings.parameter.connectionStringNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#connection_string_names WindowsFunctionApp#connection_string_names}.

---

##### `put_storage_account` <a name="put_storage_account" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putStorageAccount"></a>

```python
def put_storage_account(
  value: typing.Union[IResolvable, typing.List[WindowsFunctionAppStorageAccount]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putStorageAccount.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#create WindowsFunctionApp#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#delete WindowsFunctionApp#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#read WindowsFunctionApp#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#update WindowsFunctionApp#update}.

---

##### `reset_app_settings` <a name="reset_app_settings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetAppSettings"></a>

```python
def reset_app_settings() -> None
```

##### `reset_auth_settings` <a name="reset_auth_settings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetAuthSettings"></a>

```python
def reset_auth_settings() -> None
```

##### `reset_backup` <a name="reset_backup" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetBackup"></a>

```python
def reset_backup() -> None
```

##### `reset_builtin_logging_enabled` <a name="reset_builtin_logging_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetBuiltinLoggingEnabled"></a>

```python
def reset_builtin_logging_enabled() -> None
```

##### `reset_client_certificate_enabled` <a name="reset_client_certificate_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetClientCertificateEnabled"></a>

```python
def reset_client_certificate_enabled() -> None
```

##### `reset_client_certificate_exclusion_paths` <a name="reset_client_certificate_exclusion_paths" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetClientCertificateExclusionPaths"></a>

```python
def reset_client_certificate_exclusion_paths() -> None
```

##### `reset_client_certificate_mode` <a name="reset_client_certificate_mode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetClientCertificateMode"></a>

```python
def reset_client_certificate_mode() -> None
```

##### `reset_connection_string` <a name="reset_connection_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetConnectionString"></a>

```python
def reset_connection_string() -> None
```

##### `reset_content_share_force_disabled` <a name="reset_content_share_force_disabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetContentShareForceDisabled"></a>

```python
def reset_content_share_force_disabled() -> None
```

##### `reset_daily_memory_time_quota` <a name="reset_daily_memory_time_quota" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetDailyMemoryTimeQuota"></a>

```python
def reset_daily_memory_time_quota() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_functions_extension_version` <a name="reset_functions_extension_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetFunctionsExtensionVersion"></a>

```python
def reset_functions_extension_version() -> None
```

##### `reset_https_only` <a name="reset_https_only" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetHttpsOnly"></a>

```python
def reset_https_only() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_key_vault_reference_identity_id` <a name="reset_key_vault_reference_identity_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetKeyVaultReferenceIdentityId"></a>

```python
def reset_key_vault_reference_identity_id() -> None
```

##### `reset_sticky_settings` <a name="reset_sticky_settings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStickySettings"></a>

```python
def reset_sticky_settings() -> None
```

##### `reset_storage_account` <a name="reset_storage_account" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageAccount"></a>

```python
def reset_storage_account() -> None
```

##### `reset_storage_account_access_key` <a name="reset_storage_account_access_key" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageAccountAccessKey"></a>

```python
def reset_storage_account_access_key() -> None
```

##### `reset_storage_account_name` <a name="reset_storage_account_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageAccountName"></a>

```python
def reset_storage_account_name() -> None
```

##### `reset_storage_key_vault_secret_id` <a name="reset_storage_key_vault_secret_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageKeyVaultSecretId"></a>

```python
def reset_storage_key_vault_secret_id() -> None
```

##### `reset_storage_uses_managed_identity` <a name="reset_storage_uses_managed_identity" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetStorageUsesManagedIdentity"></a>

```python
def reset_storage_uses_managed_identity() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_virtual_network_subnet_id` <a name="reset_virtual_network_subnet_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.resetVirtualNetworkSubnetId"></a>

```python
def reset_virtual_network_subnet_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.authSettings">auth_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference">WindowsFunctionAppAuthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference">WindowsFunctionAppBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.connectionString">connection_string</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList">WindowsFunctionAppConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.customDomainVerificationId">custom_domain_verification_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.defaultHostname">default_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference">WindowsFunctionAppIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.outboundIpAddresses">outbound_ip_addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.outboundIpAddressList">outbound_ip_address_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.possibleOutboundIpAddresses">possible_outbound_ip_addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.possibleOutboundIpAddressList">possible_outbound_ip_address_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference">WindowsFunctionAppSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.siteCredential">site_credential</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList">WindowsFunctionAppSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.stickySettings">sticky_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference">WindowsFunctionAppStickySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccount">storage_account</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList">WindowsFunctionAppStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference">WindowsFunctionAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.appSettingsInput">app_settings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.authSettingsInput">auth_settings_input</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings">WindowsFunctionAppAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.backupInput">backup_input</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup">WindowsFunctionAppBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.builtinLoggingEnabledInput">builtin_logging_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateEnabledInput">client_certificate_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateExclusionPathsInput">client_certificate_exclusion_paths_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateModeInput">client_certificate_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.connectionStringInput">connection_string_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.contentShareForceDisabledInput">content_share_force_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.dailyMemoryTimeQuotaInput">daily_memory_time_quota_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.functionsExtensionVersionInput">functions_extension_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.httpsOnlyInput">https_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity">WindowsFunctionAppIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.keyVaultReferenceIdentityIdInput">key_vault_reference_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.servicePlanIdInput">service_plan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.siteConfigInput">site_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig">WindowsFunctionAppSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.stickySettingsInput">sticky_settings_input</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings">WindowsFunctionAppStickySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountAccessKeyInput">storage_account_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountInput">storage_account_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountNameInput">storage_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageKeyVaultSecretIdInput">storage_key_vault_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageUsesManagedIdentityInput">storage_uses_managed_identity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts">WindowsFunctionAppTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.virtualNetworkSubnetIdInput">virtual_network_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.builtinLoggingEnabled">builtin_logging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateEnabled">client_certificate_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateExclusionPaths">client_certificate_exclusion_paths</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateMode">client_certificate_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.contentShareForceDisabled">content_share_force_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.dailyMemoryTimeQuota">daily_memory_time_quota</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.functionsExtensionVersion">functions_extension_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.keyVaultReferenceIdentityId">key_vault_reference_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.servicePlanId">service_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageKeyVaultSecretId">storage_key_vault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageUsesManagedIdentity">storage_uses_managed_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_settings`<sup>Required</sup> <a name="auth_settings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.authSettings"></a>

```python
auth_settings: WindowsFunctionAppAuthSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference">WindowsFunctionAppAuthSettingsOutputReference</a>

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.backup"></a>

```python
backup: WindowsFunctionAppBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference">WindowsFunctionAppBackupOutputReference</a>

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.connectionString"></a>

```python
connection_string: WindowsFunctionAppConnectionStringList
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList">WindowsFunctionAppConnectionStringList</a>

---

##### `custom_domain_verification_id`<sup>Required</sup> <a name="custom_domain_verification_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.customDomainVerificationId"></a>

```python
custom_domain_verification_id: str
```

- *Type:* str

---

##### `default_hostname`<sup>Required</sup> <a name="default_hostname" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.defaultHostname"></a>

```python
default_hostname: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.identity"></a>

```python
identity: WindowsFunctionAppIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference">WindowsFunctionAppIdentityOutputReference</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `outbound_ip_addresses`<sup>Required</sup> <a name="outbound_ip_addresses" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.outboundIpAddresses"></a>

```python
outbound_ip_addresses: str
```

- *Type:* str

---

##### `outbound_ip_address_list`<sup>Required</sup> <a name="outbound_ip_address_list" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.outboundIpAddressList"></a>

```python
outbound_ip_address_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `possible_outbound_ip_addresses`<sup>Required</sup> <a name="possible_outbound_ip_addresses" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.possibleOutboundIpAddresses"></a>

```python
possible_outbound_ip_addresses: str
```

- *Type:* str

---

##### `possible_outbound_ip_address_list`<sup>Required</sup> <a name="possible_outbound_ip_address_list" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.possibleOutboundIpAddressList"></a>

```python
possible_outbound_ip_address_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `site_config`<sup>Required</sup> <a name="site_config" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.siteConfig"></a>

```python
site_config: WindowsFunctionAppSiteConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference">WindowsFunctionAppSiteConfigOutputReference</a>

---

##### `site_credential`<sup>Required</sup> <a name="site_credential" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.siteCredential"></a>

```python
site_credential: WindowsFunctionAppSiteCredentialList
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList">WindowsFunctionAppSiteCredentialList</a>

---

##### `sticky_settings`<sup>Required</sup> <a name="sticky_settings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.stickySettings"></a>

```python
sticky_settings: WindowsFunctionAppStickySettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference">WindowsFunctionAppStickySettingsOutputReference</a>

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccount"></a>

```python
storage_account: WindowsFunctionAppStorageAccountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList">WindowsFunctionAppStorageAccountList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.timeouts"></a>

```python
timeouts: WindowsFunctionAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference">WindowsFunctionAppTimeoutsOutputReference</a>

---

##### `app_settings_input`<sup>Optional</sup> <a name="app_settings_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.appSettingsInput"></a>

```python
app_settings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `auth_settings_input`<sup>Optional</sup> <a name="auth_settings_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.authSettingsInput"></a>

```python
auth_settings_input: WindowsFunctionAppAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings">WindowsFunctionAppAuthSettings</a>

---

##### `backup_input`<sup>Optional</sup> <a name="backup_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.backupInput"></a>

```python
backup_input: WindowsFunctionAppBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup">WindowsFunctionAppBackup</a>

---

##### `builtin_logging_enabled_input`<sup>Optional</sup> <a name="builtin_logging_enabled_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.builtinLoggingEnabledInput"></a>

```python
builtin_logging_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_certificate_enabled_input`<sup>Optional</sup> <a name="client_certificate_enabled_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateEnabledInput"></a>

```python
client_certificate_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_certificate_exclusion_paths_input`<sup>Optional</sup> <a name="client_certificate_exclusion_paths_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateExclusionPathsInput"></a>

```python
client_certificate_exclusion_paths_input: str
```

- *Type:* str

---

##### `client_certificate_mode_input`<sup>Optional</sup> <a name="client_certificate_mode_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateModeInput"></a>

```python
client_certificate_mode_input: str
```

- *Type:* str

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.connectionStringInput"></a>

```python
connection_string_input: typing.Union[IResolvable, typing.List[WindowsFunctionAppConnectionString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a>]]

---

##### `content_share_force_disabled_input`<sup>Optional</sup> <a name="content_share_force_disabled_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.contentShareForceDisabledInput"></a>

```python
content_share_force_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `daily_memory_time_quota_input`<sup>Optional</sup> <a name="daily_memory_time_quota_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.dailyMemoryTimeQuotaInput"></a>

```python
daily_memory_time_quota_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `functions_extension_version_input`<sup>Optional</sup> <a name="functions_extension_version_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.functionsExtensionVersionInput"></a>

```python
functions_extension_version_input: str
```

- *Type:* str

---

##### `https_only_input`<sup>Optional</sup> <a name="https_only_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.httpsOnlyInput"></a>

```python
https_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.identityInput"></a>

```python
identity_input: WindowsFunctionAppIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity">WindowsFunctionAppIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_reference_identity_id_input`<sup>Optional</sup> <a name="key_vault_reference_identity_id_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.keyVaultReferenceIdentityIdInput"></a>

```python
key_vault_reference_identity_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `service_plan_id_input`<sup>Optional</sup> <a name="service_plan_id_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.servicePlanIdInput"></a>

```python
service_plan_id_input: str
```

- *Type:* str

---

##### `site_config_input`<sup>Optional</sup> <a name="site_config_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.siteConfigInput"></a>

```python
site_config_input: WindowsFunctionAppSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig">WindowsFunctionAppSiteConfig</a>

---

##### `sticky_settings_input`<sup>Optional</sup> <a name="sticky_settings_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.stickySettingsInput"></a>

```python
sticky_settings_input: WindowsFunctionAppStickySettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings">WindowsFunctionAppStickySettings</a>

---

##### `storage_account_access_key_input`<sup>Optional</sup> <a name="storage_account_access_key_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountAccessKeyInput"></a>

```python
storage_account_access_key_input: str
```

- *Type:* str

---

##### `storage_account_input`<sup>Optional</sup> <a name="storage_account_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountInput"></a>

```python
storage_account_input: typing.Union[IResolvable, typing.List[WindowsFunctionAppStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a>]]

---

##### `storage_account_name_input`<sup>Optional</sup> <a name="storage_account_name_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountNameInput"></a>

```python
storage_account_name_input: str
```

- *Type:* str

---

##### `storage_key_vault_secret_id_input`<sup>Optional</sup> <a name="storage_key_vault_secret_id_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageKeyVaultSecretIdInput"></a>

```python
storage_key_vault_secret_id_input: str
```

- *Type:* str

---

##### `storage_uses_managed_identity_input`<sup>Optional</sup> <a name="storage_uses_managed_identity_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageUsesManagedIdentityInput"></a>

```python
storage_uses_managed_identity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[WindowsFunctionAppTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts">WindowsFunctionAppTimeouts</a>, cdktf.IResolvable]

---

##### `virtual_network_subnet_id_input`<sup>Optional</sup> <a name="virtual_network_subnet_id_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.virtualNetworkSubnetIdInput"></a>

```python
virtual_network_subnet_id_input: str
```

- *Type:* str

---

##### `app_settings`<sup>Required</sup> <a name="app_settings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.appSettings"></a>

```python
app_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `builtin_logging_enabled`<sup>Required</sup> <a name="builtin_logging_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.builtinLoggingEnabled"></a>

```python
builtin_logging_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_certificate_enabled`<sup>Required</sup> <a name="client_certificate_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateEnabled"></a>

```python
client_certificate_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_certificate_exclusion_paths`<sup>Required</sup> <a name="client_certificate_exclusion_paths" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateExclusionPaths"></a>

```python
client_certificate_exclusion_paths: str
```

- *Type:* str

---

##### `client_certificate_mode`<sup>Required</sup> <a name="client_certificate_mode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.clientCertificateMode"></a>

```python
client_certificate_mode: str
```

- *Type:* str

---

##### `content_share_force_disabled`<sup>Required</sup> <a name="content_share_force_disabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.contentShareForceDisabled"></a>

```python
content_share_force_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `daily_memory_time_quota`<sup>Required</sup> <a name="daily_memory_time_quota" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.dailyMemoryTimeQuota"></a>

```python
daily_memory_time_quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `functions_extension_version`<sup>Required</sup> <a name="functions_extension_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.functionsExtensionVersion"></a>

```python
functions_extension_version: str
```

- *Type:* str

---

##### `https_only`<sup>Required</sup> <a name="https_only" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.httpsOnly"></a>

```python
https_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_vault_reference_identity_id`<sup>Required</sup> <a name="key_vault_reference_identity_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.keyVaultReferenceIdentityId"></a>

```python
key_vault_reference_identity_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `service_plan_id`<sup>Required</sup> <a name="service_plan_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.servicePlanId"></a>

```python
service_plan_id: str
```

- *Type:* str

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

---

##### `storage_key_vault_secret_id`<sup>Required</sup> <a name="storage_key_vault_secret_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageKeyVaultSecretId"></a>

```python
storage_key_vault_secret_id: str
```

- *Type:* str

---

##### `storage_uses_managed_identity`<sup>Required</sup> <a name="storage_uses_managed_identity" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.storageUsesManagedIdentity"></a>

```python
storage_uses_managed_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WindowsFunctionAppAuthSettings <a name="WindowsFunctionAppAuthSettings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppAuthSettings(
  enabled: typing.Union[bool, IResolvable],
  active_directory: WindowsFunctionAppAuthSettingsActiveDirectory = None,
  additional_login_parameters: typing.Mapping[str] = None,
  allowed_external_redirect_urls: typing.List[str] = None,
  default_provider: str = None,
  facebook: WindowsFunctionAppAuthSettingsFacebook = None,
  github: WindowsFunctionAppAuthSettingsGithub = None,
  google: WindowsFunctionAppAuthSettingsGoogle = None,
  issuer: str = None,
  microsoft: WindowsFunctionAppAuthSettingsMicrosoft = None,
  runtime_version: str = None,
  token_refresh_extension_hours: typing.Union[int, float] = None,
  token_store_enabled: typing.Union[bool, IResolvable] = None,
  twitter: WindowsFunctionAppAuthSettingsTwitter = None,
  unauthenticated_client_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the Authentication / Authorization feature be enabled? |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.activeDirectory">active_directory</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory">WindowsFunctionAppAuthSettingsActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.additionalLoginParameters">additional_login_parameters</a></code> | <code>typing.Mapping[str]</code> | Specifies a map of Login Parameters to send to the OpenID Connect authorization endpoint when a user logs in. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.allowedExternalRedirectUrls">allowed_external_redirect_urls</a></code> | <code>typing.List[str]</code> | Specifies a list of External URLs that can be redirected to as part of logging in or logging out of the Windows Web App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.defaultProvider">default_provider</a></code> | <code>str</code> | The default authentication provider to use when multiple providers are configured. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook">WindowsFunctionAppAuthSettingsFacebook</a></code> | facebook block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.github">github</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub">WindowsFunctionAppAuthSettingsGithub</a></code> | github block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle">WindowsFunctionAppAuthSettingsGoogle</a></code> | google block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.issuer">issuer</a></code> | <code>str</code> | The OpenID Connect Issuer URI that represents the entity which issues access tokens. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft">WindowsFunctionAppAuthSettingsMicrosoft</a></code> | microsoft block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | The RuntimeVersion of the Authentication / Authorization feature in use. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.tokenRefreshExtensionHours">token_refresh_extension_hours</a></code> | <code>typing.Union[int, float]</code> | The number of hours after session token expiration that a session token can be used to call the token refresh API. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.tokenStoreEnabled">token_store_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the Windows Web App durably store platform-specific security tokens that are obtained during login flows? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter">WindowsFunctionAppAuthSettingsTwitter</a></code> | twitter block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.unauthenticatedClientAction">unauthenticated_client_action</a></code> | <code>str</code> | The action to take when an unauthenticated client attempts to access the app. Possible values include: `RedirectToLoginPage`, `AllowAnonymous`. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the Authentication / Authorization feature be enabled?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#enabled WindowsFunctionApp#enabled}

---

##### `active_directory`<sup>Optional</sup> <a name="active_directory" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.activeDirectory"></a>

```python
active_directory: WindowsFunctionAppAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory">WindowsFunctionAppAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#active_directory WindowsFunctionApp#active_directory}

---

##### `additional_login_parameters`<sup>Optional</sup> <a name="additional_login_parameters" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.additionalLoginParameters"></a>

```python
additional_login_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies a map of Login Parameters to send to the OpenID Connect authorization endpoint when a user logs in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#additional_login_parameters WindowsFunctionApp#additional_login_parameters}

---

##### `allowed_external_redirect_urls`<sup>Optional</sup> <a name="allowed_external_redirect_urls" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.allowedExternalRedirectUrls"></a>

```python
allowed_external_redirect_urls: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a list of External URLs that can be redirected to as part of logging in or logging out of the Windows Web App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#allowed_external_redirect_urls WindowsFunctionApp#allowed_external_redirect_urls}

---

##### `default_provider`<sup>Optional</sup> <a name="default_provider" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.defaultProvider"></a>

```python
default_provider: str
```

- *Type:* str

The default authentication provider to use when multiple providers are configured.

Possible values include: `AzureActiveDirectory`, `Facebook`, `Google`, `MicrosoftAccount`, `Twitter`, `Github`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#default_provider WindowsFunctionApp#default_provider}

---

##### `facebook`<sup>Optional</sup> <a name="facebook" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.facebook"></a>

```python
facebook: WindowsFunctionAppAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook">WindowsFunctionAppAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#facebook WindowsFunctionApp#facebook}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.github"></a>

```python
github: WindowsFunctionAppAuthSettingsGithub
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub">WindowsFunctionAppAuthSettingsGithub</a>

github block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#github WindowsFunctionApp#github}

---

##### `google`<sup>Optional</sup> <a name="google" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.google"></a>

```python
google: WindowsFunctionAppAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle">WindowsFunctionAppAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#google WindowsFunctionApp#google}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

The OpenID Connect Issuer URI that represents the entity which issues access tokens.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#issuer WindowsFunctionApp#issuer}

---

##### `microsoft`<sup>Optional</sup> <a name="microsoft" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.microsoft"></a>

```python
microsoft: WindowsFunctionAppAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft">WindowsFunctionAppAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#microsoft WindowsFunctionApp#microsoft}

---

##### `runtime_version`<sup>Optional</sup> <a name="runtime_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

The RuntimeVersion of the Authentication / Authorization feature in use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#runtime_version WindowsFunctionApp#runtime_version}

---

##### `token_refresh_extension_hours`<sup>Optional</sup> <a name="token_refresh_extension_hours" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.tokenRefreshExtensionHours"></a>

```python
token_refresh_extension_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of hours after session token expiration that a session token can be used to call the token refresh API.

Defaults to `72` hours.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#token_refresh_extension_hours WindowsFunctionApp#token_refresh_extension_hours}

---

##### `token_store_enabled`<sup>Optional</sup> <a name="token_store_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.tokenStoreEnabled"></a>

```python
token_store_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the Windows Web App durably store platform-specific security tokens that are obtained during login flows? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#token_store_enabled WindowsFunctionApp#token_store_enabled}

---

##### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.twitter"></a>

```python
twitter: WindowsFunctionAppAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter">WindowsFunctionAppAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#twitter WindowsFunctionApp#twitter}

---

##### `unauthenticated_client_action`<sup>Optional</sup> <a name="unauthenticated_client_action" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings.property.unauthenticatedClientAction"></a>

```python
unauthenticated_client_action: str
```

- *Type:* str

The action to take when an unauthenticated client attempts to access the app. Possible values include: `RedirectToLoginPage`, `AllowAnonymous`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#unauthenticated_client_action WindowsFunctionApp#unauthenticated_client_action}

---

### WindowsFunctionAppAuthSettingsActiveDirectory <a name="WindowsFunctionAppAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory(
  client_id: str,
  allowed_audiences: typing.List[str] = None,
  client_secret: str = None,
  client_secret_setting_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory.property.clientId">client_id</a></code> | <code>str</code> | The ID of the Client to use to authenticate with Azure Active Directory. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory.property.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | Specifies a list of Allowed audience values to consider when validating JWTs issued by Azure Active Directory. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory.property.clientSecret">client_secret</a></code> | <code>str</code> | The Client Secret for the Client ID. Cannot be used with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory.property.clientSecretSettingName">client_secret_setting_name</a></code> | <code>str</code> | The App Setting name that contains the client secret of the Client. Cannot be used with `client_secret`. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The ID of the Client to use to authenticate with Azure Active Directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_id WindowsFunctionApp#client_id}

---

##### `allowed_audiences`<sup>Optional</sup> <a name="allowed_audiences" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory.property.allowedAudiences"></a>

```python
allowed_audiences: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a list of Allowed audience values to consider when validating JWTs issued by Azure Active Directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#allowed_audiences WindowsFunctionApp#allowed_audiences}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The Client Secret for the Client ID. Cannot be used with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret WindowsFunctionApp#client_secret}

---

##### `client_secret_setting_name`<sup>Optional</sup> <a name="client_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory.property.clientSecretSettingName"></a>

```python
client_secret_setting_name: str
```

- *Type:* str

The App Setting name that contains the client secret of the Client. Cannot be used with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}

---

### WindowsFunctionAppAuthSettingsFacebook <a name="WindowsFunctionAppAuthSettingsFacebook" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook(
  app_id: str,
  app_secret: str = None,
  app_secret_setting_name: str = None,
  oauth_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook.property.appId">app_id</a></code> | <code>str</code> | The App ID of the Facebook app used for login. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook.property.appSecret">app_secret</a></code> | <code>str</code> | The App Secret of the Facebook app used for Facebook Login. Cannot be specified with `app_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook.property.appSecretSettingName">app_secret_setting_name</a></code> | <code>str</code> | The app setting name that contains the `app_secret` value used for Facebook Login. Cannot be specified with `app_secret`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | Specifies a list of OAuth 2.0 scopes to be requested as part of Facebook Login authentication. |

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook.property.appId"></a>

```python
app_id: str
```

- *Type:* str

The App ID of the Facebook app used for login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_id WindowsFunctionApp#app_id}

---

##### `app_secret`<sup>Optional</sup> <a name="app_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook.property.appSecret"></a>

```python
app_secret: str
```

- *Type:* str

The App Secret of the Facebook app used for Facebook Login. Cannot be specified with `app_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_secret WindowsFunctionApp#app_secret}

---

##### `app_secret_setting_name`<sup>Optional</sup> <a name="app_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook.property.appSecretSettingName"></a>

```python
app_secret_setting_name: str
```

- *Type:* str

The app setting name that contains the `app_secret` value used for Facebook Login. Cannot be specified with `app_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_secret_setting_name WindowsFunctionApp#app_secret_setting_name}

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a list of OAuth 2.0 scopes to be requested as part of Facebook Login authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#oauth_scopes WindowsFunctionApp#oauth_scopes}

---

### WindowsFunctionAppAuthSettingsGithub <a name="WindowsFunctionAppAuthSettingsGithub" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub(
  client_id: str,
  client_secret: str = None,
  client_secret_setting_name: str = None,
  oauth_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub.property.clientId">client_id</a></code> | <code>str</code> | The ID of the GitHub app used for login. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub.property.clientSecret">client_secret</a></code> | <code>str</code> | The Client Secret of the GitHub app used for GitHub Login. Cannot be specified with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub.property.clientSecretSettingName">client_secret_setting_name</a></code> | <code>str</code> | The app setting name that contains the `client_secret` value used for GitHub Login. Cannot be specified with `client_secret`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | Specifies a list of OAuth 2.0 scopes that will be requested as part of GitHub Login authentication. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The ID of the GitHub app used for login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_id WindowsFunctionApp#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The Client Secret of the GitHub app used for GitHub Login. Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret WindowsFunctionApp#client_secret}

---

##### `client_secret_setting_name`<sup>Optional</sup> <a name="client_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub.property.clientSecretSettingName"></a>

```python
client_secret_setting_name: str
```

- *Type:* str

The app setting name that contains the `client_secret` value used for GitHub Login. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a list of OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#oauth_scopes WindowsFunctionApp#oauth_scopes}

---

### WindowsFunctionAppAuthSettingsGoogle <a name="WindowsFunctionAppAuthSettingsGoogle" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle(
  client_id: str,
  client_secret: str = None,
  client_secret_setting_name: str = None,
  oauth_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle.property.clientId">client_id</a></code> | <code>str</code> | The OpenID Connect Client ID for the Google web application. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle.property.clientSecret">client_secret</a></code> | <code>str</code> | The client secret associated with the Google web application.  Cannot be specified with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle.property.clientSecretSettingName">client_secret_setting_name</a></code> | <code>str</code> | The app setting name that contains the `client_secret` value used for Google Login. Cannot be specified with `client_secret`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | Specifies a list of OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication. If not specified, "openid", "profile", and "email" are used as default scopes. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The OpenID Connect Client ID for the Google web application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_id WindowsFunctionApp#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The client secret associated with the Google web application.  Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret WindowsFunctionApp#client_secret}

---

##### `client_secret_setting_name`<sup>Optional</sup> <a name="client_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle.property.clientSecretSettingName"></a>

```python
client_secret_setting_name: str
```

- *Type:* str

The app setting name that contains the `client_secret` value used for Google Login. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a list of OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication. If not specified, "openid", "profile", and "email" are used as default scopes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#oauth_scopes WindowsFunctionApp#oauth_scopes}

---

### WindowsFunctionAppAuthSettingsMicrosoft <a name="WindowsFunctionAppAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft(
  client_id: str,
  client_secret: str = None,
  client_secret_setting_name: str = None,
  oauth_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft.property.clientId">client_id</a></code> | <code>str</code> | The OAuth 2.0 client ID that was created for the app used for authentication. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft.property.clientSecret">client_secret</a></code> | <code>str</code> | The OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft.property.clientSecretSettingName">client_secret_setting_name</a></code> | <code>str</code> | The app setting name containing the OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | The list of OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication. If not specified, `wl.basic` is used as the default scope. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The OAuth 2.0 client ID that was created for the app used for authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_id WindowsFunctionApp#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret WindowsFunctionApp#client_secret}

---

##### `client_secret_setting_name`<sup>Optional</sup> <a name="client_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft.property.clientSecretSettingName"></a>

```python
client_secret_setting_name: str
```

- *Type:* str

The app setting name containing the OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

The list of OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication. If not specified, `wl.basic` is used as the default scope.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#oauth_scopes WindowsFunctionApp#oauth_scopes}

---

### WindowsFunctionAppAuthSettingsTwitter <a name="WindowsFunctionAppAuthSettingsTwitter" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter(
  consumer_key: str,
  consumer_secret: str = None,
  consumer_secret_setting_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter.property.consumerKey">consumer_key</a></code> | <code>str</code> | The OAuth 1.0a consumer key of the Twitter application used for sign-in. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | The OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret_setting_name`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter.property.consumerSecretSettingName">consumer_secret_setting_name</a></code> | <code>str</code> | The app setting name that contains the OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret`. |

---

##### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

The OAuth 1.0a consumer key of the Twitter application used for sign-in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#consumer_key WindowsFunctionApp#consumer_key}

---

##### `consumer_secret`<sup>Optional</sup> <a name="consumer_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

The OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#consumer_secret WindowsFunctionApp#consumer_secret}

---

##### `consumer_secret_setting_name`<sup>Optional</sup> <a name="consumer_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter.property.consumerSecretSettingName"></a>

```python
consumer_secret_setting_name: str
```

- *Type:* str

The app setting name that contains the OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#consumer_secret_setting_name WindowsFunctionApp#consumer_secret_setting_name}

---

### WindowsFunctionAppBackup <a name="WindowsFunctionAppBackup" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppBackup(
  name: str,
  schedule: WindowsFunctionAppBackupSchedule,
  storage_account_url: str,
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup.property.name">name</a></code> | <code>str</code> | The name which should be used for this Backup. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule">WindowsFunctionAppBackupSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup.property.storageAccountUrl">storage_account_url</a></code> | <code>str</code> | The SAS URL to the container. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should this backup job be enabled? |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup.property.name"></a>

```python
name: str
```

- *Type:* str

The name which should be used for this Backup.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup.property.schedule"></a>

```python
schedule: WindowsFunctionAppBackupSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule">WindowsFunctionAppBackupSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#schedule WindowsFunctionApp#schedule}

---

##### `storage_account_url`<sup>Required</sup> <a name="storage_account_url" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup.property.storageAccountUrl"></a>

```python
storage_account_url: str
```

- *Type:* str

The SAS URL to the container.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#storage_account_url WindowsFunctionApp#storage_account_url}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should this backup job be enabled?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#enabled WindowsFunctionApp#enabled}

---

### WindowsFunctionAppBackupSchedule <a name="WindowsFunctionAppBackupSchedule" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppBackupSchedule(
  frequency_interval: typing.Union[int, float],
  frequency_unit: str,
  keep_at_least_one_backup: typing.Union[bool, IResolvable] = None,
  retention_period_days: typing.Union[int, float] = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.frequencyInterval">frequency_interval</a></code> | <code>typing.Union[int, float]</code> | How often the backup should be executed (e.g. for weekly backup, this should be set to `7` and `frequency_unit` should be set to `Day`). |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.frequencyUnit">frequency_unit</a></code> | <code>str</code> | The unit of time for how often the backup should take place. Possible values include: `Day` and `Hour`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.keepAtLeastOneBackup">keep_at_least_one_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the service keep at least one backup, regardless of age of backup. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.retentionPeriodDays">retention_period_days</a></code> | <code>typing.Union[int, float]</code> | After how many days backups should be deleted. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.startTime">start_time</a></code> | <code>str</code> | When the schedule should start working in RFC-3339 format. |

---

##### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.frequencyInterval"></a>

```python
frequency_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often the backup should be executed (e.g. for weekly backup, this should be set to `7` and `frequency_unit` should be set to `Day`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#frequency_interval WindowsFunctionApp#frequency_interval}

---

##### `frequency_unit`<sup>Required</sup> <a name="frequency_unit" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.frequencyUnit"></a>

```python
frequency_unit: str
```

- *Type:* str

The unit of time for how often the backup should take place. Possible values include: `Day` and `Hour`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#frequency_unit WindowsFunctionApp#frequency_unit}

---

##### `keep_at_least_one_backup`<sup>Optional</sup> <a name="keep_at_least_one_backup" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.keepAtLeastOneBackup"></a>

```python
keep_at_least_one_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the service keep at least one backup, regardless of age of backup. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#keep_at_least_one_backup WindowsFunctionApp#keep_at_least_one_backup}

---

##### `retention_period_days`<sup>Optional</sup> <a name="retention_period_days" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.retentionPeriodDays"></a>

```python
retention_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

After how many days backups should be deleted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#retention_period_days WindowsFunctionApp#retention_period_days}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

When the schedule should start working in RFC-3339 format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#start_time WindowsFunctionApp#start_time}

---

### WindowsFunctionAppConfig <a name="WindowsFunctionAppConfig" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  service_plan_id: str,
  site_config: WindowsFunctionAppSiteConfig,
  app_settings: typing.Mapping[str] = None,
  auth_settings: WindowsFunctionAppAuthSettings = None,
  backup: WindowsFunctionAppBackup = None,
  builtin_logging_enabled: typing.Union[bool, IResolvable] = None,
  client_certificate_enabled: typing.Union[bool, IResolvable] = None,
  client_certificate_exclusion_paths: str = None,
  client_certificate_mode: str = None,
  connection_string: typing.Union[IResolvable, typing.List[WindowsFunctionAppConnectionString]] = None,
  content_share_force_disabled: typing.Union[bool, IResolvable] = None,
  daily_memory_time_quota: typing.Union[int, float] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  functions_extension_version: str = None,
  https_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: WindowsFunctionAppIdentity = None,
  key_vault_reference_identity_id: str = None,
  sticky_settings: WindowsFunctionAppStickySettings = None,
  storage_account: typing.Union[IResolvable, typing.List[WindowsFunctionAppStorageAccount]] = None,
  storage_account_access_key: str = None,
  storage_account_name: str = None,
  storage_key_vault_secret_id: str = None,
  storage_uses_managed_identity: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: WindowsFunctionAppTimeouts = None,
  virtual_network_subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#location WindowsFunctionApp#location}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.name">name</a></code> | <code>str</code> | Specifies the name of the Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#resource_group_name WindowsFunctionApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.servicePlanId">service_plan_id</a></code> | <code>str</code> | The ID of the App Service Plan within which to create this Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig">WindowsFunctionAppSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | A map of key-value pairs for [App Settings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-app-settings) and custom values. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.authSettings">auth_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings">WindowsFunctionAppAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup">WindowsFunctionAppBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.builtinLoggingEnabled">builtin_logging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should built in logging be enabled. Configures `AzureWebJobsDashboard` app setting based on the configured storage setting. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.clientCertificateEnabled">client_certificate_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the function app use Client Certificates. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.clientCertificateExclusionPaths">client_certificate_exclusion_paths</a></code> | <code>str</code> | Paths to exclude when using client certificates, separated by ; |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.clientCertificateMode">client_certificate_mode</a></code> | <code>str</code> | The mode of the Function App's client certificates requirement for incoming requests. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.connectionString">connection_string</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a>]]</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.contentShareForceDisabled">content_share_force_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Force disable the content share settings. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.dailyMemoryTimeQuota">daily_memory_time_quota</a></code> | <code>typing.Union[int, float]</code> | The amount of memory in gigabyte-seconds that your application is allowed to consume per day. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the Windows Function App enabled. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.functionsExtensionVersion">functions_extension_version</a></code> | <code>str</code> | The runtime version associated with the Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Can the Function App only be accessed via HTTPS? |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#id WindowsFunctionApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity">WindowsFunctionAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.keyVaultReferenceIdentityId">key_vault_reference_identity_id</a></code> | <code>str</code> | The User Assigned Identity to use for Key Vault access. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.stickySettings">sticky_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings">WindowsFunctionAppStickySettings</a></code> | sticky_settings block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageAccount">storage_account</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a>]]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | The access key which will be used to access the storage account for the Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | The backend storage account name which will be used by this Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageKeyVaultSecretId">storage_key_vault_secret_id</a></code> | <code>str</code> | The Key Vault Secret ID, including version, that contains the Connection String to connect to the storage account for this Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageUsesManagedIdentity">storage_uses_managed_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the Function App use its Managed Identity to access storage? |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#tags WindowsFunctionApp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts">WindowsFunctionAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#virtual_network_subnet_id WindowsFunctionApp#virtual_network_subnet_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#location WindowsFunctionApp#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#resource_group_name WindowsFunctionApp#resource_group_name}.

---

##### `service_plan_id`<sup>Required</sup> <a name="service_plan_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.servicePlanId"></a>

```python
service_plan_id: str
```

- *Type:* str

The ID of the App Service Plan within which to create this Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#service_plan_id WindowsFunctionApp#service_plan_id}

---

##### `site_config`<sup>Required</sup> <a name="site_config" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.siteConfig"></a>

```python
site_config: WindowsFunctionAppSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig">WindowsFunctionAppSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#site_config WindowsFunctionApp#site_config}

---

##### `app_settings`<sup>Optional</sup> <a name="app_settings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.appSettings"></a>

```python
app_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of key-value pairs for [App Settings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-app-settings) and custom values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_settings WindowsFunctionApp#app_settings}

---

##### `auth_settings`<sup>Optional</sup> <a name="auth_settings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.authSettings"></a>

```python
auth_settings: WindowsFunctionAppAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings">WindowsFunctionAppAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#auth_settings WindowsFunctionApp#auth_settings}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.backup"></a>

```python
backup: WindowsFunctionAppBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup">WindowsFunctionAppBackup</a>

backup block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#backup WindowsFunctionApp#backup}

---

##### `builtin_logging_enabled`<sup>Optional</sup> <a name="builtin_logging_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.builtinLoggingEnabled"></a>

```python
builtin_logging_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should built in logging be enabled. Configures `AzureWebJobsDashboard` app setting based on the configured storage setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#builtin_logging_enabled WindowsFunctionApp#builtin_logging_enabled}

---

##### `client_certificate_enabled`<sup>Optional</sup> <a name="client_certificate_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.clientCertificateEnabled"></a>

```python
client_certificate_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the function app use Client Certificates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_certificate_enabled WindowsFunctionApp#client_certificate_enabled}

---

##### `client_certificate_exclusion_paths`<sup>Optional</sup> <a name="client_certificate_exclusion_paths" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.clientCertificateExclusionPaths"></a>

```python
client_certificate_exclusion_paths: str
```

- *Type:* str

Paths to exclude when using client certificates, separated by ;

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_certificate_exclusion_paths WindowsFunctionApp#client_certificate_exclusion_paths}

---

##### `client_certificate_mode`<sup>Optional</sup> <a name="client_certificate_mode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.clientCertificateMode"></a>

```python
client_certificate_mode: str
```

- *Type:* str

The mode of the Function App's client certificates requirement for incoming requests.

Possible values are `Required`, `Optional`, and `OptionalInteractiveUser`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_certificate_mode WindowsFunctionApp#client_certificate_mode}

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.connectionString"></a>

```python
connection_string: typing.Union[IResolvable, typing.List[WindowsFunctionAppConnectionString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a>]]

connection_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#connection_string WindowsFunctionApp#connection_string}

---

##### `content_share_force_disabled`<sup>Optional</sup> <a name="content_share_force_disabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.contentShareForceDisabled"></a>

```python
content_share_force_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Force disable the content share settings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#content_share_force_disabled WindowsFunctionApp#content_share_force_disabled}

---

##### `daily_memory_time_quota`<sup>Optional</sup> <a name="daily_memory_time_quota" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.dailyMemoryTimeQuota"></a>

```python
daily_memory_time_quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of memory in gigabyte-seconds that your application is allowed to consume per day.

Setting this value only affects function apps in Consumption Plans.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#daily_memory_time_quota WindowsFunctionApp#daily_memory_time_quota}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the Windows Function App enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#enabled WindowsFunctionApp#enabled}

---

##### `functions_extension_version`<sup>Optional</sup> <a name="functions_extension_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.functionsExtensionVersion"></a>

```python
functions_extension_version: str
```

- *Type:* str

The runtime version associated with the Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#functions_extension_version WindowsFunctionApp#functions_extension_version}

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.httpsOnly"></a>

```python
https_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Can the Function App only be accessed via HTTPS?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#https_only WindowsFunctionApp#https_only}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#id WindowsFunctionApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.identity"></a>

```python
identity: WindowsFunctionAppIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity">WindowsFunctionAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#identity WindowsFunctionApp#identity}

---

##### `key_vault_reference_identity_id`<sup>Optional</sup> <a name="key_vault_reference_identity_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.keyVaultReferenceIdentityId"></a>

```python
key_vault_reference_identity_id: str
```

- *Type:* str

The User Assigned Identity to use for Key Vault access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#key_vault_reference_identity_id WindowsFunctionApp#key_vault_reference_identity_id}

---

##### `sticky_settings`<sup>Optional</sup> <a name="sticky_settings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.stickySettings"></a>

```python
sticky_settings: WindowsFunctionAppStickySettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings">WindowsFunctionAppStickySettings</a>

sticky_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#sticky_settings WindowsFunctionApp#sticky_settings}

---

##### `storage_account`<sup>Optional</sup> <a name="storage_account" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageAccount"></a>

```python
storage_account: typing.Union[IResolvable, typing.List[WindowsFunctionAppStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a>]]

storage_account block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#storage_account WindowsFunctionApp#storage_account}

---

##### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

The access key which will be used to access the storage account for the Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#storage_account_access_key WindowsFunctionApp#storage_account_access_key}

---

##### `storage_account_name`<sup>Optional</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

The backend storage account name which will be used by this Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#storage_account_name WindowsFunctionApp#storage_account_name}

---

##### `storage_key_vault_secret_id`<sup>Optional</sup> <a name="storage_key_vault_secret_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageKeyVaultSecretId"></a>

```python
storage_key_vault_secret_id: str
```

- *Type:* str

The Key Vault Secret ID, including version, that contains the Connection String to connect to the storage account for this Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#storage_key_vault_secret_id WindowsFunctionApp#storage_key_vault_secret_id}

---

##### `storage_uses_managed_identity`<sup>Optional</sup> <a name="storage_uses_managed_identity" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.storageUsesManagedIdentity"></a>

```python
storage_uses_managed_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the Function App use its Managed Identity to access storage?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#storage_uses_managed_identity WindowsFunctionApp#storage_uses_managed_identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#tags WindowsFunctionApp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.timeouts"></a>

```python
timeouts: WindowsFunctionAppTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts">WindowsFunctionAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#timeouts WindowsFunctionApp#timeouts}

---

##### `virtual_network_subnet_id`<sup>Optional</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConfig.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#virtual_network_subnet_id WindowsFunctionApp#virtual_network_subnet_id}.

---

### WindowsFunctionAppConnectionString <a name="WindowsFunctionAppConnectionString" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppConnectionString(
  name: str,
  type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString.property.name">name</a></code> | <code>str</code> | The name which should be used for this Connection. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString.property.type">type</a></code> | <code>str</code> | Type of database. Possible values include: `MySQL`, `SQLServer`, `SQLAzure`, `Custom`, `NotificationHub`, `ServiceBus`, `EventHub`, `APIHub`, `DocDb`, `RedisCache`, and `PostgreSQL`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString.property.value">value</a></code> | <code>str</code> | The connection string value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString.property.name"></a>

```python
name: str
```

- *Type:* str

The name which should be used for this Connection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString.property.type"></a>

```python
type: str
```

- *Type:* str

Type of database. Possible values include: `MySQL`, `SQLServer`, `SQLAzure`, `Custom`, `NotificationHub`, `ServiceBus`, `EventHub`, `APIHub`, `DocDb`, `RedisCache`, and `PostgreSQL`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#type WindowsFunctionApp#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString.property.value"></a>

```python
value: str
```

- *Type:* str

The connection string value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#value WindowsFunctionApp#value}

---

### WindowsFunctionAppIdentity <a name="WindowsFunctionAppIdentity" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#type WindowsFunctionApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#identity_ids WindowsFunctionApp#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#type WindowsFunctionApp#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#identity_ids WindowsFunctionApp#identity_ids}.

---

### WindowsFunctionAppSiteConfig <a name="WindowsFunctionAppSiteConfig" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfig(
  always_on: typing.Union[bool, IResolvable] = None,
  api_definition_url: str = None,
  api_management_api_id: str = None,
  app_command_line: str = None,
  application_insights_connection_string: str = None,
  application_insights_key: str = None,
  application_stack: WindowsFunctionAppSiteConfigApplicationStack = None,
  app_scale_limit: typing.Union[int, float] = None,
  app_service_logs: WindowsFunctionAppSiteConfigAppServiceLogs = None,
  cors: WindowsFunctionAppSiteConfigCors = None,
  default_documents: typing.List[str] = None,
  elastic_instance_minimum: typing.Union[int, float] = None,
  ftps_state: str = None,
  health_check_eviction_time_in_min: typing.Union[int, float] = None,
  health_check_path: str = None,
  http2_enabled: typing.Union[bool, IResolvable] = None,
  ip_restriction: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigIpRestriction]] = None,
  load_balancing_mode: str = None,
  managed_pipeline_mode: str = None,
  minimum_tls_version: str = None,
  pre_warmed_instance_count: typing.Union[int, float] = None,
  remote_debugging_enabled: typing.Union[bool, IResolvable] = None,
  remote_debugging_version: str = None,
  runtime_scale_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  scm_ip_restriction: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigScmIpRestriction]] = None,
  scm_minimum_tls_version: str = None,
  scm_use_main_ip_restriction: typing.Union[bool, IResolvable] = None,
  use32_bit_worker: typing.Union[bool, IResolvable] = None,
  vnet_route_all_enabled: typing.Union[bool, IResolvable] = None,
  websockets_enabled: typing.Union[bool, IResolvable] = None,
  worker_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.alwaysOn">always_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If this Windows Web App is Always On enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.apiDefinitionUrl">api_definition_url</a></code> | <code>str</code> | The URL of the API definition that describes this Windows Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.apiManagementApiId">api_management_api_id</a></code> | <code>str</code> | The ID of the API Management API for this Windows Function App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.appCommandLine">app_command_line</a></code> | <code>str</code> | The program and any arguments used to launch this app via the command line. (Example `node myapp.js`). |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.applicationInsightsConnectionString">application_insights_connection_string</a></code> | <code>str</code> | The Connection String for linking the Windows Function App to Application Insights. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.applicationInsightsKey">application_insights_key</a></code> | <code>str</code> | The Instrumentation Key for connecting the Windows Function App to Application Insights. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.applicationStack">application_stack</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack">WindowsFunctionAppSiteConfigApplicationStack</a></code> | application_stack block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.appScaleLimit">app_scale_limit</a></code> | <code>typing.Union[int, float]</code> | The number of workers this function app can scale out to. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.appServiceLogs">app_service_logs</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs">WindowsFunctionAppSiteConfigAppServiceLogs</a></code> | app_service_logs block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors">WindowsFunctionAppSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.defaultDocuments">default_documents</a></code> | <code>typing.List[str]</code> | Specifies a list of Default Documents for the Windows Web App. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.elasticInstanceMinimum">elastic_instance_minimum</a></code> | <code>typing.Union[int, float]</code> | The number of minimum instances for this Windows Function App. Only affects apps on Elastic Premium plans. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.ftpsState">ftps_state</a></code> | <code>str</code> | State of FTP / FTPS service for this function app. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.healthCheckEvictionTimeInMin">health_check_eviction_time_in_min</a></code> | <code>typing.Union[int, float]</code> | The amount of time in minutes that a node is unhealthy before being removed from the load balancer. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | The path to be checked for this function app health. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.http2Enabled">http2_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the http2 protocol should be enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.ipRestriction">ip_restriction</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction">WindowsFunctionAppSiteConfigIpRestriction</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#ip_restriction WindowsFunctionApp#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.loadBalancingMode">load_balancing_mode</a></code> | <code>str</code> | The Site load balancing mode. Possible values include: `WeightedRoundRobin`, `LeastRequests`, `LeastResponseTime`, `WeightedTotalTraffic`, `RequestHash`, `PerSiteRoundRobin`. Defaults to `LeastRequests` if omitted. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.managedPipelineMode">managed_pipeline_mode</a></code> | <code>str</code> | The Managed Pipeline mode. Possible values include: `Integrated`, `Classic`. Defaults to `Integrated`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.minimumTlsVersion">minimum_tls_version</a></code> | <code>str</code> | The configures the minimum version of TLS required for SSL requests. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.preWarmedInstanceCount">pre_warmed_instance_count</a></code> | <code>typing.Union[int, float]</code> | The number of pre-warmed instances for this function app. Only affects apps on an Elastic Premium plan. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.remoteDebuggingEnabled">remote_debugging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should Remote Debugging be enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.remoteDebuggingVersion">remote_debugging_version</a></code> | <code>str</code> | The Remote Debugging Version. Possible values include `VS2017`, `VS2019`, and `VS2022`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.runtimeScaleMonitoringEnabled">runtime_scale_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should Functions Runtime Scale Monitoring be enabled. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.scmIpRestriction">scm_ip_restriction</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction">WindowsFunctionAppSiteConfigScmIpRestriction</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#scm_ip_restriction WindowsFunctionApp#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.scmMinimumTlsVersion">scm_minimum_tls_version</a></code> | <code>str</code> | Configures the minimum version of TLS required for SSL requests to the SCM site Possible values include: `1.0`, `1.1`, and  `1.2`. Defaults to `1.2`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.scmUseMainIpRestriction">scm_use_main_ip_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the Windows Function App `ip_restriction` configuration be used for the SCM also. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.use32BitWorker">use32_bit_worker</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the Windows Web App use a 32-bit worker. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.vnetRouteAllEnabled">vnet_route_all_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.websocketsEnabled">websockets_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should Web Sockets be enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.workerCount">worker_count</a></code> | <code>typing.Union[int, float]</code> | The number of Workers for this Windows Function App. |

---

##### `always_on`<sup>Optional</sup> <a name="always_on" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.alwaysOn"></a>

```python
always_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If this Windows Web App is Always On enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#always_on WindowsFunctionApp#always_on}

---

##### `api_definition_url`<sup>Optional</sup> <a name="api_definition_url" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.apiDefinitionUrl"></a>

```python
api_definition_url: str
```

- *Type:* str

The URL of the API definition that describes this Windows Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#api_definition_url WindowsFunctionApp#api_definition_url}

---

##### `api_management_api_id`<sup>Optional</sup> <a name="api_management_api_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.apiManagementApiId"></a>

```python
api_management_api_id: str
```

- *Type:* str

The ID of the API Management API for this Windows Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#api_management_api_id WindowsFunctionApp#api_management_api_id}

---

##### `app_command_line`<sup>Optional</sup> <a name="app_command_line" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.appCommandLine"></a>

```python
app_command_line: str
```

- *Type:* str

The program and any arguments used to launch this app via the command line. (Example `node myapp.js`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_command_line WindowsFunctionApp#app_command_line}

---

##### `application_insights_connection_string`<sup>Optional</sup> <a name="application_insights_connection_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.applicationInsightsConnectionString"></a>

```python
application_insights_connection_string: str
```

- *Type:* str

The Connection String for linking the Windows Function App to Application Insights.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#application_insights_connection_string WindowsFunctionApp#application_insights_connection_string}

---

##### `application_insights_key`<sup>Optional</sup> <a name="application_insights_key" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.applicationInsightsKey"></a>

```python
application_insights_key: str
```

- *Type:* str

The Instrumentation Key for connecting the Windows Function App to Application Insights.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#application_insights_key WindowsFunctionApp#application_insights_key}

---

##### `application_stack`<sup>Optional</sup> <a name="application_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.applicationStack"></a>

```python
application_stack: WindowsFunctionAppSiteConfigApplicationStack
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack">WindowsFunctionAppSiteConfigApplicationStack</a>

application_stack block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#application_stack WindowsFunctionApp#application_stack}

---

##### `app_scale_limit`<sup>Optional</sup> <a name="app_scale_limit" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.appScaleLimit"></a>

```python
app_scale_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of workers this function app can scale out to.

Only applicable to apps on the Consumption and Premium plan.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_scale_limit WindowsFunctionApp#app_scale_limit}

---

##### `app_service_logs`<sup>Optional</sup> <a name="app_service_logs" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.appServiceLogs"></a>

```python
app_service_logs: WindowsFunctionAppSiteConfigAppServiceLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs">WindowsFunctionAppSiteConfigAppServiceLogs</a>

app_service_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_service_logs WindowsFunctionApp#app_service_logs}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.cors"></a>

```python
cors: WindowsFunctionAppSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors">WindowsFunctionAppSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#cors WindowsFunctionApp#cors}

---

##### `default_documents`<sup>Optional</sup> <a name="default_documents" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.defaultDocuments"></a>

```python
default_documents: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a list of Default Documents for the Windows Web App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#default_documents WindowsFunctionApp#default_documents}

---

##### `elastic_instance_minimum`<sup>Optional</sup> <a name="elastic_instance_minimum" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.elasticInstanceMinimum"></a>

```python
elastic_instance_minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of minimum instances for this Windows Function App. Only affects apps on Elastic Premium plans.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#elastic_instance_minimum WindowsFunctionApp#elastic_instance_minimum}

---

##### `ftps_state`<sup>Optional</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.ftpsState"></a>

```python
ftps_state: str
```

- *Type:* str

State of FTP / FTPS service for this function app.

Possible values include: `AllAllowed`, `FtpsOnly` and `Disabled`. Defaults to `Disabled`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#ftps_state WindowsFunctionApp#ftps_state}

---

##### `health_check_eviction_time_in_min`<sup>Optional</sup> <a name="health_check_eviction_time_in_min" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.healthCheckEvictionTimeInMin"></a>

```python
health_check_eviction_time_in_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time in minutes that a node is unhealthy before being removed from the load balancer.

Possible values are between `2` and `10`. Defaults to `10`. Only valid in conjunction with `health_check_path`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#health_check_eviction_time_in_min WindowsFunctionApp#health_check_eviction_time_in_min}

---

##### `health_check_path`<sup>Optional</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

The path to be checked for this function app health.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#health_check_path WindowsFunctionApp#health_check_path}

---

##### `http2_enabled`<sup>Optional</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.http2Enabled"></a>

```python
http2_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the http2 protocol should be enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#http2_enabled WindowsFunctionApp#http2_enabled}

---

##### `ip_restriction`<sup>Optional</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.ipRestriction"></a>

```python
ip_restriction: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction">WindowsFunctionAppSiteConfigIpRestriction</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#ip_restriction WindowsFunctionApp#ip_restriction}.

---

##### `load_balancing_mode`<sup>Optional</sup> <a name="load_balancing_mode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.loadBalancingMode"></a>

```python
load_balancing_mode: str
```

- *Type:* str

The Site load balancing mode. Possible values include: `WeightedRoundRobin`, `LeastRequests`, `LeastResponseTime`, `WeightedTotalTraffic`, `RequestHash`, `PerSiteRoundRobin`. Defaults to `LeastRequests` if omitted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#load_balancing_mode WindowsFunctionApp#load_balancing_mode}

---

##### `managed_pipeline_mode`<sup>Optional</sup> <a name="managed_pipeline_mode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.managedPipelineMode"></a>

```python
managed_pipeline_mode: str
```

- *Type:* str

The Managed Pipeline mode. Possible values include: `Integrated`, `Classic`. Defaults to `Integrated`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#managed_pipeline_mode WindowsFunctionApp#managed_pipeline_mode}

---

##### `minimum_tls_version`<sup>Optional</sup> <a name="minimum_tls_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.minimumTlsVersion"></a>

```python
minimum_tls_version: str
```

- *Type:* str

The configures the minimum version of TLS required for SSL requests.

Possible values include: `1.0`, `1.1`, and  `1.2`. Defaults to `1.2`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#minimum_tls_version WindowsFunctionApp#minimum_tls_version}

---

##### `pre_warmed_instance_count`<sup>Optional</sup> <a name="pre_warmed_instance_count" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.preWarmedInstanceCount"></a>

```python
pre_warmed_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of pre-warmed instances for this function app. Only affects apps on an Elastic Premium plan.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#pre_warmed_instance_count WindowsFunctionApp#pre_warmed_instance_count}

---

##### `remote_debugging_enabled`<sup>Optional</sup> <a name="remote_debugging_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.remoteDebuggingEnabled"></a>

```python
remote_debugging_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should Remote Debugging be enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#remote_debugging_enabled WindowsFunctionApp#remote_debugging_enabled}

---

##### `remote_debugging_version`<sup>Optional</sup> <a name="remote_debugging_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.remoteDebuggingVersion"></a>

```python
remote_debugging_version: str
```

- *Type:* str

The Remote Debugging Version. Possible values include `VS2017`, `VS2019`, and `VS2022`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#remote_debugging_version WindowsFunctionApp#remote_debugging_version}

---

##### `runtime_scale_monitoring_enabled`<sup>Optional</sup> <a name="runtime_scale_monitoring_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.runtimeScaleMonitoringEnabled"></a>

```python
runtime_scale_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should Functions Runtime Scale Monitoring be enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#runtime_scale_monitoring_enabled WindowsFunctionApp#runtime_scale_monitoring_enabled}

---

##### `scm_ip_restriction`<sup>Optional</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.scmIpRestriction"></a>

```python
scm_ip_restriction: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigScmIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction">WindowsFunctionAppSiteConfigScmIpRestriction</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#scm_ip_restriction WindowsFunctionApp#scm_ip_restriction}.

---

##### `scm_minimum_tls_version`<sup>Optional</sup> <a name="scm_minimum_tls_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.scmMinimumTlsVersion"></a>

```python
scm_minimum_tls_version: str
```

- *Type:* str

Configures the minimum version of TLS required for SSL requests to the SCM site Possible values include: `1.0`, `1.1`, and  `1.2`. Defaults to `1.2`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#scm_minimum_tls_version WindowsFunctionApp#scm_minimum_tls_version}

---

##### `scm_use_main_ip_restriction`<sup>Optional</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.scmUseMainIpRestriction"></a>

```python
scm_use_main_ip_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the Windows Function App `ip_restriction` configuration be used for the SCM also.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#scm_use_main_ip_restriction WindowsFunctionApp#scm_use_main_ip_restriction}

---

##### `use32_bit_worker`<sup>Optional</sup> <a name="use32_bit_worker" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.use32BitWorker"></a>

```python
use32_bit_worker: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the Windows Web App use a 32-bit worker.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#use_32_bit_worker WindowsFunctionApp#use_32_bit_worker}

---

##### `vnet_route_all_enabled`<sup>Optional</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.vnetRouteAllEnabled"></a>

```python
vnet_route_all_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should all outbound traffic to have Virtual Network Security Groups and User Defined Routes applied? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#vnet_route_all_enabled WindowsFunctionApp#vnet_route_all_enabled}

---

##### `websockets_enabled`<sup>Optional</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.websocketsEnabled"></a>

```python
websockets_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should Web Sockets be enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#websockets_enabled WindowsFunctionApp#websockets_enabled}

---

##### `worker_count`<sup>Optional</sup> <a name="worker_count" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig.property.workerCount"></a>

```python
worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of Workers for this Windows Function App.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#worker_count WindowsFunctionApp#worker_count}

---

### WindowsFunctionAppSiteConfigApplicationStack <a name="WindowsFunctionAppSiteConfigApplicationStack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack(
  dotnet_version: str = None,
  java_version: str = None,
  node_version: str = None,
  powershell_core_version: str = None,
  use_custom_runtime: typing.Union[bool, IResolvable] = None,
  use_dotnet_isolated_runtime: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.dotnetVersion">dotnet_version</a></code> | <code>str</code> | The version of .Net. Possible values are `v3.0`, `v4.0`, `v6.0` and `v7.0`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.javaVersion">java_version</a></code> | <code>str</code> | The version of Java to use. Possible values are `1.8`, `11` and `17`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.nodeVersion">node_version</a></code> | <code>str</code> | The version of Node to use. Possible values include `12`, and `14`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.powershellCoreVersion">powershell_core_version</a></code> | <code>str</code> | The PowerShell Core version to use. Possible values are `7`, and `7.2`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.useCustomRuntime">use_custom_runtime</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Does the Function App use a custom Application Stack? |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.useDotnetIsolatedRuntime">use_dotnet_isolated_runtime</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the DotNet process use an isolated runtime. Defaults to `false`. |

---

##### `dotnet_version`<sup>Optional</sup> <a name="dotnet_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.dotnetVersion"></a>

```python
dotnet_version: str
```

- *Type:* str

The version of .Net. Possible values are `v3.0`, `v4.0`, `v6.0` and `v7.0`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#dotnet_version WindowsFunctionApp#dotnet_version}

---

##### `java_version`<sup>Optional</sup> <a name="java_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.javaVersion"></a>

```python
java_version: str
```

- *Type:* str

The version of Java to use. Possible values are `1.8`, `11` and `17`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#java_version WindowsFunctionApp#java_version}

---

##### `node_version`<sup>Optional</sup> <a name="node_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.nodeVersion"></a>

```python
node_version: str
```

- *Type:* str

The version of Node to use. Possible values include `12`, and `14`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#node_version WindowsFunctionApp#node_version}

---

##### `powershell_core_version`<sup>Optional</sup> <a name="powershell_core_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.powershellCoreVersion"></a>

```python
powershell_core_version: str
```

- *Type:* str

The PowerShell Core version to use. Possible values are `7`, and `7.2`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#powershell_core_version WindowsFunctionApp#powershell_core_version}

---

##### `use_custom_runtime`<sup>Optional</sup> <a name="use_custom_runtime" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.useCustomRuntime"></a>

```python
use_custom_runtime: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Does the Function App use a custom Application Stack?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#use_custom_runtime WindowsFunctionApp#use_custom_runtime}

---

##### `use_dotnet_isolated_runtime`<sup>Optional</sup> <a name="use_dotnet_isolated_runtime" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack.property.useDotnetIsolatedRuntime"></a>

```python
use_dotnet_isolated_runtime: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the DotNet process use an isolated runtime. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#use_dotnet_isolated_runtime WindowsFunctionApp#use_dotnet_isolated_runtime}

---

### WindowsFunctionAppSiteConfigAppServiceLogs <a name="WindowsFunctionAppSiteConfigAppServiceLogs" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs(
  disk_quota_mb: typing.Union[int, float] = None,
  retention_period_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs.property.diskQuotaMb">disk_quota_mb</a></code> | <code>typing.Union[int, float]</code> | The amount of disk space to use for logs. Valid values are between `25` and `100`. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs.property.retentionPeriodDays">retention_period_days</a></code> | <code>typing.Union[int, float]</code> | The retention period for logs in days. Valid values are between `0` and `99999`. Defaults to `0` (never delete). |

---

##### `disk_quota_mb`<sup>Optional</sup> <a name="disk_quota_mb" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs.property.diskQuotaMb"></a>

```python
disk_quota_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of disk space to use for logs. Valid values are between `25` and `100`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#disk_quota_mb WindowsFunctionApp#disk_quota_mb}

---

##### `retention_period_days`<sup>Optional</sup> <a name="retention_period_days" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs.property.retentionPeriodDays"></a>

```python
retention_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The retention period for logs in days. Valid values are between `0` and `99999`. Defaults to `0` (never delete).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#retention_period_days WindowsFunctionApp#retention_period_days}

---

### WindowsFunctionAppSiteConfigCors <a name="WindowsFunctionAppSiteConfigCors" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfigCors(
  allowed_origins: typing.List[str],
  support_credentials: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Specifies a list of origins that should be allowed to make cross-origin calls. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors.property.supportCredentials">support_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Are credentials allowed in CORS requests? Defaults to `false`. |

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a list of origins that should be allowed to make cross-origin calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#allowed_origins WindowsFunctionApp#allowed_origins}

---

##### `support_credentials`<sup>Optional</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors.property.supportCredentials"></a>

```python
support_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Are credentials allowed in CORS requests? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#support_credentials WindowsFunctionApp#support_credentials}

---

### WindowsFunctionAppSiteConfigIpRestriction <a name="WindowsFunctionAppSiteConfigIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction(
  action: str = None,
  headers: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigIpRestrictionHeaders]] = None,
  ip_address: str = None,
  name: str = None,
  priority: typing.Union[int, float] = None,
  service_tag: str = None,
  virtual_network_subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#action WindowsFunctionApp#action}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders">WindowsFunctionAppSiteConfigIpRestrictionHeaders</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#headers WindowsFunctionApp#headers}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#ip_address WindowsFunctionApp#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#priority WindowsFunctionApp#priority}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.serviceTag">service_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#service_tag WindowsFunctionApp#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#virtual_network_subnet_id WindowsFunctionApp#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#action WindowsFunctionApp#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders">WindowsFunctionAppSiteConfigIpRestrictionHeaders</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#headers WindowsFunctionApp#headers}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#ip_address WindowsFunctionApp#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#priority WindowsFunctionApp#priority}.

---

##### `service_tag`<sup>Optional</sup> <a name="service_tag" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#service_tag WindowsFunctionApp#service_tag}.

---

##### `virtual_network_subnet_id`<sup>Optional</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#virtual_network_subnet_id WindowsFunctionApp#virtual_network_subnet_id}.

---

### WindowsFunctionAppSiteConfigIpRestrictionHeaders <a name="WindowsFunctionAppSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders(
  x_azure_fdid: typing.List[str] = None,
  x_fd_health_probe: typing.List[str] = None,
  x_forwarded_for: typing.List[str] = None,
  x_forwarded_host: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_azure_fdid WindowsFunctionApp#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_fd_health_probe WindowsFunctionApp#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_forwarded_for WindowsFunctionApp#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_forwarded_host WindowsFunctionApp#x_forwarded_host}. |

---

##### `x_azure_fdid`<sup>Optional</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_azure_fdid WindowsFunctionApp#x_azure_fdid}.

---

##### `x_fd_health_probe`<sup>Optional</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_fd_health_probe WindowsFunctionApp#x_fd_health_probe}.

---

##### `x_forwarded_for`<sup>Optional</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_forwarded_for WindowsFunctionApp#x_forwarded_for}.

---

##### `x_forwarded_host`<sup>Optional</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_forwarded_host WindowsFunctionApp#x_forwarded_host}.

---

### WindowsFunctionAppSiteConfigScmIpRestriction <a name="WindowsFunctionAppSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction(
  action: str = None,
  headers: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigScmIpRestrictionHeaders]] = None,
  ip_address: str = None,
  name: str = None,
  priority: typing.Union[int, float] = None,
  service_tag: str = None,
  virtual_network_subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#action WindowsFunctionApp#action}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#headers WindowsFunctionApp#headers}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#ip_address WindowsFunctionApp#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#priority WindowsFunctionApp#priority}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.serviceTag">service_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#service_tag WindowsFunctionApp#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#virtual_network_subnet_id WindowsFunctionApp#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#action WindowsFunctionApp#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigScmIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#headers WindowsFunctionApp#headers}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#ip_address WindowsFunctionApp#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#priority WindowsFunctionApp#priority}.

---

##### `service_tag`<sup>Optional</sup> <a name="service_tag" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#service_tag WindowsFunctionApp#service_tag}.

---

##### `virtual_network_subnet_id`<sup>Optional</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#virtual_network_subnet_id WindowsFunctionApp#virtual_network_subnet_id}.

---

### WindowsFunctionAppSiteConfigScmIpRestrictionHeaders <a name="WindowsFunctionAppSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders(
  x_azure_fdid: typing.List[str] = None,
  x_fd_health_probe: typing.List[str] = None,
  x_forwarded_for: typing.List[str] = None,
  x_forwarded_host: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_azure_fdid WindowsFunctionApp#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_fd_health_probe WindowsFunctionApp#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_forwarded_for WindowsFunctionApp#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_forwarded_host WindowsFunctionApp#x_forwarded_host}. |

---

##### `x_azure_fdid`<sup>Optional</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_azure_fdid WindowsFunctionApp#x_azure_fdid}.

---

##### `x_fd_health_probe`<sup>Optional</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_fd_health_probe WindowsFunctionApp#x_fd_health_probe}.

---

##### `x_forwarded_for`<sup>Optional</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_forwarded_for WindowsFunctionApp#x_forwarded_for}.

---

##### `x_forwarded_host`<sup>Optional</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#x_forwarded_host WindowsFunctionApp#x_forwarded_host}.

---

### WindowsFunctionAppSiteCredential <a name="WindowsFunctionAppSiteCredential" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteCredential()
```


### WindowsFunctionAppStickySettings <a name="WindowsFunctionAppStickySettings" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppStickySettings(
  app_setting_names: typing.List[str] = None,
  connection_string_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings.property.appSettingNames">app_setting_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_setting_names WindowsFunctionApp#app_setting_names}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings.property.connectionStringNames">connection_string_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#connection_string_names WindowsFunctionApp#connection_string_names}. |

---

##### `app_setting_names`<sup>Optional</sup> <a name="app_setting_names" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings.property.appSettingNames"></a>

```python
app_setting_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_setting_names WindowsFunctionApp#app_setting_names}.

---

##### `connection_string_names`<sup>Optional</sup> <a name="connection_string_names" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings.property.connectionStringNames"></a>

```python
connection_string_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#connection_string_names WindowsFunctionApp#connection_string_names}.

---

### WindowsFunctionAppStorageAccount <a name="WindowsFunctionAppStorageAccount" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppStorageAccount(
  access_key: str,
  account_name: str,
  name: str,
  share_name: str,
  type: str,
  mount_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.accessKey">access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#access_key WindowsFunctionApp#access_key}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#account_name WindowsFunctionApp#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.shareName">share_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#share_name WindowsFunctionApp#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#type WindowsFunctionApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.mountPath">mount_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#mount_path WindowsFunctionApp#mount_path}. |

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#access_key WindowsFunctionApp#access_key}.

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#account_name WindowsFunctionApp#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#name WindowsFunctionApp#name}.

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#share_name WindowsFunctionApp#share_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#type WindowsFunctionApp#type}.

---

##### `mount_path`<sup>Optional</sup> <a name="mount_path" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#mount_path WindowsFunctionApp#mount_path}.

---

### WindowsFunctionAppTimeouts <a name="WindowsFunctionAppTimeouts" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#create WindowsFunctionApp#create}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#delete WindowsFunctionApp#delete}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#read WindowsFunctionApp#read}. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#update WindowsFunctionApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#create WindowsFunctionApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#delete WindowsFunctionApp#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#read WindowsFunctionApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#update WindowsFunctionApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference <a name="WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences">reset_allowed_audiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecretSettingName">reset_client_secret_setting_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_audiences` <a name="reset_allowed_audiences" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences"></a>

```python
def reset_allowed_audiences() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_client_secret_setting_name` <a name="reset_client_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecretSettingName"></a>

```python
def reset_client_secret_setting_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput">allowed_audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingNameInput">client_secret_setting_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName">client_secret_setting_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory">WindowsFunctionAppAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_audiences_input`<sup>Optional</sup> <a name="allowed_audiences_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput"></a>

```python
allowed_audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_secret_setting_name_input`<sup>Optional</sup> <a name="client_secret_setting_name_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingNameInput"></a>

```python
client_secret_setting_name_input: str
```

- *Type:* str

---

##### `allowed_audiences`<sup>Required</sup> <a name="allowed_audiences" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```python
allowed_audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_setting_name`<sup>Required</sup> <a name="client_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName"></a>

```python
client_secret_setting_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: WindowsFunctionAppAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory">WindowsFunctionAppAuthSettingsActiveDirectory</a>

---


### WindowsFunctionAppAuthSettingsFacebookOutputReference <a name="WindowsFunctionAppAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.resetAppSecret">reset_app_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.resetAppSecretSettingName">reset_app_secret_setting_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_secret` <a name="reset_app_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.resetAppSecret"></a>

```python
def reset_app_secret() -> None
```

##### `reset_app_secret_setting_name` <a name="reset_app_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.resetAppSecretSettingName"></a>

```python
def reset_app_secret_setting_name() -> None
```

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecretInput">app_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingNameInput">app_secret_setting_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecret">app_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingName">app_secret_setting_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook">WindowsFunctionAppAuthSettingsFacebook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `app_secret_input`<sup>Optional</sup> <a name="app_secret_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecretInput"></a>

```python
app_secret_input: str
```

- *Type:* str

---

##### `app_secret_setting_name_input`<sup>Optional</sup> <a name="app_secret_setting_name_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingNameInput"></a>

```python
app_secret_setting_name_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `app_secret`<sup>Required</sup> <a name="app_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecret"></a>

```python
app_secret: str
```

- *Type:* str

---

##### `app_secret_setting_name`<sup>Required</sup> <a name="app_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingName"></a>

```python
app_secret_setting_name: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference.property.internalValue"></a>

```python
internal_value: WindowsFunctionAppAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook">WindowsFunctionAppAuthSettingsFacebook</a>

---


### WindowsFunctionAppAuthSettingsGithubOutputReference <a name="WindowsFunctionAppAuthSettingsGithubOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.resetClientSecretSettingName">reset_client_secret_setting_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_client_secret_setting_name` <a name="reset_client_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.resetClientSecretSettingName"></a>

```python
def reset_client_secret_setting_name() -> None
```

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingNameInput">client_secret_setting_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingName">client_secret_setting_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub">WindowsFunctionAppAuthSettingsGithub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_secret_setting_name_input`<sup>Optional</sup> <a name="client_secret_setting_name_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingNameInput"></a>

```python
client_secret_setting_name_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_setting_name`<sup>Required</sup> <a name="client_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingName"></a>

```python
client_secret_setting_name: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference.property.internalValue"></a>

```python
internal_value: WindowsFunctionAppAuthSettingsGithub
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub">WindowsFunctionAppAuthSettingsGithub</a>

---


### WindowsFunctionAppAuthSettingsGoogleOutputReference <a name="WindowsFunctionAppAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.resetClientSecretSettingName">reset_client_secret_setting_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_client_secret_setting_name` <a name="reset_client_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.resetClientSecretSettingName"></a>

```python
def reset_client_secret_setting_name() -> None
```

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingNameInput">client_secret_setting_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingName">client_secret_setting_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle">WindowsFunctionAppAuthSettingsGoogle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_secret_setting_name_input`<sup>Optional</sup> <a name="client_secret_setting_name_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingNameInput"></a>

```python
client_secret_setting_name_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_setting_name`<sup>Required</sup> <a name="client_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingName"></a>

```python
client_secret_setting_name: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference.property.internalValue"></a>

```python
internal_value: WindowsFunctionAppAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle">WindowsFunctionAppAuthSettingsGoogle</a>

---


### WindowsFunctionAppAuthSettingsMicrosoftOutputReference <a name="WindowsFunctionAppAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.resetClientSecretSettingName">reset_client_secret_setting_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_client_secret_setting_name` <a name="reset_client_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.resetClientSecretSettingName"></a>

```python
def reset_client_secret_setting_name() -> None
```

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingNameInput">client_secret_setting_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName">client_secret_setting_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft">WindowsFunctionAppAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_secret_setting_name_input`<sup>Optional</sup> <a name="client_secret_setting_name_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingNameInput"></a>

```python
client_secret_setting_name_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_setting_name`<sup>Required</sup> <a name="client_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName"></a>

```python
client_secret_setting_name: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```python
internal_value: WindowsFunctionAppAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft">WindowsFunctionAppAuthSettingsMicrosoft</a>

---


### WindowsFunctionAppAuthSettingsOutputReference <a name="WindowsFunctionAppAuthSettingsOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putActiveDirectory">put_active_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putFacebook">put_facebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putGithub">put_github</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putGoogle">put_google</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putMicrosoft">put_microsoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putTwitter">put_twitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetActiveDirectory">reset_active_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetAdditionalLoginParameters">reset_additional_login_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetAllowedExternalRedirectUrls">reset_allowed_external_redirect_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetDefaultProvider">reset_default_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetFacebook">reset_facebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetGithub">reset_github</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetGoogle">reset_google</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetMicrosoft">reset_microsoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetRuntimeVersion">reset_runtime_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetTokenRefreshExtensionHours">reset_token_refresh_extension_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetTokenStoreEnabled">reset_token_store_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetTwitter">reset_twitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetUnauthenticatedClientAction">reset_unauthenticated_client_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_active_directory` <a name="put_active_directory" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putActiveDirectory"></a>

```python
def put_active_directory(
  client_id: str,
  allowed_audiences: typing.List[str] = None,
  client_secret: str = None,
  client_secret_setting_name: str = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putActiveDirectory.parameter.clientId"></a>

- *Type:* str

The ID of the Client to use to authenticate with Azure Active Directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_id WindowsFunctionApp#client_id}

---

###### `allowed_audiences`<sup>Optional</sup> <a name="allowed_audiences" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putActiveDirectory.parameter.allowedAudiences"></a>

- *Type:* typing.List[str]

Specifies a list of Allowed audience values to consider when validating JWTs issued by Azure Active Directory.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#allowed_audiences WindowsFunctionApp#allowed_audiences}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putActiveDirectory.parameter.clientSecret"></a>

- *Type:* str

The Client Secret for the Client ID. Cannot be used with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret WindowsFunctionApp#client_secret}

---

###### `client_secret_setting_name`<sup>Optional</sup> <a name="client_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putActiveDirectory.parameter.clientSecretSettingName"></a>

- *Type:* str

The App Setting name that contains the client secret of the Client. Cannot be used with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}

---

##### `put_facebook` <a name="put_facebook" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putFacebook"></a>

```python
def put_facebook(
  app_id: str,
  app_secret: str = None,
  app_secret_setting_name: str = None,
  oauth_scopes: typing.List[str] = None
) -> None
```

###### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putFacebook.parameter.appId"></a>

- *Type:* str

The App ID of the Facebook app used for login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_id WindowsFunctionApp#app_id}

---

###### `app_secret`<sup>Optional</sup> <a name="app_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putFacebook.parameter.appSecret"></a>

- *Type:* str

The App Secret of the Facebook app used for Facebook Login. Cannot be specified with `app_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_secret WindowsFunctionApp#app_secret}

---

###### `app_secret_setting_name`<sup>Optional</sup> <a name="app_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putFacebook.parameter.appSecretSettingName"></a>

- *Type:* str

The app setting name that contains the `app_secret` value used for Facebook Login. Cannot be specified with `app_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#app_secret_setting_name WindowsFunctionApp#app_secret_setting_name}

---

###### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putFacebook.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

Specifies a list of OAuth 2.0 scopes to be requested as part of Facebook Login authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#oauth_scopes WindowsFunctionApp#oauth_scopes}

---

##### `put_github` <a name="put_github" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putGithub"></a>

```python
def put_github(
  client_id: str,
  client_secret: str = None,
  client_secret_setting_name: str = None,
  oauth_scopes: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putGithub.parameter.clientId"></a>

- *Type:* str

The ID of the GitHub app used for login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_id WindowsFunctionApp#client_id}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putGithub.parameter.clientSecret"></a>

- *Type:* str

The Client Secret of the GitHub app used for GitHub Login. Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret WindowsFunctionApp#client_secret}

---

###### `client_secret_setting_name`<sup>Optional</sup> <a name="client_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putGithub.parameter.clientSecretSettingName"></a>

- *Type:* str

The app setting name that contains the `client_secret` value used for GitHub Login. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}

---

###### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putGithub.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

Specifies a list of OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#oauth_scopes WindowsFunctionApp#oauth_scopes}

---

##### `put_google` <a name="put_google" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putGoogle"></a>

```python
def put_google(
  client_id: str,
  client_secret: str = None,
  client_secret_setting_name: str = None,
  oauth_scopes: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putGoogle.parameter.clientId"></a>

- *Type:* str

The OpenID Connect Client ID for the Google web application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_id WindowsFunctionApp#client_id}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putGoogle.parameter.clientSecret"></a>

- *Type:* str

The client secret associated with the Google web application.  Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret WindowsFunctionApp#client_secret}

---

###### `client_secret_setting_name`<sup>Optional</sup> <a name="client_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putGoogle.parameter.clientSecretSettingName"></a>

- *Type:* str

The app setting name that contains the `client_secret` value used for Google Login. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}

---

###### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putGoogle.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

Specifies a list of OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication. If not specified, "openid", "profile", and "email" are used as default scopes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#oauth_scopes WindowsFunctionApp#oauth_scopes}

---

##### `put_microsoft` <a name="put_microsoft" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putMicrosoft"></a>

```python
def put_microsoft(
  client_id: str,
  client_secret: str = None,
  client_secret_setting_name: str = None,
  oauth_scopes: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putMicrosoft.parameter.clientId"></a>

- *Type:* str

The OAuth 2.0 client ID that was created for the app used for authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_id WindowsFunctionApp#client_id}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putMicrosoft.parameter.clientSecret"></a>

- *Type:* str

The OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret WindowsFunctionApp#client_secret}

---

###### `client_secret_setting_name`<sup>Optional</sup> <a name="client_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putMicrosoft.parameter.clientSecretSettingName"></a>

- *Type:* str

The app setting name containing the OAuth 2.0 client secret that was created for the app used for authentication. Cannot be specified with `client_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#client_secret_setting_name WindowsFunctionApp#client_secret_setting_name}

---

###### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putMicrosoft.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

The list of OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication. If not specified, `wl.basic` is used as the default scope.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#oauth_scopes WindowsFunctionApp#oauth_scopes}

---

##### `put_twitter` <a name="put_twitter" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putTwitter"></a>

```python
def put_twitter(
  consumer_key: str,
  consumer_secret: str = None,
  consumer_secret_setting_name: str = None
) -> None
```

###### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putTwitter.parameter.consumerKey"></a>

- *Type:* str

The OAuth 1.0a consumer key of the Twitter application used for sign-in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#consumer_key WindowsFunctionApp#consumer_key}

---

###### `consumer_secret`<sup>Optional</sup> <a name="consumer_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putTwitter.parameter.consumerSecret"></a>

- *Type:* str

The OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret_setting_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#consumer_secret WindowsFunctionApp#consumer_secret}

---

###### `consumer_secret_setting_name`<sup>Optional</sup> <a name="consumer_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.putTwitter.parameter.consumerSecretSettingName"></a>

- *Type:* str

The app setting name that contains the OAuth 1.0a consumer secret of the Twitter application used for sign-in. Cannot be specified with `consumer_secret`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#consumer_secret_setting_name WindowsFunctionApp#consumer_secret_setting_name}

---

##### `reset_active_directory` <a name="reset_active_directory" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetActiveDirectory"></a>

```python
def reset_active_directory() -> None
```

##### `reset_additional_login_parameters` <a name="reset_additional_login_parameters" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetAdditionalLoginParameters"></a>

```python
def reset_additional_login_parameters() -> None
```

##### `reset_allowed_external_redirect_urls` <a name="reset_allowed_external_redirect_urls" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetAllowedExternalRedirectUrls"></a>

```python
def reset_allowed_external_redirect_urls() -> None
```

##### `reset_default_provider` <a name="reset_default_provider" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetDefaultProvider"></a>

```python
def reset_default_provider() -> None
```

##### `reset_facebook` <a name="reset_facebook" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetFacebook"></a>

```python
def reset_facebook() -> None
```

##### `reset_github` <a name="reset_github" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetGithub"></a>

```python
def reset_github() -> None
```

##### `reset_google` <a name="reset_google" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetGoogle"></a>

```python
def reset_google() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_microsoft` <a name="reset_microsoft" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetMicrosoft"></a>

```python
def reset_microsoft() -> None
```

##### `reset_runtime_version` <a name="reset_runtime_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetRuntimeVersion"></a>

```python
def reset_runtime_version() -> None
```

##### `reset_token_refresh_extension_hours` <a name="reset_token_refresh_extension_hours" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetTokenRefreshExtensionHours"></a>

```python
def reset_token_refresh_extension_hours() -> None
```

##### `reset_token_store_enabled` <a name="reset_token_store_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetTokenStoreEnabled"></a>

```python
def reset_token_store_enabled() -> None
```

##### `reset_twitter` <a name="reset_twitter" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetTwitter"></a>

```python
def reset_twitter() -> None
```

##### `reset_unauthenticated_client_action` <a name="reset_unauthenticated_client_action" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.resetUnauthenticatedClientAction"></a>

```python
def reset_unauthenticated_client_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.activeDirectory">active_directory</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference">WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference">WindowsFunctionAppAuthSettingsFacebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference">WindowsFunctionAppAuthSettingsGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference">WindowsFunctionAppAuthSettingsGoogleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference">WindowsFunctionAppAuthSettingsMicrosoftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference">WindowsFunctionAppAuthSettingsTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.activeDirectoryInput">active_directory_input</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory">WindowsFunctionAppAuthSettingsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.additionalLoginParametersInput">additional_login_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput">allowed_external_redirect_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.defaultProviderInput">default_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.facebookInput">facebook_input</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook">WindowsFunctionAppAuthSettingsFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.githubInput">github_input</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub">WindowsFunctionAppAuthSettingsGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.googleInput">google_input</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle">WindowsFunctionAppAuthSettingsGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.microsoftInput">microsoft_input</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft">WindowsFunctionAppAuthSettingsMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.runtimeVersionInput">runtime_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput">token_refresh_extension_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabledInput">token_store_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.twitterInput">twitter_input</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter">WindowsFunctionAppAuthSettingsTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientActionInput">unauthenticated_client_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.additionalLoginParameters">additional_login_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls">allowed_external_redirect_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.defaultProvider">default_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours">token_refresh_extension_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled">token_store_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction">unauthenticated_client_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings">WindowsFunctionAppAuthSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_directory`<sup>Required</sup> <a name="active_directory" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.activeDirectory"></a>

```python
active_directory: WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference">WindowsFunctionAppAuthSettingsActiveDirectoryOutputReference</a>

---

##### `facebook`<sup>Required</sup> <a name="facebook" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.facebook"></a>

```python
facebook: WindowsFunctionAppAuthSettingsFacebookOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebookOutputReference">WindowsFunctionAppAuthSettingsFacebookOutputReference</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.github"></a>

```python
github: WindowsFunctionAppAuthSettingsGithubOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithubOutputReference">WindowsFunctionAppAuthSettingsGithubOutputReference</a>

---

##### `google`<sup>Required</sup> <a name="google" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.google"></a>

```python
google: WindowsFunctionAppAuthSettingsGoogleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogleOutputReference">WindowsFunctionAppAuthSettingsGoogleOutputReference</a>

---

##### `microsoft`<sup>Required</sup> <a name="microsoft" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.microsoft"></a>

```python
microsoft: WindowsFunctionAppAuthSettingsMicrosoftOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoftOutputReference">WindowsFunctionAppAuthSettingsMicrosoftOutputReference</a>

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.twitter"></a>

```python
twitter: WindowsFunctionAppAuthSettingsTwitterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference">WindowsFunctionAppAuthSettingsTwitterOutputReference</a>

---

##### `active_directory_input`<sup>Optional</sup> <a name="active_directory_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.activeDirectoryInput"></a>

```python
active_directory_input: WindowsFunctionAppAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsActiveDirectory">WindowsFunctionAppAuthSettingsActiveDirectory</a>

---

##### `additional_login_parameters_input`<sup>Optional</sup> <a name="additional_login_parameters_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.additionalLoginParametersInput"></a>

```python
additional_login_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allowed_external_redirect_urls_input`<sup>Optional</sup> <a name="allowed_external_redirect_urls_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput"></a>

```python
allowed_external_redirect_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_provider_input`<sup>Optional</sup> <a name="default_provider_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.defaultProviderInput"></a>

```python
default_provider_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `facebook_input`<sup>Optional</sup> <a name="facebook_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.facebookInput"></a>

```python
facebook_input: WindowsFunctionAppAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsFacebook">WindowsFunctionAppAuthSettingsFacebook</a>

---

##### `github_input`<sup>Optional</sup> <a name="github_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.githubInput"></a>

```python
github_input: WindowsFunctionAppAuthSettingsGithub
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGithub">WindowsFunctionAppAuthSettingsGithub</a>

---

##### `google_input`<sup>Optional</sup> <a name="google_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.googleInput"></a>

```python
google_input: WindowsFunctionAppAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsGoogle">WindowsFunctionAppAuthSettingsGoogle</a>

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `microsoft_input`<sup>Optional</sup> <a name="microsoft_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.microsoftInput"></a>

```python
microsoft_input: WindowsFunctionAppAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsMicrosoft">WindowsFunctionAppAuthSettingsMicrosoft</a>

---

##### `runtime_version_input`<sup>Optional</sup> <a name="runtime_version_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.runtimeVersionInput"></a>

```python
runtime_version_input: str
```

- *Type:* str

---

##### `token_refresh_extension_hours_input`<sup>Optional</sup> <a name="token_refresh_extension_hours_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput"></a>

```python
token_refresh_extension_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_store_enabled_input`<sup>Optional</sup> <a name="token_store_enabled_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabledInput"></a>

```python
token_store_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `twitter_input`<sup>Optional</sup> <a name="twitter_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.twitterInput"></a>

```python
twitter_input: WindowsFunctionAppAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter">WindowsFunctionAppAuthSettingsTwitter</a>

---

##### `unauthenticated_client_action_input`<sup>Optional</sup> <a name="unauthenticated_client_action_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientActionInput"></a>

```python
unauthenticated_client_action_input: str
```

- *Type:* str

---

##### `additional_login_parameters`<sup>Required</sup> <a name="additional_login_parameters" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.additionalLoginParameters"></a>

```python
additional_login_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allowed_external_redirect_urls`<sup>Required</sup> <a name="allowed_external_redirect_urls" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```python
allowed_external_redirect_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_provider`<sup>Required</sup> <a name="default_provider" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.defaultProvider"></a>

```python
default_provider: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

---

##### `token_refresh_extension_hours`<sup>Required</sup> <a name="token_refresh_extension_hours" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```python
token_refresh_extension_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_store_enabled`<sup>Required</sup> <a name="token_store_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```python
token_store_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unauthenticated_client_action`<sup>Required</sup> <a name="unauthenticated_client_action" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```python
unauthenticated_client_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsOutputReference.property.internalValue"></a>

```python
internal_value: WindowsFunctionAppAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettings">WindowsFunctionAppAuthSettings</a>

---


### WindowsFunctionAppAuthSettingsTwitterOutputReference <a name="WindowsFunctionAppAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.resetConsumerSecret">reset_consumer_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.resetConsumerSecretSettingName">reset_consumer_secret_setting_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_consumer_secret` <a name="reset_consumer_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.resetConsumerSecret"></a>

```python
def reset_consumer_secret() -> None
```

##### `reset_consumer_secret_setting_name` <a name="reset_consumer_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.resetConsumerSecretSettingName"></a>

```python
def reset_consumer_secret_setting_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerKeyInput">consumer_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretInput">consumer_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingNameInput">consumer_secret_setting_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerKey">consumer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingName">consumer_secret_setting_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter">WindowsFunctionAppAuthSettingsTwitter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_key_input`<sup>Optional</sup> <a name="consumer_key_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerKeyInput"></a>

```python
consumer_key_input: str
```

- *Type:* str

---

##### `consumer_secret_input`<sup>Optional</sup> <a name="consumer_secret_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretInput"></a>

```python
consumer_secret_input: str
```

- *Type:* str

---

##### `consumer_secret_setting_name_input`<sup>Optional</sup> <a name="consumer_secret_setting_name_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingNameInput"></a>

```python
consumer_secret_setting_name_input: str
```

- *Type:* str

---

##### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

---

##### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

---

##### `consumer_secret_setting_name`<sup>Required</sup> <a name="consumer_secret_setting_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingName"></a>

```python
consumer_secret_setting_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitterOutputReference.property.internalValue"></a>

```python
internal_value: WindowsFunctionAppAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppAuthSettingsTwitter">WindowsFunctionAppAuthSettingsTwitter</a>

---


### WindowsFunctionAppBackupOutputReference <a name="WindowsFunctionAppBackupOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppBackupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.putSchedule"></a>

```python
def put_schedule(
  frequency_interval: typing.Union[int, float],
  frequency_unit: str,
  keep_at_least_one_backup: typing.Union[bool, IResolvable] = None,
  retention_period_days: typing.Union[int, float] = None,
  start_time: str = None
) -> None
```

###### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.putSchedule.parameter.frequencyInterval"></a>

- *Type:* typing.Union[int, float]

How often the backup should be executed (e.g. for weekly backup, this should be set to `7` and `frequency_unit` should be set to `Day`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#frequency_interval WindowsFunctionApp#frequency_interval}

---

###### `frequency_unit`<sup>Required</sup> <a name="frequency_unit" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.putSchedule.parameter.frequencyUnit"></a>

- *Type:* str

The unit of time for how often the backup should take place. Possible values include: `Day` and `Hour`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#frequency_unit WindowsFunctionApp#frequency_unit}

---

###### `keep_at_least_one_backup`<sup>Optional</sup> <a name="keep_at_least_one_backup" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.putSchedule.parameter.keepAtLeastOneBackup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the service keep at least one backup, regardless of age of backup. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#keep_at_least_one_backup WindowsFunctionApp#keep_at_least_one_backup}

---

###### `retention_period_days`<sup>Optional</sup> <a name="retention_period_days" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.putSchedule.parameter.retentionPeriodDays"></a>

- *Type:* typing.Union[int, float]

After how many days backups should be deleted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#retention_period_days WindowsFunctionApp#retention_period_days}

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.putSchedule.parameter.startTime"></a>

- *Type:* str

When the schedule should start working in RFC-3339 format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#start_time WindowsFunctionApp#start_time}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference">WindowsFunctionAppBackupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.scheduleInput">schedule_input</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule">WindowsFunctionAppBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.storageAccountUrlInput">storage_account_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.storageAccountUrl">storage_account_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup">WindowsFunctionAppBackup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.schedule"></a>

```python
schedule: WindowsFunctionAppBackupScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference">WindowsFunctionAppBackupScheduleOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.scheduleInput"></a>

```python
schedule_input: WindowsFunctionAppBackupSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule">WindowsFunctionAppBackupSchedule</a>

---

##### `storage_account_url_input`<sup>Optional</sup> <a name="storage_account_url_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.storageAccountUrlInput"></a>

```python
storage_account_url_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_account_url`<sup>Required</sup> <a name="storage_account_url" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.storageAccountUrl"></a>

```python
storage_account_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupOutputReference.property.internalValue"></a>

```python
internal_value: WindowsFunctionAppBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackup">WindowsFunctionAppBackup</a>

---


### WindowsFunctionAppBackupScheduleOutputReference <a name="WindowsFunctionAppBackupScheduleOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.resetKeepAtLeastOneBackup">reset_keep_at_least_one_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.resetRetentionPeriodDays">reset_retention_period_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_keep_at_least_one_backup` <a name="reset_keep_at_least_one_backup" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.resetKeepAtLeastOneBackup"></a>

```python
def reset_keep_at_least_one_backup() -> None
```

##### `reset_retention_period_days` <a name="reset_retention_period_days" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.resetRetentionPeriodDays"></a>

```python
def reset_retention_period_days() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.lastExecutionTime">last_execution_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.frequencyIntervalInput">frequency_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.frequencyUnitInput">frequency_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackupInput">keep_at_least_one_backup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.retentionPeriodDaysInput">retention_period_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.frequencyInterval">frequency_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.frequencyUnit">frequency_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackup">keep_at_least_one_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.retentionPeriodDays">retention_period_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule">WindowsFunctionAppBackupSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_execution_time`<sup>Required</sup> <a name="last_execution_time" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.lastExecutionTime"></a>

```python
last_execution_time: str
```

- *Type:* str

---

##### `frequency_interval_input`<sup>Optional</sup> <a name="frequency_interval_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.frequencyIntervalInput"></a>

```python
frequency_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frequency_unit_input`<sup>Optional</sup> <a name="frequency_unit_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.frequencyUnitInput"></a>

```python
frequency_unit_input: str
```

- *Type:* str

---

##### `keep_at_least_one_backup_input`<sup>Optional</sup> <a name="keep_at_least_one_backup_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackupInput"></a>

```python
keep_at_least_one_backup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_period_days_input`<sup>Optional</sup> <a name="retention_period_days_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.retentionPeriodDaysInput"></a>

```python
retention_period_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.frequencyInterval"></a>

```python
frequency_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frequency_unit`<sup>Required</sup> <a name="frequency_unit" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.frequencyUnit"></a>

```python
frequency_unit: str
```

- *Type:* str

---

##### `keep_at_least_one_backup`<sup>Required</sup> <a name="keep_at_least_one_backup" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackup"></a>

```python
keep_at_least_one_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_period_days`<sup>Required</sup> <a name="retention_period_days" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.retentionPeriodDays"></a>

```python
retention_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupScheduleOutputReference.property.internalValue"></a>

```python
internal_value: WindowsFunctionAppBackupSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppBackupSchedule">WindowsFunctionAppBackupSchedule</a>

---


### WindowsFunctionAppConnectionStringList <a name="WindowsFunctionAppConnectionStringList" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppConnectionStringList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WindowsFunctionAppConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WindowsFunctionAppConnectionString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a>]]

---


### WindowsFunctionAppConnectionStringOutputReference <a name="WindowsFunctionAppConnectionStringOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionStringOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WindowsFunctionAppConnectionString, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppConnectionString">WindowsFunctionAppConnectionString</a>, cdktf.IResolvable]

---


### WindowsFunctionAppIdentityOutputReference <a name="WindowsFunctionAppIdentityOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity">WindowsFunctionAppIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentityOutputReference.property.internalValue"></a>

```python
internal_value: WindowsFunctionAppIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppIdentity">WindowsFunctionAppIdentity</a>

---


### WindowsFunctionAppSiteConfigApplicationStackOutputReference <a name="WindowsFunctionAppSiteConfigApplicationStackOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetDotnetVersion">reset_dotnet_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetJavaVersion">reset_java_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetNodeVersion">reset_node_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetPowershellCoreVersion">reset_powershell_core_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetUseCustomRuntime">reset_use_custom_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetUseDotnetIsolatedRuntime">reset_use_dotnet_isolated_runtime</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dotnet_version` <a name="reset_dotnet_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetDotnetVersion"></a>

```python
def reset_dotnet_version() -> None
```

##### `reset_java_version` <a name="reset_java_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetJavaVersion"></a>

```python
def reset_java_version() -> None
```

##### `reset_node_version` <a name="reset_node_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetNodeVersion"></a>

```python
def reset_node_version() -> None
```

##### `reset_powershell_core_version` <a name="reset_powershell_core_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetPowershellCoreVersion"></a>

```python
def reset_powershell_core_version() -> None
```

##### `reset_use_custom_runtime` <a name="reset_use_custom_runtime" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetUseCustomRuntime"></a>

```python
def reset_use_custom_runtime() -> None
```

##### `reset_use_dotnet_isolated_runtime` <a name="reset_use_dotnet_isolated_runtime" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.resetUseDotnetIsolatedRuntime"></a>

```python
def reset_use_dotnet_isolated_runtime() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersionInput">dotnet_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersionInput">java_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersionInput">node_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersionInput">powershell_core_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntimeInput">use_custom_runtime_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntimeInput">use_dotnet_isolated_runtime_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersion">dotnet_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersion">java_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersion">node_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersion">powershell_core_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntime">use_custom_runtime</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntime">use_dotnet_isolated_runtime</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack">WindowsFunctionAppSiteConfigApplicationStack</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dotnet_version_input`<sup>Optional</sup> <a name="dotnet_version_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersionInput"></a>

```python
dotnet_version_input: str
```

- *Type:* str

---

##### `java_version_input`<sup>Optional</sup> <a name="java_version_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersionInput"></a>

```python
java_version_input: str
```

- *Type:* str

---

##### `node_version_input`<sup>Optional</sup> <a name="node_version_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersionInput"></a>

```python
node_version_input: str
```

- *Type:* str

---

##### `powershell_core_version_input`<sup>Optional</sup> <a name="powershell_core_version_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersionInput"></a>

```python
powershell_core_version_input: str
```

- *Type:* str

---

##### `use_custom_runtime_input`<sup>Optional</sup> <a name="use_custom_runtime_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntimeInput"></a>

```python
use_custom_runtime_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_dotnet_isolated_runtime_input`<sup>Optional</sup> <a name="use_dotnet_isolated_runtime_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntimeInput"></a>

```python
use_dotnet_isolated_runtime_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dotnet_version`<sup>Required</sup> <a name="dotnet_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersion"></a>

```python
dotnet_version: str
```

- *Type:* str

---

##### `java_version`<sup>Required</sup> <a name="java_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersion"></a>

```python
java_version: str
```

- *Type:* str

---

##### `node_version`<sup>Required</sup> <a name="node_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersion"></a>

```python
node_version: str
```

- *Type:* str

---

##### `powershell_core_version`<sup>Required</sup> <a name="powershell_core_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersion"></a>

```python
powershell_core_version: str
```

- *Type:* str

---

##### `use_custom_runtime`<sup>Required</sup> <a name="use_custom_runtime" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntime"></a>

```python
use_custom_runtime: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_dotnet_isolated_runtime`<sup>Required</sup> <a name="use_dotnet_isolated_runtime" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntime"></a>

```python
use_dotnet_isolated_runtime: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference.property.internalValue"></a>

```python
internal_value: WindowsFunctionAppSiteConfigApplicationStack
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack">WindowsFunctionAppSiteConfigApplicationStack</a>

---


### WindowsFunctionAppSiteConfigAppServiceLogsOutputReference <a name="WindowsFunctionAppSiteConfigAppServiceLogsOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resetDiskQuotaMb">reset_disk_quota_mb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resetRetentionPeriodDays">reset_retention_period_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk_quota_mb` <a name="reset_disk_quota_mb" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resetDiskQuotaMb"></a>

```python
def reset_disk_quota_mb() -> None
```

##### `reset_retention_period_days` <a name="reset_retention_period_days" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resetRetentionPeriodDays"></a>

```python
def reset_retention_period_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMbInput">disk_quota_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDaysInput">retention_period_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMb">disk_quota_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDays">retention_period_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs">WindowsFunctionAppSiteConfigAppServiceLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_quota_mb_input`<sup>Optional</sup> <a name="disk_quota_mb_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMbInput"></a>

```python
disk_quota_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_period_days_input`<sup>Optional</sup> <a name="retention_period_days_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDaysInput"></a>

```python
retention_period_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_quota_mb`<sup>Required</sup> <a name="disk_quota_mb" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMb"></a>

```python
disk_quota_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_period_days`<sup>Required</sup> <a name="retention_period_days" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDays"></a>

```python
retention_period_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.internalValue"></a>

```python
internal_value: WindowsFunctionAppSiteConfigAppServiceLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs">WindowsFunctionAppSiteConfigAppServiceLogs</a>

---


### WindowsFunctionAppSiteConfigCorsOutputReference <a name="WindowsFunctionAppSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.resetSupportCredentials">reset_support_credentials</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_support_credentials` <a name="reset_support_credentials" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```python
def reset_support_credentials() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.supportCredentialsInput">support_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.supportCredentials">support_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors">WindowsFunctionAppSiteConfigCors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `support_credentials_input`<sup>Optional</sup> <a name="support_credentials_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```python
support_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `support_credentials`<sup>Required</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.supportCredentials"></a>

```python
support_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference.property.internalValue"></a>

```python
internal_value: WindowsFunctionAppSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors">WindowsFunctionAppSiteConfigCors</a>

---


### WindowsFunctionAppSiteConfigIpRestrictionHeadersList <a name="WindowsFunctionAppSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders">WindowsFunctionAppSiteConfigIpRestrictionHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders">WindowsFunctionAppSiteConfigIpRestrictionHeaders</a>]]

---


### WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference <a name="WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">reset_x_azure_fdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">reset_x_fd_health_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">reset_x_forwarded_for</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">reset_x_forwarded_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x_azure_fdid` <a name="reset_x_azure_fdid" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```python
def reset_x_azure_fdid() -> None
```

##### `reset_x_fd_health_probe` <a name="reset_x_fd_health_probe" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```python
def reset_x_fd_health_probe() -> None
```

##### `reset_x_forwarded_for` <a name="reset_x_forwarded_for" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```python
def reset_x_forwarded_for() -> None
```

##### `reset_x_forwarded_host` <a name="reset_x_forwarded_host" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```python
def reset_x_forwarded_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">x_azure_fdid_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">x_fd_health_probe_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">x_forwarded_for_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">x_forwarded_host_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders">WindowsFunctionAppSiteConfigIpRestrictionHeaders</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_azure_fdid_input`<sup>Optional</sup> <a name="x_azure_fdid_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```python
x_azure_fdid_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe_input`<sup>Optional</sup> <a name="x_fd_health_probe_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```python
x_fd_health_probe_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for_input`<sup>Optional</sup> <a name="x_forwarded_for_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```python
x_forwarded_for_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host_input`<sup>Optional</sup> <a name="x_forwarded_host_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```python
x_forwarded_host_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_azure_fdid`<sup>Required</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe`<sup>Required</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for`<sup>Required</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host`<sup>Required</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WindowsFunctionAppSiteConfigIpRestrictionHeaders, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders">WindowsFunctionAppSiteConfigIpRestrictionHeaders</a>, cdktf.IResolvable]

---


### WindowsFunctionAppSiteConfigIpRestrictionList <a name="WindowsFunctionAppSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WindowsFunctionAppSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction">WindowsFunctionAppSiteConfigIpRestriction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction">WindowsFunctionAppSiteConfigIpRestriction</a>]]

---


### WindowsFunctionAppSiteConfigIpRestrictionOutputReference <a name="WindowsFunctionAppSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetServiceTag">reset_service_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">reset_virtual_network_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigIpRestrictionHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders">WindowsFunctionAppSiteConfigIpRestrictionHeaders</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_service_tag` <a name="reset_service_tag" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```python
def reset_service_tag() -> None
```

##### `reset_virtual_network_subnet_id` <a name="reset_virtual_network_subnet_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```python
def reset_virtual_network_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList">WindowsFunctionAppSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders">WindowsFunctionAppSiteConfigIpRestrictionHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTagInput">service_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtual_network_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag">service_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction">WindowsFunctionAppSiteConfigIpRestriction</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.headers"></a>

```python
headers: WindowsFunctionAppSiteConfigIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeadersList">WindowsFunctionAppSiteConfigIpRestrictionHeadersList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionHeaders">WindowsFunctionAppSiteConfigIpRestrictionHeaders</a>]]

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag_input`<sup>Optional</sup> <a name="service_tag_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```python
service_tag_input: str
```

- *Type:* str

---

##### `virtual_network_subnet_id_input`<sup>Optional</sup> <a name="virtual_network_subnet_id_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```python
virtual_network_subnet_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag`<sup>Required</sup> <a name="service_tag" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WindowsFunctionAppSiteConfigIpRestriction, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction">WindowsFunctionAppSiteConfigIpRestriction</a>, cdktf.IResolvable]

---


### WindowsFunctionAppSiteConfigOutputReference <a name="WindowsFunctionAppSiteConfigOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putApplicationStack">put_application_stack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putAppServiceLogs">put_app_service_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putCors">put_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putIpRestriction">put_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putScmIpRestriction">put_scm_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetAlwaysOn">reset_always_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApiDefinitionUrl">reset_api_definition_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApiManagementApiId">reset_api_management_api_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetAppCommandLine">reset_app_command_line</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApplicationInsightsConnectionString">reset_application_insights_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApplicationInsightsKey">reset_application_insights_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApplicationStack">reset_application_stack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetAppScaleLimit">reset_app_scale_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetAppServiceLogs">reset_app_service_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetCors">reset_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetDefaultDocuments">reset_default_documents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetElasticInstanceMinimum">reset_elastic_instance_minimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetFtpsState">reset_ftps_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetHealthCheckEvictionTimeInMin">reset_health_check_eviction_time_in_min</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetHealthCheckPath">reset_health_check_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetHttp2Enabled">reset_http2_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetIpRestriction">reset_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetLoadBalancingMode">reset_load_balancing_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetManagedPipelineMode">reset_managed_pipeline_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetMinimumTlsVersion">reset_minimum_tls_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetPreWarmedInstanceCount">reset_pre_warmed_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetRemoteDebuggingEnabled">reset_remote_debugging_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetRemoteDebuggingVersion">reset_remote_debugging_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled">reset_runtime_scale_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetScmIpRestriction">reset_scm_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetScmMinimumTlsVersion">reset_scm_minimum_tls_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetScmUseMainIpRestriction">reset_scm_use_main_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetUse32BitWorker">reset_use32_bit_worker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetVnetRouteAllEnabled">reset_vnet_route_all_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetWebsocketsEnabled">reset_websockets_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetWorkerCount">reset_worker_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_application_stack` <a name="put_application_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putApplicationStack"></a>

```python
def put_application_stack(
  dotnet_version: str = None,
  java_version: str = None,
  node_version: str = None,
  powershell_core_version: str = None,
  use_custom_runtime: typing.Union[bool, IResolvable] = None,
  use_dotnet_isolated_runtime: typing.Union[bool, IResolvable] = None
) -> None
```

###### `dotnet_version`<sup>Optional</sup> <a name="dotnet_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putApplicationStack.parameter.dotnetVersion"></a>

- *Type:* str

The version of .Net. Possible values are `v3.0`, `v4.0`, `v6.0` and `v7.0`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#dotnet_version WindowsFunctionApp#dotnet_version}

---

###### `java_version`<sup>Optional</sup> <a name="java_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putApplicationStack.parameter.javaVersion"></a>

- *Type:* str

The version of Java to use. Possible values are `1.8`, `11` and `17`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#java_version WindowsFunctionApp#java_version}

---

###### `node_version`<sup>Optional</sup> <a name="node_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putApplicationStack.parameter.nodeVersion"></a>

- *Type:* str

The version of Node to use. Possible values include `12`, and `14`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#node_version WindowsFunctionApp#node_version}

---

###### `powershell_core_version`<sup>Optional</sup> <a name="powershell_core_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putApplicationStack.parameter.powershellCoreVersion"></a>

- *Type:* str

The PowerShell Core version to use. Possible values are `7`, and `7.2`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#powershell_core_version WindowsFunctionApp#powershell_core_version}

---

###### `use_custom_runtime`<sup>Optional</sup> <a name="use_custom_runtime" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putApplicationStack.parameter.useCustomRuntime"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Does the Function App use a custom Application Stack?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#use_custom_runtime WindowsFunctionApp#use_custom_runtime}

---

###### `use_dotnet_isolated_runtime`<sup>Optional</sup> <a name="use_dotnet_isolated_runtime" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putApplicationStack.parameter.useDotnetIsolatedRuntime"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the DotNet process use an isolated runtime. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#use_dotnet_isolated_runtime WindowsFunctionApp#use_dotnet_isolated_runtime}

---

##### `put_app_service_logs` <a name="put_app_service_logs" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putAppServiceLogs"></a>

```python
def put_app_service_logs(
  disk_quota_mb: typing.Union[int, float] = None,
  retention_period_days: typing.Union[int, float] = None
) -> None
```

###### `disk_quota_mb`<sup>Optional</sup> <a name="disk_quota_mb" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putAppServiceLogs.parameter.diskQuotaMb"></a>

- *Type:* typing.Union[int, float]

The amount of disk space to use for logs. Valid values are between `25` and `100`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#disk_quota_mb WindowsFunctionApp#disk_quota_mb}

---

###### `retention_period_days`<sup>Optional</sup> <a name="retention_period_days" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putAppServiceLogs.parameter.retentionPeriodDays"></a>

- *Type:* typing.Union[int, float]

The retention period for logs in days. Valid values are between `0` and `99999`. Defaults to `0` (never delete).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#retention_period_days WindowsFunctionApp#retention_period_days}

---

##### `put_cors` <a name="put_cors" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putCors"></a>

```python
def put_cors(
  allowed_origins: typing.List[str],
  support_credentials: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putCors.parameter.allowedOrigins"></a>

- *Type:* typing.List[str]

Specifies a list of origins that should be allowed to make cross-origin calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#allowed_origins WindowsFunctionApp#allowed_origins}

---

###### `support_credentials`<sup>Optional</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putCors.parameter.supportCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Are credentials allowed in CORS requests? Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/windows_function_app#support_credentials WindowsFunctionApp#support_credentials}

---

##### `put_ip_restriction` <a name="put_ip_restriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putIpRestriction"></a>

```python
def put_ip_restriction(
  value: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigIpRestriction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction">WindowsFunctionAppSiteConfigIpRestriction</a>]]

---

##### `put_scm_ip_restriction` <a name="put_scm_ip_restriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putScmIpRestriction"></a>

```python
def put_scm_ip_restriction(
  value: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigScmIpRestriction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction">WindowsFunctionAppSiteConfigScmIpRestriction</a>]]

---

##### `reset_always_on` <a name="reset_always_on" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetAlwaysOn"></a>

```python
def reset_always_on() -> None
```

##### `reset_api_definition_url` <a name="reset_api_definition_url" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApiDefinitionUrl"></a>

```python
def reset_api_definition_url() -> None
```

##### `reset_api_management_api_id` <a name="reset_api_management_api_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApiManagementApiId"></a>

```python
def reset_api_management_api_id() -> None
```

##### `reset_app_command_line` <a name="reset_app_command_line" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetAppCommandLine"></a>

```python
def reset_app_command_line() -> None
```

##### `reset_application_insights_connection_string` <a name="reset_application_insights_connection_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApplicationInsightsConnectionString"></a>

```python
def reset_application_insights_connection_string() -> None
```

##### `reset_application_insights_key` <a name="reset_application_insights_key" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApplicationInsightsKey"></a>

```python
def reset_application_insights_key() -> None
```

##### `reset_application_stack` <a name="reset_application_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetApplicationStack"></a>

```python
def reset_application_stack() -> None
```

##### `reset_app_scale_limit` <a name="reset_app_scale_limit" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetAppScaleLimit"></a>

```python
def reset_app_scale_limit() -> None
```

##### `reset_app_service_logs` <a name="reset_app_service_logs" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetAppServiceLogs"></a>

```python
def reset_app_service_logs() -> None
```

##### `reset_cors` <a name="reset_cors" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetCors"></a>

```python
def reset_cors() -> None
```

##### `reset_default_documents` <a name="reset_default_documents" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetDefaultDocuments"></a>

```python
def reset_default_documents() -> None
```

##### `reset_elastic_instance_minimum` <a name="reset_elastic_instance_minimum" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetElasticInstanceMinimum"></a>

```python
def reset_elastic_instance_minimum() -> None
```

##### `reset_ftps_state` <a name="reset_ftps_state" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetFtpsState"></a>

```python
def reset_ftps_state() -> None
```

##### `reset_health_check_eviction_time_in_min` <a name="reset_health_check_eviction_time_in_min" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetHealthCheckEvictionTimeInMin"></a>

```python
def reset_health_check_eviction_time_in_min() -> None
```

##### `reset_health_check_path` <a name="reset_health_check_path" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetHealthCheckPath"></a>

```python
def reset_health_check_path() -> None
```

##### `reset_http2_enabled` <a name="reset_http2_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetHttp2Enabled"></a>

```python
def reset_http2_enabled() -> None
```

##### `reset_ip_restriction` <a name="reset_ip_restriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetIpRestriction"></a>

```python
def reset_ip_restriction() -> None
```

##### `reset_load_balancing_mode` <a name="reset_load_balancing_mode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetLoadBalancingMode"></a>

```python
def reset_load_balancing_mode() -> None
```

##### `reset_managed_pipeline_mode` <a name="reset_managed_pipeline_mode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetManagedPipelineMode"></a>

```python
def reset_managed_pipeline_mode() -> None
```

##### `reset_minimum_tls_version` <a name="reset_minimum_tls_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetMinimumTlsVersion"></a>

```python
def reset_minimum_tls_version() -> None
```

##### `reset_pre_warmed_instance_count` <a name="reset_pre_warmed_instance_count" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetPreWarmedInstanceCount"></a>

```python
def reset_pre_warmed_instance_count() -> None
```

##### `reset_remote_debugging_enabled` <a name="reset_remote_debugging_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetRemoteDebuggingEnabled"></a>

```python
def reset_remote_debugging_enabled() -> None
```

##### `reset_remote_debugging_version` <a name="reset_remote_debugging_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetRemoteDebuggingVersion"></a>

```python
def reset_remote_debugging_version() -> None
```

##### `reset_runtime_scale_monitoring_enabled` <a name="reset_runtime_scale_monitoring_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled"></a>

```python
def reset_runtime_scale_monitoring_enabled() -> None
```

##### `reset_scm_ip_restriction` <a name="reset_scm_ip_restriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetScmIpRestriction"></a>

```python
def reset_scm_ip_restriction() -> None
```

##### `reset_scm_minimum_tls_version` <a name="reset_scm_minimum_tls_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetScmMinimumTlsVersion"></a>

```python
def reset_scm_minimum_tls_version() -> None
```

##### `reset_scm_use_main_ip_restriction` <a name="reset_scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```python
def reset_scm_use_main_ip_restriction() -> None
```

##### `reset_use32_bit_worker` <a name="reset_use32_bit_worker" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetUse32BitWorker"></a>

```python
def reset_use32_bit_worker() -> None
```

##### `reset_vnet_route_all_enabled` <a name="reset_vnet_route_all_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```python
def reset_vnet_route_all_enabled() -> None
```

##### `reset_websockets_enabled` <a name="reset_websockets_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```python
def reset_websockets_enabled() -> None
```

##### `reset_worker_count` <a name="reset_worker_count" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.resetWorkerCount"></a>

```python
def reset_worker_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationStack">application_stack</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference">WindowsFunctionAppSiteConfigApplicationStackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appServiceLogs">app_service_logs</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference">WindowsFunctionAppSiteConfigAppServiceLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference">WindowsFunctionAppSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.detailedErrorLoggingEnabled">detailed_error_logging_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.ipRestriction">ip_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList">WindowsFunctionAppSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmIpRestriction">scm_ip_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList">WindowsFunctionAppSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmType">scm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.windowsFxVersion">windows_fx_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.alwaysOnInput">always_on_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.apiDefinitionUrlInput">api_definition_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.apiManagementApiIdInput">api_management_api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appCommandLineInput">app_command_line_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionStringInput">application_insights_connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsKeyInput">application_insights_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationStackInput">application_stack_input</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack">WindowsFunctionAppSiteConfigApplicationStack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appScaleLimitInput">app_scale_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appServiceLogsInput">app_service_logs_input</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs">WindowsFunctionAppSiteConfigAppServiceLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.corsInput">cors_input</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors">WindowsFunctionAppSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.defaultDocumentsInput">default_documents_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimumInput">elastic_instance_minimum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.ftpsStateInput">ftps_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMinInput">health_check_eviction_time_in_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.healthCheckPathInput">health_check_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.http2EnabledInput">http2_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.ipRestrictionInput">ip_restriction_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction">WindowsFunctionAppSiteConfigIpRestriction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.loadBalancingModeInput">load_balancing_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.managedPipelineModeInput">managed_pipeline_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.minimumTlsVersionInput">minimum_tls_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCountInput">pre_warmed_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabledInput">remote_debugging_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersionInput">remote_debugging_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput">runtime_scale_monitoring_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmIpRestrictionInput">scm_ip_restriction_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction">WindowsFunctionAppSiteConfigScmIpRestriction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersionInput">scm_minimum_tls_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">scm_use_main_ip_restriction_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.use32BitWorkerInput">use32_bit_worker_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabledInput">vnet_route_all_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.websocketsEnabledInput">websockets_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.workerCountInput">worker_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.alwaysOn">always_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.apiDefinitionUrl">api_definition_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.apiManagementApiId">api_management_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appCommandLine">app_command_line</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionString">application_insights_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsKey">application_insights_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appScaleLimit">app_scale_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.defaultDocuments">default_documents</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum">elastic_instance_minimum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.ftpsState">ftps_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMin">health_check_eviction_time_in_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.http2Enabled">http2_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.loadBalancingMode">load_balancing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.managedPipelineMode">managed_pipeline_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.minimumTlsVersion">minimum_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount">pre_warmed_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabled">remote_debugging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersion">remote_debugging_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">runtime_scale_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersion">scm_minimum_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction">scm_use_main_ip_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.use32BitWorker">use32_bit_worker</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled">vnet_route_all_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.websocketsEnabled">websockets_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.workerCount">worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig">WindowsFunctionAppSiteConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_stack`<sup>Required</sup> <a name="application_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationStack"></a>

```python
application_stack: WindowsFunctionAppSiteConfigApplicationStackOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStackOutputReference">WindowsFunctionAppSiteConfigApplicationStackOutputReference</a>

---

##### `app_service_logs`<sup>Required</sup> <a name="app_service_logs" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appServiceLogs"></a>

```python
app_service_logs: WindowsFunctionAppSiteConfigAppServiceLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogsOutputReference">WindowsFunctionAppSiteConfigAppServiceLogsOutputReference</a>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.cors"></a>

```python
cors: WindowsFunctionAppSiteConfigCorsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCorsOutputReference">WindowsFunctionAppSiteConfigCorsOutputReference</a>

---

##### `detailed_error_logging_enabled`<sup>Required</sup> <a name="detailed_error_logging_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.detailedErrorLoggingEnabled"></a>

```python
detailed_error_logging_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ip_restriction`<sup>Required</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.ipRestriction"></a>

```python
ip_restriction: WindowsFunctionAppSiteConfigIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestrictionList">WindowsFunctionAppSiteConfigIpRestrictionList</a>

---

##### `scm_ip_restriction`<sup>Required</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmIpRestriction"></a>

```python
scm_ip_restriction: WindowsFunctionAppSiteConfigScmIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList">WindowsFunctionAppSiteConfigScmIpRestrictionList</a>

---

##### `scm_type`<sup>Required</sup> <a name="scm_type" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmType"></a>

```python
scm_type: str
```

- *Type:* str

---

##### `windows_fx_version`<sup>Required</sup> <a name="windows_fx_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.windowsFxVersion"></a>

```python
windows_fx_version: str
```

- *Type:* str

---

##### `always_on_input`<sup>Optional</sup> <a name="always_on_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.alwaysOnInput"></a>

```python
always_on_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `api_definition_url_input`<sup>Optional</sup> <a name="api_definition_url_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.apiDefinitionUrlInput"></a>

```python
api_definition_url_input: str
```

- *Type:* str

---

##### `api_management_api_id_input`<sup>Optional</sup> <a name="api_management_api_id_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.apiManagementApiIdInput"></a>

```python
api_management_api_id_input: str
```

- *Type:* str

---

##### `app_command_line_input`<sup>Optional</sup> <a name="app_command_line_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appCommandLineInput"></a>

```python
app_command_line_input: str
```

- *Type:* str

---

##### `application_insights_connection_string_input`<sup>Optional</sup> <a name="application_insights_connection_string_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionStringInput"></a>

```python
application_insights_connection_string_input: str
```

- *Type:* str

---

##### `application_insights_key_input`<sup>Optional</sup> <a name="application_insights_key_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsKeyInput"></a>

```python
application_insights_key_input: str
```

- *Type:* str

---

##### `application_stack_input`<sup>Optional</sup> <a name="application_stack_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationStackInput"></a>

```python
application_stack_input: WindowsFunctionAppSiteConfigApplicationStack
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigApplicationStack">WindowsFunctionAppSiteConfigApplicationStack</a>

---

##### `app_scale_limit_input`<sup>Optional</sup> <a name="app_scale_limit_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appScaleLimitInput"></a>

```python
app_scale_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `app_service_logs_input`<sup>Optional</sup> <a name="app_service_logs_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appServiceLogsInput"></a>

```python
app_service_logs_input: WindowsFunctionAppSiteConfigAppServiceLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigAppServiceLogs">WindowsFunctionAppSiteConfigAppServiceLogs</a>

---

##### `cors_input`<sup>Optional</sup> <a name="cors_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.corsInput"></a>

```python
cors_input: WindowsFunctionAppSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigCors">WindowsFunctionAppSiteConfigCors</a>

---

##### `default_documents_input`<sup>Optional</sup> <a name="default_documents_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.defaultDocumentsInput"></a>

```python
default_documents_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `elastic_instance_minimum_input`<sup>Optional</sup> <a name="elastic_instance_minimum_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimumInput"></a>

```python
elastic_instance_minimum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ftps_state_input`<sup>Optional</sup> <a name="ftps_state_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.ftpsStateInput"></a>

```python
ftps_state_input: str
```

- *Type:* str

---

##### `health_check_eviction_time_in_min_input`<sup>Optional</sup> <a name="health_check_eviction_time_in_min_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMinInput"></a>

```python
health_check_eviction_time_in_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_path_input`<sup>Optional</sup> <a name="health_check_path_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.healthCheckPathInput"></a>

```python
health_check_path_input: str
```

- *Type:* str

---

##### `http2_enabled_input`<sup>Optional</sup> <a name="http2_enabled_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.http2EnabledInput"></a>

```python
http2_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_restriction_input`<sup>Optional</sup> <a name="ip_restriction_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.ipRestrictionInput"></a>

```python
ip_restriction_input: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigIpRestriction">WindowsFunctionAppSiteConfigIpRestriction</a>]]

---

##### `load_balancing_mode_input`<sup>Optional</sup> <a name="load_balancing_mode_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.loadBalancingModeInput"></a>

```python
load_balancing_mode_input: str
```

- *Type:* str

---

##### `managed_pipeline_mode_input`<sup>Optional</sup> <a name="managed_pipeline_mode_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.managedPipelineModeInput"></a>

```python
managed_pipeline_mode_input: str
```

- *Type:* str

---

##### `minimum_tls_version_input`<sup>Optional</sup> <a name="minimum_tls_version_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.minimumTlsVersionInput"></a>

```python
minimum_tls_version_input: str
```

- *Type:* str

---

##### `pre_warmed_instance_count_input`<sup>Optional</sup> <a name="pre_warmed_instance_count_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCountInput"></a>

```python
pre_warmed_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `remote_debugging_enabled_input`<sup>Optional</sup> <a name="remote_debugging_enabled_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabledInput"></a>

```python
remote_debugging_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remote_debugging_version_input`<sup>Optional</sup> <a name="remote_debugging_version_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersionInput"></a>

```python
remote_debugging_version_input: str
```

- *Type:* str

---

##### `runtime_scale_monitoring_enabled_input`<sup>Optional</sup> <a name="runtime_scale_monitoring_enabled_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput"></a>

```python
runtime_scale_monitoring_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scm_ip_restriction_input`<sup>Optional</sup> <a name="scm_ip_restriction_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```python
scm_ip_restriction_input: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigScmIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction">WindowsFunctionAppSiteConfigScmIpRestriction</a>]]

---

##### `scm_minimum_tls_version_input`<sup>Optional</sup> <a name="scm_minimum_tls_version_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersionInput"></a>

```python
scm_minimum_tls_version_input: str
```

- *Type:* str

---

##### `scm_use_main_ip_restriction_input`<sup>Optional</sup> <a name="scm_use_main_ip_restriction_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```python
scm_use_main_ip_restriction_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use32_bit_worker_input`<sup>Optional</sup> <a name="use32_bit_worker_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.use32BitWorkerInput"></a>

```python
use32_bit_worker_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnet_route_all_enabled_input`<sup>Optional</sup> <a name="vnet_route_all_enabled_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```python
vnet_route_all_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `websockets_enabled_input`<sup>Optional</sup> <a name="websockets_enabled_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```python
websockets_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `worker_count_input`<sup>Optional</sup> <a name="worker_count_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.workerCountInput"></a>

```python
worker_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `always_on`<sup>Required</sup> <a name="always_on" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.alwaysOn"></a>

```python
always_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `api_definition_url`<sup>Required</sup> <a name="api_definition_url" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.apiDefinitionUrl"></a>

```python
api_definition_url: str
```

- *Type:* str

---

##### `api_management_api_id`<sup>Required</sup> <a name="api_management_api_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.apiManagementApiId"></a>

```python
api_management_api_id: str
```

- *Type:* str

---

##### `app_command_line`<sup>Required</sup> <a name="app_command_line" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appCommandLine"></a>

```python
app_command_line: str
```

- *Type:* str

---

##### `application_insights_connection_string`<sup>Required</sup> <a name="application_insights_connection_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionString"></a>

```python
application_insights_connection_string: str
```

- *Type:* str

---

##### `application_insights_key`<sup>Required</sup> <a name="application_insights_key" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsKey"></a>

```python
application_insights_key: str
```

- *Type:* str

---

##### `app_scale_limit`<sup>Required</sup> <a name="app_scale_limit" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.appScaleLimit"></a>

```python
app_scale_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_documents`<sup>Required</sup> <a name="default_documents" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.defaultDocuments"></a>

```python
default_documents: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `elastic_instance_minimum`<sup>Required</sup> <a name="elastic_instance_minimum" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```python
elastic_instance_minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ftps_state`<sup>Required</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.ftpsState"></a>

```python
ftps_state: str
```

- *Type:* str

---

##### `health_check_eviction_time_in_min`<sup>Required</sup> <a name="health_check_eviction_time_in_min" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMin"></a>

```python
health_check_eviction_time_in_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_path`<sup>Required</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

---

##### `http2_enabled`<sup>Required</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.http2Enabled"></a>

```python
http2_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `load_balancing_mode`<sup>Required</sup> <a name="load_balancing_mode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.loadBalancingMode"></a>

```python
load_balancing_mode: str
```

- *Type:* str

---

##### `managed_pipeline_mode`<sup>Required</sup> <a name="managed_pipeline_mode" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.managedPipelineMode"></a>

```python
managed_pipeline_mode: str
```

- *Type:* str

---

##### `minimum_tls_version`<sup>Required</sup> <a name="minimum_tls_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.minimumTlsVersion"></a>

```python
minimum_tls_version: str
```

- *Type:* str

---

##### `pre_warmed_instance_count`<sup>Required</sup> <a name="pre_warmed_instance_count" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```python
pre_warmed_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `remote_debugging_enabled`<sup>Required</sup> <a name="remote_debugging_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabled"></a>

```python
remote_debugging_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remote_debugging_version`<sup>Required</sup> <a name="remote_debugging_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersion"></a>

```python
remote_debugging_version: str
```

- *Type:* str

---

##### `runtime_scale_monitoring_enabled`<sup>Required</sup> <a name="runtime_scale_monitoring_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```python
runtime_scale_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scm_minimum_tls_version`<sup>Required</sup> <a name="scm_minimum_tls_version" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersion"></a>

```python
scm_minimum_tls_version: str
```

- *Type:* str

---

##### `scm_use_main_ip_restriction`<sup>Required</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```python
scm_use_main_ip_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use32_bit_worker`<sup>Required</sup> <a name="use32_bit_worker" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.use32BitWorker"></a>

```python
use32_bit_worker: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnet_route_all_enabled`<sup>Required</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```python
vnet_route_all_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `websockets_enabled`<sup>Required</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.websocketsEnabled"></a>

```python
websockets_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `worker_count`<sup>Required</sup> <a name="worker_count" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.workerCount"></a>

```python
worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigOutputReference.property.internalValue"></a>

```python
internal_value: WindowsFunctionAppSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfig">WindowsFunctionAppSiteConfig</a>

---


### WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList <a name="WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigScmIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a>]]

---


### WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference <a name="WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">reset_x_azure_fdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">reset_x_fd_health_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">reset_x_forwarded_for</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">reset_x_forwarded_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x_azure_fdid` <a name="reset_x_azure_fdid" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```python
def reset_x_azure_fdid() -> None
```

##### `reset_x_fd_health_probe` <a name="reset_x_fd_health_probe" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```python
def reset_x_fd_health_probe() -> None
```

##### `reset_x_forwarded_for` <a name="reset_x_forwarded_for" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```python
def reset_x_forwarded_for() -> None
```

##### `reset_x_forwarded_host` <a name="reset_x_forwarded_host" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```python
def reset_x_forwarded_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">x_azure_fdid_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">x_fd_health_probe_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">x_forwarded_for_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">x_forwarded_host_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_azure_fdid_input`<sup>Optional</sup> <a name="x_azure_fdid_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```python
x_azure_fdid_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe_input`<sup>Optional</sup> <a name="x_fd_health_probe_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```python
x_fd_health_probe_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for_input`<sup>Optional</sup> <a name="x_forwarded_for_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```python
x_forwarded_for_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host_input`<sup>Optional</sup> <a name="x_forwarded_host_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```python
x_forwarded_host_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_azure_fdid`<sup>Required</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe`<sup>Required</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for`<sup>Required</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host`<sup>Required</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WindowsFunctionAppSiteConfigScmIpRestrictionHeaders, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a>, cdktf.IResolvable]

---


### WindowsFunctionAppSiteConfigScmIpRestrictionList <a name="WindowsFunctionAppSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction">WindowsFunctionAppSiteConfigScmIpRestriction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigScmIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction">WindowsFunctionAppSiteConfigScmIpRestriction</a>]]

---


### WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference <a name="WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetServiceTag">reset_service_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">reset_virtual_network_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigScmIpRestrictionHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_service_tag` <a name="reset_service_tag" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```python
def reset_service_tag() -> None
```

##### `reset_virtual_network_subnet_id` <a name="reset_virtual_network_subnet_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```python
def reset_virtual_network_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList">WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">service_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtual_network_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag">service_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction">WindowsFunctionAppSiteConfigScmIpRestriction</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```python
headers: WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList">WindowsFunctionAppSiteConfigScmIpRestrictionHeadersList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[WindowsFunctionAppSiteConfigScmIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionHeaders">WindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a>]]

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag_input`<sup>Optional</sup> <a name="service_tag_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```python
service_tag_input: str
```

- *Type:* str

---

##### `virtual_network_subnet_id_input`<sup>Optional</sup> <a name="virtual_network_subnet_id_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```python
virtual_network_subnet_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag`<sup>Required</sup> <a name="service_tag" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WindowsFunctionAppSiteConfigScmIpRestriction, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteConfigScmIpRestriction">WindowsFunctionAppSiteConfigScmIpRestriction</a>, cdktf.IResolvable]

---


### WindowsFunctionAppSiteCredentialList <a name="WindowsFunctionAppSiteCredentialList" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteCredentialList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WindowsFunctionAppSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WindowsFunctionAppSiteCredentialOutputReference <a name="WindowsFunctionAppSiteCredentialOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredential">WindowsFunctionAppSiteCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredentialOutputReference.property.internalValue"></a>

```python
internal_value: WindowsFunctionAppSiteCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppSiteCredential">WindowsFunctionAppSiteCredential</a>

---


### WindowsFunctionAppStickySettingsOutputReference <a name="WindowsFunctionAppStickySettingsOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.resetAppSettingNames">reset_app_setting_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.resetConnectionStringNames">reset_connection_string_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_setting_names` <a name="reset_app_setting_names" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.resetAppSettingNames"></a>

```python
def reset_app_setting_names() -> None
```

##### `reset_connection_string_names` <a name="reset_connection_string_names" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.resetConnectionStringNames"></a>

```python
def reset_connection_string_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.appSettingNamesInput">app_setting_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.connectionStringNamesInput">connection_string_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.appSettingNames">app_setting_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.connectionStringNames">connection_string_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings">WindowsFunctionAppStickySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_setting_names_input`<sup>Optional</sup> <a name="app_setting_names_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.appSettingNamesInput"></a>

```python
app_setting_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_string_names_input`<sup>Optional</sup> <a name="connection_string_names_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.connectionStringNamesInput"></a>

```python
connection_string_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_setting_names`<sup>Required</sup> <a name="app_setting_names" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.appSettingNames"></a>

```python
app_setting_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_string_names`<sup>Required</sup> <a name="connection_string_names" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.connectionStringNames"></a>

```python
connection_string_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettingsOutputReference.property.internalValue"></a>

```python
internal_value: WindowsFunctionAppStickySettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStickySettings">WindowsFunctionAppStickySettings</a>

---


### WindowsFunctionAppStorageAccountList <a name="WindowsFunctionAppStorageAccountList" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppStorageAccountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WindowsFunctionAppStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WindowsFunctionAppStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a>]]

---


### WindowsFunctionAppStorageAccountOutputReference <a name="WindowsFunctionAppStorageAccountOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.resetMountPath">reset_mount_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mount_path` <a name="reset_mount_path" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.resetMountPath"></a>

```python
def reset_mount_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.accessKeyInput">access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.shareNameInput">share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.accessKey">access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.shareName">share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key_input`<sup>Optional</sup> <a name="access_key_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.accessKeyInput"></a>

```python
access_key_input: str
```

- *Type:* str

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `share_name_input`<sup>Optional</sup> <a name="share_name_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.shareNameInput"></a>

```python
share_name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccountOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WindowsFunctionAppStorageAccount, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppStorageAccount">WindowsFunctionAppStorageAccount</a>, cdktf.IResolvable]

---


### WindowsFunctionAppTimeoutsOutputReference <a name="WindowsFunctionAppTimeoutsOutputReference" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import windows_function_app

windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts">WindowsFunctionAppTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WindowsFunctionAppTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.windowsFunctionApp.WindowsFunctionAppTimeouts">WindowsFunctionAppTimeouts</a>, cdktf.IResolvable]

---



