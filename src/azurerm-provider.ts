// https://www.terraform.io/docs/providers/azurerm/r/azurerm_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformProvider } from 'cdktf';

// Configuration

export interface AzurermProviderConfig {
  readonly auxiliaryTenantIds?: string[];
  /** The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate */
  readonly clientCertificatePassword?: string;
  /** The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. */
  readonly clientCertificatePath?: string;
  /** The Client ID which should be used. */
  readonly clientId?: string;
  /** The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret. */
  readonly clientSecret?: string;
  /** This will disable the x-ms-correlation-request-id header. */
  readonly disableCorrelationRequestId?: boolean;
  /** This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified. */
  readonly disableTerraformPartnerId?: boolean;
  /** The Cloud Environment which should be used. Possible values are public, usgovernment, german, and china. Defaults to public. */
  readonly environment?: string;
  /** The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically.  */
  readonly msiEndpoint?: string;
  /** A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution. */
  readonly partnerId?: string;
  /** This will cause the AzureRM Provider to skip verifying the credentials being used are valid. */
  readonly skipCredentialsValidation?: boolean;
  /** Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already registered? */
  readonly skipProviderRegistration?: boolean;
  /** Should the AzureRM Provider use AzureAD to access the Storage Data Plane API's? */
  readonly storageUseAzuread?: boolean;
  /** The Subscription ID which should be used. */
  readonly subscriptionId?: string;
  /** The Tenant ID which should be used. */
  readonly tenantId?: string;
  /** Allowed Managed Service Identity be used for Authentication. */
  readonly useMsi?: boolean;
  /** Alias name */
  readonly alias?: string;
  /** features block */
  readonly features: AzurermProviderFeatures[];
}
export interface AzurermProviderFeaturesKeyVault {
  readonly purgeSoftDeleteOnDestroy?: boolean;
  readonly recoverSoftDeletedKeyVaults?: boolean;
}
export interface AzurermProviderFeaturesVirtualMachine {
  readonly deleteOsDiskOnDeletion: boolean;
}
export interface AzurermProviderFeaturesVirtualMachineScaleSet {
  readonly rollInstancesWhenRequired: boolean;
}
export interface AzurermProviderFeatures {
  /** key_vault block */
  readonly keyVault?: AzurermProviderFeaturesKeyVault[];
  /** virtual_machine block */
  readonly virtualMachine?: AzurermProviderFeaturesVirtualMachine[];
  /** virtual_machine_scale_set block */
  readonly virtualMachineScaleSet?: AzurermProviderFeaturesVirtualMachineScaleSet[];
}

// Resource

export class AzurermProvider extends TerraformProvider {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AzurermProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersionConstraint: '~> 2.0.0'
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
  private _auxiliaryTenantIds?: string[];
  public get auxiliaryTenantIds() {
    return this._auxiliaryTenantIds;
  }
  public set auxiliaryTenantIds(value: string[]  | undefined) {
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
  private _clientCertificatePassword?: string;
  public get clientCertificatePassword() {
    return this._clientCertificatePassword;
  }
  public set clientCertificatePassword(value: string  | undefined) {
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
  private _clientCertificatePath?: string;
  public get clientCertificatePath() {
    return this._clientCertificatePath;
  }
  public set clientCertificatePath(value: string  | undefined) {
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
  private _clientId?: string;
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string  | undefined) {
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
  private _clientSecret?: string;
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string  | undefined) {
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
  private _disableCorrelationRequestId?: boolean;
  public get disableCorrelationRequestId() {
    return this._disableCorrelationRequestId;
  }
  public set disableCorrelationRequestId(value: boolean  | undefined) {
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
  private _disableTerraformPartnerId?: boolean;
  public get disableTerraformPartnerId() {
    return this._disableTerraformPartnerId;
  }
  public set disableTerraformPartnerId(value: boolean  | undefined) {
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
  private _environment?: string;
  public get environment() {
    return this._environment;
  }
  public set environment(value: string  | undefined) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment
  }

  // msi_endpoint - computed: false, optional: true, required: false
  private _msiEndpoint?: string;
  public get msiEndpoint() {
    return this._msiEndpoint;
  }
  public set msiEndpoint(value: string  | undefined) {
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
  private _partnerId?: string;
  public get partnerId() {
    return this._partnerId;
  }
  public set partnerId(value: string  | undefined) {
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
  private _skipCredentialsValidation?: boolean;
  public get skipCredentialsValidation() {
    return this._skipCredentialsValidation;
  }
  public set skipCredentialsValidation(value: boolean  | undefined) {
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
  private _skipProviderRegistration?: boolean;
  public get skipProviderRegistration() {
    return this._skipProviderRegistration;
  }
  public set skipProviderRegistration(value: boolean  | undefined) {
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
  private _storageUseAzuread?: boolean;
  public get storageUseAzuread() {
    return this._storageUseAzuread;
  }
  public set storageUseAzuread(value: boolean  | undefined) {
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
  private _subscriptionId?: string;
  public get subscriptionId() {
    return this._subscriptionId;
  }
  public set subscriptionId(value: string  | undefined) {
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
  private _tenantId?: string;
  public get tenantId() {
    return this._tenantId;
  }
  public set tenantId(value: string  | undefined) {
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
  private _useMsi?: boolean;
  public get useMsi() {
    return this._useMsi;
  }
  public set useMsi(value: boolean  | undefined) {
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
  private _alias?: string;
  public get alias() {
    return this._alias;
  }
  public set alias(value: string  | undefined) {
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
  private _features: AzurermProviderFeatures[];
  public get features() {
    return this._features;
  }
  public set features(value: AzurermProviderFeatures[]) {
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
      auxiliary_tenant_ids: this._auxiliaryTenantIds,
      client_certificate_password: this._clientCertificatePassword,
      client_certificate_path: this._clientCertificatePath,
      client_id: this._clientId,
      client_secret: this._clientSecret,
      disable_correlation_request_id: this._disableCorrelationRequestId,
      disable_terraform_partner_id: this._disableTerraformPartnerId,
      environment: this._environment,
      msi_endpoint: this._msiEndpoint,
      partner_id: this._partnerId,
      skip_credentials_validation: this._skipCredentialsValidation,
      skip_provider_registration: this._skipProviderRegistration,
      storage_use_azuread: this._storageUseAzuread,
      subscription_id: this._subscriptionId,
      tenant_id: this._tenantId,
      use_msi: this._useMsi,
      alias: this._alias,
      features: this._features,
    };
  }
}
