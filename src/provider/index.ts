// https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzurermProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}
  */
  readonly auxiliaryTenantIds?: string[];
  /**
  * Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#client_certificate AzurermProvider#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#client_certificate_password AzurermProvider#client_certificate_password}
  */
  readonly clientCertificatePassword?: string;
  /**
  * The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#client_certificate_path AzurermProvider#client_certificate_path}
  */
  readonly clientCertificatePath?: string;
  /**
  * The Client ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#client_id AzurermProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The path to a file containing the Client ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#client_id_file_path AzurermProvider#client_id_file_path}
  */
  readonly clientIdFilePath?: string;
  /**
  * The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#client_secret AzurermProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The path to a file containing the Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#client_secret_file_path AzurermProvider#client_secret_file_path}
  */
  readonly clientSecretFilePath?: string;
  /**
  * This will disable the x-ms-correlation-request-id header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#disable_correlation_request_id AzurermProvider#disable_correlation_request_id}
  */
  readonly disableCorrelationRequestId?: boolean | cdktf.IResolvable;
  /**
  * This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#disable_terraform_partner_id AzurermProvider#disable_terraform_partner_id}
  */
  readonly disableTerraformPartnerId?: boolean | cdktf.IResolvable;
  /**
  * The Cloud Environment which should be used. Possible values are public, usgovernment, and china. Defaults to public. Not used and should not be specified when `metadata_host` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#environment AzurermProvider#environment}
  */
  readonly environment?: string;
  /**
  * The Hostname which should be used for the Azure Metadata Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#metadata_host AzurermProvider#metadata_host}
  */
  readonly metadataHost?: string;
  /**
  * The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#msi_endpoint AzurermProvider#msi_endpoint}
  */
  readonly msiEndpoint?: string;
  /**
  * The bearer token for the request to the OIDC provider. For use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#oidc_request_token AzurermProvider#oidc_request_token}
  */
  readonly oidcRequestToken?: string;
  /**
  * The URL for the OIDC provider from which to request an ID token. For use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#oidc_request_url AzurermProvider#oidc_request_url}
  */
  readonly oidcRequestUrl?: string;
  /**
  * The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#oidc_token AzurermProvider#oidc_token}
  */
  readonly oidcToken?: string;
  /**
  * The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#oidc_token_file_path AzurermProvider#oidc_token_file_path}
  */
  readonly oidcTokenFilePath?: string;
  /**
  * A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#partner_id AzurermProvider#partner_id}
  */
  readonly partnerId?: string;
  /**
  * The set of Resource Providers which should be automatically registered for the subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#resource_provider_registrations AzurermProvider#resource_provider_registrations}
  */
  readonly resourceProviderRegistrations?: string;
  /**
  * A list of Resource Providers to explicitly register for the subscription, in addition to those specified by the `resource_provider_registrations` property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#resource_providers_to_register AzurermProvider#resource_providers_to_register}
  */
  readonly resourceProvidersToRegister?: string[];
  /**
  * Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already registered?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#skip_provider_registration AzurermProvider#skip_provider_registration}
  */
  readonly skipProviderRegistration?: boolean | cdktf.IResolvable;
  /**
  * Should the AzureRM Provider use Azure AD Authentication when accessing the Storage Data Plane APIs?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#storage_use_azuread AzurermProvider#storage_use_azuread}
  */
  readonly storageUseAzuread?: boolean | cdktf.IResolvable;
  /**
  * The Subscription ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#subscription_id AzurermProvider#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * The Tenant ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#tenant_id AzurermProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Allow Azure AKS Workload Identity to be used for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#use_aks_workload_identity AzurermProvider#use_aks_workload_identity}
  */
  readonly useAksWorkloadIdentity?: boolean | cdktf.IResolvable;
  /**
  * Allow Azure CLI to be used for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#use_cli AzurermProvider#use_cli}
  */
  readonly useCli?: boolean | cdktf.IResolvable;
  /**
  * Allow Managed Service Identity to be used for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#use_msi AzurermProvider#use_msi}
  */
  readonly useMsi?: boolean | cdktf.IResolvable;
  /**
  * Allow OpenID Connect to be used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#use_oidc AzurermProvider#use_oidc}
  */
  readonly useOidc?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#alias AzurermProvider#alias}
  */
  readonly alias?: string;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#features AzurermProvider#features}
  */
  readonly features?: AzurermProviderFeatures[] | cdktf.IResolvable;
}
export interface AzurermProviderFeaturesApiManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}
  */
  readonly purgeSoftDeleteOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}
  */
  readonly recoverSoftDeleted?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesApiManagementToTerraform(struct?: AzurermProviderFeaturesApiManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_soft_delete_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeleteOnDestroy),
    recover_soft_deleted: cdktf.booleanToTerraform(struct!.recoverSoftDeleted),
  }
}


export function azurermProviderFeaturesApiManagementToHclTerraform(struct?: AzurermProviderFeaturesApiManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    purge_soft_delete_on_destroy: {
      value: cdktf.booleanToHclTerraform(struct!.purgeSoftDeleteOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recover_soft_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.recoverSoftDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesAppConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}
  */
  readonly purgeSoftDeleteOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}
  */
  readonly recoverSoftDeleted?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesAppConfigurationToTerraform(struct?: AzurermProviderFeaturesAppConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_soft_delete_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeleteOnDestroy),
    recover_soft_deleted: cdktf.booleanToTerraform(struct!.recoverSoftDeleted),
  }
}


export function azurermProviderFeaturesAppConfigurationToHclTerraform(struct?: AzurermProviderFeaturesAppConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    purge_soft_delete_on_destroy: {
      value: cdktf.booleanToHclTerraform(struct!.purgeSoftDeleteOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recover_soft_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.recoverSoftDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesApplicationInsights {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#disable_generated_rule AzurermProvider#disable_generated_rule}
  */
  readonly disableGeneratedRule?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesApplicationInsightsToTerraform(struct?: AzurermProviderFeaturesApplicationInsights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_generated_rule: cdktf.booleanToTerraform(struct!.disableGeneratedRule),
  }
}


export function azurermProviderFeaturesApplicationInsightsToHclTerraform(struct?: AzurermProviderFeaturesApplicationInsights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_generated_rule: {
      value: cdktf.booleanToHclTerraform(struct!.disableGeneratedRule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesCognitiveAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}
  */
  readonly purgeSoftDeleteOnDestroy?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesCognitiveAccountToTerraform(struct?: AzurermProviderFeaturesCognitiveAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_soft_delete_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeleteOnDestroy),
  }
}


export function azurermProviderFeaturesCognitiveAccountToHclTerraform(struct?: AzurermProviderFeaturesCognitiveAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    purge_soft_delete_on_destroy: {
      value: cdktf.booleanToHclTerraform(struct!.purgeSoftDeleteOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesKeyVault {
  /**
  * When enabled soft-deleted `azurerm_key_vault` resources will be permanently deleted (e.g purged), when destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}
  */
  readonly purgeSoftDeleteOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_certificate` resources will be permanently deleted (e.g purged), when destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#purge_soft_deleted_certificates_on_destroy AzurermProvider#purge_soft_deleted_certificates_on_destroy}
  */
  readonly purgeSoftDeletedCertificatesOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be permanently deleted (e.g purged), when destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#purge_soft_deleted_hardware_security_module_keys_on_destroy AzurermProvider#purge_soft_deleted_hardware_security_module_keys_on_destroy}
  */
  readonly purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module` resources will be permanently deleted (e.g purged), when destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#purge_soft_deleted_hardware_security_modules_on_destroy AzurermProvider#purge_soft_deleted_hardware_security_modules_on_destroy}
  */
  readonly purgeSoftDeletedHardwareSecurityModulesOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_key` resources will be permanently deleted (e.g purged), when destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#purge_soft_deleted_keys_on_destroy AzurermProvider#purge_soft_deleted_keys_on_destroy}
  */
  readonly purgeSoftDeletedKeysOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_secret` resources will be permanently deleted (e.g purged), when destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#purge_soft_deleted_secrets_on_destroy AzurermProvider#purge_soft_deleted_secrets_on_destroy}
  */
  readonly purgeSoftDeletedSecretsOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_certificate` resources will be restored, instead of creating new ones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#recover_soft_deleted_certificates AzurermProvider#recover_soft_deleted_certificates}
  */
  readonly recoverSoftDeletedCertificates?: boolean | cdktf.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module_key` resources will be restored, instead of creating new ones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#recover_soft_deleted_hardware_security_module_keys AzurermProvider#recover_soft_deleted_hardware_security_module_keys}
  */
  readonly recoverSoftDeletedHardwareSecurityModuleKeys?: boolean | cdktf.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault` resources will be restored, instead of creating new ones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#recover_soft_deleted_key_vaults AzurermProvider#recover_soft_deleted_key_vaults}
  */
  readonly recoverSoftDeletedKeyVaults?: boolean | cdktf.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_key` resources will be restored, instead of creating new ones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#recover_soft_deleted_keys AzurermProvider#recover_soft_deleted_keys}
  */
  readonly recoverSoftDeletedKeys?: boolean | cdktf.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_secret` resources will be restored, instead of creating new ones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#recover_soft_deleted_secrets AzurermProvider#recover_soft_deleted_secrets}
  */
  readonly recoverSoftDeletedSecrets?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesKeyVaultToTerraform(struct?: AzurermProviderFeaturesKeyVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_soft_delete_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeleteOnDestroy),
    purge_soft_deleted_certificates_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeletedCertificatesOnDestroy),
    purge_soft_deleted_hardware_security_module_keys_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy),
    purge_soft_deleted_hardware_security_modules_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeletedHardwareSecurityModulesOnDestroy),
    purge_soft_deleted_keys_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeletedKeysOnDestroy),
    purge_soft_deleted_secrets_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeletedSecretsOnDestroy),
    recover_soft_deleted_certificates: cdktf.booleanToTerraform(struct!.recoverSoftDeletedCertificates),
    recover_soft_deleted_hardware_security_module_keys: cdktf.booleanToTerraform(struct!.recoverSoftDeletedHardwareSecurityModuleKeys),
    recover_soft_deleted_key_vaults: cdktf.booleanToTerraform(struct!.recoverSoftDeletedKeyVaults),
    recover_soft_deleted_keys: cdktf.booleanToTerraform(struct!.recoverSoftDeletedKeys),
    recover_soft_deleted_secrets: cdktf.booleanToTerraform(struct!.recoverSoftDeletedSecrets),
  }
}


export function azurermProviderFeaturesKeyVaultToHclTerraform(struct?: AzurermProviderFeaturesKeyVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    purge_soft_delete_on_destroy: {
      value: cdktf.booleanToHclTerraform(struct!.purgeSoftDeleteOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    purge_soft_deleted_certificates_on_destroy: {
      value: cdktf.booleanToHclTerraform(struct!.purgeSoftDeletedCertificatesOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    purge_soft_deleted_hardware_security_module_keys_on_destroy: {
      value: cdktf.booleanToHclTerraform(struct!.purgeSoftDeletedHardwareSecurityModuleKeysOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    purge_soft_deleted_hardware_security_modules_on_destroy: {
      value: cdktf.booleanToHclTerraform(struct!.purgeSoftDeletedHardwareSecurityModulesOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    purge_soft_deleted_keys_on_destroy: {
      value: cdktf.booleanToHclTerraform(struct!.purgeSoftDeletedKeysOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    purge_soft_deleted_secrets_on_destroy: {
      value: cdktf.booleanToHclTerraform(struct!.purgeSoftDeletedSecretsOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recover_soft_deleted_certificates: {
      value: cdktf.booleanToHclTerraform(struct!.recoverSoftDeletedCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recover_soft_deleted_hardware_security_module_keys: {
      value: cdktf.booleanToHclTerraform(struct!.recoverSoftDeletedHardwareSecurityModuleKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recover_soft_deleted_key_vaults: {
      value: cdktf.booleanToHclTerraform(struct!.recoverSoftDeletedKeyVaults),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recover_soft_deleted_keys: {
      value: cdktf.booleanToHclTerraform(struct!.recoverSoftDeletedKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recover_soft_deleted_secrets: {
      value: cdktf.booleanToHclTerraform(struct!.recoverSoftDeletedSecrets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesLogAnalyticsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#permanently_delete_on_destroy AzurermProvider#permanently_delete_on_destroy}
  */
  readonly permanentlyDeleteOnDestroy?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesLogAnalyticsWorkspaceToTerraform(struct?: AzurermProviderFeaturesLogAnalyticsWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permanently_delete_on_destroy: cdktf.booleanToTerraform(struct!.permanentlyDeleteOnDestroy),
  }
}


export function azurermProviderFeaturesLogAnalyticsWorkspaceToHclTerraform(struct?: AzurermProviderFeaturesLogAnalyticsWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permanently_delete_on_destroy: {
      value: cdktf.booleanToHclTerraform(struct!.permanentlyDeleteOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesMachineLearning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#purge_soft_deleted_workspace_on_destroy AzurermProvider#purge_soft_deleted_workspace_on_destroy}
  */
  readonly purgeSoftDeletedWorkspaceOnDestroy?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesMachineLearningToTerraform(struct?: AzurermProviderFeaturesMachineLearning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_soft_deleted_workspace_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeletedWorkspaceOnDestroy),
  }
}


export function azurermProviderFeaturesMachineLearningToHclTerraform(struct?: AzurermProviderFeaturesMachineLearning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    purge_soft_deleted_workspace_on_destroy: {
      value: cdktf.booleanToHclTerraform(struct!.purgeSoftDeletedWorkspaceOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesManagedDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#expand_without_downtime AzurermProvider#expand_without_downtime}
  */
  readonly expandWithoutDowntime?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesManagedDiskToTerraform(struct?: AzurermProviderFeaturesManagedDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expand_without_downtime: cdktf.booleanToTerraform(struct!.expandWithoutDowntime),
  }
}


export function azurermProviderFeaturesManagedDiskToHclTerraform(struct?: AzurermProviderFeaturesManagedDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expand_without_downtime: {
      value: cdktf.booleanToHclTerraform(struct!.expandWithoutDowntime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesPostgresqlFlexibleServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#restart_server_on_configuration_value_change AzurermProvider#restart_server_on_configuration_value_change}
  */
  readonly restartServerOnConfigurationValueChange?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesPostgresqlFlexibleServerToTerraform(struct?: AzurermProviderFeaturesPostgresqlFlexibleServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restart_server_on_configuration_value_change: cdktf.booleanToTerraform(struct!.restartServerOnConfigurationValueChange),
  }
}


export function azurermProviderFeaturesPostgresqlFlexibleServerToHclTerraform(struct?: AzurermProviderFeaturesPostgresqlFlexibleServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restart_server_on_configuration_value_change: {
      value: cdktf.booleanToHclTerraform(struct!.restartServerOnConfigurationValueChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesRecoveryService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#purge_protected_items_from_vault_on_destroy AzurermProvider#purge_protected_items_from_vault_on_destroy}
  */
  readonly purgeProtectedItemsFromVaultOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#vm_backup_stop_protection_and_retain_data_on_destroy AzurermProvider#vm_backup_stop_protection_and_retain_data_on_destroy}
  */
  readonly vmBackupStopProtectionAndRetainDataOnDestroy?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesRecoveryServiceToTerraform(struct?: AzurermProviderFeaturesRecoveryService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_protected_items_from_vault_on_destroy: cdktf.booleanToTerraform(struct!.purgeProtectedItemsFromVaultOnDestroy),
    vm_backup_stop_protection_and_retain_data_on_destroy: cdktf.booleanToTerraform(struct!.vmBackupStopProtectionAndRetainDataOnDestroy),
  }
}


export function azurermProviderFeaturesRecoveryServiceToHclTerraform(struct?: AzurermProviderFeaturesRecoveryService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    purge_protected_items_from_vault_on_destroy: {
      value: cdktf.booleanToHclTerraform(struct!.purgeProtectedItemsFromVaultOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vm_backup_stop_protection_and_retain_data_on_destroy: {
      value: cdktf.booleanToHclTerraform(struct!.vmBackupStopProtectionAndRetainDataOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesRecoveryServicesVaults {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#recover_soft_deleted_backup_protected_vm AzurermProvider#recover_soft_deleted_backup_protected_vm}
  */
  readonly recoverSoftDeletedBackupProtectedVm?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesRecoveryServicesVaultsToTerraform(struct?: AzurermProviderFeaturesRecoveryServicesVaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recover_soft_deleted_backup_protected_vm: cdktf.booleanToTerraform(struct!.recoverSoftDeletedBackupProtectedVm),
  }
}


export function azurermProviderFeaturesRecoveryServicesVaultsToHclTerraform(struct?: AzurermProviderFeaturesRecoveryServicesVaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recover_soft_deleted_backup_protected_vm: {
      value: cdktf.booleanToHclTerraform(struct!.recoverSoftDeletedBackupProtectedVm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesResourceGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#prevent_deletion_if_contains_resources AzurermProvider#prevent_deletion_if_contains_resources}
  */
  readonly preventDeletionIfContainsResources?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesResourceGroupToTerraform(struct?: AzurermProviderFeaturesResourceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prevent_deletion_if_contains_resources: cdktf.booleanToTerraform(struct!.preventDeletionIfContainsResources),
  }
}


export function azurermProviderFeaturesResourceGroupToHclTerraform(struct?: AzurermProviderFeaturesResourceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prevent_deletion_if_contains_resources: {
      value: cdktf.booleanToHclTerraform(struct!.preventDeletionIfContainsResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesSubscription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#prevent_cancellation_on_destroy AzurermProvider#prevent_cancellation_on_destroy}
  */
  readonly preventCancellationOnDestroy?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesSubscriptionToTerraform(struct?: AzurermProviderFeaturesSubscription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prevent_cancellation_on_destroy: cdktf.booleanToTerraform(struct!.preventCancellationOnDestroy),
  }
}


export function azurermProviderFeaturesSubscriptionToHclTerraform(struct?: AzurermProviderFeaturesSubscription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prevent_cancellation_on_destroy: {
      value: cdktf.booleanToHclTerraform(struct!.preventCancellationOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesTemplateDeployment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#delete_nested_items_during_deletion AzurermProvider#delete_nested_items_during_deletion}
  */
  readonly deleteNestedItemsDuringDeletion: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesTemplateDeploymentToTerraform(struct?: AzurermProviderFeaturesTemplateDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_nested_items_during_deletion: cdktf.booleanToTerraform(struct!.deleteNestedItemsDuringDeletion),
  }
}


export function azurermProviderFeaturesTemplateDeploymentToHclTerraform(struct?: AzurermProviderFeaturesTemplateDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_nested_items_during_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.deleteNestedItemsDuringDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesVirtualMachine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#delete_os_disk_on_deletion AzurermProvider#delete_os_disk_on_deletion}
  */
  readonly deleteOsDiskOnDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#detach_implicit_data_disk_on_deletion AzurermProvider#detach_implicit_data_disk_on_deletion}
  */
  readonly detachImplicitDataDiskOnDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#graceful_shutdown AzurermProvider#graceful_shutdown}
  */
  readonly gracefulShutdown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#skip_shutdown_and_force_delete AzurermProvider#skip_shutdown_and_force_delete}
  */
  readonly skipShutdownAndForceDelete?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesVirtualMachineToTerraform(struct?: AzurermProviderFeaturesVirtualMachine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_os_disk_on_deletion: cdktf.booleanToTerraform(struct!.deleteOsDiskOnDeletion),
    detach_implicit_data_disk_on_deletion: cdktf.booleanToTerraform(struct!.detachImplicitDataDiskOnDeletion),
    graceful_shutdown: cdktf.booleanToTerraform(struct!.gracefulShutdown),
    skip_shutdown_and_force_delete: cdktf.booleanToTerraform(struct!.skipShutdownAndForceDelete),
  }
}


export function azurermProviderFeaturesVirtualMachineToHclTerraform(struct?: AzurermProviderFeaturesVirtualMachine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_os_disk_on_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.deleteOsDiskOnDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    detach_implicit_data_disk_on_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.detachImplicitDataDiskOnDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    graceful_shutdown: {
      value: cdktf.booleanToHclTerraform(struct!.gracefulShutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_shutdown_and_force_delete: {
      value: cdktf.booleanToHclTerraform(struct!.skipShutdownAndForceDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeaturesVirtualMachineScaleSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#force_delete AzurermProvider#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#reimage_on_manual_upgrade AzurermProvider#reimage_on_manual_upgrade}
  */
  readonly reimageOnManualUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#roll_instances_when_required AzurermProvider#roll_instances_when_required}
  */
  readonly rollInstancesWhenRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#scale_to_zero_before_deletion AzurermProvider#scale_to_zero_before_deletion}
  */
  readonly scaleToZeroBeforeDeletion?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesVirtualMachineScaleSetToTerraform(struct?: AzurermProviderFeaturesVirtualMachineScaleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_delete: cdktf.booleanToTerraform(struct!.forceDelete),
    reimage_on_manual_upgrade: cdktf.booleanToTerraform(struct!.reimageOnManualUpgrade),
    roll_instances_when_required: cdktf.booleanToTerraform(struct!.rollInstancesWhenRequired),
    scale_to_zero_before_deletion: cdktf.booleanToTerraform(struct!.scaleToZeroBeforeDeletion),
  }
}


export function azurermProviderFeaturesVirtualMachineScaleSetToHclTerraform(struct?: AzurermProviderFeaturesVirtualMachineScaleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_delete: {
      value: cdktf.booleanToHclTerraform(struct!.forceDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reimage_on_manual_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.reimageOnManualUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    roll_instances_when_required: {
      value: cdktf.booleanToHclTerraform(struct!.rollInstancesWhenRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scale_to_zero_before_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.scaleToZeroBeforeDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AzurermProviderFeatures {
  /**
  * api_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#api_management AzurermProvider#api_management}
  */
  readonly apiManagement?: AzurermProviderFeaturesApiManagement[] | cdktf.IResolvable;
  /**
  * app_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#app_configuration AzurermProvider#app_configuration}
  */
  readonly appConfiguration?: AzurermProviderFeaturesAppConfiguration[] | cdktf.IResolvable;
  /**
  * application_insights block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#application_insights AzurermProvider#application_insights}
  */
  readonly applicationInsights?: AzurermProviderFeaturesApplicationInsights[] | cdktf.IResolvable;
  /**
  * cognitive_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#cognitive_account AzurermProvider#cognitive_account}
  */
  readonly cognitiveAccount?: AzurermProviderFeaturesCognitiveAccount[] | cdktf.IResolvable;
  /**
  * key_vault block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#key_vault AzurermProvider#key_vault}
  */
  readonly keyVault?: AzurermProviderFeaturesKeyVault[] | cdktf.IResolvable;
  /**
  * log_analytics_workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#log_analytics_workspace AzurermProvider#log_analytics_workspace}
  */
  readonly logAnalyticsWorkspace?: AzurermProviderFeaturesLogAnalyticsWorkspace[] | cdktf.IResolvable;
  /**
  * machine_learning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#machine_learning AzurermProvider#machine_learning}
  */
  readonly machineLearning?: AzurermProviderFeaturesMachineLearning[] | cdktf.IResolvable;
  /**
  * managed_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#managed_disk AzurermProvider#managed_disk}
  */
  readonly managedDisk?: AzurermProviderFeaturesManagedDisk[] | cdktf.IResolvable;
  /**
  * postgresql_flexible_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#postgresql_flexible_server AzurermProvider#postgresql_flexible_server}
  */
  readonly postgresqlFlexibleServer?: AzurermProviderFeaturesPostgresqlFlexibleServer[] | cdktf.IResolvable;
  /**
  * recovery_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#recovery_service AzurermProvider#recovery_service}
  */
  readonly recoveryService?: AzurermProviderFeaturesRecoveryService[] | cdktf.IResolvable;
  /**
  * recovery_services_vaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#recovery_services_vaults AzurermProvider#recovery_services_vaults}
  */
  readonly recoveryServicesVaults?: AzurermProviderFeaturesRecoveryServicesVaults[] | cdktf.IResolvable;
  /**
  * resource_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#resource_group AzurermProvider#resource_group}
  */
  readonly resourceGroup?: AzurermProviderFeaturesResourceGroup[] | cdktf.IResolvable;
  /**
  * subscription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#subscription AzurermProvider#subscription}
  */
  readonly subscription?: AzurermProviderFeaturesSubscription[] | cdktf.IResolvable;
  /**
  * template_deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#template_deployment AzurermProvider#template_deployment}
  */
  readonly templateDeployment?: AzurermProviderFeaturesTemplateDeployment[] | cdktf.IResolvable;
  /**
  * virtual_machine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#virtual_machine AzurermProvider#virtual_machine}
  */
  readonly virtualMachine?: AzurermProviderFeaturesVirtualMachine[] | cdktf.IResolvable;
  /**
  * virtual_machine_scale_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#virtual_machine_scale_set AzurermProvider#virtual_machine_scale_set}
  */
  readonly virtualMachineScaleSet?: AzurermProviderFeaturesVirtualMachineScaleSet[] | cdktf.IResolvable;
}

export function azurermProviderFeaturesToTerraform(struct?: AzurermProviderFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_management: cdktf.listMapper(azurermProviderFeaturesApiManagementToTerraform, true)(struct!.apiManagement),
    app_configuration: cdktf.listMapper(azurermProviderFeaturesAppConfigurationToTerraform, true)(struct!.appConfiguration),
    application_insights: cdktf.listMapper(azurermProviderFeaturesApplicationInsightsToTerraform, true)(struct!.applicationInsights),
    cognitive_account: cdktf.listMapper(azurermProviderFeaturesCognitiveAccountToTerraform, true)(struct!.cognitiveAccount),
    key_vault: cdktf.listMapper(azurermProviderFeaturesKeyVaultToTerraform, true)(struct!.keyVault),
    log_analytics_workspace: cdktf.listMapper(azurermProviderFeaturesLogAnalyticsWorkspaceToTerraform, true)(struct!.logAnalyticsWorkspace),
    machine_learning: cdktf.listMapper(azurermProviderFeaturesMachineLearningToTerraform, true)(struct!.machineLearning),
    managed_disk: cdktf.listMapper(azurermProviderFeaturesManagedDiskToTerraform, true)(struct!.managedDisk),
    postgresql_flexible_server: cdktf.listMapper(azurermProviderFeaturesPostgresqlFlexibleServerToTerraform, true)(struct!.postgresqlFlexibleServer),
    recovery_service: cdktf.listMapper(azurermProviderFeaturesRecoveryServiceToTerraform, true)(struct!.recoveryService),
    recovery_services_vaults: cdktf.listMapper(azurermProviderFeaturesRecoveryServicesVaultsToTerraform, true)(struct!.recoveryServicesVaults),
    resource_group: cdktf.listMapper(azurermProviderFeaturesResourceGroupToTerraform, true)(struct!.resourceGroup),
    subscription: cdktf.listMapper(azurermProviderFeaturesSubscriptionToTerraform, true)(struct!.subscription),
    template_deployment: cdktf.listMapper(azurermProviderFeaturesTemplateDeploymentToTerraform, true)(struct!.templateDeployment),
    virtual_machine: cdktf.listMapper(azurermProviderFeaturesVirtualMachineToTerraform, true)(struct!.virtualMachine),
    virtual_machine_scale_set: cdktf.listMapper(azurermProviderFeaturesVirtualMachineScaleSetToTerraform, true)(struct!.virtualMachineScaleSet),
  }
}


export function azurermProviderFeaturesToHclTerraform(struct?: AzurermProviderFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_management: {
      value: cdktf.listMapperHcl(azurermProviderFeaturesApiManagementToHclTerraform, true)(struct!.apiManagement),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesApiManagementList",
    },
    app_configuration: {
      value: cdktf.listMapperHcl(azurermProviderFeaturesAppConfigurationToHclTerraform, true)(struct!.appConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesAppConfigurationList",
    },
    application_insights: {
      value: cdktf.listMapperHcl(azurermProviderFeaturesApplicationInsightsToHclTerraform, true)(struct!.applicationInsights),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesApplicationInsightsList",
    },
    cognitive_account: {
      value: cdktf.listMapperHcl(azurermProviderFeaturesCognitiveAccountToHclTerraform, true)(struct!.cognitiveAccount),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesCognitiveAccountList",
    },
    key_vault: {
      value: cdktf.listMapperHcl(azurermProviderFeaturesKeyVaultToHclTerraform, true)(struct!.keyVault),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesKeyVaultList",
    },
    log_analytics_workspace: {
      value: cdktf.listMapperHcl(azurermProviderFeaturesLogAnalyticsWorkspaceToHclTerraform, true)(struct!.logAnalyticsWorkspace),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesLogAnalyticsWorkspaceList",
    },
    machine_learning: {
      value: cdktf.listMapperHcl(azurermProviderFeaturesMachineLearningToHclTerraform, true)(struct!.machineLearning),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesMachineLearningList",
    },
    managed_disk: {
      value: cdktf.listMapperHcl(azurermProviderFeaturesManagedDiskToHclTerraform, true)(struct!.managedDisk),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesManagedDiskList",
    },
    postgresql_flexible_server: {
      value: cdktf.listMapperHcl(azurermProviderFeaturesPostgresqlFlexibleServerToHclTerraform, true)(struct!.postgresqlFlexibleServer),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesPostgresqlFlexibleServerList",
    },
    recovery_service: {
      value: cdktf.listMapperHcl(azurermProviderFeaturesRecoveryServiceToHclTerraform, true)(struct!.recoveryService),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesRecoveryServiceList",
    },
    recovery_services_vaults: {
      value: cdktf.listMapperHcl(azurermProviderFeaturesRecoveryServicesVaultsToHclTerraform, true)(struct!.recoveryServicesVaults),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesRecoveryServicesVaultsList",
    },
    resource_group: {
      value: cdktf.listMapperHcl(azurermProviderFeaturesResourceGroupToHclTerraform, true)(struct!.resourceGroup),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesResourceGroupList",
    },
    subscription: {
      value: cdktf.listMapperHcl(azurermProviderFeaturesSubscriptionToHclTerraform, true)(struct!.subscription),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesSubscriptionList",
    },
    template_deployment: {
      value: cdktf.listMapperHcl(azurermProviderFeaturesTemplateDeploymentToHclTerraform, true)(struct!.templateDeployment),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesTemplateDeploymentList",
    },
    virtual_machine: {
      value: cdktf.listMapperHcl(azurermProviderFeaturesVirtualMachineToHclTerraform, true)(struct!.virtualMachine),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesVirtualMachineList",
    },
    virtual_machine_scale_set: {
      value: cdktf.listMapperHcl(azurermProviderFeaturesVirtualMachineScaleSetToHclTerraform, true)(struct!.virtualMachineScaleSet),
      isBlock: true,
      type: "list",
      storageClassType: "AzurermProviderFeaturesVirtualMachineScaleSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs azurerm}
*/
export class AzurermProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzurermProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzurermProvider to import
  * @param importFromId The id of the existing AzurermProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzurermProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs azurerm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzurermProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AzurermProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azurerm',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.6.0',
        providerVersionConstraint: '~> 4.0'
      },
      terraformProviderSource: 'azurerm'
    });
    this._auxiliaryTenantIds = config.auxiliaryTenantIds;
    this._clientCertificate = config.clientCertificate;
    this._clientCertificatePassword = config.clientCertificatePassword;
    this._clientCertificatePath = config.clientCertificatePath;
    this._clientId = config.clientId;
    this._clientIdFilePath = config.clientIdFilePath;
    this._clientSecret = config.clientSecret;
    this._clientSecretFilePath = config.clientSecretFilePath;
    this._disableCorrelationRequestId = config.disableCorrelationRequestId;
    this._disableTerraformPartnerId = config.disableTerraformPartnerId;
    this._environment = config.environment;
    this._metadataHost = config.metadataHost;
    this._msiEndpoint = config.msiEndpoint;
    this._oidcRequestToken = config.oidcRequestToken;
    this._oidcRequestUrl = config.oidcRequestUrl;
    this._oidcToken = config.oidcToken;
    this._oidcTokenFilePath = config.oidcTokenFilePath;
    this._partnerId = config.partnerId;
    this._resourceProviderRegistrations = config.resourceProviderRegistrations;
    this._resourceProvidersToRegister = config.resourceProvidersToRegister;
    this._skipProviderRegistration = config.skipProviderRegistration;
    this._storageUseAzuread = config.storageUseAzuread;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
    this._useAksWorkloadIdentity = config.useAksWorkloadIdentity;
    this._useCli = config.useCli;
    this._useMsi = config.useMsi;
    this._useOidc = config.useOidc;
    this._alias = config.alias;
    this._features = config.features;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auxiliary_tenant_ids - computed: false, optional: true, required: false
  private _auxiliaryTenantIds?: string[]; 
  public get auxiliaryTenantIds() {
    return this._auxiliaryTenantIds;
  }
  public set auxiliaryTenantIds(value: string[] | undefined) {
    this._auxiliaryTenantIds = value;
  }
  public resetAuxiliaryTenantIds() {
    this._auxiliaryTenantIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryTenantIdsInput() {
    return this._auxiliaryTenantIds;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public set clientCertificate(value: string | undefined) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_certificate_password - computed: false, optional: true, required: false
  private _clientCertificatePassword?: string; 
  public get clientCertificatePassword() {
    return this._clientCertificatePassword;
  }
  public set clientCertificatePassword(value: string | undefined) {
    this._clientCertificatePassword = value;
  }
  public resetClientCertificatePassword() {
    this._clientCertificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificatePasswordInput() {
    return this._clientCertificatePassword;
  }

  // client_certificate_path - computed: false, optional: true, required: false
  private _clientCertificatePath?: string; 
  public get clientCertificatePath() {
    return this._clientCertificatePath;
  }
  public set clientCertificatePath(value: string | undefined) {
    this._clientCertificatePath = value;
  }
  public resetClientCertificatePath() {
    this._clientCertificatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificatePathInput() {
    return this._clientCertificatePath;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_id_file_path - computed: false, optional: true, required: false
  private _clientIdFilePath?: string; 
  public get clientIdFilePath() {
    return this._clientIdFilePath;
  }
  public set clientIdFilePath(value: string | undefined) {
    this._clientIdFilePath = value;
  }
  public resetClientIdFilePath() {
    this._clientIdFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdFilePathInput() {
    return this._clientIdFilePath;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // client_secret_file_path - computed: false, optional: true, required: false
  private _clientSecretFilePath?: string; 
  public get clientSecretFilePath() {
    return this._clientSecretFilePath;
  }
  public set clientSecretFilePath(value: string | undefined) {
    this._clientSecretFilePath = value;
  }
  public resetClientSecretFilePath() {
    this._clientSecretFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretFilePathInput() {
    return this._clientSecretFilePath;
  }

  // disable_correlation_request_id - computed: false, optional: true, required: false
  private _disableCorrelationRequestId?: boolean | cdktf.IResolvable; 
  public get disableCorrelationRequestId() {
    return this._disableCorrelationRequestId;
  }
  public set disableCorrelationRequestId(value: boolean | cdktf.IResolvable | undefined) {
    this._disableCorrelationRequestId = value;
  }
  public resetDisableCorrelationRequestId() {
    this._disableCorrelationRequestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCorrelationRequestIdInput() {
    return this._disableCorrelationRequestId;
  }

  // disable_terraform_partner_id - computed: false, optional: true, required: false
  private _disableTerraformPartnerId?: boolean | cdktf.IResolvable; 
  public get disableTerraformPartnerId() {
    return this._disableTerraformPartnerId;
  }
  public set disableTerraformPartnerId(value: boolean | cdktf.IResolvable | undefined) {
    this._disableTerraformPartnerId = value;
  }
  public resetDisableTerraformPartnerId() {
    this._disableTerraformPartnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTerraformPartnerIdInput() {
    return this._disableTerraformPartnerId;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this._environment;
  }
  public set environment(value: string | undefined) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // metadata_host - computed: false, optional: true, required: false
  private _metadataHost?: string; 
  public get metadataHost() {
    return this._metadataHost;
  }
  public set metadataHost(value: string | undefined) {
    this._metadataHost = value;
  }
  public resetMetadataHost() {
    this._metadataHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataHostInput() {
    return this._metadataHost;
  }

  // msi_endpoint - computed: false, optional: true, required: false
  private _msiEndpoint?: string; 
  public get msiEndpoint() {
    return this._msiEndpoint;
  }
  public set msiEndpoint(value: string | undefined) {
    this._msiEndpoint = value;
  }
  public resetMsiEndpoint() {
    this._msiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msiEndpointInput() {
    return this._msiEndpoint;
  }

  // oidc_request_token - computed: false, optional: true, required: false
  private _oidcRequestToken?: string; 
  public get oidcRequestToken() {
    return this._oidcRequestToken;
  }
  public set oidcRequestToken(value: string | undefined) {
    this._oidcRequestToken = value;
  }
  public resetOidcRequestToken() {
    this._oidcRequestToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcRequestTokenInput() {
    return this._oidcRequestToken;
  }

  // oidc_request_url - computed: false, optional: true, required: false
  private _oidcRequestUrl?: string; 
  public get oidcRequestUrl() {
    return this._oidcRequestUrl;
  }
  public set oidcRequestUrl(value: string | undefined) {
    this._oidcRequestUrl = value;
  }
  public resetOidcRequestUrl() {
    this._oidcRequestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcRequestUrlInput() {
    return this._oidcRequestUrl;
  }

  // oidc_token - computed: false, optional: true, required: false
  private _oidcToken?: string; 
  public get oidcToken() {
    return this._oidcToken;
  }
  public set oidcToken(value: string | undefined) {
    this._oidcToken = value;
  }
  public resetOidcToken() {
    this._oidcToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenInput() {
    return this._oidcToken;
  }

  // oidc_token_file_path - computed: false, optional: true, required: false
  private _oidcTokenFilePath?: string; 
  public get oidcTokenFilePath() {
    return this._oidcTokenFilePath;
  }
  public set oidcTokenFilePath(value: string | undefined) {
    this._oidcTokenFilePath = value;
  }
  public resetOidcTokenFilePath() {
    this._oidcTokenFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenFilePathInput() {
    return this._oidcTokenFilePath;
  }

  // partner_id - computed: false, optional: true, required: false
  private _partnerId?: string; 
  public get partnerId() {
    return this._partnerId;
  }
  public set partnerId(value: string | undefined) {
    this._partnerId = value;
  }
  public resetPartnerId() {
    this._partnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerIdInput() {
    return this._partnerId;
  }

  // resource_provider_registrations - computed: false, optional: true, required: false
  private _resourceProviderRegistrations?: string; 
  public get resourceProviderRegistrations() {
    return this._resourceProviderRegistrations;
  }
  public set resourceProviderRegistrations(value: string | undefined) {
    this._resourceProviderRegistrations = value;
  }
  public resetResourceProviderRegistrations() {
    this._resourceProviderRegistrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceProviderRegistrationsInput() {
    return this._resourceProviderRegistrations;
  }

  // resource_providers_to_register - computed: false, optional: true, required: false
  private _resourceProvidersToRegister?: string[]; 
  public get resourceProvidersToRegister() {
    return this._resourceProvidersToRegister;
  }
  public set resourceProvidersToRegister(value: string[] | undefined) {
    this._resourceProvidersToRegister = value;
  }
  public resetResourceProvidersToRegister() {
    this._resourceProvidersToRegister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceProvidersToRegisterInput() {
    return this._resourceProvidersToRegister;
  }

  // skip_provider_registration - computed: false, optional: true, required: false
  private _skipProviderRegistration?: boolean | cdktf.IResolvable; 
  public get skipProviderRegistration() {
    return this._skipProviderRegistration;
  }
  public set skipProviderRegistration(value: boolean | cdktf.IResolvable | undefined) {
    this._skipProviderRegistration = value;
  }
  public resetSkipProviderRegistration() {
    this._skipProviderRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipProviderRegistrationInput() {
    return this._skipProviderRegistration;
  }

  // storage_use_azuread - computed: false, optional: true, required: false
  private _storageUseAzuread?: boolean | cdktf.IResolvable; 
  public get storageUseAzuread() {
    return this._storageUseAzuread;
  }
  public set storageUseAzuread(value: boolean | cdktf.IResolvable | undefined) {
    this._storageUseAzuread = value;
  }
  public resetStorageUseAzuread() {
    this._storageUseAzuread = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUseAzureadInput() {
    return this._storageUseAzuread;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this._subscriptionId;
  }
  public set subscriptionId(value: string | undefined) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this._tenantId;
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // use_aks_workload_identity - computed: false, optional: true, required: false
  private _useAksWorkloadIdentity?: boolean | cdktf.IResolvable; 
  public get useAksWorkloadIdentity() {
    return this._useAksWorkloadIdentity;
  }
  public set useAksWorkloadIdentity(value: boolean | cdktf.IResolvable | undefined) {
    this._useAksWorkloadIdentity = value;
  }
  public resetUseAksWorkloadIdentity() {
    this._useAksWorkloadIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAksWorkloadIdentityInput() {
    return this._useAksWorkloadIdentity;
  }

  // use_cli - computed: false, optional: true, required: false
  private _useCli?: boolean | cdktf.IResolvable; 
  public get useCli() {
    return this._useCli;
  }
  public set useCli(value: boolean | cdktf.IResolvable | undefined) {
    this._useCli = value;
  }
  public resetUseCli() {
    this._useCli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCliInput() {
    return this._useCli;
  }

  // use_msi - computed: false, optional: true, required: false
  private _useMsi?: boolean | cdktf.IResolvable; 
  public get useMsi() {
    return this._useMsi;
  }
  public set useMsi(value: boolean | cdktf.IResolvable | undefined) {
    this._useMsi = value;
  }
  public resetUseMsi() {
    this._useMsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMsiInput() {
    return this._useMsi;
  }

  // use_oidc - computed: false, optional: true, required: false
  private _useOidc?: boolean | cdktf.IResolvable; 
  public get useOidc() {
    return this._useOidc;
  }
  public set useOidc(value: boolean | cdktf.IResolvable | undefined) {
    this._useOidc = value;
  }
  public resetUseOidc() {
    this._useOidc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOidcInput() {
    return this._useOidc;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // features - computed: false, optional: true, required: false
  private _features?: AzurermProviderFeatures[] | cdktf.IResolvable; 
  public get features() {
    return this._features;
  }
  public set features(value: AzurermProviderFeatures[] | cdktf.IResolvable | undefined) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auxiliary_tenant_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auxiliaryTenantIds),
      client_certificate: cdktf.stringToTerraform(this._clientCertificate),
      client_certificate_password: cdktf.stringToTerraform(this._clientCertificatePassword),
      client_certificate_path: cdktf.stringToTerraform(this._clientCertificatePath),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_id_file_path: cdktf.stringToTerraform(this._clientIdFilePath),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      client_secret_file_path: cdktf.stringToTerraform(this._clientSecretFilePath),
      disable_correlation_request_id: cdktf.booleanToTerraform(this._disableCorrelationRequestId),
      disable_terraform_partner_id: cdktf.booleanToTerraform(this._disableTerraformPartnerId),
      environment: cdktf.stringToTerraform(this._environment),
      metadata_host: cdktf.stringToTerraform(this._metadataHost),
      msi_endpoint: cdktf.stringToTerraform(this._msiEndpoint),
      oidc_request_token: cdktf.stringToTerraform(this._oidcRequestToken),
      oidc_request_url: cdktf.stringToTerraform(this._oidcRequestUrl),
      oidc_token: cdktf.stringToTerraform(this._oidcToken),
      oidc_token_file_path: cdktf.stringToTerraform(this._oidcTokenFilePath),
      partner_id: cdktf.stringToTerraform(this._partnerId),
      resource_provider_registrations: cdktf.stringToTerraform(this._resourceProviderRegistrations),
      resource_providers_to_register: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceProvidersToRegister),
      skip_provider_registration: cdktf.booleanToTerraform(this._skipProviderRegistration),
      storage_use_azuread: cdktf.booleanToTerraform(this._storageUseAzuread),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      use_aks_workload_identity: cdktf.booleanToTerraform(this._useAksWorkloadIdentity),
      use_cli: cdktf.booleanToTerraform(this._useCli),
      use_msi: cdktf.booleanToTerraform(this._useMsi),
      use_oidc: cdktf.booleanToTerraform(this._useOidc),
      alias: cdktf.stringToTerraform(this._alias),
      features: cdktf.listMapper(azurermProviderFeaturesToTerraform, true)(this._features),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auxiliary_tenant_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auxiliaryTenantIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      client_certificate: {
        value: cdktf.stringToHclTerraform(this._clientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate_password: {
        value: cdktf.stringToHclTerraform(this._clientCertificatePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate_path: {
        value: cdktf.stringToHclTerraform(this._clientCertificatePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id_file_path: {
        value: cdktf.stringToHclTerraform(this._clientIdFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret_file_path: {
        value: cdktf.stringToHclTerraform(this._clientSecretFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_correlation_request_id: {
        value: cdktf.booleanToHclTerraform(this._disableCorrelationRequestId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_terraform_partner_id: {
        value: cdktf.booleanToHclTerraform(this._disableTerraformPartnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata_host: {
        value: cdktf.stringToHclTerraform(this._metadataHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msi_endpoint: {
        value: cdktf.stringToHclTerraform(this._msiEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_request_token: {
        value: cdktf.stringToHclTerraform(this._oidcRequestToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_request_url: {
        value: cdktf.stringToHclTerraform(this._oidcRequestUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_token: {
        value: cdktf.stringToHclTerraform(this._oidcToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_token_file_path: {
        value: cdktf.stringToHclTerraform(this._oidcTokenFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partner_id: {
        value: cdktf.stringToHclTerraform(this._partnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_provider_registrations: {
        value: cdktf.stringToHclTerraform(this._resourceProviderRegistrations),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_providers_to_register: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceProvidersToRegister),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      skip_provider_registration: {
        value: cdktf.booleanToHclTerraform(this._skipProviderRegistration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_use_azuread: {
        value: cdktf.booleanToHclTerraform(this._storageUseAzuread),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_aks_workload_identity: {
        value: cdktf.booleanToHclTerraform(this._useAksWorkloadIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_cli: {
        value: cdktf.booleanToHclTerraform(this._useCli),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_msi: {
        value: cdktf.booleanToHclTerraform(this._useMsi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_oidc: {
        value: cdktf.booleanToHclTerraform(this._useOidc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      features: {
        value: cdktf.listMapperHcl(azurermProviderFeaturesToHclTerraform, true)(this._features),
        isBlock: true,
        type: "list",
        storageClassType: "AzurermProviderFeaturesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
