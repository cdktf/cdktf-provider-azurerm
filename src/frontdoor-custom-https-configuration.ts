// https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrontdoorCustomHttpsConfigurationConfig extends cdktf.TerraformMetaArguments {
  readonly customHttpsProvisioningEnabled: boolean;
  readonly frontendEndpointId: string;
  /** custom_https_configuration block */
  readonly customHttpsConfiguration?: FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration[];
  /** timeouts block */
  readonly timeouts?: FrontdoorCustomHttpsConfigurationTimeouts;
}
export interface FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration {
  readonly azureKeyVaultCertificateSecretName?: string;
  readonly azureKeyVaultCertificateSecretVersion?: string;
  readonly azureKeyVaultCertificateVaultId?: string;
  readonly certificateSource?: string;
}

function frontdoorCustomHttpsConfigurationCustomHttpsConfigurationToTerraform(struct?: FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    azure_key_vault_certificate_secret_name: cdktf.stringToTerraform(struct!.azureKeyVaultCertificateSecretName),
    azure_key_vault_certificate_secret_version: cdktf.stringToTerraform(struct!.azureKeyVaultCertificateSecretVersion),
    azure_key_vault_certificate_vault_id: cdktf.stringToTerraform(struct!.azureKeyVaultCertificateVaultId),
    certificate_source: cdktf.stringToTerraform(struct!.certificateSource),
  }
}

export interface FrontdoorCustomHttpsConfigurationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function frontdoorCustomHttpsConfigurationTimeoutsToTerraform(struct?: FrontdoorCustomHttpsConfigurationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class FrontdoorCustomHttpsConfiguration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FrontdoorCustomHttpsConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_frontdoor_custom_https_configuration',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customHttpsProvisioningEnabled = config.customHttpsProvisioningEnabled;
    this._frontendEndpointId = config.frontendEndpointId;
    this._customHttpsConfiguration = config.customHttpsConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_https_provisioning_enabled - computed: false, optional: false, required: true
  private _customHttpsProvisioningEnabled: boolean;
  public get customHttpsProvisioningEnabled() {
    return this.getBooleanAttribute('custom_https_provisioning_enabled');
  }
  public set customHttpsProvisioningEnabled(value: boolean) {
    this._customHttpsProvisioningEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customHttpsProvisioningEnabledInput() {
    return this._customHttpsProvisioningEnabled
  }

  // frontend_endpoint_id - computed: false, optional: false, required: true
  private _frontendEndpointId: string;
  public get frontendEndpointId() {
    return this.getStringAttribute('frontend_endpoint_id');
  }
  public set frontendEndpointId(value: string) {
    this._frontendEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendEndpointIdInput() {
    return this._frontendEndpointId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // custom_https_configuration - computed: false, optional: true, required: false
  private _customHttpsConfiguration?: FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration[];
  public get customHttpsConfiguration() {
    return this.interpolationForAttribute('custom_https_configuration') as any;
  }
  public set customHttpsConfiguration(value: FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration[] ) {
    this._customHttpsConfiguration = value;
  }
  public resetCustomHttpsConfiguration() {
    this._customHttpsConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHttpsConfigurationInput() {
    return this._customHttpsConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FrontdoorCustomHttpsConfigurationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FrontdoorCustomHttpsConfigurationTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_https_provisioning_enabled: cdktf.booleanToTerraform(this._customHttpsProvisioningEnabled),
      frontend_endpoint_id: cdktf.stringToTerraform(this._frontendEndpointId),
      custom_https_configuration: cdktf.listMapper(frontdoorCustomHttpsConfigurationCustomHttpsConfigurationToTerraform)(this._customHttpsConfiguration),
      timeouts: frontdoorCustomHttpsConfigurationTimeoutsToTerraform(this._timeouts),
    };
  }
}
