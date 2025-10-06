# `apiManagementAuthorizationServer` Submodule <a name="`apiManagementAuthorizationServer` Submodule" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementAuthorizationServer <a name="ApiManagementAuthorizationServer" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server azurerm_api_management_authorization_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_authorization_server.ApiManagementAuthorizationServer;

ApiManagementAuthorizationServer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiManagementName(java.lang.String)
    .authorizationEndpoint(java.lang.String)
    .authorizationMethods(java.util.List<java.lang.String>)
    .clientId(java.lang.String)
    .clientRegistrationEndpoint(java.lang.String)
    .displayName(java.lang.String)
    .grantTypes(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .bearerTokenSendingMethods(java.util.List<java.lang.String>)
//  .clientAuthenticationMethod(java.util.List<java.lang.String>)
//  .clientSecret(java.lang.String)
//  .defaultScope(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .resourceOwnerPassword(java.lang.String)
//  .resourceOwnerUsername(java.lang.String)
//  .supportState(java.lang.Boolean|IResolvable)
//  .timeouts(ApiManagementAuthorizationServerTimeouts)
//  .tokenBodyParameter(IResolvable|java.util.List<ApiManagementAuthorizationServerTokenBodyParameter>)
//  .tokenEndpoint(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.apiManagementName">apiManagementName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#api_management_name ApiManagementAuthorizationServer#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#authorization_endpoint ApiManagementAuthorizationServer#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.authorizationMethods">authorizationMethods</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#authorization_methods ApiManagementAuthorizationServer#authorization_methods}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#client_id ApiManagementAuthorizationServer#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.clientRegistrationEndpoint">clientRegistrationEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#client_registration_endpoint ApiManagementAuthorizationServer#client_registration_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#display_name ApiManagementAuthorizationServer#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.grantTypes">grantTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#grant_types ApiManagementAuthorizationServer#grant_types}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#name ApiManagementAuthorizationServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#resource_group_name ApiManagementAuthorizationServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.bearerTokenSendingMethods">bearerTokenSendingMethods</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#bearer_token_sending_methods ApiManagementAuthorizationServer#bearer_token_sending_methods}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.clientAuthenticationMethod">clientAuthenticationMethod</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#client_authentication_method ApiManagementAuthorizationServer#client_authentication_method}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#client_secret ApiManagementAuthorizationServer#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.defaultScope">defaultScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#default_scope ApiManagementAuthorizationServer#default_scope}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#description ApiManagementAuthorizationServer#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#id ApiManagementAuthorizationServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.resourceOwnerPassword">resourceOwnerPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#resource_owner_password ApiManagementAuthorizationServer#resource_owner_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.resourceOwnerUsername">resourceOwnerUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#resource_owner_username ApiManagementAuthorizationServer#resource_owner_username}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.supportState">supportState</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#support_state ApiManagementAuthorizationServer#support_state}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.tokenBodyParameter">tokenBodyParameter</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>></code> | token_body_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#token_endpoint ApiManagementAuthorizationServer#token_endpoint}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.apiManagementName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#api_management_name ApiManagementAuthorizationServer#api_management_name}.

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.authorizationEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#authorization_endpoint ApiManagementAuthorizationServer#authorization_endpoint}.

---

##### `authorizationMethods`<sup>Required</sup> <a name="authorizationMethods" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.authorizationMethods"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#authorization_methods ApiManagementAuthorizationServer#authorization_methods}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#client_id ApiManagementAuthorizationServer#client_id}.

---

##### `clientRegistrationEndpoint`<sup>Required</sup> <a name="clientRegistrationEndpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.clientRegistrationEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#client_registration_endpoint ApiManagementAuthorizationServer#client_registration_endpoint}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#display_name ApiManagementAuthorizationServer#display_name}.

---

##### `grantTypes`<sup>Required</sup> <a name="grantTypes" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.grantTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#grant_types ApiManagementAuthorizationServer#grant_types}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#name ApiManagementAuthorizationServer#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#resource_group_name ApiManagementAuthorizationServer#resource_group_name}.

---

##### `bearerTokenSendingMethods`<sup>Optional</sup> <a name="bearerTokenSendingMethods" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.bearerTokenSendingMethods"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#bearer_token_sending_methods ApiManagementAuthorizationServer#bearer_token_sending_methods}.

---

##### `clientAuthenticationMethod`<sup>Optional</sup> <a name="clientAuthenticationMethod" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.clientAuthenticationMethod"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#client_authentication_method ApiManagementAuthorizationServer#client_authentication_method}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#client_secret ApiManagementAuthorizationServer#client_secret}.

---

##### `defaultScope`<sup>Optional</sup> <a name="defaultScope" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.defaultScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#default_scope ApiManagementAuthorizationServer#default_scope}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#description ApiManagementAuthorizationServer#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#id ApiManagementAuthorizationServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceOwnerPassword`<sup>Optional</sup> <a name="resourceOwnerPassword" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.resourceOwnerPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#resource_owner_password ApiManagementAuthorizationServer#resource_owner_password}.

---

##### `resourceOwnerUsername`<sup>Optional</sup> <a name="resourceOwnerUsername" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.resourceOwnerUsername"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#resource_owner_username ApiManagementAuthorizationServer#resource_owner_username}.

---

##### `supportState`<sup>Optional</sup> <a name="supportState" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.supportState"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#support_state ApiManagementAuthorizationServer#support_state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#timeouts ApiManagementAuthorizationServer#timeouts}

---

##### `tokenBodyParameter`<sup>Optional</sup> <a name="tokenBodyParameter" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.tokenBodyParameter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>>

token_body_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#token_body_parameter ApiManagementAuthorizationServer#token_body_parameter}

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.Initializer.parameter.tokenEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#token_endpoint ApiManagementAuthorizationServer#token_endpoint}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTokenBodyParameter">putTokenBodyParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetBearerTokenSendingMethods">resetBearerTokenSendingMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetClientAuthenticationMethod">resetClientAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetDefaultScope">resetDefaultScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetResourceOwnerPassword">resetResourceOwnerPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetResourceOwnerUsername">resetResourceOwnerUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetSupportState">resetSupportState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetTokenBodyParameter">resetTokenBodyParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetTokenEndpoint">resetTokenEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTimeouts"></a>

```java
public void putTimeouts(ApiManagementAuthorizationServerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a>

---

##### `putTokenBodyParameter` <a name="putTokenBodyParameter" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTokenBodyParameter"></a>

```java
public void putTokenBodyParameter(IResolvable|java.util.List<ApiManagementAuthorizationServerTokenBodyParameter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.putTokenBodyParameter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>>

---

##### `resetBearerTokenSendingMethods` <a name="resetBearerTokenSendingMethods" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetBearerTokenSendingMethods"></a>

```java
public void resetBearerTokenSendingMethods()
```

##### `resetClientAuthenticationMethod` <a name="resetClientAuthenticationMethod" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetClientAuthenticationMethod"></a>

```java
public void resetClientAuthenticationMethod()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetDefaultScope` <a name="resetDefaultScope" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetDefaultScope"></a>

```java
public void resetDefaultScope()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetId"></a>

```java
public void resetId()
```

##### `resetResourceOwnerPassword` <a name="resetResourceOwnerPassword" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetResourceOwnerPassword"></a>

```java
public void resetResourceOwnerPassword()
```

##### `resetResourceOwnerUsername` <a name="resetResourceOwnerUsername" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetResourceOwnerUsername"></a>

```java
public void resetResourceOwnerUsername()
```

##### `resetSupportState` <a name="resetSupportState" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetSupportState"></a>

```java
public void resetSupportState()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTokenBodyParameter` <a name="resetTokenBodyParameter" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetTokenBodyParameter"></a>

```java
public void resetTokenBodyParameter()
```

##### `resetTokenEndpoint` <a name="resetTokenEndpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.resetTokenEndpoint"></a>

```java
public void resetTokenEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementAuthorizationServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_authorization_server.ApiManagementAuthorizationServer;

ApiManagementAuthorizationServer.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_authorization_server.ApiManagementAuthorizationServer;

ApiManagementAuthorizationServer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_authorization_server.ApiManagementAuthorizationServer;

ApiManagementAuthorizationServer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_authorization_server.ApiManagementAuthorizationServer;

ApiManagementAuthorizationServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiManagementAuthorizationServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApiManagementAuthorizationServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiManagementAuthorizationServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiManagementAuthorizationServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementAuthorizationServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference">ApiManagementAuthorizationServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenBodyParameter">tokenBodyParameter</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList">ApiManagementAuthorizationServerTokenBodyParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.apiManagementNameInput">apiManagementNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationMethodsInput">authorizationMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.bearerTokenSendingMethodsInput">bearerTokenSendingMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientAuthenticationMethodInput">clientAuthenticationMethodInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientRegistrationEndpointInput">clientRegistrationEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.defaultScopeInput">defaultScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.grantTypesInput">grantTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerPasswordInput">resourceOwnerPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerUsernameInput">resourceOwnerUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.supportStateInput">supportStateInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenBodyParameterInput">tokenBodyParameterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.apiManagementName">apiManagementName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationMethods">authorizationMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.bearerTokenSendingMethods">bearerTokenSendingMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientAuthenticationMethod">clientAuthenticationMethod</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientRegistrationEndpoint">clientRegistrationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.defaultScope">defaultScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.grantTypes">grantTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerPassword">resourceOwnerPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerUsername">resourceOwnerUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.supportState">supportState</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.timeouts"></a>

```java
public ApiManagementAuthorizationServerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference">ApiManagementAuthorizationServerTimeoutsOutputReference</a>

---

##### `tokenBodyParameter`<sup>Required</sup> <a name="tokenBodyParameter" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenBodyParameter"></a>

```java
public ApiManagementAuthorizationServerTokenBodyParameterList getTokenBodyParameter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList">ApiManagementAuthorizationServerTokenBodyParameterList</a>

---

##### `apiManagementNameInput`<sup>Optional</sup> <a name="apiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.apiManagementNameInput"></a>

```java
public java.lang.String getApiManagementNameInput();
```

- *Type:* java.lang.String

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationEndpointInput"></a>

```java
public java.lang.String getAuthorizationEndpointInput();
```

- *Type:* java.lang.String

---

##### `authorizationMethodsInput`<sup>Optional</sup> <a name="authorizationMethodsInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationMethodsInput"></a>

```java
public java.util.List<java.lang.String> getAuthorizationMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bearerTokenSendingMethodsInput`<sup>Optional</sup> <a name="bearerTokenSendingMethodsInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.bearerTokenSendingMethodsInput"></a>

```java
public java.util.List<java.lang.String> getBearerTokenSendingMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientAuthenticationMethodInput`<sup>Optional</sup> <a name="clientAuthenticationMethodInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientAuthenticationMethodInput"></a>

```java
public java.util.List<java.lang.String> getClientAuthenticationMethodInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientRegistrationEndpointInput`<sup>Optional</sup> <a name="clientRegistrationEndpointInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientRegistrationEndpointInput"></a>

```java
public java.lang.String getClientRegistrationEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `defaultScopeInput`<sup>Optional</sup> <a name="defaultScopeInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.defaultScopeInput"></a>

```java
public java.lang.String getDefaultScopeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `grantTypesInput`<sup>Optional</sup> <a name="grantTypesInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.grantTypesInput"></a>

```java
public java.util.List<java.lang.String> getGrantTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `resourceOwnerPasswordInput`<sup>Optional</sup> <a name="resourceOwnerPasswordInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerPasswordInput"></a>

```java
public java.lang.String getResourceOwnerPasswordInput();
```

- *Type:* java.lang.String

---

##### `resourceOwnerUsernameInput`<sup>Optional</sup> <a name="resourceOwnerUsernameInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerUsernameInput"></a>

```java
public java.lang.String getResourceOwnerUsernameInput();
```

- *Type:* java.lang.String

---

##### `supportStateInput`<sup>Optional</sup> <a name="supportStateInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.supportStateInput"></a>

```java
public java.lang.Boolean|IResolvable getSupportStateInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.timeoutsInput"></a>

```java
public IResolvable|ApiManagementAuthorizationServerTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a>

---

##### `tokenBodyParameterInput`<sup>Optional</sup> <a name="tokenBodyParameterInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenBodyParameterInput"></a>

```java
public IResolvable|java.util.List<ApiManagementAuthorizationServerTokenBodyParameter> getTokenBodyParameterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>>

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.apiManagementName"></a>

```java
public java.lang.String getApiManagementName();
```

- *Type:* java.lang.String

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

---

##### `authorizationMethods`<sup>Required</sup> <a name="authorizationMethods" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.authorizationMethods"></a>

```java
public java.util.List<java.lang.String> getAuthorizationMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bearerTokenSendingMethods`<sup>Required</sup> <a name="bearerTokenSendingMethods" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.bearerTokenSendingMethods"></a>

```java
public java.util.List<java.lang.String> getBearerTokenSendingMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientAuthenticationMethod`<sup>Required</sup> <a name="clientAuthenticationMethod" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientAuthenticationMethod"></a>

```java
public java.util.List<java.lang.String> getClientAuthenticationMethod();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientRegistrationEndpoint`<sup>Required</sup> <a name="clientRegistrationEndpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientRegistrationEndpoint"></a>

```java
public java.lang.String getClientRegistrationEndpoint();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `defaultScope`<sup>Required</sup> <a name="defaultScope" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.defaultScope"></a>

```java
public java.lang.String getDefaultScope();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `grantTypes`<sup>Required</sup> <a name="grantTypes" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.grantTypes"></a>

```java
public java.util.List<java.lang.String> getGrantTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `resourceOwnerPassword`<sup>Required</sup> <a name="resourceOwnerPassword" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerPassword"></a>

```java
public java.lang.String getResourceOwnerPassword();
```

- *Type:* java.lang.String

---

##### `resourceOwnerUsername`<sup>Required</sup> <a name="resourceOwnerUsername" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.resourceOwnerUsername"></a>

```java
public java.lang.String getResourceOwnerUsername();
```

- *Type:* java.lang.String

---

##### `supportState`<sup>Required</sup> <a name="supportState" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.supportState"></a>

```java
public java.lang.Boolean|IResolvable getSupportState();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementAuthorizationServerConfig <a name="ApiManagementAuthorizationServerConfig" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_authorization_server.ApiManagementAuthorizationServerConfig;

ApiManagementAuthorizationServerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiManagementName(java.lang.String)
    .authorizationEndpoint(java.lang.String)
    .authorizationMethods(java.util.List<java.lang.String>)
    .clientId(java.lang.String)
    .clientRegistrationEndpoint(java.lang.String)
    .displayName(java.lang.String)
    .grantTypes(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .bearerTokenSendingMethods(java.util.List<java.lang.String>)
//  .clientAuthenticationMethod(java.util.List<java.lang.String>)
//  .clientSecret(java.lang.String)
//  .defaultScope(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .resourceOwnerPassword(java.lang.String)
//  .resourceOwnerUsername(java.lang.String)
//  .supportState(java.lang.Boolean|IResolvable)
//  .timeouts(ApiManagementAuthorizationServerTimeouts)
//  .tokenBodyParameter(IResolvable|java.util.List<ApiManagementAuthorizationServerTokenBodyParameter>)
//  .tokenEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.apiManagementName">apiManagementName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#api_management_name ApiManagementAuthorizationServer#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#authorization_endpoint ApiManagementAuthorizationServer#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.authorizationMethods">authorizationMethods</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#authorization_methods ApiManagementAuthorizationServer#authorization_methods}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#client_id ApiManagementAuthorizationServer#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientRegistrationEndpoint">clientRegistrationEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#client_registration_endpoint ApiManagementAuthorizationServer#client_registration_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#display_name ApiManagementAuthorizationServer#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.grantTypes">grantTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#grant_types ApiManagementAuthorizationServer#grant_types}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#name ApiManagementAuthorizationServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#resource_group_name ApiManagementAuthorizationServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.bearerTokenSendingMethods">bearerTokenSendingMethods</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#bearer_token_sending_methods ApiManagementAuthorizationServer#bearer_token_sending_methods}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientAuthenticationMethod">clientAuthenticationMethod</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#client_authentication_method ApiManagementAuthorizationServer#client_authentication_method}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#client_secret ApiManagementAuthorizationServer#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.defaultScope">defaultScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#default_scope ApiManagementAuthorizationServer#default_scope}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#description ApiManagementAuthorizationServer#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#id ApiManagementAuthorizationServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.resourceOwnerPassword">resourceOwnerPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#resource_owner_password ApiManagementAuthorizationServer#resource_owner_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.resourceOwnerUsername">resourceOwnerUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#resource_owner_username ApiManagementAuthorizationServer#resource_owner_username}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.supportState">supportState</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#support_state ApiManagementAuthorizationServer#support_state}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.tokenBodyParameter">tokenBodyParameter</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>></code> | token_body_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#token_endpoint ApiManagementAuthorizationServer#token_endpoint}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.apiManagementName"></a>

```java
public java.lang.String getApiManagementName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#api_management_name ApiManagementAuthorizationServer#api_management_name}.

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#authorization_endpoint ApiManagementAuthorizationServer#authorization_endpoint}.

---

##### `authorizationMethods`<sup>Required</sup> <a name="authorizationMethods" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.authorizationMethods"></a>

```java
public java.util.List<java.lang.String> getAuthorizationMethods();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#authorization_methods ApiManagementAuthorizationServer#authorization_methods}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#client_id ApiManagementAuthorizationServer#client_id}.

---

##### `clientRegistrationEndpoint`<sup>Required</sup> <a name="clientRegistrationEndpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientRegistrationEndpoint"></a>

```java
public java.lang.String getClientRegistrationEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#client_registration_endpoint ApiManagementAuthorizationServer#client_registration_endpoint}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#display_name ApiManagementAuthorizationServer#display_name}.

---

##### `grantTypes`<sup>Required</sup> <a name="grantTypes" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.grantTypes"></a>

```java
public java.util.List<java.lang.String> getGrantTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#grant_types ApiManagementAuthorizationServer#grant_types}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#name ApiManagementAuthorizationServer#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#resource_group_name ApiManagementAuthorizationServer#resource_group_name}.

---

##### `bearerTokenSendingMethods`<sup>Optional</sup> <a name="bearerTokenSendingMethods" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.bearerTokenSendingMethods"></a>

```java
public java.util.List<java.lang.String> getBearerTokenSendingMethods();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#bearer_token_sending_methods ApiManagementAuthorizationServer#bearer_token_sending_methods}.

---

##### `clientAuthenticationMethod`<sup>Optional</sup> <a name="clientAuthenticationMethod" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientAuthenticationMethod"></a>

```java
public java.util.List<java.lang.String> getClientAuthenticationMethod();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#client_authentication_method ApiManagementAuthorizationServer#client_authentication_method}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#client_secret ApiManagementAuthorizationServer#client_secret}.

---

##### `defaultScope`<sup>Optional</sup> <a name="defaultScope" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.defaultScope"></a>

```java
public java.lang.String getDefaultScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#default_scope ApiManagementAuthorizationServer#default_scope}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#description ApiManagementAuthorizationServer#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#id ApiManagementAuthorizationServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceOwnerPassword`<sup>Optional</sup> <a name="resourceOwnerPassword" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.resourceOwnerPassword"></a>

```java
public java.lang.String getResourceOwnerPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#resource_owner_password ApiManagementAuthorizationServer#resource_owner_password}.

---

##### `resourceOwnerUsername`<sup>Optional</sup> <a name="resourceOwnerUsername" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.resourceOwnerUsername"></a>

```java
public java.lang.String getResourceOwnerUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#resource_owner_username ApiManagementAuthorizationServer#resource_owner_username}.

---

##### `supportState`<sup>Optional</sup> <a name="supportState" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.supportState"></a>

```java
public java.lang.Boolean|IResolvable getSupportState();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#support_state ApiManagementAuthorizationServer#support_state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.timeouts"></a>

```java
public ApiManagementAuthorizationServerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#timeouts ApiManagementAuthorizationServer#timeouts}

---

##### `tokenBodyParameter`<sup>Optional</sup> <a name="tokenBodyParameter" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.tokenBodyParameter"></a>

```java
public IResolvable|java.util.List<ApiManagementAuthorizationServerTokenBodyParameter> getTokenBodyParameter();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>>

token_body_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#token_body_parameter ApiManagementAuthorizationServer#token_body_parameter}

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerConfig.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#token_endpoint ApiManagementAuthorizationServer#token_endpoint}.

---

### ApiManagementAuthorizationServerTimeouts <a name="ApiManagementAuthorizationServerTimeouts" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_authorization_server.ApiManagementAuthorizationServerTimeouts;

ApiManagementAuthorizationServerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#create ApiManagementAuthorizationServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#delete ApiManagementAuthorizationServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#read ApiManagementAuthorizationServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#update ApiManagementAuthorizationServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#create ApiManagementAuthorizationServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#delete ApiManagementAuthorizationServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#read ApiManagementAuthorizationServer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#update ApiManagementAuthorizationServer#update}.

---

### ApiManagementAuthorizationServerTokenBodyParameter <a name="ApiManagementAuthorizationServerTokenBodyParameter" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_authorization_server.ApiManagementAuthorizationServerTokenBodyParameter;

ApiManagementAuthorizationServerTokenBodyParameter.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#name ApiManagementAuthorizationServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#value ApiManagementAuthorizationServer#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#name ApiManagementAuthorizationServer#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/api_management_authorization_server#value ApiManagementAuthorizationServer#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementAuthorizationServerTimeoutsOutputReference <a name="ApiManagementAuthorizationServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_authorization_server.ApiManagementAuthorizationServerTimeoutsOutputReference;

new ApiManagementAuthorizationServerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiManagementAuthorizationServerTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTimeouts">ApiManagementAuthorizationServerTimeouts</a>

---


### ApiManagementAuthorizationServerTokenBodyParameterList <a name="ApiManagementAuthorizationServerTokenBodyParameterList" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_authorization_server.ApiManagementAuthorizationServerTokenBodyParameterList;

new ApiManagementAuthorizationServerTokenBodyParameterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.get"></a>

```java
public ApiManagementAuthorizationServerTokenBodyParameterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApiManagementAuthorizationServerTokenBodyParameter> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>>

---


### ApiManagementAuthorizationServerTokenBodyParameterOutputReference <a name="ApiManagementAuthorizationServerTokenBodyParameterOutputReference" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_authorization_server.ApiManagementAuthorizationServerTokenBodyParameterOutputReference;

new ApiManagementAuthorizationServerTokenBodyParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameterOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiManagementAuthorizationServerTokenBodyParameter getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.apiManagementAuthorizationServer.ApiManagementAuthorizationServerTokenBodyParameter">ApiManagementAuthorizationServerTokenBodyParameter</a>

---



