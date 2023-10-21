# `azurerm_api_management`

Refer to the Terraform Registory for docs: [`azurerm_api_management`](https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management).

# `apiManagement` Submodule <a name="`apiManagement` Submodule" id="@cdktf/provider-azurerm.apiManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagement <a name="ApiManagement" id="@cdktf/provider-azurerm.apiManagement.ApiManagement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management azurerm_api_management}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagement;

ApiManagement.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .publisherEmail(java.lang.String)
    .publisherName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
//  .additionalLocation(IResolvable)
//  .additionalLocation(java.util.List<ApiManagementAdditionalLocation>)
//  .certificate(IResolvable)
//  .certificate(java.util.List<ApiManagementCertificate>)
//  .clientCertificateEnabled(java.lang.Boolean)
//  .clientCertificateEnabled(IResolvable)
//  .delegation(ApiManagementDelegation)
//  .gatewayDisabled(java.lang.Boolean)
//  .gatewayDisabled(IResolvable)
//  .hostnameConfiguration(ApiManagementHostnameConfiguration)
//  .id(java.lang.String)
//  .identity(ApiManagementIdentity)
//  .minApiVersion(java.lang.String)
//  .notificationSenderEmail(java.lang.String)
//  .policy(IResolvable)
//  .policy(java.util.List<ApiManagementPolicy>)
//  .protocols(ApiManagementProtocols)
//  .publicIpAddressId(java.lang.String)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .security(ApiManagementSecurity)
//  .signIn(ApiManagementSignIn)
//  .signUp(ApiManagementSignUp)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tenantAccess(ApiManagementTenantAccess)
//  .timeouts(ApiManagementTimeouts)
//  .virtualNetworkConfiguration(ApiManagementVirtualNetworkConfiguration)
//  .virtualNetworkType(java.lang.String)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#location ApiManagement#location}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#name ApiManagement#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.publisherEmail">publisherEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#publisher_email ApiManagement#publisher_email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.publisherName">publisherName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#publisher_name ApiManagement#publisher_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#resource_group_name ApiManagement#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#sku_name ApiManagement#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.additionalLocation">additionalLocation</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>></code> | additional_location block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.certificate">certificate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>></code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.clientCertificateEnabled">clientCertificateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#client_certificate_enabled ApiManagement#client_certificate_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.delegation">delegation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a></code> | delegation block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.gatewayDisabled">gatewayDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.hostnameConfiguration">hostnameConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a></code> | hostname_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#id ApiManagement#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.minApiVersion">minApiVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#min_api_version ApiManagement#min_api_version}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.notificationSenderEmail">notificationSenderEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#notification_sender_email ApiManagement#notification_sender_email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.policy">policy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#policy ApiManagement#policy}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.protocols">protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a></code> | protocols block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.publicIpAddressId">publicIpAddressId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#public_network_access_enabled ApiManagement#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a></code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.signIn">signIn</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.signUp">signUp</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a></code> | sign_up block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tags ApiManagement#tags}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.tenantAccess">tenantAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a></code> | tenant_access block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.virtualNetworkConfiguration">virtualNetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a></code> | virtual_network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.virtualNetworkType">virtualNetworkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#virtual_network_type ApiManagement#virtual_network_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#zones ApiManagement#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#location ApiManagement#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#name ApiManagement#name}.

---

##### `publisherEmail`<sup>Required</sup> <a name="publisherEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.publisherEmail"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#publisher_email ApiManagement#publisher_email}.

---

##### `publisherName`<sup>Required</sup> <a name="publisherName" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.publisherName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#publisher_name ApiManagement#publisher_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#resource_group_name ApiManagement#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.skuName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#sku_name ApiManagement#sku_name}.

---

##### `additionalLocation`<sup>Optional</sup> <a name="additionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.additionalLocation"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>>

additional_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#additional_location ApiManagement#additional_location}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.certificate"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate ApiManagement#certificate}

---

##### `clientCertificateEnabled`<sup>Optional</sup> <a name="clientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.clientCertificateEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#client_certificate_enabled ApiManagement#client_certificate_enabled}.

---

##### `delegation`<sup>Optional</sup> <a name="delegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.delegation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#delegation ApiManagement#delegation}

---

##### `gatewayDisabled`<sup>Optional</sup> <a name="gatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.gatewayDisabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}.

---

##### `hostnameConfiguration`<sup>Optional</sup> <a name="hostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.hostnameConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

hostname_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#hostname_configuration ApiManagement#hostname_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#id ApiManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#identity ApiManagement#identity}

---

##### `minApiVersion`<sup>Optional</sup> <a name="minApiVersion" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.minApiVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#min_api_version ApiManagement#min_api_version}.

---

##### `notificationSenderEmail`<sup>Optional</sup> <a name="notificationSenderEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.notificationSenderEmail"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#notification_sender_email ApiManagement#notification_sender_email}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.policy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#policy ApiManagement#policy}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.protocols"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

protocols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#protocols ApiManagement#protocols}

---

##### `publicIpAddressId`<sup>Optional</sup> <a name="publicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.publicIpAddressId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#public_network_access_enabled ApiManagement#public_network_access_enabled}.

---

##### `security`<sup>Optional</sup> <a name="security" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.security"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#security ApiManagement#security}

---

##### `signIn`<sup>Optional</sup> <a name="signIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.signIn"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#sign_in ApiManagement#sign_in}

---

##### `signUp`<sup>Optional</sup> <a name="signUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.signUp"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

sign_up block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#sign_up ApiManagement#sign_up}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tags ApiManagement#tags}.

---

##### `tenantAccess`<sup>Optional</sup> <a name="tenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.tenantAccess"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

tenant_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tenant_access ApiManagement#tenant_access}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#timeouts ApiManagement#timeouts}

---

##### `virtualNetworkConfiguration`<sup>Optional</sup> <a name="virtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.virtualNetworkConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

virtual_network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#virtual_network_configuration ApiManagement#virtual_network_configuration}

---

##### `virtualNetworkType`<sup>Optional</sup> <a name="virtualNetworkType" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.virtualNetworkType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#virtual_network_type ApiManagement#virtual_network_type}.

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.Initializer.parameter.zones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#zones ApiManagement#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putAdditionalLocation">putAdditionalLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putCertificate">putCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putDelegation">putDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putHostnameConfiguration">putHostnameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putProtocols">putProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity">putSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignIn">putSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignUp">putSignUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putTenantAccess">putTenantAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.putVirtualNetworkConfiguration">putVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetAdditionalLocation">resetAdditionalLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetClientCertificateEnabled">resetClientCertificateEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetDelegation">resetDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetGatewayDisabled">resetGatewayDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetHostnameConfiguration">resetHostnameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetMinApiVersion">resetMinApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetNotificationSenderEmail">resetNotificationSenderEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicIpAddressId">resetPublicIpAddressId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSecurity">resetSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignIn">resetSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignUp">resetSignUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTenantAccess">resetTenantAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkConfiguration">resetVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkType">resetVirtualNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putAdditionalLocation` <a name="putAdditionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putAdditionalLocation"></a>

```java
public void putAdditionalLocation(IResolvable OR java.util.List<ApiManagementAdditionalLocation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putAdditionalLocation.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>>

---

##### `putCertificate` <a name="putCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putCertificate"></a>

```java
public void putCertificate(IResolvable OR java.util.List<ApiManagementCertificate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putCertificate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>>

---

##### `putDelegation` <a name="putDelegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putDelegation"></a>

```java
public void putDelegation(ApiManagementDelegation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putDelegation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

---

##### `putHostnameConfiguration` <a name="putHostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putHostnameConfiguration"></a>

```java
public void putHostnameConfiguration(ApiManagementHostnameConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putHostnameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putIdentity"></a>

```java
public void putIdentity(ApiManagementIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

---

##### `putPolicy` <a name="putPolicy" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putPolicy"></a>

```java
public void putPolicy(IResolvable OR java.util.List<ApiManagementPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>>

---

##### `putProtocols` <a name="putProtocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putProtocols"></a>

```java
public void putProtocols(ApiManagementProtocols value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putProtocols.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

---

##### `putSecurity` <a name="putSecurity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity"></a>

```java
public void putSecurity(ApiManagementSecurity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

---

##### `putSignIn` <a name="putSignIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignIn"></a>

```java
public void putSignIn(ApiManagementSignIn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

---

##### `putSignUp` <a name="putSignUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignUp"></a>

```java
public void putSignUp(ApiManagementSignUp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putSignUp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

---

##### `putTenantAccess` <a name="putTenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTenantAccess"></a>

```java
public void putTenantAccess(ApiManagementTenantAccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTenantAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTimeouts"></a>

```java
public void putTimeouts(ApiManagementTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a>

---

##### `putVirtualNetworkConfiguration` <a name="putVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putVirtualNetworkConfiguration"></a>

```java
public void putVirtualNetworkConfiguration(ApiManagementVirtualNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.putVirtualNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

---

##### `resetAdditionalLocation` <a name="resetAdditionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetAdditionalLocation"></a>

```java
public void resetAdditionalLocation()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetClientCertificateEnabled` <a name="resetClientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetClientCertificateEnabled"></a>

```java
public void resetClientCertificateEnabled()
```

##### `resetDelegation` <a name="resetDelegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetDelegation"></a>

```java
public void resetDelegation()
```

##### `resetGatewayDisabled` <a name="resetGatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetGatewayDisabled"></a>

```java
public void resetGatewayDisabled()
```

##### `resetHostnameConfiguration` <a name="resetHostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetHostnameConfiguration"></a>

```java
public void resetHostnameConfiguration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetMinApiVersion` <a name="resetMinApiVersion" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetMinApiVersion"></a>

```java
public void resetMinApiVersion()
```

##### `resetNotificationSenderEmail` <a name="resetNotificationSenderEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetNotificationSenderEmail"></a>

```java
public void resetNotificationSenderEmail()
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPolicy"></a>

```java
public void resetPolicy()
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetProtocols"></a>

```java
public void resetProtocols()
```

##### `resetPublicIpAddressId` <a name="resetPublicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicIpAddressId"></a>

```java
public void resetPublicIpAddressId()
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetPublicNetworkAccessEnabled"></a>

```java
public void resetPublicNetworkAccessEnabled()
```

##### `resetSecurity` <a name="resetSecurity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSecurity"></a>

```java
public void resetSecurity()
```

##### `resetSignIn` <a name="resetSignIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignIn"></a>

```java
public void resetSignIn()
```

##### `resetSignUp` <a name="resetSignUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetSignUp"></a>

```java
public void resetSignUp()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTags"></a>

```java
public void resetTags()
```

##### `resetTenantAccess` <a name="resetTenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTenantAccess"></a>

```java
public void resetTenantAccess()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVirtualNetworkConfiguration` <a name="resetVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkConfiguration"></a>

```java
public void resetVirtualNetworkConfiguration()
```

##### `resetVirtualNetworkType` <a name="resetVirtualNetworkType" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetVirtualNetworkType"></a>

```java
public void resetVirtualNetworkType()
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.resetZones"></a>

```java
public void resetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagement;

ApiManagement.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagement;

ApiManagement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagement;

ApiManagement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagement;

ApiManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApiManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocation">additionalLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList">ApiManagementAdditionalLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList">ApiManagementCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegation">delegation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference">ApiManagementDelegationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.developerPortalUrl">developerPortalUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayRegionalUrl">gatewayRegionalUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayUrl">gatewayUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfiguration">hostnameConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference">ApiManagementHostnameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference">ApiManagementIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.managementApiUrl">managementApiUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList">ApiManagementPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.portalUrl">portalUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.privateIpAddresses">privateIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocols">protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference">ApiManagementProtocolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddresses">publicIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.scmUrl">scmUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference">ApiManagementSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signIn">signIn</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference">ApiManagementSignInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUp">signUp</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference">ApiManagementSignUpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccess">tenantAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference">ApiManagementTenantAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference">ApiManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfiguration">virtualNetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference">ApiManagementVirtualNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocationInput">additionalLocationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificateInput">certificateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabledInput">clientCertificateEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegationInput">delegationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabledInput">gatewayDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfigurationInput">hostnameConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersionInput">minApiVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmailInput">notificationSenderEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.policyInput">policyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocolsInput">protocolsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressIdInput">publicIpAddressIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmailInput">publisherEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherNameInput">publisherNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.securityInput">securityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signInInput">signInInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUpInput">signUpInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuNameInput">skuNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccessInput">tenantAccessInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfigurationInput">virtualNetworkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkTypeInput">virtualNetworkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zonesInput">zonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabled">clientCertificateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabled">gatewayDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersion">minApiVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmail">notificationSenderEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressId">publicIpAddressId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmail">publisherEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherName">publisherName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkType">virtualNetworkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalLocation`<sup>Required</sup> <a name="additionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocation"></a>

```java
public ApiManagementAdditionalLocationList getAdditionalLocation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList">ApiManagementAdditionalLocationList</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificate"></a>

```java
public ApiManagementCertificateList getCertificate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList">ApiManagementCertificateList</a>

---

##### `delegation`<sup>Required</sup> <a name="delegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegation"></a>

```java
public ApiManagementDelegationOutputReference getDelegation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference">ApiManagementDelegationOutputReference</a>

---

##### `developerPortalUrl`<sup>Required</sup> <a name="developerPortalUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.developerPortalUrl"></a>

```java
public java.lang.String getDeveloperPortalUrl();
```

- *Type:* java.lang.String

---

##### `gatewayRegionalUrl`<sup>Required</sup> <a name="gatewayRegionalUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayRegionalUrl"></a>

```java
public java.lang.String getGatewayRegionalUrl();
```

- *Type:* java.lang.String

---

##### `gatewayUrl`<sup>Required</sup> <a name="gatewayUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayUrl"></a>

```java
public java.lang.String getGatewayUrl();
```

- *Type:* java.lang.String

---

##### `hostnameConfiguration`<sup>Required</sup> <a name="hostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfiguration"></a>

```java
public ApiManagementHostnameConfigurationOutputReference getHostnameConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference">ApiManagementHostnameConfigurationOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identity"></a>

```java
public ApiManagementIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference">ApiManagementIdentityOutputReference</a>

---

##### `managementApiUrl`<sup>Required</sup> <a name="managementApiUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.managementApiUrl"></a>

```java
public java.lang.String getManagementApiUrl();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.policy"></a>

```java
public ApiManagementPolicyList getPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList">ApiManagementPolicyList</a>

---

##### `portalUrl`<sup>Required</sup> <a name="portalUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.portalUrl"></a>

```java
public java.lang.String getPortalUrl();
```

- *Type:* java.lang.String

---

##### `privateIpAddresses`<sup>Required</sup> <a name="privateIpAddresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.privateIpAddresses"></a>

```java
public java.util.List<java.lang.String> getPrivateIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocols"></a>

```java
public ApiManagementProtocolsOutputReference getProtocols();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference">ApiManagementProtocolsOutputReference</a>

---

##### `publicIpAddresses`<sup>Required</sup> <a name="publicIpAddresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddresses"></a>

```java
public java.util.List<java.lang.String> getPublicIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scmUrl`<sup>Required</sup> <a name="scmUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.scmUrl"></a>

```java
public java.lang.String getScmUrl();
```

- *Type:* java.lang.String

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.security"></a>

```java
public ApiManagementSecurityOutputReference getSecurity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference">ApiManagementSecurityOutputReference</a>

---

##### `signIn`<sup>Required</sup> <a name="signIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signIn"></a>

```java
public ApiManagementSignInOutputReference getSignIn();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference">ApiManagementSignInOutputReference</a>

---

##### `signUp`<sup>Required</sup> <a name="signUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUp"></a>

```java
public ApiManagementSignUpOutputReference getSignUp();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference">ApiManagementSignUpOutputReference</a>

---

##### `tenantAccess`<sup>Required</sup> <a name="tenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccess"></a>

```java
public ApiManagementTenantAccessOutputReference getTenantAccess();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference">ApiManagementTenantAccessOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeouts"></a>

```java
public ApiManagementTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference">ApiManagementTimeoutsOutputReference</a>

---

##### `virtualNetworkConfiguration`<sup>Required</sup> <a name="virtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfiguration"></a>

```java
public ApiManagementVirtualNetworkConfigurationOutputReference getVirtualNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference">ApiManagementVirtualNetworkConfigurationOutputReference</a>

---

##### `additionalLocationInput`<sup>Optional</sup> <a name="additionalLocationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.additionalLocationInput"></a>

```java
public java.lang.Object getAdditionalLocationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.certificateInput"></a>

```java
public java.lang.Object getCertificateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>>

---

##### `clientCertificateEnabledInput`<sup>Optional</sup> <a name="clientCertificateEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabledInput"></a>

```java
public java.lang.Object getClientCertificateEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `delegationInput`<sup>Optional</sup> <a name="delegationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.delegationInput"></a>

```java
public ApiManagementDelegation getDelegationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

---

##### `gatewayDisabledInput`<sup>Optional</sup> <a name="gatewayDisabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabledInput"></a>

```java
public java.lang.Object getGatewayDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostnameConfigurationInput`<sup>Optional</sup> <a name="hostnameConfigurationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.hostnameConfigurationInput"></a>

```java
public ApiManagementHostnameConfiguration getHostnameConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.identityInput"></a>

```java
public ApiManagementIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `minApiVersionInput`<sup>Optional</sup> <a name="minApiVersionInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersionInput"></a>

```java
public java.lang.String getMinApiVersionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationSenderEmailInput`<sup>Optional</sup> <a name="notificationSenderEmailInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmailInput"></a>

```java
public java.lang.String getNotificationSenderEmailInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.policyInput"></a>

```java
public java.lang.Object getPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>>

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.protocolsInput"></a>

```java
public ApiManagementProtocols getProtocolsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

---

##### `publicIpAddressIdInput`<sup>Optional</sup> <a name="publicIpAddressIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressIdInput"></a>

```java
public java.lang.String getPublicIpAddressIdInput();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publisherEmailInput`<sup>Optional</sup> <a name="publisherEmailInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmailInput"></a>

```java
public java.lang.String getPublisherEmailInput();
```

- *Type:* java.lang.String

---

##### `publisherNameInput`<sup>Optional</sup> <a name="publisherNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherNameInput"></a>

```java
public java.lang.String getPublisherNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `securityInput`<sup>Optional</sup> <a name="securityInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.securityInput"></a>

```java
public ApiManagementSecurity getSecurityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

---

##### `signInInput`<sup>Optional</sup> <a name="signInInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signInInput"></a>

```java
public ApiManagementSignIn getSignInInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

---

##### `signUpInput`<sup>Optional</sup> <a name="signUpInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.signUpInput"></a>

```java
public ApiManagementSignUp getSignUpInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuNameInput"></a>

```java
public java.lang.String getSkuNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tenantAccessInput`<sup>Optional</sup> <a name="tenantAccessInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tenantAccessInput"></a>

```java
public ApiManagementTenantAccess getTenantAccessInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a>

---

##### `virtualNetworkConfigurationInput`<sup>Optional</sup> <a name="virtualNetworkConfigurationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkConfigurationInput"></a>

```java
public ApiManagementVirtualNetworkConfiguration getVirtualNetworkConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

---

##### `virtualNetworkTypeInput`<sup>Optional</sup> <a name="virtualNetworkTypeInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkTypeInput"></a>

```java
public java.lang.String getVirtualNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zonesInput"></a>

```java
public java.util.List<java.lang.String> getZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientCertificateEnabled`<sup>Required</sup> <a name="clientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.clientCertificateEnabled"></a>

```java
public java.lang.Object getClientCertificateEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gatewayDisabled`<sup>Required</sup> <a name="gatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.gatewayDisabled"></a>

```java
public java.lang.Object getGatewayDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `minApiVersion`<sup>Required</sup> <a name="minApiVersion" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.minApiVersion"></a>

```java
public java.lang.String getMinApiVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notificationSenderEmail`<sup>Required</sup> <a name="notificationSenderEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.notificationSenderEmail"></a>

```java
public java.lang.String getNotificationSenderEmail();
```

- *Type:* java.lang.String

---

##### `publicIpAddressId`<sup>Required</sup> <a name="publicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicIpAddressId"></a>

```java
public java.lang.String getPublicIpAddressId();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publisherEmail`<sup>Required</sup> <a name="publisherEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherEmail"></a>

```java
public java.lang.String getPublisherEmail();
```

- *Type:* java.lang.String

---

##### `publisherName`<sup>Required</sup> <a name="publisherName" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.publisherName"></a>

```java
public java.lang.String getPublisherName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualNetworkType`<sup>Required</sup> <a name="virtualNetworkType" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.virtualNetworkType"></a>

```java
public java.lang.String getVirtualNetworkType();
```

- *Type:* java.lang.String

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagement.ApiManagement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementAdditionalLocation <a name="ApiManagementAdditionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementAdditionalLocation;

ApiManagementAdditionalLocation.builder()
    .location(java.lang.String)
//  .capacity(java.lang.Number)
//  .gatewayDisabled(java.lang.Boolean)
//  .gatewayDisabled(IResolvable)
//  .publicIpAddressId(java.lang.String)
//  .virtualNetworkConfiguration(ApiManagementAdditionalLocationVirtualNetworkConfiguration)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#location ApiManagement#location}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#capacity ApiManagement#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.gatewayDisabled">gatewayDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.publicIpAddressId">publicIpAddressId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.virtualNetworkConfiguration">virtualNetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a></code> | virtual_network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#zones ApiManagement#zones}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#location ApiManagement#location}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#capacity ApiManagement#capacity}.

---

##### `gatewayDisabled`<sup>Optional</sup> <a name="gatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.gatewayDisabled"></a>

```java
public java.lang.Object getGatewayDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}.

---

##### `publicIpAddressId`<sup>Optional</sup> <a name="publicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.publicIpAddressId"></a>

```java
public java.lang.String getPublicIpAddressId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}.

---

##### `virtualNetworkConfiguration`<sup>Optional</sup> <a name="virtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.virtualNetworkConfiguration"></a>

```java
public ApiManagementAdditionalLocationVirtualNetworkConfiguration getVirtualNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a>

virtual_network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#virtual_network_configuration ApiManagement#virtual_network_configuration}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#zones ApiManagement#zones}.

---

### ApiManagementAdditionalLocationVirtualNetworkConfiguration <a name="ApiManagementAdditionalLocationVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementAdditionalLocationVirtualNetworkConfiguration;

ApiManagementAdditionalLocationVirtualNetworkConfiguration.builder()
    .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#subnet_id ApiManagement#subnet_id}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#subnet_id ApiManagement#subnet_id}.

---

### ApiManagementCertificate <a name="ApiManagementCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementCertificate;

ApiManagementCertificate.builder()
    .encodedCertificate(java.lang.String)
    .storeName(java.lang.String)
//  .certificatePassword(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.encodedCertificate">encodedCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#encoded_certificate ApiManagement#encoded_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.storeName">storeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#store_name ApiManagement#store_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |

---

##### `encodedCertificate`<sup>Required</sup> <a name="encodedCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.encodedCertificate"></a>

```java
public java.lang.String getEncodedCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#encoded_certificate ApiManagement#encoded_certificate}.

---

##### `storeName`<sup>Required</sup> <a name="storeName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.storeName"></a>

```java
public java.lang.String getStoreName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#store_name ApiManagement#store_name}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

### ApiManagementConfig <a name="ApiManagementConfig" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementConfig;

ApiManagementConfig.builder()
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
    .name(java.lang.String)
    .publisherEmail(java.lang.String)
    .publisherName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
//  .additionalLocation(IResolvable)
//  .additionalLocation(java.util.List<ApiManagementAdditionalLocation>)
//  .certificate(IResolvable)
//  .certificate(java.util.List<ApiManagementCertificate>)
//  .clientCertificateEnabled(java.lang.Boolean)
//  .clientCertificateEnabled(IResolvable)
//  .delegation(ApiManagementDelegation)
//  .gatewayDisabled(java.lang.Boolean)
//  .gatewayDisabled(IResolvable)
//  .hostnameConfiguration(ApiManagementHostnameConfiguration)
//  .id(java.lang.String)
//  .identity(ApiManagementIdentity)
//  .minApiVersion(java.lang.String)
//  .notificationSenderEmail(java.lang.String)
//  .policy(IResolvable)
//  .policy(java.util.List<ApiManagementPolicy>)
//  .protocols(ApiManagementProtocols)
//  .publicIpAddressId(java.lang.String)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .security(ApiManagementSecurity)
//  .signIn(ApiManagementSignIn)
//  .signUp(ApiManagementSignUp)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tenantAccess(ApiManagementTenantAccess)
//  .timeouts(ApiManagementTimeouts)
//  .virtualNetworkConfiguration(ApiManagementVirtualNetworkConfiguration)
//  .virtualNetworkType(java.lang.String)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#location ApiManagement#location}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#name ApiManagement#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherEmail">publisherEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#publisher_email ApiManagement#publisher_email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherName">publisherName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#publisher_name ApiManagement#publisher_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#resource_group_name ApiManagement#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#sku_name ApiManagement#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.additionalLocation">additionalLocation</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>></code> | additional_location block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.certificate">certificate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>></code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.clientCertificateEnabled">clientCertificateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#client_certificate_enabled ApiManagement#client_certificate_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.delegation">delegation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a></code> | delegation block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.gatewayDisabled">gatewayDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.hostnameConfiguration">hostnameConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a></code> | hostname_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#id ApiManagement#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.minApiVersion">minApiVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#min_api_version ApiManagement#min_api_version}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.notificationSenderEmail">notificationSenderEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#notification_sender_email ApiManagement#notification_sender_email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.policy">policy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#policy ApiManagement#policy}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.protocols">protocols</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a></code> | protocols block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicIpAddressId">publicIpAddressId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#public_network_access_enabled ApiManagement#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a></code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signIn">signIn</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signUp">signUp</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a></code> | sign_up block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tags ApiManagement#tags}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tenantAccess">tenantAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a></code> | tenant_access block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkConfiguration">virtualNetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a></code> | virtual_network_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkType">virtualNetworkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#virtual_network_type ApiManagement#virtual_network_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#zones ApiManagement#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#location ApiManagement#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#name ApiManagement#name}.

---

##### `publisherEmail`<sup>Required</sup> <a name="publisherEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherEmail"></a>

```java
public java.lang.String getPublisherEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#publisher_email ApiManagement#publisher_email}.

---

##### `publisherName`<sup>Required</sup> <a name="publisherName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publisherName"></a>

```java
public java.lang.String getPublisherName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#publisher_name ApiManagement#publisher_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#resource_group_name ApiManagement#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#sku_name ApiManagement#sku_name}.

---

##### `additionalLocation`<sup>Optional</sup> <a name="additionalLocation" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.additionalLocation"></a>

```java
public java.lang.Object getAdditionalLocation();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>>

additional_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#additional_location ApiManagement#additional_location}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate ApiManagement#certificate}

---

##### `clientCertificateEnabled`<sup>Optional</sup> <a name="clientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.clientCertificateEnabled"></a>

```java
public java.lang.Object getClientCertificateEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#client_certificate_enabled ApiManagement#client_certificate_enabled}.

---

##### `delegation`<sup>Optional</sup> <a name="delegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.delegation"></a>

```java
public ApiManagementDelegation getDelegation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#delegation ApiManagement#delegation}

---

##### `gatewayDisabled`<sup>Optional</sup> <a name="gatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.gatewayDisabled"></a>

```java
public java.lang.Object getGatewayDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#gateway_disabled ApiManagement#gateway_disabled}.

---

##### `hostnameConfiguration`<sup>Optional</sup> <a name="hostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.hostnameConfiguration"></a>

```java
public ApiManagementHostnameConfiguration getHostnameConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

hostname_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#hostname_configuration ApiManagement#hostname_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#id ApiManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.identity"></a>

```java
public ApiManagementIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#identity ApiManagement#identity}

---

##### `minApiVersion`<sup>Optional</sup> <a name="minApiVersion" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.minApiVersion"></a>

```java
public java.lang.String getMinApiVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#min_api_version ApiManagement#min_api_version}.

---

##### `notificationSenderEmail`<sup>Optional</sup> <a name="notificationSenderEmail" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.notificationSenderEmail"></a>

```java
public java.lang.String getNotificationSenderEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#notification_sender_email ApiManagement#notification_sender_email}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.policy"></a>

```java
public java.lang.Object getPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#policy ApiManagement#policy}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.protocols"></a>

```java
public ApiManagementProtocols getProtocols();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

protocols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#protocols ApiManagement#protocols}

---

##### `publicIpAddressId`<sup>Optional</sup> <a name="publicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicIpAddressId"></a>

```java
public java.lang.String getPublicIpAddressId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#public_ip_address_id ApiManagement#public_ip_address_id}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#public_network_access_enabled ApiManagement#public_network_access_enabled}.

---

##### `security`<sup>Optional</sup> <a name="security" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.security"></a>

```java
public ApiManagementSecurity getSecurity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#security ApiManagement#security}

---

##### `signIn`<sup>Optional</sup> <a name="signIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signIn"></a>

```java
public ApiManagementSignIn getSignIn();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#sign_in ApiManagement#sign_in}

---

##### `signUp`<sup>Optional</sup> <a name="signUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.signUp"></a>

```java
public ApiManagementSignUp getSignUp();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

sign_up block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#sign_up ApiManagement#sign_up}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tags ApiManagement#tags}.

---

##### `tenantAccess`<sup>Optional</sup> <a name="tenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.tenantAccess"></a>

```java
public ApiManagementTenantAccess getTenantAccess();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

tenant_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tenant_access ApiManagement#tenant_access}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.timeouts"></a>

```java
public ApiManagementTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#timeouts ApiManagement#timeouts}

---

##### `virtualNetworkConfiguration`<sup>Optional</sup> <a name="virtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkConfiguration"></a>

```java
public ApiManagementVirtualNetworkConfiguration getVirtualNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

virtual_network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#virtual_network_configuration ApiManagement#virtual_network_configuration}

---

##### `virtualNetworkType`<sup>Optional</sup> <a name="virtualNetworkType" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.virtualNetworkType"></a>

```java
public java.lang.String getVirtualNetworkType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#virtual_network_type ApiManagement#virtual_network_type}.

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementConfig.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#zones ApiManagement#zones}.

---

### ApiManagementDelegation <a name="ApiManagementDelegation" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementDelegation;

ApiManagementDelegation.builder()
//  .subscriptionsEnabled(java.lang.Boolean)
//  .subscriptionsEnabled(IResolvable)
//  .url(java.lang.String)
//  .userRegistrationEnabled(java.lang.Boolean)
//  .userRegistrationEnabled(IResolvable)
//  .validationKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.subscriptionsEnabled">subscriptionsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#subscriptions_enabled ApiManagement#subscriptions_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#url ApiManagement#url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.userRegistrationEnabled">userRegistrationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#user_registration_enabled ApiManagement#user_registration_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.validationKey">validationKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#validation_key ApiManagement#validation_key}. |

---

##### `subscriptionsEnabled`<sup>Optional</sup> <a name="subscriptionsEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.subscriptionsEnabled"></a>

```java
public java.lang.Object getSubscriptionsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#subscriptions_enabled ApiManagement#subscriptions_enabled}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#url ApiManagement#url}.

---

##### `userRegistrationEnabled`<sup>Optional</sup> <a name="userRegistrationEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.userRegistrationEnabled"></a>

```java
public java.lang.Object getUserRegistrationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#user_registration_enabled ApiManagement#user_registration_enabled}.

---

##### `validationKey`<sup>Optional</sup> <a name="validationKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation.property.validationKey"></a>

```java
public java.lang.String getValidationKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#validation_key ApiManagement#validation_key}.

---

### ApiManagementHostnameConfiguration <a name="ApiManagementHostnameConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementHostnameConfiguration;

ApiManagementHostnameConfiguration.builder()
//  .developerPortal(IResolvable)
//  .developerPortal(java.util.List<ApiManagementHostnameConfigurationDeveloperPortal>)
//  .management(IResolvable)
//  .management(java.util.List<ApiManagementHostnameConfigurationManagement>)
//  .portal(IResolvable)
//  .portal(java.util.List<ApiManagementHostnameConfigurationPortal>)
//  .proxy(IResolvable)
//  .proxy(java.util.List<ApiManagementHostnameConfigurationProxy>)
//  .scm(IResolvable)
//  .scm(java.util.List<ApiManagementHostnameConfigurationScm>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.developerPortal">developerPortal</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>></code> | developer_portal block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.management">management</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>></code> | management block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.portal">portal</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>></code> | portal block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.proxy">proxy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>></code> | proxy block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.scm">scm</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>></code> | scm block. |

---

##### `developerPortal`<sup>Optional</sup> <a name="developerPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.developerPortal"></a>

```java
public java.lang.Object getDeveloperPortal();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>>

developer_portal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#developer_portal ApiManagement#developer_portal}

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.management"></a>

```java
public java.lang.Object getManagement();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#management ApiManagement#management}

---

##### `portal`<sup>Optional</sup> <a name="portal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.portal"></a>

```java
public java.lang.Object getPortal();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>>

portal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#portal ApiManagement#portal}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.proxy"></a>

```java
public java.lang.Object getProxy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#proxy ApiManagement#proxy}

---

##### `scm`<sup>Optional</sup> <a name="scm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration.property.scm"></a>

```java
public java.lang.Object getScm();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>>

scm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#scm ApiManagement#scm}

---

### ApiManagementHostnameConfigurationDeveloperPortal <a name="ApiManagementHostnameConfigurationDeveloperPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementHostnameConfigurationDeveloperPortal;

ApiManagementHostnameConfigurationDeveloperPortal.builder()
    .hostName(java.lang.String)
//  .certificate(java.lang.String)
//  .certificatePassword(java.lang.String)
//  .keyVaultId(java.lang.String)
//  .negotiateClientCertificate(java.lang.Boolean)
//  .negotiateClientCertificate(IResolvable)
//  .sslKeyvaultIdentityClientId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationManagement <a name="ApiManagementHostnameConfigurationManagement" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementHostnameConfigurationManagement;

ApiManagementHostnameConfigurationManagement.builder()
    .hostName(java.lang.String)
//  .certificate(java.lang.String)
//  .certificatePassword(java.lang.String)
//  .keyVaultId(java.lang.String)
//  .negotiateClientCertificate(java.lang.Boolean)
//  .negotiateClientCertificate(IResolvable)
//  .sslKeyvaultIdentityClientId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationPortal <a name="ApiManagementHostnameConfigurationPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementHostnameConfigurationPortal;

ApiManagementHostnameConfigurationPortal.builder()
    .hostName(java.lang.String)
//  .certificate(java.lang.String)
//  .certificatePassword(java.lang.String)
//  .keyVaultId(java.lang.String)
//  .negotiateClientCertificate(java.lang.Boolean)
//  .negotiateClientCertificate(IResolvable)
//  .sslKeyvaultIdentityClientId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationProxy <a name="ApiManagementHostnameConfigurationProxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementHostnameConfigurationProxy;

ApiManagementHostnameConfigurationProxy.builder()
    .hostName(java.lang.String)
//  .certificate(java.lang.String)
//  .certificatePassword(java.lang.String)
//  .defaultSslBinding(java.lang.Boolean)
//  .defaultSslBinding(IResolvable)
//  .keyVaultId(java.lang.String)
//  .negotiateClientCertificate(java.lang.Boolean)
//  .negotiateClientCertificate(IResolvable)
//  .sslKeyvaultIdentityClientId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.defaultSslBinding">defaultSslBinding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#default_ssl_binding ApiManagement#default_ssl_binding}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `defaultSslBinding`<sup>Optional</sup> <a name="defaultSslBinding" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.defaultSslBinding"></a>

```java
public java.lang.Object getDefaultSslBinding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#default_ssl_binding ApiManagement#default_ssl_binding}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementHostnameConfigurationScm <a name="ApiManagementHostnameConfigurationScm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementHostnameConfigurationScm;

ApiManagementHostnameConfigurationScm.builder()
    .hostName(java.lang.String)
//  .certificate(java.lang.String)
//  .certificatePassword(java.lang.String)
//  .keyVaultId(java.lang.String)
//  .negotiateClientCertificate(java.lang.Boolean)
//  .negotiateClientCertificate(IResolvable)
//  .sslKeyvaultIdentityClientId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#host_name ApiManagement#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate ApiManagement#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#host_name ApiManagement#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate ApiManagement#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#certificate_password ApiManagement#certificate_password}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#key_vault_id ApiManagement#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#negotiate_client_certificate ApiManagement#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#ssl_keyvault_identity_client_id ApiManagement#ssl_keyvault_identity_client_id}.

---

### ApiManagementIdentity <a name="ApiManagementIdentity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementIdentity;

ApiManagementIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#type ApiManagement#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#identity_ids ApiManagement#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#type ApiManagement#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#identity_ids ApiManagement#identity_ids}.

---

### ApiManagementPolicy <a name="ApiManagementPolicy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementPolicy;

ApiManagementPolicy.builder()
//  .xmlContent(java.lang.String)
//  .xmlLink(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.property.xmlContent">xmlContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#xml_content ApiManagement#xml_content}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.property.xmlLink">xmlLink</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#xml_link ApiManagement#xml_link}. |

---

##### `xmlContent`<sup>Optional</sup> <a name="xmlContent" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.property.xmlContent"></a>

```java
public java.lang.String getXmlContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#xml_content ApiManagement#xml_content}.

---

##### `xmlLink`<sup>Optional</sup> <a name="xmlLink" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy.property.xmlLink"></a>

```java
public java.lang.String getXmlLink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#xml_link ApiManagement#xml_link}.

---

### ApiManagementProtocols <a name="ApiManagementProtocols" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementProtocols;

ApiManagementProtocols.builder()
//  .enableHttp2(java.lang.Boolean)
//  .enableHttp2(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols.property.enableHttp2">enableHttp2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enable_http2 ApiManagement#enable_http2}. |

---

##### `enableHttp2`<sup>Optional</sup> <a name="enableHttp2" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols.property.enableHttp2"></a>

```java
public java.lang.Object getEnableHttp2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enable_http2 ApiManagement#enable_http2}.

---

### ApiManagementSecurity <a name="ApiManagementSecurity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementSecurity;

ApiManagementSecurity.builder()
//  .enableBackendSsl30(java.lang.Boolean)
//  .enableBackendSsl30(IResolvable)
//  .enableBackendTls10(java.lang.Boolean)
//  .enableBackendTls10(IResolvable)
//  .enableBackendTls11(java.lang.Boolean)
//  .enableBackendTls11(IResolvable)
//  .enableFrontendSsl30(java.lang.Boolean)
//  .enableFrontendSsl30(IResolvable)
//  .enableFrontendTls10(java.lang.Boolean)
//  .enableFrontendTls10(IResolvable)
//  .enableFrontendTls11(java.lang.Boolean)
//  .enableFrontendTls11(IResolvable)
//  .tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled(java.lang.Boolean)
//  .tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled(IResolvable)
//  .tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled(java.lang.Boolean)
//  .tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled(IResolvable)
//  .tlsEcdheRsaWithAes128CbcShaCiphersEnabled(java.lang.Boolean)
//  .tlsEcdheRsaWithAes128CbcShaCiphersEnabled(IResolvable)
//  .tlsEcdheRsaWithAes256CbcShaCiphersEnabled(java.lang.Boolean)
//  .tlsEcdheRsaWithAes256CbcShaCiphersEnabled(IResolvable)
//  .tlsRsaWithAes128CbcSha256CiphersEnabled(java.lang.Boolean)
//  .tlsRsaWithAes128CbcSha256CiphersEnabled(IResolvable)
//  .tlsRsaWithAes128CbcShaCiphersEnabled(java.lang.Boolean)
//  .tlsRsaWithAes128CbcShaCiphersEnabled(IResolvable)
//  .tlsRsaWithAes128GcmSha256CiphersEnabled(java.lang.Boolean)
//  .tlsRsaWithAes128GcmSha256CiphersEnabled(IResolvable)
//  .tlsRsaWithAes256CbcSha256CiphersEnabled(java.lang.Boolean)
//  .tlsRsaWithAes256CbcSha256CiphersEnabled(IResolvable)
//  .tlsRsaWithAes256CbcShaCiphersEnabled(java.lang.Boolean)
//  .tlsRsaWithAes256CbcShaCiphersEnabled(IResolvable)
//  .tlsRsaWithAes256GcmSha384CiphersEnabled(java.lang.Boolean)
//  .tlsRsaWithAes256GcmSha384CiphersEnabled(IResolvable)
//  .tripleDesCiphersEnabled(java.lang.Boolean)
//  .tripleDesCiphersEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendSsl30">enableBackendSsl30</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enable_backend_ssl30 ApiManagement#enable_backend_ssl30}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls10">enableBackendTls10</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enable_backend_tls10 ApiManagement#enable_backend_tls10}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls11">enableBackendTls11</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enable_backend_tls11 ApiManagement#enable_backend_tls11}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendSsl30">enableFrontendSsl30</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enable_frontend_ssl30 ApiManagement#enable_frontend_ssl30}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls10">enableFrontendTls10</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enable_frontend_tls10 ApiManagement#enable_frontend_tls10}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls11">enableFrontendTls11</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enable_frontend_tls11 ApiManagement#enable_frontend_tls11}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled">tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled">tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled">tlsEcdheRsaWithAes128CbcShaCiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled">tlsEcdheRsaWithAes256CbcShaCiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcSha256CiphersEnabled">tlsRsaWithAes128CbcSha256CiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcShaCiphersEnabled">tlsRsaWithAes128CbcShaCiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128GcmSha256CiphersEnabled">tlsRsaWithAes128GcmSha256CiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcSha256CiphersEnabled">tlsRsaWithAes256CbcSha256CiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcShaCiphersEnabled">tlsRsaWithAes256CbcShaCiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256GcmSha384CiphersEnabled">tlsRsaWithAes256GcmSha384CiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled ApiManagement#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tripleDesCiphersEnabled">tripleDesCiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#triple_des_ciphers_enabled ApiManagement#triple_des_ciphers_enabled}. |

---

##### `enableBackendSsl30`<sup>Optional</sup> <a name="enableBackendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendSsl30"></a>

```java
public java.lang.Object getEnableBackendSsl30();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enable_backend_ssl30 ApiManagement#enable_backend_ssl30}.

---

##### `enableBackendTls10`<sup>Optional</sup> <a name="enableBackendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls10"></a>

```java
public java.lang.Object getEnableBackendTls10();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enable_backend_tls10 ApiManagement#enable_backend_tls10}.

---

##### `enableBackendTls11`<sup>Optional</sup> <a name="enableBackendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableBackendTls11"></a>

```java
public java.lang.Object getEnableBackendTls11();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enable_backend_tls11 ApiManagement#enable_backend_tls11}.

---

##### `enableFrontendSsl30`<sup>Optional</sup> <a name="enableFrontendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendSsl30"></a>

```java
public java.lang.Object getEnableFrontendSsl30();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enable_frontend_ssl30 ApiManagement#enable_frontend_ssl30}.

---

##### `enableFrontendTls10`<sup>Optional</sup> <a name="enableFrontendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls10"></a>

```java
public java.lang.Object getEnableFrontendTls10();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enable_frontend_tls10 ApiManagement#enable_frontend_tls10}.

---

##### `enableFrontendTls11`<sup>Optional</sup> <a name="enableFrontendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.enableFrontendTls11"></a>

```java
public java.lang.Object getEnableFrontendTls11();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enable_frontend_tls11 ApiManagement#enable_frontend_tls11}.

---

##### `tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled`<sup>Optional</sup> <a name="tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled"></a>

```java
public java.lang.Object getTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes128_cbc_sha_ciphers_enabled}.

---

##### `tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled`<sup>Optional</sup> <a name="tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled"></a>

```java
public java.lang.Object getTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_ecdsa_with_aes256_cbc_sha_ciphers_enabled}.

---

##### `tlsEcdheRsaWithAes128CbcShaCiphersEnabled`<sup>Optional</sup> <a name="tlsEcdheRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled"></a>

```java
public java.lang.Object getTlsEcdheRsaWithAes128CbcShaCiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes128_cbc_sha_ciphers_enabled}.

---

##### `tlsEcdheRsaWithAes256CbcShaCiphersEnabled`<sup>Optional</sup> <a name="tlsEcdheRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled"></a>

```java
public java.lang.Object getTlsEcdheRsaWithAes256CbcShaCiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_ecdhe_rsa_with_aes256_cbc_sha_ciphers_enabled}.

---

##### `tlsRsaWithAes128CbcSha256CiphersEnabled`<sup>Optional</sup> <a name="tlsRsaWithAes128CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcSha256CiphersEnabled"></a>

```java
public java.lang.Object getTlsRsaWithAes128CbcSha256CiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha256_ciphers_enabled}.

---

##### `tlsRsaWithAes128CbcShaCiphersEnabled`<sup>Optional</sup> <a name="tlsRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128CbcShaCiphersEnabled"></a>

```java
public java.lang.Object getTlsRsaWithAes128CbcShaCiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_rsa_with_aes128_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes128_cbc_sha_ciphers_enabled}.

---

##### `tlsRsaWithAes128GcmSha256CiphersEnabled`<sup>Optional</sup> <a name="tlsRsaWithAes128GcmSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes128GcmSha256CiphersEnabled"></a>

```java
public java.lang.Object getTlsRsaWithAes128GcmSha256CiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes128_gcm_sha256_ciphers_enabled}.

---

##### `tlsRsaWithAes256CbcSha256CiphersEnabled`<sup>Optional</sup> <a name="tlsRsaWithAes256CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcSha256CiphersEnabled"></a>

```java
public java.lang.Object getTlsRsaWithAes256CbcSha256CiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha256_ciphers_enabled}.

---

##### `tlsRsaWithAes256CbcShaCiphersEnabled`<sup>Optional</sup> <a name="tlsRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256CbcShaCiphersEnabled"></a>

```java
public java.lang.Object getTlsRsaWithAes256CbcShaCiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_rsa_with_aes256_cbc_sha_ciphers_enabled ApiManagement#tls_rsa_with_aes256_cbc_sha_ciphers_enabled}.

---

##### `tlsRsaWithAes256GcmSha384CiphersEnabled`<sup>Optional</sup> <a name="tlsRsaWithAes256GcmSha384CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tlsRsaWithAes256GcmSha384CiphersEnabled"></a>

```java
public java.lang.Object getTlsRsaWithAes256GcmSha384CiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled ApiManagement#tls_rsa_with_aes256_gcm_sha384_ciphers_enabled}.

---

##### `tripleDesCiphersEnabled`<sup>Optional</sup> <a name="tripleDesCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity.property.tripleDesCiphersEnabled"></a>

```java
public java.lang.Object getTripleDesCiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#triple_des_ciphers_enabled ApiManagement#triple_des_ciphers_enabled}.

---

### ApiManagementSignIn <a name="ApiManagementSignIn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementSignIn;

ApiManagementSignIn.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enabled ApiManagement#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enabled ApiManagement#enabled}.

---

### ApiManagementSignUp <a name="ApiManagementSignUp" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementSignUp;

ApiManagementSignUp.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .termsOfService(ApiManagementSignUpTermsOfService)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enabled ApiManagement#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.termsOfService">termsOfService</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a></code> | terms_of_service block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enabled ApiManagement#enabled}.

---

##### `termsOfService`<sup>Required</sup> <a name="termsOfService" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp.property.termsOfService"></a>

```java
public ApiManagementSignUpTermsOfService getTermsOfService();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

terms_of_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#terms_of_service ApiManagement#terms_of_service}

---

### ApiManagementSignUpTermsOfService <a name="ApiManagementSignUpTermsOfService" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementSignUpTermsOfService;

ApiManagementSignUpTermsOfService.builder()
    .consentRequired(java.lang.Boolean)
    .consentRequired(IResolvable)
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.consentRequired">consentRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#consent_required ApiManagement#consent_required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enabled ApiManagement#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.text">text</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#text ApiManagement#text}. |

---

##### `consentRequired`<sup>Required</sup> <a name="consentRequired" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.consentRequired"></a>

```java
public java.lang.Object getConsentRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#consent_required ApiManagement#consent_required}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enabled ApiManagement#enabled}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#text ApiManagement#text}.

---

### ApiManagementTenantAccess <a name="ApiManagementTenantAccess" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementTenantAccess;

ApiManagementTenantAccess.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enabled ApiManagement#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#enabled ApiManagement#enabled}.

---

### ApiManagementTimeouts <a name="ApiManagementTimeouts" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementTimeouts;

ApiManagementTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#create ApiManagement#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#delete ApiManagement#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#read ApiManagement#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#update ApiManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#create ApiManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#delete ApiManagement#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#read ApiManagement#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#update ApiManagement#update}.

---

### ApiManagementVirtualNetworkConfiguration <a name="ApiManagementVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementVirtualNetworkConfiguration;

ApiManagementVirtualNetworkConfiguration.builder()
    .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#subnet_id ApiManagement#subnet_id}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/api_management#subnet_id ApiManagement#subnet_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementAdditionalLocationList <a name="ApiManagementAdditionalLocationList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementAdditionalLocationList;

new ApiManagementAdditionalLocationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.get"></a>

```java
public ApiManagementAdditionalLocationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>>

---


### ApiManagementAdditionalLocationOutputReference <a name="ApiManagementAdditionalLocationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementAdditionalLocationOutputReference;

new ApiManagementAdditionalLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.putVirtualNetworkConfiguration">putVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetCapacity">resetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetGatewayDisabled">resetGatewayDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetPublicIpAddressId">resetPublicIpAddressId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetVirtualNetworkConfiguration">resetVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetZones">resetZones</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVirtualNetworkConfiguration` <a name="putVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.putVirtualNetworkConfiguration"></a>

```java
public void putVirtualNetworkConfiguration(ApiManagementAdditionalLocationVirtualNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.putVirtualNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a>

---

##### `resetCapacity` <a name="resetCapacity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetCapacity"></a>

```java
public void resetCapacity()
```

##### `resetGatewayDisabled` <a name="resetGatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetGatewayDisabled"></a>

```java
public void resetGatewayDisabled()
```

##### `resetPublicIpAddressId` <a name="resetPublicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetPublicIpAddressId"></a>

```java
public void resetPublicIpAddressId()
```

##### `resetVirtualNetworkConfiguration` <a name="resetVirtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetVirtualNetworkConfiguration"></a>

```java
public void resetVirtualNetworkConfiguration()
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.resetZones"></a>

```java
public void resetZones()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayRegionalUrl">gatewayRegionalUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.privateIpAddresses">privateIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddresses">publicIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfiguration">virtualNetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference">ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacityInput">capacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabledInput">gatewayDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressIdInput">publicIpAddressIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfigurationInput">virtualNetworkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zonesInput">zonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabled">gatewayDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressId">publicIpAddressId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gatewayRegionalUrl`<sup>Required</sup> <a name="gatewayRegionalUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayRegionalUrl"></a>

```java
public java.lang.String getGatewayRegionalUrl();
```

- *Type:* java.lang.String

---

##### `privateIpAddresses`<sup>Required</sup> <a name="privateIpAddresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.privateIpAddresses"></a>

```java
public java.util.List<java.lang.String> getPrivateIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publicIpAddresses`<sup>Required</sup> <a name="publicIpAddresses" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddresses"></a>

```java
public java.util.List<java.lang.String> getPublicIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `virtualNetworkConfiguration`<sup>Required</sup> <a name="virtualNetworkConfiguration" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfiguration"></a>

```java
public ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference getVirtualNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference">ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference</a>

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacityInput"></a>

```java
public java.lang.Number getCapacityInput();
```

- *Type:* java.lang.Number

---

##### `gatewayDisabledInput`<sup>Optional</sup> <a name="gatewayDisabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabledInput"></a>

```java
public java.lang.Object getGatewayDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `publicIpAddressIdInput`<sup>Optional</sup> <a name="publicIpAddressIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressIdInput"></a>

```java
public java.lang.String getPublicIpAddressIdInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkConfigurationInput`<sup>Optional</sup> <a name="virtualNetworkConfigurationInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.virtualNetworkConfigurationInput"></a>

```java
public ApiManagementAdditionalLocationVirtualNetworkConfiguration getVirtualNetworkConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zonesInput"></a>

```java
public java.util.List<java.lang.String> getZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

---

##### `gatewayDisabled`<sup>Required</sup> <a name="gatewayDisabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.gatewayDisabled"></a>

```java
public java.lang.Object getGatewayDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `publicIpAddressId`<sup>Required</sup> <a name="publicIpAddressId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.publicIpAddressId"></a>

```java
public java.lang.String getPublicIpAddressId();
```

- *Type:* java.lang.String

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocation">ApiManagementAdditionalLocation</a>

---


### ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference <a name="ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference;

new ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public ApiManagementAdditionalLocationVirtualNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementAdditionalLocationVirtualNetworkConfiguration">ApiManagementAdditionalLocationVirtualNetworkConfiguration</a>

---


### ApiManagementCertificateList <a name="ApiManagementCertificateList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementCertificateList;

new ApiManagementCertificateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.get"></a>

```java
public ApiManagementCertificateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>>

---


### ApiManagementCertificateOutputReference <a name="ApiManagementCertificateOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementCertificateOutputReference;

new ApiManagementCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.resetCertificatePassword"></a>

```java
public void resetCertificatePassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.expiry">expiry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificateInput">encodedCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeNameInput">storeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificate">encodedCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeName">storeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.expiry"></a>

```java
public java.lang.String getExpiry();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePasswordInput"></a>

```java
public java.lang.String getCertificatePasswordInput();
```

- *Type:* java.lang.String

---

##### `encodedCertificateInput`<sup>Optional</sup> <a name="encodedCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificateInput"></a>

```java
public java.lang.String getEncodedCertificateInput();
```

- *Type:* java.lang.String

---

##### `storeNameInput`<sup>Optional</sup> <a name="storeNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeNameInput"></a>

```java
public java.lang.String getStoreNameInput();
```

- *Type:* java.lang.String

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

---

##### `encodedCertificate`<sup>Required</sup> <a name="encodedCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.encodedCertificate"></a>

```java
public java.lang.String getEncodedCertificate();
```

- *Type:* java.lang.String

---

##### `storeName`<sup>Required</sup> <a name="storeName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.storeName"></a>

```java
public java.lang.String getStoreName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementCertificateOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementCertificate">ApiManagementCertificate</a>

---


### ApiManagementDelegationOutputReference <a name="ApiManagementDelegationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementDelegationOutputReference;

new ApiManagementDelegationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetSubscriptionsEnabled">resetSubscriptionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUserRegistrationEnabled">resetUserRegistrationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetValidationKey">resetValidationKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubscriptionsEnabled` <a name="resetSubscriptionsEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetSubscriptionsEnabled"></a>

```java
public void resetSubscriptionsEnabled()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetUserRegistrationEnabled` <a name="resetUserRegistrationEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetUserRegistrationEnabled"></a>

```java
public void resetUserRegistrationEnabled()
```

##### `resetValidationKey` <a name="resetValidationKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.resetValidationKey"></a>

```java
public void resetValidationKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabledInput">subscriptionsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabledInput">userRegistrationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKeyInput">validationKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabled">subscriptionsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabled">userRegistrationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKey">validationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subscriptionsEnabledInput`<sup>Optional</sup> <a name="subscriptionsEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabledInput"></a>

```java
public java.lang.Object getSubscriptionsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `userRegistrationEnabledInput`<sup>Optional</sup> <a name="userRegistrationEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabledInput"></a>

```java
public java.lang.Object getUserRegistrationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validationKeyInput`<sup>Optional</sup> <a name="validationKeyInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKeyInput"></a>

```java
public java.lang.String getValidationKeyInput();
```

- *Type:* java.lang.String

---

##### `subscriptionsEnabled`<sup>Required</sup> <a name="subscriptionsEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.subscriptionsEnabled"></a>

```java
public java.lang.Object getSubscriptionsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `userRegistrationEnabled`<sup>Required</sup> <a name="userRegistrationEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.userRegistrationEnabled"></a>

```java
public java.lang.Object getUserRegistrationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validationKey`<sup>Required</sup> <a name="validationKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.validationKey"></a>

```java
public java.lang.String getValidationKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementDelegationOutputReference.property.internalValue"></a>

```java
public ApiManagementDelegation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementDelegation">ApiManagementDelegation</a>

---


### ApiManagementHostnameConfigurationDeveloperPortalList <a name="ApiManagementHostnameConfigurationDeveloperPortalList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementHostnameConfigurationDeveloperPortalList;

new ApiManagementHostnameConfigurationDeveloperPortalList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.get"></a>

```java
public ApiManagementHostnameConfigurationDeveloperPortalOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>>

---


### ApiManagementHostnameConfigurationDeveloperPortalOutputReference <a name="ApiManagementHostnameConfigurationDeveloperPortalOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementHostnameConfigurationDeveloperPortalOutputReference;

new ApiManagementHostnameConfigurationDeveloperPortalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetCertificatePassword"></a>

```java
public void resetCertificatePassword()
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetKeyVaultId"></a>

```java
public void resetKeyVaultId()
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetNegotiateClientCertificate"></a>

```java
public void resetNegotiateClientCertificate()
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.resetSslKeyvaultIdentityClientId"></a>

```java
public void resetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateSource">certificateSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.expiry">expiry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateSource"></a>

```java
public java.lang.String getCertificateSource();
```

- *Type:* java.lang.String

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateStatus"></a>

```java
public java.lang.String getCertificateStatus();
```

- *Type:* java.lang.String

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.expiry"></a>

```java
public java.lang.String getExpiry();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePasswordInput"></a>

```java
public java.lang.String getCertificatePasswordInput();
```

- *Type:* java.lang.String

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificateInput"></a>

```java
public java.lang.Object getNegotiateClientCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientIdInput();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>

---


### ApiManagementHostnameConfigurationManagementList <a name="ApiManagementHostnameConfigurationManagementList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementHostnameConfigurationManagementList;

new ApiManagementHostnameConfigurationManagementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.get"></a>

```java
public ApiManagementHostnameConfigurationManagementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>>

---


### ApiManagementHostnameConfigurationManagementOutputReference <a name="ApiManagementHostnameConfigurationManagementOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementHostnameConfigurationManagementOutputReference;

new ApiManagementHostnameConfigurationManagementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetCertificatePassword"></a>

```java
public void resetCertificatePassword()
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetKeyVaultId"></a>

```java
public void resetKeyVaultId()
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetNegotiateClientCertificate"></a>

```java
public void resetNegotiateClientCertificate()
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.resetSslKeyvaultIdentityClientId"></a>

```java
public void resetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateSource">certificateSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.expiry">expiry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateSource"></a>

```java
public java.lang.String getCertificateSource();
```

- *Type:* java.lang.String

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateStatus"></a>

```java
public java.lang.String getCertificateStatus();
```

- *Type:* java.lang.String

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.expiry"></a>

```java
public java.lang.String getExpiry();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePasswordInput"></a>

```java
public java.lang.String getCertificatePasswordInput();
```

- *Type:* java.lang.String

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificateInput"></a>

```java
public java.lang.Object getNegotiateClientCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientIdInput();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>

---


### ApiManagementHostnameConfigurationOutputReference <a name="ApiManagementHostnameConfigurationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementHostnameConfigurationOutputReference;

new ApiManagementHostnameConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putDeveloperPortal">putDeveloperPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putManagement">putManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putPortal">putPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putProxy">putProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putScm">putScm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetDeveloperPortal">resetDeveloperPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetManagement">resetManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetPortal">resetPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetProxy">resetProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetScm">resetScm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeveloperPortal` <a name="putDeveloperPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putDeveloperPortal"></a>

```java
public void putDeveloperPortal(IResolvable OR java.util.List<ApiManagementHostnameConfigurationDeveloperPortal> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putDeveloperPortal.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>>

---

##### `putManagement` <a name="putManagement" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putManagement"></a>

```java
public void putManagement(IResolvable OR java.util.List<ApiManagementHostnameConfigurationManagement> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putManagement.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>>

---

##### `putPortal` <a name="putPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putPortal"></a>

```java
public void putPortal(IResolvable OR java.util.List<ApiManagementHostnameConfigurationPortal> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putPortal.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>>

---

##### `putProxy` <a name="putProxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putProxy"></a>

```java
public void putProxy(IResolvable OR java.util.List<ApiManagementHostnameConfigurationProxy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putProxy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>>

---

##### `putScm` <a name="putScm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putScm"></a>

```java
public void putScm(IResolvable OR java.util.List<ApiManagementHostnameConfigurationScm> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.putScm.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>>

---

##### `resetDeveloperPortal` <a name="resetDeveloperPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetDeveloperPortal"></a>

```java
public void resetDeveloperPortal()
```

##### `resetManagement` <a name="resetManagement" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetManagement"></a>

```java
public void resetManagement()
```

##### `resetPortal` <a name="resetPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetPortal"></a>

```java
public void resetPortal()
```

##### `resetProxy` <a name="resetProxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetProxy"></a>

```java
public void resetProxy()
```

##### `resetScm` <a name="resetScm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.resetScm"></a>

```java
public void resetScm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortal">developerPortal</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList">ApiManagementHostnameConfigurationDeveloperPortalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.management">management</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList">ApiManagementHostnameConfigurationManagementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portal">portal</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList">ApiManagementHostnameConfigurationPortalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList">ApiManagementHostnameConfigurationProxyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scm">scm</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList">ApiManagementHostnameConfigurationScmList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortalInput">developerPortalInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.managementInput">managementInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portalInput">portalInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxyInput">proxyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scmInput">scmInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `developerPortal`<sup>Required</sup> <a name="developerPortal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortal"></a>

```java
public ApiManagementHostnameConfigurationDeveloperPortalList getDeveloperPortal();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortalList">ApiManagementHostnameConfigurationDeveloperPortalList</a>

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.management"></a>

```java
public ApiManagementHostnameConfigurationManagementList getManagement();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagementList">ApiManagementHostnameConfigurationManagementList</a>

---

##### `portal`<sup>Required</sup> <a name="portal" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portal"></a>

```java
public ApiManagementHostnameConfigurationPortalList getPortal();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList">ApiManagementHostnameConfigurationPortalList</a>

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxy"></a>

```java
public ApiManagementHostnameConfigurationProxyList getProxy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList">ApiManagementHostnameConfigurationProxyList</a>

---

##### `scm`<sup>Required</sup> <a name="scm" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scm"></a>

```java
public ApiManagementHostnameConfigurationScmList getScm();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList">ApiManagementHostnameConfigurationScmList</a>

---

##### `developerPortalInput`<sup>Optional</sup> <a name="developerPortalInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.developerPortalInput"></a>

```java
public java.lang.Object getDeveloperPortalInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationDeveloperPortal">ApiManagementHostnameConfigurationDeveloperPortal</a>>

---

##### `managementInput`<sup>Optional</sup> <a name="managementInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.managementInput"></a>

```java
public java.lang.Object getManagementInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationManagement">ApiManagementHostnameConfigurationManagement</a>>

---

##### `portalInput`<sup>Optional</sup> <a name="portalInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.portalInput"></a>

```java
public java.lang.Object getPortalInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>>

---

##### `proxyInput`<sup>Optional</sup> <a name="proxyInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.proxyInput"></a>

```java
public java.lang.Object getProxyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>>

---

##### `scmInput`<sup>Optional</sup> <a name="scmInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.scmInput"></a>

```java
public java.lang.Object getScmInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationOutputReference.property.internalValue"></a>

```java
public ApiManagementHostnameConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfiguration">ApiManagementHostnameConfiguration</a>

---


### ApiManagementHostnameConfigurationPortalList <a name="ApiManagementHostnameConfigurationPortalList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementHostnameConfigurationPortalList;

new ApiManagementHostnameConfigurationPortalList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.get"></a>

```java
public ApiManagementHostnameConfigurationPortalOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>>

---


### ApiManagementHostnameConfigurationPortalOutputReference <a name="ApiManagementHostnameConfigurationPortalOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementHostnameConfigurationPortalOutputReference;

new ApiManagementHostnameConfigurationPortalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetCertificatePassword"></a>

```java
public void resetCertificatePassword()
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetKeyVaultId"></a>

```java
public void resetKeyVaultId()
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetNegotiateClientCertificate"></a>

```java
public void resetNegotiateClientCertificate()
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.resetSslKeyvaultIdentityClientId"></a>

```java
public void resetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateSource">certificateSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.expiry">expiry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateSource"></a>

```java
public java.lang.String getCertificateSource();
```

- *Type:* java.lang.String

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateStatus"></a>

```java
public java.lang.String getCertificateStatus();
```

- *Type:* java.lang.String

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.expiry"></a>

```java
public java.lang.String getExpiry();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePasswordInput"></a>

```java
public java.lang.String getCertificatePasswordInput();
```

- *Type:* java.lang.String

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificateInput"></a>

```java
public java.lang.Object getNegotiateClientCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientIdInput();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortalOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationPortal">ApiManagementHostnameConfigurationPortal</a>

---


### ApiManagementHostnameConfigurationProxyList <a name="ApiManagementHostnameConfigurationProxyList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementHostnameConfigurationProxyList;

new ApiManagementHostnameConfigurationProxyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.get"></a>

```java
public ApiManagementHostnameConfigurationProxyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>>

---


### ApiManagementHostnameConfigurationProxyOutputReference <a name="ApiManagementHostnameConfigurationProxyOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementHostnameConfigurationProxyOutputReference;

new ApiManagementHostnameConfigurationProxyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetDefaultSslBinding">resetDefaultSslBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetCertificatePassword"></a>

```java
public void resetCertificatePassword()
```

##### `resetDefaultSslBinding` <a name="resetDefaultSslBinding" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetDefaultSslBinding"></a>

```java
public void resetDefaultSslBinding()
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetKeyVaultId"></a>

```java
public void resetKeyVaultId()
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetNegotiateClientCertificate"></a>

```java
public void resetNegotiateClientCertificate()
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.resetSslKeyvaultIdentityClientId"></a>

```java
public void resetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateSource">certificateSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.expiry">expiry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBindingInput">defaultSslBindingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBinding">defaultSslBinding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateSource"></a>

```java
public java.lang.String getCertificateSource();
```

- *Type:* java.lang.String

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateStatus"></a>

```java
public java.lang.String getCertificateStatus();
```

- *Type:* java.lang.String

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.expiry"></a>

```java
public java.lang.String getExpiry();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePasswordInput"></a>

```java
public java.lang.String getCertificatePasswordInput();
```

- *Type:* java.lang.String

---

##### `defaultSslBindingInput`<sup>Optional</sup> <a name="defaultSslBindingInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBindingInput"></a>

```java
public java.lang.Object getDefaultSslBindingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificateInput"></a>

```java
public java.lang.Object getNegotiateClientCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientIdInput();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

---

##### `defaultSslBinding`<sup>Required</sup> <a name="defaultSslBinding" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.defaultSslBinding"></a>

```java
public java.lang.Object getDefaultSslBinding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationProxy">ApiManagementHostnameConfigurationProxy</a>

---


### ApiManagementHostnameConfigurationScmList <a name="ApiManagementHostnameConfigurationScmList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementHostnameConfigurationScmList;

new ApiManagementHostnameConfigurationScmList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.get"></a>

```java
public ApiManagementHostnameConfigurationScmOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>>

---


### ApiManagementHostnameConfigurationScmOutputReference <a name="ApiManagementHostnameConfigurationScmOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementHostnameConfigurationScmOutputReference;

new ApiManagementHostnameConfigurationScmOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetCertificatePassword"></a>

```java
public void resetCertificatePassword()
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetKeyVaultId"></a>

```java
public void resetKeyVaultId()
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetNegotiateClientCertificate"></a>

```java
public void resetNegotiateClientCertificate()
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.resetSslKeyvaultIdentityClientId"></a>

```java
public void resetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateSource">certificateSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.expiry">expiry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateSource"></a>

```java
public java.lang.String getCertificateSource();
```

- *Type:* java.lang.String

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateStatus"></a>

```java
public java.lang.String getCertificateStatus();
```

- *Type:* java.lang.String

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.expiry"></a>

```java
public java.lang.String getExpiry();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePasswordInput"></a>

```java
public java.lang.String getCertificatePasswordInput();
```

- *Type:* java.lang.String

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultIdInput"></a>

```java
public java.lang.String getKeyVaultIdInput();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificateInput"></a>

```java
public java.lang.Object getNegotiateClientCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientIdInput();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.certificatePassword"></a>

```java
public java.lang.String getCertificatePassword();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.negotiateClientCertificate"></a>

```java
public java.lang.Object getNegotiateClientCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.sslKeyvaultIdentityClientId"></a>

```java
public java.lang.String getSslKeyvaultIdentityClientId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScmOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementHostnameConfigurationScm">ApiManagementHostnameConfigurationScm</a>

---


### ApiManagementIdentityOutputReference <a name="ApiManagementIdentityOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementIdentityOutputReference;

new ApiManagementIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementIdentityOutputReference.property.internalValue"></a>

```java
public ApiManagementIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementIdentity">ApiManagementIdentity</a>

---


### ApiManagementPolicyList <a name="ApiManagementPolicyList" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementPolicyList;

new ApiManagementPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.get"></a>

```java
public ApiManagementPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>>

---


### ApiManagementPolicyOutputReference <a name="ApiManagementPolicyOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementPolicyOutputReference;

new ApiManagementPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resetXmlContent">resetXmlContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resetXmlLink">resetXmlLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetXmlContent` <a name="resetXmlContent" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resetXmlContent"></a>

```java
public void resetXmlContent()
```

##### `resetXmlLink` <a name="resetXmlLink" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.resetXmlLink"></a>

```java
public void resetXmlLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlContentInput">xmlContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlLinkInput">xmlLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlContent">xmlContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlLink">xmlLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `xmlContentInput`<sup>Optional</sup> <a name="xmlContentInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlContentInput"></a>

```java
public java.lang.String getXmlContentInput();
```

- *Type:* java.lang.String

---

##### `xmlLinkInput`<sup>Optional</sup> <a name="xmlLinkInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlLinkInput"></a>

```java
public java.lang.String getXmlLinkInput();
```

- *Type:* java.lang.String

---

##### `xmlContent`<sup>Required</sup> <a name="xmlContent" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlContent"></a>

```java
public java.lang.String getXmlContent();
```

- *Type:* java.lang.String

---

##### `xmlLink`<sup>Required</sup> <a name="xmlLink" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.xmlLink"></a>

```java
public java.lang.String getXmlLink();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementPolicy">ApiManagementPolicy</a>

---


### ApiManagementProtocolsOutputReference <a name="ApiManagementProtocolsOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementProtocolsOutputReference;

new ApiManagementProtocolsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resetEnableHttp2">resetEnableHttp2</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableHttp2` <a name="resetEnableHttp2" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.resetEnableHttp2"></a>

```java
public void resetEnableHttp2()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2Input">enableHttp2Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2">enableHttp2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableHttp2Input`<sup>Optional</sup> <a name="enableHttp2Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2Input"></a>

```java
public java.lang.Object getEnableHttp2Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableHttp2`<sup>Required</sup> <a name="enableHttp2" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.enableHttp2"></a>

```java
public java.lang.Object getEnableHttp2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementProtocolsOutputReference.property.internalValue"></a>

```java
public ApiManagementProtocols getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementProtocols">ApiManagementProtocols</a>

---


### ApiManagementSecurityOutputReference <a name="ApiManagementSecurityOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementSecurityOutputReference;

new ApiManagementSecurityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendSsl30">resetEnableBackendSsl30</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls10">resetEnableBackendTls10</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls11">resetEnableBackendTls11</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendSsl30">resetEnableFrontendSsl30</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls10">resetEnableFrontendTls10</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls11">resetEnableFrontendTls11</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled">resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled">resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled">resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled">resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcSha256CiphersEnabled">resetTlsRsaWithAes128CbcSha256CiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcShaCiphersEnabled">resetTlsRsaWithAes128CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128GcmSha256CiphersEnabled">resetTlsRsaWithAes128GcmSha256CiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcSha256CiphersEnabled">resetTlsRsaWithAes256CbcSha256CiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcShaCiphersEnabled">resetTlsRsaWithAes256CbcShaCiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256GcmSha384CiphersEnabled">resetTlsRsaWithAes256GcmSha384CiphersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTripleDesCiphersEnabled">resetTripleDesCiphersEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableBackendSsl30` <a name="resetEnableBackendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendSsl30"></a>

```java
public void resetEnableBackendSsl30()
```

##### `resetEnableBackendTls10` <a name="resetEnableBackendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls10"></a>

```java
public void resetEnableBackendTls10()
```

##### `resetEnableBackendTls11` <a name="resetEnableBackendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableBackendTls11"></a>

```java
public void resetEnableBackendTls11()
```

##### `resetEnableFrontendSsl30` <a name="resetEnableFrontendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendSsl30"></a>

```java
public void resetEnableFrontendSsl30()
```

##### `resetEnableFrontendTls10` <a name="resetEnableFrontendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls10"></a>

```java
public void resetEnableFrontendTls10()
```

##### `resetEnableFrontendTls11` <a name="resetEnableFrontendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetEnableFrontendTls11"></a>

```java
public void resetEnableFrontendTls11()
```

##### `resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled` <a name="resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled"></a>

```java
public void resetTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled()
```

##### `resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled` <a name="resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled"></a>

```java
public void resetTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled()
```

##### `resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled` <a name="resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled"></a>

```java
public void resetTlsEcdheRsaWithAes128CbcShaCiphersEnabled()
```

##### `resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled` <a name="resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled"></a>

```java
public void resetTlsEcdheRsaWithAes256CbcShaCiphersEnabled()
```

##### `resetTlsRsaWithAes128CbcSha256CiphersEnabled` <a name="resetTlsRsaWithAes128CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcSha256CiphersEnabled"></a>

```java
public void resetTlsRsaWithAes128CbcSha256CiphersEnabled()
```

##### `resetTlsRsaWithAes128CbcShaCiphersEnabled` <a name="resetTlsRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128CbcShaCiphersEnabled"></a>

```java
public void resetTlsRsaWithAes128CbcShaCiphersEnabled()
```

##### `resetTlsRsaWithAes128GcmSha256CiphersEnabled` <a name="resetTlsRsaWithAes128GcmSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes128GcmSha256CiphersEnabled"></a>

```java
public void resetTlsRsaWithAes128GcmSha256CiphersEnabled()
```

##### `resetTlsRsaWithAes256CbcSha256CiphersEnabled` <a name="resetTlsRsaWithAes256CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcSha256CiphersEnabled"></a>

```java
public void resetTlsRsaWithAes256CbcSha256CiphersEnabled()
```

##### `resetTlsRsaWithAes256CbcShaCiphersEnabled` <a name="resetTlsRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256CbcShaCiphersEnabled"></a>

```java
public void resetTlsRsaWithAes256CbcShaCiphersEnabled()
```

##### `resetTlsRsaWithAes256GcmSha384CiphersEnabled` <a name="resetTlsRsaWithAes256GcmSha384CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTlsRsaWithAes256GcmSha384CiphersEnabled"></a>

```java
public void resetTlsRsaWithAes256GcmSha384CiphersEnabled()
```

##### `resetTripleDesCiphersEnabled` <a name="resetTripleDesCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.resetTripleDesCiphersEnabled"></a>

```java
public void resetTripleDesCiphersEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30Input">enableBackendSsl30Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10Input">enableBackendTls10Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11Input">enableBackendTls11Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30Input">enableFrontendSsl30Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10Input">enableFrontendTls10Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11Input">enableFrontendTls11Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput">tlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput">tlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabledInput">tlsEcdheRsaWithAes128CbcShaCiphersEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabledInput">tlsEcdheRsaWithAes256CbcShaCiphersEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabledInput">tlsRsaWithAes128CbcSha256CiphersEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabledInput">tlsRsaWithAes128CbcShaCiphersEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabledInput">tlsRsaWithAes128GcmSha256CiphersEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabledInput">tlsRsaWithAes256CbcSha256CiphersEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabledInput">tlsRsaWithAes256CbcShaCiphersEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabledInput">tlsRsaWithAes256GcmSha384CiphersEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabledInput">tripleDesCiphersEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30">enableBackendSsl30</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10">enableBackendTls10</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11">enableBackendTls11</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30">enableFrontendSsl30</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10">enableFrontendTls10</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11">enableFrontendTls11</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled">tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled">tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled">tlsEcdheRsaWithAes128CbcShaCiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled">tlsEcdheRsaWithAes256CbcShaCiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabled">tlsRsaWithAes128CbcSha256CiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabled">tlsRsaWithAes128CbcShaCiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabled">tlsRsaWithAes128GcmSha256CiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabled">tlsRsaWithAes256CbcSha256CiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabled">tlsRsaWithAes256CbcShaCiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabled">tlsRsaWithAes256GcmSha384CiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabled">tripleDesCiphersEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableBackendSsl30Input`<sup>Optional</sup> <a name="enableBackendSsl30Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30Input"></a>

```java
public java.lang.Object getEnableBackendSsl30Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableBackendTls10Input`<sup>Optional</sup> <a name="enableBackendTls10Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10Input"></a>

```java
public java.lang.Object getEnableBackendTls10Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableBackendTls11Input`<sup>Optional</sup> <a name="enableBackendTls11Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11Input"></a>

```java
public java.lang.Object getEnableBackendTls11Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableFrontendSsl30Input`<sup>Optional</sup> <a name="enableFrontendSsl30Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30Input"></a>

```java
public java.lang.Object getEnableFrontendSsl30Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableFrontendTls10Input`<sup>Optional</sup> <a name="enableFrontendTls10Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10Input"></a>

```java
public java.lang.Object getEnableFrontendTls10Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableFrontendTls11Input`<sup>Optional</sup> <a name="enableFrontendTls11Input" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11Input"></a>

```java
public java.lang.Object getEnableFrontendTls11Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="tlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput"></a>

```java
public java.lang.Object getTlsEcdheEcdsaWithAes128CbcShaCiphersEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="tlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput"></a>

```java
public java.lang.Object getTlsEcdheEcdsaWithAes256CbcShaCiphersEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsEcdheRsaWithAes128CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="tlsEcdheRsaWithAes128CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabledInput"></a>

```java
public java.lang.Object getTlsEcdheRsaWithAes128CbcShaCiphersEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsEcdheRsaWithAes256CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="tlsEcdheRsaWithAes256CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabledInput"></a>

```java
public java.lang.Object getTlsEcdheRsaWithAes256CbcShaCiphersEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsRsaWithAes128CbcSha256CiphersEnabledInput`<sup>Optional</sup> <a name="tlsRsaWithAes128CbcSha256CiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabledInput"></a>

```java
public java.lang.Object getTlsRsaWithAes128CbcSha256CiphersEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsRsaWithAes128CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="tlsRsaWithAes128CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabledInput"></a>

```java
public java.lang.Object getTlsRsaWithAes128CbcShaCiphersEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsRsaWithAes128GcmSha256CiphersEnabledInput`<sup>Optional</sup> <a name="tlsRsaWithAes128GcmSha256CiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabledInput"></a>

```java
public java.lang.Object getTlsRsaWithAes128GcmSha256CiphersEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsRsaWithAes256CbcSha256CiphersEnabledInput`<sup>Optional</sup> <a name="tlsRsaWithAes256CbcSha256CiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabledInput"></a>

```java
public java.lang.Object getTlsRsaWithAes256CbcSha256CiphersEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsRsaWithAes256CbcShaCiphersEnabledInput`<sup>Optional</sup> <a name="tlsRsaWithAes256CbcShaCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabledInput"></a>

```java
public java.lang.Object getTlsRsaWithAes256CbcShaCiphersEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsRsaWithAes256GcmSha384CiphersEnabledInput`<sup>Optional</sup> <a name="tlsRsaWithAes256GcmSha384CiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabledInput"></a>

```java
public java.lang.Object getTlsRsaWithAes256GcmSha384CiphersEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tripleDesCiphersEnabledInput`<sup>Optional</sup> <a name="tripleDesCiphersEnabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabledInput"></a>

```java
public java.lang.Object getTripleDesCiphersEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableBackendSsl30`<sup>Required</sup> <a name="enableBackendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendSsl30"></a>

```java
public java.lang.Object getEnableBackendSsl30();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableBackendTls10`<sup>Required</sup> <a name="enableBackendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls10"></a>

```java
public java.lang.Object getEnableBackendTls10();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableBackendTls11`<sup>Required</sup> <a name="enableBackendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableBackendTls11"></a>

```java
public java.lang.Object getEnableBackendTls11();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableFrontendSsl30`<sup>Required</sup> <a name="enableFrontendSsl30" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendSsl30"></a>

```java
public java.lang.Object getEnableFrontendSsl30();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableFrontendTls10`<sup>Required</sup> <a name="enableFrontendTls10" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls10"></a>

```java
public java.lang.Object getEnableFrontendTls10();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableFrontendTls11`<sup>Required</sup> <a name="enableFrontendTls11" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.enableFrontendTls11"></a>

```java
public java.lang.Object getEnableFrontendTls11();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled`<sup>Required</sup> <a name="tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes128CbcShaCiphersEnabled"></a>

```java
public java.lang.Object getTlsEcdheEcdsaWithAes128CbcShaCiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled`<sup>Required</sup> <a name="tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheEcdsaWithAes256CbcShaCiphersEnabled"></a>

```java
public java.lang.Object getTlsEcdheEcdsaWithAes256CbcShaCiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsEcdheRsaWithAes128CbcShaCiphersEnabled`<sup>Required</sup> <a name="tlsEcdheRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes128CbcShaCiphersEnabled"></a>

```java
public java.lang.Object getTlsEcdheRsaWithAes128CbcShaCiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsEcdheRsaWithAes256CbcShaCiphersEnabled`<sup>Required</sup> <a name="tlsEcdheRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsEcdheRsaWithAes256CbcShaCiphersEnabled"></a>

```java
public java.lang.Object getTlsEcdheRsaWithAes256CbcShaCiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsRsaWithAes128CbcSha256CiphersEnabled`<sup>Required</sup> <a name="tlsRsaWithAes128CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcSha256CiphersEnabled"></a>

```java
public java.lang.Object getTlsRsaWithAes128CbcSha256CiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsRsaWithAes128CbcShaCiphersEnabled`<sup>Required</sup> <a name="tlsRsaWithAes128CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128CbcShaCiphersEnabled"></a>

```java
public java.lang.Object getTlsRsaWithAes128CbcShaCiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsRsaWithAes128GcmSha256CiphersEnabled`<sup>Required</sup> <a name="tlsRsaWithAes128GcmSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes128GcmSha256CiphersEnabled"></a>

```java
public java.lang.Object getTlsRsaWithAes128GcmSha256CiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsRsaWithAes256CbcSha256CiphersEnabled`<sup>Required</sup> <a name="tlsRsaWithAes256CbcSha256CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcSha256CiphersEnabled"></a>

```java
public java.lang.Object getTlsRsaWithAes256CbcSha256CiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsRsaWithAes256CbcShaCiphersEnabled`<sup>Required</sup> <a name="tlsRsaWithAes256CbcShaCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256CbcShaCiphersEnabled"></a>

```java
public java.lang.Object getTlsRsaWithAes256CbcShaCiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsRsaWithAes256GcmSha384CiphersEnabled`<sup>Required</sup> <a name="tlsRsaWithAes256GcmSha384CiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tlsRsaWithAes256GcmSha384CiphersEnabled"></a>

```java
public java.lang.Object getTlsRsaWithAes256GcmSha384CiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tripleDesCiphersEnabled`<sup>Required</sup> <a name="tripleDesCiphersEnabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.tripleDesCiphersEnabled"></a>

```java
public java.lang.Object getTripleDesCiphersEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSecurityOutputReference.property.internalValue"></a>

```java
public ApiManagementSecurity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSecurity">ApiManagementSecurity</a>

---


### ApiManagementSignInOutputReference <a name="ApiManagementSignInOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementSignInOutputReference;

new ApiManagementSignInOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignInOutputReference.property.internalValue"></a>

```java
public ApiManagementSignIn getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignIn">ApiManagementSignIn</a>

---


### ApiManagementSignUpOutputReference <a name="ApiManagementSignUpOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementSignUpOutputReference;

new ApiManagementSignUpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.putTermsOfService">putTermsOfService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTermsOfService` <a name="putTermsOfService" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.putTermsOfService"></a>

```java
public void putTermsOfService(ApiManagementSignUpTermsOfService value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.putTermsOfService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfService">termsOfService</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference">ApiManagementSignUpTermsOfServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfServiceInput">termsOfServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `termsOfService`<sup>Required</sup> <a name="termsOfService" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfService"></a>

```java
public ApiManagementSignUpTermsOfServiceOutputReference getTermsOfService();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference">ApiManagementSignUpTermsOfServiceOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `termsOfServiceInput`<sup>Optional</sup> <a name="termsOfServiceInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.termsOfServiceInput"></a>

```java
public ApiManagementSignUpTermsOfService getTermsOfServiceInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpOutputReference.property.internalValue"></a>

```java
public ApiManagementSignUp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUp">ApiManagementSignUp</a>

---


### ApiManagementSignUpTermsOfServiceOutputReference <a name="ApiManagementSignUpTermsOfServiceOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementSignUpTermsOfServiceOutputReference;

new ApiManagementSignUpTermsOfServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequiredInput">consentRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequired">consentRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consentRequiredInput`<sup>Optional</sup> <a name="consentRequiredInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequiredInput"></a>

```java
public java.lang.Object getConsentRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `consentRequired`<sup>Required</sup> <a name="consentRequired" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.consentRequired"></a>

```java
public java.lang.Object getConsentRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfServiceOutputReference.property.internalValue"></a>

```java
public ApiManagementSignUpTermsOfService getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementSignUpTermsOfService">ApiManagementSignUpTermsOfService</a>

---


### ApiManagementTenantAccessOutputReference <a name="ApiManagementTenantAccessOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementTenantAccessOutputReference;

new ApiManagementTenantAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.secondaryKey">secondaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.secondaryKey"></a>

```java
public java.lang.String getSecondaryKey();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccessOutputReference.property.internalValue"></a>

```java
public ApiManagementTenantAccess getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTenantAccess">ApiManagementTenantAccess</a>

---


### ApiManagementTimeoutsOutputReference <a name="ApiManagementTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementTimeoutsOutputReference;

new ApiManagementTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementTimeouts">ApiManagementTimeouts</a>

---


### ApiManagementVirtualNetworkConfigurationOutputReference <a name="ApiManagementVirtualNetworkConfigurationOutputReference" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management.ApiManagementVirtualNetworkConfigurationOutputReference;

new ApiManagementVirtualNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public ApiManagementVirtualNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagement.ApiManagementVirtualNetworkConfiguration">ApiManagementVirtualNetworkConfiguration</a>

---



