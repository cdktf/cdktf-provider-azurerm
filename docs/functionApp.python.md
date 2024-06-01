# `functionApp` Submodule <a name="`functionApp` Submodule" id="@cdktf/provider-azurerm.functionApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionApp <a name="FunctionApp" id="@cdktf/provider-azurerm.functionApp.FunctionApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app azurerm_function_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionApp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_service_plan_id: str,
  location: str,
  name: str,
  resource_group_name: str,
  storage_account_access_key: str,
  storage_account_name: str,
  app_settings: typing.Mapping[str] = None,
  auth_settings: FunctionAppAuthSettings = None,
  client_cert_mode: str = None,
  connection_string: typing.Union[IResolvable, typing.List[FunctionAppConnectionString]] = None,
  daily_memory_time_quota: typing.Union[int, float] = None,
  enable_builtin_logging: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  https_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: FunctionAppIdentity = None,
  key_vault_reference_identity_id: str = None,
  os_type: str = None,
  site_config: FunctionAppSiteConfig = None,
  source_control: FunctionAppSourceControl = None,
  tags: typing.Mapping[str] = None,
  timeouts: FunctionAppTimeouts = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.appServicePlanId">app_service_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#app_service_plan_id FunctionApp#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#location FunctionApp#location}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#name FunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#resource_group_name FunctionApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#storage_account_access_key FunctionApp#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#storage_account_name FunctionApp#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#app_settings FunctionApp#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.authSettings">auth_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.clientCertMode">client_cert_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_cert_mode FunctionApp#client_cert_mode}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.connectionString">connection_string</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>]]</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.dailyMemoryTimeQuota">daily_memory_time_quota</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#daily_memory_time_quota FunctionApp#daily_memory_time_quota}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.enableBuiltinLogging">enable_builtin_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#enable_builtin_logging FunctionApp#enable_builtin_logging}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#enabled FunctionApp#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#https_only FunctionApp#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#id FunctionApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.keyVaultReferenceIdentityId">key_vault_reference_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#key_vault_reference_identity_id FunctionApp#key_vault_reference_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.osType">os_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#os_type FunctionApp#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.sourceControl">source_control</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a></code> | source_control block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#tags FunctionApp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#version FunctionApp#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_service_plan_id`<sup>Required</sup> <a name="app_service_plan_id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.appServicePlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#app_service_plan_id FunctionApp#app_service_plan_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#location FunctionApp#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#name FunctionApp#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#resource_group_name FunctionApp#resource_group_name}.

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.storageAccountAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#storage_account_access_key FunctionApp#storage_account_access_key}.

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.storageAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#storage_account_name FunctionApp#storage_account_name}.

---

##### `app_settings`<sup>Optional</sup> <a name="app_settings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.appSettings"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#app_settings FunctionApp#app_settings}.

---

##### `auth_settings`<sup>Optional</sup> <a name="auth_settings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.authSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#auth_settings FunctionApp#auth_settings}

---

##### `client_cert_mode`<sup>Optional</sup> <a name="client_cert_mode" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.clientCertMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_cert_mode FunctionApp#client_cert_mode}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.connectionString"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>]]

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#connection_string FunctionApp#connection_string}

---

##### `daily_memory_time_quota`<sup>Optional</sup> <a name="daily_memory_time_quota" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.dailyMemoryTimeQuota"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#daily_memory_time_quota FunctionApp#daily_memory_time_quota}.

---

##### `enable_builtin_logging`<sup>Optional</sup> <a name="enable_builtin_logging" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.enableBuiltinLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#enable_builtin_logging FunctionApp#enable_builtin_logging}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#enabled FunctionApp#enabled}.

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.httpsOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#https_only FunctionApp#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#id FunctionApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#identity FunctionApp#identity}

---

##### `key_vault_reference_identity_id`<sup>Optional</sup> <a name="key_vault_reference_identity_id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.keyVaultReferenceIdentityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#key_vault_reference_identity_id FunctionApp#key_vault_reference_identity_id}.

---

##### `os_type`<sup>Optional</sup> <a name="os_type" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.osType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#os_type FunctionApp#os_type}.

---

##### `site_config`<sup>Optional</sup> <a name="site_config" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.siteConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#site_config FunctionApp#site_config}

---

##### `source_control`<sup>Optional</sup> <a name="source_control" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.sourceControl"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a>

source_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#source_control FunctionApp#source_control}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#tags FunctionApp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#timeouts FunctionApp#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.functionApp.FunctionApp.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#version FunctionApp#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings">put_auth_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putConnectionString">put_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig">put_site_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putSourceControl">put_source_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetAppSettings">reset_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetAuthSettings">reset_auth_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetClientCertMode">reset_client_cert_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetConnectionString">reset_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetDailyMemoryTimeQuota">reset_daily_memory_time_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetEnableBuiltinLogging">reset_enable_builtin_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetHttpsOnly">reset_https_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetKeyVaultReferenceIdentityId">reset_key_vault_reference_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetOsType">reset_os_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetSiteConfig">reset_site_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetSourceControl">reset_source_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.functionApp.FunctionApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.functionApp.FunctionApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.functionApp.FunctionApp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.functionApp.FunctionApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.functionApp.FunctionApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.functionApp.FunctionApp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.functionApp.FunctionApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.functionApp.FunctionApp.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.functionApp.FunctionApp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionApp.FunctionApp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.functionApp.FunctionApp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.functionApp.FunctionApp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.functionApp.FunctionApp.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auth_settings` <a name="put_auth_settings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings"></a>

```python
def put_auth_settings(
  enabled: typing.Union[bool, IResolvable],
  active_directory: FunctionAppAuthSettingsActiveDirectory = None,
  additional_login_params: typing.Mapping[str] = None,
  allowed_external_redirect_urls: typing.List[str] = None,
  default_provider: str = None,
  facebook: FunctionAppAuthSettingsFacebook = None,
  google: FunctionAppAuthSettingsGoogle = None,
  issuer: str = None,
  microsoft: FunctionAppAuthSettingsMicrosoft = None,
  runtime_version: str = None,
  token_refresh_extension_hours: typing.Union[int, float] = None,
  token_store_enabled: typing.Union[bool, IResolvable] = None,
  twitter: FunctionAppAuthSettingsTwitter = None,
  unauthenticated_client_action: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#enabled FunctionApp#enabled}.

---

###### `active_directory`<sup>Optional</sup> <a name="active_directory" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings.parameter.activeDirectory"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#active_directory FunctionApp#active_directory}

---

###### `additional_login_params`<sup>Optional</sup> <a name="additional_login_params" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings.parameter.additionalLoginParams"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#additional_login_params FunctionApp#additional_login_params}.

---

###### `allowed_external_redirect_urls`<sup>Optional</sup> <a name="allowed_external_redirect_urls" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings.parameter.allowedExternalRedirectUrls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#allowed_external_redirect_urls FunctionApp#allowed_external_redirect_urls}.

---

###### `default_provider`<sup>Optional</sup> <a name="default_provider" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings.parameter.defaultProvider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#default_provider FunctionApp#default_provider}.

---

###### `facebook`<sup>Optional</sup> <a name="facebook" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings.parameter.facebook"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#facebook FunctionApp#facebook}

---

###### `google`<sup>Optional</sup> <a name="google" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings.parameter.google"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#google FunctionApp#google}

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#issuer FunctionApp#issuer}.

---

###### `microsoft`<sup>Optional</sup> <a name="microsoft" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings.parameter.microsoft"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#microsoft FunctionApp#microsoft}

---

###### `runtime_version`<sup>Optional</sup> <a name="runtime_version" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings.parameter.runtimeVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#runtime_version FunctionApp#runtime_version}.

---

###### `token_refresh_extension_hours`<sup>Optional</sup> <a name="token_refresh_extension_hours" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings.parameter.tokenRefreshExtensionHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#token_refresh_extension_hours FunctionApp#token_refresh_extension_hours}.

---

###### `token_store_enabled`<sup>Optional</sup> <a name="token_store_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings.parameter.tokenStoreEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#token_store_enabled FunctionApp#token_store_enabled}.

---

###### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings.parameter.twitter"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#twitter FunctionApp#twitter}

---

###### `unauthenticated_client_action`<sup>Optional</sup> <a name="unauthenticated_client_action" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putAuthSettings.parameter.unauthenticatedClientAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#unauthenticated_client_action FunctionApp#unauthenticated_client_action}.

---

##### `put_connection_string` <a name="put_connection_string" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putConnectionString"></a>

```python
def put_connection_string(
  value: typing.Union[IResolvable, typing.List[FunctionAppConnectionString]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putConnectionString.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>]]

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#type FunctionApp#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#identity_ids FunctionApp#identity_ids}.

---

##### `put_site_config` <a name="put_site_config" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig"></a>

```python
def put_site_config(
  always_on: typing.Union[bool, IResolvable] = None,
  app_scale_limit: typing.Union[int, float] = None,
  auto_swap_slot_name: str = None,
  cors: FunctionAppSiteConfigCors = None,
  dotnet_framework_version: str = None,
  elastic_instance_minimum: typing.Union[int, float] = None,
  ftps_state: str = None,
  health_check_path: str = None,
  http2_enabled: typing.Union[bool, IResolvable] = None,
  ip_restriction: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigIpRestriction]] = None,
  java_version: str = None,
  linux_fx_version: str = None,
  min_tls_version: str = None,
  pre_warmed_instance_count: typing.Union[int, float] = None,
  runtime_scale_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  scm_ip_restriction: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigScmIpRestriction]] = None,
  scm_type: str = None,
  scm_use_main_ip_restriction: typing.Union[bool, IResolvable] = None,
  use32_bit_worker_process: typing.Union[bool, IResolvable] = None,
  vnet_route_all_enabled: typing.Union[bool, IResolvable] = None,
  websockets_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `always_on`<sup>Optional</sup> <a name="always_on" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.alwaysOn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#always_on FunctionApp#always_on}.

---

###### `app_scale_limit`<sup>Optional</sup> <a name="app_scale_limit" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.appScaleLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#app_scale_limit FunctionApp#app_scale_limit}.

---

###### `auto_swap_slot_name`<sup>Optional</sup> <a name="auto_swap_slot_name" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.autoSwapSlotName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#auto_swap_slot_name FunctionApp#auto_swap_slot_name}.

---

###### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.cors"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#cors FunctionApp#cors}

---

###### `dotnet_framework_version`<sup>Optional</sup> <a name="dotnet_framework_version" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.dotnetFrameworkVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#dotnet_framework_version FunctionApp#dotnet_framework_version}.

---

###### `elastic_instance_minimum`<sup>Optional</sup> <a name="elastic_instance_minimum" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.elasticInstanceMinimum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#elastic_instance_minimum FunctionApp#elastic_instance_minimum}.

---

###### `ftps_state`<sup>Optional</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.ftpsState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#ftps_state FunctionApp#ftps_state}.

---

###### `health_check_path`<sup>Optional</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.healthCheckPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#health_check_path FunctionApp#health_check_path}.

---

###### `http2_enabled`<sup>Optional</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.http2Enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#http2_enabled FunctionApp#http2_enabled}.

---

###### `ip_restriction`<sup>Optional</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.ipRestriction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#ip_restriction FunctionApp#ip_restriction}.

---

###### `java_version`<sup>Optional</sup> <a name="java_version" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.javaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#java_version FunctionApp#java_version}.

---

###### `linux_fx_version`<sup>Optional</sup> <a name="linux_fx_version" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.linuxFxVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#linux_fx_version FunctionApp#linux_fx_version}.

---

###### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.minTlsVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#min_tls_version FunctionApp#min_tls_version}.

---

###### `pre_warmed_instance_count`<sup>Optional</sup> <a name="pre_warmed_instance_count" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.preWarmedInstanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#pre_warmed_instance_count FunctionApp#pre_warmed_instance_count}.

---

###### `runtime_scale_monitoring_enabled`<sup>Optional</sup> <a name="runtime_scale_monitoring_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.runtimeScaleMonitoringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#runtime_scale_monitoring_enabled FunctionApp#runtime_scale_monitoring_enabled}.

---

###### `scm_ip_restriction`<sup>Optional</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.scmIpRestriction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#scm_ip_restriction FunctionApp#scm_ip_restriction}.

---

###### `scm_type`<sup>Optional</sup> <a name="scm_type" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.scmType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#scm_type FunctionApp#scm_type}.

---

###### `scm_use_main_ip_restriction`<sup>Optional</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.scmUseMainIpRestriction"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#scm_use_main_ip_restriction FunctionApp#scm_use_main_ip_restriction}.

---

###### `use32_bit_worker_process`<sup>Optional</sup> <a name="use32_bit_worker_process" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.use32BitWorkerProcess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#use_32_bit_worker_process FunctionApp#use_32_bit_worker_process}.

---

###### `vnet_route_all_enabled`<sup>Optional</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.vnetRouteAllEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#vnet_route_all_enabled FunctionApp#vnet_route_all_enabled}.

---

###### `websockets_enabled`<sup>Optional</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSiteConfig.parameter.websocketsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#websockets_enabled FunctionApp#websockets_enabled}.

---

##### `put_source_control` <a name="put_source_control" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSourceControl"></a>

```python
def put_source_control(
  branch: str = None,
  manual_integration: typing.Union[bool, IResolvable] = None,
  repo_url: str = None,
  rollback_enabled: typing.Union[bool, IResolvable] = None,
  use_mercurial: typing.Union[bool, IResolvable] = None
) -> None
```

###### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSourceControl.parameter.branch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#branch FunctionApp#branch}.

---

###### `manual_integration`<sup>Optional</sup> <a name="manual_integration" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSourceControl.parameter.manualIntegration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#manual_integration FunctionApp#manual_integration}.

---

###### `repo_url`<sup>Optional</sup> <a name="repo_url" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSourceControl.parameter.repoUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#repo_url FunctionApp#repo_url}.

---

###### `rollback_enabled`<sup>Optional</sup> <a name="rollback_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSourceControl.parameter.rollbackEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#rollback_enabled FunctionApp#rollback_enabled}.

---

###### `use_mercurial`<sup>Optional</sup> <a name="use_mercurial" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putSourceControl.parameter.useMercurial"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#use_mercurial FunctionApp#use_mercurial}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#create FunctionApp#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#delete FunctionApp#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#read FunctionApp#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.functionApp.FunctionApp.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#update FunctionApp#update}.

---

##### `reset_app_settings` <a name="reset_app_settings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetAppSettings"></a>

```python
def reset_app_settings() -> None
```

##### `reset_auth_settings` <a name="reset_auth_settings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetAuthSettings"></a>

```python
def reset_auth_settings() -> None
```

##### `reset_client_cert_mode` <a name="reset_client_cert_mode" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetClientCertMode"></a>

```python
def reset_client_cert_mode() -> None
```

##### `reset_connection_string` <a name="reset_connection_string" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetConnectionString"></a>

```python
def reset_connection_string() -> None
```

##### `reset_daily_memory_time_quota` <a name="reset_daily_memory_time_quota" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetDailyMemoryTimeQuota"></a>

```python
def reset_daily_memory_time_quota() -> None
```

##### `reset_enable_builtin_logging` <a name="reset_enable_builtin_logging" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetEnableBuiltinLogging"></a>

```python
def reset_enable_builtin_logging() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_https_only` <a name="reset_https_only" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetHttpsOnly"></a>

```python
def reset_https_only() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_key_vault_reference_identity_id` <a name="reset_key_vault_reference_identity_id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetKeyVaultReferenceIdentityId"></a>

```python
def reset_key_vault_reference_identity_id() -> None
```

##### `reset_os_type` <a name="reset_os_type" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetOsType"></a>

```python
def reset_os_type() -> None
```

##### `reset_site_config` <a name="reset_site_config" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetSiteConfig"></a>

```python
def reset_site_config() -> None
```

##### `reset_source_control` <a name="reset_source_control" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetSourceControl"></a>

```python
def reset_source_control() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.functionApp.FunctionApp.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FunctionApp resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionApp.FunctionApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.functionApp.FunctionApp.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionApp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FunctionApp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.functionApp.FunctionApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FunctionApp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FunctionApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionApp.FunctionApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FunctionApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.authSettings">auth_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference">FunctionAppAuthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.connectionString">connection_string</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList">FunctionAppConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.customDomainVerificationId">custom_domain_verification_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.defaultHostname">default_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference">FunctionAppIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.outboundIpAddresses">outbound_ip_addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.possibleOutboundIpAddresses">possible_outbound_ip_addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference">FunctionAppSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteCredential">site_credential</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList">FunctionAppSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.sourceControl">source_control</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference">FunctionAppSourceControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference">FunctionAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.appServicePlanIdInput">app_service_plan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.appSettingsInput">app_settings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.authSettingsInput">auth_settings_input</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.clientCertModeInput">client_cert_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.connectionStringInput">connection_string_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.dailyMemoryTimeQuotaInput">daily_memory_time_quota_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.enableBuiltinLoggingInput">enable_builtin_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.httpsOnlyInput">https_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.keyVaultReferenceIdentityIdInput">key_vault_reference_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.osTypeInput">os_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteConfigInput">site_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.sourceControlInput">source_control_input</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountAccessKeyInput">storage_account_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountNameInput">storage_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.appServicePlanId">app_service_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.clientCertMode">client_cert_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.dailyMemoryTimeQuota">daily_memory_time_quota</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.enableBuiltinLogging">enable_builtin_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.keyVaultReferenceIdentityId">key_vault_reference_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_settings`<sup>Required</sup> <a name="auth_settings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.authSettings"></a>

```python
auth_settings: FunctionAppAuthSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference">FunctionAppAuthSettingsOutputReference</a>

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.connectionString"></a>

```python
connection_string: FunctionAppConnectionStringList
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList">FunctionAppConnectionStringList</a>

---

##### `custom_domain_verification_id`<sup>Required</sup> <a name="custom_domain_verification_id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.customDomainVerificationId"></a>

```python
custom_domain_verification_id: str
```

- *Type:* str

---

##### `default_hostname`<sup>Required</sup> <a name="default_hostname" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.defaultHostname"></a>

```python
default_hostname: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.identity"></a>

```python
identity: FunctionAppIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference">FunctionAppIdentityOutputReference</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `outbound_ip_addresses`<sup>Required</sup> <a name="outbound_ip_addresses" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.outboundIpAddresses"></a>

```python
outbound_ip_addresses: str
```

- *Type:* str

---

##### `possible_outbound_ip_addresses`<sup>Required</sup> <a name="possible_outbound_ip_addresses" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.possibleOutboundIpAddresses"></a>

```python
possible_outbound_ip_addresses: str
```

- *Type:* str

---

##### `site_config`<sup>Required</sup> <a name="site_config" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteConfig"></a>

```python
site_config: FunctionAppSiteConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference">FunctionAppSiteConfigOutputReference</a>

---

##### `site_credential`<sup>Required</sup> <a name="site_credential" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteCredential"></a>

```python
site_credential: FunctionAppSiteCredentialList
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList">FunctionAppSiteCredentialList</a>

---

##### `source_control`<sup>Required</sup> <a name="source_control" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.sourceControl"></a>

```python
source_control: FunctionAppSourceControlOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference">FunctionAppSourceControlOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.timeouts"></a>

```python
timeouts: FunctionAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference">FunctionAppTimeoutsOutputReference</a>

---

##### `app_service_plan_id_input`<sup>Optional</sup> <a name="app_service_plan_id_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.appServicePlanIdInput"></a>

```python
app_service_plan_id_input: str
```

- *Type:* str

---

##### `app_settings_input`<sup>Optional</sup> <a name="app_settings_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.appSettingsInput"></a>

```python
app_settings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `auth_settings_input`<sup>Optional</sup> <a name="auth_settings_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.authSettingsInput"></a>

```python
auth_settings_input: FunctionAppAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a>

---

##### `client_cert_mode_input`<sup>Optional</sup> <a name="client_cert_mode_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.clientCertModeInput"></a>

```python
client_cert_mode_input: str
```

- *Type:* str

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.connectionStringInput"></a>

```python
connection_string_input: typing.Union[IResolvable, typing.List[FunctionAppConnectionString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>]]

---

##### `daily_memory_time_quota_input`<sup>Optional</sup> <a name="daily_memory_time_quota_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.dailyMemoryTimeQuotaInput"></a>

```python
daily_memory_time_quota_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_builtin_logging_input`<sup>Optional</sup> <a name="enable_builtin_logging_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.enableBuiltinLoggingInput"></a>

```python
enable_builtin_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `https_only_input`<sup>Optional</sup> <a name="https_only_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.httpsOnlyInput"></a>

```python
https_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.identityInput"></a>

```python
identity_input: FunctionAppIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_reference_identity_id_input`<sup>Optional</sup> <a name="key_vault_reference_identity_id_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.keyVaultReferenceIdentityIdInput"></a>

```python
key_vault_reference_identity_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `os_type_input`<sup>Optional</sup> <a name="os_type_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.osTypeInput"></a>

```python
os_type_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `site_config_input`<sup>Optional</sup> <a name="site_config_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.siteConfigInput"></a>

```python
site_config_input: FunctionAppSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a>

---

##### `source_control_input`<sup>Optional</sup> <a name="source_control_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.sourceControlInput"></a>

```python
source_control_input: FunctionAppSourceControl
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a>

---

##### `storage_account_access_key_input`<sup>Optional</sup> <a name="storage_account_access_key_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountAccessKeyInput"></a>

```python
storage_account_access_key_input: str
```

- *Type:* str

---

##### `storage_account_name_input`<sup>Optional</sup> <a name="storage_account_name_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountNameInput"></a>

```python
storage_account_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FunctionAppTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `app_service_plan_id`<sup>Required</sup> <a name="app_service_plan_id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.appServicePlanId"></a>

```python
app_service_plan_id: str
```

- *Type:* str

---

##### `app_settings`<sup>Required</sup> <a name="app_settings" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.appSettings"></a>

```python
app_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `client_cert_mode`<sup>Required</sup> <a name="client_cert_mode" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.clientCertMode"></a>

```python
client_cert_mode: str
```

- *Type:* str

---

##### `daily_memory_time_quota`<sup>Required</sup> <a name="daily_memory_time_quota" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.dailyMemoryTimeQuota"></a>

```python
daily_memory_time_quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_builtin_logging`<sup>Required</sup> <a name="enable_builtin_logging" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.enableBuiltinLogging"></a>

```python
enable_builtin_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `https_only`<sup>Required</sup> <a name="https_only" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.httpsOnly"></a>

```python
https_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_vault_reference_identity_id`<sup>Required</sup> <a name="key_vault_reference_identity_id" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.keyVaultReferenceIdentityId"></a>

```python
key_vault_reference_identity_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.functionApp.FunctionApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionAppAuthSettings <a name="FunctionAppAuthSettings" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppAuthSettings(
  enabled: typing.Union[bool, IResolvable],
  active_directory: FunctionAppAuthSettingsActiveDirectory = None,
  additional_login_params: typing.Mapping[str] = None,
  allowed_external_redirect_urls: typing.List[str] = None,
  default_provider: str = None,
  facebook: FunctionAppAuthSettingsFacebook = None,
  google: FunctionAppAuthSettingsGoogle = None,
  issuer: str = None,
  microsoft: FunctionAppAuthSettingsMicrosoft = None,
  runtime_version: str = None,
  token_refresh_extension_hours: typing.Union[int, float] = None,
  token_store_enabled: typing.Union[bool, IResolvable] = None,
  twitter: FunctionAppAuthSettingsTwitter = None,
  unauthenticated_client_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#enabled FunctionApp#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.activeDirectory">active_directory</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.additionalLoginParams">additional_login_params</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#additional_login_params FunctionApp#additional_login_params}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.allowedExternalRedirectUrls">allowed_external_redirect_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#allowed_external_redirect_urls FunctionApp#allowed_external_redirect_urls}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.defaultProvider">default_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#default_provider FunctionApp#default_provider}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a></code> | facebook block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a></code> | google block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#issuer FunctionApp#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a></code> | microsoft block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#runtime_version FunctionApp#runtime_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.tokenRefreshExtensionHours">token_refresh_extension_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#token_refresh_extension_hours FunctionApp#token_refresh_extension_hours}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.tokenStoreEnabled">token_store_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#token_store_enabled FunctionApp#token_store_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a></code> | twitter block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.unauthenticatedClientAction">unauthenticated_client_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#unauthenticated_client_action FunctionApp#unauthenticated_client_action}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#enabled FunctionApp#enabled}.

---

##### `active_directory`<sup>Optional</sup> <a name="active_directory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.activeDirectory"></a>

```python
active_directory: FunctionAppAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#active_directory FunctionApp#active_directory}

---

##### `additional_login_params`<sup>Optional</sup> <a name="additional_login_params" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.additionalLoginParams"></a>

```python
additional_login_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#additional_login_params FunctionApp#additional_login_params}.

---

##### `allowed_external_redirect_urls`<sup>Optional</sup> <a name="allowed_external_redirect_urls" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.allowedExternalRedirectUrls"></a>

```python
allowed_external_redirect_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#allowed_external_redirect_urls FunctionApp#allowed_external_redirect_urls}.

---

##### `default_provider`<sup>Optional</sup> <a name="default_provider" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.defaultProvider"></a>

```python
default_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#default_provider FunctionApp#default_provider}.

---

##### `facebook`<sup>Optional</sup> <a name="facebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.facebook"></a>

```python
facebook: FunctionAppAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#facebook FunctionApp#facebook}

---

##### `google`<sup>Optional</sup> <a name="google" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.google"></a>

```python
google: FunctionAppAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#google FunctionApp#google}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#issuer FunctionApp#issuer}.

---

##### `microsoft`<sup>Optional</sup> <a name="microsoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.microsoft"></a>

```python
microsoft: FunctionAppAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#microsoft FunctionApp#microsoft}

---

##### `runtime_version`<sup>Optional</sup> <a name="runtime_version" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#runtime_version FunctionApp#runtime_version}.

---

##### `token_refresh_extension_hours`<sup>Optional</sup> <a name="token_refresh_extension_hours" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.tokenRefreshExtensionHours"></a>

```python
token_refresh_extension_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#token_refresh_extension_hours FunctionApp#token_refresh_extension_hours}.

---

##### `token_store_enabled`<sup>Optional</sup> <a name="token_store_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.tokenStoreEnabled"></a>

```python
token_store_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#token_store_enabled FunctionApp#token_store_enabled}.

---

##### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.twitter"></a>

```python
twitter: FunctionAppAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#twitter FunctionApp#twitter}

---

##### `unauthenticated_client_action`<sup>Optional</sup> <a name="unauthenticated_client_action" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings.property.unauthenticatedClientAction"></a>

```python
unauthenticated_client_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#unauthenticated_client_action FunctionApp#unauthenticated_client_action}.

---

### FunctionAppAuthSettingsActiveDirectory <a name="FunctionAppAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppAuthSettingsActiveDirectory(
  client_id: str,
  allowed_audiences: typing.List[str] = None,
  client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_id FunctionApp#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#allowed_audiences FunctionApp#allowed_audiences}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_secret FunctionApp#client_secret}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_id FunctionApp#client_id}.

---

##### `allowed_audiences`<sup>Optional</sup> <a name="allowed_audiences" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.allowedAudiences"></a>

```python
allowed_audiences: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#allowed_audiences FunctionApp#allowed_audiences}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_secret FunctionApp#client_secret}.

---

### FunctionAppAuthSettingsFacebook <a name="FunctionAppAuthSettingsFacebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppAuthSettingsFacebook(
  app_id: str,
  app_secret: str,
  oauth_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#app_id FunctionApp#app_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.appSecret">app_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#app_secret FunctionApp#app_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}. |

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.appId"></a>

```python
app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#app_id FunctionApp#app_id}.

---

##### `app_secret`<sup>Required</sup> <a name="app_secret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.appSecret"></a>

```python
app_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#app_secret FunctionApp#app_secret}.

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}.

---

### FunctionAppAuthSettingsGoogle <a name="FunctionAppAuthSettingsGoogle" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppAuthSettingsGoogle(
  client_id: str,
  client_secret: str,
  oauth_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_id FunctionApp#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_secret FunctionApp#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_id FunctionApp#client_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_secret FunctionApp#client_secret}.

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}.

---

### FunctionAppAuthSettingsMicrosoft <a name="FunctionAppAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppAuthSettingsMicrosoft(
  client_id: str,
  client_secret: str,
  oauth_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_id FunctionApp#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_secret FunctionApp#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_id FunctionApp#client_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_secret FunctionApp#client_secret}.

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}.

---

### FunctionAppAuthSettingsTwitter <a name="FunctionAppAuthSettingsTwitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppAuthSettingsTwitter(
  consumer_key: str,
  consumer_secret: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.property.consumerKey">consumer_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#consumer_key FunctionApp#consumer_key}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#consumer_secret FunctionApp#consumer_secret}. |

---

##### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#consumer_key FunctionApp#consumer_key}.

---

##### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#consumer_secret FunctionApp#consumer_secret}.

---

### FunctionAppConfig <a name="FunctionAppConfig" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_service_plan_id: str,
  location: str,
  name: str,
  resource_group_name: str,
  storage_account_access_key: str,
  storage_account_name: str,
  app_settings: typing.Mapping[str] = None,
  auth_settings: FunctionAppAuthSettings = None,
  client_cert_mode: str = None,
  connection_string: typing.Union[IResolvable, typing.List[FunctionAppConnectionString]] = None,
  daily_memory_time_quota: typing.Union[int, float] = None,
  enable_builtin_logging: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  https_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: FunctionAppIdentity = None,
  key_vault_reference_identity_id: str = None,
  os_type: str = None,
  site_config: FunctionAppSiteConfig = None,
  source_control: FunctionAppSourceControl = None,
  tags: typing.Mapping[str] = None,
  timeouts: FunctionAppTimeouts = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.appServicePlanId">app_service_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#app_service_plan_id FunctionApp#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#location FunctionApp#location}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#name FunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#resource_group_name FunctionApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#storage_account_access_key FunctionApp#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#storage_account_name FunctionApp#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#app_settings FunctionApp#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.authSettings">auth_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.clientCertMode">client_cert_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_cert_mode FunctionApp#client_cert_mode}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.connectionString">connection_string</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>]]</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.dailyMemoryTimeQuota">daily_memory_time_quota</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#daily_memory_time_quota FunctionApp#daily_memory_time_quota}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.enableBuiltinLogging">enable_builtin_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#enable_builtin_logging FunctionApp#enable_builtin_logging}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#enabled FunctionApp#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#https_only FunctionApp#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#id FunctionApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.keyVaultReferenceIdentityId">key_vault_reference_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#key_vault_reference_identity_id FunctionApp#key_vault_reference_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.osType">os_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#os_type FunctionApp#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.sourceControl">source_control</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a></code> | source_control block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#tags FunctionApp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#version FunctionApp#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_service_plan_id`<sup>Required</sup> <a name="app_service_plan_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.appServicePlanId"></a>

```python
app_service_plan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#app_service_plan_id FunctionApp#app_service_plan_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#location FunctionApp#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#name FunctionApp#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#resource_group_name FunctionApp#resource_group_name}.

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#storage_account_access_key FunctionApp#storage_account_access_key}.

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#storage_account_name FunctionApp#storage_account_name}.

---

##### `app_settings`<sup>Optional</sup> <a name="app_settings" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.appSettings"></a>

```python
app_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#app_settings FunctionApp#app_settings}.

---

##### `auth_settings`<sup>Optional</sup> <a name="auth_settings" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.authSettings"></a>

```python
auth_settings: FunctionAppAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#auth_settings FunctionApp#auth_settings}

---

##### `client_cert_mode`<sup>Optional</sup> <a name="client_cert_mode" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.clientCertMode"></a>

```python
client_cert_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_cert_mode FunctionApp#client_cert_mode}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.connectionString"></a>

```python
connection_string: typing.Union[IResolvable, typing.List[FunctionAppConnectionString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>]]

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#connection_string FunctionApp#connection_string}

---

##### `daily_memory_time_quota`<sup>Optional</sup> <a name="daily_memory_time_quota" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.dailyMemoryTimeQuota"></a>

```python
daily_memory_time_quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#daily_memory_time_quota FunctionApp#daily_memory_time_quota}.

---

##### `enable_builtin_logging`<sup>Optional</sup> <a name="enable_builtin_logging" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.enableBuiltinLogging"></a>

```python
enable_builtin_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#enable_builtin_logging FunctionApp#enable_builtin_logging}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#enabled FunctionApp#enabled}.

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.httpsOnly"></a>

```python
https_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#https_only FunctionApp#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#id FunctionApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.identity"></a>

```python
identity: FunctionAppIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#identity FunctionApp#identity}

---

##### `key_vault_reference_identity_id`<sup>Optional</sup> <a name="key_vault_reference_identity_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.keyVaultReferenceIdentityId"></a>

```python
key_vault_reference_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#key_vault_reference_identity_id FunctionApp#key_vault_reference_identity_id}.

---

##### `os_type`<sup>Optional</sup> <a name="os_type" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.osType"></a>

```python
os_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#os_type FunctionApp#os_type}.

---

##### `site_config`<sup>Optional</sup> <a name="site_config" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.siteConfig"></a>

```python
site_config: FunctionAppSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#site_config FunctionApp#site_config}

---

##### `source_control`<sup>Optional</sup> <a name="source_control" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.sourceControl"></a>

```python
source_control: FunctionAppSourceControl
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a>

source_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#source_control FunctionApp#source_control}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#tags FunctionApp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.timeouts"></a>

```python
timeouts: FunctionAppTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#timeouts FunctionApp#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.functionApp.FunctionAppConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#version FunctionApp#version}.

---

### FunctionAppConnectionString <a name="FunctionAppConnectionString" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppConnectionString(
  name: str,
  type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#name FunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#type FunctionApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#value FunctionApp#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#name FunctionApp#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#type FunctionApp#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#value FunctionApp#value}.

---

### FunctionAppIdentity <a name="FunctionAppIdentity" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#type FunctionApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#identity_ids FunctionApp#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#type FunctionApp#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#identity_ids FunctionApp#identity_ids}.

---

### FunctionAppSiteConfig <a name="FunctionAppSiteConfig" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSiteConfig(
  always_on: typing.Union[bool, IResolvable] = None,
  app_scale_limit: typing.Union[int, float] = None,
  auto_swap_slot_name: str = None,
  cors: FunctionAppSiteConfigCors = None,
  dotnet_framework_version: str = None,
  elastic_instance_minimum: typing.Union[int, float] = None,
  ftps_state: str = None,
  health_check_path: str = None,
  http2_enabled: typing.Union[bool, IResolvable] = None,
  ip_restriction: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigIpRestriction]] = None,
  java_version: str = None,
  linux_fx_version: str = None,
  min_tls_version: str = None,
  pre_warmed_instance_count: typing.Union[int, float] = None,
  runtime_scale_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  scm_ip_restriction: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigScmIpRestriction]] = None,
  scm_type: str = None,
  scm_use_main_ip_restriction: typing.Union[bool, IResolvable] = None,
  use32_bit_worker_process: typing.Union[bool, IResolvable] = None,
  vnet_route_all_enabled: typing.Union[bool, IResolvable] = None,
  websockets_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.alwaysOn">always_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#always_on FunctionApp#always_on}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.appScaleLimit">app_scale_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#app_scale_limit FunctionApp#app_scale_limit}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.autoSwapSlotName">auto_swap_slot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#auto_swap_slot_name FunctionApp#auto_swap_slot_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.dotnetFrameworkVersion">dotnet_framework_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#dotnet_framework_version FunctionApp#dotnet_framework_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.elasticInstanceMinimum">elastic_instance_minimum</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#elastic_instance_minimum FunctionApp#elastic_instance_minimum}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.ftpsState">ftps_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#ftps_state FunctionApp#ftps_state}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#health_check_path FunctionApp#health_check_path}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.http2Enabled">http2_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#http2_enabled FunctionApp#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.ipRestriction">ip_restriction</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#ip_restriction FunctionApp#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.javaVersion">java_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#java_version FunctionApp#java_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.linuxFxVersion">linux_fx_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#linux_fx_version FunctionApp#linux_fx_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#min_tls_version FunctionApp#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.preWarmedInstanceCount">pre_warmed_instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#pre_warmed_instance_count FunctionApp#pre_warmed_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.runtimeScaleMonitoringEnabled">runtime_scale_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#runtime_scale_monitoring_enabled FunctionApp#runtime_scale_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmIpRestriction">scm_ip_restriction</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#scm_ip_restriction FunctionApp#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmType">scm_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#scm_type FunctionApp#scm_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmUseMainIpRestriction">scm_use_main_ip_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#scm_use_main_ip_restriction FunctionApp#scm_use_main_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.use32BitWorkerProcess">use32_bit_worker_process</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#use_32_bit_worker_process FunctionApp#use_32_bit_worker_process}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.vnetRouteAllEnabled">vnet_route_all_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#vnet_route_all_enabled FunctionApp#vnet_route_all_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.websocketsEnabled">websockets_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#websockets_enabled FunctionApp#websockets_enabled}. |

---

##### `always_on`<sup>Optional</sup> <a name="always_on" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.alwaysOn"></a>

```python
always_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#always_on FunctionApp#always_on}.

---

##### `app_scale_limit`<sup>Optional</sup> <a name="app_scale_limit" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.appScaleLimit"></a>

```python
app_scale_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#app_scale_limit FunctionApp#app_scale_limit}.

---

##### `auto_swap_slot_name`<sup>Optional</sup> <a name="auto_swap_slot_name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.autoSwapSlotName"></a>

```python
auto_swap_slot_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#auto_swap_slot_name FunctionApp#auto_swap_slot_name}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.cors"></a>

```python
cors: FunctionAppSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#cors FunctionApp#cors}

---

##### `dotnet_framework_version`<sup>Optional</sup> <a name="dotnet_framework_version" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.dotnetFrameworkVersion"></a>

```python
dotnet_framework_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#dotnet_framework_version FunctionApp#dotnet_framework_version}.

---

##### `elastic_instance_minimum`<sup>Optional</sup> <a name="elastic_instance_minimum" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.elasticInstanceMinimum"></a>

```python
elastic_instance_minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#elastic_instance_minimum FunctionApp#elastic_instance_minimum}.

---

##### `ftps_state`<sup>Optional</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.ftpsState"></a>

```python
ftps_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#ftps_state FunctionApp#ftps_state}.

---

##### `health_check_path`<sup>Optional</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#health_check_path FunctionApp#health_check_path}.

---

##### `http2_enabled`<sup>Optional</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.http2Enabled"></a>

```python
http2_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#http2_enabled FunctionApp#http2_enabled}.

---

##### `ip_restriction`<sup>Optional</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.ipRestriction"></a>

```python
ip_restriction: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#ip_restriction FunctionApp#ip_restriction}.

---

##### `java_version`<sup>Optional</sup> <a name="java_version" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.javaVersion"></a>

```python
java_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#java_version FunctionApp#java_version}.

---

##### `linux_fx_version`<sup>Optional</sup> <a name="linux_fx_version" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.linuxFxVersion"></a>

```python
linux_fx_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#linux_fx_version FunctionApp#linux_fx_version}.

---

##### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#min_tls_version FunctionApp#min_tls_version}.

---

##### `pre_warmed_instance_count`<sup>Optional</sup> <a name="pre_warmed_instance_count" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.preWarmedInstanceCount"></a>

```python
pre_warmed_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#pre_warmed_instance_count FunctionApp#pre_warmed_instance_count}.

---

##### `runtime_scale_monitoring_enabled`<sup>Optional</sup> <a name="runtime_scale_monitoring_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.runtimeScaleMonitoringEnabled"></a>

```python
runtime_scale_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#runtime_scale_monitoring_enabled FunctionApp#runtime_scale_monitoring_enabled}.

---

##### `scm_ip_restriction`<sup>Optional</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmIpRestriction"></a>

```python
scm_ip_restriction: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigScmIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#scm_ip_restriction FunctionApp#scm_ip_restriction}.

---

##### `scm_type`<sup>Optional</sup> <a name="scm_type" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmType"></a>

```python
scm_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#scm_type FunctionApp#scm_type}.

---

##### `scm_use_main_ip_restriction`<sup>Optional</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.scmUseMainIpRestriction"></a>

```python
scm_use_main_ip_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#scm_use_main_ip_restriction FunctionApp#scm_use_main_ip_restriction}.

---

##### `use32_bit_worker_process`<sup>Optional</sup> <a name="use32_bit_worker_process" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.use32BitWorkerProcess"></a>

```python
use32_bit_worker_process: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#use_32_bit_worker_process FunctionApp#use_32_bit_worker_process}.

---

##### `vnet_route_all_enabled`<sup>Optional</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.vnetRouteAllEnabled"></a>

```python
vnet_route_all_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#vnet_route_all_enabled FunctionApp#vnet_route_all_enabled}.

---

##### `websockets_enabled`<sup>Optional</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig.property.websocketsEnabled"></a>

```python
websockets_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#websockets_enabled FunctionApp#websockets_enabled}.

---

### FunctionAppSiteConfigCors <a name="FunctionAppSiteConfigCors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSiteConfigCors(
  allowed_origins: typing.List[str],
  support_credentials: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#allowed_origins FunctionApp#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.property.supportCredentials">support_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#support_credentials FunctionApp#support_credentials}. |

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#allowed_origins FunctionApp#allowed_origins}.

---

##### `support_credentials`<sup>Optional</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors.property.supportCredentials"></a>

```python
support_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#support_credentials FunctionApp#support_credentials}.

---

### FunctionAppSiteConfigIpRestriction <a name="FunctionAppSiteConfigIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSiteConfigIpRestriction(
  action: str = None,
  headers: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigIpRestrictionHeaders]] = None,
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
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#action FunctionApp#action}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#headers FunctionApp#headers}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#ip_address FunctionApp#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#name FunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#priority FunctionApp#priority}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.serviceTag">service_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#service_tag FunctionApp#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#virtual_network_subnet_id FunctionApp#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#action FunctionApp#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#headers FunctionApp#headers}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#ip_address FunctionApp#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#name FunctionApp#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#priority FunctionApp#priority}.

---

##### `service_tag`<sup>Optional</sup> <a name="service_tag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#service_tag FunctionApp#service_tag}.

---

##### `virtual_network_subnet_id`<sup>Optional</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#virtual_network_subnet_id FunctionApp#virtual_network_subnet_id}.

---

### FunctionAppSiteConfigIpRestrictionHeaders <a name="FunctionAppSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSiteConfigIpRestrictionHeaders(
  x_azure_fdid: typing.List[str] = None,
  x_fd_health_probe: typing.List[str] = None,
  x_forwarded_for: typing.List[str] = None,
  x_forwarded_host: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#x_azure_fdid FunctionApp#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#x_fd_health_probe FunctionApp#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#x_forwarded_for FunctionApp#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#x_forwarded_host FunctionApp#x_forwarded_host}. |

---

##### `x_azure_fdid`<sup>Optional</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#x_azure_fdid FunctionApp#x_azure_fdid}.

---

##### `x_fd_health_probe`<sup>Optional</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#x_fd_health_probe FunctionApp#x_fd_health_probe}.

---

##### `x_forwarded_for`<sup>Optional</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#x_forwarded_for FunctionApp#x_forwarded_for}.

---

##### `x_forwarded_host`<sup>Optional</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#x_forwarded_host FunctionApp#x_forwarded_host}.

---

### FunctionAppSiteConfigScmIpRestriction <a name="FunctionAppSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSiteConfigScmIpRestriction(
  action: str = None,
  headers: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigScmIpRestrictionHeaders]] = None,
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
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#action FunctionApp#action}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#headers FunctionApp#headers}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#ip_address FunctionApp#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#name FunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#priority FunctionApp#priority}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.serviceTag">service_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#service_tag FunctionApp#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#virtual_network_subnet_id FunctionApp#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#action FunctionApp#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigScmIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#headers FunctionApp#headers}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#ip_address FunctionApp#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#name FunctionApp#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#priority FunctionApp#priority}.

---

##### `service_tag`<sup>Optional</sup> <a name="service_tag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#service_tag FunctionApp#service_tag}.

---

##### `virtual_network_subnet_id`<sup>Optional</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#virtual_network_subnet_id FunctionApp#virtual_network_subnet_id}.

---

### FunctionAppSiteConfigScmIpRestrictionHeaders <a name="FunctionAppSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders(
  x_azure_fdid: typing.List[str] = None,
  x_fd_health_probe: typing.List[str] = None,
  x_forwarded_for: typing.List[str] = None,
  x_forwarded_host: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#x_azure_fdid FunctionApp#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#x_fd_health_probe FunctionApp#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#x_forwarded_for FunctionApp#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#x_forwarded_host FunctionApp#x_forwarded_host}. |

---

##### `x_azure_fdid`<sup>Optional</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#x_azure_fdid FunctionApp#x_azure_fdid}.

---

##### `x_fd_health_probe`<sup>Optional</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#x_fd_health_probe FunctionApp#x_fd_health_probe}.

---

##### `x_forwarded_for`<sup>Optional</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#x_forwarded_for FunctionApp#x_forwarded_for}.

---

##### `x_forwarded_host`<sup>Optional</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#x_forwarded_host FunctionApp#x_forwarded_host}.

---

### FunctionAppSiteCredential <a name="FunctionAppSiteCredential" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSiteCredential()
```


### FunctionAppSourceControl <a name="FunctionAppSourceControl" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSourceControl(
  branch: str = None,
  manual_integration: typing.Union[bool, IResolvable] = None,
  repo_url: str = None,
  rollback_enabled: typing.Union[bool, IResolvable] = None,
  use_mercurial: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.branch">branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#branch FunctionApp#branch}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.manualIntegration">manual_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#manual_integration FunctionApp#manual_integration}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.repoUrl">repo_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#repo_url FunctionApp#repo_url}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.rollbackEnabled">rollback_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#rollback_enabled FunctionApp#rollback_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.useMercurial">use_mercurial</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#use_mercurial FunctionApp#use_mercurial}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.branch"></a>

```python
branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#branch FunctionApp#branch}.

---

##### `manual_integration`<sup>Optional</sup> <a name="manual_integration" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.manualIntegration"></a>

```python
manual_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#manual_integration FunctionApp#manual_integration}.

---

##### `repo_url`<sup>Optional</sup> <a name="repo_url" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.repoUrl"></a>

```python
repo_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#repo_url FunctionApp#repo_url}.

---

##### `rollback_enabled`<sup>Optional</sup> <a name="rollback_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.rollbackEnabled"></a>

```python
rollback_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#rollback_enabled FunctionApp#rollback_enabled}.

---

##### `use_mercurial`<sup>Optional</sup> <a name="use_mercurial" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl.property.useMercurial"></a>

```python
use_mercurial: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#use_mercurial FunctionApp#use_mercurial}.

---

### FunctionAppTimeouts <a name="FunctionAppTimeouts" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#create FunctionApp#create}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#delete FunctionApp#delete}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#read FunctionApp#read}. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#update FunctionApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#create FunctionApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#delete FunctionApp#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#read FunctionApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#update FunctionApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionAppAuthSettingsActiveDirectoryOutputReference <a name="FunctionAppAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences">reset_allowed_audiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_audiences` <a name="reset_allowed_audiences" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences"></a>

```python
def reset_allowed_audiences() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput">allowed_audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_audiences_input`<sup>Optional</sup> <a name="allowed_audiences_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput"></a>

```python
allowed_audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `allowed_audiences`<sup>Required</sup> <a name="allowed_audiences" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```python
allowed_audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a>

---


### FunctionAppAuthSettingsFacebookOutputReference <a name="FunctionAppAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppAuthSettingsFacebookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appSecretInput">app_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appSecret">app_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `app_secret_input`<sup>Optional</sup> <a name="app_secret_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appSecretInput"></a>

```python
app_secret_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `app_secret`<sup>Required</sup> <a name="app_secret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.appSecret"></a>

```python
app_secret: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a>

---


### FunctionAppAuthSettingsGoogleOutputReference <a name="FunctionAppAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppAuthSettingsGoogleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a>

---


### FunctionAppAuthSettingsMicrosoftOutputReference <a name="FunctionAppAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppAuthSettingsMicrosoftOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a>

---


### FunctionAppAuthSettingsOutputReference <a name="FunctionAppAuthSettingsOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppAuthSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putActiveDirectory">put_active_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putFacebook">put_facebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putGoogle">put_google</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putMicrosoft">put_microsoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putTwitter">put_twitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetActiveDirectory">reset_active_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetAdditionalLoginParams">reset_additional_login_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetAllowedExternalRedirectUrls">reset_allowed_external_redirect_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetDefaultProvider">reset_default_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetFacebook">reset_facebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetGoogle">reset_google</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetMicrosoft">reset_microsoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetRuntimeVersion">reset_runtime_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTokenRefreshExtensionHours">reset_token_refresh_extension_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTokenStoreEnabled">reset_token_store_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTwitter">reset_twitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetUnauthenticatedClientAction">reset_unauthenticated_client_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_active_directory` <a name="put_active_directory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putActiveDirectory"></a>

```python
def put_active_directory(
  client_id: str,
  allowed_audiences: typing.List[str] = None,
  client_secret: str = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putActiveDirectory.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_id FunctionApp#client_id}.

---

###### `allowed_audiences`<sup>Optional</sup> <a name="allowed_audiences" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putActiveDirectory.parameter.allowedAudiences"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#allowed_audiences FunctionApp#allowed_audiences}.

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putActiveDirectory.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_secret FunctionApp#client_secret}.

---

##### `put_facebook` <a name="put_facebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putFacebook"></a>

```python
def put_facebook(
  app_id: str,
  app_secret: str,
  oauth_scopes: typing.List[str] = None
) -> None
```

###### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putFacebook.parameter.appId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#app_id FunctionApp#app_id}.

---

###### `app_secret`<sup>Required</sup> <a name="app_secret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putFacebook.parameter.appSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#app_secret FunctionApp#app_secret}.

---

###### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putFacebook.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}.

---

##### `put_google` <a name="put_google" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putGoogle"></a>

```python
def put_google(
  client_id: str,
  client_secret: str,
  oauth_scopes: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putGoogle.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_id FunctionApp#client_id}.

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putGoogle.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_secret FunctionApp#client_secret}.

---

###### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putGoogle.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}.

---

##### `put_microsoft` <a name="put_microsoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putMicrosoft"></a>

```python
def put_microsoft(
  client_id: str,
  client_secret: str,
  oauth_scopes: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putMicrosoft.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_id FunctionApp#client_id}.

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putMicrosoft.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#client_secret FunctionApp#client_secret}.

---

###### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putMicrosoft.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#oauth_scopes FunctionApp#oauth_scopes}.

---

##### `put_twitter` <a name="put_twitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putTwitter"></a>

```python
def put_twitter(
  consumer_key: str,
  consumer_secret: str
) -> None
```

###### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putTwitter.parameter.consumerKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#consumer_key FunctionApp#consumer_key}.

---

###### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.putTwitter.parameter.consumerSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#consumer_secret FunctionApp#consumer_secret}.

---

##### `reset_active_directory` <a name="reset_active_directory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetActiveDirectory"></a>

```python
def reset_active_directory() -> None
```

##### `reset_additional_login_params` <a name="reset_additional_login_params" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetAdditionalLoginParams"></a>

```python
def reset_additional_login_params() -> None
```

##### `reset_allowed_external_redirect_urls` <a name="reset_allowed_external_redirect_urls" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetAllowedExternalRedirectUrls"></a>

```python
def reset_allowed_external_redirect_urls() -> None
```

##### `reset_default_provider` <a name="reset_default_provider" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetDefaultProvider"></a>

```python
def reset_default_provider() -> None
```

##### `reset_facebook` <a name="reset_facebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetFacebook"></a>

```python
def reset_facebook() -> None
```

##### `reset_google` <a name="reset_google" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetGoogle"></a>

```python
def reset_google() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_microsoft` <a name="reset_microsoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetMicrosoft"></a>

```python
def reset_microsoft() -> None
```

##### `reset_runtime_version` <a name="reset_runtime_version" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetRuntimeVersion"></a>

```python
def reset_runtime_version() -> None
```

##### `reset_token_refresh_extension_hours` <a name="reset_token_refresh_extension_hours" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTokenRefreshExtensionHours"></a>

```python
def reset_token_refresh_extension_hours() -> None
```

##### `reset_token_store_enabled` <a name="reset_token_store_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTokenStoreEnabled"></a>

```python
def reset_token_store_enabled() -> None
```

##### `reset_twitter` <a name="reset_twitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetTwitter"></a>

```python
def reset_twitter() -> None
```

##### `reset_unauthenticated_client_action` <a name="reset_unauthenticated_client_action" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.resetUnauthenticatedClientAction"></a>

```python
def reset_unauthenticated_client_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.activeDirectory">active_directory</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference">FunctionAppAuthSettingsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference">FunctionAppAuthSettingsFacebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference">FunctionAppAuthSettingsGoogleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference">FunctionAppAuthSettingsMicrosoftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference">FunctionAppAuthSettingsTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.activeDirectoryInput">active_directory_input</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.additionalLoginParamsInput">additional_login_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput">allowed_external_redirect_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.defaultProviderInput">default_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.facebookInput">facebook_input</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.googleInput">google_input</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.microsoftInput">microsoft_input</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.runtimeVersionInput">runtime_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput">token_refresh_extension_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenStoreEnabledInput">token_store_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.twitterInput">twitter_input</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.unauthenticatedClientActionInput">unauthenticated_client_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.additionalLoginParams">additional_login_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls">allowed_external_redirect_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.defaultProvider">default_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours">token_refresh_extension_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled">token_store_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction">unauthenticated_client_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_directory`<sup>Required</sup> <a name="active_directory" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.activeDirectory"></a>

```python
active_directory: FunctionAppAuthSettingsActiveDirectoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectoryOutputReference">FunctionAppAuthSettingsActiveDirectoryOutputReference</a>

---

##### `facebook`<sup>Required</sup> <a name="facebook" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.facebook"></a>

```python
facebook: FunctionAppAuthSettingsFacebookOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebookOutputReference">FunctionAppAuthSettingsFacebookOutputReference</a>

---

##### `google`<sup>Required</sup> <a name="google" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.google"></a>

```python
google: FunctionAppAuthSettingsGoogleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogleOutputReference">FunctionAppAuthSettingsGoogleOutputReference</a>

---

##### `microsoft`<sup>Required</sup> <a name="microsoft" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.microsoft"></a>

```python
microsoft: FunctionAppAuthSettingsMicrosoftOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoftOutputReference">FunctionAppAuthSettingsMicrosoftOutputReference</a>

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.twitter"></a>

```python
twitter: FunctionAppAuthSettingsTwitterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference">FunctionAppAuthSettingsTwitterOutputReference</a>

---

##### `active_directory_input`<sup>Optional</sup> <a name="active_directory_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.activeDirectoryInput"></a>

```python
active_directory_input: FunctionAppAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsActiveDirectory">FunctionAppAuthSettingsActiveDirectory</a>

---

##### `additional_login_params_input`<sup>Optional</sup> <a name="additional_login_params_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.additionalLoginParamsInput"></a>

```python
additional_login_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allowed_external_redirect_urls_input`<sup>Optional</sup> <a name="allowed_external_redirect_urls_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput"></a>

```python
allowed_external_redirect_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_provider_input`<sup>Optional</sup> <a name="default_provider_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.defaultProviderInput"></a>

```python
default_provider_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `facebook_input`<sup>Optional</sup> <a name="facebook_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.facebookInput"></a>

```python
facebook_input: FunctionAppAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsFacebook">FunctionAppAuthSettingsFacebook</a>

---

##### `google_input`<sup>Optional</sup> <a name="google_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.googleInput"></a>

```python
google_input: FunctionAppAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsGoogle">FunctionAppAuthSettingsGoogle</a>

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `microsoft_input`<sup>Optional</sup> <a name="microsoft_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.microsoftInput"></a>

```python
microsoft_input: FunctionAppAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsMicrosoft">FunctionAppAuthSettingsMicrosoft</a>

---

##### `runtime_version_input`<sup>Optional</sup> <a name="runtime_version_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.runtimeVersionInput"></a>

```python
runtime_version_input: str
```

- *Type:* str

---

##### `token_refresh_extension_hours_input`<sup>Optional</sup> <a name="token_refresh_extension_hours_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput"></a>

```python
token_refresh_extension_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_store_enabled_input`<sup>Optional</sup> <a name="token_store_enabled_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenStoreEnabledInput"></a>

```python
token_store_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `twitter_input`<sup>Optional</sup> <a name="twitter_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.twitterInput"></a>

```python
twitter_input: FunctionAppAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a>

---

##### `unauthenticated_client_action_input`<sup>Optional</sup> <a name="unauthenticated_client_action_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.unauthenticatedClientActionInput"></a>

```python
unauthenticated_client_action_input: str
```

- *Type:* str

---

##### `additional_login_params`<sup>Required</sup> <a name="additional_login_params" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.additionalLoginParams"></a>

```python
additional_login_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allowed_external_redirect_urls`<sup>Required</sup> <a name="allowed_external_redirect_urls" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```python
allowed_external_redirect_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_provider`<sup>Required</sup> <a name="default_provider" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.defaultProvider"></a>

```python
default_provider: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

---

##### `token_refresh_extension_hours`<sup>Required</sup> <a name="token_refresh_extension_hours" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```python
token_refresh_extension_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_store_enabled`<sup>Required</sup> <a name="token_store_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```python
token_store_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unauthenticated_client_action`<sup>Required</sup> <a name="unauthenticated_client_action" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```python
unauthenticated_client_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettings">FunctionAppAuthSettings</a>

---


### FunctionAppAuthSettingsTwitterOutputReference <a name="FunctionAppAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppAuthSettingsTwitterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerKeyInput">consumer_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretInput">consumer_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerKey">consumer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_key_input`<sup>Optional</sup> <a name="consumer_key_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerKeyInput"></a>

```python
consumer_key_input: str
```

- *Type:* str

---

##### `consumer_secret_input`<sup>Optional</sup> <a name="consumer_secret_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretInput"></a>

```python
consumer_secret_input: str
```

- *Type:* str

---

##### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

---

##### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitterOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppAuthSettingsTwitter">FunctionAppAuthSettingsTwitter</a>

---


### FunctionAppConnectionStringList <a name="FunctionAppConnectionStringList" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppConnectionStringList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionAppConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FunctionAppConnectionString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>]]

---


### FunctionAppConnectionStringOutputReference <a name="FunctionAppConnectionStringOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppConnectionStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppConnectionStringOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FunctionAppConnectionString]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppConnectionString">FunctionAppConnectionString</a>]

---


### FunctionAppIdentityOutputReference <a name="FunctionAppIdentityOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppIdentityOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppIdentity">FunctionAppIdentity</a>

---


### FunctionAppSiteConfigCorsOutputReference <a name="FunctionAppSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSiteConfigCorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resetSupportCredentials">reset_support_credentials</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_support_credentials` <a name="reset_support_credentials" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```python
def reset_support_credentials() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.supportCredentialsInput">support_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.supportCredentials">support_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `support_credentials_input`<sup>Optional</sup> <a name="support_credentials_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```python
support_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `support_credentials`<sup>Required</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.supportCredentials"></a>

```python
support_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a>

---


### FunctionAppSiteConfigIpRestrictionHeadersList <a name="FunctionAppSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSiteConfigIpRestrictionHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionAppSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>]]

---


### FunctionAppSiteConfigIpRestrictionHeadersOutputReference <a name="FunctionAppSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">reset_x_azure_fdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">reset_x_fd_health_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">reset_x_forwarded_for</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">reset_x_forwarded_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x_azure_fdid` <a name="reset_x_azure_fdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```python
def reset_x_azure_fdid() -> None
```

##### `reset_x_fd_health_probe` <a name="reset_x_fd_health_probe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```python
def reset_x_fd_health_probe() -> None
```

##### `reset_x_forwarded_for` <a name="reset_x_forwarded_for" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```python
def reset_x_forwarded_for() -> None
```

##### `reset_x_forwarded_host` <a name="reset_x_forwarded_host" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```python
def reset_x_forwarded_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">x_azure_fdid_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">x_fd_health_probe_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">x_forwarded_for_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">x_forwarded_host_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_azure_fdid_input`<sup>Optional</sup> <a name="x_azure_fdid_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```python
x_azure_fdid_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe_input`<sup>Optional</sup> <a name="x_fd_health_probe_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```python
x_fd_health_probe_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for_input`<sup>Optional</sup> <a name="x_forwarded_for_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```python
x_forwarded_for_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host_input`<sup>Optional</sup> <a name="x_forwarded_host_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```python
x_forwarded_host_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_azure_fdid`<sup>Required</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe`<sup>Required</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for`<sup>Required</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host`<sup>Required</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FunctionAppSiteConfigIpRestrictionHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>]

---


### FunctionAppSiteConfigIpRestrictionList <a name="FunctionAppSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSiteConfigIpRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionAppSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>]]

---


### FunctionAppSiteConfigIpRestrictionOutputReference <a name="FunctionAppSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSiteConfigIpRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetServiceTag">reset_service_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">reset_virtual_network_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigIpRestrictionHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_service_tag` <a name="reset_service_tag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```python
def reset_service_tag() -> None
```

##### `reset_virtual_network_subnet_id` <a name="reset_virtual_network_subnet_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```python
def reset_virtual_network_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList">FunctionAppSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTagInput">service_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtual_network_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag">service_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.headers"></a>

```python
headers: FunctionAppSiteConfigIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeadersList">FunctionAppSiteConfigIpRestrictionHeadersList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionHeaders">FunctionAppSiteConfigIpRestrictionHeaders</a>]]

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag_input`<sup>Optional</sup> <a name="service_tag_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```python
service_tag_input: str
```

- *Type:* str

---

##### `virtual_network_subnet_id_input`<sup>Optional</sup> <a name="virtual_network_subnet_id_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```python
virtual_network_subnet_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag`<sup>Required</sup> <a name="service_tag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FunctionAppSiteConfigIpRestriction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>]

---


### FunctionAppSiteConfigOutputReference <a name="FunctionAppSiteConfigOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSiteConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putCors">put_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putIpRestriction">put_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putScmIpRestriction">put_scm_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAlwaysOn">reset_always_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAppScaleLimit">reset_app_scale_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAutoSwapSlotName">reset_auto_swap_slot_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetCors">reset_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetDotnetFrameworkVersion">reset_dotnet_framework_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetElasticInstanceMinimum">reset_elastic_instance_minimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetFtpsState">reset_ftps_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetHealthCheckPath">reset_health_check_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetHttp2Enabled">reset_http2_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetIpRestriction">reset_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetJavaVersion">reset_java_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetLinuxFxVersion">reset_linux_fx_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetMinTlsVersion">reset_min_tls_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetPreWarmedInstanceCount">reset_pre_warmed_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled">reset_runtime_scale_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmIpRestriction">reset_scm_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmType">reset_scm_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmUseMainIpRestriction">reset_scm_use_main_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetUse32BitWorkerProcess">reset_use32_bit_worker_process</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetVnetRouteAllEnabled">reset_vnet_route_all_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetWebsocketsEnabled">reset_websockets_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cors` <a name="put_cors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putCors"></a>

```python
def put_cors(
  allowed_origins: typing.List[str],
  support_credentials: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putCors.parameter.allowedOrigins"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#allowed_origins FunctionApp#allowed_origins}.

---

###### `support_credentials`<sup>Optional</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putCors.parameter.supportCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/function_app#support_credentials FunctionApp#support_credentials}.

---

##### `put_ip_restriction` <a name="put_ip_restriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putIpRestriction"></a>

```python
def put_ip_restriction(
  value: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigIpRestriction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>]]

---

##### `put_scm_ip_restriction` <a name="put_scm_ip_restriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putScmIpRestriction"></a>

```python
def put_scm_ip_restriction(
  value: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigScmIpRestriction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>]]

---

##### `reset_always_on` <a name="reset_always_on" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAlwaysOn"></a>

```python
def reset_always_on() -> None
```

##### `reset_app_scale_limit` <a name="reset_app_scale_limit" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAppScaleLimit"></a>

```python
def reset_app_scale_limit() -> None
```

##### `reset_auto_swap_slot_name` <a name="reset_auto_swap_slot_name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetAutoSwapSlotName"></a>

```python
def reset_auto_swap_slot_name() -> None
```

##### `reset_cors` <a name="reset_cors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetCors"></a>

```python
def reset_cors() -> None
```

##### `reset_dotnet_framework_version` <a name="reset_dotnet_framework_version" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetDotnetFrameworkVersion"></a>

```python
def reset_dotnet_framework_version() -> None
```

##### `reset_elastic_instance_minimum` <a name="reset_elastic_instance_minimum" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetElasticInstanceMinimum"></a>

```python
def reset_elastic_instance_minimum() -> None
```

##### `reset_ftps_state` <a name="reset_ftps_state" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetFtpsState"></a>

```python
def reset_ftps_state() -> None
```

##### `reset_health_check_path` <a name="reset_health_check_path" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetHealthCheckPath"></a>

```python
def reset_health_check_path() -> None
```

##### `reset_http2_enabled` <a name="reset_http2_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetHttp2Enabled"></a>

```python
def reset_http2_enabled() -> None
```

##### `reset_ip_restriction` <a name="reset_ip_restriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetIpRestriction"></a>

```python
def reset_ip_restriction() -> None
```

##### `reset_java_version` <a name="reset_java_version" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetJavaVersion"></a>

```python
def reset_java_version() -> None
```

##### `reset_linux_fx_version` <a name="reset_linux_fx_version" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetLinuxFxVersion"></a>

```python
def reset_linux_fx_version() -> None
```

##### `reset_min_tls_version` <a name="reset_min_tls_version" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetMinTlsVersion"></a>

```python
def reset_min_tls_version() -> None
```

##### `reset_pre_warmed_instance_count` <a name="reset_pre_warmed_instance_count" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetPreWarmedInstanceCount"></a>

```python
def reset_pre_warmed_instance_count() -> None
```

##### `reset_runtime_scale_monitoring_enabled` <a name="reset_runtime_scale_monitoring_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled"></a>

```python
def reset_runtime_scale_monitoring_enabled() -> None
```

##### `reset_scm_ip_restriction` <a name="reset_scm_ip_restriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmIpRestriction"></a>

```python
def reset_scm_ip_restriction() -> None
```

##### `reset_scm_type` <a name="reset_scm_type" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmType"></a>

```python
def reset_scm_type() -> None
```

##### `reset_scm_use_main_ip_restriction` <a name="reset_scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```python
def reset_scm_use_main_ip_restriction() -> None
```

##### `reset_use32_bit_worker_process` <a name="reset_use32_bit_worker_process" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetUse32BitWorkerProcess"></a>

```python
def reset_use32_bit_worker_process() -> None
```

##### `reset_vnet_route_all_enabled` <a name="reset_vnet_route_all_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```python
def reset_vnet_route_all_enabled() -> None
```

##### `reset_websockets_enabled` <a name="reset_websockets_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```python
def reset_websockets_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference">FunctionAppSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ipRestriction">ip_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList">FunctionAppSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmIpRestriction">scm_ip_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList">FunctionAppSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.alwaysOnInput">always_on_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.appScaleLimitInput">app_scale_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.autoSwapSlotNameInput">auto_swap_slot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.corsInput">cors_input</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.dotnetFrameworkVersionInput">dotnet_framework_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.elasticInstanceMinimumInput">elastic_instance_minimum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ftpsStateInput">ftps_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.healthCheckPathInput">health_check_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.http2EnabledInput">http2_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ipRestrictionInput">ip_restriction_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.javaVersionInput">java_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.linuxFxVersionInput">linux_fx_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.minTlsVersionInput">min_tls_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.preWarmedInstanceCountInput">pre_warmed_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput">runtime_scale_monitoring_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmIpRestrictionInput">scm_ip_restriction_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmTypeInput">scm_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">scm_use_main_ip_restriction_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.use32BitWorkerProcessInput">use32_bit_worker_process_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabledInput">vnet_route_all_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.websocketsEnabledInput">websockets_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.alwaysOn">always_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.appScaleLimit">app_scale_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.autoSwapSlotName">auto_swap_slot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.dotnetFrameworkVersion">dotnet_framework_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum">elastic_instance_minimum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ftpsState">ftps_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.http2Enabled">http2_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.javaVersion">java_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.linuxFxVersion">linux_fx_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount">pre_warmed_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">runtime_scale_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmType">scm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction">scm_use_main_ip_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.use32BitWorkerProcess">use32_bit_worker_process</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled">vnet_route_all_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.websocketsEnabled">websockets_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.cors"></a>

```python
cors: FunctionAppSiteConfigCorsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCorsOutputReference">FunctionAppSiteConfigCorsOutputReference</a>

---

##### `ip_restriction`<sup>Required</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ipRestriction"></a>

```python
ip_restriction: FunctionAppSiteConfigIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestrictionList">FunctionAppSiteConfigIpRestrictionList</a>

---

##### `scm_ip_restriction`<sup>Required</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmIpRestriction"></a>

```python
scm_ip_restriction: FunctionAppSiteConfigScmIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList">FunctionAppSiteConfigScmIpRestrictionList</a>

---

##### `always_on_input`<sup>Optional</sup> <a name="always_on_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.alwaysOnInput"></a>

```python
always_on_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `app_scale_limit_input`<sup>Optional</sup> <a name="app_scale_limit_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.appScaleLimitInput"></a>

```python
app_scale_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_swap_slot_name_input`<sup>Optional</sup> <a name="auto_swap_slot_name_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.autoSwapSlotNameInput"></a>

```python
auto_swap_slot_name_input: str
```

- *Type:* str

---

##### `cors_input`<sup>Optional</sup> <a name="cors_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.corsInput"></a>

```python
cors_input: FunctionAppSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigCors">FunctionAppSiteConfigCors</a>

---

##### `dotnet_framework_version_input`<sup>Optional</sup> <a name="dotnet_framework_version_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.dotnetFrameworkVersionInput"></a>

```python
dotnet_framework_version_input: str
```

- *Type:* str

---

##### `elastic_instance_minimum_input`<sup>Optional</sup> <a name="elastic_instance_minimum_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.elasticInstanceMinimumInput"></a>

```python
elastic_instance_minimum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ftps_state_input`<sup>Optional</sup> <a name="ftps_state_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ftpsStateInput"></a>

```python
ftps_state_input: str
```

- *Type:* str

---

##### `health_check_path_input`<sup>Optional</sup> <a name="health_check_path_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.healthCheckPathInput"></a>

```python
health_check_path_input: str
```

- *Type:* str

---

##### `http2_enabled_input`<sup>Optional</sup> <a name="http2_enabled_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.http2EnabledInput"></a>

```python
http2_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_restriction_input`<sup>Optional</sup> <a name="ip_restriction_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ipRestrictionInput"></a>

```python
ip_restriction_input: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigIpRestriction">FunctionAppSiteConfigIpRestriction</a>]]

---

##### `java_version_input`<sup>Optional</sup> <a name="java_version_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.javaVersionInput"></a>

```python
java_version_input: str
```

- *Type:* str

---

##### `linux_fx_version_input`<sup>Optional</sup> <a name="linux_fx_version_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.linuxFxVersionInput"></a>

```python
linux_fx_version_input: str
```

- *Type:* str

---

##### `min_tls_version_input`<sup>Optional</sup> <a name="min_tls_version_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.minTlsVersionInput"></a>

```python
min_tls_version_input: str
```

- *Type:* str

---

##### `pre_warmed_instance_count_input`<sup>Optional</sup> <a name="pre_warmed_instance_count_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.preWarmedInstanceCountInput"></a>

```python
pre_warmed_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runtime_scale_monitoring_enabled_input`<sup>Optional</sup> <a name="runtime_scale_monitoring_enabled_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput"></a>

```python
runtime_scale_monitoring_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scm_ip_restriction_input`<sup>Optional</sup> <a name="scm_ip_restriction_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```python
scm_ip_restriction_input: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigScmIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>]]

---

##### `scm_type_input`<sup>Optional</sup> <a name="scm_type_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmTypeInput"></a>

```python
scm_type_input: str
```

- *Type:* str

---

##### `scm_use_main_ip_restriction_input`<sup>Optional</sup> <a name="scm_use_main_ip_restriction_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```python
scm_use_main_ip_restriction_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use32_bit_worker_process_input`<sup>Optional</sup> <a name="use32_bit_worker_process_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.use32BitWorkerProcessInput"></a>

```python
use32_bit_worker_process_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnet_route_all_enabled_input`<sup>Optional</sup> <a name="vnet_route_all_enabled_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```python
vnet_route_all_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `websockets_enabled_input`<sup>Optional</sup> <a name="websockets_enabled_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```python
websockets_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `always_on`<sup>Required</sup> <a name="always_on" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.alwaysOn"></a>

```python
always_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `app_scale_limit`<sup>Required</sup> <a name="app_scale_limit" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.appScaleLimit"></a>

```python
app_scale_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_swap_slot_name`<sup>Required</sup> <a name="auto_swap_slot_name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.autoSwapSlotName"></a>

```python
auto_swap_slot_name: str
```

- *Type:* str

---

##### `dotnet_framework_version`<sup>Required</sup> <a name="dotnet_framework_version" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.dotnetFrameworkVersion"></a>

```python
dotnet_framework_version: str
```

- *Type:* str

---

##### `elastic_instance_minimum`<sup>Required</sup> <a name="elastic_instance_minimum" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```python
elastic_instance_minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ftps_state`<sup>Required</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.ftpsState"></a>

```python
ftps_state: str
```

- *Type:* str

---

##### `health_check_path`<sup>Required</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

---

##### `http2_enabled`<sup>Required</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.http2Enabled"></a>

```python
http2_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `java_version`<sup>Required</sup> <a name="java_version" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.javaVersion"></a>

```python
java_version: str
```

- *Type:* str

---

##### `linux_fx_version`<sup>Required</sup> <a name="linux_fx_version" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.linuxFxVersion"></a>

```python
linux_fx_version: str
```

- *Type:* str

---

##### `min_tls_version`<sup>Required</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

---

##### `pre_warmed_instance_count`<sup>Required</sup> <a name="pre_warmed_instance_count" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```python
pre_warmed_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runtime_scale_monitoring_enabled`<sup>Required</sup> <a name="runtime_scale_monitoring_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```python
runtime_scale_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scm_type`<sup>Required</sup> <a name="scm_type" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmType"></a>

```python
scm_type: str
```

- *Type:* str

---

##### `scm_use_main_ip_restriction`<sup>Required</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```python
scm_use_main_ip_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use32_bit_worker_process`<sup>Required</sup> <a name="use32_bit_worker_process" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.use32BitWorkerProcess"></a>

```python
use32_bit_worker_process: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnet_route_all_enabled`<sup>Required</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```python
vnet_route_all_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `websockets_enabled`<sup>Required</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.websocketsEnabled"></a>

```python
websockets_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfig">FunctionAppSiteConfig</a>

---


### FunctionAppSiteConfigScmIpRestrictionHeadersList <a name="FunctionAppSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigScmIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>]]

---


### FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference <a name="FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">reset_x_azure_fdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">reset_x_fd_health_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">reset_x_forwarded_for</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">reset_x_forwarded_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x_azure_fdid` <a name="reset_x_azure_fdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```python
def reset_x_azure_fdid() -> None
```

##### `reset_x_fd_health_probe` <a name="reset_x_fd_health_probe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```python
def reset_x_fd_health_probe() -> None
```

##### `reset_x_forwarded_for` <a name="reset_x_forwarded_for" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```python
def reset_x_forwarded_for() -> None
```

##### `reset_x_forwarded_host` <a name="reset_x_forwarded_host" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```python
def reset_x_forwarded_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">x_azure_fdid_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">x_fd_health_probe_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">x_forwarded_for_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">x_forwarded_host_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_azure_fdid_input`<sup>Optional</sup> <a name="x_azure_fdid_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```python
x_azure_fdid_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe_input`<sup>Optional</sup> <a name="x_fd_health_probe_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```python
x_fd_health_probe_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for_input`<sup>Optional</sup> <a name="x_forwarded_for_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```python
x_forwarded_for_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host_input`<sup>Optional</sup> <a name="x_forwarded_host_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```python
x_forwarded_host_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_azure_fdid`<sup>Required</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe`<sup>Required</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for`<sup>Required</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host`<sup>Required</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FunctionAppSiteConfigScmIpRestrictionHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>]

---


### FunctionAppSiteConfigScmIpRestrictionList <a name="FunctionAppSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSiteConfigScmIpRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionAppSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigScmIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>]]

---


### FunctionAppSiteConfigScmIpRestrictionOutputReference <a name="FunctionAppSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetServiceTag">reset_service_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">reset_virtual_network_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigScmIpRestrictionHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_service_tag` <a name="reset_service_tag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```python
def reset_service_tag() -> None
```

##### `reset_virtual_network_subnet_id` <a name="reset_virtual_network_subnet_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```python
def reset_virtual_network_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList">FunctionAppSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">service_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtual_network_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag">service_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```python
headers: FunctionAppSiteConfigScmIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeadersList">FunctionAppSiteConfigScmIpRestrictionHeadersList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[FunctionAppSiteConfigScmIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionHeaders">FunctionAppSiteConfigScmIpRestrictionHeaders</a>]]

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag_input`<sup>Optional</sup> <a name="service_tag_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```python
service_tag_input: str
```

- *Type:* str

---

##### `virtual_network_subnet_id_input`<sup>Optional</sup> <a name="virtual_network_subnet_id_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```python
virtual_network_subnet_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag`<sup>Required</sup> <a name="service_tag" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FunctionAppSiteConfigScmIpRestriction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteConfigScmIpRestriction">FunctionAppSiteConfigScmIpRestriction</a>]

---


### FunctionAppSiteCredentialList <a name="FunctionAppSiteCredentialList" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSiteCredentialList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionAppSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FunctionAppSiteCredentialOutputReference <a name="FunctionAppSiteCredentialOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSiteCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredential">FunctionAppSiteCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredentialOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppSiteCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSiteCredential">FunctionAppSiteCredential</a>

---


### FunctionAppSourceControlOutputReference <a name="FunctionAppSourceControlOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppSourceControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetManualIntegration">reset_manual_integration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetRepoUrl">reset_repo_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetRollbackEnabled">reset_rollback_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetUseMercurial">reset_use_mercurial</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch` <a name="reset_branch" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_manual_integration` <a name="reset_manual_integration" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetManualIntegration"></a>

```python
def reset_manual_integration() -> None
```

##### `reset_repo_url` <a name="reset_repo_url" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetRepoUrl"></a>

```python
def reset_repo_url() -> None
```

##### `reset_rollback_enabled` <a name="reset_rollback_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetRollbackEnabled"></a>

```python
def reset_rollback_enabled() -> None
```

##### `reset_use_mercurial` <a name="reset_use_mercurial" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.resetUseMercurial"></a>

```python
def reset_use_mercurial() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.manualIntegrationInput">manual_integration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.repoUrlInput">repo_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.rollbackEnabledInput">rollback_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.useMercurialInput">use_mercurial_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.manualIntegration">manual_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.repoUrl">repo_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.rollbackEnabled">rollback_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.useMercurial">use_mercurial</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `manual_integration_input`<sup>Optional</sup> <a name="manual_integration_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.manualIntegrationInput"></a>

```python
manual_integration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repo_url_input`<sup>Optional</sup> <a name="repo_url_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.repoUrlInput"></a>

```python
repo_url_input: str
```

- *Type:* str

---

##### `rollback_enabled_input`<sup>Optional</sup> <a name="rollback_enabled_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.rollbackEnabledInput"></a>

```python
rollback_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_mercurial_input`<sup>Optional</sup> <a name="use_mercurial_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.useMercurialInput"></a>

```python
use_mercurial_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `manual_integration`<sup>Required</sup> <a name="manual_integration" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.manualIntegration"></a>

```python
manual_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repo_url`<sup>Required</sup> <a name="repo_url" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.repoUrl"></a>

```python
repo_url: str
```

- *Type:* str

---

##### `rollback_enabled`<sup>Required</sup> <a name="rollback_enabled" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.rollbackEnabled"></a>

```python
rollback_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_mercurial`<sup>Required</sup> <a name="use_mercurial" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.useMercurial"></a>

```python
use_mercurial: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppSourceControlOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppSourceControl
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppSourceControl">FunctionAppSourceControl</a>

---


### FunctionAppTimeoutsOutputReference <a name="FunctionAppTimeoutsOutputReference" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app

functionApp.FunctionAppTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionApp.FunctionAppTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FunctionAppTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionApp.FunctionAppTimeouts">FunctionAppTimeouts</a>]

---



