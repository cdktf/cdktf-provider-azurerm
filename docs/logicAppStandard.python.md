# `logicAppStandard` Submodule <a name="`logicAppStandard` Submodule" id="@cdktf/provider-azurerm.logicAppStandard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppStandard <a name="LogicAppStandard" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard azurerm_logic_app_standard}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandard(
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
  bundle_version: str = None,
  client_affinity_enabled: typing.Union[bool, IResolvable] = None,
  client_certificate_mode: str = None,
  connection_string: typing.Union[IResolvable, typing.List[LogicAppStandardConnectionString]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  ftp_publish_basic_authentication_enabled: typing.Union[bool, IResolvable] = None,
  https_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: LogicAppStandardIdentity = None,
  public_network_access: str = None,
  scm_publish_basic_authentication_enabled: typing.Union[bool, IResolvable] = None,
  site_config: LogicAppStandardSiteConfig = None,
  storage_account_share_name: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: LogicAppStandardTimeouts = None,
  use_extension_bundle: typing.Union[bool, IResolvable] = None,
  version: str = None,
  virtual_network_subnet_id: str = None,
  vnet_content_share_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.appServicePlanId">app_service_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#app_service_plan_id LogicAppStandard#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#location LogicAppStandard#location}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#name LogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#resource_group_name LogicAppStandard#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#storage_account_access_key LogicAppStandard#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#storage_account_name LogicAppStandard#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#app_settings LogicAppStandard#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.bundleVersion">bundle_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#bundle_version LogicAppStandard#bundle_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.clientAffinityEnabled">client_affinity_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#client_affinity_enabled LogicAppStandard#client_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.clientCertificateMode">client_certificate_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#client_certificate_mode LogicAppStandard#client_certificate_mode}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.connectionString">connection_string</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>]]</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#enabled LogicAppStandard#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.ftpPublishBasicAuthenticationEnabled">ftp_publish_basic_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#ftp_publish_basic_authentication_enabled LogicAppStandard#ftp_publish_basic_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#https_only LogicAppStandard#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#id LogicAppStandard#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.publicNetworkAccess">public_network_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#public_network_access LogicAppStandard#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.scmPublishBasicAuthenticationEnabled">scm_publish_basic_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#scm_publish_basic_authentication_enabled LogicAppStandard#scm_publish_basic_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.storageAccountShareName">storage_account_share_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#storage_account_share_name LogicAppStandard#storage_account_share_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#tags LogicAppStandard#tags}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.useExtensionBundle">use_extension_bundle</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#use_extension_bundle LogicAppStandard#use_extension_bundle}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#version LogicAppStandard#version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.vnetContentShareEnabled">vnet_content_share_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#vnet_content_share_enabled LogicAppStandard#vnet_content_share_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_service_plan_id`<sup>Required</sup> <a name="app_service_plan_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.appServicePlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#app_service_plan_id LogicAppStandard#app_service_plan_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#location LogicAppStandard#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#name LogicAppStandard#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#resource_group_name LogicAppStandard#resource_group_name}.

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.storageAccountAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#storage_account_access_key LogicAppStandard#storage_account_access_key}.

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.storageAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#storage_account_name LogicAppStandard#storage_account_name}.

---

##### `app_settings`<sup>Optional</sup> <a name="app_settings" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.appSettings"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#app_settings LogicAppStandard#app_settings}.

---

##### `bundle_version`<sup>Optional</sup> <a name="bundle_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.bundleVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#bundle_version LogicAppStandard#bundle_version}.

---

##### `client_affinity_enabled`<sup>Optional</sup> <a name="client_affinity_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.clientAffinityEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#client_affinity_enabled LogicAppStandard#client_affinity_enabled}.

---

##### `client_certificate_mode`<sup>Optional</sup> <a name="client_certificate_mode" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.clientCertificateMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#client_certificate_mode LogicAppStandard#client_certificate_mode}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.connectionString"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>]]

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#connection_string LogicAppStandard#connection_string}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#enabled LogicAppStandard#enabled}.

---

##### `ftp_publish_basic_authentication_enabled`<sup>Optional</sup> <a name="ftp_publish_basic_authentication_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.ftpPublishBasicAuthenticationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#ftp_publish_basic_authentication_enabled LogicAppStandard#ftp_publish_basic_authentication_enabled}.

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.httpsOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#https_only LogicAppStandard#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#id LogicAppStandard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#identity LogicAppStandard#identity}

---

##### `public_network_access`<sup>Optional</sup> <a name="public_network_access" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.publicNetworkAccess"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#public_network_access LogicAppStandard#public_network_access}.

---

##### `scm_publish_basic_authentication_enabled`<sup>Optional</sup> <a name="scm_publish_basic_authentication_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.scmPublishBasicAuthenticationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#scm_publish_basic_authentication_enabled LogicAppStandard#scm_publish_basic_authentication_enabled}.

---

##### `site_config`<sup>Optional</sup> <a name="site_config" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.siteConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#site_config LogicAppStandard#site_config}

---

##### `storage_account_share_name`<sup>Optional</sup> <a name="storage_account_share_name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.storageAccountShareName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#storage_account_share_name LogicAppStandard#storage_account_share_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#tags LogicAppStandard#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#timeouts LogicAppStandard#timeouts}

---

##### `use_extension_bundle`<sup>Optional</sup> <a name="use_extension_bundle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.useExtensionBundle"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#use_extension_bundle LogicAppStandard#use_extension_bundle}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#version LogicAppStandard#version}.

---

##### `virtual_network_subnet_id`<sup>Optional</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.virtualNetworkSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}.

---

##### `vnet_content_share_enabled`<sup>Optional</sup> <a name="vnet_content_share_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.vnetContentShareEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#vnet_content_share_enabled LogicAppStandard#vnet_content_share_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putConnectionString">put_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig">put_site_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetAppSettings">reset_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetBundleVersion">reset_bundle_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetClientAffinityEnabled">reset_client_affinity_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetClientCertificateMode">reset_client_certificate_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetConnectionString">reset_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetFtpPublishBasicAuthenticationEnabled">reset_ftp_publish_basic_authentication_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetHttpsOnly">reset_https_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetPublicNetworkAccess">reset_public_network_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetScmPublishBasicAuthenticationEnabled">reset_scm_publish_basic_authentication_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetSiteConfig">reset_site_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetStorageAccountShareName">reset_storage_account_share_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetUseExtensionBundle">reset_use_extension_bundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetVersion">reset_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetVirtualNetworkSubnetId">reset_virtual_network_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetVnetContentShareEnabled">reset_vnet_content_share_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connection_string` <a name="put_connection_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putConnectionString"></a>

```python
def put_connection_string(
  value: typing.Union[IResolvable, typing.List[LogicAppStandardConnectionString]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putConnectionString.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>]]

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#type LogicAppStandard#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#identity_ids LogicAppStandard#identity_ids}.

---

##### `put_site_config` <a name="put_site_config" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig"></a>

```python
def put_site_config(
  always_on: typing.Union[bool, IResolvable] = None,
  app_scale_limit: typing.Union[int, float] = None,
  cors: LogicAppStandardSiteConfigCors = None,
  dotnet_framework_version: str = None,
  elastic_instance_minimum: typing.Union[int, float] = None,
  ftps_state: str = None,
  health_check_path: str = None,
  http2_enabled: typing.Union[bool, IResolvable] = None,
  ip_restriction: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigIpRestriction]] = None,
  linux_fx_version: str = None,
  min_tls_version: str = None,
  pre_warmed_instance_count: typing.Union[int, float] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  runtime_scale_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  scm_ip_restriction: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigScmIpRestriction]] = None,
  scm_min_tls_version: str = None,
  scm_type: str = None,
  scm_use_main_ip_restriction: typing.Union[bool, IResolvable] = None,
  use32_bit_worker_process: typing.Union[bool, IResolvable] = None,
  vnet_route_all_enabled: typing.Union[bool, IResolvable] = None,
  websockets_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `always_on`<sup>Optional</sup> <a name="always_on" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.alwaysOn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#always_on LogicAppStandard#always_on}.

---

###### `app_scale_limit`<sup>Optional</sup> <a name="app_scale_limit" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.appScaleLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#app_scale_limit LogicAppStandard#app_scale_limit}.

---

###### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.cors"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#cors LogicAppStandard#cors}

---

###### `dotnet_framework_version`<sup>Optional</sup> <a name="dotnet_framework_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.dotnetFrameworkVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#dotnet_framework_version LogicAppStandard#dotnet_framework_version}.

---

###### `elastic_instance_minimum`<sup>Optional</sup> <a name="elastic_instance_minimum" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.elasticInstanceMinimum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#elastic_instance_minimum LogicAppStandard#elastic_instance_minimum}.

---

###### `ftps_state`<sup>Optional</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.ftpsState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#ftps_state LogicAppStandard#ftps_state}.

---

###### `health_check_path`<sup>Optional</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.healthCheckPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#health_check_path LogicAppStandard#health_check_path}.

---

###### `http2_enabled`<sup>Optional</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.http2Enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#http2_enabled LogicAppStandard#http2_enabled}.

---

###### `ip_restriction`<sup>Optional</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.ipRestriction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction">LogicAppStandardSiteConfigIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#ip_restriction LogicAppStandard#ip_restriction}.

---

###### `linux_fx_version`<sup>Optional</sup> <a name="linux_fx_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.linuxFxVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#linux_fx_version LogicAppStandard#linux_fx_version}.

---

###### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.minTlsVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#min_tls_version LogicAppStandard#min_tls_version}.

---

###### `pre_warmed_instance_count`<sup>Optional</sup> <a name="pre_warmed_instance_count" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.preWarmedInstanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#pre_warmed_instance_count LogicAppStandard#pre_warmed_instance_count}.

---

###### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#public_network_access_enabled LogicAppStandard#public_network_access_enabled}.

---

###### `runtime_scale_monitoring_enabled`<sup>Optional</sup> <a name="runtime_scale_monitoring_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.runtimeScaleMonitoringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#runtime_scale_monitoring_enabled LogicAppStandard#runtime_scale_monitoring_enabled}.

---

###### `scm_ip_restriction`<sup>Optional</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.scmIpRestriction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction">LogicAppStandardSiteConfigScmIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#scm_ip_restriction LogicAppStandard#scm_ip_restriction}.

---

###### `scm_min_tls_version`<sup>Optional</sup> <a name="scm_min_tls_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.scmMinTlsVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#scm_min_tls_version LogicAppStandard#scm_min_tls_version}.

---

###### `scm_type`<sup>Optional</sup> <a name="scm_type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.scmType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#scm_type LogicAppStandard#scm_type}.

---

###### `scm_use_main_ip_restriction`<sup>Optional</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.scmUseMainIpRestriction"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#scm_use_main_ip_restriction LogicAppStandard#scm_use_main_ip_restriction}.

---

###### `use32_bit_worker_process`<sup>Optional</sup> <a name="use32_bit_worker_process" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.use32BitWorkerProcess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#use_32_bit_worker_process LogicAppStandard#use_32_bit_worker_process}.

---

###### `vnet_route_all_enabled`<sup>Optional</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.vnetRouteAllEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#vnet_route_all_enabled LogicAppStandard#vnet_route_all_enabled}.

---

###### `websockets_enabled`<sup>Optional</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.websocketsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#websockets_enabled LogicAppStandard#websockets_enabled}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#create LogicAppStandard#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#delete LogicAppStandard#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#read LogicAppStandard#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#update LogicAppStandard#update}.

---

##### `reset_app_settings` <a name="reset_app_settings" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetAppSettings"></a>

```python
def reset_app_settings() -> None
```

##### `reset_bundle_version` <a name="reset_bundle_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetBundleVersion"></a>

```python
def reset_bundle_version() -> None
```

##### `reset_client_affinity_enabled` <a name="reset_client_affinity_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetClientAffinityEnabled"></a>

```python
def reset_client_affinity_enabled() -> None
```

##### `reset_client_certificate_mode` <a name="reset_client_certificate_mode" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetClientCertificateMode"></a>

```python
def reset_client_certificate_mode() -> None
```

##### `reset_connection_string` <a name="reset_connection_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetConnectionString"></a>

```python
def reset_connection_string() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_ftp_publish_basic_authentication_enabled` <a name="reset_ftp_publish_basic_authentication_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetFtpPublishBasicAuthenticationEnabled"></a>

```python
def reset_ftp_publish_basic_authentication_enabled() -> None
```

##### `reset_https_only` <a name="reset_https_only" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetHttpsOnly"></a>

```python
def reset_https_only() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_public_network_access` <a name="reset_public_network_access" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetPublicNetworkAccess"></a>

```python
def reset_public_network_access() -> None
```

##### `reset_scm_publish_basic_authentication_enabled` <a name="reset_scm_publish_basic_authentication_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetScmPublishBasicAuthenticationEnabled"></a>

```python
def reset_scm_publish_basic_authentication_enabled() -> None
```

##### `reset_site_config` <a name="reset_site_config" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetSiteConfig"></a>

```python
def reset_site_config() -> None
```

##### `reset_storage_account_share_name` <a name="reset_storage_account_share_name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetStorageAccountShareName"></a>

```python
def reset_storage_account_share_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_use_extension_bundle` <a name="reset_use_extension_bundle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetUseExtensionBundle"></a>

```python
def reset_use_extension_bundle() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetVersion"></a>

```python
def reset_version() -> None
```

##### `reset_virtual_network_subnet_id` <a name="reset_virtual_network_subnet_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetVirtualNetworkSubnetId"></a>

```python
def reset_virtual_network_subnet_id() -> None
```

##### `reset_vnet_content_share_enabled` <a name="reset_vnet_content_share_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetVnetContentShareEnabled"></a>

```python
def reset_vnet_content_share_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LogicAppStandard resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandard.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandard.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandard.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandard.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LogicAppStandard resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogicAppStandard to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogicAppStandard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogicAppStandard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connectionString">connection_string</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList">LogicAppStandardConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.customDomainVerificationId">custom_domain_verification_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.defaultHostname">default_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference">LogicAppStandardIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.outboundIpAddresses">outbound_ip_addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.possibleOutboundIpAddresses">possible_outbound_ip_addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference">LogicAppStandardSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteCredential">site_credential</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList">LogicAppStandardSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference">LogicAppStandardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appServicePlanIdInput">app_service_plan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appSettingsInput">app_settings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.bundleVersionInput">bundle_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientAffinityEnabledInput">client_affinity_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientCertificateModeInput">client_certificate_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connectionStringInput">connection_string_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.ftpPublishBasicAuthenticationEnabledInput">ftp_publish_basic_authentication_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.httpsOnlyInput">https_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.publicNetworkAccessInput">public_network_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.scmPublishBasicAuthenticationEnabledInput">scm_publish_basic_authentication_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteConfigInput">site_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountAccessKeyInput">storage_account_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountNameInput">storage_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountShareNameInput">storage_account_share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.useExtensionBundleInput">use_extension_bundle_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.virtualNetworkSubnetIdInput">virtual_network_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.vnetContentShareEnabledInput">vnet_content_share_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appServicePlanId">app_service_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.bundleVersion">bundle_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientAffinityEnabled">client_affinity_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientCertificateMode">client_certificate_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.ftpPublishBasicAuthenticationEnabled">ftp_publish_basic_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.publicNetworkAccess">public_network_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.scmPublishBasicAuthenticationEnabled">scm_publish_basic_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountShareName">storage_account_share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.useExtensionBundle">use_extension_bundle</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.vnetContentShareEnabled">vnet_content_share_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connectionString"></a>

```python
connection_string: LogicAppStandardConnectionStringList
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList">LogicAppStandardConnectionStringList</a>

---

##### `custom_domain_verification_id`<sup>Required</sup> <a name="custom_domain_verification_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.customDomainVerificationId"></a>

```python
custom_domain_verification_id: str
```

- *Type:* str

---

##### `default_hostname`<sup>Required</sup> <a name="default_hostname" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.defaultHostname"></a>

```python
default_hostname: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.identity"></a>

```python
identity: LogicAppStandardIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference">LogicAppStandardIdentityOutputReference</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `outbound_ip_addresses`<sup>Required</sup> <a name="outbound_ip_addresses" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.outboundIpAddresses"></a>

```python
outbound_ip_addresses: str
```

- *Type:* str

---

##### `possible_outbound_ip_addresses`<sup>Required</sup> <a name="possible_outbound_ip_addresses" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.possibleOutboundIpAddresses"></a>

```python
possible_outbound_ip_addresses: str
```

- *Type:* str

---

##### `site_config`<sup>Required</sup> <a name="site_config" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteConfig"></a>

```python
site_config: LogicAppStandardSiteConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference">LogicAppStandardSiteConfigOutputReference</a>

---

##### `site_credential`<sup>Required</sup> <a name="site_credential" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteCredential"></a>

```python
site_credential: LogicAppStandardSiteCredentialList
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList">LogicAppStandardSiteCredentialList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.timeouts"></a>

```python
timeouts: LogicAppStandardTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference">LogicAppStandardTimeoutsOutputReference</a>

---

##### `app_service_plan_id_input`<sup>Optional</sup> <a name="app_service_plan_id_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appServicePlanIdInput"></a>

```python
app_service_plan_id_input: str
```

- *Type:* str

---

##### `app_settings_input`<sup>Optional</sup> <a name="app_settings_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appSettingsInput"></a>

```python
app_settings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `bundle_version_input`<sup>Optional</sup> <a name="bundle_version_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.bundleVersionInput"></a>

```python
bundle_version_input: str
```

- *Type:* str

---

##### `client_affinity_enabled_input`<sup>Optional</sup> <a name="client_affinity_enabled_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientAffinityEnabledInput"></a>

```python
client_affinity_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_certificate_mode_input`<sup>Optional</sup> <a name="client_certificate_mode_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientCertificateModeInput"></a>

```python
client_certificate_mode_input: str
```

- *Type:* str

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connectionStringInput"></a>

```python
connection_string_input: typing.Union[IResolvable, typing.List[LogicAppStandardConnectionString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>]]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ftp_publish_basic_authentication_enabled_input`<sup>Optional</sup> <a name="ftp_publish_basic_authentication_enabled_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.ftpPublishBasicAuthenticationEnabledInput"></a>

```python
ftp_publish_basic_authentication_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `https_only_input`<sup>Optional</sup> <a name="https_only_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.httpsOnlyInput"></a>

```python
https_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.identityInput"></a>

```python
identity_input: LogicAppStandardIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_network_access_input`<sup>Optional</sup> <a name="public_network_access_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.publicNetworkAccessInput"></a>

```python
public_network_access_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `scm_publish_basic_authentication_enabled_input`<sup>Optional</sup> <a name="scm_publish_basic_authentication_enabled_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.scmPublishBasicAuthenticationEnabledInput"></a>

```python
scm_publish_basic_authentication_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `site_config_input`<sup>Optional</sup> <a name="site_config_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteConfigInput"></a>

```python
site_config_input: LogicAppStandardSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a>

---

##### `storage_account_access_key_input`<sup>Optional</sup> <a name="storage_account_access_key_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountAccessKeyInput"></a>

```python
storage_account_access_key_input: str
```

- *Type:* str

---

##### `storage_account_name_input`<sup>Optional</sup> <a name="storage_account_name_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountNameInput"></a>

```python
storage_account_name_input: str
```

- *Type:* str

---

##### `storage_account_share_name_input`<sup>Optional</sup> <a name="storage_account_share_name_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountShareNameInput"></a>

```python
storage_account_share_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LogicAppStandardTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a>]

---

##### `use_extension_bundle_input`<sup>Optional</sup> <a name="use_extension_bundle_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.useExtensionBundleInput"></a>

```python
use_extension_bundle_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `virtual_network_subnet_id_input`<sup>Optional</sup> <a name="virtual_network_subnet_id_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.virtualNetworkSubnetIdInput"></a>

```python
virtual_network_subnet_id_input: str
```

- *Type:* str

---

##### `vnet_content_share_enabled_input`<sup>Optional</sup> <a name="vnet_content_share_enabled_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.vnetContentShareEnabledInput"></a>

```python
vnet_content_share_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `app_service_plan_id`<sup>Required</sup> <a name="app_service_plan_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appServicePlanId"></a>

```python
app_service_plan_id: str
```

- *Type:* str

---

##### `app_settings`<sup>Required</sup> <a name="app_settings" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appSettings"></a>

```python
app_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `bundle_version`<sup>Required</sup> <a name="bundle_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.bundleVersion"></a>

```python
bundle_version: str
```

- *Type:* str

---

##### `client_affinity_enabled`<sup>Required</sup> <a name="client_affinity_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientAffinityEnabled"></a>

```python
client_affinity_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_certificate_mode`<sup>Required</sup> <a name="client_certificate_mode" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientCertificateMode"></a>

```python
client_certificate_mode: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ftp_publish_basic_authentication_enabled`<sup>Required</sup> <a name="ftp_publish_basic_authentication_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.ftpPublishBasicAuthenticationEnabled"></a>

```python
ftp_publish_basic_authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `https_only`<sup>Required</sup> <a name="https_only" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.httpsOnly"></a>

```python
https_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_network_access`<sup>Required</sup> <a name="public_network_access" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.publicNetworkAccess"></a>

```python
public_network_access: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `scm_publish_basic_authentication_enabled`<sup>Required</sup> <a name="scm_publish_basic_authentication_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.scmPublishBasicAuthenticationEnabled"></a>

```python
scm_publish_basic_authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

---

##### `storage_account_share_name`<sup>Required</sup> <a name="storage_account_share_name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountShareName"></a>

```python
storage_account_share_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_extension_bundle`<sup>Required</sup> <a name="use_extension_bundle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.useExtensionBundle"></a>

```python
use_extension_bundle: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

##### `vnet_content_share_enabled`<sup>Required</sup> <a name="vnet_content_share_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.vnetContentShareEnabled"></a>

```python
vnet_content_share_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppStandardConfig <a name="LogicAppStandardConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardConfig(
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
  bundle_version: str = None,
  client_affinity_enabled: typing.Union[bool, IResolvable] = None,
  client_certificate_mode: str = None,
  connection_string: typing.Union[IResolvable, typing.List[LogicAppStandardConnectionString]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  ftp_publish_basic_authentication_enabled: typing.Union[bool, IResolvable] = None,
  https_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: LogicAppStandardIdentity = None,
  public_network_access: str = None,
  scm_publish_basic_authentication_enabled: typing.Union[bool, IResolvable] = None,
  site_config: LogicAppStandardSiteConfig = None,
  storage_account_share_name: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: LogicAppStandardTimeouts = None,
  use_extension_bundle: typing.Union[bool, IResolvable] = None,
  version: str = None,
  virtual_network_subnet_id: str = None,
  vnet_content_share_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.appServicePlanId">app_service_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#app_service_plan_id LogicAppStandard#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#location LogicAppStandard#location}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#name LogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#resource_group_name LogicAppStandard#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#storage_account_access_key LogicAppStandard#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#storage_account_name LogicAppStandard#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#app_settings LogicAppStandard#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.bundleVersion">bundle_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#bundle_version LogicAppStandard#bundle_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.clientAffinityEnabled">client_affinity_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#client_affinity_enabled LogicAppStandard#client_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.clientCertificateMode">client_certificate_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#client_certificate_mode LogicAppStandard#client_certificate_mode}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.connectionString">connection_string</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>]]</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#enabled LogicAppStandard#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.ftpPublishBasicAuthenticationEnabled">ftp_publish_basic_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#ftp_publish_basic_authentication_enabled LogicAppStandard#ftp_publish_basic_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#https_only LogicAppStandard#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#id LogicAppStandard#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.publicNetworkAccess">public_network_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#public_network_access LogicAppStandard#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.scmPublishBasicAuthenticationEnabled">scm_publish_basic_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#scm_publish_basic_authentication_enabled LogicAppStandard#scm_publish_basic_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountShareName">storage_account_share_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#storage_account_share_name LogicAppStandard#storage_account_share_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#tags LogicAppStandard#tags}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.useExtensionBundle">use_extension_bundle</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#use_extension_bundle LogicAppStandard#use_extension_bundle}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#version LogicAppStandard#version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.vnetContentShareEnabled">vnet_content_share_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#vnet_content_share_enabled LogicAppStandard#vnet_content_share_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_service_plan_id`<sup>Required</sup> <a name="app_service_plan_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.appServicePlanId"></a>

```python
app_service_plan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#app_service_plan_id LogicAppStandard#app_service_plan_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#location LogicAppStandard#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#name LogicAppStandard#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#resource_group_name LogicAppStandard#resource_group_name}.

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#storage_account_access_key LogicAppStandard#storage_account_access_key}.

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#storage_account_name LogicAppStandard#storage_account_name}.

---

##### `app_settings`<sup>Optional</sup> <a name="app_settings" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.appSettings"></a>

```python
app_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#app_settings LogicAppStandard#app_settings}.

---

##### `bundle_version`<sup>Optional</sup> <a name="bundle_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.bundleVersion"></a>

```python
bundle_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#bundle_version LogicAppStandard#bundle_version}.

---

##### `client_affinity_enabled`<sup>Optional</sup> <a name="client_affinity_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.clientAffinityEnabled"></a>

```python
client_affinity_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#client_affinity_enabled LogicAppStandard#client_affinity_enabled}.

---

##### `client_certificate_mode`<sup>Optional</sup> <a name="client_certificate_mode" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.clientCertificateMode"></a>

```python
client_certificate_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#client_certificate_mode LogicAppStandard#client_certificate_mode}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.connectionString"></a>

```python
connection_string: typing.Union[IResolvable, typing.List[LogicAppStandardConnectionString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>]]

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#connection_string LogicAppStandard#connection_string}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#enabled LogicAppStandard#enabled}.

---

##### `ftp_publish_basic_authentication_enabled`<sup>Optional</sup> <a name="ftp_publish_basic_authentication_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.ftpPublishBasicAuthenticationEnabled"></a>

```python
ftp_publish_basic_authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#ftp_publish_basic_authentication_enabled LogicAppStandard#ftp_publish_basic_authentication_enabled}.

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.httpsOnly"></a>

```python
https_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#https_only LogicAppStandard#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#id LogicAppStandard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.identity"></a>

```python
identity: LogicAppStandardIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#identity LogicAppStandard#identity}

---

##### `public_network_access`<sup>Optional</sup> <a name="public_network_access" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.publicNetworkAccess"></a>

```python
public_network_access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#public_network_access LogicAppStandard#public_network_access}.

---

##### `scm_publish_basic_authentication_enabled`<sup>Optional</sup> <a name="scm_publish_basic_authentication_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.scmPublishBasicAuthenticationEnabled"></a>

```python
scm_publish_basic_authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#scm_publish_basic_authentication_enabled LogicAppStandard#scm_publish_basic_authentication_enabled}.

---

##### `site_config`<sup>Optional</sup> <a name="site_config" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.siteConfig"></a>

```python
site_config: LogicAppStandardSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#site_config LogicAppStandard#site_config}

---

##### `storage_account_share_name`<sup>Optional</sup> <a name="storage_account_share_name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountShareName"></a>

```python
storage_account_share_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#storage_account_share_name LogicAppStandard#storage_account_share_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#tags LogicAppStandard#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.timeouts"></a>

```python
timeouts: LogicAppStandardTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#timeouts LogicAppStandard#timeouts}

---

##### `use_extension_bundle`<sup>Optional</sup> <a name="use_extension_bundle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.useExtensionBundle"></a>

```python
use_extension_bundle: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#use_extension_bundle LogicAppStandard#use_extension_bundle}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#version LogicAppStandard#version}.

---

##### `virtual_network_subnet_id`<sup>Optional</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}.

---

##### `vnet_content_share_enabled`<sup>Optional</sup> <a name="vnet_content_share_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.vnetContentShareEnabled"></a>

```python
vnet_content_share_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#vnet_content_share_enabled LogicAppStandard#vnet_content_share_enabled}.

---

### LogicAppStandardConnectionString <a name="LogicAppStandardConnectionString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardConnectionString(
  name: str,
  type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#name LogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#type LogicAppStandard#type}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#value LogicAppStandard#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#name LogicAppStandard#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#type LogicAppStandard#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#value LogicAppStandard#value}.

---

### LogicAppStandardIdentity <a name="LogicAppStandardIdentity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#type LogicAppStandard#type}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#identity_ids LogicAppStandard#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#type LogicAppStandard#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#identity_ids LogicAppStandard#identity_ids}.

---

### LogicAppStandardSiteConfig <a name="LogicAppStandardSiteConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardSiteConfig(
  always_on: typing.Union[bool, IResolvable] = None,
  app_scale_limit: typing.Union[int, float] = None,
  cors: LogicAppStandardSiteConfigCors = None,
  dotnet_framework_version: str = None,
  elastic_instance_minimum: typing.Union[int, float] = None,
  ftps_state: str = None,
  health_check_path: str = None,
  http2_enabled: typing.Union[bool, IResolvable] = None,
  ip_restriction: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigIpRestriction]] = None,
  linux_fx_version: str = None,
  min_tls_version: str = None,
  pre_warmed_instance_count: typing.Union[int, float] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  runtime_scale_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  scm_ip_restriction: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigScmIpRestriction]] = None,
  scm_min_tls_version: str = None,
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
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.alwaysOn">always_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#always_on LogicAppStandard#always_on}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.appScaleLimit">app_scale_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#app_scale_limit LogicAppStandard#app_scale_limit}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.dotnetFrameworkVersion">dotnet_framework_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#dotnet_framework_version LogicAppStandard#dotnet_framework_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.elasticInstanceMinimum">elastic_instance_minimum</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#elastic_instance_minimum LogicAppStandard#elastic_instance_minimum}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.ftpsState">ftps_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#ftps_state LogicAppStandard#ftps_state}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#health_check_path LogicAppStandard#health_check_path}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.http2Enabled">http2_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#http2_enabled LogicAppStandard#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.ipRestriction">ip_restriction</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction">LogicAppStandardSiteConfigIpRestriction</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#ip_restriction LogicAppStandard#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.linuxFxVersion">linux_fx_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#linux_fx_version LogicAppStandard#linux_fx_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#min_tls_version LogicAppStandard#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.preWarmedInstanceCount">pre_warmed_instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#pre_warmed_instance_count LogicAppStandard#pre_warmed_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#public_network_access_enabled LogicAppStandard#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.runtimeScaleMonitoringEnabled">runtime_scale_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#runtime_scale_monitoring_enabled LogicAppStandard#runtime_scale_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmIpRestriction">scm_ip_restriction</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction">LogicAppStandardSiteConfigScmIpRestriction</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#scm_ip_restriction LogicAppStandard#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmMinTlsVersion">scm_min_tls_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#scm_min_tls_version LogicAppStandard#scm_min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmType">scm_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#scm_type LogicAppStandard#scm_type}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmUseMainIpRestriction">scm_use_main_ip_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#scm_use_main_ip_restriction LogicAppStandard#scm_use_main_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.use32BitWorkerProcess">use32_bit_worker_process</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#use_32_bit_worker_process LogicAppStandard#use_32_bit_worker_process}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.vnetRouteAllEnabled">vnet_route_all_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#vnet_route_all_enabled LogicAppStandard#vnet_route_all_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.websocketsEnabled">websockets_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#websockets_enabled LogicAppStandard#websockets_enabled}. |

---

##### `always_on`<sup>Optional</sup> <a name="always_on" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.alwaysOn"></a>

```python
always_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#always_on LogicAppStandard#always_on}.

---

##### `app_scale_limit`<sup>Optional</sup> <a name="app_scale_limit" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.appScaleLimit"></a>

```python
app_scale_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#app_scale_limit LogicAppStandard#app_scale_limit}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.cors"></a>

```python
cors: LogicAppStandardSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#cors LogicAppStandard#cors}

---

##### `dotnet_framework_version`<sup>Optional</sup> <a name="dotnet_framework_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.dotnetFrameworkVersion"></a>

```python
dotnet_framework_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#dotnet_framework_version LogicAppStandard#dotnet_framework_version}.

---

##### `elastic_instance_minimum`<sup>Optional</sup> <a name="elastic_instance_minimum" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.elasticInstanceMinimum"></a>

```python
elastic_instance_minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#elastic_instance_minimum LogicAppStandard#elastic_instance_minimum}.

---

##### `ftps_state`<sup>Optional</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.ftpsState"></a>

```python
ftps_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#ftps_state LogicAppStandard#ftps_state}.

---

##### `health_check_path`<sup>Optional</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#health_check_path LogicAppStandard#health_check_path}.

---

##### `http2_enabled`<sup>Optional</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.http2Enabled"></a>

```python
http2_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#http2_enabled LogicAppStandard#http2_enabled}.

---

##### `ip_restriction`<sup>Optional</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.ipRestriction"></a>

```python
ip_restriction: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction">LogicAppStandardSiteConfigIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#ip_restriction LogicAppStandard#ip_restriction}.

---

##### `linux_fx_version`<sup>Optional</sup> <a name="linux_fx_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.linuxFxVersion"></a>

```python
linux_fx_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#linux_fx_version LogicAppStandard#linux_fx_version}.

---

##### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#min_tls_version LogicAppStandard#min_tls_version}.

---

##### `pre_warmed_instance_count`<sup>Optional</sup> <a name="pre_warmed_instance_count" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.preWarmedInstanceCount"></a>

```python
pre_warmed_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#pre_warmed_instance_count LogicAppStandard#pre_warmed_instance_count}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#public_network_access_enabled LogicAppStandard#public_network_access_enabled}.

---

##### `runtime_scale_monitoring_enabled`<sup>Optional</sup> <a name="runtime_scale_monitoring_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.runtimeScaleMonitoringEnabled"></a>

```python
runtime_scale_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#runtime_scale_monitoring_enabled LogicAppStandard#runtime_scale_monitoring_enabled}.

---

##### `scm_ip_restriction`<sup>Optional</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmIpRestriction"></a>

```python
scm_ip_restriction: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigScmIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction">LogicAppStandardSiteConfigScmIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#scm_ip_restriction LogicAppStandard#scm_ip_restriction}.

---

##### `scm_min_tls_version`<sup>Optional</sup> <a name="scm_min_tls_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmMinTlsVersion"></a>

```python
scm_min_tls_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#scm_min_tls_version LogicAppStandard#scm_min_tls_version}.

---

##### `scm_type`<sup>Optional</sup> <a name="scm_type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmType"></a>

```python
scm_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#scm_type LogicAppStandard#scm_type}.

---

##### `scm_use_main_ip_restriction`<sup>Optional</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmUseMainIpRestriction"></a>

```python
scm_use_main_ip_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#scm_use_main_ip_restriction LogicAppStandard#scm_use_main_ip_restriction}.

---

##### `use32_bit_worker_process`<sup>Optional</sup> <a name="use32_bit_worker_process" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.use32BitWorkerProcess"></a>

```python
use32_bit_worker_process: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#use_32_bit_worker_process LogicAppStandard#use_32_bit_worker_process}.

---

##### `vnet_route_all_enabled`<sup>Optional</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.vnetRouteAllEnabled"></a>

```python
vnet_route_all_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#vnet_route_all_enabled LogicAppStandard#vnet_route_all_enabled}.

---

##### `websockets_enabled`<sup>Optional</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.websocketsEnabled"></a>

```python
websockets_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#websockets_enabled LogicAppStandard#websockets_enabled}.

---

### LogicAppStandardSiteConfigCors <a name="LogicAppStandardSiteConfigCors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardSiteConfigCors(
  allowed_origins: typing.List[str],
  support_credentials: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#allowed_origins LogicAppStandard#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.property.supportCredentials">support_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#support_credentials LogicAppStandard#support_credentials}. |

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#allowed_origins LogicAppStandard#allowed_origins}.

---

##### `support_credentials`<sup>Optional</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.property.supportCredentials"></a>

```python
support_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#support_credentials LogicAppStandard#support_credentials}.

---

### LogicAppStandardSiteConfigIpRestriction <a name="LogicAppStandardSiteConfigIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardSiteConfigIpRestriction(
  action: str = None,
  headers: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigIpRestrictionHeaders]] = None,
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
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#action LogicAppStandard#action}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders">LogicAppStandardSiteConfigIpRestrictionHeaders</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#headers LogicAppStandard#headers}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#ip_address LogicAppStandard#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#name LogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#priority LogicAppStandard#priority}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.serviceTag">service_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#service_tag LogicAppStandard#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#action LogicAppStandard#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders">LogicAppStandardSiteConfigIpRestrictionHeaders</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#headers LogicAppStandard#headers}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#ip_address LogicAppStandard#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#name LogicAppStandard#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#priority LogicAppStandard#priority}.

---

##### `service_tag`<sup>Optional</sup> <a name="service_tag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#service_tag LogicAppStandard#service_tag}.

---

##### `virtual_network_subnet_id`<sup>Optional</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}.

---

### LogicAppStandardSiteConfigIpRestrictionHeaders <a name="LogicAppStandardSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders(
  x_azure_fdid: typing.List[str] = None,
  x_fd_health_probe: typing.List[str] = None,
  x_forwarded_for: typing.List[str] = None,
  x_forwarded_host: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#x_azure_fdid LogicAppStandard#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#x_fd_health_probe LogicAppStandard#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#x_forwarded_for LogicAppStandard#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#x_forwarded_host LogicAppStandard#x_forwarded_host}. |

---

##### `x_azure_fdid`<sup>Optional</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#x_azure_fdid LogicAppStandard#x_azure_fdid}.

---

##### `x_fd_health_probe`<sup>Optional</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#x_fd_health_probe LogicAppStandard#x_fd_health_probe}.

---

##### `x_forwarded_for`<sup>Optional</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#x_forwarded_for LogicAppStandard#x_forwarded_for}.

---

##### `x_forwarded_host`<sup>Optional</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#x_forwarded_host LogicAppStandard#x_forwarded_host}.

---

### LogicAppStandardSiteConfigScmIpRestriction <a name="LogicAppStandardSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction(
  action: str = None,
  headers: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigScmIpRestrictionHeaders]] = None,
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
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#action LogicAppStandard#action}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders">LogicAppStandardSiteConfigScmIpRestrictionHeaders</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#headers LogicAppStandard#headers}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#ip_address LogicAppStandard#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#name LogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#priority LogicAppStandard#priority}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.serviceTag">service_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#service_tag LogicAppStandard#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#action LogicAppStandard#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigScmIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders">LogicAppStandardSiteConfigScmIpRestrictionHeaders</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#headers LogicAppStandard#headers}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#ip_address LogicAppStandard#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#name LogicAppStandard#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#priority LogicAppStandard#priority}.

---

##### `service_tag`<sup>Optional</sup> <a name="service_tag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#service_tag LogicAppStandard#service_tag}.

---

##### `virtual_network_subnet_id`<sup>Optional</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}.

---

### LogicAppStandardSiteConfigScmIpRestrictionHeaders <a name="LogicAppStandardSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders(
  x_azure_fdid: typing.List[str] = None,
  x_fd_health_probe: typing.List[str] = None,
  x_forwarded_for: typing.List[str] = None,
  x_forwarded_host: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#x_azure_fdid LogicAppStandard#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#x_fd_health_probe LogicAppStandard#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#x_forwarded_for LogicAppStandard#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#x_forwarded_host LogicAppStandard#x_forwarded_host}. |

---

##### `x_azure_fdid`<sup>Optional</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#x_azure_fdid LogicAppStandard#x_azure_fdid}.

---

##### `x_fd_health_probe`<sup>Optional</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#x_fd_health_probe LogicAppStandard#x_fd_health_probe}.

---

##### `x_forwarded_for`<sup>Optional</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#x_forwarded_for LogicAppStandard#x_forwarded_for}.

---

##### `x_forwarded_host`<sup>Optional</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#x_forwarded_host LogicAppStandard#x_forwarded_host}.

---

### LogicAppStandardSiteCredential <a name="LogicAppStandardSiteCredential" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardSiteCredential()
```


### LogicAppStandardTimeouts <a name="LogicAppStandardTimeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#create LogicAppStandard#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#delete LogicAppStandard#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#read LogicAppStandard#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#update LogicAppStandard#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#create LogicAppStandard#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#delete LogicAppStandard#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#read LogicAppStandard#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#update LogicAppStandard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppStandardConnectionStringList <a name="LogicAppStandardConnectionStringList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardConnectionStringList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogicAppStandardConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LogicAppStandardConnectionString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>]]

---


### LogicAppStandardConnectionStringOutputReference <a name="LogicAppStandardConnectionStringOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardConnectionStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogicAppStandardConnectionString]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString">LogicAppStandardConnectionString</a>]

---


### LogicAppStandardIdentityOutputReference <a name="LogicAppStandardIdentityOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.internalValue"></a>

```python
internal_value: LogicAppStandardIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a>

---


### LogicAppStandardSiteConfigCorsOutputReference <a name="LogicAppStandardSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resetSupportCredentials">reset_support_credentials</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_support_credentials` <a name="reset_support_credentials" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```python
def reset_support_credentials() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.supportCredentialsInput">support_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.supportCredentials">support_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `support_credentials_input`<sup>Optional</sup> <a name="support_credentials_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```python
support_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `support_credentials`<sup>Required</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.supportCredentials"></a>

```python
support_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.internalValue"></a>

```python
internal_value: LogicAppStandardSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a>

---


### LogicAppStandardSiteConfigIpRestrictionHeadersList <a name="LogicAppStandardSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders">LogicAppStandardSiteConfigIpRestrictionHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders">LogicAppStandardSiteConfigIpRestrictionHeaders</a>]]

---


### LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference <a name="LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">reset_x_azure_fdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">reset_x_fd_health_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">reset_x_forwarded_for</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">reset_x_forwarded_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x_azure_fdid` <a name="reset_x_azure_fdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```python
def reset_x_azure_fdid() -> None
```

##### `reset_x_fd_health_probe` <a name="reset_x_fd_health_probe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```python
def reset_x_fd_health_probe() -> None
```

##### `reset_x_forwarded_for` <a name="reset_x_forwarded_for" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```python
def reset_x_forwarded_for() -> None
```

##### `reset_x_forwarded_host` <a name="reset_x_forwarded_host" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```python
def reset_x_forwarded_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">x_azure_fdid_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">x_fd_health_probe_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">x_forwarded_for_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">x_forwarded_host_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders">LogicAppStandardSiteConfigIpRestrictionHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_azure_fdid_input`<sup>Optional</sup> <a name="x_azure_fdid_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```python
x_azure_fdid_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe_input`<sup>Optional</sup> <a name="x_fd_health_probe_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```python
x_fd_health_probe_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for_input`<sup>Optional</sup> <a name="x_forwarded_for_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```python
x_forwarded_for_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host_input`<sup>Optional</sup> <a name="x_forwarded_host_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```python
x_forwarded_host_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_azure_fdid`<sup>Required</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe`<sup>Required</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for`<sup>Required</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host`<sup>Required</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogicAppStandardSiteConfigIpRestrictionHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders">LogicAppStandardSiteConfigIpRestrictionHeaders</a>]

---


### LogicAppStandardSiteConfigIpRestrictionList <a name="LogicAppStandardSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogicAppStandardSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction">LogicAppStandardSiteConfigIpRestriction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction">LogicAppStandardSiteConfigIpRestriction</a>]]

---


### LogicAppStandardSiteConfigIpRestrictionOutputReference <a name="LogicAppStandardSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetServiceTag">reset_service_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">reset_virtual_network_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigIpRestrictionHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders">LogicAppStandardSiteConfigIpRestrictionHeaders</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_service_tag` <a name="reset_service_tag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```python
def reset_service_tag() -> None
```

##### `reset_virtual_network_subnet_id` <a name="reset_virtual_network_subnet_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```python
def reset_virtual_network_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList">LogicAppStandardSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders">LogicAppStandardSiteConfigIpRestrictionHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTagInput">service_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtual_network_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTag">service_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction">LogicAppStandardSiteConfigIpRestriction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.headers"></a>

```python
headers: LogicAppStandardSiteConfigIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList">LogicAppStandardSiteConfigIpRestrictionHeadersList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders">LogicAppStandardSiteConfigIpRestrictionHeaders</a>]]

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag_input`<sup>Optional</sup> <a name="service_tag_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```python
service_tag_input: str
```

- *Type:* str

---

##### `virtual_network_subnet_id_input`<sup>Optional</sup> <a name="virtual_network_subnet_id_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```python
virtual_network_subnet_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag`<sup>Required</sup> <a name="service_tag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogicAppStandardSiteConfigIpRestriction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction">LogicAppStandardSiteConfigIpRestriction</a>]

---


### LogicAppStandardSiteConfigOutputReference <a name="LogicAppStandardSiteConfigOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardSiteConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putCors">put_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putIpRestriction">put_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putScmIpRestriction">put_scm_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetAlwaysOn">reset_always_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetAppScaleLimit">reset_app_scale_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetCors">reset_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetDotnetFrameworkVersion">reset_dotnet_framework_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetElasticInstanceMinimum">reset_elastic_instance_minimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetFtpsState">reset_ftps_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetHealthCheckPath">reset_health_check_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetHttp2Enabled">reset_http2_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetIpRestriction">reset_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetLinuxFxVersion">reset_linux_fx_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetMinTlsVersion">reset_min_tls_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetPreWarmedInstanceCount">reset_pre_warmed_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled">reset_runtime_scale_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmIpRestriction">reset_scm_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmMinTlsVersion">reset_scm_min_tls_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmType">reset_scm_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmUseMainIpRestriction">reset_scm_use_main_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetUse32BitWorkerProcess">reset_use32_bit_worker_process</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetVnetRouteAllEnabled">reset_vnet_route_all_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetWebsocketsEnabled">reset_websockets_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cors` <a name="put_cors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putCors"></a>

```python
def put_cors(
  allowed_origins: typing.List[str],
  support_credentials: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putCors.parameter.allowedOrigins"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#allowed_origins LogicAppStandard#allowed_origins}.

---

###### `support_credentials`<sup>Optional</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putCors.parameter.supportCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/logic_app_standard#support_credentials LogicAppStandard#support_credentials}.

---

##### `put_ip_restriction` <a name="put_ip_restriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putIpRestriction"></a>

```python
def put_ip_restriction(
  value: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigIpRestriction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction">LogicAppStandardSiteConfigIpRestriction</a>]]

---

##### `put_scm_ip_restriction` <a name="put_scm_ip_restriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putScmIpRestriction"></a>

```python
def put_scm_ip_restriction(
  value: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigScmIpRestriction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction">LogicAppStandardSiteConfigScmIpRestriction</a>]]

---

##### `reset_always_on` <a name="reset_always_on" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetAlwaysOn"></a>

```python
def reset_always_on() -> None
```

##### `reset_app_scale_limit` <a name="reset_app_scale_limit" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetAppScaleLimit"></a>

```python
def reset_app_scale_limit() -> None
```

##### `reset_cors` <a name="reset_cors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetCors"></a>

```python
def reset_cors() -> None
```

##### `reset_dotnet_framework_version` <a name="reset_dotnet_framework_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetDotnetFrameworkVersion"></a>

```python
def reset_dotnet_framework_version() -> None
```

##### `reset_elastic_instance_minimum` <a name="reset_elastic_instance_minimum" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetElasticInstanceMinimum"></a>

```python
def reset_elastic_instance_minimum() -> None
```

##### `reset_ftps_state` <a name="reset_ftps_state" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetFtpsState"></a>

```python
def reset_ftps_state() -> None
```

##### `reset_health_check_path` <a name="reset_health_check_path" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetHealthCheckPath"></a>

```python
def reset_health_check_path() -> None
```

##### `reset_http2_enabled` <a name="reset_http2_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetHttp2Enabled"></a>

```python
def reset_http2_enabled() -> None
```

##### `reset_ip_restriction` <a name="reset_ip_restriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetIpRestriction"></a>

```python
def reset_ip_restriction() -> None
```

##### `reset_linux_fx_version` <a name="reset_linux_fx_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetLinuxFxVersion"></a>

```python
def reset_linux_fx_version() -> None
```

##### `reset_min_tls_version` <a name="reset_min_tls_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetMinTlsVersion"></a>

```python
def reset_min_tls_version() -> None
```

##### `reset_pre_warmed_instance_count` <a name="reset_pre_warmed_instance_count" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetPreWarmedInstanceCount"></a>

```python
def reset_pre_warmed_instance_count() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_runtime_scale_monitoring_enabled` <a name="reset_runtime_scale_monitoring_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled"></a>

```python
def reset_runtime_scale_monitoring_enabled() -> None
```

##### `reset_scm_ip_restriction` <a name="reset_scm_ip_restriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmIpRestriction"></a>

```python
def reset_scm_ip_restriction() -> None
```

##### `reset_scm_min_tls_version` <a name="reset_scm_min_tls_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmMinTlsVersion"></a>

```python
def reset_scm_min_tls_version() -> None
```

##### `reset_scm_type` <a name="reset_scm_type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmType"></a>

```python
def reset_scm_type() -> None
```

##### `reset_scm_use_main_ip_restriction` <a name="reset_scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```python
def reset_scm_use_main_ip_restriction() -> None
```

##### `reset_use32_bit_worker_process` <a name="reset_use32_bit_worker_process" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetUse32BitWorkerProcess"></a>

```python
def reset_use32_bit_worker_process() -> None
```

##### `reset_vnet_route_all_enabled` <a name="reset_vnet_route_all_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```python
def reset_vnet_route_all_enabled() -> None
```

##### `reset_websockets_enabled` <a name="reset_websockets_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```python
def reset_websockets_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.autoSwapSlotName">auto_swap_slot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference">LogicAppStandardSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ipRestriction">ip_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList">LogicAppStandardSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmIpRestriction">scm_ip_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList">LogicAppStandardSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.alwaysOnInput">always_on_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.appScaleLimitInput">app_scale_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.corsInput">cors_input</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersionInput">dotnet_framework_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimumInput">elastic_instance_minimum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ftpsStateInput">ftps_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.healthCheckPathInput">health_check_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.http2EnabledInput">http2_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ipRestrictionInput">ip_restriction_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction">LogicAppStandardSiteConfigIpRestriction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.linuxFxVersionInput">linux_fx_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.minTlsVersionInput">min_tls_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCountInput">pre_warmed_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput">runtime_scale_monitoring_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmIpRestrictionInput">scm_ip_restriction_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction">LogicAppStandardSiteConfigScmIpRestriction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersionInput">scm_min_tls_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmTypeInput">scm_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">scm_use_main_ip_restriction_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcessInput">use32_bit_worker_process_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabledInput">vnet_route_all_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.websocketsEnabledInput">websockets_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.alwaysOn">always_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.appScaleLimit">app_scale_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersion">dotnet_framework_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimum">elastic_instance_minimum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ftpsState">ftps_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.http2Enabled">http2_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.linuxFxVersion">linux_fx_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCount">pre_warmed_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">runtime_scale_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersion">scm_min_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmType">scm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestriction">scm_use_main_ip_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcess">use32_bit_worker_process</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabled">vnet_route_all_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.websocketsEnabled">websockets_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_swap_slot_name`<sup>Required</sup> <a name="auto_swap_slot_name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.autoSwapSlotName"></a>

```python
auto_swap_slot_name: str
```

- *Type:* str

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.cors"></a>

```python
cors: LogicAppStandardSiteConfigCorsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference">LogicAppStandardSiteConfigCorsOutputReference</a>

---

##### `ip_restriction`<sup>Required</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ipRestriction"></a>

```python
ip_restriction: LogicAppStandardSiteConfigIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList">LogicAppStandardSiteConfigIpRestrictionList</a>

---

##### `scm_ip_restriction`<sup>Required</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmIpRestriction"></a>

```python
scm_ip_restriction: LogicAppStandardSiteConfigScmIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList">LogicAppStandardSiteConfigScmIpRestrictionList</a>

---

##### `always_on_input`<sup>Optional</sup> <a name="always_on_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.alwaysOnInput"></a>

```python
always_on_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `app_scale_limit_input`<sup>Optional</sup> <a name="app_scale_limit_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.appScaleLimitInput"></a>

```python
app_scale_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cors_input`<sup>Optional</sup> <a name="cors_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.corsInput"></a>

```python
cors_input: LogicAppStandardSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a>

---

##### `dotnet_framework_version_input`<sup>Optional</sup> <a name="dotnet_framework_version_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersionInput"></a>

```python
dotnet_framework_version_input: str
```

- *Type:* str

---

##### `elastic_instance_minimum_input`<sup>Optional</sup> <a name="elastic_instance_minimum_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimumInput"></a>

```python
elastic_instance_minimum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ftps_state_input`<sup>Optional</sup> <a name="ftps_state_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ftpsStateInput"></a>

```python
ftps_state_input: str
```

- *Type:* str

---

##### `health_check_path_input`<sup>Optional</sup> <a name="health_check_path_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.healthCheckPathInput"></a>

```python
health_check_path_input: str
```

- *Type:* str

---

##### `http2_enabled_input`<sup>Optional</sup> <a name="http2_enabled_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.http2EnabledInput"></a>

```python
http2_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_restriction_input`<sup>Optional</sup> <a name="ip_restriction_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ipRestrictionInput"></a>

```python
ip_restriction_input: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction">LogicAppStandardSiteConfigIpRestriction</a>]]

---

##### `linux_fx_version_input`<sup>Optional</sup> <a name="linux_fx_version_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.linuxFxVersionInput"></a>

```python
linux_fx_version_input: str
```

- *Type:* str

---

##### `min_tls_version_input`<sup>Optional</sup> <a name="min_tls_version_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.minTlsVersionInput"></a>

```python
min_tls_version_input: str
```

- *Type:* str

---

##### `pre_warmed_instance_count_input`<sup>Optional</sup> <a name="pre_warmed_instance_count_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCountInput"></a>

```python
pre_warmed_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `runtime_scale_monitoring_enabled_input`<sup>Optional</sup> <a name="runtime_scale_monitoring_enabled_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput"></a>

```python
runtime_scale_monitoring_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scm_ip_restriction_input`<sup>Optional</sup> <a name="scm_ip_restriction_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```python
scm_ip_restriction_input: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigScmIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction">LogicAppStandardSiteConfigScmIpRestriction</a>]]

---

##### `scm_min_tls_version_input`<sup>Optional</sup> <a name="scm_min_tls_version_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersionInput"></a>

```python
scm_min_tls_version_input: str
```

- *Type:* str

---

##### `scm_type_input`<sup>Optional</sup> <a name="scm_type_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmTypeInput"></a>

```python
scm_type_input: str
```

- *Type:* str

---

##### `scm_use_main_ip_restriction_input`<sup>Optional</sup> <a name="scm_use_main_ip_restriction_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```python
scm_use_main_ip_restriction_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use32_bit_worker_process_input`<sup>Optional</sup> <a name="use32_bit_worker_process_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcessInput"></a>

```python
use32_bit_worker_process_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnet_route_all_enabled_input`<sup>Optional</sup> <a name="vnet_route_all_enabled_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```python
vnet_route_all_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `websockets_enabled_input`<sup>Optional</sup> <a name="websockets_enabled_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```python
websockets_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `always_on`<sup>Required</sup> <a name="always_on" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.alwaysOn"></a>

```python
always_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `app_scale_limit`<sup>Required</sup> <a name="app_scale_limit" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.appScaleLimit"></a>

```python
app_scale_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dotnet_framework_version`<sup>Required</sup> <a name="dotnet_framework_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersion"></a>

```python
dotnet_framework_version: str
```

- *Type:* str

---

##### `elastic_instance_minimum`<sup>Required</sup> <a name="elastic_instance_minimum" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```python
elastic_instance_minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ftps_state`<sup>Required</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ftpsState"></a>

```python
ftps_state: str
```

- *Type:* str

---

##### `health_check_path`<sup>Required</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

---

##### `http2_enabled`<sup>Required</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.http2Enabled"></a>

```python
http2_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `linux_fx_version`<sup>Required</sup> <a name="linux_fx_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.linuxFxVersion"></a>

```python
linux_fx_version: str
```

- *Type:* str

---

##### `min_tls_version`<sup>Required</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

---

##### `pre_warmed_instance_count`<sup>Required</sup> <a name="pre_warmed_instance_count" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```python
pre_warmed_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `runtime_scale_monitoring_enabled`<sup>Required</sup> <a name="runtime_scale_monitoring_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```python
runtime_scale_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scm_min_tls_version`<sup>Required</sup> <a name="scm_min_tls_version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersion"></a>

```python
scm_min_tls_version: str
```

- *Type:* str

---

##### `scm_type`<sup>Required</sup> <a name="scm_type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmType"></a>

```python
scm_type: str
```

- *Type:* str

---

##### `scm_use_main_ip_restriction`<sup>Required</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```python
scm_use_main_ip_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use32_bit_worker_process`<sup>Required</sup> <a name="use32_bit_worker_process" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcess"></a>

```python
use32_bit_worker_process: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnet_route_all_enabled`<sup>Required</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```python
vnet_route_all_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `websockets_enabled`<sup>Required</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.websocketsEnabled"></a>

```python
websockets_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.internalValue"></a>

```python
internal_value: LogicAppStandardSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a>

---


### LogicAppStandardSiteConfigScmIpRestrictionHeadersList <a name="LogicAppStandardSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders">LogicAppStandardSiteConfigScmIpRestrictionHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigScmIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders">LogicAppStandardSiteConfigScmIpRestrictionHeaders</a>]]

---


### LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference <a name="LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">reset_x_azure_fdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">reset_x_fd_health_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">reset_x_forwarded_for</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">reset_x_forwarded_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x_azure_fdid` <a name="reset_x_azure_fdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```python
def reset_x_azure_fdid() -> None
```

##### `reset_x_fd_health_probe` <a name="reset_x_fd_health_probe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```python
def reset_x_fd_health_probe() -> None
```

##### `reset_x_forwarded_for` <a name="reset_x_forwarded_for" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```python
def reset_x_forwarded_for() -> None
```

##### `reset_x_forwarded_host` <a name="reset_x_forwarded_host" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```python
def reset_x_forwarded_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">x_azure_fdid_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">x_fd_health_probe_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">x_forwarded_for_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">x_forwarded_host_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders">LogicAppStandardSiteConfigScmIpRestrictionHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_azure_fdid_input`<sup>Optional</sup> <a name="x_azure_fdid_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```python
x_azure_fdid_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe_input`<sup>Optional</sup> <a name="x_fd_health_probe_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```python
x_fd_health_probe_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for_input`<sup>Optional</sup> <a name="x_forwarded_for_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```python
x_forwarded_for_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host_input`<sup>Optional</sup> <a name="x_forwarded_host_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```python
x_forwarded_host_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_azure_fdid`<sup>Required</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe`<sup>Required</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for`<sup>Required</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host`<sup>Required</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogicAppStandardSiteConfigScmIpRestrictionHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders">LogicAppStandardSiteConfigScmIpRestrictionHeaders</a>]

---


### LogicAppStandardSiteConfigScmIpRestrictionList <a name="LogicAppStandardSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogicAppStandardSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction">LogicAppStandardSiteConfigScmIpRestriction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigScmIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction">LogicAppStandardSiteConfigScmIpRestriction</a>]]

---


### LogicAppStandardSiteConfigScmIpRestrictionOutputReference <a name="LogicAppStandardSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetServiceTag">reset_service_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">reset_virtual_network_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigScmIpRestrictionHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders">LogicAppStandardSiteConfigScmIpRestrictionHeaders</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_service_tag` <a name="reset_service_tag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```python
def reset_service_tag() -> None
```

##### `reset_virtual_network_subnet_id` <a name="reset_virtual_network_subnet_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```python
def reset_virtual_network_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList">LogicAppStandardSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders">LogicAppStandardSiteConfigScmIpRestrictionHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">service_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtual_network_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTag">service_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction">LogicAppStandardSiteConfigScmIpRestriction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```python
headers: LogicAppStandardSiteConfigScmIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList">LogicAppStandardSiteConfigScmIpRestrictionHeadersList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[LogicAppStandardSiteConfigScmIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders">LogicAppStandardSiteConfigScmIpRestrictionHeaders</a>]]

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag_input`<sup>Optional</sup> <a name="service_tag_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```python
service_tag_input: str
```

- *Type:* str

---

##### `virtual_network_subnet_id_input`<sup>Optional</sup> <a name="virtual_network_subnet_id_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```python
virtual_network_subnet_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag`<sup>Required</sup> <a name="service_tag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogicAppStandardSiteConfigScmIpRestriction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction">LogicAppStandardSiteConfigScmIpRestriction</a>]

---


### LogicAppStandardSiteCredentialList <a name="LogicAppStandardSiteCredentialList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardSiteCredentialList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogicAppStandardSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### LogicAppStandardSiteCredentialOutputReference <a name="LogicAppStandardSiteCredentialOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardSiteCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredential">LogicAppStandardSiteCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.internalValue"></a>

```python
internal_value: LogicAppStandardSiteCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredential">LogicAppStandardSiteCredential</a>

---


### LogicAppStandardTimeoutsOutputReference <a name="LogicAppStandardTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import logic_app_standard

logicAppStandard.LogicAppStandardTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogicAppStandardTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a>]

---



