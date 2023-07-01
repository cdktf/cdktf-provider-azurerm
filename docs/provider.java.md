# `provider`

Refer to the Terraform Registory for docs: [`azurerm`](https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-azurerm.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzurermProvider <a name="AzurermProvider" id="@cdktf/provider-azurerm.provider.AzurermProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs azurerm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.provider.AzurermProvider;

AzurermProvider.Builder.create(Construct scope, java.lang.String id)
    .features(AzurermProviderFeatures)
//  .alias(java.lang.String)
//  .auxiliaryTenantIds(java.util.List<java.lang.String>)
//  .clientCertificate(java.lang.String)
//  .clientCertificatePassword(java.lang.String)
//  .clientCertificatePath(java.lang.String)
//  .clientId(java.lang.String)
//  .clientIdFilePath(java.lang.String)
//  .clientSecret(java.lang.String)
//  .clientSecretFilePath(java.lang.String)
//  .disableCorrelationRequestId(java.lang.Boolean)
//  .disableCorrelationRequestId(IResolvable)
//  .disableTerraformPartnerId(java.lang.Boolean)
//  .disableTerraformPartnerId(IResolvable)
//  .environment(java.lang.String)
//  .metadataHost(java.lang.String)
//  .msiEndpoint(java.lang.String)
//  .oidcRequestToken(java.lang.String)
//  .oidcRequestUrl(java.lang.String)
//  .oidcToken(java.lang.String)
//  .oidcTokenFilePath(java.lang.String)
//  .partnerId(java.lang.String)
//  .skipProviderRegistration(java.lang.Boolean)
//  .skipProviderRegistration(IResolvable)
//  .storageUseAzuread(java.lang.Boolean)
//  .storageUseAzuread(IResolvable)
//  .subscriptionId(java.lang.String)
//  .tenantId(java.lang.String)
//  .useCli(java.lang.Boolean)
//  .useCli(IResolvable)
//  .useMsi(java.lang.Boolean)
//  .useMsi(IResolvable)
//  .useOidc(java.lang.Boolean)
//  .useOidc(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.features">features</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a></code> | features block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.auxiliaryTenantIds">auxiliaryTenantIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientCertificatePassword">clientCertificatePassword</a></code> | <code>java.lang.String</code> | The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientCertificatePath">clientCertificatePath</a></code> | <code>java.lang.String</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | The Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientIdFilePath">clientIdFilePath</a></code> | <code>java.lang.String</code> | The path to a file containing the Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientSecretFilePath">clientSecretFilePath</a></code> | <code>java.lang.String</code> | The path to a file containing the Client Secret which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.disableCorrelationRequestId">disableCorrelationRequestId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.disableTerraformPartnerId">disableTerraformPartnerId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | The Cloud Environment which should be used. Possible values are public, usgovernment, and china. Defaults to public. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.metadataHost">metadataHost</a></code> | <code>java.lang.String</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.msiEndpoint">msiEndpoint</a></code> | <code>java.lang.String</code> | The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.oidcRequestToken">oidcRequestToken</a></code> | <code>java.lang.String</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.oidcRequestUrl">oidcRequestUrl</a></code> | <code>java.lang.String</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.oidcToken">oidcToken</a></code> | <code>java.lang.String</code> | The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.oidcTokenFilePath">oidcTokenFilePath</a></code> | <code>java.lang.String</code> | The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.partnerId">partnerId</a></code> | <code>java.lang.String</code> | A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.skipProviderRegistration">skipProviderRegistration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already registered? |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.storageUseAzuread">storageUseAzuread</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the AzureRM Provider use AzureAD to access the Storage Data Plane API's? |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | The Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.useCli">useCli</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow Azure CLI to be used for Authentication. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.useMsi">useMsi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow Managed Service Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.useOidc">useOidc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow OpenID Connect to be used for authentication. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.features"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a>

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#features AzurermProvider#features}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#alias AzurermProvider#alias}

---

##### `auxiliaryTenantIds`<sup>Optional</sup> <a name="auxiliaryTenantIds" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.auxiliaryTenantIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}.

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientCertificate"></a>

- *Type:* java.lang.String

Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#client_certificate AzurermProvider#client_certificate}

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientCertificatePassword"></a>

- *Type:* java.lang.String

The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#client_certificate_password AzurermProvider#client_certificate_password}

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientCertificatePath"></a>

- *Type:* java.lang.String

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#client_certificate_path AzurermProvider#client_certificate_path}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

The Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#client_id AzurermProvider#client_id}

---

##### `clientIdFilePath`<sup>Optional</sup> <a name="clientIdFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientIdFilePath"></a>

- *Type:* java.lang.String

The path to a file containing the Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#client_id_file_path AzurermProvider#client_id_file_path}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#client_secret AzurermProvider#client_secret}

---

##### `clientSecretFilePath`<sup>Optional</sup> <a name="clientSecretFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.clientSecretFilePath"></a>

- *Type:* java.lang.String

The path to a file containing the Client Secret which should be used.

For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#client_secret_file_path AzurermProvider#client_secret_file_path}

---

##### `disableCorrelationRequestId`<sup>Optional</sup> <a name="disableCorrelationRequestId" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.disableCorrelationRequestId"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#disable_correlation_request_id AzurermProvider#disable_correlation_request_id}

---

##### `disableTerraformPartnerId`<sup>Optional</sup> <a name="disableTerraformPartnerId" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.disableTerraformPartnerId"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#disable_terraform_partner_id AzurermProvider#disable_terraform_partner_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

The Cloud Environment which should be used. Possible values are public, usgovernment, and china. Defaults to public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#environment AzurermProvider#environment}

---

##### `metadataHost`<sup>Optional</sup> <a name="metadataHost" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.metadataHost"></a>

- *Type:* java.lang.String

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#metadata_host AzurermProvider#metadata_host}

---

##### `msiEndpoint`<sup>Optional</sup> <a name="msiEndpoint" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.msiEndpoint"></a>

- *Type:* java.lang.String

The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#msi_endpoint AzurermProvider#msi_endpoint}

---

##### `oidcRequestToken`<sup>Optional</sup> <a name="oidcRequestToken" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.oidcRequestToken"></a>

- *Type:* java.lang.String

The bearer token for the request to the OIDC provider.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#oidc_request_token AzurermProvider#oidc_request_token}

---

##### `oidcRequestUrl`<sup>Optional</sup> <a name="oidcRequestUrl" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.oidcRequestUrl"></a>

- *Type:* java.lang.String

The URL for the OIDC provider from which to request an ID token.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#oidc_request_url AzurermProvider#oidc_request_url}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.oidcToken"></a>

- *Type:* java.lang.String

The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#oidc_token AzurermProvider#oidc_token}

---

##### `oidcTokenFilePath`<sup>Optional</sup> <a name="oidcTokenFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.oidcTokenFilePath"></a>

- *Type:* java.lang.String

The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#oidc_token_file_path AzurermProvider#oidc_token_file_path}

---

##### `partnerId`<sup>Optional</sup> <a name="partnerId" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.partnerId"></a>

- *Type:* java.lang.String

A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#partner_id AzurermProvider#partner_id}

---

##### `skipProviderRegistration`<sup>Optional</sup> <a name="skipProviderRegistration" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.skipProviderRegistration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already registered?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#skip_provider_registration AzurermProvider#skip_provider_registration}

---

##### `storageUseAzuread`<sup>Optional</sup> <a name="storageUseAzuread" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.storageUseAzuread"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the AzureRM Provider use AzureAD to access the Storage Data Plane API's?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#storage_use_azuread AzurermProvider#storage_use_azuread}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

The Subscription ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#subscription_id AzurermProvider#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

The Tenant ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#tenant_id AzurermProvider#tenant_id}

---

##### `useCli`<sup>Optional</sup> <a name="useCli" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.useCli"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow Azure CLI to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#use_cli AzurermProvider#use_cli}

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.useMsi"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow Managed Service Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#use_msi AzurermProvider#use_msi}

---

##### `useOidc`<sup>Optional</sup> <a name="useOidc" id="@cdktf/provider-azurerm.provider.AzurermProvider.Initializer.parameter.useOidc"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow OpenID Connect to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#use_oidc AzurermProvider#use_oidc}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetAuxiliaryTenantIds">resetAuxiliaryTenantIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificatePassword">resetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificatePath">resetClientCertificatePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientIdFilePath">resetClientIdFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetClientSecretFilePath">resetClientSecretFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetDisableCorrelationRequestId">resetDisableCorrelationRequestId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetDisableTerraformPartnerId">resetDisableTerraformPartnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetMetadataHost">resetMetadataHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetMsiEndpoint">resetMsiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcRequestToken">resetOidcRequestToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcRequestUrl">resetOidcRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcToken">resetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcTokenFilePath">resetOidcTokenFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetPartnerId">resetPartnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetSkipProviderRegistration">resetSkipProviderRegistration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetStorageUseAzuread">resetStorageUseAzuread</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetUseCli">resetUseCli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetUseMsi">resetUseMsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.resetUseOidc">resetUseOidc</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.provider.AzurermProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.provider.AzurermProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.provider.AzurermProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.provider.AzurermProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.provider.AzurermProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.provider.AzurermProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.provider.AzurermProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.provider.AzurermProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAuxiliaryTenantIds` <a name="resetAuxiliaryTenantIds" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetAuxiliaryTenantIds"></a>

```java
public void resetAuxiliaryTenantIds()
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificate"></a>

```java
public void resetClientCertificate()
```

##### `resetClientCertificatePassword` <a name="resetClientCertificatePassword" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificatePassword"></a>

```java
public void resetClientCertificatePassword()
```

##### `resetClientCertificatePath` <a name="resetClientCertificatePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientCertificatePath"></a>

```java
public void resetClientCertificatePath()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientIdFilePath` <a name="resetClientIdFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientIdFilePath"></a>

```java
public void resetClientIdFilePath()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetClientSecretFilePath` <a name="resetClientSecretFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetClientSecretFilePath"></a>

```java
public void resetClientSecretFilePath()
```

##### `resetDisableCorrelationRequestId` <a name="resetDisableCorrelationRequestId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetDisableCorrelationRequestId"></a>

```java
public void resetDisableCorrelationRequestId()
```

##### `resetDisableTerraformPartnerId` <a name="resetDisableTerraformPartnerId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetDisableTerraformPartnerId"></a>

```java
public void resetDisableTerraformPartnerId()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetMetadataHost` <a name="resetMetadataHost" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetMetadataHost"></a>

```java
public void resetMetadataHost()
```

##### `resetMsiEndpoint` <a name="resetMsiEndpoint" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetMsiEndpoint"></a>

```java
public void resetMsiEndpoint()
```

##### `resetOidcRequestToken` <a name="resetOidcRequestToken" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcRequestToken"></a>

```java
public void resetOidcRequestToken()
```

##### `resetOidcRequestUrl` <a name="resetOidcRequestUrl" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcRequestUrl"></a>

```java
public void resetOidcRequestUrl()
```

##### `resetOidcToken` <a name="resetOidcToken" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcToken"></a>

```java
public void resetOidcToken()
```

##### `resetOidcTokenFilePath` <a name="resetOidcTokenFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetOidcTokenFilePath"></a>

```java
public void resetOidcTokenFilePath()
```

##### `resetPartnerId` <a name="resetPartnerId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetPartnerId"></a>

```java
public void resetPartnerId()
```

##### `resetSkipProviderRegistration` <a name="resetSkipProviderRegistration" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetSkipProviderRegistration"></a>

```java
public void resetSkipProviderRegistration()
```

##### `resetStorageUseAzuread` <a name="resetStorageUseAzuread" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetStorageUseAzuread"></a>

```java
public void resetStorageUseAzuread()
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetSubscriptionId"></a>

```java
public void resetSubscriptionId()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetTenantId"></a>

```java
public void resetTenantId()
```

##### `resetUseCli` <a name="resetUseCli" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetUseCli"></a>

```java
public void resetUseCli()
```

##### `resetUseMsi` <a name="resetUseMsi" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetUseMsi"></a>

```java
public void resetUseMsi()
```

##### `resetUseOidc` <a name="resetUseOidc" id="@cdktf/provider-azurerm.provider.AzurermProvider.resetUseOidc"></a>

```java
public void resetUseOidc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.provider.AzurermProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.provider.AzurermProvider;

AzurermProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.provider.AzurermProvider;

AzurermProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.provider.AzurermProvider;

AzurermProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.provider.AzurermProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIdsInput">auxiliaryTenantIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificateInput">clientCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePasswordInput">clientCertificatePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePathInput">clientCertificatePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePathInput">clientIdFilePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePathInput">clientSecretFilePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestIdInput">disableCorrelationRequestIdInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerIdInput">disableTerraformPartnerIdInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.featuresInput">featuresInput</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHostInput">metadataHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpointInput">msiEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestTokenInput">oidcRequestTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrlInput">oidcRequestUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePathInput">oidcTokenFilePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenInput">oidcTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerIdInput">partnerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistrationInput">skipProviderRegistrationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzureadInput">storageUseAzureadInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useCliInput">useCliInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsiInput">useMsiInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidcInput">useOidcInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIds">auxiliaryTenantIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePath">clientCertificatePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePath">clientIdFilePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePath">clientSecretFilePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestId">disableCorrelationRequestId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerId">disableTerraformPartnerId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.features">features</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHost">metadataHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpoint">msiEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestToken">oidcRequestToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrl">oidcRequestUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcToken">oidcToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePath">oidcTokenFilePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerId">partnerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistration">skipProviderRegistration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzuread">storageUseAzuread</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useCli">useCli</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsi">useMsi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidc">useOidc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `auxiliaryTenantIdsInput`<sup>Optional</sup> <a name="auxiliaryTenantIdsInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIdsInput"></a>

```java
public java.util.List<java.lang.String> getAuxiliaryTenantIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificateInput"></a>

```java
public java.lang.String getClientCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientCertificatePasswordInput`<sup>Optional</sup> <a name="clientCertificatePasswordInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePasswordInput"></a>

```java
public java.lang.String getClientCertificatePasswordInput();
```

- *Type:* java.lang.String

---

##### `clientCertificatePathInput`<sup>Optional</sup> <a name="clientCertificatePathInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePathInput"></a>

```java
public java.lang.String getClientCertificatePathInput();
```

- *Type:* java.lang.String

---

##### `clientIdFilePathInput`<sup>Optional</sup> <a name="clientIdFilePathInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePathInput"></a>

```java
public java.lang.String getClientIdFilePathInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretFilePathInput`<sup>Optional</sup> <a name="clientSecretFilePathInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePathInput"></a>

```java
public java.lang.String getClientSecretFilePathInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `disableCorrelationRequestIdInput`<sup>Optional</sup> <a name="disableCorrelationRequestIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestIdInput"></a>

```java
public java.lang.Object getDisableCorrelationRequestIdInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableTerraformPartnerIdInput`<sup>Optional</sup> <a name="disableTerraformPartnerIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerIdInput"></a>

```java
public java.lang.Object getDisableTerraformPartnerIdInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `featuresInput`<sup>Optional</sup> <a name="featuresInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.featuresInput"></a>

```java
public AzurermProviderFeatures getFeaturesInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a>

---

##### `metadataHostInput`<sup>Optional</sup> <a name="metadataHostInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHostInput"></a>

```java
public java.lang.String getMetadataHostInput();
```

- *Type:* java.lang.String

---

##### `msiEndpointInput`<sup>Optional</sup> <a name="msiEndpointInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpointInput"></a>

```java
public java.lang.String getMsiEndpointInput();
```

- *Type:* java.lang.String

---

##### `oidcRequestTokenInput`<sup>Optional</sup> <a name="oidcRequestTokenInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestTokenInput"></a>

```java
public java.lang.String getOidcRequestTokenInput();
```

- *Type:* java.lang.String

---

##### `oidcRequestUrlInput`<sup>Optional</sup> <a name="oidcRequestUrlInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrlInput"></a>

```java
public java.lang.String getOidcRequestUrlInput();
```

- *Type:* java.lang.String

---

##### `oidcTokenFilePathInput`<sup>Optional</sup> <a name="oidcTokenFilePathInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePathInput"></a>

```java
public java.lang.String getOidcTokenFilePathInput();
```

- *Type:* java.lang.String

---

##### `oidcTokenInput`<sup>Optional</sup> <a name="oidcTokenInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenInput"></a>

```java
public java.lang.String getOidcTokenInput();
```

- *Type:* java.lang.String

---

##### `partnerIdInput`<sup>Optional</sup> <a name="partnerIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerIdInput"></a>

```java
public java.lang.String getPartnerIdInput();
```

- *Type:* java.lang.String

---

##### `skipProviderRegistrationInput`<sup>Optional</sup> <a name="skipProviderRegistrationInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistrationInput"></a>

```java
public java.lang.Object getSkipProviderRegistrationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageUseAzureadInput`<sup>Optional</sup> <a name="storageUseAzureadInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzureadInput"></a>

```java
public java.lang.Object getStorageUseAzureadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `useCliInput`<sup>Optional</sup> <a name="useCliInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useCliInput"></a>

```java
public java.lang.Object getUseCliInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useMsiInput`<sup>Optional</sup> <a name="useMsiInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsiInput"></a>

```java
public java.lang.Object getUseMsiInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useOidcInput`<sup>Optional</sup> <a name="useOidcInput" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidcInput"></a>

```java
public java.lang.Object getUseOidcInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `auxiliaryTenantIds`<sup>Optional</sup> <a name="auxiliaryTenantIds" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.auxiliaryTenantIds"></a>

```java
public java.util.List<java.lang.String> getAuxiliaryTenantIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePassword"></a>

```java
public java.lang.String getClientCertificatePassword();
```

- *Type:* java.lang.String

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientCertificatePath"></a>

```java
public java.lang.String getClientCertificatePath();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientIdFilePath`<sup>Optional</sup> <a name="clientIdFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientIdFilePath"></a>

```java
public java.lang.String getClientIdFilePath();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `clientSecretFilePath`<sup>Optional</sup> <a name="clientSecretFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.clientSecretFilePath"></a>

```java
public java.lang.String getClientSecretFilePath();
```

- *Type:* java.lang.String

---

##### `disableCorrelationRequestId`<sup>Optional</sup> <a name="disableCorrelationRequestId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableCorrelationRequestId"></a>

```java
public java.lang.Object getDisableCorrelationRequestId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableTerraformPartnerId`<sup>Optional</sup> <a name="disableTerraformPartnerId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.disableTerraformPartnerId"></a>

```java
public java.lang.Object getDisableTerraformPartnerId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.features"></a>

```java
public AzurermProviderFeatures getFeatures();
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a>

---

##### `metadataHost`<sup>Optional</sup> <a name="metadataHost" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.metadataHost"></a>

```java
public java.lang.String getMetadataHost();
```

- *Type:* java.lang.String

---

##### `msiEndpoint`<sup>Optional</sup> <a name="msiEndpoint" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.msiEndpoint"></a>

```java
public java.lang.String getMsiEndpoint();
```

- *Type:* java.lang.String

---

##### `oidcRequestToken`<sup>Optional</sup> <a name="oidcRequestToken" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestToken"></a>

```java
public java.lang.String getOidcRequestToken();
```

- *Type:* java.lang.String

---

##### `oidcRequestUrl`<sup>Optional</sup> <a name="oidcRequestUrl" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcRequestUrl"></a>

```java
public java.lang.String getOidcRequestUrl();
```

- *Type:* java.lang.String

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcToken"></a>

```java
public java.lang.String getOidcToken();
```

- *Type:* java.lang.String

---

##### `oidcTokenFilePath`<sup>Optional</sup> <a name="oidcTokenFilePath" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.oidcTokenFilePath"></a>

```java
public java.lang.String getOidcTokenFilePath();
```

- *Type:* java.lang.String

---

##### `partnerId`<sup>Optional</sup> <a name="partnerId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.partnerId"></a>

```java
public java.lang.String getPartnerId();
```

- *Type:* java.lang.String

---

##### `skipProviderRegistration`<sup>Optional</sup> <a name="skipProviderRegistration" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.skipProviderRegistration"></a>

```java
public java.lang.Object getSkipProviderRegistration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageUseAzuread`<sup>Optional</sup> <a name="storageUseAzuread" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.storageUseAzuread"></a>

```java
public java.lang.Object getStorageUseAzuread();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `useCli`<sup>Optional</sup> <a name="useCli" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useCli"></a>

```java
public java.lang.Object getUseCli();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useMsi"></a>

```java
public java.lang.Object getUseMsi();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useOidc`<sup>Optional</sup> <a name="useOidc" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.useOidc"></a>

```java
public java.lang.Object getUseOidc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.provider.AzurermProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AzurermProviderConfig <a name="AzurermProviderConfig" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.provider.AzurermProviderConfig;

AzurermProviderConfig.builder()
    .features(AzurermProviderFeatures)
//  .alias(java.lang.String)
//  .auxiliaryTenantIds(java.util.List<java.lang.String>)
//  .clientCertificate(java.lang.String)
//  .clientCertificatePassword(java.lang.String)
//  .clientCertificatePath(java.lang.String)
//  .clientId(java.lang.String)
//  .clientIdFilePath(java.lang.String)
//  .clientSecret(java.lang.String)
//  .clientSecretFilePath(java.lang.String)
//  .disableCorrelationRequestId(java.lang.Boolean)
//  .disableCorrelationRequestId(IResolvable)
//  .disableTerraformPartnerId(java.lang.Boolean)
//  .disableTerraformPartnerId(IResolvable)
//  .environment(java.lang.String)
//  .metadataHost(java.lang.String)
//  .msiEndpoint(java.lang.String)
//  .oidcRequestToken(java.lang.String)
//  .oidcRequestUrl(java.lang.String)
//  .oidcToken(java.lang.String)
//  .oidcTokenFilePath(java.lang.String)
//  .partnerId(java.lang.String)
//  .skipProviderRegistration(java.lang.Boolean)
//  .skipProviderRegistration(IResolvable)
//  .storageUseAzuread(java.lang.Boolean)
//  .storageUseAzuread(IResolvable)
//  .subscriptionId(java.lang.String)
//  .tenantId(java.lang.String)
//  .useCli(java.lang.Boolean)
//  .useCli(IResolvable)
//  .useMsi(java.lang.Boolean)
//  .useMsi(IResolvable)
//  .useOidc(java.lang.Boolean)
//  .useOidc(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.features">features</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a></code> | features block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.auxiliaryTenantIds">auxiliaryTenantIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePassword">clientCertificatePassword</a></code> | <code>java.lang.String</code> | The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePath">clientCertificatePath</a></code> | <code>java.lang.String</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientIdFilePath">clientIdFilePath</a></code> | <code>java.lang.String</code> | The path to a file containing the Client ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecretFilePath">clientSecretFilePath</a></code> | <code>java.lang.String</code> | The path to a file containing the Client Secret which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableCorrelationRequestId">disableCorrelationRequestId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This will disable the x-ms-correlation-request-id header. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableTerraformPartnerId">disableTerraformPartnerId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | The Cloud Environment which should be used. Possible values are public, usgovernment, and china. Defaults to public. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.metadataHost">metadataHost</a></code> | <code>java.lang.String</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.msiEndpoint">msiEndpoint</a></code> | <code>java.lang.String</code> | The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestToken">oidcRequestToken</a></code> | <code>java.lang.String</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestUrl">oidcRequestUrl</a></code> | <code>java.lang.String</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcToken">oidcToken</a></code> | <code>java.lang.String</code> | The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcTokenFilePath">oidcTokenFilePath</a></code> | <code>java.lang.String</code> | The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.partnerId">partnerId</a></code> | <code>java.lang.String</code> | A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.skipProviderRegistration">skipProviderRegistration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already registered? |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.storageUseAzuread">storageUseAzuread</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the AzureRM Provider use AzureAD to access the Storage Data Plane API's? |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | The Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useCli">useCli</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow Azure CLI to be used for Authentication. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useMsi">useMsi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow Managed Service Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useOidc">useOidc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow OpenID Connect to be used for authentication. |

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.features"></a>

```java
public AzurermProviderFeatures getFeatures();
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures">AzurermProviderFeatures</a>

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#features AzurermProvider#features}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#alias AzurermProvider#alias}

---

##### `auxiliaryTenantIds`<sup>Optional</sup> <a name="auxiliaryTenantIds" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.auxiliaryTenantIds"></a>

```java
public java.util.List<java.lang.String> getAuxiliaryTenantIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}.

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#client_certificate AzurermProvider#client_certificate}

---

##### `clientCertificatePassword`<sup>Optional</sup> <a name="clientCertificatePassword" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePassword"></a>

```java
public java.lang.String getClientCertificatePassword();
```

- *Type:* java.lang.String

The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#client_certificate_password AzurermProvider#client_certificate_password}

---

##### `clientCertificatePath`<sup>Optional</sup> <a name="clientCertificatePath" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientCertificatePath"></a>

```java
public java.lang.String getClientCertificatePath();
```

- *Type:* java.lang.String

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#client_certificate_path AzurermProvider#client_certificate_path}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#client_id AzurermProvider#client_id}

---

##### `clientIdFilePath`<sup>Optional</sup> <a name="clientIdFilePath" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientIdFilePath"></a>

```java
public java.lang.String getClientIdFilePath();
```

- *Type:* java.lang.String

The path to a file containing the Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#client_id_file_path AzurermProvider#client_id_file_path}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#client_secret AzurermProvider#client_secret}

---

##### `clientSecretFilePath`<sup>Optional</sup> <a name="clientSecretFilePath" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.clientSecretFilePath"></a>

```java
public java.lang.String getClientSecretFilePath();
```

- *Type:* java.lang.String

The path to a file containing the Client Secret which should be used.

For use When authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#client_secret_file_path AzurermProvider#client_secret_file_path}

---

##### `disableCorrelationRequestId`<sup>Optional</sup> <a name="disableCorrelationRequestId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableCorrelationRequestId"></a>

```java
public java.lang.Object getDisableCorrelationRequestId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This will disable the x-ms-correlation-request-id header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#disable_correlation_request_id AzurermProvider#disable_correlation_request_id}

---

##### `disableTerraformPartnerId`<sup>Optional</sup> <a name="disableTerraformPartnerId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.disableTerraformPartnerId"></a>

```java
public java.lang.Object getDisableTerraformPartnerId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#disable_terraform_partner_id AzurermProvider#disable_terraform_partner_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The Cloud Environment which should be used. Possible values are public, usgovernment, and china. Defaults to public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#environment AzurermProvider#environment}

---

##### `metadataHost`<sup>Optional</sup> <a name="metadataHost" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.metadataHost"></a>

```java
public java.lang.String getMetadataHost();
```

- *Type:* java.lang.String

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#metadata_host AzurermProvider#metadata_host}

---

##### `msiEndpoint`<sup>Optional</sup> <a name="msiEndpoint" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.msiEndpoint"></a>

```java
public java.lang.String getMsiEndpoint();
```

- *Type:* java.lang.String

The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#msi_endpoint AzurermProvider#msi_endpoint}

---

##### `oidcRequestToken`<sup>Optional</sup> <a name="oidcRequestToken" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestToken"></a>

```java
public java.lang.String getOidcRequestToken();
```

- *Type:* java.lang.String

The bearer token for the request to the OIDC provider.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#oidc_request_token AzurermProvider#oidc_request_token}

---

##### `oidcRequestUrl`<sup>Optional</sup> <a name="oidcRequestUrl" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcRequestUrl"></a>

```java
public java.lang.String getOidcRequestUrl();
```

- *Type:* java.lang.String

The URL for the OIDC provider from which to request an ID token.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#oidc_request_url AzurermProvider#oidc_request_url}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcToken"></a>

```java
public java.lang.String getOidcToken();
```

- *Type:* java.lang.String

The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#oidc_token AzurermProvider#oidc_token}

---

##### `oidcTokenFilePath`<sup>Optional</sup> <a name="oidcTokenFilePath" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.oidcTokenFilePath"></a>

```java
public java.lang.String getOidcTokenFilePath();
```

- *Type:* java.lang.String

The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#oidc_token_file_path AzurermProvider#oidc_token_file_path}

---

##### `partnerId`<sup>Optional</sup> <a name="partnerId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.partnerId"></a>

```java
public java.lang.String getPartnerId();
```

- *Type:* java.lang.String

A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#partner_id AzurermProvider#partner_id}

---

##### `skipProviderRegistration`<sup>Optional</sup> <a name="skipProviderRegistration" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.skipProviderRegistration"></a>

```java
public java.lang.Object getSkipProviderRegistration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already registered?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#skip_provider_registration AzurermProvider#skip_provider_registration}

---

##### `storageUseAzuread`<sup>Optional</sup> <a name="storageUseAzuread" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.storageUseAzuread"></a>

```java
public java.lang.Object getStorageUseAzuread();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the AzureRM Provider use AzureAD to access the Storage Data Plane API's?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#storage_use_azuread AzurermProvider#storage_use_azuread}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

The Subscription ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#subscription_id AzurermProvider#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

The Tenant ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#tenant_id AzurermProvider#tenant_id}

---

##### `useCli`<sup>Optional</sup> <a name="useCli" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useCli"></a>

```java
public java.lang.Object getUseCli();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow Azure CLI to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#use_cli AzurermProvider#use_cli}

---

##### `useMsi`<sup>Optional</sup> <a name="useMsi" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useMsi"></a>

```java
public java.lang.Object getUseMsi();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow Managed Service Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#use_msi AzurermProvider#use_msi}

---

##### `useOidc`<sup>Optional</sup> <a name="useOidc" id="@cdktf/provider-azurerm.provider.AzurermProviderConfig.property.useOidc"></a>

```java
public java.lang.Object getUseOidc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow OpenID Connect to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#use_oidc AzurermProvider#use_oidc}

---

### AzurermProviderFeatures <a name="AzurermProviderFeatures" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.provider.AzurermProviderFeatures;

AzurermProviderFeatures.builder()
//  .apiManagement(AzurermProviderFeaturesApiManagement)
//  .appConfiguration(AzurermProviderFeaturesAppConfiguration)
//  .applicationInsights(AzurermProviderFeaturesApplicationInsights)
//  .cognitiveAccount(AzurermProviderFeaturesCognitiveAccount)
//  .keyVault(AzurermProviderFeaturesKeyVault)
//  .logAnalyticsWorkspace(AzurermProviderFeaturesLogAnalyticsWorkspace)
//  .managedDisk(AzurermProviderFeaturesManagedDisk)
//  .resourceGroup(AzurermProviderFeaturesResourceGroup)
//  .templateDeployment(AzurermProviderFeaturesTemplateDeployment)
//  .virtualMachine(AzurermProviderFeaturesVirtualMachine)
//  .virtualMachineScaleSet(AzurermProviderFeaturesVirtualMachineScaleSet)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.apiManagement">apiManagement</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement">AzurermProviderFeaturesApiManagement</a></code> | api_management block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.appConfiguration">appConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration">AzurermProviderFeaturesAppConfiguration</a></code> | app_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.applicationInsights">applicationInsights</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights">AzurermProviderFeaturesApplicationInsights</a></code> | application_insights block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.cognitiveAccount">cognitiveAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount">AzurermProviderFeaturesCognitiveAccount</a></code> | cognitive_account block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.keyVault">keyVault</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault">AzurermProviderFeaturesKeyVault</a></code> | key_vault block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.logAnalyticsWorkspace">logAnalyticsWorkspace</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace">AzurermProviderFeaturesLogAnalyticsWorkspace</a></code> | log_analytics_workspace block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.managedDisk">managedDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk">AzurermProviderFeaturesManagedDisk</a></code> | managed_disk block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.resourceGroup">resourceGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup">AzurermProviderFeaturesResourceGroup</a></code> | resource_group block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.templateDeployment">templateDeployment</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment">AzurermProviderFeaturesTemplateDeployment</a></code> | template_deployment block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachine">virtualMachine</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine">AzurermProviderFeaturesVirtualMachine</a></code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachineScaleSet">virtualMachineScaleSet</a></code> | <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet">AzurermProviderFeaturesVirtualMachineScaleSet</a></code> | virtual_machine_scale_set block. |

---

##### `apiManagement`<sup>Optional</sup> <a name="apiManagement" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.apiManagement"></a>

```java
public AzurermProviderFeaturesApiManagement getApiManagement();
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement">AzurermProviderFeaturesApiManagement</a>

api_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#api_management AzurermProvider#api_management}

---

##### `appConfiguration`<sup>Optional</sup> <a name="appConfiguration" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.appConfiguration"></a>

```java
public AzurermProviderFeaturesAppConfiguration getAppConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration">AzurermProviderFeaturesAppConfiguration</a>

app_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#app_configuration AzurermProvider#app_configuration}

---

##### `applicationInsights`<sup>Optional</sup> <a name="applicationInsights" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.applicationInsights"></a>

```java
public AzurermProviderFeaturesApplicationInsights getApplicationInsights();
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights">AzurermProviderFeaturesApplicationInsights</a>

application_insights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#application_insights AzurermProvider#application_insights}

---

##### `cognitiveAccount`<sup>Optional</sup> <a name="cognitiveAccount" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.cognitiveAccount"></a>

```java
public AzurermProviderFeaturesCognitiveAccount getCognitiveAccount();
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount">AzurermProviderFeaturesCognitiveAccount</a>

cognitive_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#cognitive_account AzurermProvider#cognitive_account}

---

##### `keyVault`<sup>Optional</sup> <a name="keyVault" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.keyVault"></a>

```java
public AzurermProviderFeaturesKeyVault getKeyVault();
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault">AzurermProviderFeaturesKeyVault</a>

key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#key_vault AzurermProvider#key_vault}

---

##### `logAnalyticsWorkspace`<sup>Optional</sup> <a name="logAnalyticsWorkspace" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.logAnalyticsWorkspace"></a>

```java
public AzurermProviderFeaturesLogAnalyticsWorkspace getLogAnalyticsWorkspace();
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace">AzurermProviderFeaturesLogAnalyticsWorkspace</a>

log_analytics_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#log_analytics_workspace AzurermProvider#log_analytics_workspace}

---

##### `managedDisk`<sup>Optional</sup> <a name="managedDisk" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.managedDisk"></a>

```java
public AzurermProviderFeaturesManagedDisk getManagedDisk();
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk">AzurermProviderFeaturesManagedDisk</a>

managed_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#managed_disk AzurermProvider#managed_disk}

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.resourceGroup"></a>

```java
public AzurermProviderFeaturesResourceGroup getResourceGroup();
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup">AzurermProviderFeaturesResourceGroup</a>

resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#resource_group AzurermProvider#resource_group}

---

##### `templateDeployment`<sup>Optional</sup> <a name="templateDeployment" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.templateDeployment"></a>

```java
public AzurermProviderFeaturesTemplateDeployment getTemplateDeployment();
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment">AzurermProviderFeaturesTemplateDeployment</a>

template_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#template_deployment AzurermProvider#template_deployment}

---

##### `virtualMachine`<sup>Optional</sup> <a name="virtualMachine" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachine"></a>

```java
public AzurermProviderFeaturesVirtualMachine getVirtualMachine();
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine">AzurermProviderFeaturesVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#virtual_machine AzurermProvider#virtual_machine}

---

##### `virtualMachineScaleSet`<sup>Optional</sup> <a name="virtualMachineScaleSet" id="@cdktf/provider-azurerm.provider.AzurermProviderFeatures.property.virtualMachineScaleSet"></a>

```java
public AzurermProviderFeaturesVirtualMachineScaleSet getVirtualMachineScaleSet();
```

- *Type:* <a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet">AzurermProviderFeaturesVirtualMachineScaleSet</a>

virtual_machine_scale_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#virtual_machine_scale_set AzurermProvider#virtual_machine_scale_set}

---

### AzurermProviderFeaturesApiManagement <a name="AzurermProviderFeaturesApiManagement" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.provider.AzurermProviderFeaturesApiManagement;

AzurermProviderFeaturesApiManagement.builder()
//  .purgeSoftDeleteOnDestroy(java.lang.Boolean)
//  .purgeSoftDeleteOnDestroy(IResolvable)
//  .recoverSoftDeleted(java.lang.Boolean)
//  .recoverSoftDeleted(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.purgeSoftDeleteOnDestroy">purgeSoftDeleteOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.recoverSoftDeleted">recoverSoftDeleted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}. |

---

##### `purgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="purgeSoftDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.purgeSoftDeleteOnDestroy"></a>

```java
public java.lang.Object getPurgeSoftDeleteOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}.

---

##### `recoverSoftDeleted`<sup>Optional</sup> <a name="recoverSoftDeleted" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApiManagement.property.recoverSoftDeleted"></a>

```java
public java.lang.Object getRecoverSoftDeleted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}.

---

### AzurermProviderFeaturesAppConfiguration <a name="AzurermProviderFeaturesAppConfiguration" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.provider.AzurermProviderFeaturesAppConfiguration;

AzurermProviderFeaturesAppConfiguration.builder()
//  .purgeSoftDeleteOnDestroy(java.lang.Boolean)
//  .purgeSoftDeleteOnDestroy(IResolvable)
//  .recoverSoftDeleted(java.lang.Boolean)
//  .recoverSoftDeleted(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.purgeSoftDeleteOnDestroy">purgeSoftDeleteOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.recoverSoftDeleted">recoverSoftDeleted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}. |

---

##### `purgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="purgeSoftDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.purgeSoftDeleteOnDestroy"></a>

```java
public java.lang.Object getPurgeSoftDeleteOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}.

---

##### `recoverSoftDeleted`<sup>Optional</sup> <a name="recoverSoftDeleted" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesAppConfiguration.property.recoverSoftDeleted"></a>

```java
public java.lang.Object getRecoverSoftDeleted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}.

---

### AzurermProviderFeaturesApplicationInsights <a name="AzurermProviderFeaturesApplicationInsights" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.provider.AzurermProviderFeaturesApplicationInsights;

AzurermProviderFeaturesApplicationInsights.builder()
//  .disableGeneratedRule(java.lang.Boolean)
//  .disableGeneratedRule(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights.property.disableGeneratedRule">disableGeneratedRule</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#disable_generated_rule AzurermProvider#disable_generated_rule}. |

---

##### `disableGeneratedRule`<sup>Optional</sup> <a name="disableGeneratedRule" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesApplicationInsights.property.disableGeneratedRule"></a>

```java
public java.lang.Object getDisableGeneratedRule();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#disable_generated_rule AzurermProvider#disable_generated_rule}.

---

### AzurermProviderFeaturesCognitiveAccount <a name="AzurermProviderFeaturesCognitiveAccount" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.provider.AzurermProviderFeaturesCognitiveAccount;

AzurermProviderFeaturesCognitiveAccount.builder()
//  .purgeSoftDeleteOnDestroy(java.lang.Boolean)
//  .purgeSoftDeleteOnDestroy(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount.property.purgeSoftDeleteOnDestroy">purgeSoftDeleteOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}. |

---

##### `purgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="purgeSoftDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesCognitiveAccount.property.purgeSoftDeleteOnDestroy"></a>

```java
public java.lang.Object getPurgeSoftDeleteOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}.

---

### AzurermProviderFeaturesKeyVault <a name="AzurermProviderFeaturesKeyVault" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.provider.AzurermProviderFeaturesKeyVault;

AzurermProviderFeaturesKeyVault.builder()
//  .purgeSoftDeletedCertificatesOnDestroy(java.lang.Boolean)
//  .purgeSoftDeletedCertificatesOnDestroy(IResolvable)
//  .purgeSoftDeletedHardwareSecurityModulesOnDestroy(java.lang.Boolean)
//  .purgeSoftDeletedHardwareSecurityModulesOnDestroy(IResolvable)
//  .purgeSoftDeletedKeysOnDestroy(java.lang.Boolean)
//  .purgeSoftDeletedKeysOnDestroy(IResolvable)
//  .purgeSoftDeletedSecretsOnDestroy(java.lang.Boolean)
//  .purgeSoftDeletedSecretsOnDestroy(IResolvable)
//  .purgeSoftDeleteOnDestroy(java.lang.Boolean)
//  .purgeSoftDeleteOnDestroy(IResolvable)
//  .recoverSoftDeletedCertificates(java.lang.Boolean)
//  .recoverSoftDeletedCertificates(IResolvable)
//  .recoverSoftDeletedKeys(java.lang.Boolean)
//  .recoverSoftDeletedKeys(IResolvable)
//  .recoverSoftDeletedKeyVaults(java.lang.Boolean)
//  .recoverSoftDeletedKeyVaults(IResolvable)
//  .recoverSoftDeletedSecrets(java.lang.Boolean)
//  .recoverSoftDeletedSecrets(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedCertificatesOnDestroy">purgeSoftDeletedCertificatesOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault_certificate` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModulesOnDestroy">purgeSoftDeletedHardwareSecurityModulesOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedKeysOnDestroy">purgeSoftDeletedKeysOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault_key` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedSecretsOnDestroy">purgeSoftDeletedSecretsOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault_secret` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeleteOnDestroy">purgeSoftDeleteOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault` resources will be permanently deleted (e.g purged), when destroyed. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedCertificates">recoverSoftDeletedCertificates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault_certificate` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeys">recoverSoftDeletedKeys</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault_key` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeyVaults">recoverSoftDeletedKeyVaults</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault` resources will be restored, instead of creating new ones. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedSecrets">recoverSoftDeletedSecrets</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled soft-deleted `azurerm_key_vault_secret` resources will be restored, instead of creating new ones. |

---

##### `purgeSoftDeletedCertificatesOnDestroy`<sup>Optional</sup> <a name="purgeSoftDeletedCertificatesOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedCertificatesOnDestroy"></a>

```java
public java.lang.Object getPurgeSoftDeletedCertificatesOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault_certificate` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#purge_soft_deleted_certificates_on_destroy AzurermProvider#purge_soft_deleted_certificates_on_destroy}

---

##### `purgeSoftDeletedHardwareSecurityModulesOnDestroy`<sup>Optional</sup> <a name="purgeSoftDeletedHardwareSecurityModulesOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedHardwareSecurityModulesOnDestroy"></a>

```java
public java.lang.Object getPurgeSoftDeletedHardwareSecurityModulesOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#purge_soft_deleted_hardware_security_modules_on_destroy AzurermProvider#purge_soft_deleted_hardware_security_modules_on_destroy}

---

##### `purgeSoftDeletedKeysOnDestroy`<sup>Optional</sup> <a name="purgeSoftDeletedKeysOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedKeysOnDestroy"></a>

```java
public java.lang.Object getPurgeSoftDeletedKeysOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault_key` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#purge_soft_deleted_keys_on_destroy AzurermProvider#purge_soft_deleted_keys_on_destroy}

---

##### `purgeSoftDeletedSecretsOnDestroy`<sup>Optional</sup> <a name="purgeSoftDeletedSecretsOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeletedSecretsOnDestroy"></a>

```java
public java.lang.Object getPurgeSoftDeletedSecretsOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault_secret` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#purge_soft_deleted_secrets_on_destroy AzurermProvider#purge_soft_deleted_secrets_on_destroy}

---

##### `purgeSoftDeleteOnDestroy`<sup>Optional</sup> <a name="purgeSoftDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.purgeSoftDeleteOnDestroy"></a>

```java
public java.lang.Object getPurgeSoftDeleteOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault` resources will be permanently deleted (e.g purged), when destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}

---

##### `recoverSoftDeletedCertificates`<sup>Optional</sup> <a name="recoverSoftDeletedCertificates" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedCertificates"></a>

```java
public java.lang.Object getRecoverSoftDeletedCertificates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault_certificate` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#recover_soft_deleted_certificates AzurermProvider#recover_soft_deleted_certificates}

---

##### `recoverSoftDeletedKeys`<sup>Optional</sup> <a name="recoverSoftDeletedKeys" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeys"></a>

```java
public java.lang.Object getRecoverSoftDeletedKeys();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault_key` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#recover_soft_deleted_keys AzurermProvider#recover_soft_deleted_keys}

---

##### `recoverSoftDeletedKeyVaults`<sup>Optional</sup> <a name="recoverSoftDeletedKeyVaults" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedKeyVaults"></a>

```java
public java.lang.Object getRecoverSoftDeletedKeyVaults();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#recover_soft_deleted_key_vaults AzurermProvider#recover_soft_deleted_key_vaults}

---

##### `recoverSoftDeletedSecrets`<sup>Optional</sup> <a name="recoverSoftDeletedSecrets" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesKeyVault.property.recoverSoftDeletedSecrets"></a>

```java
public java.lang.Object getRecoverSoftDeletedSecrets();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled soft-deleted `azurerm_key_vault_secret` resources will be restored, instead of creating new ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#recover_soft_deleted_secrets AzurermProvider#recover_soft_deleted_secrets}

---

### AzurermProviderFeaturesLogAnalyticsWorkspace <a name="AzurermProviderFeaturesLogAnalyticsWorkspace" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace;

AzurermProviderFeaturesLogAnalyticsWorkspace.builder()
//  .permanentlyDeleteOnDestroy(java.lang.Boolean)
//  .permanentlyDeleteOnDestroy(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace.property.permanentlyDeleteOnDestroy">permanentlyDeleteOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#permanently_delete_on_destroy AzurermProvider#permanently_delete_on_destroy}. |

---

##### `permanentlyDeleteOnDestroy`<sup>Optional</sup> <a name="permanentlyDeleteOnDestroy" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesLogAnalyticsWorkspace.property.permanentlyDeleteOnDestroy"></a>

```java
public java.lang.Object getPermanentlyDeleteOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#permanently_delete_on_destroy AzurermProvider#permanently_delete_on_destroy}.

---

### AzurermProviderFeaturesManagedDisk <a name="AzurermProviderFeaturesManagedDisk" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.provider.AzurermProviderFeaturesManagedDisk;

AzurermProviderFeaturesManagedDisk.builder()
//  .expandWithoutDowntime(java.lang.Boolean)
//  .expandWithoutDowntime(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk.property.expandWithoutDowntime">expandWithoutDowntime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#expand_without_downtime AzurermProvider#expand_without_downtime}. |

---

##### `expandWithoutDowntime`<sup>Optional</sup> <a name="expandWithoutDowntime" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesManagedDisk.property.expandWithoutDowntime"></a>

```java
public java.lang.Object getExpandWithoutDowntime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#expand_without_downtime AzurermProvider#expand_without_downtime}.

---

### AzurermProviderFeaturesResourceGroup <a name="AzurermProviderFeaturesResourceGroup" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.provider.AzurermProviderFeaturesResourceGroup;

AzurermProviderFeaturesResourceGroup.builder()
//  .preventDeletionIfContainsResources(java.lang.Boolean)
//  .preventDeletionIfContainsResources(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources">preventDeletionIfContainsResources</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#prevent_deletion_if_contains_resources AzurermProvider#prevent_deletion_if_contains_resources}. |

---

##### `preventDeletionIfContainsResources`<sup>Optional</sup> <a name="preventDeletionIfContainsResources" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesResourceGroup.property.preventDeletionIfContainsResources"></a>

```java
public java.lang.Object getPreventDeletionIfContainsResources();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#prevent_deletion_if_contains_resources AzurermProvider#prevent_deletion_if_contains_resources}.

---

### AzurermProviderFeaturesTemplateDeployment <a name="AzurermProviderFeaturesTemplateDeployment" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.provider.AzurermProviderFeaturesTemplateDeployment;

AzurermProviderFeaturesTemplateDeployment.builder()
    .deleteNestedItemsDuringDeletion(java.lang.Boolean)
    .deleteNestedItemsDuringDeletion(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment.property.deleteNestedItemsDuringDeletion">deleteNestedItemsDuringDeletion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#delete_nested_items_during_deletion AzurermProvider#delete_nested_items_during_deletion}. |

---

##### `deleteNestedItemsDuringDeletion`<sup>Required</sup> <a name="deleteNestedItemsDuringDeletion" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesTemplateDeployment.property.deleteNestedItemsDuringDeletion"></a>

```java
public java.lang.Object getDeleteNestedItemsDuringDeletion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#delete_nested_items_during_deletion AzurermProvider#delete_nested_items_during_deletion}.

---

### AzurermProviderFeaturesVirtualMachine <a name="AzurermProviderFeaturesVirtualMachine" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.provider.AzurermProviderFeaturesVirtualMachine;

AzurermProviderFeaturesVirtualMachine.builder()
//  .deleteOsDiskOnDeletion(java.lang.Boolean)
//  .deleteOsDiskOnDeletion(IResolvable)
//  .gracefulShutdown(java.lang.Boolean)
//  .gracefulShutdown(IResolvable)
//  .skipShutdownAndForceDelete(java.lang.Boolean)
//  .skipShutdownAndForceDelete(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion">deleteOsDiskOnDeletion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#delete_os_disk_on_deletion AzurermProvider#delete_os_disk_on_deletion}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.gracefulShutdown">gracefulShutdown</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#graceful_shutdown AzurermProvider#graceful_shutdown}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete">skipShutdownAndForceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#skip_shutdown_and_force_delete AzurermProvider#skip_shutdown_and_force_delete}. |

---

##### `deleteOsDiskOnDeletion`<sup>Optional</sup> <a name="deleteOsDiskOnDeletion" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.deleteOsDiskOnDeletion"></a>

```java
public java.lang.Object getDeleteOsDiskOnDeletion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#delete_os_disk_on_deletion AzurermProvider#delete_os_disk_on_deletion}.

---

##### `gracefulShutdown`<sup>Optional</sup> <a name="gracefulShutdown" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.gracefulShutdown"></a>

```java
public java.lang.Object getGracefulShutdown();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#graceful_shutdown AzurermProvider#graceful_shutdown}.

---

##### `skipShutdownAndForceDelete`<sup>Optional</sup> <a name="skipShutdownAndForceDelete" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachine.property.skipShutdownAndForceDelete"></a>

```java
public java.lang.Object getSkipShutdownAndForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#skip_shutdown_and_force_delete AzurermProvider#skip_shutdown_and_force_delete}.

---

### AzurermProviderFeaturesVirtualMachineScaleSet <a name="AzurermProviderFeaturesVirtualMachineScaleSet" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet;

AzurermProviderFeaturesVirtualMachineScaleSet.builder()
    .rollInstancesWhenRequired(java.lang.Boolean)
    .rollInstancesWhenRequired(IResolvable)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .scaleToZeroBeforeDeletion(java.lang.Boolean)
//  .scaleToZeroBeforeDeletion(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired">rollInstancesWhenRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#roll_instances_when_required AzurermProvider#roll_instances_when_required}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#force_delete AzurermProvider#force_delete}. |
| <code><a href="#@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion">scaleToZeroBeforeDeletion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#scale_to_zero_before_deletion AzurermProvider#scale_to_zero_before_deletion}. |

---

##### `rollInstancesWhenRequired`<sup>Required</sup> <a name="rollInstancesWhenRequired" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.rollInstancesWhenRequired"></a>

```java
public java.lang.Object getRollInstancesWhenRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#roll_instances_when_required AzurermProvider#roll_instances_when_required}.

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#force_delete AzurermProvider#force_delete}.

---

##### `scaleToZeroBeforeDeletion`<sup>Optional</sup> <a name="scaleToZeroBeforeDeletion" id="@cdktf/provider-azurerm.provider.AzurermProviderFeaturesVirtualMachineScaleSet.property.scaleToZeroBeforeDeletion"></a>

```java
public java.lang.Object getScaleToZeroBeforeDeletion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs#scale_to_zero_before_deletion AzurermProvider#scale_to_zero_before_deletion}.

---



