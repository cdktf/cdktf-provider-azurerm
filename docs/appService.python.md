# `appService` Submodule <a name="`appService` Submodule" id="@cdktf/provider-azurerm.appService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppService <a name="AppService" id="@cdktf/provider-azurerm.appService.AppService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service azurerm_app_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppService.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppService(
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
  app_settings: typing.Mapping[str] = None,
  auth_settings: AppServiceAuthSettings = None,
  backup: AppServiceBackup = None,
  client_affinity_enabled: typing.Union[bool, IResolvable] = None,
  client_cert_enabled: typing.Union[bool, IResolvable] = None,
  client_cert_mode: str = None,
  connection_string: typing.Union[IResolvable, typing.List[AppServiceConnectionString]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  https_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: AppServiceIdentity = None,
  key_vault_reference_identity_id: str = None,
  logs: AppServiceLogs = None,
  site_config: AppServiceSiteConfig = None,
  source_control: AppServiceSourceControl = None,
  storage_account: typing.Union[IResolvable, typing.List[AppServiceStorageAccount]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: AppServiceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.appServicePlanId">app_service_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#app_service_plan_id AppService#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#location AppService#location}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#name AppService#name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#resource_group_name AppService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#app_settings AppService#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.authSettings">auth_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings">AppServiceAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackup">AppServiceBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.clientAffinityEnabled">client_affinity_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_affinity_enabled AppService#client_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.clientCertEnabled">client_cert_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_cert_enabled AppService#client_cert_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.clientCertMode">client_cert_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_cert_mode AppService#client_cert_mode}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.connectionString">connection_string</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a>]]</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#enabled AppService#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#https_only AppService#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#id AppService#id}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentity">AppServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.keyVaultReferenceIdentityId">key_vault_reference_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#key_vault_reference_identity_id AppService#key_vault_reference_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogs">AppServiceLogs</a></code> | logs block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig">AppServiceSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.sourceControl">source_control</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl">AppServiceSourceControl</a></code> | source_control block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.storageAccount">storage_account</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a>]]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#tags AppService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts">AppServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_service_plan_id`<sup>Required</sup> <a name="app_service_plan_id" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.appServicePlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#app_service_plan_id AppService#app_service_plan_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#location AppService#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#name AppService#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#resource_group_name AppService#resource_group_name}.

---

##### `app_settings`<sup>Optional</sup> <a name="app_settings" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.appSettings"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#app_settings AppService#app_settings}.

---

##### `auth_settings`<sup>Optional</sup> <a name="auth_settings" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.authSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings">AppServiceAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#auth_settings AppService#auth_settings}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.backup"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackup">AppServiceBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#backup AppService#backup}

---

##### `client_affinity_enabled`<sup>Optional</sup> <a name="client_affinity_enabled" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.clientAffinityEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_affinity_enabled AppService#client_affinity_enabled}.

---

##### `client_cert_enabled`<sup>Optional</sup> <a name="client_cert_enabled" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.clientCertEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_cert_enabled AppService#client_cert_enabled}.

---

##### `client_cert_mode`<sup>Optional</sup> <a name="client_cert_mode" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.clientCertMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_cert_mode AppService#client_cert_mode}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.connectionString"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a>]]

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#connection_string AppService#connection_string}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#enabled AppService#enabled}.

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.httpsOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#https_only AppService#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#id AppService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceIdentity">AppServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#identity AppService#identity}

---

##### `key_vault_reference_identity_id`<sup>Optional</sup> <a name="key_vault_reference_identity_id" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.keyVaultReferenceIdentityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#key_vault_reference_identity_id AppService#key_vault_reference_identity_id}.

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.logs"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogs">AppServiceLogs</a>

logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#logs AppService#logs}

---

##### `site_config`<sup>Optional</sup> <a name="site_config" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.siteConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig">AppServiceSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#site_config AppService#site_config}

---

##### `source_control`<sup>Optional</sup> <a name="source_control" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.sourceControl"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl">AppServiceSourceControl</a>

source_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#source_control AppService#source_control}

---

##### `storage_account`<sup>Optional</sup> <a name="storage_account" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.storageAccount"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a>]]

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#storage_account AppService#storage_account}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#tags AppService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appService.AppService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts">AppServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#timeouts AppService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.putAuthSettings">put_auth_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.putBackup">put_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.putConnectionString">put_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.putLogs">put_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.putSiteConfig">put_site_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.putSourceControl">put_source_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.putStorageAccount">put_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetAppSettings">reset_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetAuthSettings">reset_auth_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetBackup">reset_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetClientAffinityEnabled">reset_client_affinity_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetClientCertEnabled">reset_client_cert_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetClientCertMode">reset_client_cert_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetConnectionString">reset_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetHttpsOnly">reset_https_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetKeyVaultReferenceIdentityId">reset_key_vault_reference_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetLogs">reset_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetSiteConfig">reset_site_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetSourceControl">reset_source_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetStorageAccount">reset_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.appService.AppService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appService.AppService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.appService.AppService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.appService.AppService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.appService.AppService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.appService.AppService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.appService.AppService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.appService.AppService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.appService.AppService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.appService.AppService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.appService.AppService.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.appService.AppService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appService.AppService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appService.AppService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.appService.AppService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appService.AppService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.appService.AppService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.appService.AppService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.appService.AppService.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.appService.AppService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appService.AppService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auth_settings` <a name="put_auth_settings" id="@cdktf/provider-azurerm.appService.AppService.putAuthSettings"></a>

```python
def put_auth_settings(
  enabled: typing.Union[bool, IResolvable],
  active_directory: AppServiceAuthSettingsActiveDirectory = None,
  additional_login_params: typing.Mapping[str] = None,
  allowed_external_redirect_urls: typing.List[str] = None,
  default_provider: str = None,
  facebook: AppServiceAuthSettingsFacebook = None,
  google: AppServiceAuthSettingsGoogle = None,
  issuer: str = None,
  microsoft: AppServiceAuthSettingsMicrosoft = None,
  runtime_version: str = None,
  token_refresh_extension_hours: typing.Union[int, float] = None,
  token_store_enabled: typing.Union[bool, IResolvable] = None,
  twitter: AppServiceAuthSettingsTwitter = None,
  unauthenticated_client_action: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.appService.AppService.putAuthSettings.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#enabled AppService#enabled}.

---

###### `active_directory`<sup>Optional</sup> <a name="active_directory" id="@cdktf/provider-azurerm.appService.AppService.putAuthSettings.parameter.activeDirectory"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory">AppServiceAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#active_directory AppService#active_directory}

---

###### `additional_login_params`<sup>Optional</sup> <a name="additional_login_params" id="@cdktf/provider-azurerm.appService.AppService.putAuthSettings.parameter.additionalLoginParams"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#additional_login_params AppService#additional_login_params}.

---

###### `allowed_external_redirect_urls`<sup>Optional</sup> <a name="allowed_external_redirect_urls" id="@cdktf/provider-azurerm.appService.AppService.putAuthSettings.parameter.allowedExternalRedirectUrls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#allowed_external_redirect_urls AppService#allowed_external_redirect_urls}.

---

###### `default_provider`<sup>Optional</sup> <a name="default_provider" id="@cdktf/provider-azurerm.appService.AppService.putAuthSettings.parameter.defaultProvider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#default_provider AppService#default_provider}.

---

###### `facebook`<sup>Optional</sup> <a name="facebook" id="@cdktf/provider-azurerm.appService.AppService.putAuthSettings.parameter.facebook"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook">AppServiceAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#facebook AppService#facebook}

---

###### `google`<sup>Optional</sup> <a name="google" id="@cdktf/provider-azurerm.appService.AppService.putAuthSettings.parameter.google"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle">AppServiceAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#google AppService#google}

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.appService.AppService.putAuthSettings.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#issuer AppService#issuer}.

---

###### `microsoft`<sup>Optional</sup> <a name="microsoft" id="@cdktf/provider-azurerm.appService.AppService.putAuthSettings.parameter.microsoft"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft">AppServiceAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#microsoft AppService#microsoft}

---

###### `runtime_version`<sup>Optional</sup> <a name="runtime_version" id="@cdktf/provider-azurerm.appService.AppService.putAuthSettings.parameter.runtimeVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#runtime_version AppService#runtime_version}.

---

###### `token_refresh_extension_hours`<sup>Optional</sup> <a name="token_refresh_extension_hours" id="@cdktf/provider-azurerm.appService.AppService.putAuthSettings.parameter.tokenRefreshExtensionHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#token_refresh_extension_hours AppService#token_refresh_extension_hours}.

---

###### `token_store_enabled`<sup>Optional</sup> <a name="token_store_enabled" id="@cdktf/provider-azurerm.appService.AppService.putAuthSettings.parameter.tokenStoreEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#token_store_enabled AppService#token_store_enabled}.

---

###### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-azurerm.appService.AppService.putAuthSettings.parameter.twitter"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter">AppServiceAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#twitter AppService#twitter}

---

###### `unauthenticated_client_action`<sup>Optional</sup> <a name="unauthenticated_client_action" id="@cdktf/provider-azurerm.appService.AppService.putAuthSettings.parameter.unauthenticatedClientAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#unauthenticated_client_action AppService#unauthenticated_client_action}.

---

##### `put_backup` <a name="put_backup" id="@cdktf/provider-azurerm.appService.AppService.putBackup"></a>

```python
def put_backup(
  name: str,
  schedule: AppServiceBackupSchedule,
  storage_account_url: str,
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppService.putBackup.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#name AppService#name}.

---

###### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.appService.AppService.putBackup.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule">AppServiceBackupSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#schedule AppService#schedule}

---

###### `storage_account_url`<sup>Required</sup> <a name="storage_account_url" id="@cdktf/provider-azurerm.appService.AppService.putBackup.parameter.storageAccountUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#storage_account_url AppService#storage_account_url}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.appService.AppService.putBackup.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#enabled AppService#enabled}.

---

##### `put_connection_string` <a name="put_connection_string" id="@cdktf/provider-azurerm.appService.AppService.putConnectionString"></a>

```python
def put_connection_string(
  value: typing.Union[IResolvable, typing.List[AppServiceConnectionString]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppService.putConnectionString.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a>]]

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.appService.AppService.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appService.AppService.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#type AppService#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.appService.AppService.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#identity_ids AppService#identity_ids}.

---

##### `put_logs` <a name="put_logs" id="@cdktf/provider-azurerm.appService.AppService.putLogs"></a>

```python
def put_logs(
  application_logs: AppServiceLogsApplicationLogs = None,
  detailed_error_messages_enabled: typing.Union[bool, IResolvable] = None,
  failed_request_tracing_enabled: typing.Union[bool, IResolvable] = None,
  http_logs: AppServiceLogsHttpLogs = None
) -> None
```

###### `application_logs`<sup>Optional</sup> <a name="application_logs" id="@cdktf/provider-azurerm.appService.AppService.putLogs.parameter.applicationLogs"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs">AppServiceLogsApplicationLogs</a>

application_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#application_logs AppService#application_logs}

---

###### `detailed_error_messages_enabled`<sup>Optional</sup> <a name="detailed_error_messages_enabled" id="@cdktf/provider-azurerm.appService.AppService.putLogs.parameter.detailedErrorMessagesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#detailed_error_messages_enabled AppService#detailed_error_messages_enabled}.

---

###### `failed_request_tracing_enabled`<sup>Optional</sup> <a name="failed_request_tracing_enabled" id="@cdktf/provider-azurerm.appService.AppService.putLogs.parameter.failedRequestTracingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#failed_request_tracing_enabled AppService#failed_request_tracing_enabled}.

---

###### `http_logs`<sup>Optional</sup> <a name="http_logs" id="@cdktf/provider-azurerm.appService.AppService.putLogs.parameter.httpLogs"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs">AppServiceLogsHttpLogs</a>

http_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#http_logs AppService#http_logs}

---

##### `put_site_config` <a name="put_site_config" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig"></a>

```python
def put_site_config(
  acr_use_managed_identity_credentials: typing.Union[bool, IResolvable] = None,
  acr_user_managed_identity_client_id: str = None,
  always_on: typing.Union[bool, IResolvable] = None,
  app_command_line: str = None,
  auto_swap_slot_name: str = None,
  cors: AppServiceSiteConfigCors = None,
  default_documents: typing.List[str] = None,
  dotnet_framework_version: str = None,
  ftps_state: str = None,
  health_check_path: str = None,
  http2_enabled: typing.Union[bool, IResolvable] = None,
  ip_restriction: typing.Union[IResolvable, typing.List[AppServiceSiteConfigIpRestriction]] = None,
  java_container: str = None,
  java_container_version: str = None,
  java_version: str = None,
  linux_fx_version: str = None,
  local_mysql_enabled: typing.Union[bool, IResolvable] = None,
  managed_pipeline_mode: str = None,
  min_tls_version: str = None,
  number_of_workers: typing.Union[int, float] = None,
  php_version: str = None,
  python_version: str = None,
  remote_debugging_enabled: typing.Union[bool, IResolvable] = None,
  remote_debugging_version: str = None,
  scm_ip_restriction: typing.Union[IResolvable, typing.List[AppServiceSiteConfigScmIpRestriction]] = None,
  scm_type: str = None,
  scm_use_main_ip_restriction: typing.Union[bool, IResolvable] = None,
  use32_bit_worker_process: typing.Union[bool, IResolvable] = None,
  vnet_route_all_enabled: typing.Union[bool, IResolvable] = None,
  websockets_enabled: typing.Union[bool, IResolvable] = None,
  windows_fx_version: str = None
) -> None
```

###### `acr_use_managed_identity_credentials`<sup>Optional</sup> <a name="acr_use_managed_identity_credentials" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.acrUseManagedIdentityCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#acr_use_managed_identity_credentials AppService#acr_use_managed_identity_credentials}.

---

###### `acr_user_managed_identity_client_id`<sup>Optional</sup> <a name="acr_user_managed_identity_client_id" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.acrUserManagedIdentityClientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#acr_user_managed_identity_client_id AppService#acr_user_managed_identity_client_id}.

---

###### `always_on`<sup>Optional</sup> <a name="always_on" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.alwaysOn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#always_on AppService#always_on}.

---

###### `app_command_line`<sup>Optional</sup> <a name="app_command_line" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.appCommandLine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#app_command_line AppService#app_command_line}.

---

###### `auto_swap_slot_name`<sup>Optional</sup> <a name="auto_swap_slot_name" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.autoSwapSlotName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#auto_swap_slot_name AppService#auto_swap_slot_name}.

---

###### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.cors"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors">AppServiceSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#cors AppService#cors}

---

###### `default_documents`<sup>Optional</sup> <a name="default_documents" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.defaultDocuments"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#default_documents AppService#default_documents}.

---

###### `dotnet_framework_version`<sup>Optional</sup> <a name="dotnet_framework_version" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.dotnetFrameworkVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#dotnet_framework_version AppService#dotnet_framework_version}.

---

###### `ftps_state`<sup>Optional</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.ftpsState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#ftps_state AppService#ftps_state}.

---

###### `health_check_path`<sup>Optional</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.healthCheckPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#health_check_path AppService#health_check_path}.

---

###### `http2_enabled`<sup>Optional</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.http2Enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#http2_enabled AppService#http2_enabled}.

---

###### `ip_restriction`<sup>Optional</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.ipRestriction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction">AppServiceSiteConfigIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#ip_restriction AppService#ip_restriction}.

---

###### `java_container`<sup>Optional</sup> <a name="java_container" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.javaContainer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#java_container AppService#java_container}.

---

###### `java_container_version`<sup>Optional</sup> <a name="java_container_version" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.javaContainerVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#java_container_version AppService#java_container_version}.

---

###### `java_version`<sup>Optional</sup> <a name="java_version" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.javaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#java_version AppService#java_version}.

---

###### `linux_fx_version`<sup>Optional</sup> <a name="linux_fx_version" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.linuxFxVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#linux_fx_version AppService#linux_fx_version}.

---

###### `local_mysql_enabled`<sup>Optional</sup> <a name="local_mysql_enabled" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.localMysqlEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#local_mysql_enabled AppService#local_mysql_enabled}.

---

###### `managed_pipeline_mode`<sup>Optional</sup> <a name="managed_pipeline_mode" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.managedPipelineMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#managed_pipeline_mode AppService#managed_pipeline_mode}.

---

###### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.minTlsVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#min_tls_version AppService#min_tls_version}.

---

###### `number_of_workers`<sup>Optional</sup> <a name="number_of_workers" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.numberOfWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#number_of_workers AppService#number_of_workers}.

---

###### `php_version`<sup>Optional</sup> <a name="php_version" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.phpVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#php_version AppService#php_version}.

---

###### `python_version`<sup>Optional</sup> <a name="python_version" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.pythonVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#python_version AppService#python_version}.

---

###### `remote_debugging_enabled`<sup>Optional</sup> <a name="remote_debugging_enabled" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.remoteDebuggingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#remote_debugging_enabled AppService#remote_debugging_enabled}.

---

###### `remote_debugging_version`<sup>Optional</sup> <a name="remote_debugging_version" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.remoteDebuggingVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#remote_debugging_version AppService#remote_debugging_version}.

---

###### `scm_ip_restriction`<sup>Optional</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.scmIpRestriction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction">AppServiceSiteConfigScmIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#scm_ip_restriction AppService#scm_ip_restriction}.

---

###### `scm_type`<sup>Optional</sup> <a name="scm_type" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.scmType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#scm_type AppService#scm_type}.

---

###### `scm_use_main_ip_restriction`<sup>Optional</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.scmUseMainIpRestriction"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#scm_use_main_ip_restriction AppService#scm_use_main_ip_restriction}.

---

###### `use32_bit_worker_process`<sup>Optional</sup> <a name="use32_bit_worker_process" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.use32BitWorkerProcess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#use_32_bit_worker_process AppService#use_32_bit_worker_process}.

---

###### `vnet_route_all_enabled`<sup>Optional</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.vnetRouteAllEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#vnet_route_all_enabled AppService#vnet_route_all_enabled}.

---

###### `websockets_enabled`<sup>Optional</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.websocketsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#websockets_enabled AppService#websockets_enabled}.

---

###### `windows_fx_version`<sup>Optional</sup> <a name="windows_fx_version" id="@cdktf/provider-azurerm.appService.AppService.putSiteConfig.parameter.windowsFxVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#windows_fx_version AppService#windows_fx_version}.

---

##### `put_source_control` <a name="put_source_control" id="@cdktf/provider-azurerm.appService.AppService.putSourceControl"></a>

```python
def put_source_control(
  branch: str = None,
  manual_integration: typing.Union[bool, IResolvable] = None,
  repo_url: str = None,
  rollback_enabled: typing.Union[bool, IResolvable] = None,
  use_mercurial: typing.Union[bool, IResolvable] = None
) -> None
```

###### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-azurerm.appService.AppService.putSourceControl.parameter.branch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#branch AppService#branch}.

---

###### `manual_integration`<sup>Optional</sup> <a name="manual_integration" id="@cdktf/provider-azurerm.appService.AppService.putSourceControl.parameter.manualIntegration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#manual_integration AppService#manual_integration}.

---

###### `repo_url`<sup>Optional</sup> <a name="repo_url" id="@cdktf/provider-azurerm.appService.AppService.putSourceControl.parameter.repoUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#repo_url AppService#repo_url}.

---

###### `rollback_enabled`<sup>Optional</sup> <a name="rollback_enabled" id="@cdktf/provider-azurerm.appService.AppService.putSourceControl.parameter.rollbackEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#rollback_enabled AppService#rollback_enabled}.

---

###### `use_mercurial`<sup>Optional</sup> <a name="use_mercurial" id="@cdktf/provider-azurerm.appService.AppService.putSourceControl.parameter.useMercurial"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#use_mercurial AppService#use_mercurial}.

---

##### `put_storage_account` <a name="put_storage_account" id="@cdktf/provider-azurerm.appService.AppService.putStorageAccount"></a>

```python
def put_storage_account(
  value: typing.Union[IResolvable, typing.List[AppServiceStorageAccount]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppService.putStorageAccount.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.appService.AppService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appService.AppService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#create AppService#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appService.AppService.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#delete AppService#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appService.AppService.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#read AppService#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appService.AppService.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#update AppService#update}.

---

##### `reset_app_settings` <a name="reset_app_settings" id="@cdktf/provider-azurerm.appService.AppService.resetAppSettings"></a>

```python
def reset_app_settings() -> None
```

##### `reset_auth_settings` <a name="reset_auth_settings" id="@cdktf/provider-azurerm.appService.AppService.resetAuthSettings"></a>

```python
def reset_auth_settings() -> None
```

##### `reset_backup` <a name="reset_backup" id="@cdktf/provider-azurerm.appService.AppService.resetBackup"></a>

```python
def reset_backup() -> None
```

##### `reset_client_affinity_enabled` <a name="reset_client_affinity_enabled" id="@cdktf/provider-azurerm.appService.AppService.resetClientAffinityEnabled"></a>

```python
def reset_client_affinity_enabled() -> None
```

##### `reset_client_cert_enabled` <a name="reset_client_cert_enabled" id="@cdktf/provider-azurerm.appService.AppService.resetClientCertEnabled"></a>

```python
def reset_client_cert_enabled() -> None
```

##### `reset_client_cert_mode` <a name="reset_client_cert_mode" id="@cdktf/provider-azurerm.appService.AppService.resetClientCertMode"></a>

```python
def reset_client_cert_mode() -> None
```

##### `reset_connection_string` <a name="reset_connection_string" id="@cdktf/provider-azurerm.appService.AppService.resetConnectionString"></a>

```python
def reset_connection_string() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.appService.AppService.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_https_only` <a name="reset_https_only" id="@cdktf/provider-azurerm.appService.AppService.resetHttpsOnly"></a>

```python
def reset_https_only() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.appService.AppService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.appService.AppService.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_key_vault_reference_identity_id` <a name="reset_key_vault_reference_identity_id" id="@cdktf/provider-azurerm.appService.AppService.resetKeyVaultReferenceIdentityId"></a>

```python
def reset_key_vault_reference_identity_id() -> None
```

##### `reset_logs` <a name="reset_logs" id="@cdktf/provider-azurerm.appService.AppService.resetLogs"></a>

```python
def reset_logs() -> None
```

##### `reset_site_config` <a name="reset_site_config" id="@cdktf/provider-azurerm.appService.AppService.resetSiteConfig"></a>

```python
def reset_site_config() -> None
```

##### `reset_source_control` <a name="reset_source_control" id="@cdktf/provider-azurerm.appService.AppService.resetSourceControl"></a>

```python
def reset_source_control() -> None
```

##### `reset_storage_account` <a name="reset_storage_account" id="@cdktf/provider-azurerm.appService.AppService.resetStorageAccount"></a>

```python
def reset_storage_account() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.appService.AppService.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.appService.AppService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.appService.AppService.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appService.AppService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.appService.AppService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appService.AppService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.appService.AppService.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appService.AppService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.appService.AppService.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appService.AppService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.appService.AppService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.appService.AppService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appService.AppService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.authSettings">auth_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference">AppServiceAuthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference">AppServiceBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.connectionString">connection_string</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList">AppServiceConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.customDomainVerificationId">custom_domain_verification_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.defaultSiteHostname">default_site_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference">AppServiceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference">AppServiceLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.outboundIpAddresses">outbound_ip_addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.outboundIpAddressList">outbound_ip_address_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.possibleOutboundIpAddresses">possible_outbound_ip_addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.possibleOutboundIpAddressList">possible_outbound_ip_address_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference">AppServiceSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.siteCredential">site_credential</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList">AppServiceSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.sourceControl">source_control</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference">AppServiceSourceControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.storageAccount">storage_account</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList">AppServiceStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference">AppServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.appServicePlanIdInput">app_service_plan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.appSettingsInput">app_settings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.authSettingsInput">auth_settings_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings">AppServiceAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.backupInput">backup_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackup">AppServiceBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.clientAffinityEnabledInput">client_affinity_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.clientCertEnabledInput">client_cert_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.clientCertModeInput">client_cert_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.connectionStringInput">connection_string_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.httpsOnlyInput">https_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentity">AppServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.keyVaultReferenceIdentityIdInput">key_vault_reference_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.logsInput">logs_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogs">AppServiceLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.siteConfigInput">site_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig">AppServiceSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.sourceControlInput">source_control_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl">AppServiceSourceControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.storageAccountInput">storage_account_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts">AppServiceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.appServicePlanId">app_service_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.clientAffinityEnabled">client_affinity_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.clientCertEnabled">client_cert_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.clientCertMode">client_cert_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.keyVaultReferenceIdentityId">key_vault_reference_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appService.AppService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.appService.AppService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.appService.AppService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.appService.AppService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.appService.AppService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.appService.AppService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appService.AppService.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appService.AppService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appService.AppService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appService.AppService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appService.AppService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appService.AppService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appService.AppService.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_settings`<sup>Required</sup> <a name="auth_settings" id="@cdktf/provider-azurerm.appService.AppService.property.authSettings"></a>

```python
auth_settings: AppServiceAuthSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference">AppServiceAuthSettingsOutputReference</a>

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.appService.AppService.property.backup"></a>

```python
backup: AppServiceBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference">AppServiceBackupOutputReference</a>

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.appService.AppService.property.connectionString"></a>

```python
connection_string: AppServiceConnectionStringList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList">AppServiceConnectionStringList</a>

---

##### `custom_domain_verification_id`<sup>Required</sup> <a name="custom_domain_verification_id" id="@cdktf/provider-azurerm.appService.AppService.property.customDomainVerificationId"></a>

```python
custom_domain_verification_id: str
```

- *Type:* str

---

##### `default_site_hostname`<sup>Required</sup> <a name="default_site_hostname" id="@cdktf/provider-azurerm.appService.AppService.property.defaultSiteHostname"></a>

```python
default_site_hostname: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.appService.AppService.property.identity"></a>

```python
identity: AppServiceIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference">AppServiceIdentityOutputReference</a>

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktf/provider-azurerm.appService.AppService.property.logs"></a>

```python
logs: AppServiceLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference">AppServiceLogsOutputReference</a>

---

##### `outbound_ip_addresses`<sup>Required</sup> <a name="outbound_ip_addresses" id="@cdktf/provider-azurerm.appService.AppService.property.outboundIpAddresses"></a>

```python
outbound_ip_addresses: str
```

- *Type:* str

---

##### `outbound_ip_address_list`<sup>Required</sup> <a name="outbound_ip_address_list" id="@cdktf/provider-azurerm.appService.AppService.property.outboundIpAddressList"></a>

```python
outbound_ip_address_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `possible_outbound_ip_addresses`<sup>Required</sup> <a name="possible_outbound_ip_addresses" id="@cdktf/provider-azurerm.appService.AppService.property.possibleOutboundIpAddresses"></a>

```python
possible_outbound_ip_addresses: str
```

- *Type:* str

---

##### `possible_outbound_ip_address_list`<sup>Required</sup> <a name="possible_outbound_ip_address_list" id="@cdktf/provider-azurerm.appService.AppService.property.possibleOutboundIpAddressList"></a>

```python
possible_outbound_ip_address_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `site_config`<sup>Required</sup> <a name="site_config" id="@cdktf/provider-azurerm.appService.AppService.property.siteConfig"></a>

```python
site_config: AppServiceSiteConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference">AppServiceSiteConfigOutputReference</a>

---

##### `site_credential`<sup>Required</sup> <a name="site_credential" id="@cdktf/provider-azurerm.appService.AppService.property.siteCredential"></a>

```python
site_credential: AppServiceSiteCredentialList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList">AppServiceSiteCredentialList</a>

---

##### `source_control`<sup>Required</sup> <a name="source_control" id="@cdktf/provider-azurerm.appService.AppService.property.sourceControl"></a>

```python
source_control: AppServiceSourceControlOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference">AppServiceSourceControlOutputReference</a>

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-azurerm.appService.AppService.property.storageAccount"></a>

```python
storage_account: AppServiceStorageAccountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList">AppServiceStorageAccountList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appService.AppService.property.timeouts"></a>

```python
timeouts: AppServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference">AppServiceTimeoutsOutputReference</a>

---

##### `app_service_plan_id_input`<sup>Optional</sup> <a name="app_service_plan_id_input" id="@cdktf/provider-azurerm.appService.AppService.property.appServicePlanIdInput"></a>

```python
app_service_plan_id_input: str
```

- *Type:* str

---

##### `app_settings_input`<sup>Optional</sup> <a name="app_settings_input" id="@cdktf/provider-azurerm.appService.AppService.property.appSettingsInput"></a>

```python
app_settings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `auth_settings_input`<sup>Optional</sup> <a name="auth_settings_input" id="@cdktf/provider-azurerm.appService.AppService.property.authSettingsInput"></a>

```python
auth_settings_input: AppServiceAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings">AppServiceAuthSettings</a>

---

##### `backup_input`<sup>Optional</sup> <a name="backup_input" id="@cdktf/provider-azurerm.appService.AppService.property.backupInput"></a>

```python
backup_input: AppServiceBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackup">AppServiceBackup</a>

---

##### `client_affinity_enabled_input`<sup>Optional</sup> <a name="client_affinity_enabled_input" id="@cdktf/provider-azurerm.appService.AppService.property.clientAffinityEnabledInput"></a>

```python
client_affinity_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_cert_enabled_input`<sup>Optional</sup> <a name="client_cert_enabled_input" id="@cdktf/provider-azurerm.appService.AppService.property.clientCertEnabledInput"></a>

```python
client_cert_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_cert_mode_input`<sup>Optional</sup> <a name="client_cert_mode_input" id="@cdktf/provider-azurerm.appService.AppService.property.clientCertModeInput"></a>

```python
client_cert_mode_input: str
```

- *Type:* str

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="@cdktf/provider-azurerm.appService.AppService.property.connectionStringInput"></a>

```python
connection_string_input: typing.Union[IResolvable, typing.List[AppServiceConnectionString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a>]]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.appService.AppService.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `https_only_input`<sup>Optional</sup> <a name="https_only_input" id="@cdktf/provider-azurerm.appService.AppService.property.httpsOnlyInput"></a>

```python
https_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.appService.AppService.property.identityInput"></a>

```python
identity_input: AppServiceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceIdentity">AppServiceIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.appService.AppService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_reference_identity_id_input`<sup>Optional</sup> <a name="key_vault_reference_identity_id_input" id="@cdktf/provider-azurerm.appService.AppService.property.keyVaultReferenceIdentityIdInput"></a>

```python
key_vault_reference_identity_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.appService.AppService.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logs_input`<sup>Optional</sup> <a name="logs_input" id="@cdktf/provider-azurerm.appService.AppService.property.logsInput"></a>

```python
logs_input: AppServiceLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogs">AppServiceLogs</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.appService.AppService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.appService.AppService.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `site_config_input`<sup>Optional</sup> <a name="site_config_input" id="@cdktf/provider-azurerm.appService.AppService.property.siteConfigInput"></a>

```python
site_config_input: AppServiceSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig">AppServiceSiteConfig</a>

---

##### `source_control_input`<sup>Optional</sup> <a name="source_control_input" id="@cdktf/provider-azurerm.appService.AppService.property.sourceControlInput"></a>

```python
source_control_input: AppServiceSourceControl
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl">AppServiceSourceControl</a>

---

##### `storage_account_input`<sup>Optional</sup> <a name="storage_account_input" id="@cdktf/provider-azurerm.appService.AppService.property.storageAccountInput"></a>

```python
storage_account_input: typing.Union[IResolvable, typing.List[AppServiceStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.appService.AppService.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.appService.AppService.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AppServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts">AppServiceTimeouts</a>]

---

##### `app_service_plan_id`<sup>Required</sup> <a name="app_service_plan_id" id="@cdktf/provider-azurerm.appService.AppService.property.appServicePlanId"></a>

```python
app_service_plan_id: str
```

- *Type:* str

---

##### `app_settings`<sup>Required</sup> <a name="app_settings" id="@cdktf/provider-azurerm.appService.AppService.property.appSettings"></a>

```python
app_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `client_affinity_enabled`<sup>Required</sup> <a name="client_affinity_enabled" id="@cdktf/provider-azurerm.appService.AppService.property.clientAffinityEnabled"></a>

```python
client_affinity_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_cert_enabled`<sup>Required</sup> <a name="client_cert_enabled" id="@cdktf/provider-azurerm.appService.AppService.property.clientCertEnabled"></a>

```python
client_cert_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_cert_mode`<sup>Required</sup> <a name="client_cert_mode" id="@cdktf/provider-azurerm.appService.AppService.property.clientCertMode"></a>

```python
client_cert_mode: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.appService.AppService.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `https_only`<sup>Required</sup> <a name="https_only" id="@cdktf/provider-azurerm.appService.AppService.property.httpsOnly"></a>

```python
https_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appService.AppService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_vault_reference_identity_id`<sup>Required</sup> <a name="key_vault_reference_identity_id" id="@cdktf/provider-azurerm.appService.AppService.property.keyVaultReferenceIdentityId"></a>

```python
key_vault_reference_identity_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.appService.AppService.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.appService.AppService.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.appService.AppService.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appService.AppService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceAuthSettings <a name="AppServiceAuthSettings" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceAuthSettings(
  enabled: typing.Union[bool, IResolvable],
  active_directory: AppServiceAuthSettingsActiveDirectory = None,
  additional_login_params: typing.Mapping[str] = None,
  allowed_external_redirect_urls: typing.List[str] = None,
  default_provider: str = None,
  facebook: AppServiceAuthSettingsFacebook = None,
  google: AppServiceAuthSettingsGoogle = None,
  issuer: str = None,
  microsoft: AppServiceAuthSettingsMicrosoft = None,
  runtime_version: str = None,
  token_refresh_extension_hours: typing.Union[int, float] = None,
  token_store_enabled: typing.Union[bool, IResolvable] = None,
  twitter: AppServiceAuthSettingsTwitter = None,
  unauthenticated_client_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#enabled AppService#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.activeDirectory">active_directory</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory">AppServiceAuthSettingsActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.additionalLoginParams">additional_login_params</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#additional_login_params AppService#additional_login_params}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.allowedExternalRedirectUrls">allowed_external_redirect_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#allowed_external_redirect_urls AppService#allowed_external_redirect_urls}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.defaultProvider">default_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#default_provider AppService#default_provider}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook">AppServiceAuthSettingsFacebook</a></code> | facebook block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle">AppServiceAuthSettingsGoogle</a></code> | google block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#issuer AppService#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft">AppServiceAuthSettingsMicrosoft</a></code> | microsoft block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#runtime_version AppService#runtime_version}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.tokenRefreshExtensionHours">token_refresh_extension_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#token_refresh_extension_hours AppService#token_refresh_extension_hours}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.tokenStoreEnabled">token_store_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#token_store_enabled AppService#token_store_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter">AppServiceAuthSettingsTwitter</a></code> | twitter block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.unauthenticatedClientAction">unauthenticated_client_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#unauthenticated_client_action AppService#unauthenticated_client_action}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#enabled AppService#enabled}.

---

##### `active_directory`<sup>Optional</sup> <a name="active_directory" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.activeDirectory"></a>

```python
active_directory: AppServiceAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory">AppServiceAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#active_directory AppService#active_directory}

---

##### `additional_login_params`<sup>Optional</sup> <a name="additional_login_params" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.additionalLoginParams"></a>

```python
additional_login_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#additional_login_params AppService#additional_login_params}.

---

##### `allowed_external_redirect_urls`<sup>Optional</sup> <a name="allowed_external_redirect_urls" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.allowedExternalRedirectUrls"></a>

```python
allowed_external_redirect_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#allowed_external_redirect_urls AppService#allowed_external_redirect_urls}.

---

##### `default_provider`<sup>Optional</sup> <a name="default_provider" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.defaultProvider"></a>

```python
default_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#default_provider AppService#default_provider}.

---

##### `facebook`<sup>Optional</sup> <a name="facebook" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.facebook"></a>

```python
facebook: AppServiceAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook">AppServiceAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#facebook AppService#facebook}

---

##### `google`<sup>Optional</sup> <a name="google" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.google"></a>

```python
google: AppServiceAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle">AppServiceAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#google AppService#google}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#issuer AppService#issuer}.

---

##### `microsoft`<sup>Optional</sup> <a name="microsoft" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.microsoft"></a>

```python
microsoft: AppServiceAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft">AppServiceAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#microsoft AppService#microsoft}

---

##### `runtime_version`<sup>Optional</sup> <a name="runtime_version" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#runtime_version AppService#runtime_version}.

---

##### `token_refresh_extension_hours`<sup>Optional</sup> <a name="token_refresh_extension_hours" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.tokenRefreshExtensionHours"></a>

```python
token_refresh_extension_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#token_refresh_extension_hours AppService#token_refresh_extension_hours}.

---

##### `token_store_enabled`<sup>Optional</sup> <a name="token_store_enabled" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.tokenStoreEnabled"></a>

```python
token_store_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#token_store_enabled AppService#token_store_enabled}.

---

##### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.twitter"></a>

```python
twitter: AppServiceAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter">AppServiceAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#twitter AppService#twitter}

---

##### `unauthenticated_client_action`<sup>Optional</sup> <a name="unauthenticated_client_action" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettings.property.unauthenticatedClientAction"></a>

```python
unauthenticated_client_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#unauthenticated_client_action AppService#unauthenticated_client_action}.

---

### AppServiceAuthSettingsActiveDirectory <a name="AppServiceAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceAuthSettingsActiveDirectory(
  client_id: str,
  allowed_audiences: typing.List[str] = None,
  client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_id AppService#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory.property.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#allowed_audiences AppService#allowed_audiences}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_secret AppService#client_secret}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_id AppService#client_id}.

---

##### `allowed_audiences`<sup>Optional</sup> <a name="allowed_audiences" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory.property.allowedAudiences"></a>

```python
allowed_audiences: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#allowed_audiences AppService#allowed_audiences}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_secret AppService#client_secret}.

---

### AppServiceAuthSettingsFacebook <a name="AppServiceAuthSettingsFacebook" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceAuthSettingsFacebook(
  app_id: str,
  app_secret: str,
  oauth_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook.property.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#app_id AppService#app_id}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook.property.appSecret">app_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#app_secret AppService#app_secret}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#oauth_scopes AppService#oauth_scopes}. |

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook.property.appId"></a>

```python
app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#app_id AppService#app_id}.

---

##### `app_secret`<sup>Required</sup> <a name="app_secret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook.property.appSecret"></a>

```python
app_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#app_secret AppService#app_secret}.

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#oauth_scopes AppService#oauth_scopes}.

---

### AppServiceAuthSettingsGoogle <a name="AppServiceAuthSettingsGoogle" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceAuthSettingsGoogle(
  client_id: str,
  client_secret: str,
  oauth_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_id AppService#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_secret AppService#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#oauth_scopes AppService#oauth_scopes}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_id AppService#client_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_secret AppService#client_secret}.

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#oauth_scopes AppService#oauth_scopes}.

---

### AppServiceAuthSettingsMicrosoft <a name="AppServiceAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceAuthSettingsMicrosoft(
  client_id: str,
  client_secret: str,
  oauth_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_id AppService#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_secret AppService#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#oauth_scopes AppService#oauth_scopes}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_id AppService#client_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_secret AppService#client_secret}.

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#oauth_scopes AppService#oauth_scopes}.

---

### AppServiceAuthSettingsTwitter <a name="AppServiceAuthSettingsTwitter" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceAuthSettingsTwitter(
  consumer_key: str,
  consumer_secret: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter.property.consumerKey">consumer_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#consumer_key AppService#consumer_key}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#consumer_secret AppService#consumer_secret}. |

---

##### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#consumer_key AppService#consumer_key}.

---

##### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#consumer_secret AppService#consumer_secret}.

---

### AppServiceBackup <a name="AppServiceBackup" id="@cdktf/provider-azurerm.appService.AppServiceBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceBackup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceBackup(
  name: str,
  schedule: AppServiceBackupSchedule,
  storage_account_url: str,
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackup.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#name AppService#name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackup.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule">AppServiceBackupSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackup.property.storageAccountUrl">storage_account_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#storage_account_url AppService#storage_account_url}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackup.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#enabled AppService#enabled}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceBackup.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#name AppService#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.appService.AppServiceBackup.property.schedule"></a>

```python
schedule: AppServiceBackupSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule">AppServiceBackupSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#schedule AppService#schedule}

---

##### `storage_account_url`<sup>Required</sup> <a name="storage_account_url" id="@cdktf/provider-azurerm.appService.AppServiceBackup.property.storageAccountUrl"></a>

```python
storage_account_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#storage_account_url AppService#storage_account_url}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.appService.AppServiceBackup.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#enabled AppService#enabled}.

---

### AppServiceBackupSchedule <a name="AppServiceBackupSchedule" id="@cdktf/provider-azurerm.appService.AppServiceBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceBackupSchedule(
  frequency_interval: typing.Union[int, float],
  frequency_unit: str,
  keep_at_least_one_backup: typing.Union[bool, IResolvable] = None,
  retention_period_in_days: typing.Union[int, float] = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.frequencyInterval">frequency_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#frequency_interval AppService#frequency_interval}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.frequencyUnit">frequency_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#frequency_unit AppService#frequency_unit}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.keepAtLeastOneBackup">keep_at_least_one_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#keep_at_least_one_backup AppService#keep_at_least_one_backup}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#retention_period_in_days AppService#retention_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#start_time AppService#start_time}. |

---

##### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.frequencyInterval"></a>

```python
frequency_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#frequency_interval AppService#frequency_interval}.

---

##### `frequency_unit`<sup>Required</sup> <a name="frequency_unit" id="@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.frequencyUnit"></a>

```python
frequency_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#frequency_unit AppService#frequency_unit}.

---

##### `keep_at_least_one_backup`<sup>Optional</sup> <a name="keep_at_least_one_backup" id="@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.keepAtLeastOneBackup"></a>

```python
keep_at_least_one_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#keep_at_least_one_backup AppService#keep_at_least_one_backup}.

---

##### `retention_period_in_days`<sup>Optional</sup> <a name="retention_period_in_days" id="@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#retention_period_in_days AppService#retention_period_in_days}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-azurerm.appService.AppServiceBackupSchedule.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#start_time AppService#start_time}.

---

### AppServiceConfig <a name="AppServiceConfig" id="@cdktf/provider-azurerm.appService.AppServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceConfig(
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
  app_settings: typing.Mapping[str] = None,
  auth_settings: AppServiceAuthSettings = None,
  backup: AppServiceBackup = None,
  client_affinity_enabled: typing.Union[bool, IResolvable] = None,
  client_cert_enabled: typing.Union[bool, IResolvable] = None,
  client_cert_mode: str = None,
  connection_string: typing.Union[IResolvable, typing.List[AppServiceConnectionString]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  https_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: AppServiceIdentity = None,
  key_vault_reference_identity_id: str = None,
  logs: AppServiceLogs = None,
  site_config: AppServiceSiteConfig = None,
  source_control: AppServiceSourceControl = None,
  storage_account: typing.Union[IResolvable, typing.List[AppServiceStorageAccount]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: AppServiceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.appServicePlanId">app_service_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#app_service_plan_id AppService#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#location AppService#location}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#name AppService#name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#resource_group_name AppService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#app_settings AppService#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.authSettings">auth_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings">AppServiceAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackup">AppServiceBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.clientAffinityEnabled">client_affinity_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_affinity_enabled AppService#client_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.clientCertEnabled">client_cert_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_cert_enabled AppService#client_cert_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.clientCertMode">client_cert_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_cert_mode AppService#client_cert_mode}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.connectionString">connection_string</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a>]]</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#enabled AppService#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#https_only AppService#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#id AppService#id}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentity">AppServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.keyVaultReferenceIdentityId">key_vault_reference_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#key_vault_reference_identity_id AppService#key_vault_reference_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogs">AppServiceLogs</a></code> | logs block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig">AppServiceSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.sourceControl">source_control</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl">AppServiceSourceControl</a></code> | source_control block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.storageAccount">storage_account</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a>]]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#tags AppService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts">AppServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_service_plan_id`<sup>Required</sup> <a name="app_service_plan_id" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.appServicePlanId"></a>

```python
app_service_plan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#app_service_plan_id AppService#app_service_plan_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#location AppService#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#name AppService#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#resource_group_name AppService#resource_group_name}.

---

##### `app_settings`<sup>Optional</sup> <a name="app_settings" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.appSettings"></a>

```python
app_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#app_settings AppService#app_settings}.

---

##### `auth_settings`<sup>Optional</sup> <a name="auth_settings" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.authSettings"></a>

```python
auth_settings: AppServiceAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings">AppServiceAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#auth_settings AppService#auth_settings}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.backup"></a>

```python
backup: AppServiceBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackup">AppServiceBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#backup AppService#backup}

---

##### `client_affinity_enabled`<sup>Optional</sup> <a name="client_affinity_enabled" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.clientAffinityEnabled"></a>

```python
client_affinity_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_affinity_enabled AppService#client_affinity_enabled}.

---

##### `client_cert_enabled`<sup>Optional</sup> <a name="client_cert_enabled" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.clientCertEnabled"></a>

```python
client_cert_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_cert_enabled AppService#client_cert_enabled}.

---

##### `client_cert_mode`<sup>Optional</sup> <a name="client_cert_mode" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.clientCertMode"></a>

```python
client_cert_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_cert_mode AppService#client_cert_mode}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.connectionString"></a>

```python
connection_string: typing.Union[IResolvable, typing.List[AppServiceConnectionString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a>]]

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#connection_string AppService#connection_string}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#enabled AppService#enabled}.

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.httpsOnly"></a>

```python
https_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#https_only AppService#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#id AppService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.identity"></a>

```python
identity: AppServiceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceIdentity">AppServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#identity AppService#identity}

---

##### `key_vault_reference_identity_id`<sup>Optional</sup> <a name="key_vault_reference_identity_id" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.keyVaultReferenceIdentityId"></a>

```python
key_vault_reference_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#key_vault_reference_identity_id AppService#key_vault_reference_identity_id}.

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.logs"></a>

```python
logs: AppServiceLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogs">AppServiceLogs</a>

logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#logs AppService#logs}

---

##### `site_config`<sup>Optional</sup> <a name="site_config" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.siteConfig"></a>

```python
site_config: AppServiceSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig">AppServiceSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#site_config AppService#site_config}

---

##### `source_control`<sup>Optional</sup> <a name="source_control" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.sourceControl"></a>

```python
source_control: AppServiceSourceControl
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl">AppServiceSourceControl</a>

source_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#source_control AppService#source_control}

---

##### `storage_account`<sup>Optional</sup> <a name="storage_account" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.storageAccount"></a>

```python
storage_account: typing.Union[IResolvable, typing.List[AppServiceStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a>]]

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#storage_account AppService#storage_account}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#tags AppService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appService.AppServiceConfig.property.timeouts"></a>

```python
timeouts: AppServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts">AppServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#timeouts AppService#timeouts}

---

### AppServiceConnectionString <a name="AppServiceConnectionString" id="@cdktf/provider-azurerm.appService.AppServiceConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceConnectionString.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceConnectionString(
  name: str,
  type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#name AppService#name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#type AppService#type}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#value AppService#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceConnectionString.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#name AppService#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appService.AppServiceConnectionString.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#type AppService#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceConnectionString.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#value AppService#value}.

---

### AppServiceIdentity <a name="AppServiceIdentity" id="@cdktf/provider-azurerm.appService.AppServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#type AppService#type}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#identity_ids AppService#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appService.AppServiceIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#type AppService#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.appService.AppServiceIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#identity_ids AppService#identity_ids}.

---

### AppServiceLogs <a name="AppServiceLogs" id="@cdktf/provider-azurerm.appService.AppServiceLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceLogs(
  application_logs: AppServiceLogsApplicationLogs = None,
  detailed_error_messages_enabled: typing.Union[bool, IResolvable] = None,
  failed_request_tracing_enabled: typing.Union[bool, IResolvable] = None,
  http_logs: AppServiceLogsHttpLogs = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogs.property.applicationLogs">application_logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs">AppServiceLogsApplicationLogs</a></code> | application_logs block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogs.property.detailedErrorMessagesEnabled">detailed_error_messages_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#detailed_error_messages_enabled AppService#detailed_error_messages_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogs.property.failedRequestTracingEnabled">failed_request_tracing_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#failed_request_tracing_enabled AppService#failed_request_tracing_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogs.property.httpLogs">http_logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs">AppServiceLogsHttpLogs</a></code> | http_logs block. |

---

##### `application_logs`<sup>Optional</sup> <a name="application_logs" id="@cdktf/provider-azurerm.appService.AppServiceLogs.property.applicationLogs"></a>

```python
application_logs: AppServiceLogsApplicationLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs">AppServiceLogsApplicationLogs</a>

application_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#application_logs AppService#application_logs}

---

##### `detailed_error_messages_enabled`<sup>Optional</sup> <a name="detailed_error_messages_enabled" id="@cdktf/provider-azurerm.appService.AppServiceLogs.property.detailedErrorMessagesEnabled"></a>

```python
detailed_error_messages_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#detailed_error_messages_enabled AppService#detailed_error_messages_enabled}.

---

##### `failed_request_tracing_enabled`<sup>Optional</sup> <a name="failed_request_tracing_enabled" id="@cdktf/provider-azurerm.appService.AppServiceLogs.property.failedRequestTracingEnabled"></a>

```python
failed_request_tracing_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#failed_request_tracing_enabled AppService#failed_request_tracing_enabled}.

---

##### `http_logs`<sup>Optional</sup> <a name="http_logs" id="@cdktf/provider-azurerm.appService.AppServiceLogs.property.httpLogs"></a>

```python
http_logs: AppServiceLogsHttpLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs">AppServiceLogsHttpLogs</a>

http_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#http_logs AppService#http_logs}

---

### AppServiceLogsApplicationLogs <a name="AppServiceLogsApplicationLogs" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceLogsApplicationLogs(
  azure_blob_storage: AppServiceLogsApplicationLogsAzureBlobStorage = None,
  file_system_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs.property.azureBlobStorage">azure_blob_storage</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage">AppServiceLogsApplicationLogsAzureBlobStorage</a></code> | azure_blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs.property.fileSystemLevel">file_system_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#file_system_level AppService#file_system_level}. |

---

##### `azure_blob_storage`<sup>Optional</sup> <a name="azure_blob_storage" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs.property.azureBlobStorage"></a>

```python
azure_blob_storage: AppServiceLogsApplicationLogsAzureBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage">AppServiceLogsApplicationLogsAzureBlobStorage</a>

azure_blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#azure_blob_storage AppService#azure_blob_storage}

---

##### `file_system_level`<sup>Optional</sup> <a name="file_system_level" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs.property.fileSystemLevel"></a>

```python
file_system_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#file_system_level AppService#file_system_level}.

---

### AppServiceLogsApplicationLogsAzureBlobStorage <a name="AppServiceLogsApplicationLogsAzureBlobStorage" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceLogsApplicationLogsAzureBlobStorage(
  level: str,
  retention_in_days: typing.Union[int, float],
  sas_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage.property.level">level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#level AppService#level}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#retention_in_days AppService#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage.property.sasUrl">sas_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#sas_url AppService#sas_url}. |

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage.property.level"></a>

```python
level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#level AppService#level}.

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#retention_in_days AppService#retention_in_days}.

---

##### `sas_url`<sup>Required</sup> <a name="sas_url" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage.property.sasUrl"></a>

```python
sas_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#sas_url AppService#sas_url}.

---

### AppServiceLogsHttpLogs <a name="AppServiceLogsHttpLogs" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceLogsHttpLogs(
  azure_blob_storage: AppServiceLogsHttpLogsAzureBlobStorage = None,
  file_system: AppServiceLogsHttpLogsFileSystem = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs.property.azureBlobStorage">azure_blob_storage</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage">AppServiceLogsHttpLogsAzureBlobStorage</a></code> | azure_blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs.property.fileSystem">file_system</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem">AppServiceLogsHttpLogsFileSystem</a></code> | file_system block. |

---

##### `azure_blob_storage`<sup>Optional</sup> <a name="azure_blob_storage" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs.property.azureBlobStorage"></a>

```python
azure_blob_storage: AppServiceLogsHttpLogsAzureBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage">AppServiceLogsHttpLogsAzureBlobStorage</a>

azure_blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#azure_blob_storage AppService#azure_blob_storage}

---

##### `file_system`<sup>Optional</sup> <a name="file_system" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs.property.fileSystem"></a>

```python
file_system: AppServiceLogsHttpLogsFileSystem
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem">AppServiceLogsHttpLogsFileSystem</a>

file_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#file_system AppService#file_system}

---

### AppServiceLogsHttpLogsAzureBlobStorage <a name="AppServiceLogsHttpLogsAzureBlobStorage" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceLogsHttpLogsAzureBlobStorage(
  retention_in_days: typing.Union[int, float],
  sas_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#retention_in_days AppService#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage.property.sasUrl">sas_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#sas_url AppService#sas_url}. |

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#retention_in_days AppService#retention_in_days}.

---

##### `sas_url`<sup>Required</sup> <a name="sas_url" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage.property.sasUrl"></a>

```python
sas_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#sas_url AppService#sas_url}.

---

### AppServiceLogsHttpLogsFileSystem <a name="AppServiceLogsHttpLogsFileSystem" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceLogsHttpLogsFileSystem(
  retention_in_days: typing.Union[int, float],
  retention_in_mb: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#retention_in_days AppService#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem.property.retentionInMb">retention_in_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#retention_in_mb AppService#retention_in_mb}. |

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#retention_in_days AppService#retention_in_days}.

---

##### `retention_in_mb`<sup>Required</sup> <a name="retention_in_mb" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem.property.retentionInMb"></a>

```python
retention_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#retention_in_mb AppService#retention_in_mb}.

---

### AppServiceSiteConfig <a name="AppServiceSiteConfig" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSiteConfig(
  acr_use_managed_identity_credentials: typing.Union[bool, IResolvable] = None,
  acr_user_managed_identity_client_id: str = None,
  always_on: typing.Union[bool, IResolvable] = None,
  app_command_line: str = None,
  auto_swap_slot_name: str = None,
  cors: AppServiceSiteConfigCors = None,
  default_documents: typing.List[str] = None,
  dotnet_framework_version: str = None,
  ftps_state: str = None,
  health_check_path: str = None,
  http2_enabled: typing.Union[bool, IResolvable] = None,
  ip_restriction: typing.Union[IResolvable, typing.List[AppServiceSiteConfigIpRestriction]] = None,
  java_container: str = None,
  java_container_version: str = None,
  java_version: str = None,
  linux_fx_version: str = None,
  local_mysql_enabled: typing.Union[bool, IResolvable] = None,
  managed_pipeline_mode: str = None,
  min_tls_version: str = None,
  number_of_workers: typing.Union[int, float] = None,
  php_version: str = None,
  python_version: str = None,
  remote_debugging_enabled: typing.Union[bool, IResolvable] = None,
  remote_debugging_version: str = None,
  scm_ip_restriction: typing.Union[IResolvable, typing.List[AppServiceSiteConfigScmIpRestriction]] = None,
  scm_type: str = None,
  scm_use_main_ip_restriction: typing.Union[bool, IResolvable] = None,
  use32_bit_worker_process: typing.Union[bool, IResolvable] = None,
  vnet_route_all_enabled: typing.Union[bool, IResolvable] = None,
  websockets_enabled: typing.Union[bool, IResolvable] = None,
  windows_fx_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.acrUseManagedIdentityCredentials">acr_use_managed_identity_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#acr_use_managed_identity_credentials AppService#acr_use_managed_identity_credentials}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.acrUserManagedIdentityClientId">acr_user_managed_identity_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#acr_user_managed_identity_client_id AppService#acr_user_managed_identity_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.alwaysOn">always_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#always_on AppService#always_on}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.appCommandLine">app_command_line</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#app_command_line AppService#app_command_line}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.autoSwapSlotName">auto_swap_slot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#auto_swap_slot_name AppService#auto_swap_slot_name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors">AppServiceSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.defaultDocuments">default_documents</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#default_documents AppService#default_documents}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.dotnetFrameworkVersion">dotnet_framework_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#dotnet_framework_version AppService#dotnet_framework_version}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.ftpsState">ftps_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#ftps_state AppService#ftps_state}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#health_check_path AppService#health_check_path}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.http2Enabled">http2_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#http2_enabled AppService#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.ipRestriction">ip_restriction</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction">AppServiceSiteConfigIpRestriction</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#ip_restriction AppService#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.javaContainer">java_container</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#java_container AppService#java_container}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.javaContainerVersion">java_container_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#java_container_version AppService#java_container_version}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.javaVersion">java_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#java_version AppService#java_version}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.linuxFxVersion">linux_fx_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#linux_fx_version AppService#linux_fx_version}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.localMysqlEnabled">local_mysql_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#local_mysql_enabled AppService#local_mysql_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.managedPipelineMode">managed_pipeline_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#managed_pipeline_mode AppService#managed_pipeline_mode}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#min_tls_version AppService#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#number_of_workers AppService#number_of_workers}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.phpVersion">php_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#php_version AppService#php_version}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.pythonVersion">python_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#python_version AppService#python_version}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.remoteDebuggingEnabled">remote_debugging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#remote_debugging_enabled AppService#remote_debugging_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.remoteDebuggingVersion">remote_debugging_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#remote_debugging_version AppService#remote_debugging_version}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.scmIpRestriction">scm_ip_restriction</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction">AppServiceSiteConfigScmIpRestriction</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#scm_ip_restriction AppService#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.scmType">scm_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#scm_type AppService#scm_type}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.scmUseMainIpRestriction">scm_use_main_ip_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#scm_use_main_ip_restriction AppService#scm_use_main_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.use32BitWorkerProcess">use32_bit_worker_process</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#use_32_bit_worker_process AppService#use_32_bit_worker_process}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.vnetRouteAllEnabled">vnet_route_all_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#vnet_route_all_enabled AppService#vnet_route_all_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.websocketsEnabled">websockets_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#websockets_enabled AppService#websockets_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.windowsFxVersion">windows_fx_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#windows_fx_version AppService#windows_fx_version}. |

---

##### `acr_use_managed_identity_credentials`<sup>Optional</sup> <a name="acr_use_managed_identity_credentials" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.acrUseManagedIdentityCredentials"></a>

```python
acr_use_managed_identity_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#acr_use_managed_identity_credentials AppService#acr_use_managed_identity_credentials}.

---

##### `acr_user_managed_identity_client_id`<sup>Optional</sup> <a name="acr_user_managed_identity_client_id" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.acrUserManagedIdentityClientId"></a>

```python
acr_user_managed_identity_client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#acr_user_managed_identity_client_id AppService#acr_user_managed_identity_client_id}.

---

##### `always_on`<sup>Optional</sup> <a name="always_on" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.alwaysOn"></a>

```python
always_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#always_on AppService#always_on}.

---

##### `app_command_line`<sup>Optional</sup> <a name="app_command_line" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.appCommandLine"></a>

```python
app_command_line: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#app_command_line AppService#app_command_line}.

---

##### `auto_swap_slot_name`<sup>Optional</sup> <a name="auto_swap_slot_name" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.autoSwapSlotName"></a>

```python
auto_swap_slot_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#auto_swap_slot_name AppService#auto_swap_slot_name}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.cors"></a>

```python
cors: AppServiceSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors">AppServiceSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#cors AppService#cors}

---

##### `default_documents`<sup>Optional</sup> <a name="default_documents" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.defaultDocuments"></a>

```python
default_documents: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#default_documents AppService#default_documents}.

---

##### `dotnet_framework_version`<sup>Optional</sup> <a name="dotnet_framework_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.dotnetFrameworkVersion"></a>

```python
dotnet_framework_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#dotnet_framework_version AppService#dotnet_framework_version}.

---

##### `ftps_state`<sup>Optional</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.ftpsState"></a>

```python
ftps_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#ftps_state AppService#ftps_state}.

---

##### `health_check_path`<sup>Optional</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#health_check_path AppService#health_check_path}.

---

##### `http2_enabled`<sup>Optional</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.http2Enabled"></a>

```python
http2_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#http2_enabled AppService#http2_enabled}.

---

##### `ip_restriction`<sup>Optional</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.ipRestriction"></a>

```python
ip_restriction: typing.Union[IResolvable, typing.List[AppServiceSiteConfigIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction">AppServiceSiteConfigIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#ip_restriction AppService#ip_restriction}.

---

##### `java_container`<sup>Optional</sup> <a name="java_container" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.javaContainer"></a>

```python
java_container: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#java_container AppService#java_container}.

---

##### `java_container_version`<sup>Optional</sup> <a name="java_container_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.javaContainerVersion"></a>

```python
java_container_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#java_container_version AppService#java_container_version}.

---

##### `java_version`<sup>Optional</sup> <a name="java_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.javaVersion"></a>

```python
java_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#java_version AppService#java_version}.

---

##### `linux_fx_version`<sup>Optional</sup> <a name="linux_fx_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.linuxFxVersion"></a>

```python
linux_fx_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#linux_fx_version AppService#linux_fx_version}.

---

##### `local_mysql_enabled`<sup>Optional</sup> <a name="local_mysql_enabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.localMysqlEnabled"></a>

```python
local_mysql_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#local_mysql_enabled AppService#local_mysql_enabled}.

---

##### `managed_pipeline_mode`<sup>Optional</sup> <a name="managed_pipeline_mode" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.managedPipelineMode"></a>

```python
managed_pipeline_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#managed_pipeline_mode AppService#managed_pipeline_mode}.

---

##### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#min_tls_version AppService#min_tls_version}.

---

##### `number_of_workers`<sup>Optional</sup> <a name="number_of_workers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.numberOfWorkers"></a>

```python
number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#number_of_workers AppService#number_of_workers}.

---

##### `php_version`<sup>Optional</sup> <a name="php_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.phpVersion"></a>

```python
php_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#php_version AppService#php_version}.

---

##### `python_version`<sup>Optional</sup> <a name="python_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.pythonVersion"></a>

```python
python_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#python_version AppService#python_version}.

---

##### `remote_debugging_enabled`<sup>Optional</sup> <a name="remote_debugging_enabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.remoteDebuggingEnabled"></a>

```python
remote_debugging_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#remote_debugging_enabled AppService#remote_debugging_enabled}.

---

##### `remote_debugging_version`<sup>Optional</sup> <a name="remote_debugging_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.remoteDebuggingVersion"></a>

```python
remote_debugging_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#remote_debugging_version AppService#remote_debugging_version}.

---

##### `scm_ip_restriction`<sup>Optional</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.scmIpRestriction"></a>

```python
scm_ip_restriction: typing.Union[IResolvable, typing.List[AppServiceSiteConfigScmIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction">AppServiceSiteConfigScmIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#scm_ip_restriction AppService#scm_ip_restriction}.

---

##### `scm_type`<sup>Optional</sup> <a name="scm_type" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.scmType"></a>

```python
scm_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#scm_type AppService#scm_type}.

---

##### `scm_use_main_ip_restriction`<sup>Optional</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.scmUseMainIpRestriction"></a>

```python
scm_use_main_ip_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#scm_use_main_ip_restriction AppService#scm_use_main_ip_restriction}.

---

##### `use32_bit_worker_process`<sup>Optional</sup> <a name="use32_bit_worker_process" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.use32BitWorkerProcess"></a>

```python
use32_bit_worker_process: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#use_32_bit_worker_process AppService#use_32_bit_worker_process}.

---

##### `vnet_route_all_enabled`<sup>Optional</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.vnetRouteAllEnabled"></a>

```python
vnet_route_all_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#vnet_route_all_enabled AppService#vnet_route_all_enabled}.

---

##### `websockets_enabled`<sup>Optional</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.websocketsEnabled"></a>

```python
websockets_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#websockets_enabled AppService#websockets_enabled}.

---

##### `windows_fx_version`<sup>Optional</sup> <a name="windows_fx_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfig.property.windowsFxVersion"></a>

```python
windows_fx_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#windows_fx_version AppService#windows_fx_version}.

---

### AppServiceSiteConfigCors <a name="AppServiceSiteConfigCors" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSiteConfigCors(
  allowed_origins: typing.List[str],
  support_credentials: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#allowed_origins AppService#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors.property.supportCredentials">support_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#support_credentials AppService#support_credentials}. |

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#allowed_origins AppService#allowed_origins}.

---

##### `support_credentials`<sup>Optional</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors.property.supportCredentials"></a>

```python
support_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#support_credentials AppService#support_credentials}.

---

### AppServiceSiteConfigIpRestriction <a name="AppServiceSiteConfigIpRestriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSiteConfigIpRestriction(
  action: str = None,
  headers: typing.Union[IResolvable, typing.List[AppServiceSiteConfigIpRestrictionHeaders]] = None,
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
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#action AppService#action}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders">AppServiceSiteConfigIpRestrictionHeaders</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#headers AppService#headers}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#ip_address AppService#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#name AppService#name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#priority AppService#priority}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.serviceTag">service_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#service_tag AppService#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#virtual_network_subnet_id AppService#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#action AppService#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[AppServiceSiteConfigIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders">AppServiceSiteConfigIpRestrictionHeaders</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#headers AppService#headers}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#ip_address AppService#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#name AppService#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#priority AppService#priority}.

---

##### `service_tag`<sup>Optional</sup> <a name="service_tag" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#service_tag AppService#service_tag}.

---

##### `virtual_network_subnet_id`<sup>Optional</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#virtual_network_subnet_id AppService#virtual_network_subnet_id}.

---

### AppServiceSiteConfigIpRestrictionHeaders <a name="AppServiceSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSiteConfigIpRestrictionHeaders(
  x_azure_fdid: typing.List[str] = None,
  x_fd_health_probe: typing.List[str] = None,
  x_forwarded_for: typing.List[str] = None,
  x_forwarded_host: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#x_azure_fdid AppService#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#x_fd_health_probe AppService#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#x_forwarded_for AppService#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#x_forwarded_host AppService#x_forwarded_host}. |

---

##### `x_azure_fdid`<sup>Optional</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#x_azure_fdid AppService#x_azure_fdid}.

---

##### `x_fd_health_probe`<sup>Optional</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#x_fd_health_probe AppService#x_fd_health_probe}.

---

##### `x_forwarded_for`<sup>Optional</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#x_forwarded_for AppService#x_forwarded_for}.

---

##### `x_forwarded_host`<sup>Optional</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#x_forwarded_host AppService#x_forwarded_host}.

---

### AppServiceSiteConfigScmIpRestriction <a name="AppServiceSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSiteConfigScmIpRestriction(
  action: str = None,
  headers: typing.Union[IResolvable, typing.List[AppServiceSiteConfigScmIpRestrictionHeaders]] = None,
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
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#action AppService#action}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders">AppServiceSiteConfigScmIpRestrictionHeaders</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#headers AppService#headers}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#ip_address AppService#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#name AppService#name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#priority AppService#priority}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.serviceTag">service_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#service_tag AppService#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#virtual_network_subnet_id AppService#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#action AppService#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[AppServiceSiteConfigScmIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders">AppServiceSiteConfigScmIpRestrictionHeaders</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#headers AppService#headers}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#ip_address AppService#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#name AppService#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#priority AppService#priority}.

---

##### `service_tag`<sup>Optional</sup> <a name="service_tag" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#service_tag AppService#service_tag}.

---

##### `virtual_network_subnet_id`<sup>Optional</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#virtual_network_subnet_id AppService#virtual_network_subnet_id}.

---

### AppServiceSiteConfigScmIpRestrictionHeaders <a name="AppServiceSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSiteConfigScmIpRestrictionHeaders(
  x_azure_fdid: typing.List[str] = None,
  x_fd_health_probe: typing.List[str] = None,
  x_forwarded_for: typing.List[str] = None,
  x_forwarded_host: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#x_azure_fdid AppService#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#x_fd_health_probe AppService#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#x_forwarded_for AppService#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#x_forwarded_host AppService#x_forwarded_host}. |

---

##### `x_azure_fdid`<sup>Optional</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#x_azure_fdid AppService#x_azure_fdid}.

---

##### `x_fd_health_probe`<sup>Optional</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#x_fd_health_probe AppService#x_fd_health_probe}.

---

##### `x_forwarded_for`<sup>Optional</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#x_forwarded_for AppService#x_forwarded_for}.

---

##### `x_forwarded_host`<sup>Optional</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#x_forwarded_host AppService#x_forwarded_host}.

---

### AppServiceSiteCredential <a name="AppServiceSiteCredential" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSiteCredential()
```


### AppServiceSourceControl <a name="AppServiceSourceControl" id="@cdktf/provider-azurerm.appService.AppServiceSourceControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceSourceControl.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSourceControl(
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
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.branch">branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#branch AppService#branch}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.manualIntegration">manual_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#manual_integration AppService#manual_integration}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.repoUrl">repo_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#repo_url AppService#repo_url}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.rollbackEnabled">rollback_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#rollback_enabled AppService#rollback_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.useMercurial">use_mercurial</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#use_mercurial AppService#use_mercurial}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.branch"></a>

```python
branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#branch AppService#branch}.

---

##### `manual_integration`<sup>Optional</sup> <a name="manual_integration" id="@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.manualIntegration"></a>

```python
manual_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#manual_integration AppService#manual_integration}.

---

##### `repo_url`<sup>Optional</sup> <a name="repo_url" id="@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.repoUrl"></a>

```python
repo_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#repo_url AppService#repo_url}.

---

##### `rollback_enabled`<sup>Optional</sup> <a name="rollback_enabled" id="@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.rollbackEnabled"></a>

```python
rollback_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#rollback_enabled AppService#rollback_enabled}.

---

##### `use_mercurial`<sup>Optional</sup> <a name="use_mercurial" id="@cdktf/provider-azurerm.appService.AppServiceSourceControl.property.useMercurial"></a>

```python
use_mercurial: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#use_mercurial AppService#use_mercurial}.

---

### AppServiceStorageAccount <a name="AppServiceStorageAccount" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceStorageAccount(
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
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.accessKey">access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#access_key AppService#access_key}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#account_name AppService#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#name AppService#name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.shareName">share_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#share_name AppService#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#type AppService#type}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.mountPath">mount_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#mount_path AppService#mount_path}. |

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#access_key AppService#access_key}.

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#account_name AppService#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#name AppService#name}.

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#share_name AppService#share_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#type AppService#type}.

---

##### `mount_path`<sup>Optional</sup> <a name="mount_path" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccount.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#mount_path AppService#mount_path}.

---

### AppServiceTimeouts <a name="AppServiceTimeouts" id="@cdktf/provider-azurerm.appService.AppServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appService.AppServiceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#create AppService#create}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#delete AppService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#read AppService#read}. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#update AppService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appService.AppServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#create AppService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appService.AppServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#delete AppService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appService.AppServiceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#read AppService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appService.AppServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#update AppService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceAuthSettingsActiveDirectoryOutputReference <a name="AppServiceAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceAuthSettingsActiveDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences">reset_allowed_audiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_audiences` <a name="reset_allowed_audiences" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences"></a>

```python
def reset_allowed_audiences() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput">allowed_audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory">AppServiceAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_audiences_input`<sup>Optional</sup> <a name="allowed_audiences_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput"></a>

```python
allowed_audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `allowed_audiences`<sup>Required</sup> <a name="allowed_audiences" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```python
allowed_audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory">AppServiceAuthSettingsActiveDirectory</a>

---


### AppServiceAuthSettingsFacebookOutputReference <a name="AppServiceAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceAuthSettingsFacebookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.appSecretInput">app_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.appSecret">app_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook">AppServiceAuthSettingsFacebook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `app_secret_input`<sup>Optional</sup> <a name="app_secret_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.appSecretInput"></a>

```python
app_secret_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `app_secret`<sup>Required</sup> <a name="app_secret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.appSecret"></a>

```python
app_secret: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook">AppServiceAuthSettingsFacebook</a>

---


### AppServiceAuthSettingsGoogleOutputReference <a name="AppServiceAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceAuthSettingsGoogleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle">AppServiceAuthSettingsGoogle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle">AppServiceAuthSettingsGoogle</a>

---


### AppServiceAuthSettingsMicrosoftOutputReference <a name="AppServiceAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceAuthSettingsMicrosoftOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft">AppServiceAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft">AppServiceAuthSettingsMicrosoft</a>

---


### AppServiceAuthSettingsOutputReference <a name="AppServiceAuthSettingsOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceAuthSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putActiveDirectory">put_active_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putFacebook">put_facebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putGoogle">put_google</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putMicrosoft">put_microsoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putTwitter">put_twitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetActiveDirectory">reset_active_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetAdditionalLoginParams">reset_additional_login_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetAllowedExternalRedirectUrls">reset_allowed_external_redirect_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetDefaultProvider">reset_default_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetFacebook">reset_facebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetGoogle">reset_google</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetMicrosoft">reset_microsoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetRuntimeVersion">reset_runtime_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetTokenRefreshExtensionHours">reset_token_refresh_extension_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetTokenStoreEnabled">reset_token_store_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetTwitter">reset_twitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetUnauthenticatedClientAction">reset_unauthenticated_client_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_active_directory` <a name="put_active_directory" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putActiveDirectory"></a>

```python
def put_active_directory(
  client_id: str,
  allowed_audiences: typing.List[str] = None,
  client_secret: str = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putActiveDirectory.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_id AppService#client_id}.

---

###### `allowed_audiences`<sup>Optional</sup> <a name="allowed_audiences" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putActiveDirectory.parameter.allowedAudiences"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#allowed_audiences AppService#allowed_audiences}.

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putActiveDirectory.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_secret AppService#client_secret}.

---

##### `put_facebook` <a name="put_facebook" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putFacebook"></a>

```python
def put_facebook(
  app_id: str,
  app_secret: str,
  oauth_scopes: typing.List[str] = None
) -> None
```

###### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putFacebook.parameter.appId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#app_id AppService#app_id}.

---

###### `app_secret`<sup>Required</sup> <a name="app_secret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putFacebook.parameter.appSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#app_secret AppService#app_secret}.

---

###### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putFacebook.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#oauth_scopes AppService#oauth_scopes}.

---

##### `put_google` <a name="put_google" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putGoogle"></a>

```python
def put_google(
  client_id: str,
  client_secret: str,
  oauth_scopes: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putGoogle.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_id AppService#client_id}.

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putGoogle.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_secret AppService#client_secret}.

---

###### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putGoogle.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#oauth_scopes AppService#oauth_scopes}.

---

##### `put_microsoft` <a name="put_microsoft" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putMicrosoft"></a>

```python
def put_microsoft(
  client_id: str,
  client_secret: str,
  oauth_scopes: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putMicrosoft.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_id AppService#client_id}.

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putMicrosoft.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#client_secret AppService#client_secret}.

---

###### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putMicrosoft.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#oauth_scopes AppService#oauth_scopes}.

---

##### `put_twitter` <a name="put_twitter" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putTwitter"></a>

```python
def put_twitter(
  consumer_key: str,
  consumer_secret: str
) -> None
```

###### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putTwitter.parameter.consumerKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#consumer_key AppService#consumer_key}.

---

###### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.putTwitter.parameter.consumerSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#consumer_secret AppService#consumer_secret}.

---

##### `reset_active_directory` <a name="reset_active_directory" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetActiveDirectory"></a>

```python
def reset_active_directory() -> None
```

##### `reset_additional_login_params` <a name="reset_additional_login_params" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetAdditionalLoginParams"></a>

```python
def reset_additional_login_params() -> None
```

##### `reset_allowed_external_redirect_urls` <a name="reset_allowed_external_redirect_urls" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetAllowedExternalRedirectUrls"></a>

```python
def reset_allowed_external_redirect_urls() -> None
```

##### `reset_default_provider` <a name="reset_default_provider" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetDefaultProvider"></a>

```python
def reset_default_provider() -> None
```

##### `reset_facebook` <a name="reset_facebook" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetFacebook"></a>

```python
def reset_facebook() -> None
```

##### `reset_google` <a name="reset_google" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetGoogle"></a>

```python
def reset_google() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_microsoft` <a name="reset_microsoft" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetMicrosoft"></a>

```python
def reset_microsoft() -> None
```

##### `reset_runtime_version` <a name="reset_runtime_version" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetRuntimeVersion"></a>

```python
def reset_runtime_version() -> None
```

##### `reset_token_refresh_extension_hours` <a name="reset_token_refresh_extension_hours" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetTokenRefreshExtensionHours"></a>

```python
def reset_token_refresh_extension_hours() -> None
```

##### `reset_token_store_enabled` <a name="reset_token_store_enabled" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetTokenStoreEnabled"></a>

```python
def reset_token_store_enabled() -> None
```

##### `reset_twitter` <a name="reset_twitter" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetTwitter"></a>

```python
def reset_twitter() -> None
```

##### `reset_unauthenticated_client_action` <a name="reset_unauthenticated_client_action" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.resetUnauthenticatedClientAction"></a>

```python
def reset_unauthenticated_client_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.activeDirectory">active_directory</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference">AppServiceAuthSettingsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference">AppServiceAuthSettingsFacebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference">AppServiceAuthSettingsGoogleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference">AppServiceAuthSettingsMicrosoftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference">AppServiceAuthSettingsTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.activeDirectoryInput">active_directory_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory">AppServiceAuthSettingsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.additionalLoginParamsInput">additional_login_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput">allowed_external_redirect_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.defaultProviderInput">default_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.facebookInput">facebook_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook">AppServiceAuthSettingsFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.googleInput">google_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle">AppServiceAuthSettingsGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.microsoftInput">microsoft_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft">AppServiceAuthSettingsMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.runtimeVersionInput">runtime_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput">token_refresh_extension_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.tokenStoreEnabledInput">token_store_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.twitterInput">twitter_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter">AppServiceAuthSettingsTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.unauthenticatedClientActionInput">unauthenticated_client_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.additionalLoginParams">additional_login_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.allowedExternalRedirectUrls">allowed_external_redirect_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.defaultProvider">default_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.tokenRefreshExtensionHours">token_refresh_extension_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.tokenStoreEnabled">token_store_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.unauthenticatedClientAction">unauthenticated_client_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings">AppServiceAuthSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_directory`<sup>Required</sup> <a name="active_directory" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.activeDirectory"></a>

```python
active_directory: AppServiceAuthSettingsActiveDirectoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectoryOutputReference">AppServiceAuthSettingsActiveDirectoryOutputReference</a>

---

##### `facebook`<sup>Required</sup> <a name="facebook" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.facebook"></a>

```python
facebook: AppServiceAuthSettingsFacebookOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebookOutputReference">AppServiceAuthSettingsFacebookOutputReference</a>

---

##### `google`<sup>Required</sup> <a name="google" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.google"></a>

```python
google: AppServiceAuthSettingsGoogleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogleOutputReference">AppServiceAuthSettingsGoogleOutputReference</a>

---

##### `microsoft`<sup>Required</sup> <a name="microsoft" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.microsoft"></a>

```python
microsoft: AppServiceAuthSettingsMicrosoftOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoftOutputReference">AppServiceAuthSettingsMicrosoftOutputReference</a>

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.twitter"></a>

```python
twitter: AppServiceAuthSettingsTwitterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference">AppServiceAuthSettingsTwitterOutputReference</a>

---

##### `active_directory_input`<sup>Optional</sup> <a name="active_directory_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.activeDirectoryInput"></a>

```python
active_directory_input: AppServiceAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsActiveDirectory">AppServiceAuthSettingsActiveDirectory</a>

---

##### `additional_login_params_input`<sup>Optional</sup> <a name="additional_login_params_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.additionalLoginParamsInput"></a>

```python
additional_login_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allowed_external_redirect_urls_input`<sup>Optional</sup> <a name="allowed_external_redirect_urls_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput"></a>

```python
allowed_external_redirect_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_provider_input`<sup>Optional</sup> <a name="default_provider_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.defaultProviderInput"></a>

```python
default_provider_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `facebook_input`<sup>Optional</sup> <a name="facebook_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.facebookInput"></a>

```python
facebook_input: AppServiceAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsFacebook">AppServiceAuthSettingsFacebook</a>

---

##### `google_input`<sup>Optional</sup> <a name="google_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.googleInput"></a>

```python
google_input: AppServiceAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsGoogle">AppServiceAuthSettingsGoogle</a>

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `microsoft_input`<sup>Optional</sup> <a name="microsoft_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.microsoftInput"></a>

```python
microsoft_input: AppServiceAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsMicrosoft">AppServiceAuthSettingsMicrosoft</a>

---

##### `runtime_version_input`<sup>Optional</sup> <a name="runtime_version_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.runtimeVersionInput"></a>

```python
runtime_version_input: str
```

- *Type:* str

---

##### `token_refresh_extension_hours_input`<sup>Optional</sup> <a name="token_refresh_extension_hours_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput"></a>

```python
token_refresh_extension_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_store_enabled_input`<sup>Optional</sup> <a name="token_store_enabled_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.tokenStoreEnabledInput"></a>

```python
token_store_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `twitter_input`<sup>Optional</sup> <a name="twitter_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.twitterInput"></a>

```python
twitter_input: AppServiceAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter">AppServiceAuthSettingsTwitter</a>

---

##### `unauthenticated_client_action_input`<sup>Optional</sup> <a name="unauthenticated_client_action_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.unauthenticatedClientActionInput"></a>

```python
unauthenticated_client_action_input: str
```

- *Type:* str

---

##### `additional_login_params`<sup>Required</sup> <a name="additional_login_params" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.additionalLoginParams"></a>

```python
additional_login_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allowed_external_redirect_urls`<sup>Required</sup> <a name="allowed_external_redirect_urls" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```python
allowed_external_redirect_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_provider`<sup>Required</sup> <a name="default_provider" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.defaultProvider"></a>

```python
default_provider: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

---

##### `token_refresh_extension_hours`<sup>Required</sup> <a name="token_refresh_extension_hours" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```python
token_refresh_extension_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_store_enabled`<sup>Required</sup> <a name="token_store_enabled" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```python
token_store_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unauthenticated_client_action`<sup>Required</sup> <a name="unauthenticated_client_action" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```python
unauthenticated_client_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettings">AppServiceAuthSettings</a>

---


### AppServiceAuthSettingsTwitterOutputReference <a name="AppServiceAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceAuthSettingsTwitterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.consumerKeyInput">consumer_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.consumerSecretInput">consumer_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.consumerKey">consumer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter">AppServiceAuthSettingsTwitter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_key_input`<sup>Optional</sup> <a name="consumer_key_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.consumerKeyInput"></a>

```python
consumer_key_input: str
```

- *Type:* str

---

##### `consumer_secret_input`<sup>Optional</sup> <a name="consumer_secret_input" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.consumerSecretInput"></a>

```python
consumer_secret_input: str
```

- *Type:* str

---

##### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

---

##### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitterOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceAuthSettingsTwitter">AppServiceAuthSettingsTwitter</a>

---


### AppServiceBackupOutputReference <a name="AppServiceBackupOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceBackupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.putSchedule"></a>

```python
def put_schedule(
  frequency_interval: typing.Union[int, float],
  frequency_unit: str,
  keep_at_least_one_backup: typing.Union[bool, IResolvable] = None,
  retention_period_in_days: typing.Union[int, float] = None,
  start_time: str = None
) -> None
```

###### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.putSchedule.parameter.frequencyInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#frequency_interval AppService#frequency_interval}.

---

###### `frequency_unit`<sup>Required</sup> <a name="frequency_unit" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.putSchedule.parameter.frequencyUnit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#frequency_unit AppService#frequency_unit}.

---

###### `keep_at_least_one_backup`<sup>Optional</sup> <a name="keep_at_least_one_backup" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.putSchedule.parameter.keepAtLeastOneBackup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#keep_at_least_one_backup AppService#keep_at_least_one_backup}.

---

###### `retention_period_in_days`<sup>Optional</sup> <a name="retention_period_in_days" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.putSchedule.parameter.retentionPeriodInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#retention_period_in_days AppService#retention_period_in_days}.

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.putSchedule.parameter.startTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#start_time AppService#start_time}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference">AppServiceBackupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.scheduleInput">schedule_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule">AppServiceBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.storageAccountUrlInput">storage_account_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.storageAccountUrl">storage_account_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackup">AppServiceBackup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.schedule"></a>

```python
schedule: AppServiceBackupScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference">AppServiceBackupScheduleOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.scheduleInput"></a>

```python
schedule_input: AppServiceBackupSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule">AppServiceBackupSchedule</a>

---

##### `storage_account_url_input`<sup>Optional</sup> <a name="storage_account_url_input" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.storageAccountUrlInput"></a>

```python
storage_account_url_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_account_url`<sup>Required</sup> <a name="storage_account_url" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.storageAccountUrl"></a>

```python
storage_account_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceBackupOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackup">AppServiceBackup</a>

---


### AppServiceBackupScheduleOutputReference <a name="AppServiceBackupScheduleOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceBackupScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.resetKeepAtLeastOneBackup">reset_keep_at_least_one_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.resetRetentionPeriodInDays">reset_retention_period_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_keep_at_least_one_backup` <a name="reset_keep_at_least_one_backup" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.resetKeepAtLeastOneBackup"></a>

```python
def reset_keep_at_least_one_backup() -> None
```

##### `reset_retention_period_in_days` <a name="reset_retention_period_in_days" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.resetRetentionPeriodInDays"></a>

```python
def reset_retention_period_in_days() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.frequencyIntervalInput">frequency_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.frequencyUnitInput">frequency_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.keepAtLeastOneBackupInput">keep_at_least_one_backup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.retentionPeriodInDaysInput">retention_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.frequencyInterval">frequency_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.frequencyUnit">frequency_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.keepAtLeastOneBackup">keep_at_least_one_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule">AppServiceBackupSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frequency_interval_input`<sup>Optional</sup> <a name="frequency_interval_input" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.frequencyIntervalInput"></a>

```python
frequency_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frequency_unit_input`<sup>Optional</sup> <a name="frequency_unit_input" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.frequencyUnitInput"></a>

```python
frequency_unit_input: str
```

- *Type:* str

---

##### `keep_at_least_one_backup_input`<sup>Optional</sup> <a name="keep_at_least_one_backup_input" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.keepAtLeastOneBackupInput"></a>

```python
keep_at_least_one_backup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_period_in_days_input`<sup>Optional</sup> <a name="retention_period_in_days_input" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.retentionPeriodInDaysInput"></a>

```python
retention_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `frequency_interval`<sup>Required</sup> <a name="frequency_interval" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.frequencyInterval"></a>

```python
frequency_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frequency_unit`<sup>Required</sup> <a name="frequency_unit" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.frequencyUnit"></a>

```python
frequency_unit: str
```

- *Type:* str

---

##### `keep_at_least_one_backup`<sup>Required</sup> <a name="keep_at_least_one_backup" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.keepAtLeastOneBackup"></a>

```python
keep_at_least_one_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_period_in_days`<sup>Required</sup> <a name="retention_period_in_days" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceBackupScheduleOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceBackupSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceBackupSchedule">AppServiceBackupSchedule</a>

---


### AppServiceConnectionStringList <a name="AppServiceConnectionStringList" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceConnectionStringList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppServiceConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppServiceConnectionString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a>]]

---


### AppServiceConnectionStringOutputReference <a name="AppServiceConnectionStringOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceConnectionStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceConnectionStringOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppServiceConnectionString]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appService.AppServiceConnectionString">AppServiceConnectionString</a>]

---


### AppServiceIdentityOutputReference <a name="AppServiceIdentityOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceIdentity">AppServiceIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceIdentityOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceIdentity">AppServiceIdentity</a>

---


### AppServiceLogsApplicationLogsAzureBlobStorageOutputReference <a name="AppServiceLogsApplicationLogsAzureBlobStorageOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.levelInput">level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDaysInput">retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrlInput">sas_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrl">sas_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage">AppServiceLogsApplicationLogsAzureBlobStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.levelInput"></a>

```python
level_input: str
```

- *Type:* str

---

##### `retention_in_days_input`<sup>Optional</sup> <a name="retention_in_days_input" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDaysInput"></a>

```python
retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sas_url_input`<sup>Optional</sup> <a name="sas_url_input" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrlInput"></a>

```python
sas_url_input: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sas_url`<sup>Required</sup> <a name="sas_url" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrl"></a>

```python
sas_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceLogsApplicationLogsAzureBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage">AppServiceLogsApplicationLogsAzureBlobStorage</a>

---


### AppServiceLogsApplicationLogsOutputReference <a name="AppServiceLogsApplicationLogsOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceLogsApplicationLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.putAzureBlobStorage">put_azure_blob_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.resetAzureBlobStorage">reset_azure_blob_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.resetFileSystemLevel">reset_file_system_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_azure_blob_storage` <a name="put_azure_blob_storage" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.putAzureBlobStorage"></a>

```python
def put_azure_blob_storage(
  level: str,
  retention_in_days: typing.Union[int, float],
  sas_url: str
) -> None
```

###### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.putAzureBlobStorage.parameter.level"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#level AppService#level}.

---

###### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.putAzureBlobStorage.parameter.retentionInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#retention_in_days AppService#retention_in_days}.

---

###### `sas_url`<sup>Required</sup> <a name="sas_url" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.putAzureBlobStorage.parameter.sasUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#sas_url AppService#sas_url}.

---

##### `reset_azure_blob_storage` <a name="reset_azure_blob_storage" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.resetAzureBlobStorage"></a>

```python
def reset_azure_blob_storage() -> None
```

##### `reset_file_system_level` <a name="reset_file_system_level" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.resetFileSystemLevel"></a>

```python
def reset_file_system_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.azureBlobStorage">azure_blob_storage</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference">AppServiceLogsApplicationLogsAzureBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.azureBlobStorageInput">azure_blob_storage_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage">AppServiceLogsApplicationLogsAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.fileSystemLevelInput">file_system_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.fileSystemLevel">file_system_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs">AppServiceLogsApplicationLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_blob_storage`<sup>Required</sup> <a name="azure_blob_storage" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.azureBlobStorage"></a>

```python
azure_blob_storage: AppServiceLogsApplicationLogsAzureBlobStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorageOutputReference">AppServiceLogsApplicationLogsAzureBlobStorageOutputReference</a>

---

##### `azure_blob_storage_input`<sup>Optional</sup> <a name="azure_blob_storage_input" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.azureBlobStorageInput"></a>

```python
azure_blob_storage_input: AppServiceLogsApplicationLogsAzureBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage">AppServiceLogsApplicationLogsAzureBlobStorage</a>

---

##### `file_system_level_input`<sup>Optional</sup> <a name="file_system_level_input" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.fileSystemLevelInput"></a>

```python
file_system_level_input: str
```

- *Type:* str

---

##### `file_system_level`<sup>Required</sup> <a name="file_system_level" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.fileSystemLevel"></a>

```python
file_system_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceLogsApplicationLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs">AppServiceLogsApplicationLogs</a>

---


### AppServiceLogsHttpLogsAzureBlobStorageOutputReference <a name="AppServiceLogsHttpLogsAzureBlobStorageOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDaysInput">retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrlInput">sas_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrl">sas_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage">AppServiceLogsHttpLogsAzureBlobStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_in_days_input`<sup>Optional</sup> <a name="retention_in_days_input" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDaysInput"></a>

```python
retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sas_url_input`<sup>Optional</sup> <a name="sas_url_input" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrlInput"></a>

```python
sas_url_input: str
```

- *Type:* str

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sas_url`<sup>Required</sup> <a name="sas_url" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrl"></a>

```python
sas_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceLogsHttpLogsAzureBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage">AppServiceLogsHttpLogsAzureBlobStorage</a>

---


### AppServiceLogsHttpLogsFileSystemOutputReference <a name="AppServiceLogsHttpLogsFileSystemOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceLogsHttpLogsFileSystemOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.retentionInDaysInput">retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.retentionInMbInput">retention_in_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.retentionInMb">retention_in_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem">AppServiceLogsHttpLogsFileSystem</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_in_days_input`<sup>Optional</sup> <a name="retention_in_days_input" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.retentionInDaysInput"></a>

```python
retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_in_mb_input`<sup>Optional</sup> <a name="retention_in_mb_input" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.retentionInMbInput"></a>

```python
retention_in_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_in_mb`<sup>Required</sup> <a name="retention_in_mb" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.retentionInMb"></a>

```python
retention_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceLogsHttpLogsFileSystem
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem">AppServiceLogsHttpLogsFileSystem</a>

---


### AppServiceLogsHttpLogsOutputReference <a name="AppServiceLogsHttpLogsOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceLogsHttpLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.putAzureBlobStorage">put_azure_blob_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.putFileSystem">put_file_system</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.resetAzureBlobStorage">reset_azure_blob_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.resetFileSystem">reset_file_system</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_azure_blob_storage` <a name="put_azure_blob_storage" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.putAzureBlobStorage"></a>

```python
def put_azure_blob_storage(
  retention_in_days: typing.Union[int, float],
  sas_url: str
) -> None
```

###### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.putAzureBlobStorage.parameter.retentionInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#retention_in_days AppService#retention_in_days}.

---

###### `sas_url`<sup>Required</sup> <a name="sas_url" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.putAzureBlobStorage.parameter.sasUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#sas_url AppService#sas_url}.

---

##### `put_file_system` <a name="put_file_system" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.putFileSystem"></a>

```python
def put_file_system(
  retention_in_days: typing.Union[int, float],
  retention_in_mb: typing.Union[int, float]
) -> None
```

###### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.putFileSystem.parameter.retentionInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#retention_in_days AppService#retention_in_days}.

---

###### `retention_in_mb`<sup>Required</sup> <a name="retention_in_mb" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.putFileSystem.parameter.retentionInMb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#retention_in_mb AppService#retention_in_mb}.

---

##### `reset_azure_blob_storage` <a name="reset_azure_blob_storage" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.resetAzureBlobStorage"></a>

```python
def reset_azure_blob_storage() -> None
```

##### `reset_file_system` <a name="reset_file_system" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.resetFileSystem"></a>

```python
def reset_file_system() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.azureBlobStorage">azure_blob_storage</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference">AppServiceLogsHttpLogsAzureBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.fileSystem">file_system</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference">AppServiceLogsHttpLogsFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.azureBlobStorageInput">azure_blob_storage_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage">AppServiceLogsHttpLogsAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.fileSystemInput">file_system_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem">AppServiceLogsHttpLogsFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs">AppServiceLogsHttpLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_blob_storage`<sup>Required</sup> <a name="azure_blob_storage" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.azureBlobStorage"></a>

```python
azure_blob_storage: AppServiceLogsHttpLogsAzureBlobStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorageOutputReference">AppServiceLogsHttpLogsAzureBlobStorageOutputReference</a>

---

##### `file_system`<sup>Required</sup> <a name="file_system" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.fileSystem"></a>

```python
file_system: AppServiceLogsHttpLogsFileSystemOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystemOutputReference">AppServiceLogsHttpLogsFileSystemOutputReference</a>

---

##### `azure_blob_storage_input`<sup>Optional</sup> <a name="azure_blob_storage_input" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.azureBlobStorageInput"></a>

```python
azure_blob_storage_input: AppServiceLogsHttpLogsAzureBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage">AppServiceLogsHttpLogsAzureBlobStorage</a>

---

##### `file_system_input`<sup>Optional</sup> <a name="file_system_input" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.fileSystemInput"></a>

```python
file_system_input: AppServiceLogsHttpLogsFileSystem
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem">AppServiceLogsHttpLogsFileSystem</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceLogsHttpLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs">AppServiceLogsHttpLogs</a>

---


### AppServiceLogsOutputReference <a name="AppServiceLogsOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.putApplicationLogs">put_application_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.putHttpLogs">put_http_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resetApplicationLogs">reset_application_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resetDetailedErrorMessagesEnabled">reset_detailed_error_messages_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resetFailedRequestTracingEnabled">reset_failed_request_tracing_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resetHttpLogs">reset_http_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_application_logs` <a name="put_application_logs" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.putApplicationLogs"></a>

```python
def put_application_logs(
  azure_blob_storage: AppServiceLogsApplicationLogsAzureBlobStorage = None,
  file_system_level: str = None
) -> None
```

###### `azure_blob_storage`<sup>Optional</sup> <a name="azure_blob_storage" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.putApplicationLogs.parameter.azureBlobStorage"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsAzureBlobStorage">AppServiceLogsApplicationLogsAzureBlobStorage</a>

azure_blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#azure_blob_storage AppService#azure_blob_storage}

---

###### `file_system_level`<sup>Optional</sup> <a name="file_system_level" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.putApplicationLogs.parameter.fileSystemLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#file_system_level AppService#file_system_level}.

---

##### `put_http_logs` <a name="put_http_logs" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.putHttpLogs"></a>

```python
def put_http_logs(
  azure_blob_storage: AppServiceLogsHttpLogsAzureBlobStorage = None,
  file_system: AppServiceLogsHttpLogsFileSystem = None
) -> None
```

###### `azure_blob_storage`<sup>Optional</sup> <a name="azure_blob_storage" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.putHttpLogs.parameter.azureBlobStorage"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsAzureBlobStorage">AppServiceLogsHttpLogsAzureBlobStorage</a>

azure_blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#azure_blob_storage AppService#azure_blob_storage}

---

###### `file_system`<sup>Optional</sup> <a name="file_system" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.putHttpLogs.parameter.fileSystem"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsFileSystem">AppServiceLogsHttpLogsFileSystem</a>

file_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#file_system AppService#file_system}

---

##### `reset_application_logs` <a name="reset_application_logs" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resetApplicationLogs"></a>

```python
def reset_application_logs() -> None
```

##### `reset_detailed_error_messages_enabled` <a name="reset_detailed_error_messages_enabled" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resetDetailedErrorMessagesEnabled"></a>

```python
def reset_detailed_error_messages_enabled() -> None
```

##### `reset_failed_request_tracing_enabled` <a name="reset_failed_request_tracing_enabled" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resetFailedRequestTracingEnabled"></a>

```python
def reset_failed_request_tracing_enabled() -> None
```

##### `reset_http_logs` <a name="reset_http_logs" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.resetHttpLogs"></a>

```python
def reset_http_logs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.applicationLogs">application_logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference">AppServiceLogsApplicationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.httpLogs">http_logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference">AppServiceLogsHttpLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.applicationLogsInput">application_logs_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs">AppServiceLogsApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.detailedErrorMessagesEnabledInput">detailed_error_messages_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.failedRequestTracingEnabledInput">failed_request_tracing_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.httpLogsInput">http_logs_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs">AppServiceLogsHttpLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.detailedErrorMessagesEnabled">detailed_error_messages_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.failedRequestTracingEnabled">failed_request_tracing_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceLogs">AppServiceLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_logs`<sup>Required</sup> <a name="application_logs" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.applicationLogs"></a>

```python
application_logs: AppServiceLogsApplicationLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogsOutputReference">AppServiceLogsApplicationLogsOutputReference</a>

---

##### `http_logs`<sup>Required</sup> <a name="http_logs" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.httpLogs"></a>

```python
http_logs: AppServiceLogsHttpLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogsOutputReference">AppServiceLogsHttpLogsOutputReference</a>

---

##### `application_logs_input`<sup>Optional</sup> <a name="application_logs_input" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.applicationLogsInput"></a>

```python
application_logs_input: AppServiceLogsApplicationLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsApplicationLogs">AppServiceLogsApplicationLogs</a>

---

##### `detailed_error_messages_enabled_input`<sup>Optional</sup> <a name="detailed_error_messages_enabled_input" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.detailedErrorMessagesEnabledInput"></a>

```python
detailed_error_messages_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failed_request_tracing_enabled_input`<sup>Optional</sup> <a name="failed_request_tracing_enabled_input" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.failedRequestTracingEnabledInput"></a>

```python
failed_request_tracing_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_logs_input`<sup>Optional</sup> <a name="http_logs_input" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.httpLogsInput"></a>

```python
http_logs_input: AppServiceLogsHttpLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogsHttpLogs">AppServiceLogsHttpLogs</a>

---

##### `detailed_error_messages_enabled`<sup>Required</sup> <a name="detailed_error_messages_enabled" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.detailedErrorMessagesEnabled"></a>

```python
detailed_error_messages_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failed_request_tracing_enabled`<sup>Required</sup> <a name="failed_request_tracing_enabled" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.failedRequestTracingEnabled"></a>

```python
failed_request_tracing_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceLogsOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceLogs">AppServiceLogs</a>

---


### AppServiceSiteConfigCorsOutputReference <a name="AppServiceSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSiteConfigCorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.resetSupportCredentials">reset_support_credentials</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_support_credentials` <a name="reset_support_credentials" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```python
def reset_support_credentials() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.supportCredentialsInput">support_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.supportCredentials">support_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors">AppServiceSiteConfigCors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `support_credentials_input`<sup>Optional</sup> <a name="support_credentials_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```python
support_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `support_credentials`<sup>Required</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.supportCredentials"></a>

```python
support_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors">AppServiceSiteConfigCors</a>

---


### AppServiceSiteConfigIpRestrictionHeadersList <a name="AppServiceSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSiteConfigIpRestrictionHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppServiceSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders">AppServiceSiteConfigIpRestrictionHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppServiceSiteConfigIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders">AppServiceSiteConfigIpRestrictionHeaders</a>]]

---


### AppServiceSiteConfigIpRestrictionHeadersOutputReference <a name="AppServiceSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">reset_x_azure_fdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">reset_x_fd_health_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">reset_x_forwarded_for</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">reset_x_forwarded_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x_azure_fdid` <a name="reset_x_azure_fdid" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```python
def reset_x_azure_fdid() -> None
```

##### `reset_x_fd_health_probe` <a name="reset_x_fd_health_probe" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```python
def reset_x_fd_health_probe() -> None
```

##### `reset_x_forwarded_for` <a name="reset_x_forwarded_for" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```python
def reset_x_forwarded_for() -> None
```

##### `reset_x_forwarded_host` <a name="reset_x_forwarded_host" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```python
def reset_x_forwarded_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">x_azure_fdid_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">x_fd_health_probe_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">x_forwarded_for_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">x_forwarded_host_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders">AppServiceSiteConfigIpRestrictionHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_azure_fdid_input`<sup>Optional</sup> <a name="x_azure_fdid_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```python
x_azure_fdid_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe_input`<sup>Optional</sup> <a name="x_fd_health_probe_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```python
x_fd_health_probe_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for_input`<sup>Optional</sup> <a name="x_forwarded_for_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```python
x_forwarded_for_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host_input`<sup>Optional</sup> <a name="x_forwarded_host_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```python
x_forwarded_host_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_azure_fdid`<sup>Required</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe`<sup>Required</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for`<sup>Required</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host`<sup>Required</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppServiceSiteConfigIpRestrictionHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders">AppServiceSiteConfigIpRestrictionHeaders</a>]

---


### AppServiceSiteConfigIpRestrictionList <a name="AppServiceSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSiteConfigIpRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppServiceSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction">AppServiceSiteConfigIpRestriction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppServiceSiteConfigIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction">AppServiceSiteConfigIpRestriction</a>]]

---


### AppServiceSiteConfigIpRestrictionOutputReference <a name="AppServiceSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSiteConfigIpRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetServiceTag">reset_service_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">reset_virtual_network_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[AppServiceSiteConfigIpRestrictionHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders">AppServiceSiteConfigIpRestrictionHeaders</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_service_tag` <a name="reset_service_tag" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```python
def reset_service_tag() -> None
```

##### `reset_virtual_network_subnet_id` <a name="reset_virtual_network_subnet_id" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```python
def reset_virtual_network_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList">AppServiceSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders">AppServiceSiteConfigIpRestrictionHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.serviceTagInput">service_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtual_network_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.serviceTag">service_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction">AppServiceSiteConfigIpRestriction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.headers"></a>

```python
headers: AppServiceSiteConfigIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeadersList">AppServiceSiteConfigIpRestrictionHeadersList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[AppServiceSiteConfigIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionHeaders">AppServiceSiteConfigIpRestrictionHeaders</a>]]

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag_input`<sup>Optional</sup> <a name="service_tag_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```python
service_tag_input: str
```

- *Type:* str

---

##### `virtual_network_subnet_id_input`<sup>Optional</sup> <a name="virtual_network_subnet_id_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```python
virtual_network_subnet_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag`<sup>Required</sup> <a name="service_tag" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppServiceSiteConfigIpRestriction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction">AppServiceSiteConfigIpRestriction</a>]

---


### AppServiceSiteConfigOutputReference <a name="AppServiceSiteConfigOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSiteConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.putCors">put_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.putIpRestriction">put_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.putScmIpRestriction">put_scm_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAcrUseManagedIdentityCredentials">reset_acr_use_managed_identity_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAcrUserManagedIdentityClientId">reset_acr_user_managed_identity_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAlwaysOn">reset_always_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAppCommandLine">reset_app_command_line</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAutoSwapSlotName">reset_auto_swap_slot_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetCors">reset_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetDefaultDocuments">reset_default_documents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetDotnetFrameworkVersion">reset_dotnet_framework_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetFtpsState">reset_ftps_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetHealthCheckPath">reset_health_check_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetHttp2Enabled">reset_http2_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetIpRestriction">reset_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetJavaContainer">reset_java_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetJavaContainerVersion">reset_java_container_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetJavaVersion">reset_java_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetLinuxFxVersion">reset_linux_fx_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetLocalMysqlEnabled">reset_local_mysql_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetManagedPipelineMode">reset_managed_pipeline_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetMinTlsVersion">reset_min_tls_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetNumberOfWorkers">reset_number_of_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetPhpVersion">reset_php_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetPythonVersion">reset_python_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetRemoteDebuggingEnabled">reset_remote_debugging_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetRemoteDebuggingVersion">reset_remote_debugging_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetScmIpRestriction">reset_scm_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetScmType">reset_scm_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetScmUseMainIpRestriction">reset_scm_use_main_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetUse32BitWorkerProcess">reset_use32_bit_worker_process</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetVnetRouteAllEnabled">reset_vnet_route_all_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetWebsocketsEnabled">reset_websockets_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetWindowsFxVersion">reset_windows_fx_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cors` <a name="put_cors" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.putCors"></a>

```python
def put_cors(
  allowed_origins: typing.List[str],
  support_credentials: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.putCors.parameter.allowedOrigins"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#allowed_origins AppService#allowed_origins}.

---

###### `support_credentials`<sup>Optional</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.putCors.parameter.supportCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/app_service#support_credentials AppService#support_credentials}.

---

##### `put_ip_restriction` <a name="put_ip_restriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.putIpRestriction"></a>

```python
def put_ip_restriction(
  value: typing.Union[IResolvable, typing.List[AppServiceSiteConfigIpRestriction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction">AppServiceSiteConfigIpRestriction</a>]]

---

##### `put_scm_ip_restriction` <a name="put_scm_ip_restriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.putScmIpRestriction"></a>

```python
def put_scm_ip_restriction(
  value: typing.Union[IResolvable, typing.List[AppServiceSiteConfigScmIpRestriction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction">AppServiceSiteConfigScmIpRestriction</a>]]

---

##### `reset_acr_use_managed_identity_credentials` <a name="reset_acr_use_managed_identity_credentials" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAcrUseManagedIdentityCredentials"></a>

```python
def reset_acr_use_managed_identity_credentials() -> None
```

##### `reset_acr_user_managed_identity_client_id` <a name="reset_acr_user_managed_identity_client_id" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAcrUserManagedIdentityClientId"></a>

```python
def reset_acr_user_managed_identity_client_id() -> None
```

##### `reset_always_on` <a name="reset_always_on" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAlwaysOn"></a>

```python
def reset_always_on() -> None
```

##### `reset_app_command_line` <a name="reset_app_command_line" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAppCommandLine"></a>

```python
def reset_app_command_line() -> None
```

##### `reset_auto_swap_slot_name` <a name="reset_auto_swap_slot_name" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetAutoSwapSlotName"></a>

```python
def reset_auto_swap_slot_name() -> None
```

##### `reset_cors` <a name="reset_cors" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetCors"></a>

```python
def reset_cors() -> None
```

##### `reset_default_documents` <a name="reset_default_documents" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetDefaultDocuments"></a>

```python
def reset_default_documents() -> None
```

##### `reset_dotnet_framework_version` <a name="reset_dotnet_framework_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetDotnetFrameworkVersion"></a>

```python
def reset_dotnet_framework_version() -> None
```

##### `reset_ftps_state` <a name="reset_ftps_state" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetFtpsState"></a>

```python
def reset_ftps_state() -> None
```

##### `reset_health_check_path` <a name="reset_health_check_path" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetHealthCheckPath"></a>

```python
def reset_health_check_path() -> None
```

##### `reset_http2_enabled` <a name="reset_http2_enabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetHttp2Enabled"></a>

```python
def reset_http2_enabled() -> None
```

##### `reset_ip_restriction` <a name="reset_ip_restriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetIpRestriction"></a>

```python
def reset_ip_restriction() -> None
```

##### `reset_java_container` <a name="reset_java_container" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetJavaContainer"></a>

```python
def reset_java_container() -> None
```

##### `reset_java_container_version` <a name="reset_java_container_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetJavaContainerVersion"></a>

```python
def reset_java_container_version() -> None
```

##### `reset_java_version` <a name="reset_java_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetJavaVersion"></a>

```python
def reset_java_version() -> None
```

##### `reset_linux_fx_version` <a name="reset_linux_fx_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetLinuxFxVersion"></a>

```python
def reset_linux_fx_version() -> None
```

##### `reset_local_mysql_enabled` <a name="reset_local_mysql_enabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetLocalMysqlEnabled"></a>

```python
def reset_local_mysql_enabled() -> None
```

##### `reset_managed_pipeline_mode` <a name="reset_managed_pipeline_mode" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetManagedPipelineMode"></a>

```python
def reset_managed_pipeline_mode() -> None
```

##### `reset_min_tls_version` <a name="reset_min_tls_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetMinTlsVersion"></a>

```python
def reset_min_tls_version() -> None
```

##### `reset_number_of_workers` <a name="reset_number_of_workers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetNumberOfWorkers"></a>

```python
def reset_number_of_workers() -> None
```

##### `reset_php_version` <a name="reset_php_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetPhpVersion"></a>

```python
def reset_php_version() -> None
```

##### `reset_python_version` <a name="reset_python_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetPythonVersion"></a>

```python
def reset_python_version() -> None
```

##### `reset_remote_debugging_enabled` <a name="reset_remote_debugging_enabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetRemoteDebuggingEnabled"></a>

```python
def reset_remote_debugging_enabled() -> None
```

##### `reset_remote_debugging_version` <a name="reset_remote_debugging_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetRemoteDebuggingVersion"></a>

```python
def reset_remote_debugging_version() -> None
```

##### `reset_scm_ip_restriction` <a name="reset_scm_ip_restriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetScmIpRestriction"></a>

```python
def reset_scm_ip_restriction() -> None
```

##### `reset_scm_type` <a name="reset_scm_type" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetScmType"></a>

```python
def reset_scm_type() -> None
```

##### `reset_scm_use_main_ip_restriction` <a name="reset_scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```python
def reset_scm_use_main_ip_restriction() -> None
```

##### `reset_use32_bit_worker_process` <a name="reset_use32_bit_worker_process" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetUse32BitWorkerProcess"></a>

```python
def reset_use32_bit_worker_process() -> None
```

##### `reset_vnet_route_all_enabled` <a name="reset_vnet_route_all_enabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```python
def reset_vnet_route_all_enabled() -> None
```

##### `reset_websockets_enabled` <a name="reset_websockets_enabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```python
def reset_websockets_enabled() -> None
```

##### `reset_windows_fx_version` <a name="reset_windows_fx_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.resetWindowsFxVersion"></a>

```python
def reset_windows_fx_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference">AppServiceSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.ipRestriction">ip_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList">AppServiceSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmIpRestriction">scm_ip_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList">AppServiceSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.acrUseManagedIdentityCredentialsInput">acr_use_managed_identity_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.acrUserManagedIdentityClientIdInput">acr_user_managed_identity_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.alwaysOnInput">always_on_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.appCommandLineInput">app_command_line_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.autoSwapSlotNameInput">auto_swap_slot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.corsInput">cors_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors">AppServiceSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.defaultDocumentsInput">default_documents_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.dotnetFrameworkVersionInput">dotnet_framework_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.ftpsStateInput">ftps_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.healthCheckPathInput">health_check_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.http2EnabledInput">http2_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.ipRestrictionInput">ip_restriction_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction">AppServiceSiteConfigIpRestriction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaContainerInput">java_container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaContainerVersionInput">java_container_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaVersionInput">java_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.linuxFxVersionInput">linux_fx_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.localMysqlEnabledInput">local_mysql_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.managedPipelineModeInput">managed_pipeline_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.minTlsVersionInput">min_tls_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.numberOfWorkersInput">number_of_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.phpVersionInput">php_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.pythonVersionInput">python_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.remoteDebuggingEnabledInput">remote_debugging_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.remoteDebuggingVersionInput">remote_debugging_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmIpRestrictionInput">scm_ip_restriction_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction">AppServiceSiteConfigScmIpRestriction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmTypeInput">scm_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">scm_use_main_ip_restriction_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.use32BitWorkerProcessInput">use32_bit_worker_process_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.vnetRouteAllEnabledInput">vnet_route_all_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.websocketsEnabledInput">websockets_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.windowsFxVersionInput">windows_fx_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.acrUseManagedIdentityCredentials">acr_use_managed_identity_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.acrUserManagedIdentityClientId">acr_user_managed_identity_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.alwaysOn">always_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.appCommandLine">app_command_line</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.autoSwapSlotName">auto_swap_slot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.defaultDocuments">default_documents</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.dotnetFrameworkVersion">dotnet_framework_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.ftpsState">ftps_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.http2Enabled">http2_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaContainer">java_container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaContainerVersion">java_container_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaVersion">java_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.linuxFxVersion">linux_fx_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.localMysqlEnabled">local_mysql_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.managedPipelineMode">managed_pipeline_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.phpVersion">php_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.pythonVersion">python_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.remoteDebuggingEnabled">remote_debugging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.remoteDebuggingVersion">remote_debugging_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmType">scm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmUseMainIpRestriction">scm_use_main_ip_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.use32BitWorkerProcess">use32_bit_worker_process</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.vnetRouteAllEnabled">vnet_route_all_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.websocketsEnabled">websockets_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.windowsFxVersion">windows_fx_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig">AppServiceSiteConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.cors"></a>

```python
cors: AppServiceSiteConfigCorsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCorsOutputReference">AppServiceSiteConfigCorsOutputReference</a>

---

##### `ip_restriction`<sup>Required</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.ipRestriction"></a>

```python
ip_restriction: AppServiceSiteConfigIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestrictionList">AppServiceSiteConfigIpRestrictionList</a>

---

##### `scm_ip_restriction`<sup>Required</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmIpRestriction"></a>

```python
scm_ip_restriction: AppServiceSiteConfigScmIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList">AppServiceSiteConfigScmIpRestrictionList</a>

---

##### `acr_use_managed_identity_credentials_input`<sup>Optional</sup> <a name="acr_use_managed_identity_credentials_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.acrUseManagedIdentityCredentialsInput"></a>

```python
acr_use_managed_identity_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `acr_user_managed_identity_client_id_input`<sup>Optional</sup> <a name="acr_user_managed_identity_client_id_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.acrUserManagedIdentityClientIdInput"></a>

```python
acr_user_managed_identity_client_id_input: str
```

- *Type:* str

---

##### `always_on_input`<sup>Optional</sup> <a name="always_on_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.alwaysOnInput"></a>

```python
always_on_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `app_command_line_input`<sup>Optional</sup> <a name="app_command_line_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.appCommandLineInput"></a>

```python
app_command_line_input: str
```

- *Type:* str

---

##### `auto_swap_slot_name_input`<sup>Optional</sup> <a name="auto_swap_slot_name_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.autoSwapSlotNameInput"></a>

```python
auto_swap_slot_name_input: str
```

- *Type:* str

---

##### `cors_input`<sup>Optional</sup> <a name="cors_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.corsInput"></a>

```python
cors_input: AppServiceSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigCors">AppServiceSiteConfigCors</a>

---

##### `default_documents_input`<sup>Optional</sup> <a name="default_documents_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.defaultDocumentsInput"></a>

```python
default_documents_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dotnet_framework_version_input`<sup>Optional</sup> <a name="dotnet_framework_version_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.dotnetFrameworkVersionInput"></a>

```python
dotnet_framework_version_input: str
```

- *Type:* str

---

##### `ftps_state_input`<sup>Optional</sup> <a name="ftps_state_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.ftpsStateInput"></a>

```python
ftps_state_input: str
```

- *Type:* str

---

##### `health_check_path_input`<sup>Optional</sup> <a name="health_check_path_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.healthCheckPathInput"></a>

```python
health_check_path_input: str
```

- *Type:* str

---

##### `http2_enabled_input`<sup>Optional</sup> <a name="http2_enabled_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.http2EnabledInput"></a>

```python
http2_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_restriction_input`<sup>Optional</sup> <a name="ip_restriction_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.ipRestrictionInput"></a>

```python
ip_restriction_input: typing.Union[IResolvable, typing.List[AppServiceSiteConfigIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigIpRestriction">AppServiceSiteConfigIpRestriction</a>]]

---

##### `java_container_input`<sup>Optional</sup> <a name="java_container_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaContainerInput"></a>

```python
java_container_input: str
```

- *Type:* str

---

##### `java_container_version_input`<sup>Optional</sup> <a name="java_container_version_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaContainerVersionInput"></a>

```python
java_container_version_input: str
```

- *Type:* str

---

##### `java_version_input`<sup>Optional</sup> <a name="java_version_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaVersionInput"></a>

```python
java_version_input: str
```

- *Type:* str

---

##### `linux_fx_version_input`<sup>Optional</sup> <a name="linux_fx_version_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.linuxFxVersionInput"></a>

```python
linux_fx_version_input: str
```

- *Type:* str

---

##### `local_mysql_enabled_input`<sup>Optional</sup> <a name="local_mysql_enabled_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.localMysqlEnabledInput"></a>

```python
local_mysql_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_pipeline_mode_input`<sup>Optional</sup> <a name="managed_pipeline_mode_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.managedPipelineModeInput"></a>

```python
managed_pipeline_mode_input: str
```

- *Type:* str

---

##### `min_tls_version_input`<sup>Optional</sup> <a name="min_tls_version_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.minTlsVersionInput"></a>

```python
min_tls_version_input: str
```

- *Type:* str

---

##### `number_of_workers_input`<sup>Optional</sup> <a name="number_of_workers_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.numberOfWorkersInput"></a>

```python
number_of_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `php_version_input`<sup>Optional</sup> <a name="php_version_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.phpVersionInput"></a>

```python
php_version_input: str
```

- *Type:* str

---

##### `python_version_input`<sup>Optional</sup> <a name="python_version_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.pythonVersionInput"></a>

```python
python_version_input: str
```

- *Type:* str

---

##### `remote_debugging_enabled_input`<sup>Optional</sup> <a name="remote_debugging_enabled_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.remoteDebuggingEnabledInput"></a>

```python
remote_debugging_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remote_debugging_version_input`<sup>Optional</sup> <a name="remote_debugging_version_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.remoteDebuggingVersionInput"></a>

```python
remote_debugging_version_input: str
```

- *Type:* str

---

##### `scm_ip_restriction_input`<sup>Optional</sup> <a name="scm_ip_restriction_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```python
scm_ip_restriction_input: typing.Union[IResolvable, typing.List[AppServiceSiteConfigScmIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction">AppServiceSiteConfigScmIpRestriction</a>]]

---

##### `scm_type_input`<sup>Optional</sup> <a name="scm_type_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmTypeInput"></a>

```python
scm_type_input: str
```

- *Type:* str

---

##### `scm_use_main_ip_restriction_input`<sup>Optional</sup> <a name="scm_use_main_ip_restriction_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```python
scm_use_main_ip_restriction_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use32_bit_worker_process_input`<sup>Optional</sup> <a name="use32_bit_worker_process_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.use32BitWorkerProcessInput"></a>

```python
use32_bit_worker_process_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnet_route_all_enabled_input`<sup>Optional</sup> <a name="vnet_route_all_enabled_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```python
vnet_route_all_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `websockets_enabled_input`<sup>Optional</sup> <a name="websockets_enabled_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```python
websockets_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `windows_fx_version_input`<sup>Optional</sup> <a name="windows_fx_version_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.windowsFxVersionInput"></a>

```python
windows_fx_version_input: str
```

- *Type:* str

---

##### `acr_use_managed_identity_credentials`<sup>Required</sup> <a name="acr_use_managed_identity_credentials" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.acrUseManagedIdentityCredentials"></a>

```python
acr_use_managed_identity_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `acr_user_managed_identity_client_id`<sup>Required</sup> <a name="acr_user_managed_identity_client_id" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.acrUserManagedIdentityClientId"></a>

```python
acr_user_managed_identity_client_id: str
```

- *Type:* str

---

##### `always_on`<sup>Required</sup> <a name="always_on" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.alwaysOn"></a>

```python
always_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `app_command_line`<sup>Required</sup> <a name="app_command_line" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.appCommandLine"></a>

```python
app_command_line: str
```

- *Type:* str

---

##### `auto_swap_slot_name`<sup>Required</sup> <a name="auto_swap_slot_name" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.autoSwapSlotName"></a>

```python
auto_swap_slot_name: str
```

- *Type:* str

---

##### `default_documents`<sup>Required</sup> <a name="default_documents" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.defaultDocuments"></a>

```python
default_documents: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dotnet_framework_version`<sup>Required</sup> <a name="dotnet_framework_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.dotnetFrameworkVersion"></a>

```python
dotnet_framework_version: str
```

- *Type:* str

---

##### `ftps_state`<sup>Required</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.ftpsState"></a>

```python
ftps_state: str
```

- *Type:* str

---

##### `health_check_path`<sup>Required</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

---

##### `http2_enabled`<sup>Required</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.http2Enabled"></a>

```python
http2_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `java_container`<sup>Required</sup> <a name="java_container" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaContainer"></a>

```python
java_container: str
```

- *Type:* str

---

##### `java_container_version`<sup>Required</sup> <a name="java_container_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaContainerVersion"></a>

```python
java_container_version: str
```

- *Type:* str

---

##### `java_version`<sup>Required</sup> <a name="java_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.javaVersion"></a>

```python
java_version: str
```

- *Type:* str

---

##### `linux_fx_version`<sup>Required</sup> <a name="linux_fx_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.linuxFxVersion"></a>

```python
linux_fx_version: str
```

- *Type:* str

---

##### `local_mysql_enabled`<sup>Required</sup> <a name="local_mysql_enabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.localMysqlEnabled"></a>

```python
local_mysql_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_pipeline_mode`<sup>Required</sup> <a name="managed_pipeline_mode" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.managedPipelineMode"></a>

```python
managed_pipeline_mode: str
```

- *Type:* str

---

##### `min_tls_version`<sup>Required</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

---

##### `number_of_workers`<sup>Required</sup> <a name="number_of_workers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.numberOfWorkers"></a>

```python
number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `php_version`<sup>Required</sup> <a name="php_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.phpVersion"></a>

```python
php_version: str
```

- *Type:* str

---

##### `python_version`<sup>Required</sup> <a name="python_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.pythonVersion"></a>

```python
python_version: str
```

- *Type:* str

---

##### `remote_debugging_enabled`<sup>Required</sup> <a name="remote_debugging_enabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.remoteDebuggingEnabled"></a>

```python
remote_debugging_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remote_debugging_version`<sup>Required</sup> <a name="remote_debugging_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.remoteDebuggingVersion"></a>

```python
remote_debugging_version: str
```

- *Type:* str

---

##### `scm_type`<sup>Required</sup> <a name="scm_type" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmType"></a>

```python
scm_type: str
```

- *Type:* str

---

##### `scm_use_main_ip_restriction`<sup>Required</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```python
scm_use_main_ip_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use32_bit_worker_process`<sup>Required</sup> <a name="use32_bit_worker_process" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.use32BitWorkerProcess"></a>

```python
use32_bit_worker_process: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnet_route_all_enabled`<sup>Required</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```python
vnet_route_all_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `websockets_enabled`<sup>Required</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.websocketsEnabled"></a>

```python
websockets_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `windows_fx_version`<sup>Required</sup> <a name="windows_fx_version" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.windowsFxVersion"></a>

```python
windows_fx_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfig">AppServiceSiteConfig</a>

---


### AppServiceSiteConfigScmIpRestrictionHeadersList <a name="AppServiceSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSiteConfigScmIpRestrictionHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppServiceSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders">AppServiceSiteConfigScmIpRestrictionHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppServiceSiteConfigScmIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders">AppServiceSiteConfigScmIpRestrictionHeaders</a>]]

---


### AppServiceSiteConfigScmIpRestrictionHeadersOutputReference <a name="AppServiceSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">reset_x_azure_fdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">reset_x_fd_health_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">reset_x_forwarded_for</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">reset_x_forwarded_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x_azure_fdid` <a name="reset_x_azure_fdid" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```python
def reset_x_azure_fdid() -> None
```

##### `reset_x_fd_health_probe` <a name="reset_x_fd_health_probe" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```python
def reset_x_fd_health_probe() -> None
```

##### `reset_x_forwarded_for` <a name="reset_x_forwarded_for" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```python
def reset_x_forwarded_for() -> None
```

##### `reset_x_forwarded_host` <a name="reset_x_forwarded_host" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```python
def reset_x_forwarded_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">x_azure_fdid_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">x_fd_health_probe_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">x_forwarded_for_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">x_forwarded_host_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders">AppServiceSiteConfigScmIpRestrictionHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_azure_fdid_input`<sup>Optional</sup> <a name="x_azure_fdid_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```python
x_azure_fdid_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe_input`<sup>Optional</sup> <a name="x_fd_health_probe_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```python
x_fd_health_probe_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for_input`<sup>Optional</sup> <a name="x_forwarded_for_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```python
x_forwarded_for_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host_input`<sup>Optional</sup> <a name="x_forwarded_host_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```python
x_forwarded_host_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_azure_fdid`<sup>Required</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe`<sup>Required</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for`<sup>Required</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host`<sup>Required</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppServiceSiteConfigScmIpRestrictionHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders">AppServiceSiteConfigScmIpRestrictionHeaders</a>]

---


### AppServiceSiteConfigScmIpRestrictionList <a name="AppServiceSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSiteConfigScmIpRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppServiceSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction">AppServiceSiteConfigScmIpRestriction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppServiceSiteConfigScmIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction">AppServiceSiteConfigScmIpRestriction</a>]]

---


### AppServiceSiteConfigScmIpRestrictionOutputReference <a name="AppServiceSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSiteConfigScmIpRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetServiceTag">reset_service_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">reset_virtual_network_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[AppServiceSiteConfigScmIpRestrictionHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders">AppServiceSiteConfigScmIpRestrictionHeaders</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_service_tag` <a name="reset_service_tag" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```python
def reset_service_tag() -> None
```

##### `reset_virtual_network_subnet_id` <a name="reset_virtual_network_subnet_id" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```python
def reset_virtual_network_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList">AppServiceSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders">AppServiceSiteConfigScmIpRestrictionHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">service_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtual_network_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.serviceTag">service_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction">AppServiceSiteConfigScmIpRestriction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```python
headers: AppServiceSiteConfigScmIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeadersList">AppServiceSiteConfigScmIpRestrictionHeadersList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[AppServiceSiteConfigScmIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionHeaders">AppServiceSiteConfigScmIpRestrictionHeaders</a>]]

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag_input`<sup>Optional</sup> <a name="service_tag_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```python
service_tag_input: str
```

- *Type:* str

---

##### `virtual_network_subnet_id_input`<sup>Optional</sup> <a name="virtual_network_subnet_id_input" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```python
virtual_network_subnet_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag`<sup>Required</sup> <a name="service_tag" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppServiceSiteConfigScmIpRestriction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteConfigScmIpRestriction">AppServiceSiteConfigScmIpRestriction</a>]

---


### AppServiceSiteCredentialList <a name="AppServiceSiteCredentialList" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSiteCredentialList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppServiceSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AppServiceSiteCredentialOutputReference <a name="AppServiceSiteCredentialOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSiteCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredential">AppServiceSiteCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceSiteCredentialOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSiteCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSiteCredential">AppServiceSiteCredential</a>

---


### AppServiceSourceControlOutputReference <a name="AppServiceSourceControlOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceSourceControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetManualIntegration">reset_manual_integration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetRepoUrl">reset_repo_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetRollbackEnabled">reset_rollback_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetUseMercurial">reset_use_mercurial</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch` <a name="reset_branch" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_manual_integration` <a name="reset_manual_integration" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetManualIntegration"></a>

```python
def reset_manual_integration() -> None
```

##### `reset_repo_url` <a name="reset_repo_url" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetRepoUrl"></a>

```python
def reset_repo_url() -> None
```

##### `reset_rollback_enabled` <a name="reset_rollback_enabled" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetRollbackEnabled"></a>

```python
def reset_rollback_enabled() -> None
```

##### `reset_use_mercurial` <a name="reset_use_mercurial" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.resetUseMercurial"></a>

```python
def reset_use_mercurial() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.manualIntegrationInput">manual_integration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.repoUrlInput">repo_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.rollbackEnabledInput">rollback_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.useMercurialInput">use_mercurial_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.manualIntegration">manual_integration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.repoUrl">repo_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.rollbackEnabled">rollback_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.useMercurial">use_mercurial</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl">AppServiceSourceControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `manual_integration_input`<sup>Optional</sup> <a name="manual_integration_input" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.manualIntegrationInput"></a>

```python
manual_integration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repo_url_input`<sup>Optional</sup> <a name="repo_url_input" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.repoUrlInput"></a>

```python
repo_url_input: str
```

- *Type:* str

---

##### `rollback_enabled_input`<sup>Optional</sup> <a name="rollback_enabled_input" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.rollbackEnabledInput"></a>

```python
rollback_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_mercurial_input`<sup>Optional</sup> <a name="use_mercurial_input" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.useMercurialInput"></a>

```python
use_mercurial_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `manual_integration`<sup>Required</sup> <a name="manual_integration" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.manualIntegration"></a>

```python
manual_integration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repo_url`<sup>Required</sup> <a name="repo_url" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.repoUrl"></a>

```python
repo_url: str
```

- *Type:* str

---

##### `rollback_enabled`<sup>Required</sup> <a name="rollback_enabled" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.rollbackEnabled"></a>

```python
rollback_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_mercurial`<sup>Required</sup> <a name="use_mercurial" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.useMercurial"></a>

```python
use_mercurial: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceSourceControlOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSourceControl
```

- *Type:* <a href="#@cdktf/provider-azurerm.appService.AppServiceSourceControl">AppServiceSourceControl</a>

---


### AppServiceStorageAccountList <a name="AppServiceStorageAccountList" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceStorageAccountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppServiceStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppServiceStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a>]]

---


### AppServiceStorageAccountOutputReference <a name="AppServiceStorageAccountOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceStorageAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.resetMountPath">reset_mount_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mount_path` <a name="reset_mount_path" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.resetMountPath"></a>

```python
def reset_mount_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.accessKeyInput">access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.shareNameInput">share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.accessKey">access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.shareName">share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key_input`<sup>Optional</sup> <a name="access_key_input" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.accessKeyInput"></a>

```python
access_key_input: str
```

- *Type:* str

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `share_name_input`<sup>Optional</sup> <a name="share_name_input" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.shareNameInput"></a>

```python
share_name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceStorageAccountOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppServiceStorageAccount]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appService.AppServiceStorageAccount">AppServiceStorageAccount</a>]

---


### AppServiceTimeoutsOutputReference <a name="AppServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service

appService.AppServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts">AppServiceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appService.AppServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appService.AppServiceTimeouts">AppServiceTimeouts</a>]

---



