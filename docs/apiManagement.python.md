# `apiManagement` Submodule <a name="`apiManagement` Submodule" id="@cdktf/provider-azurerm.apiManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagement <a name="ApiManagement" id="@cdktf/provider-azurerm.apiManagement.ApiManagement"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management azurerm_api_management}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagement(
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
  publisher_email: str,
  publisher_name: str,
  resource_group_name: str,
  sku_name: str,
  additional_location: typing.Union[IResolvable, typing.List[ApiManagementAdditionalLocation]] = None,
  certificate: typing.Union[IResolvable, typing.List[ApiManagementCertificate]] = None,
  client_certificate_enabled: typing.Union[bool, IResolvable] = None,
  delegation: ApiManagementDelegation = None,
  gateway_disabled: typing.Union[bool, IResolvable] = None,
  hostname_configuration: ApiManagementHostnameConfiguration = None,
  id: str = None,
  identity: ApiManagementIdentity = None,
  min_api_version: str = None,
  notification_sender_email: str = None,
  policy: typing.Union[IResolvable, typing.List[ApiManagementPolicy]] = None,
  protocols: ApiManagementProtocols = None,
  public_ip_address_id: str = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  security: ApiManagementSecurity = None,
  sign_in: ApiManagementSignIn = None,
  sign_up: ApiManagementSignUp = None,
  tags: typing.Mapping[str] = None,
  tenant_access: ApiManagementTenantAccess = None,
  timeouts: ApiManagementTimeouts = None,
  virtual_network_configuration: ApiManagementVirtualNetworkConfiguration = None,
  virtual_network_type: str = None,
  zones: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#location ApiManagement#location}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#name ApiManagement#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.publisherEmail">publisher_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#publisher_email ApiManagement#publisher_email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.publisherName">publisher_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#publisher_name ApiManagement#publisher_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#resource_group_name ApiManagement#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#sku_name ApiManagement#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.additionalLocation">additional_location</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>]]</code> | additional_location block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.certificate">certificate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>]]</code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.clientCertificateEnabled">client_certificate_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#client_certificate_enabled ApiManagement#client_certificate_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.delegation">delegation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a></code> | delegation block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.gatewayDisabled">gateway_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#gateway_disabled ApiManagement#gateway_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.hostnameConfiguration">hostname_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a></code> | hostname_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#id ApiManagement#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.minApiVersion">min_api_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#min_api_version ApiManagement#min_api_version}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.notificationSenderEmail">notification_sender_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#notification_sender_email ApiManagement#notification_sender_email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.policy">policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#policy ApiManagement#policy}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.protocols">protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a></code> | protocols block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.publicIpAddressId">public_ip_address_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#public_ip_address_id ApiManagement#public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#public_network_access_enabled ApiManagement#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a></code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.signIn">sign_in</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.signUp">sign_up</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a></code> | sign_up block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tags ApiManagement#tags}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.tenantAccess">tenant_access</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a></code> | tenant_access block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.virtualNetworkConfiguration">virtual_network_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a></code> | virtual_network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.virtualNetworkType">virtual_network_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#virtual_network_type ApiManagement#virtual_network_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#zones ApiManagement#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#location ApiManagement#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#name ApiManagement#name}.

---

##### `publisher_email`<sup>Required</sup> <a name="publisher_email" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.publisherEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#publisher_email ApiManagement#publisher_email}.

---

##### `publisher_name`<sup>Required</sup> <a name="publisher_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.publisherName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#publisher_name ApiManagement#publisher_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#resource_group_name ApiManagement#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.skuName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#sku_name ApiManagement#sku_name}.

---

##### `additional_location`<sup>Optional</sup> <a name="additional_location" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.additionalLocation"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>]]

additional_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#additional_location ApiManagement#additional_location}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.certificate"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>]]

certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate ApiManagement#certificate}

---

##### `client_certificate_enabled`<sup>Optional</sup> <a name="client_certificate_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.clientCertificateEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#client_certificate_enabled ApiManagement#client_certificate_enabled}.

---

##### `delegation`<sup>Optional</sup> <a name="delegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.delegation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

delegation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#delegation ApiManagement#delegation}

---

##### `gateway_disabled`<sup>Optional</sup> <a name="gateway_disabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.gatewayDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#gateway_disabled ApiManagement#gateway_disabled}.

---

##### `hostname_configuration`<sup>Optional</sup> <a name="hostname_configuration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.hostnameConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

hostname_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#hostname_configuration ApiManagement#hostname_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#id ApiManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#identity ApiManagement#identity}

---

##### `min_api_version`<sup>Optional</sup> <a name="min_api_version" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.minApiVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#min_api_version ApiManagement#min_api_version}.

---

##### `notification_sender_email`<sup>Optional</sup> <a name="notification_sender_email" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.notificationSenderEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#notification_sender_email ApiManagement#notification_sender_email}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.policy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#policy ApiManagement#policy}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.protocols"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

protocols block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#protocols ApiManagement#protocols}

---

##### `public_ip_address_id`<sup>Optional</sup> <a name="public_ip_address_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.publicIpAddressId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#public_ip_address_id ApiManagement#public_ip_address_id}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#public_network_access_enabled ApiManagement#public_network_access_enabled}.

---

##### `security`<sup>Optional</sup> <a name="security" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.security"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

security block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#security ApiManagement#security}

---

##### `sign_in`<sup>Optional</sup> <a name="sign_in" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.signIn"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#sign_in ApiManagement#sign_in}

---

##### `sign_up`<sup>Optional</sup> <a name="sign_up" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.signUp"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

sign_up block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#sign_up ApiManagement#sign_up}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tags ApiManagement#tags}.

---

##### `tenant_access`<sup>Optional</sup> <a name="tenant_access" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.tenantAccess"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

tenant_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tenant_access ApiManagement#tenant_access}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#timeouts ApiManagement#timeouts}

---

##### `virtual_network_configuration`<sup>Optional</sup> <a name="virtual_network_configuration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.virtualNetworkConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

virtual_network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#virtual_network_configuration ApiManagement#virtual_network_configuration}

---

##### `virtual_network_type`<sup>Optional</sup> <a name="virtual_network_type" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.virtualNetworkType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#virtual_network_type ApiManagement#virtual_network_type}.

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.zones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#zones ApiManagement#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putAdditionalLocation">put_additional_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putCertificate">put_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putDelegation">put_delegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putHostnameConfiguration">put_hostname_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putPolicy">put_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putProtocols">put_protocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity">put_security</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignIn">put_sign_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignUp">put_sign_up</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putTenantAccess">put_tenant_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putVirtualNetworkConfiguration">put_virtual_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetAdditionalLocation">reset_additional_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetClientCertificateEnabled">reset_client_certificate_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetDelegation">reset_delegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetGatewayDisabled">reset_gateway_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetHostnameConfiguration">reset_hostname_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetMinApiVersion">reset_min_api_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetNotificationSenderEmail">reset_notification_sender_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetProtocols">reset_protocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicIpAddressId">reset_public_ip_address_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSecurity">reset_security</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignIn">reset_sign_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignUp">reset_sign_up</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTenantAccess">reset_tenant_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkConfiguration">reset_virtual_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkType">reset_virtual_network_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetZones">reset_zones</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_additional_location` <a name="put_additional_location" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putAdditionalLocation"></a>

```python
def put_additional_location(
  value: typing.Union[IResolvable, typing.List[ApiManagementAdditionalLocation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putAdditionalLocation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>]]

---

##### `put_certificate` <a name="put_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putCertificate"></a>

```python
def put_certificate(
  value: typing.Union[IResolvable, typing.List[ApiManagementCertificate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putCertificate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>]]

---

##### `put_delegation` <a name="put_delegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putDelegation"></a>

```python
def put_delegation(
  subscriptions_enabled: typing.Union[bool, IResolvable] = None,
  url: str = None,
  user_registration_enabled: typing.Union[bool, IResolvable] = None,
  validation_key: str = None
) -> None
```

###### `subscriptions_enabled`<sup>Optional</sup> <a name="subscriptions_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putDelegation.parameter.subscriptionsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#subscriptions_enabled ApiManagement#subscriptions_enabled}.

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putDelegation.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#url ApiManagement#url}.

---

###### `user_registration_enabled`<sup>Optional</sup> <a name="user_registration_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putDelegation.parameter.userRegistrationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#user_registration_enabled ApiManagement#user_registration_enabled}.

---

###### `validation_key`<sup>Optional</sup> <a name="validation_key" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putDelegation.parameter.validationKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#validation_key ApiManagement#validation_key}.

---

##### `put_hostname_configuration` <a name="put_hostname_configuration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putHostnameConfiguration"></a>

```python
def put_hostname_configuration(
  developer_portal: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationDeveloperPortal]] = None,
  management: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationManagement]] = None,
  portal: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationPortal]] = None,
  proxy: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationProxy]] = None,
  scm: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationScm]] = None
) -> None
```

###### `developer_portal`<sup>Optional</sup> <a name="developer_portal" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putHostnameConfiguration.parameter.developerPortal"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>]]

developer_portal block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#developer_portal ApiManagement#developer_portal}

---

###### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putHostnameConfiguration.parameter.management"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>]]

management block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#management ApiManagement#management}

---

###### `portal`<sup>Optional</sup> <a name="portal" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putHostnameConfiguration.parameter.portal"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>]]

portal block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#portal ApiManagement#portal}

---

###### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putHostnameConfiguration.parameter.proxy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>]]

proxy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#proxy ApiManagement#proxy}

---

###### `scm`<sup>Optional</sup> <a name="scm" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putHostnameConfiguration.parameter.scm"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>]]

scm block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#scm ApiManagement#scm}

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#type ApiManagement#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#identity_ids ApiManagement#identity_ids}.

---

##### `put_policy` <a name="put_policy" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putPolicy"></a>

```python
def put_policy(
  value: typing.Union[IResolvable, typing.List[ApiManagementPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>]]

---

##### `put_protocols` <a name="put_protocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putProtocols"></a>

```python
def put_protocols(
  enable_http2: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_http2`<sup>Optional</sup> <a name="enable_http2" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putProtocols.parameter.enableHttp2"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_http2 ApiManagement#enable_http2}.

---

##### `put_security` <a name="put_security" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity"></a>

```python
def put_security(
  enable_backend_ssl30: typing.Union[bool, IResolvable] = None,
  enable_backend_tls10: typing.Union[bool, IResolvable] = None,
  enable_backend_tls11: typing.Union[bool, IResolvable] = None,
  enable_frontend_ssl30: typing.Union[bool, IResolvable] = None,
  enable_frontend_tls10: typing.Union[bool, IResolvable] = None,
  enable_frontend_tls11: typing.Union[bool, IResolvable] = None,
  tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  tls_rsa_with_aes128_cbc_sha256_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  tls_rsa_with_aes128_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  tls_rsa_with_aes128_gcm_sha256_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  tls_rsa_with_aes256_cbc_sha256_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  tls_rsa_with_aes256_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  tls_rsa_with_aes256_gcm_sha384_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  triple_des_ciphers_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_backend_ssl30`<sup>Optional</sup> <a name="enable_backend_ssl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.enableBackendSsl30"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_backend_ssl30 ApiManagement#enable_backend_ssl30}.

---

###### `enable_backend_tls10`<sup>Optional</sup> <a name="enable_backend_tls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.enableBackendTls10"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_backend_tls10 ApiManagement#enable_backend_tls10}.

---

###### `enable_backend_tls11`<sup>Optional</sup> <a name="enable_backend_tls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.enableBackendTls11"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_backend_tls11 ApiManagement#enable_backend_tls11}.

---

###### `enable_frontend_ssl30`<sup>Optional</sup> <a name="enable_frontend_ssl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.enableFrontendSsl30"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_frontend_ssl30 ApiManagement#enable_frontend_ssl30}.

---

###### `enable_frontend_tls10`<sup>Optional</sup> <a name="enable_frontend_tls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.enableFrontendTls10"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_frontend_tls10 ApiManagement#enable_frontend_tls10}.

---

###### `enable_frontend_tls11`<sup>Optional</sup> <a name="enable_frontend_tls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.enableFrontendTls11"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_frontend_tls11 ApiManagement#enable_frontend_tls11}.

---

###### `tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled`<sup>Optional</sup> <a name="tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled}.

---

###### `tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled`<sup>Optional</sup> <a name="tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled}.

---

###### `tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled`<sup>Optional</sup> <a name="tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.tlsEcdheRsaWithAes128CbcShaCiphersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled}.

---

###### `tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled`<sup>Optional</sup> <a name="tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.tlsEcdheRsaWithAes256CbcShaCiphersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled}.

---

###### `tls_rsa_with_aes128_cbc_sha256_ciphers_enabled`<sup>Optional</sup> <a name="tls_rsa_with_aes128_cbc_sha256_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.tlsRsaWithAes128CbcSha256CiphersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled}.

---

###### `tls_rsa_with_aes128_cbc_sha_ciphers_enabled`<sup>Optional</sup> <a name="tls_rsa_with_aes128_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.tlsRsaWithAes128CbcShaCiphersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha_ciphers_enabled}.

---

###### `tls_rsa_with_aes128_gcm_sha256_ciphers_enabled`<sup>Optional</sup> <a name="tls_rsa_with_aes128_gcm_sha256_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.tlsRsaWithAes128GcmSha256CiphersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled}.

---

###### `tls_rsa_with_aes256_cbc_sha256_ciphers_enabled`<sup>Optional</sup> <a name="tls_rsa_with_aes256_cbc_sha256_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.tlsRsaWithAes256CbcSha256CiphersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled}.

---

###### `tls_rsa_with_aes256_cbc_sha_ciphers_enabled`<sup>Optional</sup> <a name="tls_rsa_with_aes256_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.tlsRsaWithAes256CbcShaCiphersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha_ciphers_enabled}.

---

###### `tls_rsa_with_aes256_gcm_sha384_ciphers_enabled`<sup>Optional</sup> <a name="tls_rsa_with_aes256_gcm_sha384_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.tlsRsaWithAes256GcmSha384CiphersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled ApiManagement#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled}.

---

###### `triple_des_ciphers_enabled`<sup>Optional</sup> <a name="triple_des_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.tripleDesCiphersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#triple_des_ciphers_enabled ApiManagement#triple_des_ciphers_enabled}.

---

##### `put_sign_in` <a name="put_sign_in" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignIn"></a>

```python
def put_sign_in(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignIn.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enabled ApiManagement#enabled}.

---

##### `put_sign_up` <a name="put_sign_up" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignUp"></a>

```python
def put_sign_up(
  enabled: typing.Union[bool, IResolvable],
  terms_of_service: ApiManagementSignUpTermsOfService
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignUp.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enabled ApiManagement#enabled}.

---

###### `terms_of_service`<sup>Required</sup> <a name="terms_of_service" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignUp.parameter.termsOfService"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

terms_of_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#terms_of_service ApiManagement#terms_of_service}

---

##### `put_tenant_access` <a name="put_tenant_access" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTenantAccess"></a>

```python
def put_tenant_access(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTenantAccess.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enabled ApiManagement#enabled}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#create ApiManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#delete ApiManagement#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#read ApiManagement#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#update ApiManagement#update}.

---

##### `put_virtual_network_configuration` <a name="put_virtual_network_configuration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putVirtualNetworkConfiguration"></a>

```python
def put_virtual_network_configuration(
  subnet_id: str
) -> None
```

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putVirtualNetworkConfiguration.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#subnet_id ApiManagement#subnet_id}.

---

##### `reset_additional_location` <a name="reset_additional_location" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetAdditionalLocation"></a>

```python
def reset_additional_location() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_client_certificate_enabled` <a name="reset_client_certificate_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetClientCertificateEnabled"></a>

```python
def reset_client_certificate_enabled() -> None
```

##### `reset_delegation` <a name="reset_delegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetDelegation"></a>

```python
def reset_delegation() -> None
```

##### `reset_gateway_disabled` <a name="reset_gateway_disabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetGatewayDisabled"></a>

```python
def reset_gateway_disabled() -> None
```

##### `reset_hostname_configuration` <a name="reset_hostname_configuration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetHostnameConfiguration"></a>

```python
def reset_hostname_configuration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_min_api_version` <a name="reset_min_api_version" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetMinApiVersion"></a>

```python
def reset_min_api_version() -> None
```

##### `reset_notification_sender_email` <a name="reset_notification_sender_email" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetNotificationSenderEmail"></a>

```python
def reset_notification_sender_email() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_protocols` <a name="reset_protocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetProtocols"></a>

```python
def reset_protocols() -> None
```

##### `reset_public_ip_address_id` <a name="reset_public_ip_address_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicIpAddressId"></a>

```python
def reset_public_ip_address_id() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_security` <a name="reset_security" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSecurity"></a>

```python
def reset_security() -> None
```

##### `reset_sign_in` <a name="reset_sign_in" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignIn"></a>

```python
def reset_sign_in() -> None
```

##### `reset_sign_up` <a name="reset_sign_up" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignUp"></a>

```python
def reset_sign_up() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tenant_access` <a name="reset_tenant_access" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTenantAccess"></a>

```python
def reset_tenant_access() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_virtual_network_configuration` <a name="reset_virtual_network_configuration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkConfiguration"></a>

```python
def reset_virtual_network_configuration() -> None
```

##### `reset_virtual_network_type` <a name="reset_virtual_network_type" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkType"></a>

```python
def reset_virtual_network_type() -> None
```

##### `reset_zones` <a name="reset_zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetZones"></a>

```python
def reset_zones() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocation">additional_location</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList">ApiManagementAdditionalLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList">ApiManagementCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegation">delegation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference">ApiManagementDelegationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.developerPortalUrl">developer_portal_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayRegionalUrl">gateway_regional_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayUrl">gateway_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfiguration">hostname_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference">ApiManagementHostnameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference">ApiManagementIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.managementApiUrl">management_api_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList">ApiManagementPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.portalUrl">portal_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.privateIpAddresses">private_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocols">protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference">ApiManagementProtocolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddresses">public_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.scmUrl">scm_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference">ApiManagementSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signIn">sign_in</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference">ApiManagementSignInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUp">sign_up</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference">ApiManagementSignUpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccess">tenant_access</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference">ApiManagementTenantAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference">ApiManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfiguration">virtual_network_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference">ApiManagementVirtualNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocationInput">additional_location_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificateInput">certificate_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabledInput">client_certificate_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegationInput">delegation_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabledInput">gateway_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfigurationInput">hostname_configuration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersionInput">min_api_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmailInput">notification_sender_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.policyInput">policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocolsInput">protocols_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressIdInput">public_ip_address_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmailInput">publisher_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherNameInput">publisher_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.securityInput">security_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signInInput">sign_in_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUpInput">sign_up_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuNameInput">sku_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccessInput">tenant_access_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfigurationInput">virtual_network_configuration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkTypeInput">virtual_network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zonesInput">zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabled">client_certificate_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabled">gateway_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersion">min_api_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmail">notification_sender_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressId">public_ip_address_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmail">publisher_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherName">publisher_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkType">virtual_network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `additional_location`<sup>Required</sup> <a name="additional_location" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocation"></a>

```python
additional_location: ApiManagementAdditionalLocationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList">ApiManagementAdditionalLocationList</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificate"></a>

```python
certificate: ApiManagementCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList">ApiManagementCertificateList</a>

---

##### `delegation`<sup>Required</sup> <a name="delegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegation"></a>

```python
delegation: ApiManagementDelegationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference">ApiManagementDelegationOutputReference</a>

---

##### `developer_portal_url`<sup>Required</sup> <a name="developer_portal_url" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.developerPortalUrl"></a>

```python
developer_portal_url: str
```

- *Type:* str

---

##### `gateway_regional_url`<sup>Required</sup> <a name="gateway_regional_url" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayRegionalUrl"></a>

```python
gateway_regional_url: str
```

- *Type:* str

---

##### `gateway_url`<sup>Required</sup> <a name="gateway_url" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayUrl"></a>

```python
gateway_url: str
```

- *Type:* str

---

##### `hostname_configuration`<sup>Required</sup> <a name="hostname_configuration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfiguration"></a>

```python
hostname_configuration: ApiManagementHostnameConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference">ApiManagementHostnameConfigurationOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identity"></a>

```python
identity: ApiManagementIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference">ApiManagementIdentityOutputReference</a>

---

##### `management_api_url`<sup>Required</sup> <a name="management_api_url" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.managementApiUrl"></a>

```python
management_api_url: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.policy"></a>

```python
policy: ApiManagementPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList">ApiManagementPolicyList</a>

---

##### `portal_url`<sup>Required</sup> <a name="portal_url" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.portalUrl"></a>

```python
portal_url: str
```

- *Type:* str

---

##### `private_ip_addresses`<sup>Required</sup> <a name="private_ip_addresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.privateIpAddresses"></a>

```python
private_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocols"></a>

```python
protocols: ApiManagementProtocolsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference">ApiManagementProtocolsOutputReference</a>

---

##### `public_ip_addresses`<sup>Required</sup> <a name="public_ip_addresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddresses"></a>

```python
public_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scm_url`<sup>Required</sup> <a name="scm_url" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.scmUrl"></a>

```python
scm_url: str
```

- *Type:* str

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.security"></a>

```python
security: ApiManagementSecurityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference">ApiManagementSecurityOutputReference</a>

---

##### `sign_in`<sup>Required</sup> <a name="sign_in" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signIn"></a>

```python
sign_in: ApiManagementSignInOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference">ApiManagementSignInOutputReference</a>

---

##### `sign_up`<sup>Required</sup> <a name="sign_up" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUp"></a>

```python
sign_up: ApiManagementSignUpOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference">ApiManagementSignUpOutputReference</a>

---

##### `tenant_access`<sup>Required</sup> <a name="tenant_access" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccess"></a>

```python
tenant_access: ApiManagementTenantAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference">ApiManagementTenantAccessOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeouts"></a>

```python
timeouts: ApiManagementTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference">ApiManagementTimeoutsOutputReference</a>

---

##### `virtual_network_configuration`<sup>Required</sup> <a name="virtual_network_configuration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfiguration"></a>

```python
virtual_network_configuration: ApiManagementVirtualNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference">ApiManagementVirtualNetworkConfigurationOutputReference</a>

---

##### `additional_location_input`<sup>Optional</sup> <a name="additional_location_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocationInput"></a>

```python
additional_location_input: typing.Union[IResolvable, typing.List[ApiManagementAdditionalLocation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>]]

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificateInput"></a>

```python
certificate_input: typing.Union[IResolvable, typing.List[ApiManagementCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>]]

---

##### `client_certificate_enabled_input`<sup>Optional</sup> <a name="client_certificate_enabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabledInput"></a>

```python
client_certificate_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delegation_input`<sup>Optional</sup> <a name="delegation_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegationInput"></a>

```python
delegation_input: ApiManagementDelegation
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

---

##### `gateway_disabled_input`<sup>Optional</sup> <a name="gateway_disabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabledInput"></a>

```python
gateway_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hostname_configuration_input`<sup>Optional</sup> <a name="hostname_configuration_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfigurationInput"></a>

```python
hostname_configuration_input: ApiManagementHostnameConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identityInput"></a>

```python
identity_input: ApiManagementIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `min_api_version_input`<sup>Optional</sup> <a name="min_api_version_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersionInput"></a>

```python
min_api_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_sender_email_input`<sup>Optional</sup> <a name="notification_sender_email_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmailInput"></a>

```python
notification_sender_email_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.policyInput"></a>

```python
policy_input: typing.Union[IResolvable, typing.List[ApiManagementPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>]]

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocolsInput"></a>

```python
protocols_input: ApiManagementProtocols
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

---

##### `public_ip_address_id_input`<sup>Optional</sup> <a name="public_ip_address_id_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressIdInput"></a>

```python
public_ip_address_id_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `publisher_email_input`<sup>Optional</sup> <a name="publisher_email_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmailInput"></a>

```python
publisher_email_input: str
```

- *Type:* str

---

##### `publisher_name_input`<sup>Optional</sup> <a name="publisher_name_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherNameInput"></a>

```python
publisher_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `security_input`<sup>Optional</sup> <a name="security_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.securityInput"></a>

```python
security_input: ApiManagementSecurity
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

---

##### `sign_in_input`<sup>Optional</sup> <a name="sign_in_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signInInput"></a>

```python
sign_in_input: ApiManagementSignIn
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

---

##### `sign_up_input`<sup>Optional</sup> <a name="sign_up_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUpInput"></a>

```python
sign_up_input: ApiManagementSignUp
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

---

##### `sku_name_input`<sup>Optional</sup> <a name="sku_name_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuNameInput"></a>

```python
sku_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tenant_access_input`<sup>Optional</sup> <a name="tenant_access_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccessInput"></a>

```python
tenant_access_input: ApiManagementTenantAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ApiManagementTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a>, cdktf.IResolvable]

---

##### `virtual_network_configuration_input`<sup>Optional</sup> <a name="virtual_network_configuration_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfigurationInput"></a>

```python
virtual_network_configuration_input: ApiManagementVirtualNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

---

##### `virtual_network_type_input`<sup>Optional</sup> <a name="virtual_network_type_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkTypeInput"></a>

```python
virtual_network_type_input: str
```

- *Type:* str

---

##### `zones_input`<sup>Optional</sup> <a name="zones_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zonesInput"></a>

```python
zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_certificate_enabled`<sup>Required</sup> <a name="client_certificate_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabled"></a>

```python
client_certificate_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gateway_disabled`<sup>Required</sup> <a name="gateway_disabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabled"></a>

```python
gateway_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `min_api_version`<sup>Required</sup> <a name="min_api_version" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersion"></a>

```python
min_api_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notification_sender_email`<sup>Required</sup> <a name="notification_sender_email" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmail"></a>

```python
notification_sender_email: str
```

- *Type:* str

---

##### `public_ip_address_id`<sup>Required</sup> <a name="public_ip_address_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressId"></a>

```python
public_ip_address_id: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `publisher_email`<sup>Required</sup> <a name="publisher_email" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmail"></a>

```python
publisher_email: str
```

- *Type:* str

---

##### `publisher_name`<sup>Required</sup> <a name="publisher_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherName"></a>

```python
publisher_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_network_type`<sup>Required</sup> <a name="virtual_network_type" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkType"></a>

```python
virtual_network_type: str
```

- *Type:* str

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementAdditionalLocation <a name="ApiManagementAdditionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementAdditionalLocation(
  location: str,
  capacity: typing.Union[int, float] = None,
  gateway_disabled: typing.Union[bool, IResolvable] = None,
  public_ip_address_id: str = None,
  virtual_network_configuration: ApiManagementAdditionalLocationVirtualNetworkConfiguration = None,
  zones: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#location ApiManagement#location}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#capacity ApiManagement#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.gatewayDisabled">gateway_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#gateway_disabled ApiManagement#gateway_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.publicIpAddressId">public_ip_address_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#public_ip_address_id ApiManagement#public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.virtualNetworkConfiguration">virtual_network_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a></code> | virtual_network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#zones ApiManagement#zones}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#location ApiManagement#location}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#capacity ApiManagement#capacity}.

---

##### `gateway_disabled`<sup>Optional</sup> <a name="gateway_disabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.gatewayDisabled"></a>

```python
gateway_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#gateway_disabled ApiManagement#gateway_disabled}.

---

##### `public_ip_address_id`<sup>Optional</sup> <a name="public_ip_address_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.publicIpAddressId"></a>

```python
public_ip_address_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#public_ip_address_id ApiManagement#public_ip_address_id}.

---

##### `virtual_network_configuration`<sup>Optional</sup> <a name="virtual_network_configuration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.virtualNetworkConfiguration"></a>

```python
virtual_network_configuration: ApiManagementAdditionalLocationVirtualNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a>

virtual_network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#virtual_network_configuration ApiManagement#virtual_network_configuration}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#zones ApiManagement#zones}.

---

### ApiManagementAdditionalLocationVirtualNetworkConfiguration <a name="ApiManagementAdditionalLocationVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration(
  subnet_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#subnet_id ApiManagement#subnet_id}. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#subnet_id ApiManagement#subnet_id}.

---

### ApiManagementCertificate <a name="ApiManagementCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementCertificate(
  encoded_certificate: str,
  store_name: str,
  certificate_password: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.encodedCertificate">encoded_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#encoded_certificate ApiManagement#encoded_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.storeName">store_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#store_name ApiManagement#store_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.certificatePassword">certificate_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate_password ApiManagement#certificate_password}. |

---

##### `encoded_certificate`<sup>Required</sup> <a name="encoded_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.encodedCertificate"></a>

```python
encoded_certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#encoded_certificate ApiManagement#encoded_certificate}.

---

##### `store_name`<sup>Required</sup> <a name="store_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.storeName"></a>

```python
store_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#store_name ApiManagement#store_name}.

---

##### `certificate_password`<sup>Optional</sup> <a name="certificate_password" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.certificatePassword"></a>

```python
certificate_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate_password ApiManagement#certificate_password}.

---

### ApiManagementConfig <a name="ApiManagementConfig" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  publisher_email: str,
  publisher_name: str,
  resource_group_name: str,
  sku_name: str,
  additional_location: typing.Union[IResolvable, typing.List[ApiManagementAdditionalLocation]] = None,
  certificate: typing.Union[IResolvable, typing.List[ApiManagementCertificate]] = None,
  client_certificate_enabled: typing.Union[bool, IResolvable] = None,
  delegation: ApiManagementDelegation = None,
  gateway_disabled: typing.Union[bool, IResolvable] = None,
  hostname_configuration: ApiManagementHostnameConfiguration = None,
  id: str = None,
  identity: ApiManagementIdentity = None,
  min_api_version: str = None,
  notification_sender_email: str = None,
  policy: typing.Union[IResolvable, typing.List[ApiManagementPolicy]] = None,
  protocols: ApiManagementProtocols = None,
  public_ip_address_id: str = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  security: ApiManagementSecurity = None,
  sign_in: ApiManagementSignIn = None,
  sign_up: ApiManagementSignUp = None,
  tags: typing.Mapping[str] = None,
  tenant_access: ApiManagementTenantAccess = None,
  timeouts: ApiManagementTimeouts = None,
  virtual_network_configuration: ApiManagementVirtualNetworkConfiguration = None,
  virtual_network_type: str = None,
  zones: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#location ApiManagement#location}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#name ApiManagement#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherEmail">publisher_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#publisher_email ApiManagement#publisher_email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherName">publisher_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#publisher_name ApiManagement#publisher_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#resource_group_name ApiManagement#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#sku_name ApiManagement#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.additionalLocation">additional_location</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>]]</code> | additional_location block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.certificate">certificate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>]]</code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.clientCertificateEnabled">client_certificate_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#client_certificate_enabled ApiManagement#client_certificate_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.delegation">delegation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a></code> | delegation block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.gatewayDisabled">gateway_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#gateway_disabled ApiManagement#gateway_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.hostnameConfiguration">hostname_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a></code> | hostname_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#id ApiManagement#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.minApiVersion">min_api_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#min_api_version ApiManagement#min_api_version}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.notificationSenderEmail">notification_sender_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#notification_sender_email ApiManagement#notification_sender_email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.policy">policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#policy ApiManagement#policy}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.protocols">protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a></code> | protocols block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicIpAddressId">public_ip_address_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#public_ip_address_id ApiManagement#public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#public_network_access_enabled ApiManagement#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a></code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signIn">sign_in</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signUp">sign_up</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a></code> | sign_up block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tags ApiManagement#tags}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tenantAccess">tenant_access</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a></code> | tenant_access block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkConfiguration">virtual_network_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a></code> | virtual_network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkType">virtual_network_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#virtual_network_type ApiManagement#virtual_network_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#zones ApiManagement#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#location ApiManagement#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#name ApiManagement#name}.

---

##### `publisher_email`<sup>Required</sup> <a name="publisher_email" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherEmail"></a>

```python
publisher_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#publisher_email ApiManagement#publisher_email}.

---

##### `publisher_name`<sup>Required</sup> <a name="publisher_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherName"></a>

```python
publisher_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#publisher_name ApiManagement#publisher_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#resource_group_name ApiManagement#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#sku_name ApiManagement#sku_name}.

---

##### `additional_location`<sup>Optional</sup> <a name="additional_location" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.additionalLocation"></a>

```python
additional_location: typing.Union[IResolvable, typing.List[ApiManagementAdditionalLocation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>]]

additional_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#additional_location ApiManagement#additional_location}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.certificate"></a>

```python
certificate: typing.Union[IResolvable, typing.List[ApiManagementCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>]]

certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate ApiManagement#certificate}

---

##### `client_certificate_enabled`<sup>Optional</sup> <a name="client_certificate_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.clientCertificateEnabled"></a>

```python
client_certificate_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#client_certificate_enabled ApiManagement#client_certificate_enabled}.

---

##### `delegation`<sup>Optional</sup> <a name="delegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.delegation"></a>

```python
delegation: ApiManagementDelegation
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

delegation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#delegation ApiManagement#delegation}

---

##### `gateway_disabled`<sup>Optional</sup> <a name="gateway_disabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.gatewayDisabled"></a>

```python
gateway_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#gateway_disabled ApiManagement#gateway_disabled}.

---

##### `hostname_configuration`<sup>Optional</sup> <a name="hostname_configuration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.hostnameConfiguration"></a>

```python
hostname_configuration: ApiManagementHostnameConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

hostname_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#hostname_configuration ApiManagement#hostname_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#id ApiManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.identity"></a>

```python
identity: ApiManagementIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#identity ApiManagement#identity}

---

##### `min_api_version`<sup>Optional</sup> <a name="min_api_version" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.minApiVersion"></a>

```python
min_api_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#min_api_version ApiManagement#min_api_version}.

---

##### `notification_sender_email`<sup>Optional</sup> <a name="notification_sender_email" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.notificationSenderEmail"></a>

```python
notification_sender_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#notification_sender_email ApiManagement#notification_sender_email}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.policy"></a>

```python
policy: typing.Union[IResolvable, typing.List[ApiManagementPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#policy ApiManagement#policy}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.protocols"></a>

```python
protocols: ApiManagementProtocols
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

protocols block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#protocols ApiManagement#protocols}

---

##### `public_ip_address_id`<sup>Optional</sup> <a name="public_ip_address_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicIpAddressId"></a>

```python
public_ip_address_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#public_ip_address_id ApiManagement#public_ip_address_id}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#public_network_access_enabled ApiManagement#public_network_access_enabled}.

---

##### `security`<sup>Optional</sup> <a name="security" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.security"></a>

```python
security: ApiManagementSecurity
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

security block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#security ApiManagement#security}

---

##### `sign_in`<sup>Optional</sup> <a name="sign_in" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signIn"></a>

```python
sign_in: ApiManagementSignIn
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#sign_in ApiManagement#sign_in}

---

##### `sign_up`<sup>Optional</sup> <a name="sign_up" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signUp"></a>

```python
sign_up: ApiManagementSignUp
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

sign_up block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#sign_up ApiManagement#sign_up}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tags ApiManagement#tags}.

---

##### `tenant_access`<sup>Optional</sup> <a name="tenant_access" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tenantAccess"></a>

```python
tenant_access: ApiManagementTenantAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

tenant_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tenant_access ApiManagement#tenant_access}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.timeouts"></a>

```python
timeouts: ApiManagementTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#timeouts ApiManagement#timeouts}

---

##### `virtual_network_configuration`<sup>Optional</sup> <a name="virtual_network_configuration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkConfiguration"></a>

```python
virtual_network_configuration: ApiManagementVirtualNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

virtual_network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#virtual_network_configuration ApiManagement#virtual_network_configuration}

---

##### `virtual_network_type`<sup>Optional</sup> <a name="virtual_network_type" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkType"></a>

```python
virtual_network_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#virtual_network_type ApiManagement#virtual_network_type}.

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#zones ApiManagement#zones}.

---

### ApiManagementDelegation <a name="ApiManagementDelegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementDelegation(
  subscriptions_enabled: typing.Union[bool, IResolvable] = None,
  url: str = None,
  user_registration_enabled: typing.Union[bool, IResolvable] = None,
  validation_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.subscriptionsEnabled">subscriptions_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#subscriptions_enabled ApiManagement#subscriptions_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#url ApiManagement#url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.userRegistrationEnabled">user_registration_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#user_registration_enabled ApiManagement#user_registration_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.validationKey">validation_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#validation_key ApiManagement#validation_key}. |

---

##### `subscriptions_enabled`<sup>Optional</sup> <a name="subscriptions_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.subscriptionsEnabled"></a>

```python
subscriptions_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#subscriptions_enabled ApiManagement#subscriptions_enabled}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#url ApiManagement#url}.

---

##### `user_registration_enabled`<sup>Optional</sup> <a name="user_registration_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.userRegistrationEnabled"></a>

```python
user_registration_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#user_registration_enabled ApiManagement#user_registration_enabled}.

---

##### `validation_key`<sup>Optional</sup> <a name="validation_key" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.validationKey"></a>

```python
validation_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#validation_key ApiManagement#validation_key}.

---

### ApiManagementHostnameConfiguration <a name="ApiManagementHostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementHostnameConfiguration(
  developer_portal: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationDeveloperPortal]] = None,
  management: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationManagement]] = None,
  portal: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationPortal]] = None,
  proxy: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationProxy]] = None,
  scm: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationScm]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.developerPortal">developer_portal</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>]]</code> | developer_portal block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.management">management</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>]]</code> | management block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.portal">portal</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>]]</code> | portal block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.proxy">proxy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>]]</code> | proxy block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.scm">scm</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>]]</code> | scm block. |

---

##### `developer_portal`<sup>Optional</sup> <a name="developer_portal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.developerPortal"></a>

```python
developer_portal: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationDeveloperPortal]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>]]

developer_portal block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#developer_portal ApiManagement#developer_portal}

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.management"></a>

```python
management: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationManagement]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>]]

management block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#management ApiManagement#management}

---

##### `portal`<sup>Optional</sup> <a name="portal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.portal"></a>

```python
portal: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationPortal]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>]]

portal block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#portal ApiManagement#portal}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.proxy"></a>

```python
proxy: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationProxy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>]]

proxy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#proxy ApiManagement#proxy}

---

##### `scm`<sup>Optional</sup> <a name="scm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.scm"></a>

```python
scm: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationScm]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>]]

scm block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#scm ApiManagement#scm}

---

### ApiManagementHostnameConfigurationDeveloperPortal <a name="ApiManagementHostnameConfigurationDeveloperPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementHostnameConfigurationDeveloperPortal(
  host_name: str,
  certificate: str = None,
  certificate_password: str = None,
  key_vault_id: str = None,
  negotiate_client_certificate: typing.Union[bool, IResolvable] = None,
  ssl_keyvault_identity_client_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificate">certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificatePassword">certificate_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.negotiateClientCertificate">negotiate_client_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.sslKeyvaultIdentityClientId">ssl_keyvault_identity_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#host_name ApiManagement#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate ApiManagement#certificate}.

---

##### `certificate_password`<sup>Optional</sup> <a name="certificate_password" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificatePassword"></a>

```python
certificate_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `key_vault_id`<sup>Optional</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `negotiate_client_certificate`<sup>Optional</sup> <a name="negotiate_client_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.negotiateClientCertificate"></a>

```python
negotiate_client_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `ssl_keyvault_identity_client_id`<sup>Optional</sup> <a name="ssl_keyvault_identity_client_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.sslKeyvaultIdentityClientId"></a>

```python
ssl_keyvault_identity_client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationManagement <a name="ApiManagementHostnameConfigurationManagement" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementHostnameConfigurationManagement(
  host_name: str,
  certificate: str = None,
  certificate_password: str = None,
  key_vault_id: str = None,
  negotiate_client_certificate: typing.Union[bool, IResolvable] = None,
  ssl_keyvault_identity_client_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificate">certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificatePassword">certificate_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.negotiateClientCertificate">negotiate_client_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.sslKeyvaultIdentityClientId">ssl_keyvault_identity_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#host_name ApiManagement#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate ApiManagement#certificate}.

---

##### `certificate_password`<sup>Optional</sup> <a name="certificate_password" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificatePassword"></a>

```python
certificate_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `key_vault_id`<sup>Optional</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `negotiate_client_certificate`<sup>Optional</sup> <a name="negotiate_client_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.negotiateClientCertificate"></a>

```python
negotiate_client_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `ssl_keyvault_identity_client_id`<sup>Optional</sup> <a name="ssl_keyvault_identity_client_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.sslKeyvaultIdentityClientId"></a>

```python
ssl_keyvault_identity_client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationPortal <a name="ApiManagementHostnameConfigurationPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementHostnameConfigurationPortal(
  host_name: str,
  certificate: str = None,
  certificate_password: str = None,
  key_vault_id: str = None,
  negotiate_client_certificate: typing.Union[bool, IResolvable] = None,
  ssl_keyvault_identity_client_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificate">certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificatePassword">certificate_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.negotiateClientCertificate">negotiate_client_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.sslKeyvaultIdentityClientId">ssl_keyvault_identity_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#host_name ApiManagement#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate ApiManagement#certificate}.

---

##### `certificate_password`<sup>Optional</sup> <a name="certificate_password" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificatePassword"></a>

```python
certificate_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `key_vault_id`<sup>Optional</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `negotiate_client_certificate`<sup>Optional</sup> <a name="negotiate_client_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.negotiateClientCertificate"></a>

```python
negotiate_client_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `ssl_keyvault_identity_client_id`<sup>Optional</sup> <a name="ssl_keyvault_identity_client_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.sslKeyvaultIdentityClientId"></a>

```python
ssl_keyvault_identity_client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationProxy <a name="ApiManagementHostnameConfigurationProxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementHostnameConfigurationProxy(
  host_name: str,
  certificate: str = None,
  certificate_password: str = None,
  default_ssl_binding: typing.Union[bool, IResolvable] = None,
  key_vault_id: str = None,
  negotiate_client_certificate: typing.Union[bool, IResolvable] = None,
  ssl_keyvault_identity_client_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificate">certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificatePassword">certificate_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.defaultSslBinding">default_ssl_binding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#default_ssl_binding ApiManagement#default_ssl_binding}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.negotiateClientCertificate">negotiate_client_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.sslKeyvaultIdentityClientId">ssl_keyvault_identity_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#host_name ApiManagement#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate ApiManagement#certificate}.

---

##### `certificate_password`<sup>Optional</sup> <a name="certificate_password" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificatePassword"></a>

```python
certificate_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `default_ssl_binding`<sup>Optional</sup> <a name="default_ssl_binding" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.defaultSslBinding"></a>

```python
default_ssl_binding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#default_ssl_binding ApiManagement#default_ssl_binding}.

---

##### `key_vault_id`<sup>Optional</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `negotiate_client_certificate`<sup>Optional</sup> <a name="negotiate_client_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.negotiateClientCertificate"></a>

```python
negotiate_client_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `ssl_keyvault_identity_client_id`<sup>Optional</sup> <a name="ssl_keyvault_identity_client_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.sslKeyvaultIdentityClientId"></a>

```python
ssl_keyvault_identity_client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationScm <a name="ApiManagementHostnameConfigurationScm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementHostnameConfigurationScm(
  host_name: str,
  certificate: str = None,
  certificate_password: str = None,
  key_vault_id: str = None,
  negotiate_client_certificate: typing.Union[bool, IResolvable] = None,
  ssl_keyvault_identity_client_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificate">certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificatePassword">certificate_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.negotiateClientCertificate">negotiate_client_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.sslKeyvaultIdentityClientId">ssl_keyvault_identity_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#host_name ApiManagement#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate ApiManagement#certificate}.

---

##### `certificate_password`<sup>Optional</sup> <a name="certificate_password" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificatePassword"></a>

```python
certificate_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `key_vault_id`<sup>Optional</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `negotiate_client_certificate`<sup>Optional</sup> <a name="negotiate_client_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.negotiateClientCertificate"></a>

```python
negotiate_client_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `ssl_keyvault_identity_client_id`<sup>Optional</sup> <a name="ssl_keyvault_identity_client_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.sslKeyvaultIdentityClientId"></a>

```python
ssl_keyvault_identity_client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementIdentity <a name="ApiManagementIdentity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#type ApiManagement#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#identity_ids ApiManagement#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#type ApiManagement#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#identity_ids ApiManagement#identity_ids}.

---

### ApiManagementPolicy <a name="ApiManagementPolicy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementPolicy(
  xml_content: str = None,
  xml_link: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.property.xmlContent">xml_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#xml_content ApiManagement#xml_content}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.property.xmlLink">xml_link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#xml_link ApiManagement#xml_link}. |

---

##### `xml_content`<sup>Optional</sup> <a name="xml_content" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.property.xmlContent"></a>

```python
xml_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#xml_content ApiManagement#xml_content}.

---

##### `xml_link`<sup>Optional</sup> <a name="xml_link" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.property.xmlLink"></a>

```python
xml_link: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#xml_link ApiManagement#xml_link}.

---

### ApiManagementProtocols <a name="ApiManagementProtocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementProtocols(
  enable_http2: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols.property.enableHttp2">enable_http2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_http2 ApiManagement#enable_http2}. |

---

##### `enable_http2`<sup>Optional</sup> <a name="enable_http2" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols.property.enableHttp2"></a>

```python
enable_http2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_http2 ApiManagement#enable_http2}.

---

### ApiManagementSecurity <a name="ApiManagementSecurity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementSecurity(
  enable_backend_ssl30: typing.Union[bool, IResolvable] = None,
  enable_backend_tls10: typing.Union[bool, IResolvable] = None,
  enable_backend_tls11: typing.Union[bool, IResolvable] = None,
  enable_frontend_ssl30: typing.Union[bool, IResolvable] = None,
  enable_frontend_tls10: typing.Union[bool, IResolvable] = None,
  enable_frontend_tls11: typing.Union[bool, IResolvable] = None,
  tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  tls_rsa_with_aes128_cbc_sha256_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  tls_rsa_with_aes128_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  tls_rsa_with_aes128_gcm_sha256_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  tls_rsa_with_aes256_cbc_sha256_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  tls_rsa_with_aes256_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  tls_rsa_with_aes256_gcm_sha384_ciphers_enabled: typing.Union[bool, IResolvable] = None,
  triple_des_ciphers_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendSsl30">enable_backend_ssl30</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_backend_ssl30 ApiManagement#enable_backend_ssl30}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls10">enable_backend_tls10</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_backend_tls10 ApiManagement#enable_backend_tls10}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls11">enable_backend_tls11</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_backend_tls11 ApiManagement#enable_backend_tls11}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendSsl30">enable_frontend_ssl30</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_frontend_ssl30 ApiManagement#enable_frontend_ssl30}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls10">enable_frontend_tls10</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_frontend_tls10 ApiManagement#enable_frontend_tls10}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls11">enable_frontend_tls11</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_frontend_tls11 ApiManagement#enable_frontend_tls11}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled">tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled">tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled">tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled">tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcSha256CiphersEnabled">tls_rsa_with_aes128_cbc_sha256_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcShaCiphersEnabled">tls_rsa_with_aes128_cbc_sha_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128GcmSha256CiphersEnabled">tls_rsa_with_aes128_gcm_sha256_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcSha256CiphersEnabled">tls_rsa_with_aes256_cbc_sha256_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcShaCiphersEnabled">tls_rsa_with_aes256_cbc_sha_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256GcmSha384CiphersEnabled">tls_rsa_with_aes256_gcm_sha384_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled ApiManagement#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tripleDesCiphersEnabled">triple_des_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#triple_des_ciphers_enabled ApiManagement#triple_des_ciphers_enabled}. |

---

##### `enable_backend_ssl30`<sup>Optional</sup> <a name="enable_backend_ssl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendSsl30"></a>

```python
enable_backend_ssl30: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_backend_ssl30 ApiManagement#enable_backend_ssl30}.

---

##### `enable_backend_tls10`<sup>Optional</sup> <a name="enable_backend_tls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls10"></a>

```python
enable_backend_tls10: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_backend_tls10 ApiManagement#enable_backend_tls10}.

---

##### `enable_backend_tls11`<sup>Optional</sup> <a name="enable_backend_tls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls11"></a>

```python
enable_backend_tls11: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_backend_tls11 ApiManagement#enable_backend_tls11}.

---

##### `enable_frontend_ssl30`<sup>Optional</sup> <a name="enable_frontend_ssl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendSsl30"></a>

```python
enable_frontend_ssl30: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_frontend_ssl30 ApiManagement#enable_frontend_ssl30}.

---

##### `enable_frontend_tls10`<sup>Optional</sup> <a name="enable_frontend_tls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls10"></a>

```python
enable_frontend_tls10: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_frontend_tls10 ApiManagement#enable_frontend_tls10}.

---

##### `enable_frontend_tls11`<sup>Optional</sup> <a name="enable_frontend_tls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls11"></a>

```python
enable_frontend_tls11: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enable_frontend_tls11 ApiManagement#enable_frontend_tls11}.

---

##### `tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled`<sup>Optional</sup> <a name="tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled"></a>

```python
tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled}.

---

##### `tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled`<sup>Optional</sup> <a name="tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled"></a>

```python
tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled}.

---

##### `tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled`<sup>Optional</sup> <a name="tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled"></a>

```python
tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled}.

---

##### `tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled`<sup>Optional</sup> <a name="tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled"></a>

```python
tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled}.

---

##### `tls_rsa_with_aes128_cbc_sha256_ciphers_enabled`<sup>Optional</sup> <a name="tls_rsa_with_aes128_cbc_sha256_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcSha256CiphersEnabled"></a>

```python
tls_rsa_with_aes128_cbc_sha256_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled}.

---

##### `tls_rsa_with_aes128_cbc_sha_ciphers_enabled`<sup>Optional</sup> <a name="tls_rsa_with_aes128_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcShaCiphersEnabled"></a>

```python
tls_rsa_with_aes128_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha_ciphers_enabled}.

---

##### `tls_rsa_with_aes128_gcm_sha256_ciphers_enabled`<sup>Optional</sup> <a name="tls_rsa_with_aes128_gcm_sha256_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128GcmSha256CiphersEnabled"></a>

```python
tls_rsa_with_aes128_gcm_sha256_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled}.

---

##### `tls_rsa_with_aes256_cbc_sha256_ciphers_enabled`<sup>Optional</sup> <a name="tls_rsa_with_aes256_cbc_sha256_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcSha256CiphersEnabled"></a>

```python
tls_rsa_with_aes256_cbc_sha256_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled}.

---

##### `tls_rsa_with_aes256_cbc_sha_ciphers_enabled`<sup>Optional</sup> <a name="tls_rsa_with_aes256_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcShaCiphersEnabled"></a>

```python
tls_rsa_with_aes256_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha_ciphers_enabled}.

---

##### `tls_rsa_with_aes256_gcm_sha384_ciphers_enabled`<sup>Optional</sup> <a name="tls_rsa_with_aes256_gcm_sha384_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256GcmSha384CiphersEnabled"></a>

```python
tls_rsa_with_aes256_gcm_sha384_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled ApiManagement#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled}.

---

##### `triple_des_ciphers_enabled`<sup>Optional</sup> <a name="triple_des_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tripleDesCiphersEnabled"></a>

```python
triple_des_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#triple_des_ciphers_enabled ApiManagement#triple_des_ciphers_enabled}.

---

### ApiManagementSignIn <a name="ApiManagementSignIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementSignIn(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enabled ApiManagement#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enabled ApiManagement#enabled}.

---

### ApiManagementSignUp <a name="ApiManagementSignUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementSignUp(
  enabled: typing.Union[bool, IResolvable],
  terms_of_service: ApiManagementSignUpTermsOfService
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enabled ApiManagement#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.termsOfService">terms_of_service</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a></code> | terms_of_service block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enabled ApiManagement#enabled}.

---

##### `terms_of_service`<sup>Required</sup> <a name="terms_of_service" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.termsOfService"></a>

```python
terms_of_service: ApiManagementSignUpTermsOfService
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

terms_of_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#terms_of_service ApiManagement#terms_of_service}

---

### ApiManagementSignUpTermsOfService <a name="ApiManagementSignUpTermsOfService" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementSignUpTermsOfService(
  consent_required: typing.Union[bool, IResolvable],
  enabled: typing.Union[bool, IResolvable],
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.consentRequired">consent_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#consent_required ApiManagement#consent_required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enabled ApiManagement#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.text">text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#text ApiManagement#text}. |

---

##### `consent_required`<sup>Required</sup> <a name="consent_required" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.consentRequired"></a>

```python
consent_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#consent_required ApiManagement#consent_required}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enabled ApiManagement#enabled}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.text"></a>

```python
text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#text ApiManagement#text}.

---

### ApiManagementTenantAccess <a name="ApiManagementTenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementTenantAccess(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enabled ApiManagement#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enabled ApiManagement#enabled}.

---

### ApiManagementTimeouts <a name="ApiManagementTimeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#create ApiManagement#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#delete ApiManagement#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#read ApiManagement#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#update ApiManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#create ApiManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#delete ApiManagement#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#read ApiManagement#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#update ApiManagement#update}.

---

### ApiManagementVirtualNetworkConfiguration <a name="ApiManagementVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementVirtualNetworkConfiguration(
  subnet_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#subnet_id ApiManagement#subnet_id}. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#subnet_id ApiManagement#subnet_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementAdditionalLocationList <a name="ApiManagementAdditionalLocationList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementAdditionalLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementAdditionalLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementAdditionalLocation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>]]

---


### ApiManagementAdditionalLocationOutputReference <a name="ApiManagementAdditionalLocationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementAdditionalLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.putVirtualNetworkConfiguration">put_virtual_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetCapacity">reset_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetGatewayDisabled">reset_gateway_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetPublicIpAddressId">reset_public_ip_address_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetVirtualNetworkConfiguration">reset_virtual_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetZones">reset_zones</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_virtual_network_configuration` <a name="put_virtual_network_configuration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.putVirtualNetworkConfiguration"></a>

```python
def put_virtual_network_configuration(
  subnet_id: str
) -> None
```

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.putVirtualNetworkConfiguration.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#subnet_id ApiManagement#subnet_id}.

---

##### `reset_capacity` <a name="reset_capacity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetCapacity"></a>

```python
def reset_capacity() -> None
```

##### `reset_gateway_disabled` <a name="reset_gateway_disabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetGatewayDisabled"></a>

```python
def reset_gateway_disabled() -> None
```

##### `reset_public_ip_address_id` <a name="reset_public_ip_address_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetPublicIpAddressId"></a>

```python
def reset_public_ip_address_id() -> None
```

##### `reset_virtual_network_configuration` <a name="reset_virtual_network_configuration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetVirtualNetworkConfiguration"></a>

```python
def reset_virtual_network_configuration() -> None
```

##### `reset_zones` <a name="reset_zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetZones"></a>

```python
def reset_zones() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayRegionalUrl">gateway_regional_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.privateIpAddresses">private_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddresses">public_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfiguration">virtual_network_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference">ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacityInput">capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabledInput">gateway_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressIdInput">public_ip_address_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfigurationInput">virtual_network_configuration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zonesInput">zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabled">gateway_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressId">public_ip_address_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gateway_regional_url`<sup>Required</sup> <a name="gateway_regional_url" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayRegionalUrl"></a>

```python
gateway_regional_url: str
```

- *Type:* str

---

##### `private_ip_addresses`<sup>Required</sup> <a name="private_ip_addresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.privateIpAddresses"></a>

```python
private_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `public_ip_addresses`<sup>Required</sup> <a name="public_ip_addresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddresses"></a>

```python
public_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_network_configuration`<sup>Required</sup> <a name="virtual_network_configuration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfiguration"></a>

```python
virtual_network_configuration: ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference">ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference</a>

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacityInput"></a>

```python
capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gateway_disabled_input`<sup>Optional</sup> <a name="gateway_disabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabledInput"></a>

```python
gateway_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `public_ip_address_id_input`<sup>Optional</sup> <a name="public_ip_address_id_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressIdInput"></a>

```python
public_ip_address_id_input: str
```

- *Type:* str

---

##### `virtual_network_configuration_input`<sup>Optional</sup> <a name="virtual_network_configuration_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfigurationInput"></a>

```python
virtual_network_configuration_input: ApiManagementAdditionalLocationVirtualNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a>

---

##### `zones_input`<sup>Optional</sup> <a name="zones_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zonesInput"></a>

```python
zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gateway_disabled`<sup>Required</sup> <a name="gateway_disabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabled"></a>

```python
gateway_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `public_ip_address_id`<sup>Required</sup> <a name="public_ip_address_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressId"></a>

```python
public_ip_address_id: str
```

- *Type:* str

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ApiManagementAdditionalLocation, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>, cdktf.IResolvable]

---


### ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference <a name="ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementAdditionalLocationVirtualNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a>

---


### ApiManagementCertificateList <a name="ApiManagementCertificateList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>]]

---


### ApiManagementCertificateOutputReference <a name="ApiManagementCertificateOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resetCertificatePassword">reset_certificate_password</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_password` <a name="reset_certificate_password" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resetCertificatePassword"></a>

```python
def reset_certificate_password() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.expiry">expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePasswordInput">certificate_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificateInput">encoded_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeNameInput">store_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePassword">certificate_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificate">encoded_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeName">store_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.expiry"></a>

```python
expiry: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `certificate_password_input`<sup>Optional</sup> <a name="certificate_password_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePasswordInput"></a>

```python
certificate_password_input: str
```

- *Type:* str

---

##### `encoded_certificate_input`<sup>Optional</sup> <a name="encoded_certificate_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificateInput"></a>

```python
encoded_certificate_input: str
```

- *Type:* str

---

##### `store_name_input`<sup>Optional</sup> <a name="store_name_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeNameInput"></a>

```python
store_name_input: str
```

- *Type:* str

---

##### `certificate_password`<sup>Required</sup> <a name="certificate_password" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePassword"></a>

```python
certificate_password: str
```

- *Type:* str

---

##### `encoded_certificate`<sup>Required</sup> <a name="encoded_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificate"></a>

```python
encoded_certificate: str
```

- *Type:* str

---

##### `store_name`<sup>Required</sup> <a name="store_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeName"></a>

```python
store_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ApiManagementCertificate, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>, cdktf.IResolvable]

---


### ApiManagementDelegationOutputReference <a name="ApiManagementDelegationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementDelegationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetSubscriptionsEnabled">reset_subscriptions_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUrl">reset_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUserRegistrationEnabled">reset_user_registration_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetValidationKey">reset_validation_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subscriptions_enabled` <a name="reset_subscriptions_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetSubscriptionsEnabled"></a>

```python
def reset_subscriptions_enabled() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```

##### `reset_user_registration_enabled` <a name="reset_user_registration_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUserRegistrationEnabled"></a>

```python
def reset_user_registration_enabled() -> None
```

##### `reset_validation_key` <a name="reset_validation_key" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetValidationKey"></a>

```python
def reset_validation_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabledInput">subscriptions_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabledInput">user_registration_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKeyInput">validation_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabled">subscriptions_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabled">user_registration_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKey">validation_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subscriptions_enabled_input`<sup>Optional</sup> <a name="subscriptions_enabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabledInput"></a>

```python
subscriptions_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `user_registration_enabled_input`<sup>Optional</sup> <a name="user_registration_enabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabledInput"></a>

```python
user_registration_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `validation_key_input`<sup>Optional</sup> <a name="validation_key_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKeyInput"></a>

```python
validation_key_input: str
```

- *Type:* str

---

##### `subscriptions_enabled`<sup>Required</sup> <a name="subscriptions_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabled"></a>

```python
subscriptions_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `user_registration_enabled`<sup>Required</sup> <a name="user_registration_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabled"></a>

```python
user_registration_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `validation_key`<sup>Required</sup> <a name="validation_key" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKey"></a>

```python
validation_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementDelegation
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

---


### ApiManagementHostnameConfigurationDeveloperPortalList <a name="ApiManagementHostnameConfigurationDeveloperPortalList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementHostnameConfigurationDeveloperPortalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationDeveloperPortal]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>]]

---


### ApiManagementHostnameConfigurationDeveloperPortalOutputReference <a name="ApiManagementHostnameConfigurationDeveloperPortalOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificatePassword">reset_certificate_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetKeyVaultId">reset_key_vault_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetNegotiateClientCertificate">reset_negotiate_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetSslKeyvaultIdentityClientId">reset_ssl_keyvault_identity_client_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_certificate_password` <a name="reset_certificate_password" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificatePassword"></a>

```python
def reset_certificate_password() -> None
```

##### `reset_key_vault_id` <a name="reset_key_vault_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetKeyVaultId"></a>

```python
def reset_key_vault_id() -> None
```

##### `reset_negotiate_client_certificate` <a name="reset_negotiate_client_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetNegotiateClientCertificate"></a>

```python
def reset_negotiate_client_certificate() -> None
```

##### `reset_ssl_keyvault_identity_client_id` <a name="reset_ssl_keyvault_identity_client_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetSslKeyvaultIdentityClientId"></a>

```python
def reset_ssl_keyvault_identity_client_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateSource">certificate_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateStatus">certificate_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.expiry">expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePasswordInput">certificate_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultIdInput">key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificateInput">negotiate_client_certificate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientIdInput">ssl_keyvault_identity_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePassword">certificate_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificate">negotiate_client_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientId">ssl_keyvault_identity_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_source`<sup>Required</sup> <a name="certificate_source" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateSource"></a>

```python
certificate_source: str
```

- *Type:* str

---

##### `certificate_status`<sup>Required</sup> <a name="certificate_status" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateStatus"></a>

```python
certificate_status: str
```

- *Type:* str

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.expiry"></a>

```python
expiry: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `certificate_password_input`<sup>Optional</sup> <a name="certificate_password_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePasswordInput"></a>

```python
certificate_password_input: str
```

- *Type:* str

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `key_vault_id_input`<sup>Optional</sup> <a name="key_vault_id_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultIdInput"></a>

```python
key_vault_id_input: str
```

- *Type:* str

---

##### `negotiate_client_certificate_input`<sup>Optional</sup> <a name="negotiate_client_certificate_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificateInput"></a>

```python
negotiate_client_certificate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl_keyvault_identity_client_id_input`<sup>Optional</sup> <a name="ssl_keyvault_identity_client_id_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```python
ssl_keyvault_identity_client_id_input: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `certificate_password`<sup>Required</sup> <a name="certificate_password" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePassword"></a>

```python
certificate_password: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

##### `negotiate_client_certificate`<sup>Required</sup> <a name="negotiate_client_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificate"></a>

```python
negotiate_client_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl_keyvault_identity_client_id`<sup>Required</sup> <a name="ssl_keyvault_identity_client_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientId"></a>

```python
ssl_keyvault_identity_client_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ApiManagementHostnameConfigurationDeveloperPortal, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>, cdktf.IResolvable]

---


### ApiManagementHostnameConfigurationManagementList <a name="ApiManagementHostnameConfigurationManagementList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementHostnameConfigurationManagementList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementHostnameConfigurationManagementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationManagement]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>]]

---


### ApiManagementHostnameConfigurationManagementOutputReference <a name="ApiManagementHostnameConfigurationManagementOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementHostnameConfigurationManagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificatePassword">reset_certificate_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetKeyVaultId">reset_key_vault_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetNegotiateClientCertificate">reset_negotiate_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetSslKeyvaultIdentityClientId">reset_ssl_keyvault_identity_client_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_certificate_password` <a name="reset_certificate_password" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificatePassword"></a>

```python
def reset_certificate_password() -> None
```

##### `reset_key_vault_id` <a name="reset_key_vault_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetKeyVaultId"></a>

```python
def reset_key_vault_id() -> None
```

##### `reset_negotiate_client_certificate` <a name="reset_negotiate_client_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetNegotiateClientCertificate"></a>

```python
def reset_negotiate_client_certificate() -> None
```

##### `reset_ssl_keyvault_identity_client_id` <a name="reset_ssl_keyvault_identity_client_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetSslKeyvaultIdentityClientId"></a>

```python
def reset_ssl_keyvault_identity_client_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateSource">certificate_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateStatus">certificate_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.expiry">expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePasswordInput">certificate_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultIdInput">key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificateInput">negotiate_client_certificate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientIdInput">ssl_keyvault_identity_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePassword">certificate_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificate">negotiate_client_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientId">ssl_keyvault_identity_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_source`<sup>Required</sup> <a name="certificate_source" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateSource"></a>

```python
certificate_source: str
```

- *Type:* str

---

##### `certificate_status`<sup>Required</sup> <a name="certificate_status" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateStatus"></a>

```python
certificate_status: str
```

- *Type:* str

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.expiry"></a>

```python
expiry: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `certificate_password_input`<sup>Optional</sup> <a name="certificate_password_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePasswordInput"></a>

```python
certificate_password_input: str
```

- *Type:* str

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `key_vault_id_input`<sup>Optional</sup> <a name="key_vault_id_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultIdInput"></a>

```python
key_vault_id_input: str
```

- *Type:* str

---

##### `negotiate_client_certificate_input`<sup>Optional</sup> <a name="negotiate_client_certificate_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificateInput"></a>

```python
negotiate_client_certificate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl_keyvault_identity_client_id_input`<sup>Optional</sup> <a name="ssl_keyvault_identity_client_id_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```python
ssl_keyvault_identity_client_id_input: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `certificate_password`<sup>Required</sup> <a name="certificate_password" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePassword"></a>

```python
certificate_password: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

##### `negotiate_client_certificate`<sup>Required</sup> <a name="negotiate_client_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificate"></a>

```python
negotiate_client_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl_keyvault_identity_client_id`<sup>Required</sup> <a name="ssl_keyvault_identity_client_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientId"></a>

```python
ssl_keyvault_identity_client_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ApiManagementHostnameConfigurationManagement, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>, cdktf.IResolvable]

---


### ApiManagementHostnameConfigurationOutputReference <a name="ApiManagementHostnameConfigurationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementHostnameConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putDeveloperPortal">put_developer_portal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putManagement">put_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putPortal">put_portal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putProxy">put_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putScm">put_scm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetDeveloperPortal">reset_developer_portal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetManagement">reset_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetPortal">reset_portal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetProxy">reset_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetScm">reset_scm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_developer_portal` <a name="put_developer_portal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putDeveloperPortal"></a>

```python
def put_developer_portal(
  value: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationDeveloperPortal]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putDeveloperPortal.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>]]

---

##### `put_management` <a name="put_management" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putManagement"></a>

```python
def put_management(
  value: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationManagement]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putManagement.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>]]

---

##### `put_portal` <a name="put_portal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putPortal"></a>

```python
def put_portal(
  value: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationPortal]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putPortal.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>]]

---

##### `put_proxy` <a name="put_proxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putProxy"></a>

```python
def put_proxy(
  value: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationProxy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putProxy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>]]

---

##### `put_scm` <a name="put_scm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putScm"></a>

```python
def put_scm(
  value: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationScm]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putScm.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>]]

---

##### `reset_developer_portal` <a name="reset_developer_portal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetDeveloperPortal"></a>

```python
def reset_developer_portal() -> None
```

##### `reset_management` <a name="reset_management" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetManagement"></a>

```python
def reset_management() -> None
```

##### `reset_portal` <a name="reset_portal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetPortal"></a>

```python
def reset_portal() -> None
```

##### `reset_proxy` <a name="reset_proxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetProxy"></a>

```python
def reset_proxy() -> None
```

##### `reset_scm` <a name="reset_scm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetScm"></a>

```python
def reset_scm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortal">developer_portal</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList">ApiManagementHostnameConfigurationDeveloperPortalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.management">management</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList">ApiManagementHostnameConfigurationManagementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portal">portal</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList">ApiManagementHostnameConfigurationPortalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList">ApiManagementHostnameConfigurationProxyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scm">scm</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList">ApiManagementHostnameConfigurationScmList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortalInput">developer_portal_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.managementInput">management_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portalInput">portal_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxyInput">proxy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scmInput">scm_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `developer_portal`<sup>Required</sup> <a name="developer_portal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortal"></a>

```python
developer_portal: ApiManagementHostnameConfigurationDeveloperPortalList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList">ApiManagementHostnameConfigurationDeveloperPortalList</a>

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.management"></a>

```python
management: ApiManagementHostnameConfigurationManagementList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList">ApiManagementHostnameConfigurationManagementList</a>

---

##### `portal`<sup>Required</sup> <a name="portal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portal"></a>

```python
portal: ApiManagementHostnameConfigurationPortalList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList">ApiManagementHostnameConfigurationPortalList</a>

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxy"></a>

```python
proxy: ApiManagementHostnameConfigurationProxyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList">ApiManagementHostnameConfigurationProxyList</a>

---

##### `scm`<sup>Required</sup> <a name="scm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scm"></a>

```python
scm: ApiManagementHostnameConfigurationScmList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList">ApiManagementHostnameConfigurationScmList</a>

---

##### `developer_portal_input`<sup>Optional</sup> <a name="developer_portal_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortalInput"></a>

```python
developer_portal_input: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationDeveloperPortal]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>]]

---

##### `management_input`<sup>Optional</sup> <a name="management_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.managementInput"></a>

```python
management_input: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationManagement]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>]]

---

##### `portal_input`<sup>Optional</sup> <a name="portal_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portalInput"></a>

```python
portal_input: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationPortal]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>]]

---

##### `proxy_input`<sup>Optional</sup> <a name="proxy_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxyInput"></a>

```python
proxy_input: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationProxy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>]]

---

##### `scm_input`<sup>Optional</sup> <a name="scm_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scmInput"></a>

```python
scm_input: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationScm]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementHostnameConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

---


### ApiManagementHostnameConfigurationPortalList <a name="ApiManagementHostnameConfigurationPortalList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementHostnameConfigurationPortalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementHostnameConfigurationPortalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationPortal]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>]]

---


### ApiManagementHostnameConfigurationPortalOutputReference <a name="ApiManagementHostnameConfigurationPortalOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementHostnameConfigurationPortalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificatePassword">reset_certificate_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetKeyVaultId">reset_key_vault_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetNegotiateClientCertificate">reset_negotiate_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetSslKeyvaultIdentityClientId">reset_ssl_keyvault_identity_client_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_certificate_password` <a name="reset_certificate_password" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificatePassword"></a>

```python
def reset_certificate_password() -> None
```

##### `reset_key_vault_id` <a name="reset_key_vault_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetKeyVaultId"></a>

```python
def reset_key_vault_id() -> None
```

##### `reset_negotiate_client_certificate` <a name="reset_negotiate_client_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetNegotiateClientCertificate"></a>

```python
def reset_negotiate_client_certificate() -> None
```

##### `reset_ssl_keyvault_identity_client_id` <a name="reset_ssl_keyvault_identity_client_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetSslKeyvaultIdentityClientId"></a>

```python
def reset_ssl_keyvault_identity_client_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateSource">certificate_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateStatus">certificate_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.expiry">expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePasswordInput">certificate_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultIdInput">key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificateInput">negotiate_client_certificate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientIdInput">ssl_keyvault_identity_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePassword">certificate_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificate">negotiate_client_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientId">ssl_keyvault_identity_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_source`<sup>Required</sup> <a name="certificate_source" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateSource"></a>

```python
certificate_source: str
```

- *Type:* str

---

##### `certificate_status`<sup>Required</sup> <a name="certificate_status" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateStatus"></a>

```python
certificate_status: str
```

- *Type:* str

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.expiry"></a>

```python
expiry: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `certificate_password_input`<sup>Optional</sup> <a name="certificate_password_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePasswordInput"></a>

```python
certificate_password_input: str
```

- *Type:* str

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `key_vault_id_input`<sup>Optional</sup> <a name="key_vault_id_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultIdInput"></a>

```python
key_vault_id_input: str
```

- *Type:* str

---

##### `negotiate_client_certificate_input`<sup>Optional</sup> <a name="negotiate_client_certificate_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificateInput"></a>

```python
negotiate_client_certificate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl_keyvault_identity_client_id_input`<sup>Optional</sup> <a name="ssl_keyvault_identity_client_id_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```python
ssl_keyvault_identity_client_id_input: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `certificate_password`<sup>Required</sup> <a name="certificate_password" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePassword"></a>

```python
certificate_password: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

##### `negotiate_client_certificate`<sup>Required</sup> <a name="negotiate_client_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificate"></a>

```python
negotiate_client_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl_keyvault_identity_client_id`<sup>Required</sup> <a name="ssl_keyvault_identity_client_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientId"></a>

```python
ssl_keyvault_identity_client_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ApiManagementHostnameConfigurationPortal, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>, cdktf.IResolvable]

---


### ApiManagementHostnameConfigurationProxyList <a name="ApiManagementHostnameConfigurationProxyList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementHostnameConfigurationProxyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementHostnameConfigurationProxyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationProxy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>]]

---


### ApiManagementHostnameConfigurationProxyOutputReference <a name="ApiManagementHostnameConfigurationProxyOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementHostnameConfigurationProxyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificatePassword">reset_certificate_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetDefaultSslBinding">reset_default_ssl_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetKeyVaultId">reset_key_vault_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetNegotiateClientCertificate">reset_negotiate_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetSslKeyvaultIdentityClientId">reset_ssl_keyvault_identity_client_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_certificate_password` <a name="reset_certificate_password" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificatePassword"></a>

```python
def reset_certificate_password() -> None
```

##### `reset_default_ssl_binding` <a name="reset_default_ssl_binding" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetDefaultSslBinding"></a>

```python
def reset_default_ssl_binding() -> None
```

##### `reset_key_vault_id` <a name="reset_key_vault_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetKeyVaultId"></a>

```python
def reset_key_vault_id() -> None
```

##### `reset_negotiate_client_certificate` <a name="reset_negotiate_client_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetNegotiateClientCertificate"></a>

```python
def reset_negotiate_client_certificate() -> None
```

##### `reset_ssl_keyvault_identity_client_id` <a name="reset_ssl_keyvault_identity_client_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetSslKeyvaultIdentityClientId"></a>

```python
def reset_ssl_keyvault_identity_client_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateSource">certificate_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateStatus">certificate_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.expiry">expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePasswordInput">certificate_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBindingInput">default_ssl_binding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultIdInput">key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificateInput">negotiate_client_certificate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientIdInput">ssl_keyvault_identity_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePassword">certificate_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBinding">default_ssl_binding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificate">negotiate_client_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientId">ssl_keyvault_identity_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_source`<sup>Required</sup> <a name="certificate_source" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateSource"></a>

```python
certificate_source: str
```

- *Type:* str

---

##### `certificate_status`<sup>Required</sup> <a name="certificate_status" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateStatus"></a>

```python
certificate_status: str
```

- *Type:* str

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.expiry"></a>

```python
expiry: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `certificate_password_input`<sup>Optional</sup> <a name="certificate_password_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePasswordInput"></a>

```python
certificate_password_input: str
```

- *Type:* str

---

##### `default_ssl_binding_input`<sup>Optional</sup> <a name="default_ssl_binding_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBindingInput"></a>

```python
default_ssl_binding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `key_vault_id_input`<sup>Optional</sup> <a name="key_vault_id_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultIdInput"></a>

```python
key_vault_id_input: str
```

- *Type:* str

---

##### `negotiate_client_certificate_input`<sup>Optional</sup> <a name="negotiate_client_certificate_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificateInput"></a>

```python
negotiate_client_certificate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl_keyvault_identity_client_id_input`<sup>Optional</sup> <a name="ssl_keyvault_identity_client_id_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```python
ssl_keyvault_identity_client_id_input: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `certificate_password`<sup>Required</sup> <a name="certificate_password" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePassword"></a>

```python
certificate_password: str
```

- *Type:* str

---

##### `default_ssl_binding`<sup>Required</sup> <a name="default_ssl_binding" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBinding"></a>

```python
default_ssl_binding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

##### `negotiate_client_certificate`<sup>Required</sup> <a name="negotiate_client_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificate"></a>

```python
negotiate_client_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl_keyvault_identity_client_id`<sup>Required</sup> <a name="ssl_keyvault_identity_client_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientId"></a>

```python
ssl_keyvault_identity_client_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ApiManagementHostnameConfigurationProxy, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>, cdktf.IResolvable]

---


### ApiManagementHostnameConfigurationScmList <a name="ApiManagementHostnameConfigurationScmList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementHostnameConfigurationScmList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementHostnameConfigurationScmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementHostnameConfigurationScm]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>]]

---


### ApiManagementHostnameConfigurationScmOutputReference <a name="ApiManagementHostnameConfigurationScmOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementHostnameConfigurationScmOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificatePassword">reset_certificate_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetKeyVaultId">reset_key_vault_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetNegotiateClientCertificate">reset_negotiate_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetSslKeyvaultIdentityClientId">reset_ssl_keyvault_identity_client_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_certificate_password` <a name="reset_certificate_password" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificatePassword"></a>

```python
def reset_certificate_password() -> None
```

##### `reset_key_vault_id` <a name="reset_key_vault_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetKeyVaultId"></a>

```python
def reset_key_vault_id() -> None
```

##### `reset_negotiate_client_certificate` <a name="reset_negotiate_client_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetNegotiateClientCertificate"></a>

```python
def reset_negotiate_client_certificate() -> None
```

##### `reset_ssl_keyvault_identity_client_id` <a name="reset_ssl_keyvault_identity_client_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetSslKeyvaultIdentityClientId"></a>

```python
def reset_ssl_keyvault_identity_client_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateSource">certificate_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateStatus">certificate_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.expiry">expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePasswordInput">certificate_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultIdInput">key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificateInput">negotiate_client_certificate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientIdInput">ssl_keyvault_identity_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePassword">certificate_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificate">negotiate_client_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientId">ssl_keyvault_identity_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_source`<sup>Required</sup> <a name="certificate_source" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateSource"></a>

```python
certificate_source: str
```

- *Type:* str

---

##### `certificate_status`<sup>Required</sup> <a name="certificate_status" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateStatus"></a>

```python
certificate_status: str
```

- *Type:* str

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.expiry"></a>

```python
expiry: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `certificate_password_input`<sup>Optional</sup> <a name="certificate_password_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePasswordInput"></a>

```python
certificate_password_input: str
```

- *Type:* str

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `key_vault_id_input`<sup>Optional</sup> <a name="key_vault_id_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultIdInput"></a>

```python
key_vault_id_input: str
```

- *Type:* str

---

##### `negotiate_client_certificate_input`<sup>Optional</sup> <a name="negotiate_client_certificate_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificateInput"></a>

```python
negotiate_client_certificate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl_keyvault_identity_client_id_input`<sup>Optional</sup> <a name="ssl_keyvault_identity_client_id_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```python
ssl_keyvault_identity_client_id_input: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `certificate_password`<sup>Required</sup> <a name="certificate_password" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePassword"></a>

```python
certificate_password: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

##### `negotiate_client_certificate`<sup>Required</sup> <a name="negotiate_client_certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificate"></a>

```python
negotiate_client_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl_keyvault_identity_client_id`<sup>Required</sup> <a name="ssl_keyvault_identity_client_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientId"></a>

```python
ssl_keyvault_identity_client_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ApiManagementHostnameConfigurationScm, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>, cdktf.IResolvable]

---


### ApiManagementIdentityOutputReference <a name="ApiManagementIdentityOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

---


### ApiManagementPolicyList <a name="ApiManagementPolicyList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>]]

---


### ApiManagementPolicyOutputReference <a name="ApiManagementPolicyOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resetXmlContent">reset_xml_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resetXmlLink">reset_xml_link</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_xml_content` <a name="reset_xml_content" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resetXmlContent"></a>

```python
def reset_xml_content() -> None
```

##### `reset_xml_link` <a name="reset_xml_link" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resetXmlLink"></a>

```python
def reset_xml_link() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlContentInput">xml_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlLinkInput">xml_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlContent">xml_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlLink">xml_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `xml_content_input`<sup>Optional</sup> <a name="xml_content_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlContentInput"></a>

```python
xml_content_input: str
```

- *Type:* str

---

##### `xml_link_input`<sup>Optional</sup> <a name="xml_link_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlLinkInput"></a>

```python
xml_link_input: str
```

- *Type:* str

---

##### `xml_content`<sup>Required</sup> <a name="xml_content" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlContent"></a>

```python
xml_content: str
```

- *Type:* str

---

##### `xml_link`<sup>Required</sup> <a name="xml_link" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlLink"></a>

```python
xml_link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ApiManagementPolicy, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>, cdktf.IResolvable]

---


### ApiManagementProtocolsOutputReference <a name="ApiManagementProtocolsOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementProtocolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resetEnableHttp2">reset_enable_http2</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_http2` <a name="reset_enable_http2" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resetEnableHttp2"></a>

```python
def reset_enable_http2() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2Input">enable_http2_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2">enable_http2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_http2_input`<sup>Optional</sup> <a name="enable_http2_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2Input"></a>

```python
enable_http2_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_http2`<sup>Required</sup> <a name="enable_http2" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2"></a>

```python
enable_http2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementProtocols
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

---


### ApiManagementSecurityOutputReference <a name="ApiManagementSecurityOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementSecurityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendSsl30">reset_enable_backend_ssl30</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls10">reset_enable_backend_tls10</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls11">reset_enable_backend_tls11</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendSsl30">reset_enable_frontend_ssl30</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls10">reset_enable_frontend_tls10</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls11">reset_enable_frontend_tls11</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled">reset_tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled">reset_tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled">reset_tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled">reset_tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcSha256CiphersEnabled">reset_tls_rsa_with_aes128_cbc_sha256_ciphers_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcShaCiphersEnabled">reset_tls_rsa_with_aes128_cbc_sha_ciphers_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128GcmSha256CiphersEnabled">reset_tls_rsa_with_aes128_gcm_sha256_ciphers_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcSha256CiphersEnabled">reset_tls_rsa_with_aes256_cbc_sha256_ciphers_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcShaCiphersEnabled">reset_tls_rsa_with_aes256_cbc_sha_ciphers_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256GcmSha384CiphersEnabled">reset_tls_rsa_with_aes256_gcm_sha384_ciphers_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTripleDesCiphersEnabled">reset_triple_des_ciphers_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_backend_ssl30` <a name="reset_enable_backend_ssl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendSsl30"></a>

```python
def reset_enable_backend_ssl30() -> None
```

##### `reset_enable_backend_tls10` <a name="reset_enable_backend_tls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls10"></a>

```python
def reset_enable_backend_tls10() -> None
```

##### `reset_enable_backend_tls11` <a name="reset_enable_backend_tls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls11"></a>

```python
def reset_enable_backend_tls11() -> None
```

##### `reset_enable_frontend_ssl30` <a name="reset_enable_frontend_ssl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendSsl30"></a>

```python
def reset_enable_frontend_ssl30() -> None
```

##### `reset_enable_frontend_tls10` <a name="reset_enable_frontend_tls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls10"></a>

```python
def reset_enable_frontend_tls10() -> None
```

##### `reset_enable_frontend_tls11` <a name="reset_enable_frontend_tls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls11"></a>

```python
def reset_enable_frontend_tls11() -> None
```

##### `reset_tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled` <a name="reset_tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled"></a>

```python
def reset_tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled() -> None
```

##### `reset_tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled` <a name="reset_tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled"></a>

```python
def reset_tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled() -> None
```

##### `reset_tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled` <a name="reset_tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled"></a>

```python
def reset_tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled() -> None
```

##### `reset_tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled` <a name="reset_tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled"></a>

```python
def reset_tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled() -> None
```

##### `reset_tls_rsa_with_aes128_cbc_sha256_ciphers_enabled` <a name="reset_tls_rsa_with_aes128_cbc_sha256_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcSha256CiphersEnabled"></a>

```python
def reset_tls_rsa_with_aes128_cbc_sha256_ciphers_enabled() -> None
```

##### `reset_tls_rsa_with_aes128_cbc_sha_ciphers_enabled` <a name="reset_tls_rsa_with_aes128_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcShaCiphersEnabled"></a>

```python
def reset_tls_rsa_with_aes128_cbc_sha_ciphers_enabled() -> None
```

##### `reset_tls_rsa_with_aes128_gcm_sha256_ciphers_enabled` <a name="reset_tls_rsa_with_aes128_gcm_sha256_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128GcmSha256CiphersEnabled"></a>

```python
def reset_tls_rsa_with_aes128_gcm_sha256_ciphers_enabled() -> None
```

##### `reset_tls_rsa_with_aes256_cbc_sha256_ciphers_enabled` <a name="reset_tls_rsa_with_aes256_cbc_sha256_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcSha256CiphersEnabled"></a>

```python
def reset_tls_rsa_with_aes256_cbc_sha256_ciphers_enabled() -> None
```

##### `reset_tls_rsa_with_aes256_cbc_sha_ciphers_enabled` <a name="reset_tls_rsa_with_aes256_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcShaCiphersEnabled"></a>

```python
def reset_tls_rsa_with_aes256_cbc_sha_ciphers_enabled() -> None
```

##### `reset_tls_rsa_with_aes256_gcm_sha384_ciphers_enabled` <a name="reset_tls_rsa_with_aes256_gcm_sha384_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256GcmSha384CiphersEnabled"></a>

```python
def reset_tls_rsa_with_aes256_gcm_sha384_ciphers_enabled() -> None
```

##### `reset_triple_des_ciphers_enabled` <a name="reset_triple_des_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTripleDesCiphersEnabled"></a>

```python
def reset_triple_des_ciphers_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30Input">enable_backend_ssl30_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10Input">enable_backend_tls10_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11Input">enable_backend_tls11_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30Input">enable_frontend_ssl30_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10Input">enable_frontend_tls10_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11Input">enable_frontend_tls11_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput">tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput">tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabledInput">tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabledInput">tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabledInput">tls_rsa_with_aes128_cbc_sha256_ciphers_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabledInput">tls_rsa_with_aes128_cbc_sha_ciphers_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabledInput">tls_rsa_with_aes128_gcm_sha256_ciphers_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabledInput">tls_rsa_with_aes256_cbc_sha256_ciphers_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabledInput">tls_rsa_with_aes256_cbc_sha_ciphers_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabledInput">tls_rsa_with_aes256_gcm_sha384_ciphers_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabledInput">triple_des_ciphers_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30">enable_backend_ssl30</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10">enable_backend_tls10</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11">enable_backend_tls11</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30">enable_frontend_ssl30</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10">enable_frontend_tls10</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11">enable_frontend_tls11</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled">tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled">tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled">tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled">tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabled">tls_rsa_with_aes128_cbc_sha256_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabled">tls_rsa_with_aes128_cbc_sha_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabled">tls_rsa_with_aes128_gcm_sha256_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabled">tls_rsa_with_aes256_cbc_sha256_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabled">tls_rsa_with_aes256_cbc_sha_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabled">tls_rsa_with_aes256_gcm_sha384_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabled">triple_des_ciphers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_backend_ssl30_input`<sup>Optional</sup> <a name="enable_backend_ssl30_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30Input"></a>

```python
enable_backend_ssl30_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_backend_tls10_input`<sup>Optional</sup> <a name="enable_backend_tls10_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10Input"></a>

```python
enable_backend_tls10_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_backend_tls11_input`<sup>Optional</sup> <a name="enable_backend_tls11_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11Input"></a>

```python
enable_backend_tls11_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_frontend_ssl30_input`<sup>Optional</sup> <a name="enable_frontend_ssl30_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30Input"></a>

```python
enable_frontend_ssl30_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_frontend_tls10_input`<sup>Optional</sup> <a name="enable_frontend_tls10_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10Input"></a>

```python
enable_frontend_tls10_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_frontend_tls11_input`<sup>Optional</sup> <a name="enable_frontend_tls11_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11Input"></a>

```python
enable_frontend_tls11_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled_input`<sup>Optional</sup> <a name="tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput"></a>

```python
tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled_input`<sup>Optional</sup> <a name="tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput"></a>

```python
tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled_input`<sup>Optional</sup> <a name="tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabledInput"></a>

```python
tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled_input`<sup>Optional</sup> <a name="tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabledInput"></a>

```python
tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_rsa_with_aes128_cbc_sha256_ciphers_enabled_input`<sup>Optional</sup> <a name="tls_rsa_with_aes128_cbc_sha256_ciphers_enabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabledInput"></a>

```python
tls_rsa_with_aes128_cbc_sha256_ciphers_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_rsa_with_aes128_cbc_sha_ciphers_enabled_input`<sup>Optional</sup> <a name="tls_rsa_with_aes128_cbc_sha_ciphers_enabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabledInput"></a>

```python
tls_rsa_with_aes128_cbc_sha_ciphers_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_rsa_with_aes128_gcm_sha256_ciphers_enabled_input`<sup>Optional</sup> <a name="tls_rsa_with_aes128_gcm_sha256_ciphers_enabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabledInput"></a>

```python
tls_rsa_with_aes128_gcm_sha256_ciphers_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_rsa_with_aes256_cbc_sha256_ciphers_enabled_input`<sup>Optional</sup> <a name="tls_rsa_with_aes256_cbc_sha256_ciphers_enabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabledInput"></a>

```python
tls_rsa_with_aes256_cbc_sha256_ciphers_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_rsa_with_aes256_cbc_sha_ciphers_enabled_input`<sup>Optional</sup> <a name="tls_rsa_with_aes256_cbc_sha_ciphers_enabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabledInput"></a>

```python
tls_rsa_with_aes256_cbc_sha_ciphers_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_rsa_with_aes256_gcm_sha384_ciphers_enabled_input`<sup>Optional</sup> <a name="tls_rsa_with_aes256_gcm_sha384_ciphers_enabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabledInput"></a>

```python
tls_rsa_with_aes256_gcm_sha384_ciphers_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `triple_des_ciphers_enabled_input`<sup>Optional</sup> <a name="triple_des_ciphers_enabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabledInput"></a>

```python
triple_des_ciphers_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_backend_ssl30`<sup>Required</sup> <a name="enable_backend_ssl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30"></a>

```python
enable_backend_ssl30: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_backend_tls10`<sup>Required</sup> <a name="enable_backend_tls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10"></a>

```python
enable_backend_tls10: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_backend_tls11`<sup>Required</sup> <a name="enable_backend_tls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11"></a>

```python
enable_backend_tls11: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_frontend_ssl30`<sup>Required</sup> <a name="enable_frontend_ssl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30"></a>

```python
enable_frontend_ssl30: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_frontend_tls10`<sup>Required</sup> <a name="enable_frontend_tls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10"></a>

```python
enable_frontend_tls10: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_frontend_tls11`<sup>Required</sup> <a name="enable_frontend_tls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11"></a>

```python
enable_frontend_tls11: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled`<sup>Required</sup> <a name="tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled"></a>

```python
tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled`<sup>Required</sup> <a name="tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled"></a>

```python
tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled`<sup>Required</sup> <a name="tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled"></a>

```python
tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled`<sup>Required</sup> <a name="tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled"></a>

```python
tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_rsa_with_aes128_cbc_sha256_ciphers_enabled`<sup>Required</sup> <a name="tls_rsa_with_aes128_cbc_sha256_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabled"></a>

```python
tls_rsa_with_aes128_cbc_sha256_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_rsa_with_aes128_cbc_sha_ciphers_enabled`<sup>Required</sup> <a name="tls_rsa_with_aes128_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabled"></a>

```python
tls_rsa_with_aes128_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_rsa_with_aes128_gcm_sha256_ciphers_enabled`<sup>Required</sup> <a name="tls_rsa_with_aes128_gcm_sha256_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabled"></a>

```python
tls_rsa_with_aes128_gcm_sha256_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_rsa_with_aes256_cbc_sha256_ciphers_enabled`<sup>Required</sup> <a name="tls_rsa_with_aes256_cbc_sha256_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabled"></a>

```python
tls_rsa_with_aes256_cbc_sha256_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_rsa_with_aes256_cbc_sha_ciphers_enabled`<sup>Required</sup> <a name="tls_rsa_with_aes256_cbc_sha_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabled"></a>

```python
tls_rsa_with_aes256_cbc_sha_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_rsa_with_aes256_gcm_sha384_ciphers_enabled`<sup>Required</sup> <a name="tls_rsa_with_aes256_gcm_sha384_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabled"></a>

```python
tls_rsa_with_aes256_gcm_sha384_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `triple_des_ciphers_enabled`<sup>Required</sup> <a name="triple_des_ciphers_enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabled"></a>

```python
triple_des_ciphers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementSecurity
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

---


### ApiManagementSignInOutputReference <a name="ApiManagementSignInOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementSignInOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementSignIn
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

---


### ApiManagementSignUpOutputReference <a name="ApiManagementSignUpOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementSignUpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.putTermsOfService">put_terms_of_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_terms_of_service` <a name="put_terms_of_service" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.putTermsOfService"></a>

```python
def put_terms_of_service(
  consent_required: typing.Union[bool, IResolvable],
  enabled: typing.Union[bool, IResolvable],
  text: str = None
) -> None
```

###### `consent_required`<sup>Required</sup> <a name="consent_required" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.putTermsOfService.parameter.consentRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#consent_required ApiManagement#consent_required}.

---

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.putTermsOfService.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#enabled ApiManagement#enabled}.

---

###### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.putTermsOfService.parameter.text"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management#text ApiManagement#text}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfService">terms_of_service</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference">ApiManagementSignUpTermsOfServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfServiceInput">terms_of_service_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `terms_of_service`<sup>Required</sup> <a name="terms_of_service" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfService"></a>

```python
terms_of_service: ApiManagementSignUpTermsOfServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference">ApiManagementSignUpTermsOfServiceOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `terms_of_service_input`<sup>Optional</sup> <a name="terms_of_service_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfServiceInput"></a>

```python
terms_of_service_input: ApiManagementSignUpTermsOfService
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementSignUp
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

---


### ApiManagementSignUpTermsOfServiceOutputReference <a name="ApiManagementSignUpTermsOfServiceOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementSignUpTermsOfServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_text` <a name="reset_text" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequiredInput">consent_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequired">consent_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consent_required_input`<sup>Optional</sup> <a name="consent_required_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequiredInput"></a>

```python
consent_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `consent_required`<sup>Required</sup> <a name="consent_required" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequired"></a>

```python
consent_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementSignUpTermsOfService
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

---


### ApiManagementTenantAccessOutputReference <a name="ApiManagementTenantAccessOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementTenantAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.secondaryKey">secondary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `secondary_key`<sup>Required</sup> <a name="secondary_key" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.secondaryKey"></a>

```python
secondary_key: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementTenantAccess
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

---


### ApiManagementTimeoutsOutputReference <a name="ApiManagementTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ApiManagementTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a>, cdktf.IResolvable]

---


### ApiManagementVirtualNetworkConfigurationOutputReference <a name="ApiManagementVirtualNetworkConfigurationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management

apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementVirtualNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

---



