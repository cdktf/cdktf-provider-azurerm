// https://www.terraform.io/docs/providers/azurerm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzurermProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#auxiliary_tenant_ids AzurermProvider#auxiliary_tenant_ids}
  */
  readonly auxiliaryTenantIds?: string[];
  /**
  * The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#client_certificate_password AzurermProvider#client_certificate_password}
  */
  readonly clientCertificatePassword?: string;
  /**
  * The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#client_certificate_path AzurermProvider#client_certificate_path}
  */
  readonly clientCertificatePath?: string;
  /**
  * The Client ID which should be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#client_id AzurermProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#client_secret AzurermProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * This will disable the x-ms-correlation-request-id header.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#disable_correlation_request_id AzurermProvider#disable_correlation_request_id}
  */
  readonly disableCorrelationRequestId?: boolean | cdktf.IResolvable;
  /**
  * This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#disable_terraform_partner_id AzurermProvider#disable_terraform_partner_id}
  */
  readonly disableTerraformPartnerId?: boolean | cdktf.IResolvable;
  /**
  * The Cloud Environment which should be used. Possible values are public, usgovernment, german, and china. Defaults to public.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#environment AzurermProvider#environment}
  */
  readonly environment?: string;
  /**
  * The Hostname which should be used for the Azure Metadata Service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#metadata_host AzurermProvider#metadata_host}
  */
  readonly metadataHost?: string;
  /**
  * Deprecated - replaced by `metadata_host`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#metadata_url AzurermProvider#metadata_url}
  */
  readonly metadataUrl?: string;
  /**
  * The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#msi_endpoint AzurermProvider#msi_endpoint}
  */
  readonly msiEndpoint?: string;
  /**
  * A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#partner_id AzurermProvider#partner_id}
  */
  readonly partnerId?: string;
  /**
  * [DEPRECATED] This will cause the AzureRM Provider to skip verifying the credentials being used are valid.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#skip_credentials_validation AzurermProvider#skip_credentials_validation}
  */
  readonly skipCredentialsValidation?: boolean | cdktf.IResolvable;
  /**
  * Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already registered?
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#skip_provider_registration AzurermProvider#skip_provider_registration}
  */
  readonly skipProviderRegistration?: boolean | cdktf.IResolvable;
  /**
  * Should the AzureRM Provider use AzureAD to access the Storage Data Plane API's?
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#storage_use_azuread AzurermProvider#storage_use_azuread}
  */
  readonly storageUseAzuread?: boolean | cdktf.IResolvable;
  /**
  * The Subscription ID which should be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#subscription_id AzurermProvider#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * The Tenant ID which should be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#tenant_id AzurermProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Allowed Managed Service Identity be used for Authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#use_msi AzurermProvider#use_msi}
  */
  readonly useMsi?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#alias AzurermProvider#alias}
  */
  readonly alias?: string;
  /**
  * features block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#features AzurermProvider#features}
  */
  readonly features: AzurermProviderFeatures;
}
export interface AzurermProviderFeaturesApiManagement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}
  */
  readonly purgeSoftDeleteOnDestroy?: boolean | cdktf.IResolvable;
}

function azurermProviderFeaturesApiManagementToTerraform(struct?: AzurermProviderFeaturesApiManagementOutputReference | AzurermProviderFeaturesApiManagement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_soft_delete_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeleteOnDestroy),
  }
}

export class AzurermProviderFeaturesApiManagementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // purge_soft_delete_on_destroy - computed: false, optional: true, required: false
  private _purgeSoftDeleteOnDestroy?: boolean | cdktf.IResolvable | undefined; 
  public get purgeSoftDeleteOnDestroy() {
    return this._purgeSoftDeleteOnDestroy;
  }
  public set purgeSoftDeleteOnDestroy(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._purgeSoftDeleteOnDestroy = value;
  }
  public resetPurgeSoftDeleteOnDestroy() {
    this._purgeSoftDeleteOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeSoftDeleteOnDestroyInput() {
    return this._purgeSoftDeleteOnDestroy
  }
}
export interface AzurermProviderFeaturesCognitiveAccount {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}
  */
  readonly purgeSoftDeleteOnDestroy?: boolean | cdktf.IResolvable;
}

function azurermProviderFeaturesCognitiveAccountToTerraform(struct?: AzurermProviderFeaturesCognitiveAccountOutputReference | AzurermProviderFeaturesCognitiveAccount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_soft_delete_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeleteOnDestroy),
  }
}

export class AzurermProviderFeaturesCognitiveAccountOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // purge_soft_delete_on_destroy - computed: false, optional: true, required: false
  private _purgeSoftDeleteOnDestroy?: boolean | cdktf.IResolvable | undefined; 
  public get purgeSoftDeleteOnDestroy() {
    return this._purgeSoftDeleteOnDestroy;
  }
  public set purgeSoftDeleteOnDestroy(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._purgeSoftDeleteOnDestroy = value;
  }
  public resetPurgeSoftDeleteOnDestroy() {
    this._purgeSoftDeleteOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeSoftDeleteOnDestroyInput() {
    return this._purgeSoftDeleteOnDestroy
  }
}
export interface AzurermProviderFeaturesKeyVault {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#purge_soft_delete_on_destroy AzurermProvider#purge_soft_delete_on_destroy}
  */
  readonly purgeSoftDeleteOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#recover_soft_deleted_key_vaults AzurermProvider#recover_soft_deleted_key_vaults}
  */
  readonly recoverSoftDeletedKeyVaults?: boolean | cdktf.IResolvable;
}

function azurermProviderFeaturesKeyVaultToTerraform(struct?: AzurermProviderFeaturesKeyVaultOutputReference | AzurermProviderFeaturesKeyVault): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_soft_delete_on_destroy: cdktf.booleanToTerraform(struct!.purgeSoftDeleteOnDestroy),
    recover_soft_deleted_key_vaults: cdktf.booleanToTerraform(struct!.recoverSoftDeletedKeyVaults),
  }
}

export class AzurermProviderFeaturesKeyVaultOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // purge_soft_delete_on_destroy - computed: false, optional: true, required: false
  private _purgeSoftDeleteOnDestroy?: boolean | cdktf.IResolvable | undefined; 
  public get purgeSoftDeleteOnDestroy() {
    return this._purgeSoftDeleteOnDestroy;
  }
  public set purgeSoftDeleteOnDestroy(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._purgeSoftDeleteOnDestroy = value;
  }
  public resetPurgeSoftDeleteOnDestroy() {
    this._purgeSoftDeleteOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeSoftDeleteOnDestroyInput() {
    return this._purgeSoftDeleteOnDestroy
  }

  // recover_soft_deleted_key_vaults - computed: false, optional: true, required: false
  private _recoverSoftDeletedKeyVaults?: boolean | cdktf.IResolvable | undefined; 
  public get recoverSoftDeletedKeyVaults() {
    return this._recoverSoftDeletedKeyVaults;
  }
  public set recoverSoftDeletedKeyVaults(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._recoverSoftDeletedKeyVaults = value;
  }
  public resetRecoverSoftDeletedKeyVaults() {
    this._recoverSoftDeletedKeyVaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverSoftDeletedKeyVaultsInput() {
    return this._recoverSoftDeletedKeyVaults
  }
}
export interface AzurermProviderFeaturesLogAnalyticsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#permanently_delete_on_destroy AzurermProvider#permanently_delete_on_destroy}
  */
  readonly permanentlyDeleteOnDestroy: boolean | cdktf.IResolvable;
}

function azurermProviderFeaturesLogAnalyticsWorkspaceToTerraform(struct?: AzurermProviderFeaturesLogAnalyticsWorkspaceOutputReference | AzurermProviderFeaturesLogAnalyticsWorkspace): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permanently_delete_on_destroy: cdktf.booleanToTerraform(struct!.permanentlyDeleteOnDestroy),
  }
}

export class AzurermProviderFeaturesLogAnalyticsWorkspaceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // permanently_delete_on_destroy - computed: false, optional: false, required: true
  private _permanentlyDeleteOnDestroy?: boolean | cdktf.IResolvable; 
  public get permanentlyDeleteOnDestroy() {
    return this._permanentlyDeleteOnDestroy;
  }
  public set permanentlyDeleteOnDestroy(value: boolean | cdktf.IResolvable| undefined) {
    this._permanentlyDeleteOnDestroy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentlyDeleteOnDestroyInput() {
    return this._permanentlyDeleteOnDestroy
  }
}
export interface AzurermProviderFeaturesNetwork {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#relaxed_locking AzurermProvider#relaxed_locking}
  */
  readonly relaxedLocking: boolean | cdktf.IResolvable;
}

function azurermProviderFeaturesNetworkToTerraform(struct?: AzurermProviderFeaturesNetworkOutputReference | AzurermProviderFeaturesNetwork): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relaxed_locking: cdktf.booleanToTerraform(struct!.relaxedLocking),
  }
}

export class AzurermProviderFeaturesNetworkOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // relaxed_locking - computed: false, optional: false, required: true
  private _relaxedLocking?: boolean | cdktf.IResolvable; 
  public get relaxedLocking() {
    return this._relaxedLocking;
  }
  public set relaxedLocking(value: boolean | cdktf.IResolvable| undefined) {
    this._relaxedLocking = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relaxedLockingInput() {
    return this._relaxedLocking
  }
}
export interface AzurermProviderFeaturesResourceGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#prevent_deletion_if_contains_resources AzurermProvider#prevent_deletion_if_contains_resources}
  */
  readonly preventDeletionIfContainsResources?: boolean | cdktf.IResolvable;
}

function azurermProviderFeaturesResourceGroupToTerraform(struct?: AzurermProviderFeaturesResourceGroupOutputReference | AzurermProviderFeaturesResourceGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prevent_deletion_if_contains_resources: cdktf.booleanToTerraform(struct!.preventDeletionIfContainsResources),
  }
}

export class AzurermProviderFeaturesResourceGroupOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // prevent_deletion_if_contains_resources - computed: false, optional: true, required: false
  private _preventDeletionIfContainsResources?: boolean | cdktf.IResolvable | undefined; 
  public get preventDeletionIfContainsResources() {
    return this._preventDeletionIfContainsResources;
  }
  public set preventDeletionIfContainsResources(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._preventDeletionIfContainsResources = value;
  }
  public resetPreventDeletionIfContainsResources() {
    this._preventDeletionIfContainsResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventDeletionIfContainsResourcesInput() {
    return this._preventDeletionIfContainsResources
  }
}
export interface AzurermProviderFeaturesTemplateDeployment {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#delete_nested_items_during_deletion AzurermProvider#delete_nested_items_during_deletion}
  */
  readonly deleteNestedItemsDuringDeletion: boolean | cdktf.IResolvable;
}

function azurermProviderFeaturesTemplateDeploymentToTerraform(struct?: AzurermProviderFeaturesTemplateDeploymentOutputReference | AzurermProviderFeaturesTemplateDeployment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_nested_items_during_deletion: cdktf.booleanToTerraform(struct!.deleteNestedItemsDuringDeletion),
  }
}

export class AzurermProviderFeaturesTemplateDeploymentOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // delete_nested_items_during_deletion - computed: false, optional: false, required: true
  private _deleteNestedItemsDuringDeletion?: boolean | cdktf.IResolvable; 
  public get deleteNestedItemsDuringDeletion() {
    return this._deleteNestedItemsDuringDeletion;
  }
  public set deleteNestedItemsDuringDeletion(value: boolean | cdktf.IResolvable| undefined) {
    this._deleteNestedItemsDuringDeletion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteNestedItemsDuringDeletionInput() {
    return this._deleteNestedItemsDuringDeletion
  }
}
export interface AzurermProviderFeaturesVirtualMachine {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#delete_os_disk_on_deletion AzurermProvider#delete_os_disk_on_deletion}
  */
  readonly deleteOsDiskOnDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#graceful_shutdown AzurermProvider#graceful_shutdown}
  */
  readonly gracefulShutdown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#skip_shutdown_and_force_delete AzurermProvider#skip_shutdown_and_force_delete}
  */
  readonly skipShutdownAndForceDelete?: boolean | cdktf.IResolvable;
}

function azurermProviderFeaturesVirtualMachineToTerraform(struct?: AzurermProviderFeaturesVirtualMachineOutputReference | AzurermProviderFeaturesVirtualMachine): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_os_disk_on_deletion: cdktf.booleanToTerraform(struct!.deleteOsDiskOnDeletion),
    graceful_shutdown: cdktf.booleanToTerraform(struct!.gracefulShutdown),
    skip_shutdown_and_force_delete: cdktf.booleanToTerraform(struct!.skipShutdownAndForceDelete),
  }
}

export class AzurermProviderFeaturesVirtualMachineOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // delete_os_disk_on_deletion - computed: false, optional: true, required: false
  private _deleteOsDiskOnDeletion?: boolean | cdktf.IResolvable | undefined; 
  public get deleteOsDiskOnDeletion() {
    return this._deleteOsDiskOnDeletion;
  }
  public set deleteOsDiskOnDeletion(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._deleteOsDiskOnDeletion = value;
  }
  public resetDeleteOsDiskOnDeletion() {
    this._deleteOsDiskOnDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOsDiskOnDeletionInput() {
    return this._deleteOsDiskOnDeletion
  }

  // graceful_shutdown - computed: false, optional: true, required: false
  private _gracefulShutdown?: boolean | cdktf.IResolvable | undefined; 
  public get gracefulShutdown() {
    return this._gracefulShutdown;
  }
  public set gracefulShutdown(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._gracefulShutdown = value;
  }
  public resetGracefulShutdown() {
    this._gracefulShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownInput() {
    return this._gracefulShutdown
  }

  // skip_shutdown_and_force_delete - computed: false, optional: true, required: false
  private _skipShutdownAndForceDelete?: boolean | cdktf.IResolvable | undefined; 
  public get skipShutdownAndForceDelete() {
    return this._skipShutdownAndForceDelete;
  }
  public set skipShutdownAndForceDelete(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._skipShutdownAndForceDelete = value;
  }
  public resetSkipShutdownAndForceDelete() {
    this._skipShutdownAndForceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipShutdownAndForceDeleteInput() {
    return this._skipShutdownAndForceDelete
  }
}
export interface AzurermProviderFeaturesVirtualMachineScaleSet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#force_delete AzurermProvider#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#roll_instances_when_required AzurermProvider#roll_instances_when_required}
  */
  readonly rollInstancesWhenRequired: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#scale_to_zero_before_deletion AzurermProvider#scale_to_zero_before_deletion}
  */
  readonly scaleToZeroBeforeDeletion?: boolean | cdktf.IResolvable;
}

function azurermProviderFeaturesVirtualMachineScaleSetToTerraform(struct?: AzurermProviderFeaturesVirtualMachineScaleSetOutputReference | AzurermProviderFeaturesVirtualMachineScaleSet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_delete: cdktf.booleanToTerraform(struct!.forceDelete),
    roll_instances_when_required: cdktf.booleanToTerraform(struct!.rollInstancesWhenRequired),
    scale_to_zero_before_deletion: cdktf.booleanToTerraform(struct!.scaleToZeroBeforeDeletion),
  }
}

export class AzurermProviderFeaturesVirtualMachineScaleSetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable | undefined; 
  public get forceDelete() {
    return this._forceDelete;
  }
  public set forceDelete(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete
  }

  // roll_instances_when_required - computed: false, optional: false, required: true
  private _rollInstancesWhenRequired?: boolean | cdktf.IResolvable; 
  public get rollInstancesWhenRequired() {
    return this._rollInstancesWhenRequired;
  }
  public set rollInstancesWhenRequired(value: boolean | cdktf.IResolvable| undefined) {
    this._rollInstancesWhenRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rollInstancesWhenRequiredInput() {
    return this._rollInstancesWhenRequired
  }

  // scale_to_zero_before_deletion - computed: false, optional: true, required: false
  private _scaleToZeroBeforeDeletion?: boolean | cdktf.IResolvable | undefined; 
  public get scaleToZeroBeforeDeletion() {
    return this._scaleToZeroBeforeDeletion;
  }
  public set scaleToZeroBeforeDeletion(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._scaleToZeroBeforeDeletion = value;
  }
  public resetScaleToZeroBeforeDeletion() {
    this._scaleToZeroBeforeDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleToZeroBeforeDeletionInput() {
    return this._scaleToZeroBeforeDeletion
  }
}
export interface AzurermProviderFeatures {
  /**
  * api_management block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#api_management AzurermProvider#api_management}
  */
  readonly apiManagement?: AzurermProviderFeaturesApiManagement;
  /**
  * cognitive_account block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#cognitive_account AzurermProvider#cognitive_account}
  */
  readonly cognitiveAccount?: AzurermProviderFeaturesCognitiveAccount;
  /**
  * key_vault block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#key_vault AzurermProvider#key_vault}
  */
  readonly keyVault?: AzurermProviderFeaturesKeyVault;
  /**
  * log_analytics_workspace block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#log_analytics_workspace AzurermProvider#log_analytics_workspace}
  */
  readonly logAnalyticsWorkspace?: AzurermProviderFeaturesLogAnalyticsWorkspace;
  /**
  * network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#network AzurermProvider#network}
  */
  readonly network?: AzurermProviderFeaturesNetwork;
  /**
  * resource_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#resource_group AzurermProvider#resource_group}
  */
  readonly resourceGroup?: AzurermProviderFeaturesResourceGroup;
  /**
  * template_deployment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#template_deployment AzurermProvider#template_deployment}
  */
  readonly templateDeployment?: AzurermProviderFeaturesTemplateDeployment;
  /**
  * virtual_machine block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#virtual_machine AzurermProvider#virtual_machine}
  */
  readonly virtualMachine?: AzurermProviderFeaturesVirtualMachine;
  /**
  * virtual_machine_scale_set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm#virtual_machine_scale_set AzurermProvider#virtual_machine_scale_set}
  */
  readonly virtualMachineScaleSet?: AzurermProviderFeaturesVirtualMachineScaleSet;
}

function azurermProviderFeaturesToTerraform(struct?: AzurermProviderFeaturesOutputReference | AzurermProviderFeatures): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_management: azurermProviderFeaturesApiManagementToTerraform(struct!.apiManagement),
    cognitive_account: azurermProviderFeaturesCognitiveAccountToTerraform(struct!.cognitiveAccount),
    key_vault: azurermProviderFeaturesKeyVaultToTerraform(struct!.keyVault),
    log_analytics_workspace: azurermProviderFeaturesLogAnalyticsWorkspaceToTerraform(struct!.logAnalyticsWorkspace),
    network: azurermProviderFeaturesNetworkToTerraform(struct!.network),
    resource_group: azurermProviderFeaturesResourceGroupToTerraform(struct!.resourceGroup),
    template_deployment: azurermProviderFeaturesTemplateDeploymentToTerraform(struct!.templateDeployment),
    virtual_machine: azurermProviderFeaturesVirtualMachineToTerraform(struct!.virtualMachine),
    virtual_machine_scale_set: azurermProviderFeaturesVirtualMachineScaleSetToTerraform(struct!.virtualMachineScaleSet),
  }
}

export class AzurermProviderFeaturesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // api_management - computed: false, optional: true, required: false
  private _apiManagement?: AzurermProviderFeaturesApiManagement | undefined; 
  public get apiManagement() {
    return this._apiManagement;
  }
  public set apiManagement(value: AzurermProviderFeaturesApiManagement | undefined| undefined) {
    this._apiManagement = value;
  }
  public resetApiManagement() {
    this._apiManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementInput() {
    return this._apiManagement
  }

  // cognitive_account - computed: false, optional: true, required: false
  private _cognitiveAccount?: AzurermProviderFeaturesCognitiveAccount | undefined; 
  public get cognitiveAccount() {
    return this._cognitiveAccount;
  }
  public set cognitiveAccount(value: AzurermProviderFeaturesCognitiveAccount | undefined| undefined) {
    this._cognitiveAccount = value;
  }
  public resetCognitiveAccount() {
    this._cognitiveAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitiveAccountInput() {
    return this._cognitiveAccount
  }

  // key_vault - computed: false, optional: true, required: false
  private _keyVault?: AzurermProviderFeaturesKeyVault | undefined; 
  public get keyVault() {
    return this._keyVault;
  }
  public set keyVault(value: AzurermProviderFeaturesKeyVault | undefined| undefined) {
    this._keyVault = value;
  }
  public resetKeyVault() {
    this._keyVault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultInput() {
    return this._keyVault
  }

  // log_analytics_workspace - computed: false, optional: true, required: false
  private _logAnalyticsWorkspace?: AzurermProviderFeaturesLogAnalyticsWorkspace | undefined; 
  public get logAnalyticsWorkspace() {
    return this._logAnalyticsWorkspace;
  }
  public set logAnalyticsWorkspace(value: AzurermProviderFeaturesLogAnalyticsWorkspace | undefined| undefined) {
    this._logAnalyticsWorkspace = value;
  }
  public resetLogAnalyticsWorkspace() {
    this._logAnalyticsWorkspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceInput() {
    return this._logAnalyticsWorkspace
  }

  // network - computed: false, optional: true, required: false
  private _network?: AzurermProviderFeaturesNetwork | undefined; 
  public get network() {
    return this._network;
  }
  public set network(value: AzurermProviderFeaturesNetwork | undefined| undefined) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: AzurermProviderFeaturesResourceGroup | undefined; 
  public get resourceGroup() {
    return this._resourceGroup;
  }
  public set resourceGroup(value: AzurermProviderFeaturesResourceGroup | undefined| undefined) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup
  }

  // template_deployment - computed: false, optional: true, required: false
  private _templateDeployment?: AzurermProviderFeaturesTemplateDeployment | undefined; 
  public get templateDeployment() {
    return this._templateDeployment;
  }
  public set templateDeployment(value: AzurermProviderFeaturesTemplateDeployment | undefined| undefined) {
    this._templateDeployment = value;
  }
  public resetTemplateDeployment() {
    this._templateDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDeploymentInput() {
    return this._templateDeployment
  }

  // virtual_machine - computed: false, optional: true, required: false
  private _virtualMachine?: AzurermProviderFeaturesVirtualMachine | undefined; 
  public get virtualMachine() {
    return this._virtualMachine;
  }
  public set virtualMachine(value: AzurermProviderFeaturesVirtualMachine | undefined| undefined) {
    this._virtualMachine = value;
  }
  public resetVirtualMachine() {
    this._virtualMachine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineInput() {
    return this._virtualMachine
  }

  // virtual_machine_scale_set - computed: false, optional: true, required: false
  private _virtualMachineScaleSet?: AzurermProviderFeaturesVirtualMachineScaleSet | undefined; 
  public get virtualMachineScaleSet() {
    return this._virtualMachineScaleSet;
  }
  public set virtualMachineScaleSet(value: AzurermProviderFeaturesVirtualMachineScaleSet | undefined| undefined) {
    this._virtualMachineScaleSet = value;
  }
  public resetVirtualMachineScaleSet() {
    this._virtualMachineScaleSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineScaleSetInput() {
    return this._virtualMachineScaleSet
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm azurerm}
*/
export class AzurermProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm azurerm} Resource
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
        providerVersionConstraint: '~> 2.0'
      },
      terraformProviderSource: 'azurerm'
    });
    this._auxiliaryTenantIds = config.auxiliaryTenantIds;
    this._clientCertificatePassword = config.clientCertificatePassword;
    this._clientCertificatePath = config.clientCertificatePath;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._disableCorrelationRequestId = config.disableCorrelationRequestId;
    this._disableTerraformPartnerId = config.disableTerraformPartnerId;
    this._environment = config.environment;
    this._metadataHost = config.metadataHost;
    this._metadataUrl = config.metadataUrl;
    this._msiEndpoint = config.msiEndpoint;
    this._partnerId = config.partnerId;
    this._skipCredentialsValidation = config.skipCredentialsValidation;
    this._skipProviderRegistration = config.skipProviderRegistration;
    this._storageUseAzuread = config.storageUseAzuread;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
    this._useMsi = config.useMsi;
    this._alias = config.alias;
    this._features = config.features;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auxiliary_tenant_ids - computed: false, optional: true, required: false
  private _auxiliaryTenantIds?: string[] | undefined; 
  public get auxiliaryTenantIds() {
    return this._auxiliaryTenantIds;
  }
  public set auxiliaryTenantIds(value: string[] | undefined| undefined) {
    this._auxiliaryTenantIds = value;
  }
  public resetAuxiliaryTenantIds() {
    this._auxiliaryTenantIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryTenantIdsInput() {
    return this._auxiliaryTenantIds
  }

  // client_certificate_password - computed: false, optional: true, required: false
  private _clientCertificatePassword?: string | undefined; 
  public get clientCertificatePassword() {
    return this._clientCertificatePassword;
  }
  public set clientCertificatePassword(value: string | undefined| undefined) {
    this._clientCertificatePassword = value;
  }
  public resetClientCertificatePassword() {
    this._clientCertificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificatePasswordInput() {
    return this._clientCertificatePassword
  }

  // client_certificate_path - computed: false, optional: true, required: false
  private _clientCertificatePath?: string | undefined; 
  public get clientCertificatePath() {
    return this._clientCertificatePath;
  }
  public set clientCertificatePath(value: string | undefined| undefined) {
    this._clientCertificatePath = value;
  }
  public resetClientCertificatePath() {
    this._clientCertificatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificatePathInput() {
    return this._clientCertificatePath
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string | undefined; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined| undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string | undefined; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined| undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret
  }

  // disable_correlation_request_id - computed: false, optional: true, required: false
  private _disableCorrelationRequestId?: boolean | cdktf.IResolvable | undefined; 
  public get disableCorrelationRequestId() {
    return this._disableCorrelationRequestId;
  }
  public set disableCorrelationRequestId(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._disableCorrelationRequestId = value;
  }
  public resetDisableCorrelationRequestId() {
    this._disableCorrelationRequestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCorrelationRequestIdInput() {
    return this._disableCorrelationRequestId
  }

  // disable_terraform_partner_id - computed: false, optional: true, required: false
  private _disableTerraformPartnerId?: boolean | cdktf.IResolvable | undefined; 
  public get disableTerraformPartnerId() {
    return this._disableTerraformPartnerId;
  }
  public set disableTerraformPartnerId(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._disableTerraformPartnerId = value;
  }
  public resetDisableTerraformPartnerId() {
    this._disableTerraformPartnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTerraformPartnerIdInput() {
    return this._disableTerraformPartnerId
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string | undefined; 
  public get environment() {
    return this._environment;
  }
  public set environment(value: string | undefined| undefined) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment
  }

  // metadata_host - computed: false, optional: true, required: false
  private _metadataHost?: string | undefined; 
  public get metadataHost() {
    return this._metadataHost;
  }
  public set metadataHost(value: string | undefined| undefined) {
    this._metadataHost = value;
  }
  public resetMetadataHost() {
    this._metadataHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataHostInput() {
    return this._metadataHost
  }

  // metadata_url - computed: false, optional: true, required: false
  private _metadataUrl?: string | undefined; 
  public get metadataUrl() {
    return this._metadataUrl;
  }
  public set metadataUrl(value: string | undefined| undefined) {
    this._metadataUrl = value;
  }
  public resetMetadataUrl() {
    this._metadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataUrlInput() {
    return this._metadataUrl
  }

  // msi_endpoint - computed: false, optional: true, required: false
  private _msiEndpoint?: string | undefined; 
  public get msiEndpoint() {
    return this._msiEndpoint;
  }
  public set msiEndpoint(value: string | undefined| undefined) {
    this._msiEndpoint = value;
  }
  public resetMsiEndpoint() {
    this._msiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msiEndpointInput() {
    return this._msiEndpoint
  }

  // partner_id - computed: false, optional: true, required: false
  private _partnerId?: string | undefined; 
  public get partnerId() {
    return this._partnerId;
  }
  public set partnerId(value: string | undefined| undefined) {
    this._partnerId = value;
  }
  public resetPartnerId() {
    this._partnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerIdInput() {
    return this._partnerId
  }

  // skip_credentials_validation - computed: false, optional: true, required: false
  private _skipCredentialsValidation?: boolean | cdktf.IResolvable | undefined; 
  public get skipCredentialsValidation() {
    return this._skipCredentialsValidation;
  }
  public set skipCredentialsValidation(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._skipCredentialsValidation = value;
  }
  public resetSkipCredentialsValidation() {
    this._skipCredentialsValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCredentialsValidationInput() {
    return this._skipCredentialsValidation
  }

  // skip_provider_registration - computed: false, optional: true, required: false
  private _skipProviderRegistration?: boolean | cdktf.IResolvable | undefined; 
  public get skipProviderRegistration() {
    return this._skipProviderRegistration;
  }
  public set skipProviderRegistration(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._skipProviderRegistration = value;
  }
  public resetSkipProviderRegistration() {
    this._skipProviderRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipProviderRegistrationInput() {
    return this._skipProviderRegistration
  }

  // storage_use_azuread - computed: false, optional: true, required: false
  private _storageUseAzuread?: boolean | cdktf.IResolvable | undefined; 
  public get storageUseAzuread() {
    return this._storageUseAzuread;
  }
  public set storageUseAzuread(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._storageUseAzuread = value;
  }
  public resetStorageUseAzuread() {
    this._storageUseAzuread = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUseAzureadInput() {
    return this._storageUseAzuread
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string | undefined; 
  public get subscriptionId() {
    return this._subscriptionId;
  }
  public set subscriptionId(value: string | undefined| undefined) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string | undefined; 
  public get tenantId() {
    return this._tenantId;
  }
  public set tenantId(value: string | undefined| undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId
  }

  // use_msi - computed: false, optional: true, required: false
  private _useMsi?: boolean | cdktf.IResolvable | undefined; 
  public get useMsi() {
    return this._useMsi;
  }
  public set useMsi(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._useMsi = value;
  }
  public resetUseMsi() {
    this._useMsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMsiInput() {
    return this._useMsi
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string | undefined; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined| undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias
  }

  // features - computed: false, optional: false, required: true
  private _features?: AzurermProviderFeatures; 
  public get features() {
    return this._features;
  }
  public set features(value: AzurermProviderFeatures| undefined) {
    this._features = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auxiliary_tenant_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._auxiliaryTenantIds),
      client_certificate_password: cdktf.stringToTerraform(this._clientCertificatePassword),
      client_certificate_path: cdktf.stringToTerraform(this._clientCertificatePath),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      disable_correlation_request_id: cdktf.booleanToTerraform(this._disableCorrelationRequestId),
      disable_terraform_partner_id: cdktf.booleanToTerraform(this._disableTerraformPartnerId),
      environment: cdktf.stringToTerraform(this._environment),
      metadata_host: cdktf.stringToTerraform(this._metadataHost),
      metadata_url: cdktf.stringToTerraform(this._metadataUrl),
      msi_endpoint: cdktf.stringToTerraform(this._msiEndpoint),
      partner_id: cdktf.stringToTerraform(this._partnerId),
      skip_credentials_validation: cdktf.booleanToTerraform(this._skipCredentialsValidation),
      skip_provider_registration: cdktf.booleanToTerraform(this._skipProviderRegistration),
      storage_use_azuread: cdktf.booleanToTerraform(this._storageUseAzuread),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      use_msi: cdktf.booleanToTerraform(this._useMsi),
      alias: cdktf.stringToTerraform(this._alias),
      features: azurermProviderFeaturesToTerraform(this._features),
    };
  }
}
