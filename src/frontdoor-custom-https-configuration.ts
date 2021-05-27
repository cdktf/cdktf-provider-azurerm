// https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrontdoorCustomHttpsConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#custom_https_provisioning_enabled FrontdoorCustomHttpsConfiguration#custom_https_provisioning_enabled}
  */
  readonly customHttpsProvisioningEnabled: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#frontend_endpoint_id FrontdoorCustomHttpsConfiguration#frontend_endpoint_id}
  */
  readonly frontendEndpointId: string;
  /**
  * custom_https_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#custom_https_configuration FrontdoorCustomHttpsConfiguration#custom_https_configuration}
  */
  readonly customHttpsConfiguration?: FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#timeouts FrontdoorCustomHttpsConfiguration#timeouts}
  */
  readonly timeouts?: FrontdoorCustomHttpsConfigurationTimeouts;
}
export interface FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#azure_key_vault_certificate_secret_name FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_name}
  */
  readonly azureKeyVaultCertificateSecretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#azure_key_vault_certificate_secret_version FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_version}
  */
  readonly azureKeyVaultCertificateSecretVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#azure_key_vault_certificate_vault_id FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_vault_id}
  */
  readonly azureKeyVaultCertificateVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#certificate_source FrontdoorCustomHttpsConfiguration#certificate_source}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#create FrontdoorCustomHttpsConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#delete FrontdoorCustomHttpsConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#read FrontdoorCustomHttpsConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html#update FrontdoorCustomHttpsConfiguration#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html azurerm_frontdoor_custom_https_configuration}
*/
export class FrontdoorCustomHttpsConfiguration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/frontdoor_custom_https_configuration.html azurerm_frontdoor_custom_https_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FrontdoorCustomHttpsConfigurationConfig
  */
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
