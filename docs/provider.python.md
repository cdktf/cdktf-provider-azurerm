# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-azurerm.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzurermProvider <a name="AzurermProvider" id="@cdktf/provider-azurerm.provider.AzurermProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs azurerm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProvider(
  scope: Construct,
  id: str,
  ado_pipeline_service_connection_id: str = None,
  alias: str = None,
  auxiliary_tenant_ids: typing.List[str] = None,
  client_certificate: str = None,
  client_certificate_password: str = None,
  client_certificate_path: str = None,
  client_id: str = None,
  client_id_file_path: str = None,
  client_secret: str = None,
  client_secret_file_path: str = None,
  disable_correlation_request_id: typing.Union[bool, IResolvable] = None,
  disable_terraform_partner_id: typing.Union[bool, IResolvable] = None,
  environment: str = None,
  features: typing.Union[IResolvable, typing.List[AzurermProviderFeatures]] = None,
  metadata_host: str = None,
  msi_api_version: str = None,
  msi_endpoint: str = None,
  oidc_request_token: str = None,
  oidc_request_url: str = None,
  oidc_token: str = None,
  oidc_token_file_path: str = None,
  partner_id: str = None,
  resource_provider_registrations: str = None,
  resource_providers_to_register: typing.List[str] = None,
  skip_provider_registration: typing.Union[bool, IResolvable] = None,
  storage_use_azuread: typing.Union[bool, IResolvable] = None,
  subscription_id: str = None,
  tenant_id: str = None,
  use_aks_workload_identity: typing.Union[bool, IResolvable] = None,
  use_cli: typing.Union[bool, IResolvable] = None,
  use_msi: typing.Union[bool, IResolvable] = None,
  use_oidc: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.adoPipelineServiceConnectionId">ado_pipeline_service_connection_id</a></code> | <code>str</code> | The Azure DevOps Pipeline Service Connection ID. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.auxiliaryTenantIds">auxiliary_tenant_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientCertificate">client_certificate</a></code> | <code>str</code> | Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientCertificatePassword">client_certificate_password</a></code> | <code>str</code> | The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientCertificatePath">client_certificate_path</a></code> | <code>str</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | The Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientIdFilePath">client_id_file_path</a></code> | <code>str</code> | The path to a file containing the Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientSecretFilePath">client_secret_file_path</a></code> | <code>str</code> | The path to a file containing the Client Secret which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.disableCorrelationRequestId">disable_correlation_request_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.disableTerraformPartnerId">disable_terraform_partner_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.features">features</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a>]]</code> | features block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.metadataHost">metadata_host</a></code> | <code>str</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.msiApiVersion">msi_api_version</a></code> | <code>str</code> | The API version to use for Managed Service Identity (IMDS) - for cases where the default API version is not supported by the endpoint. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.msiEndpoint">msi_endpoint</a></code> | <code>str</code> | The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.oidcRequestToken">oidc_request_token</a></code> | <code>str</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.oidcRequestUrl">oidc_request_url</a></code> | <code>str</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.oidcToken">oidc_token</a></code> | <code>str</code> | The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.oidcTokenFilePath">oidc_token_file_path</a></code> | <code>str</code> | The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.partnerId">partner_id</a></code> | <code>str</code> | A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.resourceProviderRegistrations">resource_provider_registrations</a></code> | <code>str</code> | The set of Resource Providers which should be automatically registered for the subscription. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.resourceProvidersToRegister">resource_providers_to_register</a></code> | <code>typing.List[str]</code> | A list of Resource Providers to explicitly register for the subscription, in addition to those specified by the `resource_provider_registrations` property. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.skipProviderRegistration">skip_provider_registration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already registered? |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.storageUseAzuread">storage_use_azuread</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the AzureRM Provider use Azure AD Authentication when accessing the Storage Data Plane APIs? |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | The Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | The Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.useAksWorkloadIdentity">use_aks_workload_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow Azure AKS Workload Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.useCli">use_cli</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow Azure CLI to be used for Authentication. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.useMsi">use_msi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow Managed Service Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.useOidc">use_oidc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow OpenID Connect to be used for authentication. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `ado_pipeline_service_connection_id`<sup>Optional</sup> <a name="ado_pipeline_service_connection_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.adoPipelineServiceConnectionId"></a>

- *Type:* str

The Azure DevOps Pipeline Service Connection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#ado_pipeline_service_connection_id AzurermProvider#ado_pipeline_service_connection_id}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#alias AzurermProvider#alias}

---

##### `auxiliary_tenant_ids`<sup>Optional</sup> <a name="auxiliary_tenant_ids" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.auxiliaryTenantIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}.

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientCertificate"></a>

- *Type:* str

Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#client_certificate AzurermProvider#client_certificate}

---

##### `client_certificate_password`<sup>Optional</sup> <a name="client_certificate_password" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientCertificatePassword"></a>

- *Type:* str

The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#client_certificate_password AzurermProvider#client_certificate_password}

---

##### `client_certificate_path`<sup>Optional</sup> <a name="client_certificate_path" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientCertificatePath"></a>

- *Type:* str

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#client_certificate_path AzurermProvider#client_certificate_path}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientId"></a>

- *Type:* str

The Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#client_id AzurermProvider#client_id}

---

##### `client_id_file_path`<sup>Optional</sup> <a name="client_id_file_path" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientIdFilePath"></a>

- *Type:* str

The path to a file containing the Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#client_id_file_path AzurermProvider#client_id_file_path}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientSecret"></a>

- *Type:* str

The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#client_secret AzurermProvider#client_secret}

---

##### `client_secret_file_path`<sup>Optional</sup> <a name="client_secret_file_path" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientSecretFilePath"></a>

- *Type:* str

The path to a file containing the Client Secret which should be used.

For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#client_secret_file_path AzurermProvider#client_secret_file_path}

---

##### `disable_correlation_request_id`<sup>Optional</sup> <a name="disable_correlation_request_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.disableCorrelationRequestId"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#disable_correlation_request_id AzurermProvider#disable_correlation_request_id}

---

##### `disable_terraform_partner_id`<sup>Optional</sup> <a name="disable_terraform_partner_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.disableTerraformPartnerId"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#disable_terraform_partner_id AzurermProvider#disable_terraform_partner_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.environment"></a>

- *Type:* str

The Cloud Environment which should be used.

Possible values are public, usgovernment, and china. Defaults to public. Not used and should not be specified when `metadata_host` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#environment AzurermProvider#environment}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.features"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a>]]

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#features AzurermProvider#features}

---

##### `metadata_host`<sup>Optional</sup> <a name="metadata_host" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.metadataHost"></a>

- *Type:* str

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#metadata_host AzurermProvider#metadata_host}

---

##### `msi_api_version`<sup>Optional</sup> <a name="msi_api_version" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.msiApiVersion"></a>

- *Type:* str

The API version to use for Managed Service Identity (IMDS) - for cases where the default API version is not supported by the endpoint.

e.g. for Azure Container Apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#msi_api_version AzurermProvider#msi_api_version}

---

##### `msi_endpoint`<sup>Optional</sup> <a name="msi_endpoint" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.msiEndpoint"></a>

- *Type:* str

The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#msi_endpoint AzurermProvider#msi_endpoint}

---

##### `oidc_request_token`<sup>Optional</sup> <a name="oidc_request_token" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.oidcRequestToken"></a>

- *Type:* str

The bearer token for the request to the OIDC provider.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#oidc_request_token AzurermProvider#oidc_request_token}

---

##### `oidc_request_url`<sup>Optional</sup> <a name="oidc_request_url" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.oidcRequestUrl"></a>

- *Type:* str

The URL for the OIDC provider from which to request an ID token.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#oidc_request_url AzurermProvider#oidc_request_url}

---

##### `oidc_token`<sup>Optional</sup> <a name="oidc_token" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.oidcToken"></a>

- *Type:* str

The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#oidc_token AzurermProvider#oidc_token}

---

##### `oidc_token_file_path`<sup>Optional</sup> <a name="oidc_token_file_path" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.oidcTokenFilePath"></a>

- *Type:* str

The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#oidc_token_file_path AzurermProvider#oidc_token_file_path}

---

##### `partner_id`<sup>Optional</sup> <a name="partner_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.partnerId"></a>

- *Type:* str

A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#partner_id AzurermProvider#partner_id}

---

##### `resource_provider_registrations`<sup>Optional</sup> <a name="resource_provider_registrations" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.resourceProviderRegistrations"></a>

- *Type:* str

The set of Resource Providers which should be automatically registered for the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#resource_provider_registrations AzurermProvider#resource_provider_registrations}

---

##### `resource_providers_to_register`<sup>Optional</sup> <a name="resource_providers_to_register" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.resourceProvidersToRegister"></a>

- *Type:* typing.List[str]

A list of Resource Providers to explicitly register for the subscription, in addition to those specified by the `resource_provider_registrations` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#resource_providers_to_register AzurermProvider#resource_providers_to_register}

---

##### `skip_provider_registration`<sup>Optional</sup> <a name="skip_provider_registration" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.skipProviderRegistration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already registered?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#skip_provider_registration AzurermProvider#skip_provider_registration}

---

##### `storage_use_azuread`<sup>Optional</sup> <a name="storage_use_azuread" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.storageUseAzuread"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the AzureRM Provider use Azure AD Authentication when accessing the Storage Data Plane APIs?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#storage_use_azuread AzurermProvider#storage_use_azuread}

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.subscriptionId"></a>

- *Type:* str

The Subscription ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#subscription_id AzurermProvider#subscription_id}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.tenantId"></a>

- *Type:* str

The Tenant ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#tenant_id AzurermProvider#tenant_id}

---

##### `use_aks_workload_identity`<sup>Optional</sup> <a name="use_aks_workload_identity" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.useAksWorkloadIdentity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow Azure AKS Workload Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#use_aks_workload_identity AzurermProvider#use_aks_workload_identity}

---

##### `use_cli`<sup>Optional</sup> <a name="use_cli" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.useCli"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow Azure CLI to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#use_cli AzurermProvider#use_cli}

---

##### `use_msi`<sup>Optional</sup> <a name="use_msi" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.useMsi"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow Managed Service Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#use_msi AzurermProvider#use_msi}

---

##### `use_oidc`<sup>Optional</sup> <a name="use_oidc" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.useOidc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow OpenID Connect to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#use_oidc AzurermProvider#use_oidc}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetAdoPipelineServiceConnectionId">reset_ado_pipeline_service_connection_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetAuxiliaryTenantIds">reset_auxiliary_tenant_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificate">reset_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificatePassword">reset_client_certificate_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificatePath">reset_client_certificate_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientIdFilePath">reset_client_id_file_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientSecretFilePath">reset_client_secret_file_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetDisableCorrelationRequestId">reset_disable_correlation_request_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetDisableTerraformPartnerId">reset_disable_terraform_partner_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetFeatures">reset_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetMetadataHost">reset_metadata_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetMsiApiVersion">reset_msi_api_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetMsiEndpoint">reset_msi_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcRequestToken">reset_oidc_request_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcRequestUrl">reset_oidc_request_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcToken">reset_oidc_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcTokenFilePath">reset_oidc_token_file_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetPartnerId">reset_partner_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetResourceProviderRegistrations">reset_resource_provider_registrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetResourceProvidersToRegister">reset_resource_providers_to_register</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetSkipProviderRegistration">reset_skip_provider_registration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetStorageUseAzuread">reset_storage_use_azuread</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetUseAksWorkloadIdentity">reset_use_aks_workload_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetUseCli">reset_use_cli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetUseMsi">reset_use_msi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetUseOidc">reset_use_oidc</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.provider.AzurermProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.provider.AzurermProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.provider.AzurermProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.provider.AzurermProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.provider.AzurermProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.provider.AzurermProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.provider.AzurermProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_ado_pipeline_service_connection_id` <a name="reset_ado_pipeline_service_connection_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetAdoPipelineServiceConnectionId"></a>

```python
def reset_ado_pipeline_service_connection_id() -> None
```

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_auxiliary_tenant_ids` <a name="reset_auxiliary_tenant_ids" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetAuxiliaryTenantIds"></a>

```python
def reset_auxiliary_tenant_ids() -> None
```

##### `reset_client_certificate` <a name="reset_client_certificate" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificate"></a>

```python
def reset_client_certificate() -> None
```

##### `reset_client_certificate_password` <a name="reset_client_certificate_password" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificatePassword"></a>

```python
def reset_client_certificate_password() -> None
```

##### `reset_client_certificate_path` <a name="reset_client_certificate_path" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificatePath"></a>

```python
def reset_client_certificate_path() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_id_file_path` <a name="reset_client_id_file_path" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientIdFilePath"></a>

```python
def reset_client_id_file_path() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_client_secret_file_path` <a name="reset_client_secret_file_path" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientSecretFilePath"></a>

```python
def reset_client_secret_file_path() -> None
```

##### `reset_disable_correlation_request_id` <a name="reset_disable_correlation_request_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetDisableCorrelationRequestId"></a>

```python
def reset_disable_correlation_request_id() -> None
```

##### `reset_disable_terraform_partner_id` <a name="reset_disable_terraform_partner_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetDisableTerraformPartnerId"></a>

```python
def reset_disable_terraform_partner_id() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_features` <a name="reset_features" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetFeatures"></a>

```python
def reset_features() -> None
```

##### `reset_metadata_host` <a name="reset_metadata_host" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetMetadataHost"></a>

```python
def reset_metadata_host() -> None
```

##### `reset_msi_api_version` <a name="reset_msi_api_version" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetMsiApiVersion"></a>

```python
def reset_msi_api_version() -> None
```

##### `reset_msi_endpoint` <a name="reset_msi_endpoint" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetMsiEndpoint"></a>

```python
def reset_msi_endpoint() -> None
```

##### `reset_oidc_request_token` <a name="reset_oidc_request_token" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcRequestToken"></a>

```python
def reset_oidc_request_token() -> None
```

##### `reset_oidc_request_url` <a name="reset_oidc_request_url" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcRequestUrl"></a>

```python
def reset_oidc_request_url() -> None
```

##### `reset_oidc_token` <a name="reset_oidc_token" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcToken"></a>

```python
def reset_oidc_token() -> None
```

##### `reset_oidc_token_file_path` <a name="reset_oidc_token_file_path" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcTokenFilePath"></a>

```python
def reset_oidc_token_file_path() -> None
```

##### `reset_partner_id` <a name="reset_partner_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetPartnerId"></a>

```python
def reset_partner_id() -> None
```

##### `reset_resource_provider_registrations` <a name="reset_resource_provider_registrations" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetResourceProviderRegistrations"></a>

```python
def reset_resource_provider_registrations() -> None
```

##### `reset_resource_providers_to_register` <a name="reset_resource_providers_to_register" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetResourceProvidersToRegister"></a>

```python
def reset_resource_providers_to_register() -> None
```

##### `reset_skip_provider_registration` <a name="reset_skip_provider_registration" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetSkipProviderRegistration"></a>

```python
def reset_skip_provider_registration() -> None
```

##### `reset_storage_use_azuread` <a name="reset_storage_use_azuread" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetStorageUseAzuread"></a>

```python
def reset_storage_use_azuread() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_use_aks_workload_identity` <a name="reset_use_aks_workload_identity" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetUseAksWorkloadIdentity"></a>

```python
def reset_use_aks_workload_identity() -> None
```

##### `reset_use_cli` <a name="reset_use_cli" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetUseCli"></a>

```python
def reset_use_cli() -> None
```

##### `reset_use_msi` <a name="reset_use_msi" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetUseMsi"></a>

```python
def reset_use_msi() -> None
```

##### `reset_use_oidc` <a name="reset_use_oidc" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetUseOidc"></a>

```python
def reset_use_oidc() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AzurermProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.provider.AzurermProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.provider.AzurermProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AzurermProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AzurermProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AzurermProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.provider.AzurermProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AzurermProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.adoPipelineServiceConnectionIdInput">ado_pipeline_service_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIdsInput">auxiliary_tenant_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificateInput">client_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePasswordInput">client_certificate_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePathInput">client_certificate_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePathInput">client_id_file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePathInput">client_secret_file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestIdInput">disable_correlation_request_id_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerIdInput">disable_terraform_partner_id_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.featuresInput">features_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHostInput">metadata_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.msiApiVersionInput">msi_api_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpointInput">msi_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestTokenInput">oidc_request_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrlInput">oidc_request_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePathInput">oidc_token_file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenInput">oidc_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerIdInput">partner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProviderRegistrationsInput">resource_provider_registrations_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProvidersToRegisterInput">resource_providers_to_register_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistrationInput">skip_provider_registration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzureadInput">storage_use_azuread_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentityInput">use_aks_workload_identity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useCliInput">use_cli_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsiInput">use_msi_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidcInput">use_oidc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.adoPipelineServiceConnectionId">ado_pipeline_service_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIds">auxiliary_tenant_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePassword">client_certificate_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePath">client_certificate_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePath">client_id_file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePath">client_secret_file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestId">disable_correlation_request_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerId">disable_terraform_partner_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.features">features</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHost">metadata_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.msiApiVersion">msi_api_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpoint">msi_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestToken">oidc_request_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrl">oidc_request_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcToken">oidc_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePath">oidc_token_file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerId">partner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProviderRegistrations">resource_provider_registrations</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProvidersToRegister">resource_providers_to_register</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistration">skip_provider_registration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzuread">storage_use_azuread</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentity">use_aks_workload_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useCli">use_cli</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsi">use_msi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidc">use_oidc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `ado_pipeline_service_connection_id_input`<sup>Optional</sup> <a name="ado_pipeline_service_connection_id_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.adoPipelineServiceConnectionIdInput"></a>

```python
ado_pipeline_service_connection_id_input: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `auxiliary_tenant_ids_input`<sup>Optional</sup> <a name="auxiliary_tenant_ids_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIdsInput"></a>

```python
auxiliary_tenant_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_certificate_input`<sup>Optional</sup> <a name="client_certificate_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificateInput"></a>

```python
client_certificate_input: str
```

- *Type:* str

---

##### `client_certificate_password_input`<sup>Optional</sup> <a name="client_certificate_password_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePasswordInput"></a>

```python
client_certificate_password_input: str
```

- *Type:* str

---

##### `client_certificate_path_input`<sup>Optional</sup> <a name="client_certificate_path_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePathInput"></a>

```python
client_certificate_path_input: str
```

- *Type:* str

---

##### `client_id_file_path_input`<sup>Optional</sup> <a name="client_id_file_path_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePathInput"></a>

```python
client_id_file_path_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_file_path_input`<sup>Optional</sup> <a name="client_secret_file_path_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePathInput"></a>

```python
client_secret_file_path_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `disable_correlation_request_id_input`<sup>Optional</sup> <a name="disable_correlation_request_id_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestIdInput"></a>

```python
disable_correlation_request_id_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_terraform_partner_id_input`<sup>Optional</sup> <a name="disable_terraform_partner_id_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerIdInput"></a>

```python
disable_terraform_partner_id_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `features_input`<sup>Optional</sup> <a name="features_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.featuresInput"></a>

```python
features_input: typing.Union[IResolvable, typing.List[AzurermProviderFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a>]]

---

##### `metadata_host_input`<sup>Optional</sup> <a name="metadata_host_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHostInput"></a>

```python
metadata_host_input: str
```

- *Type:* str

---

##### `msi_api_version_input`<sup>Optional</sup> <a name="msi_api_version_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.msiApiVersionInput"></a>

```python
msi_api_version_input: str
```

- *Type:* str

---

##### `msi_endpoint_input`<sup>Optional</sup> <a name="msi_endpoint_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpointInput"></a>

```python
msi_endpoint_input: str
```

- *Type:* str

---

##### `oidc_request_token_input`<sup>Optional</sup> <a name="oidc_request_token_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestTokenInput"></a>

```python
oidc_request_token_input: str
```

- *Type:* str

---

##### `oidc_request_url_input`<sup>Optional</sup> <a name="oidc_request_url_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrlInput"></a>

```python
oidc_request_url_input: str
```

- *Type:* str

---

##### `oidc_token_file_path_input`<sup>Optional</sup> <a name="oidc_token_file_path_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePathInput"></a>

```python
oidc_token_file_path_input: str
```

- *Type:* str

---

##### `oidc_token_input`<sup>Optional</sup> <a name="oidc_token_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenInput"></a>

```python
oidc_token_input: str
```

- *Type:* str

---

##### `partner_id_input`<sup>Optional</sup> <a name="partner_id_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerIdInput"></a>

```python
partner_id_input: str
```

- *Type:* str

---

##### `resource_provider_registrations_input`<sup>Optional</sup> <a name="resource_provider_registrations_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProviderRegistrationsInput"></a>

```python
resource_provider_registrations_input: str
```

- *Type:* str

---

##### `resource_providers_to_register_input`<sup>Optional</sup> <a name="resource_providers_to_register_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProvidersToRegisterInput"></a>

```python
resource_providers_to_register_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_provider_registration_input`<sup>Optional</sup> <a name="skip_provider_registration_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistrationInput"></a>

```python
skip_provider_registration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_use_azuread_input`<sup>Optional</sup> <a name="storage_use_azuread_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzureadInput"></a>

```python
storage_use_azuread_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `use_aks_workload_identity_input`<sup>Optional</sup> <a name="use_aks_workload_identity_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentityInput"></a>

```python
use_aks_workload_identity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_cli_input`<sup>Optional</sup> <a name="use_cli_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useCliInput"></a>

```python
use_cli_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_msi_input`<sup>Optional</sup> <a name="use_msi_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsiInput"></a>

```python
use_msi_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_oidc_input`<sup>Optional</sup> <a name="use_oidc_input" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidcInput"></a>

```python
use_oidc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ado_pipeline_service_connection_id`<sup>Optional</sup> <a name="ado_pipeline_service_connection_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.adoPipelineServiceConnectionId"></a>

```python
ado_pipeline_service_connection_id: str
```

- *Type:* str

---

##### `auxiliary_tenant_ids`<sup>Optional</sup> <a name="auxiliary_tenant_ids" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIds"></a>

```python
auxiliary_tenant_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `client_certificate_password`<sup>Optional</sup> <a name="client_certificate_password" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePassword"></a>

```python
client_certificate_password: str
```

- *Type:* str

---

##### `client_certificate_path`<sup>Optional</sup> <a name="client_certificate_path" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePath"></a>

```python
client_certificate_path: str
```

- *Type:* str

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_id_file_path`<sup>Optional</sup> <a name="client_id_file_path" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePath"></a>

```python
client_id_file_path: str
```

- *Type:* str

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_file_path`<sup>Optional</sup> <a name="client_secret_file_path" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePath"></a>

```python
client_secret_file_path: str
```

- *Type:* str

---

##### `disable_correlation_request_id`<sup>Optional</sup> <a name="disable_correlation_request_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestId"></a>

```python
disable_correlation_request_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_terraform_partner_id`<sup>Optional</sup> <a name="disable_terraform_partner_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerId"></a>

```python
disable_terraform_partner_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.features"></a>

```python
features: typing.Union[IResolvable, typing.List[AzurermProviderFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a>]]

---

##### `metadata_host`<sup>Optional</sup> <a name="metadata_host" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHost"></a>

```python
metadata_host: str
```

- *Type:* str

---

##### `msi_api_version`<sup>Optional</sup> <a name="msi_api_version" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.msiApiVersion"></a>

```python
msi_api_version: str
```

- *Type:* str

---

##### `msi_endpoint`<sup>Optional</sup> <a name="msi_endpoint" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpoint"></a>

```python
msi_endpoint: str
```

- *Type:* str

---

##### `oidc_request_token`<sup>Optional</sup> <a name="oidc_request_token" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestToken"></a>

```python
oidc_request_token: str
```

- *Type:* str

---

##### `oidc_request_url`<sup>Optional</sup> <a name="oidc_request_url" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrl"></a>

```python
oidc_request_url: str
```

- *Type:* str

---

##### `oidc_token`<sup>Optional</sup> <a name="oidc_token" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcToken"></a>

```python
oidc_token: str
```

- *Type:* str

---

##### `oidc_token_file_path`<sup>Optional</sup> <a name="oidc_token_file_path" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePath"></a>

```python
oidc_token_file_path: str
```

- *Type:* str

---

##### `partner_id`<sup>Optional</sup> <a name="partner_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerId"></a>

```python
partner_id: str
```

- *Type:* str

---

##### `resource_provider_registrations`<sup>Optional</sup> <a name="resource_provider_registrations" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProviderRegistrations"></a>

```python
resource_provider_registrations: str
```

- *Type:* str

---

##### `resource_providers_to_register`<sup>Optional</sup> <a name="resource_providers_to_register" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.resourceProvidersToRegister"></a>

```python
resource_providers_to_register: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_provider_registration`<sup>Optional</sup> <a name="skip_provider_registration" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistration"></a>

```python
skip_provider_registration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_use_azuread`<sup>Optional</sup> <a name="storage_use_azuread" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzuread"></a>

```python
storage_use_azuread: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `use_aks_workload_identity`<sup>Optional</sup> <a name="use_aks_workload_identity" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useAksWorkloadIdentity"></a>

```python
use_aks_workload_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_cli`<sup>Optional</sup> <a name="use_cli" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useCli"></a>

```python
use_cli: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_msi`<sup>Optional</sup> <a name="use_msi" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsi"></a>

```python
use_msi: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_oidc`<sup>Optional</sup> <a name="use_oidc" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidc"></a>

```python
use_oidc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AzurermProviderConfig <a name="AzurermProviderConfig" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderConfig(
  ado_pipeline_service_connection_id: str = None,
  alias: str = None,
  auxiliary_tenant_ids: typing.List[str] = None,
  client_certificate: str = None,
  client_certificate_password: str = None,
  client_certificate_path: str = None,
  client_id: str = None,
  client_id_file_path: str = None,
  client_secret: str = None,
  client_secret_file_path: str = None,
  disable_correlation_request_id: typing.Union[bool, IResolvable] = None,
  disable_terraform_partner_id: typing.Union[bool, IResolvable] = None,
  environment: str = None,
  features: typing.Union[IResolvable, typing.List[AzurermProviderFeatures]] = None,
  metadata_host: str = None,
  msi_api_version: str = None,
  msi_endpoint: str = None,
  oidc_request_token: str = None,
  oidc_request_url: str = None,
  oidc_token: str = None,
  oidc_token_file_path: str = None,
  partner_id: str = None,
  resource_provider_registrations: str = None,
  resource_providers_to_register: typing.List[str] = None,
  skip_provider_registration: typing.Union[bool, IResolvable] = None,
  storage_use_azuread: typing.Union[bool, IResolvable] = None,
  subscription_id: str = None,
  tenant_id: str = None,
  use_aks_workload_identity: typing.Union[bool, IResolvable] = None,
  use_cli: typing.Union[bool, IResolvable] = None,
  use_msi: typing.Union[bool, IResolvable] = None,
  use_oidc: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.adoPipelineServiceConnectionId">ado_pipeline_service_connection_id</a></code> | <code>str</code> | The Azure DevOps Pipeline Service Connection ID. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.auxiliaryTenantIds">auxiliary_tenant_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificate">client_certificate</a></code> | <code>str</code> | Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePassword">client_certificate_password</a></code> | <code>str</code> | The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePath">client_certificate_path</a></code> | <code>str</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientId">client_id</a></code> | <code>str</code> | The Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientIdFilePath">client_id_file_path</a></code> | <code>str</code> | The path to a file containing the Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecretFilePath">client_secret_file_path</a></code> | <code>str</code> | The path to a file containing the Client Secret which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableCorrelationRequestId">disable_correlation_request_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableTerraformPartnerId">disable_terraform_partner_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.environment">environment</a></code> | <code>str</code> | The Cloud Environment which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.features">features</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a>]]</code> | features block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.metadataHost">metadata_host</a></code> | <code>str</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.msiApiVersion">msi_api_version</a></code> | <code>str</code> | The API version to use for Managed Service Identity (IMDS) - for cases where the default API version is not supported by the endpoint. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.msiEndpoint">msi_endpoint</a></code> | <code>str</code> | The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestToken">oidc_request_token</a></code> | <code>str</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestUrl">oidc_request_url</a></code> | <code>str</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcToken">oidc_token</a></code> | <code>str</code> | The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcTokenFilePath">oidc_token_file_path</a></code> | <code>str</code> | The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.partnerId">partner_id</a></code> | <code>str</code> | A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.resourceProviderRegistrations">resource_provider_registrations</a></code> | <code>str</code> | The set of Resource Providers which should be automatically registered for the subscription. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.resourceProvidersToRegister">resource_providers_to_register</a></code> | <code>typing.List[str]</code> | A list of Resource Providers to explicitly register for the subscription, in addition to those specified by the `resource_provider_registrations` property. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.skipProviderRegistration">skip_provider_registration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already registered? |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.storageUseAzuread">storage_use_azuread</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should the AzureRM Provider use Azure AD Authentication when accessing the Storage Data Plane APIs? |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | The Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | The Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useAksWorkloadIdentity">use_aks_workload_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow Azure AKS Workload Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useCli">use_cli</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow Azure CLI to be used for Authentication. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useMsi">use_msi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow Managed Service Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useOidc">use_oidc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow OpenID Connect to be used for authentication. |

---

##### `ado_pipeline_service_connection_id`<sup>Optional</sup> <a name="ado_pipeline_service_connection_id" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.adoPipelineServiceConnectionId"></a>

```python
ado_pipeline_service_connection_id: str
```

- *Type:* str

The Azure DevOps Pipeline Service Connection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#ado_pipeline_service_connection_id AzurermProvider#ado_pipeline_service_connection_id}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#alias AzurermProvider#alias}

---

##### `auxiliary_tenant_ids`<sup>Optional</sup> <a name="auxiliary_tenant_ids" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.auxiliaryTenantIds"></a>

```python
auxiliary_tenant_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}.

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#client_certificate AzurermProvider#client_certificate}

---

##### `client_certificate_password`<sup>Optional</sup> <a name="client_certificate_password" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePassword"></a>

```python
client_certificate_password: str
```

- *Type:* str

The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#client_certificate_password AzurermProvider#client_certificate_password}

---

##### `client_certificate_path`<sup>Optional</sup> <a name="client_certificate_path" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePath"></a>

```python
client_certificate_path: str
```

- *Type:* str

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#client_certificate_path AzurermProvider#client_certificate_path}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#client_id AzurermProvider#client_id}

---

##### `client_id_file_path`<sup>Optional</sup> <a name="client_id_file_path" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientIdFilePath"></a>

```python
client_id_file_path: str
```

- *Type:* str

The path to a file containing the Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#client_id_file_path AzurermProvider#client_id_file_path}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#client_secret AzurermProvider#client_secret}

---

##### `client_secret_file_path`<sup>Optional</sup> <a name="client_secret_file_path" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecretFilePath"></a>

```python
client_secret_file_path: str
```

- *Type:* str

The path to a file containing the Client Secret which should be used.

For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#client_secret_file_path AzurermProvider#client_secret_file_path}

---

##### `disable_correlation_request_id`<sup>Optional</sup> <a name="disable_correlation_request_id" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableCorrelationRequestId"></a>

```python
disable_correlation_request_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#disable_correlation_request_id AzurermProvider#disable_correlation_request_id}

---

##### `disable_terraform_partner_id`<sup>Optional</sup> <a name="disable_terraform_partner_id" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableTerraformPartnerId"></a>

```python
disable_terraform_partner_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#disable_terraform_partner_id AzurermProvider#disable_terraform_partner_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The Cloud Environment which should be used.

Possible values are public, usgovernment, and china. Defaults to public. Not used and should not be specified when `metadata_host` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#environment AzurermProvider#environment}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.features"></a>

```python
features: typing.Union[IResolvable, typing.List[AzurermProviderFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a>]]

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#features AzurermProvider#features}

---

##### `metadata_host`<sup>Optional</sup> <a name="metadata_host" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.metadataHost"></a>

```python
metadata_host: str
```

- *Type:* str

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#metadata_host AzurermProvider#metadata_host}

---

##### `msi_api_version`<sup>Optional</sup> <a name="msi_api_version" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.msiApiVersion"></a>

```python
msi_api_version: str
```

- *Type:* str

The API version to use for Managed Service Identity (IMDS) - for cases where the default API version is not supported by the endpoint.

e.g. for Azure Container Apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#msi_api_version AzurermProvider#msi_api_version}

---

##### `msi_endpoint`<sup>Optional</sup> <a name="msi_endpoint" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.msiEndpoint"></a>

```python
msi_endpoint: str
```

- *Type:* str

The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#msi_endpoint AzurermProvider#msi_endpoint}

---

##### `oidc_request_token`<sup>Optional</sup> <a name="oidc_request_token" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestToken"></a>

```python
oidc_request_token: str
```

- *Type:* str

The bearer token for the request to the OIDC provider.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#oidc_request_token AzurermProvider#oidc_request_token}

---

##### `oidc_request_url`<sup>Optional</sup> <a name="oidc_request_url" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestUrl"></a>

```python
oidc_request_url: str
```

- *Type:* str

The URL for the OIDC provider from which to request an ID token.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#oidc_request_url AzurermProvider#oidc_request_url}

---

##### `oidc_token`<sup>Optional</sup> <a name="oidc_token" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcToken"></a>

```python
oidc_token: str
```

- *Type:* str

The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#oidc_token AzurermProvider#oidc_token}

---

##### `oidc_token_file_path`<sup>Optional</sup> <a name="oidc_token_file_path" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcTokenFilePath"></a>

```python
oidc_token_file_path: str
```

- *Type:* str

The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#oidc_token_file_path AzurermProvider#oidc_token_file_path}

---

##### `partner_id`<sup>Optional</sup> <a name="partner_id" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.partnerId"></a>

```python
partner_id: str
```

- *Type:* str

A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#partner_id AzurermProvider#partner_id}

---

##### `resource_provider_registrations`<sup>Optional</sup> <a name="resource_provider_registrations" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.resourceProviderRegistrations"></a>

```python
resource_provider_registrations: str
```

- *Type:* str

The set of Resource Providers which should be automatically registered for the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#resource_provider_registrations AzurermProvider#resource_provider_registrations}

---

##### `resource_providers_to_register`<sup>Optional</sup> <a name="resource_providers_to_register" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.resourceProvidersToRegister"></a>

```python
resource_providers_to_register: typing.List[str]
```

- *Type:* typing.List[str]

A list of Resource Providers to explicitly register for the subscription, in addition to those specified by the `resource_provider_registrations` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#resource_providers_to_register AzurermProvider#resource_providers_to_register}

---

##### `skip_provider_registration`<sup>Optional</sup> <a name="skip_provider_registration" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.skipProviderRegistration"></a>

```python
skip_provider_registration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already registered?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#skip_provider_registration AzurermProvider#skip_provider_registration}

---

##### `storage_use_azuread`<sup>Optional</sup> <a name="storage_use_azuread" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.storageUseAzuread"></a>

```python
storage_use_azuread: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should the AzureRM Provider use Azure AD Authentication when accessing the Storage Data Plane APIs?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#storage_use_azuread AzurermProvider#storage_use_azuread}

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

The Subscription ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#subscription_id AzurermProvider#subscription_id}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

The Tenant ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#tenant_id AzurermProvider#tenant_id}

---

##### `use_aks_workload_identity`<sup>Optional</sup> <a name="use_aks_workload_identity" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useAksWorkloadIdentity"></a>

```python
use_aks_workload_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow Azure AKS Workload Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#use_aks_workload_identity AzurermProvider#use_aks_workload_identity}

---

##### `use_cli`<sup>Optional</sup> <a name="use_cli" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useCli"></a>

```python
use_cli: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow Azure CLI to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#use_cli AzurermProvider#use_cli}

---

##### `use_msi`<sup>Optional</sup> <a name="use_msi" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useMsi"></a>

```python
use_msi: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow Managed Service Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#use_msi AzurermProvider#use_msi}

---

##### `use_oidc`<sup>Optional</sup> <a name="use_oidc" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useOidc"></a>

```python
use_oidc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow OpenID Connect to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#use_oidc AzurermProvider#use_oidc}

---

### AzurermProviderFeatures <a name="AzurermProviderFeatures" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeatures(
  api_management: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesApiManagement]] = None,
  app_configuration: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesAppConfiguration]] = None,
  application_insights: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesApplicationInsights]] = None,
  cognitive_account: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesCognitiveAccount]] = None,
  databricks_workspace: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesDatabricksWorkspace]] = None,
  key_vault: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesKeyVault]] = None,
  log_analytics_workspace: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesLogAnalyticsWorkspace]] = None,
  machine_learning: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesMachineLearning]] = None,
  managed_disk: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesManagedDisk]] = None,
  netapp: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesNetapp]] = None,
  postgresql_flexible_server: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesPostgresqlFlexibleServer]] = None,
  recovery_service: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesRecoveryService]] = None,
  recovery_services_vaults: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesRecoveryServicesVaults]] = None,
  resource_group: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesResourceGroup]] = None,
  storage: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesStorage]] = None,
  subscription: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesSubscription]] = None,
  template_deployment: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesTemplateDeployment]] = None,
  virtual_machine: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesVirtualMachine]] = None,
  virtual_machine_scale_set: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesVirtualMachineScaleSet]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.apiManagement">api_management</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement">AzurermProviderFeaturesApiManagement</a>]]</code> | api_management block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.appConfiguration">app_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration">AzurermProviderFeaturesAppConfiguration</a>]]</code> | app_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.applicationInsights">application_insights</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights">AzurermProviderFeaturesApplicationInsights</a>]]</code> | application_insights block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.cognitiveAccount">cognitive_account</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount">AzurermProviderFeaturesCognitiveAccount</a>]]</code> | cognitive_account block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.databricksWorkspace">databricks_workspace</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesDatabricksWorkspace">AzurermProviderFeaturesDatabricksWorkspace</a>]]</code> | databricks_workspace block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.keyVault">key_vault</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault">AzurermProviderFeaturesKeyVault</a>]]</code> | key_vault block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.logAnalyticsWorkspace">log_analytics_workspace</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace">AzurermProviderFeaturesLogAnalyticsWorkspace</a>]]</code> | log_analytics_workspace block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.machineLearning">machine_learning</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning">AzurermProviderFeaturesMachineLearning</a>]]</code> | machine_learning block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.managedDisk">managed_disk</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk">AzurermProviderFeaturesManagedDisk</a>]]</code> | managed_disk block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.netapp">netapp</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp">AzurermProviderFeaturesNetapp</a>]]</code> | netapp block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.postgresqlFlexibleServer">postgresql_flexible_server</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer">AzurermProviderFeaturesPostgresqlFlexibleServer</a>]]</code> | postgresql_flexible_server block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryService">recovery_service</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService">AzurermProviderFeaturesRecoveryService</a>]]</code> | recovery_service block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryServicesVaults">recovery_services_vaults</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults">AzurermProviderFeaturesRecoveryServicesVaults</a>]]</code> | recovery_services_vaults block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.resourceGroup">resource_group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup">AzurermProviderFeaturesResourceGroup</a>]]</code> | resource_group block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.storage">storage</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesStorage">AzurermProviderFeaturesStorage</a>]]</code> | storage block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.subscription">subscription</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription">AzurermProviderFeaturesSubscription</a>]]</code> | subscription block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.templateDeployment">template_deployment</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment">AzurermProviderFeaturesTemplateDeployment</a>]]</code> | template_deployment block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachine">virtual_machine</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine">AzurermProviderFeaturesVirtualMachine</a>]]</code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachineScaleSet">virtual_machine_scale_set</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet">AzurermProviderFeaturesVirtualMachineScaleSet</a>]]</code> | virtual_machine_scale_set block. |

---

##### `api_management`<sup>Optional</sup> <a name="api_management" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.apiManagement"></a>

```python
api_management: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesApiManagement]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement">AzurermProviderFeaturesApiManagement</a>]]

api_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#api_management AzurermProvider#api_management}

---

##### `app_configuration`<sup>Optional</sup> <a name="app_configuration" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.appConfiguration"></a>

```python
app_configuration: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesAppConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration">AzurermProviderFeaturesAppConfiguration</a>]]

app_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#app_configuration AzurermProvider#app_configuration}

---

##### `application_insights`<sup>Optional</sup> <a name="application_insights" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.applicationInsights"></a>

```python
application_insights: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesApplicationInsights]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights">AzurermProviderFeaturesApplicationInsights</a>]]

application_insights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#application_insights AzurermProvider#application_insights}

---

##### `cognitive_account`<sup>Optional</sup> <a name="cognitive_account" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.cognitiveAccount"></a>

```python
cognitive_account: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesCognitiveAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount">AzurermProviderFeaturesCognitiveAccount</a>]]

cognitive_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#cognitive_account AzurermProvider#cognitive_account}

---

##### `databricks_workspace`<sup>Optional</sup> <a name="databricks_workspace" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.databricksWorkspace"></a>

```python
databricks_workspace: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesDatabricksWorkspace]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesDatabricksWorkspace">AzurermProviderFeaturesDatabricksWorkspace</a>]]

databricks_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#databricks_workspace AzurermProvider#databricks_workspace}

---

##### `key_vault`<sup>Optional</sup> <a name="key_vault" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.keyVault"></a>

```python
key_vault: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesKeyVault]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault">AzurermProviderFeaturesKeyVault</a>]]

key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#key_vault AzurermProvider#key_vault}

---

##### `log_analytics_workspace`<sup>Optional</sup> <a name="log_analytics_workspace" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.logAnalyticsWorkspace"></a>

```python
log_analytics_workspace: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesLogAnalyticsWorkspace]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace">AzurermProviderFeaturesLogAnalyticsWorkspace</a>]]

log_analytics_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#log_analytics_workspace AzurermProvider#log_analytics_workspace}

---

##### `machine_learning`<sup>Optional</sup> <a name="machine_learning" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.machineLearning"></a>

```python
machine_learning: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesMachineLearning]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning">AzurermProviderFeaturesMachineLearning</a>]]

machine_learning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#machine_learning AzurermProvider#machine_learning}

---

##### `managed_disk`<sup>Optional</sup> <a name="managed_disk" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.managedDisk"></a>

```python
managed_disk: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesManagedDisk]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk">AzurermProviderFeaturesManagedDisk</a>]]

managed_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#managed_disk AzurermProvider#managed_disk}

---

##### `netapp`<sup>Optional</sup> <a name="netapp" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.netapp"></a>

```python
netapp: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesNetapp]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp">AzurermProviderFeaturesNetapp</a>]]

netapp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#netapp AzurermProvider#netapp}

---

##### `postgresql_flexible_server`<sup>Optional</sup> <a name="postgresql_flexible_server" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.postgresqlFlexibleServer"></a>

```python
postgresql_flexible_server: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesPostgresqlFlexibleServer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer">AzurermProviderFeaturesPostgresqlFlexibleServer</a>]]

postgresql_flexible_server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#postgresql_flexible_server AzurermProvider#postgresql_flexible_server}

---

##### `recovery_service`<sup>Optional</sup> <a name="recovery_service" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryService"></a>

```python
recovery_service: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesRecoveryService]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService">AzurermProviderFeaturesRecoveryService</a>]]

recovery_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#recovery_service AzurermProvider#recovery_service}

---

##### `recovery_services_vaults`<sup>Optional</sup> <a name="recovery_services_vaults" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.recoveryServicesVaults"></a>

```python
recovery_services_vaults: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesRecoveryServicesVaults]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults">AzurermProviderFeaturesRecoveryServicesVaults</a>]]

recovery_services_vaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#recovery_services_vaults AzurermProvider#recovery_services_vaults}

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.resourceGroup"></a>

```python
resource_group: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesResourceGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup">AzurermProviderFeaturesResourceGroup</a>]]

resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#resource_group AzurermProvider#resource_group}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.storage"></a>

```python
storage: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesStorage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesStorage">AzurermProviderFeaturesStorage</a>]]

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#storage AzurermProvider#storage}

---

##### `subscription`<sup>Optional</sup> <a name="subscription" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.subscription"></a>

```python
subscription: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesSubscription]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription">AzurermProviderFeaturesSubscription</a>]]

subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#subscription AzurermProvider#subscription}

---

##### `template_deployment`<sup>Optional</sup> <a name="template_deployment" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.templateDeployment"></a>

```python
template_deployment: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesTemplateDeployment]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment">AzurermProviderFeaturesTemplateDeployment</a>]]

template_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#template_deployment AzurermProvider#template_deployment}

---

##### `virtual_machine`<sup>Optional</sup> <a name="virtual_machine" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachine"></a>

```python
virtual_machine: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesVirtualMachine]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine">AzurermProviderFeaturesVirtualMachine</a>]]

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#virtual_machine AzurermProvider#virtual_machine}

---

##### `virtual_machine_scale_set`<sup>Optional</sup> <a name="virtual_machine_scale_set" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachineScaleSet"></a>

```python
virtual_machine_scale_set: typing.Union[IResolvable, typing.List[AzurermProviderFeaturesVirtualMachineScaleSet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet">AzurermProviderFeaturesVirtualMachineScaleSet</a>]]

virtual_machine_scale_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#virtual_machine_scale_set AzurermProvider#virtual_machine_scale_set}

---

### AzurermProviderFeaturesApiManagement <a name="AzurermProviderFeaturesApiManagement" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeaturesApiManagement(
  purge_soft_delete_on_destroy: typing.Union[bool, IResolvable] = None,
  recover_soft_deleted: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.purgeSoftDeleteOnDestroy">purge_soft_delete_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.recoverSoftDeleted">recover_soft_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}. |

---

##### `purge_soft_delete_on_destroy`<sup>Optional</sup> <a name="purge_soft_delete_on_destroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.purgeSoftDeleteOnDestroy"></a>

```python
purge_soft_delete_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}.

---

##### `recover_soft_deleted`<sup>Optional</sup> <a name="recover_soft_deleted" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.recoverSoftDeleted"></a>

```python
recover_soft_deleted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}.

---

### AzurermProviderFeaturesAppConfiguration <a name="AzurermProviderFeaturesAppConfiguration" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeaturesAppConfiguration(
  purge_soft_delete_on_destroy: typing.Union[bool, IResolvable] = None,
  recover_soft_deleted: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.purgeSoftDeleteOnDestroy">purge_soft_delete_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.recoverSoftDeleted">recover_soft_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}. |

---

##### `purge_soft_delete_on_destroy`<sup>Optional</sup> <a name="purge_soft_delete_on_destroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.purgeSoftDeleteOnDestroy"></a>

```python
purge_soft_delete_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}.

---

##### `recover_soft_deleted`<sup>Optional</sup> <a name="recover_soft_deleted" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.recoverSoftDeleted"></a>

```python
recover_soft_deleted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}.

---

### AzurermProviderFeaturesApplicationInsights <a name="AzurermProviderFeaturesApplicationInsights" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeaturesApplicationInsights(
  disable_generated_rule: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights.property.disableGeneratedRule">disable_generated_rule</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#disable_generated_rule AzurermProvider#disable_generated_rule}. |

---

##### `disable_generated_rule`<sup>Optional</sup> <a name="disable_generated_rule" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights.property.disableGeneratedRule"></a>

```python
disable_generated_rule: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#disable_generated_rule AzurermProvider#disable_generated_rule}.

---

### AzurermProviderFeaturesCognitiveAccount <a name="AzurermProviderFeaturesCognitiveAccount" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeaturesCognitiveAccount(
  purge_soft_delete_on_destroy: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount.property.purgeSoftDeleteOnDestroy">purge_soft_delete_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}. |

---

##### `purge_soft_delete_on_destroy`<sup>Optional</sup> <a name="purge_soft_delete_on_destroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount.property.purgeSoftDeleteOnDestroy"></a>

```python
purge_soft_delete_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}.

---

### AzurermProviderFeaturesDatabricksWorkspace <a name="AzurermProviderFeaturesDatabricksWorkspace" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesDatabricksWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesDatabricksWorkspace.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeaturesDatabricksWorkspace(
  force_delete: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesDatabricksWorkspace.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled, the managed resource group that contains the Unity Catalog data will be forcibly deleted when the workspace is destroyed, regardless of contents. |

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesDatabricksWorkspace.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled, the managed resource group that contains the Unity Catalog data will be forcibly deleted when the workspace is destroyed, regardless of contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#force_delete AzurermProvider#force_delete}

---

### AzurermProviderFeaturesKeyVault <a name="AzurermProviderFeaturesKeyVault" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeaturesKeyVault(
  purge_soft_deleted_certificates_on_destroy: typing.Union[bool, IResolvable] = None,
  purge_soft_deleted_hardware_security_module_keys_on_destroy: typing.Union[bool, IResolvable] = None,
  purge_soft_deleted_hardware_security_modules_on_destroy: typing.Union[bool, IResolvable] = None,
  purge_soft_deleted_keys_on_destroy: typing.Union[bool, IResolvable] = None,
  purge_soft_deleted_secrets_on_destroy: typing.Union[bool, IResolvable] = None,
  purge_soft_delete_on_destroy: typing.Union[bool, IResolvable] = None,
  recover_soft_deleted_certificates: typing.Union[bool, IResolvable] = None,
  recover_soft_deleted_hardware_security_module_keys: typing.Union[bool, IResolvable] = None,
  recover_soft_deleted_keys: typing.Union[bool, IResolvable] = None,
  recover_soft_deleted_key_vaults: typing.Union[bool, IResolvable] = None,
  recover_soft_deleted_secrets: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedCertificatesOnDestroy">purge_soft_deleted_certificates_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled soft-deleted `azurerm_key_vault_certificate` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy">purge_soft_deleted_hardware_security_module_keys_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModulesOnDestroy">purge_soft_deleted_hardware_security_modules_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedKeysOnDestroy">purge_soft_deleted_keys_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled soft-deleted `azurerm_key_vault_key` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedSecretsOnDestroy">purge_soft_deleted_secrets_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled soft-deleted `azurerm_key_vault_secret` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeleteOnDestroy">purge_soft_delete_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled soft-deleted `azurerm_key_vault` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedCertificates">recover_soft_deleted_certificates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled soft-deleted `azurerm_key_vault_certificate` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedHardwareSecurityModuleKeys">recover_soft_deleted_hardware_security_module_keys</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeys">recover_soft_deleted_keys</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled soft-deleted `azurerm_key_vault_key` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeyVaults">recover_soft_deleted_key_vaults</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled soft-deleted `azurerm_key_vault` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedSecrets">recover_soft_deleted_secrets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled soft-deleted `azurerm_key_vault_secret` resources will be restored, instead of creating new ones. |

---

##### `purge_soft_deleted_certificates_on_destroy`<sup>Optional</sup> <a name="purge_soft_deleted_certificates_on_destroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedCertificatesOnDestroy"></a>

```python
purge_soft_deleted_certificates_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled soft-deleted `azurerm_key_vault_certificate` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#purge_soft_deleted_certificates_on_destroy AzurermProvider#purge_soft_deleted_certificates_on_destroy}

---

##### `purge_soft_deleted_hardware_security_module_keys_on_destroy`<sup>Optional</sup> <a name="purge_soft_deleted_hardware_security_module_keys_on_destroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy"></a>

```python
purge_soft_deleted_hardware_security_module_keys_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#purge_soft_deleted_hardware_security_module_keys_on_destroy AzurermProvider#purge_soft_deleted_hardware_security_module_keys_on_destroy}

---

##### `purge_soft_deleted_hardware_security_modules_on_destroy`<sup>Optional</sup> <a name="purge_soft_deleted_hardware_security_modules_on_destroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModulesOnDestroy"></a>

```python
purge_soft_deleted_hardware_security_modules_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#purge_soft_deleted_hardware_security_modules_on_destroy AzurermProvider#purge_soft_deleted_hardware_security_modules_on_destroy}

---

##### `purge_soft_deleted_keys_on_destroy`<sup>Optional</sup> <a name="purge_soft_deleted_keys_on_destroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedKeysOnDestroy"></a>

```python
purge_soft_deleted_keys_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled soft-deleted `azurerm_key_vault_key` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#purge_soft_deleted_keys_on_destroy AzurermProvider#purge_soft_deleted_keys_on_destroy}

---

##### `purge_soft_deleted_secrets_on_destroy`<sup>Optional</sup> <a name="purge_soft_deleted_secrets_on_destroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedSecretsOnDestroy"></a>

```python
purge_soft_deleted_secrets_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled soft-deleted `azurerm_key_vault_secret` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#purge_soft_deleted_secrets_on_destroy AzurermProvider#purge_soft_deleted_secrets_on_destroy}

---

##### `purge_soft_delete_on_destroy`<sup>Optional</sup> <a name="purge_soft_delete_on_destroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeleteOnDestroy"></a>

```python
purge_soft_delete_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled soft-deleted `azurerm_key_vault` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}

---

##### `recover_soft_deleted_certificates`<sup>Optional</sup> <a name="recover_soft_deleted_certificates" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedCertificates"></a>

```python
recover_soft_deleted_certificates: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled soft-deleted `azurerm_key_vault_certificate` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#recover_soft_deleted_certificates AzurermProvider#recover_soft_deleted_certificates}

---

##### `recover_soft_deleted_hardware_security_module_keys`<sup>Optional</sup> <a name="recover_soft_deleted_hardware_security_module_keys" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedHardwareSecurityModuleKeys"></a>

```python
recover_soft_deleted_hardware_security_module_keys: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#recover_soft_deleted_hardware_security_module_keys AzurermProvider#recover_soft_deleted_hardware_security_module_keys}

---

##### `recover_soft_deleted_keys`<sup>Optional</sup> <a name="recover_soft_deleted_keys" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeys"></a>

```python
recover_soft_deleted_keys: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled soft-deleted `azurerm_key_vault_key` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#recover_soft_deleted_keys AzurermProvider#recover_soft_deleted_keys}

---

##### `recover_soft_deleted_key_vaults`<sup>Optional</sup> <a name="recover_soft_deleted_key_vaults" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeyVaults"></a>

```python
recover_soft_deleted_key_vaults: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled soft-deleted `azurerm_key_vault` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#recover_soft_deleted_key_vaults AzurermProvider#recover_soft_deleted_key_vaults}

---

##### `recover_soft_deleted_secrets`<sup>Optional</sup> <a name="recover_soft_deleted_secrets" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedSecrets"></a>

```python
recover_soft_deleted_secrets: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled soft-deleted `azurerm_key_vault_secret` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#recover_soft_deleted_secrets AzurermProvider#recover_soft_deleted_secrets}

---

### AzurermProviderFeaturesLogAnalyticsWorkspace <a name="AzurermProviderFeaturesLogAnalyticsWorkspace" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeaturesLogAnalyticsWorkspace(
  permanently_delete_on_destroy: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace.property.permanentlyDeleteOnDestroy">permanently_delete_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#permanently_delete_on_destroy AzurermProvider#permanently_delete_on_destroy}. |

---

##### `permanently_delete_on_destroy`<sup>Optional</sup> <a name="permanently_delete_on_destroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace.property.permanentlyDeleteOnDestroy"></a>

```python
permanently_delete_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#permanently_delete_on_destroy AzurermProvider#permanently_delete_on_destroy}.

---

### AzurermProviderFeaturesMachineLearning <a name="AzurermProviderFeaturesMachineLearning" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeaturesMachineLearning(
  purge_soft_deleted_workspace_on_destroy: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning.property.purgeSoftDeletedWorkspaceOnDestroy">purge_soft_deleted_workspace_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#purge_soft_deleted_workspace_on_destroy AzurermProvider#purge_soft_deleted_workspace_on_destroy}. |

---

##### `purge_soft_deleted_workspace_on_destroy`<sup>Optional</sup> <a name="purge_soft_deleted_workspace_on_destroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesMachineLearning.property.purgeSoftDeletedWorkspaceOnDestroy"></a>

```python
purge_soft_deleted_workspace_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#purge_soft_deleted_workspace_on_destroy AzurermProvider#purge_soft_deleted_workspace_on_destroy}.

---

### AzurermProviderFeaturesManagedDisk <a name="AzurermProviderFeaturesManagedDisk" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeaturesManagedDisk(
  expand_without_downtime: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk.property.expandWithoutDowntime">expand_without_downtime</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#expand_without_downtime AzurermProvider#expand_without_downtime}. |

---

##### `expand_without_downtime`<sup>Optional</sup> <a name="expand_without_downtime" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk.property.expandWithoutDowntime"></a>

```python
expand_without_downtime: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#expand_without_downtime AzurermProvider#expand_without_downtime}.

---

### AzurermProviderFeaturesNetapp <a name="AzurermProviderFeaturesNetapp" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeaturesNetapp(
  delete_backups_on_backup_vault_destroy: typing.Union[bool, IResolvable] = None,
  prevent_volume_destruction: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp.property.deleteBackupsOnBackupVaultDestroy">delete_backups_on_backup_vault_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled, backups will be deleted when the `azurerm_netapp_backup_vault` resource is destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp.property.preventVolumeDestruction">prevent_volume_destruction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled, the volume will not be destroyed, safeguarding from severe data loss. |

---

##### `delete_backups_on_backup_vault_destroy`<sup>Optional</sup> <a name="delete_backups_on_backup_vault_destroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp.property.deleteBackupsOnBackupVaultDestroy"></a>

```python
delete_backups_on_backup_vault_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled, backups will be deleted when the `azurerm_netapp_backup_vault` resource is destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#delete_backups_on_backup_vault_destroy AzurermProvider#delete_backups_on_backup_vault_destroy}

---

##### `prevent_volume_destruction`<sup>Optional</sup> <a name="prevent_volume_destruction" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesNetapp.property.preventVolumeDestruction"></a>

```python
prevent_volume_destruction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled, the volume will not be destroyed, safeguarding from severe data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#prevent_volume_destruction AzurermProvider#prevent_volume_destruction}

---

### AzurermProviderFeaturesPostgresqlFlexibleServer <a name="AzurermProviderFeaturesPostgresqlFlexibleServer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeaturesPostgresqlFlexibleServer(
  restart_server_on_configuration_value_change: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer.property.restartServerOnConfigurationValueChange">restart_server_on_configuration_value_change</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#restart_server_on_configuration_value_change AzurermProvider#restart_server_on_configuration_value_change}. |

---

##### `restart_server_on_configuration_value_change`<sup>Optional</sup> <a name="restart_server_on_configuration_value_change" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesPostgresqlFlexibleServer.property.restartServerOnConfigurationValueChange"></a>

```python
restart_server_on_configuration_value_change: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#restart_server_on_configuration_value_change AzurermProvider#restart_server_on_configuration_value_change}.

---

### AzurermProviderFeaturesRecoveryService <a name="AzurermProviderFeaturesRecoveryService" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeaturesRecoveryService(
  purge_protected_items_from_vault_on_destroy: typing.Union[bool, IResolvable] = None,
  vm_backup_stop_protection_and_retain_data_on_destroy: typing.Union[bool, IResolvable] = None,
  vm_backup_suspend_protection_and_retain_data_on_destroy: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.purgeProtectedItemsFromVaultOnDestroy">purge_protected_items_from_vault_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#purge_protected_items_from_vault_on_destroy AzurermProvider#purge_protected_items_from_vault_on_destroy}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.vmBackupStopProtectionAndRetainDataOnDestroy">vm_backup_stop_protection_and_retain_data_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#vm_backup_stop_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_stop_protection_and_retain_data_on_destroy}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.vmBackupSuspendProtectionAndRetainDataOnDestroy">vm_backup_suspend_protection_and_retain_data_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#vm_backup_suspend_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_suspend_protection_and_retain_data_on_destroy}. |

---

##### `purge_protected_items_from_vault_on_destroy`<sup>Optional</sup> <a name="purge_protected_items_from_vault_on_destroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.purgeProtectedItemsFromVaultOnDestroy"></a>

```python
purge_protected_items_from_vault_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#purge_protected_items_from_vault_on_destroy AzurermProvider#purge_protected_items_from_vault_on_destroy}.

---

##### `vm_backup_stop_protection_and_retain_data_on_destroy`<sup>Optional</sup> <a name="vm_backup_stop_protection_and_retain_data_on_destroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.vmBackupStopProtectionAndRetainDataOnDestroy"></a>

```python
vm_backup_stop_protection_and_retain_data_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#vm_backup_stop_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_stop_protection_and_retain_data_on_destroy}.

---

##### `vm_backup_suspend_protection_and_retain_data_on_destroy`<sup>Optional</sup> <a name="vm_backup_suspend_protection_and_retain_data_on_destroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryService.property.vmBackupSuspendProtectionAndRetainDataOnDestroy"></a>

```python
vm_backup_suspend_protection_and_retain_data_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#vm_backup_suspend_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_suspend_protection_and_retain_data_on_destroy}.

---

### AzurermProviderFeaturesRecoveryServicesVaults <a name="AzurermProviderFeaturesRecoveryServicesVaults" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeaturesRecoveryServicesVaults(
  recover_soft_deleted_backup_protected_vm: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults.property.recoverSoftDeletedBackupProtectedVm">recover_soft_deleted_backup_protected_vm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#recover_soft_deleted_backup_protected_vm AzurermProvider#recover_soft_deleted_backup_protected_vm}. |

---

##### `recover_soft_deleted_backup_protected_vm`<sup>Optional</sup> <a name="recover_soft_deleted_backup_protected_vm" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesRecoveryServicesVaults.property.recoverSoftDeletedBackupProtectedVm"></a>

```python
recover_soft_deleted_backup_protected_vm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#recover_soft_deleted_backup_protected_vm AzurermProvider#recover_soft_deleted_backup_protected_vm}.

---

### AzurermProviderFeaturesResourceGroup <a name="AzurermProviderFeaturesResourceGroup" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeaturesResourceGroup(
  prevent_deletion_if_contains_resources: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources">prevent_deletion_if_contains_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#prevent_deletion_if_contains_resources AzurermProvider#prevent_deletion_if_contains_resources}. |

---

##### `prevent_deletion_if_contains_resources`<sup>Optional</sup> <a name="prevent_deletion_if_contains_resources" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources"></a>

```python
prevent_deletion_if_contains_resources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#prevent_deletion_if_contains_resources AzurermProvider#prevent_deletion_if_contains_resources}.

---

### AzurermProviderFeaturesStorage <a name="AzurermProviderFeaturesStorage" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeaturesStorage(
  data_plane_available: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesStorage.property.dataPlaneAvailable">data_plane_available</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#data_plane_available AzurermProvider#data_plane_available}. |

---

##### `data_plane_available`<sup>Optional</sup> <a name="data_plane_available" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesStorage.property.dataPlaneAvailable"></a>

```python
data_plane_available: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#data_plane_available AzurermProvider#data_plane_available}.

---

### AzurermProviderFeaturesSubscription <a name="AzurermProviderFeaturesSubscription" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeaturesSubscription(
  prevent_cancellation_on_destroy: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription.property.preventCancellationOnDestroy">prevent_cancellation_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#prevent_cancellation_on_destroy AzurermProvider#prevent_cancellation_on_destroy}. |

---

##### `prevent_cancellation_on_destroy`<sup>Optional</sup> <a name="prevent_cancellation_on_destroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesSubscription.property.preventCancellationOnDestroy"></a>

```python
prevent_cancellation_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#prevent_cancellation_on_destroy AzurermProvider#prevent_cancellation_on_destroy}.

---

### AzurermProviderFeaturesTemplateDeployment <a name="AzurermProviderFeaturesTemplateDeployment" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeaturesTemplateDeployment(
  delete_nested_items_during_deletion: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment.property.deleteNestedItemsDuringDeletion">delete_nested_items_during_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#delete_nested_items_during_deletion AzurermProvider#delete_nested_items_during_deletion}. |

---

##### `delete_nested_items_during_deletion`<sup>Required</sup> <a name="delete_nested_items_during_deletion" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment.property.deleteNestedItemsDuringDeletion"></a>

```python
delete_nested_items_during_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#delete_nested_items_during_deletion AzurermProvider#delete_nested_items_during_deletion}.

---

### AzurermProviderFeaturesVirtualMachine <a name="AzurermProviderFeaturesVirtualMachine" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeaturesVirtualMachine(
  delete_os_disk_on_deletion: typing.Union[bool, IResolvable] = None,
  detach_implicit_data_disk_on_deletion: typing.Union[bool, IResolvable] = None,
  graceful_shutdown: typing.Union[bool, IResolvable] = None,
  skip_shutdown_and_force_delete: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion">delete_os_disk_on_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#delete_os_disk_on_deletion AzurermProvider#delete_os_disk_on_deletion}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.detachImplicitDataDiskOnDeletion">detach_implicit_data_disk_on_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#detach_implicit_data_disk_on_deletion AzurermProvider#detach_implicit_data_disk_on_deletion}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.gracefulShutdown">graceful_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#graceful_shutdown AzurermProvider#graceful_shutdown}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete">skip_shutdown_and_force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#skip_shutdown_and_force_delete AzurermProvider#skip_shutdown_and_force_delete}. |

---

##### `delete_os_disk_on_deletion`<sup>Optional</sup> <a name="delete_os_disk_on_deletion" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion"></a>

```python
delete_os_disk_on_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#delete_os_disk_on_deletion AzurermProvider#delete_os_disk_on_deletion}.

---

##### `detach_implicit_data_disk_on_deletion`<sup>Optional</sup> <a name="detach_implicit_data_disk_on_deletion" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.detachImplicitDataDiskOnDeletion"></a>

```python
detach_implicit_data_disk_on_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#detach_implicit_data_disk_on_deletion AzurermProvider#detach_implicit_data_disk_on_deletion}.

---

##### `graceful_shutdown`<sup>Optional</sup> <a name="graceful_shutdown" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.gracefulShutdown"></a>

```python
graceful_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#graceful_shutdown AzurermProvider#graceful_shutdown}.

---

##### `skip_shutdown_and_force_delete`<sup>Optional</sup> <a name="skip_shutdown_and_force_delete" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete"></a>

```python
skip_shutdown_and_force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#skip_shutdown_and_force_delete AzurermProvider#skip_shutdown_and_force_delete}.

---

### AzurermProviderFeaturesVirtualMachineScaleSet <a name="AzurermProviderFeaturesVirtualMachineScaleSet" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import provider

provider.AzurermProviderFeaturesVirtualMachineScaleSet(
  force_delete: typing.Union[bool, IResolvable] = None,
  reimage_on_manual_upgrade: typing.Union[bool, IResolvable] = None,
  roll_instances_when_required: typing.Union[bool, IResolvable] = None,
  scale_to_zero_before_deletion: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#force_delete AzurermProvider#force_delete}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.reimageOnManualUpgrade">reimage_on_manual_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#reimage_on_manual_upgrade AzurermProvider#reimage_on_manual_upgrade}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired">roll_instances_when_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#roll_instances_when_required AzurermProvider#roll_instances_when_required}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion">scale_to_zero_before_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#scale_to_zero_before_deletion AzurermProvider#scale_to_zero_before_deletion}. |

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#force_delete AzurermProvider#force_delete}.

---

##### `reimage_on_manual_upgrade`<sup>Optional</sup> <a name="reimage_on_manual_upgrade" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.reimageOnManualUpgrade"></a>

```python
reimage_on_manual_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#reimage_on_manual_upgrade AzurermProvider#reimage_on_manual_upgrade}.

---

##### `roll_instances_when_required`<sup>Optional</sup> <a name="roll_instances_when_required" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired"></a>

```python
roll_instances_when_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#roll_instances_when_required AzurermProvider#roll_instances_when_required}.

---

##### `scale_to_zero_before_deletion`<sup>Optional</sup> <a name="scale_to_zero_before_deletion" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion"></a>

```python
scale_to_zero_before_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs#scale_to_zero_before_deletion AzurermProvider#scale_to_zero_before_deletion}.

---



