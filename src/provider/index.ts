// https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzurermProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}
  */
  readonly auxiliaryTenantIds?: string[];
  /**
  * Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#client_certificate AzurermProvider#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#client_certificate_password AzurermProvider#client_certificate_password}
  */
  readonly clientCertificatePassword?: string;
  /**
  * The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#client_certificate_path AzurermProvider#client_certificate_path}
  */
  readonly clientCertificatePath?: string;
  /**
  * The Client ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#client_id AzurermProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The path to a file containing the Client ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#client_id_file_path AzurermProvider#client_id_file_path}
  */
  readonly clientIdFilePath?: string;
  /**
  * The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#client_secret AzurermProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The path to a file containing the Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#client_secret_file_path AzurermProvider#client_secret_file_path}
  */
  readonly clientSecretFilePath?: string;
  /**
  * This will disable the x-ms-correlation-request-id header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#disable_correlation_request_id AzurermProvider#disable_correlation_request_id}
  */
  readonly disableCorrelationRequestId?: boolean | cdktf.IResolvable;
  /**
  * This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#disable_terraform_partner_id AzurermProvider#disable_terraform_partner_id}
  */
  readonly disableTerraformPartnerId?: boolean | cdktf.IResolvable;
  /**
  * The Cloud Environment which should be used. Possible values are public, usgovernment, and china. Defaults to public.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#environment AzurermProvider#environment}
  */
  readonly environment?: string;
  /**
  * The Hostname which should be used for the Azure Metadata Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#metadata_host AzurermProvider#metadata_host}
  */
  readonly metadataHost?: string;
  /**
  * The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#msi_endpoint AzurermProvider#msi_endpoint}
  */
  readonly msiEndpoint?: string;
  /**
  * The bearer token for the request to the OIDC provider. For use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#oidc_request_token AzurermProvider#oidc_request_token}
  */
  readonly oidcRequestToken?: string;
  /**
  * The URL for the OIDC provider from which to request an ID token. For use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#oidc_request_url AzurermProvider#oidc_request_url}
  */
  readonly oidcRequestUrl?: string;
  /**
  * The OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#oidc_token AzurermProvider#oidc_token}
  */
  readonly oidcToken?: string;
  /**
  * The path to a file containing an OIDC ID token for use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#oidc_token_file_path AzurermProvider#oidc_token_file_path}
  */
  readonly oidcTokenFilePath?: string;
  /**
  * A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#partner_id AzurermProvider#partner_id}
  */
  readonly partnerId?: string;
  /**
  * Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already registered?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#skip_provider_registration AzurermProvider#skip_provider_registration}
  */
  readonly skipProviderRegistration?: boolean | cdktf.IResolvable;
  /**
  * Should the AzureRM Provider use AzureAD to access the Storage Data Plane API's?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#storage_use_azuread AzurermProvider#storage_use_azuread}
  */
  readonly storageUseAzuread?: boolean | cdktf.IResolvable;
  /**
  * The Subscription ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#subscription_id AzurermProvider#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * The Tenant ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#tenant_id AzurermProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Allow Azure CLI to be used for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#use_cli AzurermProvider#use_cli}
  */
  readonly useCli?: boolean | cdktf.IResolvable;
  /**
  * Allow Managed Service Identity to be used for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#use_msi AzurermProvider#use_msi}
  */
  readonly useMsi?: boolean | cdktf.IResolvable;
  /**
  * Allow OpenID Connect to be used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#use_oidc AzurermProvider#use_oidc}
  */
  readonly useOidc?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#alias AzurermProvider#alias}
  */
  readonly alias?: string;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#features AzurermProvider#features}
  */
  readonly features: AzurermProviderFeatures;
}
export interface AzurermProviderFeaturesApiManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}
  */
  readonly purgeSoftDeleteOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}
  */
  readonly recoverSoftDeleted?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesApiManagementToTerraform(struct?: AzurermProviderFeaturesApiManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_soft_delete_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeleteOnDestroy),
    recover_soft_deleted: cdktf.booleanToTerraform(struct!.recoverSoftDeleted),
  }
}

export interface AzurermProviderFeaturesAppConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}
  */
  readonly purgeSoftDeleteOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#recover_soft_deleted AzurermProvider#recover_soft_deleted}
  */
  readonly recoverSoftDeleted?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesAppConfigurationToTerraform(struct?: AzurermProviderFeaturesAppConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_soft_delete_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeleteOnDestroy),
    recover_soft_deleted: cdktf.booleanToTerraform(struct!.recoverSoftDeleted),
  }
}

export interface AzurermProviderFeaturesApplicationInsights {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#disable_generated_rule AzurermProvider#disable_generated_rule}
  */
  readonly disableGeneratedRule?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesApplicationInsightsToTerraform(struct?: AzurermProviderFeaturesApplicationInsights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_generated_rule: cdktf.booleanToTerraform(struct!.disableGeneratedRule),
  }
}

export interface AzurermProviderFeaturesCognitiveAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}
  */
  readonly purgeSoftDeleteOnDestroy?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesCognitiveAccountToTerraform(struct?: AzurermProviderFeaturesCognitiveAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_soft_delete_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeleteOnDestroy),
  }
}

export interface AzurermProviderFeaturesKeyVault {
  /**
  * When enabled soft-deleted `azurerm_key_vault` resources will be permanently deleted (e.g purged), when destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}
  */
  readonly purgeSoftDeleteOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_certificate` resources will be permanently deleted (e.g purged), when destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#purge_soft_deleted_certificates_on_destroy AzurermProvider#purge_soft_deleted_certificates_on_destroy}
  */
  readonly purgeSoftDeletedCertificatesOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_managed_hardware_security_module` resources will be permanently deleted (e.g purged), when destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#purge_soft_deleted_hardware_security_modules_on_destroy AzurermProvider#purge_soft_deleted_hardware_security_modules_on_destroy}
  */
  readonly purgeSoftDeletedHardwareSecurityModulesOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_key` resources will be permanently deleted (e.g purged), when destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#purge_soft_deleted_keys_on_destroy AzurermProvider#purge_soft_deleted_keys_on_destroy}
  */
  readonly purgeSoftDeletedKeysOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_secret` resources will be permanently deleted (e.g purged), when destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#purge_soft_deleted_secrets_on_destroy AzurermProvider#purge_soft_deleted_secrets_on_destroy}
  */
  readonly purgeSoftDeletedSecretsOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_certificate` resources will be restored, instead of creating new ones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#recover_soft_deleted_certificates AzurermProvider#recover_soft_deleted_certificates}
  */
  readonly recoverSoftDeletedCertificates?: boolean | cdktf.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault` resources will be restored, instead of creating new ones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#recover_soft_deleted_key_vaults AzurermProvider#recover_soft_deleted_key_vaults}
  */
  readonly recoverSoftDeletedKeyVaults?: boolean | cdktf.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_key` resources will be restored, instead of creating new ones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#recover_soft_deleted_keys AzurermProvider#recover_soft_deleted_keys}
  */
  readonly recoverSoftDeletedKeys?: boolean | cdktf.IResolvable;
  /**
  * When enabled soft-deleted `azurerm_key_vault_secret` resources will be restored, instead of creating new ones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#recover_soft_deleted_secrets AzurermProvider#recover_soft_deleted_secrets}
  */
  readonly recoverSoftDeletedSecrets?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesKeyVaultToTerraform(struct?: AzurermProviderFeaturesKeyVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_soft_delete_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeleteOnDestroy),
    purge_soft_deleted_certificates_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeletedCertificatesOnDestroy),
    purge_soft_deleted_hardware_security_modules_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeletedHardwareSecurityModulesOnDestroy),
    purge_soft_deleted_keys_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeletedKeysOnDestroy),
    purge_soft_deleted_secrets_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeletedSecretsOnDestroy),
    recover_soft_deleted_certificates: cdktf.booleanToTerraform(struct!.recoverSoftDeletedCertificates),
    recover_soft_deleted_key_vaults: cdktf.booleanToTerraform(struct!.recoverSoftDeletedKeyVaults),
    recover_soft_deleted_keys: cdktf.booleanToTerraform(struct!.recoverSoftDeletedKeys),
    recover_soft_deleted_secrets: cdktf.booleanToTerraform(struct!.recoverSoftDeletedSecrets),
  }
}

export interface AzurermProviderFeaturesLogAnalyticsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#permanently_delete_on_destroy AzurermProvider#permanently_delete_on_destroy}
  */
  readonly permanentlyDeleteOnDestroy?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesLogAnalyticsWorkspaceToTerraform(struct?: AzurermProviderFeaturesLogAnalyticsWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permanently_delete_on_destroy: cdktf.booleanToTerraform(struct!.permanentlyDeleteOnDestroy),
  }
}

export interface AzurermProviderFeaturesManagedDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#expand_without_downtime AzurermProvider#expand_without_downtime}
  */
  readonly expandWithoutDowntime?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesManagedDiskToTerraform(struct?: AzurermProviderFeaturesManagedDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expand_without_downtime: cdktf.booleanToTerraform(struct!.expandWithoutDowntime),
  }
}

export interface AzurermProviderFeaturesResourceGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#prevent_deletion_if_contains_resources AzurermProvider#prevent_deletion_if_contains_resources}
  */
  readonly preventDeletionIfContainsResources?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesResourceGroupToTerraform(struct?: AzurermProviderFeaturesResourceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prevent_deletion_if_contains_resources: cdktf.booleanToTerraform(struct!.preventDeletionIfContainsResources),
  }
}

export interface AzurermProviderFeaturesSubscription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#prevent_cancellation_on_destroy AzurermProvider#prevent_cancellation_on_destroy}
  */
  readonly preventCancellationOnDestroy?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesSubscriptionToTerraform(struct?: AzurermProviderFeaturesSubscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prevent_cancellation_on_destroy: cdktf.booleanToTerraform(struct!.preventCancellationOnDestroy),
  }
}

export interface AzurermProviderFeaturesTemplateDeployment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#delete_nested_items_during_deletion AzurermProvider#delete_nested_items_during_deletion}
  */
  readonly deleteNestedItemsDuringDeletion: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesTemplateDeploymentToTerraform(struct?: AzurermProviderFeaturesTemplateDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_nested_items_during_deletion: cdktf.booleanToTerraform(struct!.deleteNestedItemsDuringDeletion),
  }
}

export interface AzurermProviderFeaturesVirtualMachine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#delete_os_disk_on_deletion AzurermProvider#delete_os_disk_on_deletion}
  */
  readonly deleteOsDiskOnDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#graceful_shutdown AzurermProvider#graceful_shutdown}
  */
  readonly gracefulShutdown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#skip_shutdown_and_force_delete AzurermProvider#skip_shutdown_and_force_delete}
  */
  readonly skipShutdownAndForceDelete?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesVirtualMachineToTerraform(struct?: AzurermProviderFeaturesVirtualMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_os_disk_on_deletion: cdktf.booleanToTerraform(struct!.deleteOsDiskOnDeletion),
    graceful_shutdown: cdktf.booleanToTerraform(struct!.gracefulShutdown),
    skip_shutdown_and_force_delete: cdktf.booleanToTerraform(struct!.skipShutdownAndForceDelete),
  }
}

export interface AzurermProviderFeaturesVirtualMachineScaleSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#force_delete AzurermProvider#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#roll_instances_when_required AzurermProvider#roll_instances_when_required}
  */
  readonly rollInstancesWhenRequired: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#scale_to_zero_before_deletion AzurermProvider#scale_to_zero_before_deletion}
  */
  readonly scaleToZeroBeforeDeletion?: boolean | cdktf.IResolvable;
}

export function azurermProviderFeaturesVirtualMachineScaleSetToTerraform(struct?: AzurermProviderFeaturesVirtualMachineScaleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_delete: cdktf.booleanToTerraform(struct!.forceDelete),
    roll_instances_when_required: cdktf.booleanToTerraform(struct!.rollInstancesWhenRequired),
    scale_to_zero_before_deletion: cdktf.booleanToTerraform(struct!.scaleToZeroBeforeDeletion),
  }
}

export interface AzurermProviderFeatures {
  /**
  * api_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#api_management AzurermProvider#api_management}
  */
  readonly apiManagement?: AzurermProviderFeaturesApiManagement;
  /**
  * app_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#app_configuration AzurermProvider#app_configuration}
  */
  readonly appConfiguration?: AzurermProviderFeaturesAppConfiguration;
  /**
  * application_insights block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#application_insights AzurermProvider#application_insights}
  */
  readonly applicationInsights?: AzurermProviderFeaturesApplicationInsights;
  /**
  * cognitive_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#cognitive_account AzurermProvider#cognitive_account}
  */
  readonly cognitiveAccount?: AzurermProviderFeaturesCognitiveAccount;
  /**
  * key_vault block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#key_vault AzurermProvider#key_vault}
  */
  readonly keyVault?: AzurermProviderFeaturesKeyVault;
  /**
  * log_analytics_workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#log_analytics_workspace AzurermProvider#log_analytics_workspace}
  */
  readonly logAnalyticsWorkspace?: AzurermProviderFeaturesLogAnalyticsWorkspace;
  /**
  * managed_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#managed_disk AzurermProvider#managed_disk}
  */
  readonly managedDisk?: AzurermProviderFeaturesManagedDisk;
  /**
  * resource_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#resource_group AzurermProvider#resource_group}
  */
  readonly resourceGroup?: AzurermProviderFeaturesResourceGroup;
  /**
  * subscription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#subscription AzurermProvider#subscription}
  */
  readonly subscription?: AzurermProviderFeaturesSubscription;
  /**
  * template_deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#template_deployment AzurermProvider#template_deployment}
  */
  readonly templateDeployment?: AzurermProviderFeaturesTemplateDeployment;
  /**
  * virtual_machine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#virtual_machine AzurermProvider#virtual_machine}
  */
  readonly virtualMachine?: AzurermProviderFeaturesVirtualMachine;
  /**
  * virtual_machine_scale_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs#virtual_machine_scale_set AzurermProvider#virtual_machine_scale_set}
  */
  readonly virtualMachineScaleSet?: AzurermProviderFeaturesVirtualMachineScaleSet;
}

export function azurermProviderFeaturesToTerraform(struct?: AzurermProviderFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_management: azurermProviderFeaturesApiManagementToTerraform(struct!.apiManagement),
    app_configuration: azurermProviderFeaturesAppConfigurationToTerraform(struct!.appConfiguration),
    application_insights: azurermProviderFeaturesApplicationInsightsToTerraform(struct!.applicationInsights),
    cognitive_account: azurermProviderFeaturesCognitiveAccountToTerraform(struct!.cognitiveAccount),
    key_vault: azurermProviderFeaturesKeyVaultToTerraform(struct!.keyVault),
    log_analytics_workspace: azurermProviderFeaturesLogAnalyticsWorkspaceToTerraform(struct!.logAnalyticsWorkspace),
    managed_disk: azurermProviderFeaturesManagedDiskToTerraform(struct!.managedDisk),
    resource_group: azurermProviderFeaturesResourceGroupToTerraform(struct!.resourceGroup),
    subscription: azurermProviderFeaturesSubscriptionToTerraform(struct!.subscription),
    template_deployment: azurermProviderFeaturesTemplateDeploymentToTerraform(struct!.templateDeployment),
    virtual_machine: azurermProviderFeaturesVirtualMachineToTerraform(struct!.virtualMachine),
    virtual_machine_scale_set: azurermProviderFeaturesVirtualMachineScaleSetToTerraform(struct!.virtualMachineScaleSet),
  }
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs azurerm}
*/
export class AzurermProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs azurerm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzurermProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AzurermProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.75.0',
        providerVersionConstraint: '~> 3.10'
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
    this._skipProviderRegistration = config.skipProviderRegistration;
    this._storageUseAzuread = config.storageUseAzuread;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
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

  // features - computed: false, optional: false, required: true
  private _features?: AzurermProviderFeatures; 
  public get features() {
    return this._features;
  }
  public set features(value: AzurermProviderFeatures | undefined) {
    this._features = value;
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
      skip_provider_registration: cdktf.booleanToTerraform(this._skipProviderRegistration),
      storage_use_azuread: cdktf.booleanToTerraform(this._storageUseAzuread),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      use_cli: cdktf.booleanToTerraform(this._useCli),
      use_msi: cdktf.booleanToTerraform(this._useMsi),
      use_oidc: cdktf.booleanToTerraform(this._useOidc),
      alias: cdktf.stringToTerraform(this._alias),
      features: azurermProviderFeaturesToTerraform(this._features),
    };
  }
}
