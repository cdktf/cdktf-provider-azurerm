# `apiManagementAuthorizationServer` Submodule <a name="`apiManagementAuthorizationServer` Submodule" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementAuthorizationServer <a name="ApiManagementAuthorizationServer" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server azurerm_api_management_authorization_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_authorization_server

apiManagementAuthorizationServer.ApiManagementAuthorizationServer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_management_name: str,
  authorization_endpoint: str,
  authorization_methods: typing.List[str],
  client_id: str,
  client_registration_endpoint: str,
  display_name: str,
  grant_types: typing.List[str],
  name: str,
  resource_group_name: str,
  bearer_token_sending_methods: typing.List[str] = None,
  client_authentication_method: typing.List[str] = None,
  client_secret: str = None,
  default_scope: str = None,
  description: str = None,
  id: str = None,
  resource_owner_password: str = None,
  resource_owner_username: str = None,
  support_state: typing.Union[bool, IResolvable] = None,
  timeouts: ApiManagementAuthorizationServerTimeouts = None,
  token_body_parameter: typing.Union[IResolvable, typing.List[ApiManagementAuthorizationServerTokenBodyParameter]] = None,
  token_endpoint: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.apiManagementName">api_management_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#api_management_name ApiManagementAuthorizationServer#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#authorization_endpoint ApiManagementAuthorizationServer#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.authorizationMethods">authorization_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#authorization_methods ApiManagementAuthorizationServer#authorization_methods}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#client_id ApiManagementAuthorizationServer#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.clientRegistrationEndpoint">client_registration_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#client_registration_endpoint ApiManagementAuthorizationServer#client_registration_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#display_name ApiManagementAuthorizationServer#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.grantTypes">grant_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#grant_types ApiManagementAuthorizationServer#grant_types}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#name ApiManagementAuthorizationServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#resource_group_name ApiManagementAuthorizationServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.bearerTokenSendingMethods">bearer_token_sending_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#bearer_token_sending_methods ApiManagementAuthorizationServer#bearer_token_sending_methods}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.clientAuthenticationMethod">client_authentication_method</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#client_authentication_method ApiManagementAuthorizationServer#client_authentication_method}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#client_secret ApiManagementAuthorizationServer#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.defaultScope">default_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#default_scope ApiManagementAuthorizationServer#default_scope}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#description ApiManagementAuthorizationServer#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#id ApiManagementAuthorizationServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.resourceOwnerPassword">resource_owner_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#resource_owner_password ApiManagementAuthorizationServer#resource_owner_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.resourceOwnerUsername">resource_owner_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#resource_owner_username ApiManagementAuthorizationServer#resource_owner_username}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.supportState">support_state</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#support_state ApiManagementAuthorizationServer#support_state}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.tokenBodyParameter">token_body_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>]]</code> | token_body_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#token_endpoint ApiManagementAuthorizationServer#token_endpoint}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.apiManagementName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#api_management_name ApiManagementAuthorizationServer#api_management_name}.

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.authorizationEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#authorization_endpoint ApiManagementAuthorizationServer#authorization_endpoint}.

---

##### `authorization_methods`<sup>Required</sup> <a name="authorization_methods" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.authorizationMethods"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#authorization_methods ApiManagementAuthorizationServer#authorization_methods}.

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#client_id ApiManagementAuthorizationServer#client_id}.

---

##### `client_registration_endpoint`<sup>Required</sup> <a name="client_registration_endpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.clientRegistrationEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#client_registration_endpoint ApiManagementAuthorizationServer#client_registration_endpoint}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#display_name ApiManagementAuthorizationServer#display_name}.

---

##### `grant_types`<sup>Required</sup> <a name="grant_types" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.grantTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#grant_types ApiManagementAuthorizationServer#grant_types}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#name ApiManagementAuthorizationServer#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#resource_group_name ApiManagementAuthorizationServer#resource_group_name}.

---

##### `bearer_token_sending_methods`<sup>Optional</sup> <a name="bearer_token_sending_methods" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.bearerTokenSendingMethods"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#bearer_token_sending_methods ApiManagementAuthorizationServer#bearer_token_sending_methods}.

---

##### `client_authentication_method`<sup>Optional</sup> <a name="client_authentication_method" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.clientAuthenticationMethod"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#client_authentication_method ApiManagementAuthorizationServer#client_authentication_method}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#client_secret ApiManagementAuthorizationServer#client_secret}.

---

##### `default_scope`<sup>Optional</sup> <a name="default_scope" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.defaultScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#default_scope ApiManagementAuthorizationServer#default_scope}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#description ApiManagementAuthorizationServer#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#id ApiManagementAuthorizationServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_owner_password`<sup>Optional</sup> <a name="resource_owner_password" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.resourceOwnerPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#resource_owner_password ApiManagementAuthorizationServer#resource_owner_password}.

---

##### `resource_owner_username`<sup>Optional</sup> <a name="resource_owner_username" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.resourceOwnerUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#resource_owner_username ApiManagementAuthorizationServer#resource_owner_username}.

---

##### `support_state`<sup>Optional</sup> <a name="support_state" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.supportState"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#support_state ApiManagementAuthorizationServer#support_state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#timeouts ApiManagementAuthorizationServer#timeouts}

---

##### `token_body_parameter`<sup>Optional</sup> <a name="token_body_parameter" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.tokenBodyParameter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>]]

token_body_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#token_body_parameter ApiManagementAuthorizationServer#token_body_parameter}

---

##### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.tokenEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#token_endpoint ApiManagementAuthorizationServer#token_endpoint}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTokenBodyParameter">put_token_body_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetBearerTokenSendingMethods">reset_bearer_token_sending_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetClientAuthenticationMethod">reset_client_authentication_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetDefaultScope">reset_default_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetResourceOwnerPassword">reset_resource_owner_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetResourceOwnerUsername">reset_resource_owner_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetSupportState">reset_support_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetTokenBodyParameter">reset_token_body_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetTokenEndpoint">reset_token_endpoint</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#create ApiManagementAuthorizationServer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#delete ApiManagementAuthorizationServer#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#read ApiManagementAuthorizationServer#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#update ApiManagementAuthorizationServer#update}.

---

##### `put_token_body_parameter` <a name="put_token_body_parameter" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTokenBodyParameter"></a>

```python
def put_token_body_parameter(
  value: typing.Union[IResolvable, typing.List[ApiManagementAuthorizationServerTokenBodyParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTokenBodyParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>]]

---

##### `reset_bearer_token_sending_methods` <a name="reset_bearer_token_sending_methods" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetBearerTokenSendingMethods"></a>

```python
def reset_bearer_token_sending_methods() -> None
```

##### `reset_client_authentication_method` <a name="reset_client_authentication_method" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetClientAuthenticationMethod"></a>

```python
def reset_client_authentication_method() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_default_scope` <a name="reset_default_scope" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetDefaultScope"></a>

```python
def reset_default_scope() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_owner_password` <a name="reset_resource_owner_password" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetResourceOwnerPassword"></a>

```python
def reset_resource_owner_password() -> None
```

##### `reset_resource_owner_username` <a name="reset_resource_owner_username" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetResourceOwnerUsername"></a>

```python
def reset_resource_owner_username() -> None
```

##### `reset_support_state` <a name="reset_support_state" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetSupportState"></a>

```python
def reset_support_state() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_token_body_parameter` <a name="reset_token_body_parameter" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetTokenBodyParameter"></a>

```python
def reset_token_body_parameter() -> None
```

##### `reset_token_endpoint` <a name="reset_token_endpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetTokenEndpoint"></a>

```python
def reset_token_endpoint() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApiManagementAuthorizationServer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_authorization_server

apiManagementAuthorizationServer.ApiManagementAuthorizationServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_authorization_server

apiManagementAuthorizationServer.ApiManagementAuthorizationServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_authorization_server

apiManagementAuthorizationServer.ApiManagementAuthorizationServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_authorization_server

apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApiManagementAuthorizationServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiManagementAuthorizationServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiManagementAuthorizationServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementAuthorizationServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference">ApiManagementAuthorizationServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenBodyParameter">token_body_parameter</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList">ApiManagementAuthorizationServerTokenBodyParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.apiManagementNameInput">api_management_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationEndpointInput">authorization_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationMethodsInput">authorization_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.bearerTokenSendingMethodsInput">bearer_token_sending_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientAuthenticationMethodInput">client_authentication_method_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientRegistrationEndpointInput">client_registration_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.defaultScopeInput">default_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.grantTypesInput">grant_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerPasswordInput">resource_owner_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerUsernameInput">resource_owner_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.supportStateInput">support_state_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenBodyParameterInput">token_body_parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.apiManagementName">api_management_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationMethods">authorization_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.bearerTokenSendingMethods">bearer_token_sending_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientAuthenticationMethod">client_authentication_method</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientRegistrationEndpoint">client_registration_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.defaultScope">default_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.grantTypes">grant_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerPassword">resource_owner_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerUsername">resource_owner_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.supportState">support_state</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.timeouts"></a>

```python
timeouts: ApiManagementAuthorizationServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference">ApiManagementAuthorizationServerTimeoutsOutputReference</a>

---

##### `token_body_parameter`<sup>Required</sup> <a name="token_body_parameter" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenBodyParameter"></a>

```python
token_body_parameter: ApiManagementAuthorizationServerTokenBodyParameterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList">ApiManagementAuthorizationServerTokenBodyParameterList</a>

---

##### `api_management_name_input`<sup>Optional</sup> <a name="api_management_name_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.apiManagementNameInput"></a>

```python
api_management_name_input: str
```

- *Type:* str

---

##### `authorization_endpoint_input`<sup>Optional</sup> <a name="authorization_endpoint_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationEndpointInput"></a>

```python
authorization_endpoint_input: str
```

- *Type:* str

---

##### `authorization_methods_input`<sup>Optional</sup> <a name="authorization_methods_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationMethodsInput"></a>

```python
authorization_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bearer_token_sending_methods_input`<sup>Optional</sup> <a name="bearer_token_sending_methods_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.bearerTokenSendingMethodsInput"></a>

```python
bearer_token_sending_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_authentication_method_input`<sup>Optional</sup> <a name="client_authentication_method_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientAuthenticationMethodInput"></a>

```python
client_authentication_method_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_registration_endpoint_input`<sup>Optional</sup> <a name="client_registration_endpoint_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientRegistrationEndpointInput"></a>

```python
client_registration_endpoint_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `default_scope_input`<sup>Optional</sup> <a name="default_scope_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.defaultScopeInput"></a>

```python
default_scope_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `grant_types_input`<sup>Optional</sup> <a name="grant_types_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.grantTypesInput"></a>

```python
grant_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `resource_owner_password_input`<sup>Optional</sup> <a name="resource_owner_password_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerPasswordInput"></a>

```python
resource_owner_password_input: str
```

- *Type:* str

---

##### `resource_owner_username_input`<sup>Optional</sup> <a name="resource_owner_username_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerUsernameInput"></a>

```python
resource_owner_username_input: str
```

- *Type:* str

---

##### `support_state_input`<sup>Optional</sup> <a name="support_state_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.supportStateInput"></a>

```python
support_state_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApiManagementAuthorizationServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a>]

---

##### `token_body_parameter_input`<sup>Optional</sup> <a name="token_body_parameter_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenBodyParameterInput"></a>

```python
token_body_parameter_input: typing.Union[IResolvable, typing.List[ApiManagementAuthorizationServerTokenBodyParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>]]

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.apiManagementName"></a>

```python
api_management_name: str
```

- *Type:* str

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `authorization_methods`<sup>Required</sup> <a name="authorization_methods" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationMethods"></a>

```python
authorization_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bearer_token_sending_methods`<sup>Required</sup> <a name="bearer_token_sending_methods" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.bearerTokenSendingMethods"></a>

```python
bearer_token_sending_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_authentication_method`<sup>Required</sup> <a name="client_authentication_method" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientAuthenticationMethod"></a>

```python
client_authentication_method: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_registration_endpoint`<sup>Required</sup> <a name="client_registration_endpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientRegistrationEndpoint"></a>

```python
client_registration_endpoint: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `default_scope`<sup>Required</sup> <a name="default_scope" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.defaultScope"></a>

```python
default_scope: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `grant_types`<sup>Required</sup> <a name="grant_types" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.grantTypes"></a>

```python
grant_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `resource_owner_password`<sup>Required</sup> <a name="resource_owner_password" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerPassword"></a>

```python
resource_owner_password: str
```

- *Type:* str

---

##### `resource_owner_username`<sup>Required</sup> <a name="resource_owner_username" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerUsername"></a>

```python
resource_owner_username: str
```

- *Type:* str

---

##### `support_state`<sup>Required</sup> <a name="support_state" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.supportState"></a>

```python
support_state: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementAuthorizationServerConfig <a name="ApiManagementAuthorizationServerConfig" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_authorization_server

apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_management_name: str,
  authorization_endpoint: str,
  authorization_methods: typing.List[str],
  client_id: str,
  client_registration_endpoint: str,
  display_name: str,
  grant_types: typing.List[str],
  name: str,
  resource_group_name: str,
  bearer_token_sending_methods: typing.List[str] = None,
  client_authentication_method: typing.List[str] = None,
  client_secret: str = None,
  default_scope: str = None,
  description: str = None,
  id: str = None,
  resource_owner_password: str = None,
  resource_owner_username: str = None,
  support_state: typing.Union[bool, IResolvable] = None,
  timeouts: ApiManagementAuthorizationServerTimeouts = None,
  token_body_parameter: typing.Union[IResolvable, typing.List[ApiManagementAuthorizationServerTokenBodyParameter]] = None,
  token_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.apiManagementName">api_management_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#api_management_name ApiManagementAuthorizationServer#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#authorization_endpoint ApiManagementAuthorizationServer#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.authorizationMethods">authorization_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#authorization_methods ApiManagementAuthorizationServer#authorization_methods}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#client_id ApiManagementAuthorizationServer#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientRegistrationEndpoint">client_registration_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#client_registration_endpoint ApiManagementAuthorizationServer#client_registration_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#display_name ApiManagementAuthorizationServer#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.grantTypes">grant_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#grant_types ApiManagementAuthorizationServer#grant_types}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#name ApiManagementAuthorizationServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#resource_group_name ApiManagementAuthorizationServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.bearerTokenSendingMethods">bearer_token_sending_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#bearer_token_sending_methods ApiManagementAuthorizationServer#bearer_token_sending_methods}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientAuthenticationMethod">client_authentication_method</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#client_authentication_method ApiManagementAuthorizationServer#client_authentication_method}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#client_secret ApiManagementAuthorizationServer#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.defaultScope">default_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#default_scope ApiManagementAuthorizationServer#default_scope}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#description ApiManagementAuthorizationServer#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#id ApiManagementAuthorizationServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.resourceOwnerPassword">resource_owner_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#resource_owner_password ApiManagementAuthorizationServer#resource_owner_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.resourceOwnerUsername">resource_owner_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#resource_owner_username ApiManagementAuthorizationServer#resource_owner_username}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.supportState">support_state</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#support_state ApiManagementAuthorizationServer#support_state}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.tokenBodyParameter">token_body_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>]]</code> | token_body_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#token_endpoint ApiManagementAuthorizationServer#token_endpoint}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.apiManagementName"></a>

```python
api_management_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#api_management_name ApiManagementAuthorizationServer#api_management_name}.

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#authorization_endpoint ApiManagementAuthorizationServer#authorization_endpoint}.

---

##### `authorization_methods`<sup>Required</sup> <a name="authorization_methods" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.authorizationMethods"></a>

```python
authorization_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#authorization_methods ApiManagementAuthorizationServer#authorization_methods}.

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#client_id ApiManagementAuthorizationServer#client_id}.

---

##### `client_registration_endpoint`<sup>Required</sup> <a name="client_registration_endpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientRegistrationEndpoint"></a>

```python
client_registration_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#client_registration_endpoint ApiManagementAuthorizationServer#client_registration_endpoint}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#display_name ApiManagementAuthorizationServer#display_name}.

---

##### `grant_types`<sup>Required</sup> <a name="grant_types" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.grantTypes"></a>

```python
grant_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#grant_types ApiManagementAuthorizationServer#grant_types}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#name ApiManagementAuthorizationServer#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#resource_group_name ApiManagementAuthorizationServer#resource_group_name}.

---

##### `bearer_token_sending_methods`<sup>Optional</sup> <a name="bearer_token_sending_methods" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.bearerTokenSendingMethods"></a>

```python
bearer_token_sending_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#bearer_token_sending_methods ApiManagementAuthorizationServer#bearer_token_sending_methods}.

---

##### `client_authentication_method`<sup>Optional</sup> <a name="client_authentication_method" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientAuthenticationMethod"></a>

```python
client_authentication_method: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#client_authentication_method ApiManagementAuthorizationServer#client_authentication_method}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#client_secret ApiManagementAuthorizationServer#client_secret}.

---

##### `default_scope`<sup>Optional</sup> <a name="default_scope" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.defaultScope"></a>

```python
default_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#default_scope ApiManagementAuthorizationServer#default_scope}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#description ApiManagementAuthorizationServer#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#id ApiManagementAuthorizationServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_owner_password`<sup>Optional</sup> <a name="resource_owner_password" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.resourceOwnerPassword"></a>

```python
resource_owner_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#resource_owner_password ApiManagementAuthorizationServer#resource_owner_password}.

---

##### `resource_owner_username`<sup>Optional</sup> <a name="resource_owner_username" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.resourceOwnerUsername"></a>

```python
resource_owner_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#resource_owner_username ApiManagementAuthorizationServer#resource_owner_username}.

---

##### `support_state`<sup>Optional</sup> <a name="support_state" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.supportState"></a>

```python
support_state: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#support_state ApiManagementAuthorizationServer#support_state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.timeouts"></a>

```python
timeouts: ApiManagementAuthorizationServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#timeouts ApiManagementAuthorizationServer#timeouts}

---

##### `token_body_parameter`<sup>Optional</sup> <a name="token_body_parameter" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.tokenBodyParameter"></a>

```python
token_body_parameter: typing.Union[IResolvable, typing.List[ApiManagementAuthorizationServerTokenBodyParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>]]

token_body_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#token_body_parameter ApiManagementAuthorizationServer#token_body_parameter}

---

##### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#token_endpoint ApiManagementAuthorizationServer#token_endpoint}.

---

### ApiManagementAuthorizationServerTimeouts <a name="ApiManagementAuthorizationServerTimeouts" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_authorization_server

apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#create ApiManagementAuthorizationServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#delete ApiManagementAuthorizationServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#read ApiManagementAuthorizationServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#update ApiManagementAuthorizationServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#create ApiManagementAuthorizationServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#delete ApiManagementAuthorizationServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#read ApiManagementAuthorizationServer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#update ApiManagementAuthorizationServer#update}.

---

### ApiManagementAuthorizationServerTokenBodyParameter <a name="ApiManagementAuthorizationServerTokenBodyParameter" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_authorization_server

apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#name ApiManagementAuthorizationServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#value ApiManagementAuthorizationServer#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#name ApiManagementAuthorizationServer#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/api_management_authorization_server#value ApiManagementAuthorizationServer#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementAuthorizationServerTimeoutsOutputReference <a name="ApiManagementAuthorizationServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_authorization_server

apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementAuthorizationServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a>]

---


### ApiManagementAuthorizationServerTokenBodyParameterList <a name="ApiManagementAuthorizationServerTokenBodyParameterList" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_authorization_server

apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementAuthorizationServerTokenBodyParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementAuthorizationServerTokenBodyParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>]]

---


### ApiManagementAuthorizationServerTokenBodyParameterOutputReference <a name="ApiManagementAuthorizationServerTokenBodyParameterOutputReference" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_authorization_server

apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementAuthorizationServerTokenBodyParameter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>]

---



