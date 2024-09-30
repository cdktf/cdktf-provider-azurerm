// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_custom_https_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrontdoorCustomHttpsConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_custom_https_configuration#custom_https_provisioning_enabled FrontdoorCustomHttpsConfiguration#custom_https_provisioning_enabled}
  */
  readonly customHttpsProvisioningEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_custom_https_configuration#frontend_endpoint_id FrontdoorCustomHttpsConfiguration#frontend_endpoint_id}
  */
  readonly frontendEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_custom_https_configuration#id FrontdoorCustomHttpsConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * custom_https_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_custom_https_configuration#custom_https_configuration FrontdoorCustomHttpsConfiguration#custom_https_configuration}
  */
  readonly customHttpsConfiguration?: FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_custom_https_configuration#timeouts FrontdoorCustomHttpsConfiguration#timeouts}
  */
  readonly timeouts?: FrontdoorCustomHttpsConfigurationTimeouts;
}
export interface FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_secret_name FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_name}
  */
  readonly azureKeyVaultCertificateSecretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_secret_version FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_version}
  */
  readonly azureKeyVaultCertificateSecretVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_vault_id FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_vault_id}
  */
  readonly azureKeyVaultCertificateVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_custom_https_configuration#certificate_source FrontdoorCustomHttpsConfiguration#certificate_source}
  */
  readonly certificateSource?: string;
}

export function frontdoorCustomHttpsConfigurationCustomHttpsConfigurationToTerraform(struct?: FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference | FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_key_vault_certificate_secret_name: cdktf.stringToTerraform(struct!.azureKeyVaultCertificateSecretName),
    azure_key_vault_certificate_secret_version: cdktf.stringToTerraform(struct!.azureKeyVaultCertificateSecretVersion),
    azure_key_vault_certificate_vault_id: cdktf.stringToTerraform(struct!.azureKeyVaultCertificateVaultId),
    certificate_source: cdktf.stringToTerraform(struct!.certificateSource),
  }
}


export function frontdoorCustomHttpsConfigurationCustomHttpsConfigurationToHclTerraform(struct?: FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference | FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_key_vault_certificate_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.azureKeyVaultCertificateSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_key_vault_certificate_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.azureKeyVaultCertificateSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_key_vault_certificate_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.azureKeyVaultCertificateVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_source: {
      value: cdktf.stringToHclTerraform(struct!.certificateSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureKeyVaultCertificateSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureKeyVaultCertificateSecretName = this._azureKeyVaultCertificateSecretName;
    }
    if (this._azureKeyVaultCertificateSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureKeyVaultCertificateSecretVersion = this._azureKeyVaultCertificateSecretVersion;
    }
    if (this._azureKeyVaultCertificateVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureKeyVaultCertificateVaultId = this._azureKeyVaultCertificateVaultId;
    }
    if (this._certificateSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSource = this._certificateSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureKeyVaultCertificateSecretName = undefined;
      this._azureKeyVaultCertificateSecretVersion = undefined;
      this._azureKeyVaultCertificateVaultId = undefined;
      this._certificateSource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureKeyVaultCertificateSecretName = value.azureKeyVaultCertificateSecretName;
      this._azureKeyVaultCertificateSecretVersion = value.azureKeyVaultCertificateSecretVersion;
      this._azureKeyVaultCertificateVaultId = value.azureKeyVaultCertificateVaultId;
      this._certificateSource = value.certificateSource;
    }
  }

  // azure_key_vault_certificate_secret_name - computed: false, optional: true, required: false
  private _azureKeyVaultCertificateSecretName?: string; 
  public get azureKeyVaultCertificateSecretName() {
    return this.getStringAttribute('azure_key_vault_certificate_secret_name');
  }
  public set azureKeyVaultCertificateSecretName(value: string) {
    this._azureKeyVaultCertificateSecretName = value;
  }
  public resetAzureKeyVaultCertificateSecretName() {
    this._azureKeyVaultCertificateSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKeyVaultCertificateSecretNameInput() {
    return this._azureKeyVaultCertificateSecretName;
  }

  // azure_key_vault_certificate_secret_version - computed: false, optional: true, required: false
  private _azureKeyVaultCertificateSecretVersion?: string; 
  public get azureKeyVaultCertificateSecretVersion() {
    return this.getStringAttribute('azure_key_vault_certificate_secret_version');
  }
  public set azureKeyVaultCertificateSecretVersion(value: string) {
    this._azureKeyVaultCertificateSecretVersion = value;
  }
  public resetAzureKeyVaultCertificateSecretVersion() {
    this._azureKeyVaultCertificateSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKeyVaultCertificateSecretVersionInput() {
    return this._azureKeyVaultCertificateSecretVersion;
  }

  // azure_key_vault_certificate_vault_id - computed: false, optional: true, required: false
  private _azureKeyVaultCertificateVaultId?: string; 
  public get azureKeyVaultCertificateVaultId() {
    return this.getStringAttribute('azure_key_vault_certificate_vault_id');
  }
  public set azureKeyVaultCertificateVaultId(value: string) {
    this._azureKeyVaultCertificateVaultId = value;
  }
  public resetAzureKeyVaultCertificateVaultId() {
    this._azureKeyVaultCertificateVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKeyVaultCertificateVaultIdInput() {
    return this._azureKeyVaultCertificateVaultId;
  }

  // certificate_source - computed: false, optional: true, required: false
  private _certificateSource?: string; 
  public get certificateSource() {
    return this.getStringAttribute('certificate_source');
  }
  public set certificateSource(value: string) {
    this._certificateSource = value;
  }
  public resetCertificateSource() {
    this._certificateSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSourceInput() {
    return this._certificateSource;
  }

  // minimum_tls_version - computed: true, optional: false, required: false
  public get minimumTlsVersion() {
    return this.getStringAttribute('minimum_tls_version');
  }

  // provisioning_state - computed: true, optional: false, required: false
  public get provisioningState() {
    return this.getStringAttribute('provisioning_state');
  }

  // provisioning_substate - computed: true, optional: false, required: false
  public get provisioningSubstate() {
    return this.getStringAttribute('provisioning_substate');
  }
}
export interface FrontdoorCustomHttpsConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_custom_https_configuration#create FrontdoorCustomHttpsConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_custom_https_configuration#delete FrontdoorCustomHttpsConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_custom_https_configuration#read FrontdoorCustomHttpsConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_custom_https_configuration#update FrontdoorCustomHttpsConfiguration#update}
  */
  readonly update?: string;
}

export function frontdoorCustomHttpsConfigurationTimeoutsToTerraform(struct?: FrontdoorCustomHttpsConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function frontdoorCustomHttpsConfigurationTimeoutsToHclTerraform(struct?: FrontdoorCustomHttpsConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrontdoorCustomHttpsConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FrontdoorCustomHttpsConfigurationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrontdoorCustomHttpsConfigurationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_custom_https_configuration azurerm_frontdoor_custom_https_configuration}
*/
export class FrontdoorCustomHttpsConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_frontdoor_custom_https_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FrontdoorCustomHttpsConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FrontdoorCustomHttpsConfiguration to import
  * @param importFromId The id of the existing FrontdoorCustomHttpsConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_custom_https_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FrontdoorCustomHttpsConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_frontdoor_custom_https_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/frontdoor_custom_https_configuration azurerm_frontdoor_custom_https_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FrontdoorCustomHttpsConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: FrontdoorCustomHttpsConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_frontdoor_custom_https_configuration',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customHttpsProvisioningEnabled = config.customHttpsProvisioningEnabled;
    this._frontendEndpointId = config.frontendEndpointId;
    this._id = config.id;
    this._customHttpsConfiguration.internalValue = config.customHttpsConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_https_provisioning_enabled - computed: false, optional: false, required: true
  private _customHttpsProvisioningEnabled?: boolean | cdktf.IResolvable; 
  public get customHttpsProvisioningEnabled() {
    return this.getBooleanAttribute('custom_https_provisioning_enabled');
  }
  public set customHttpsProvisioningEnabled(value: boolean | cdktf.IResolvable) {
    this._customHttpsProvisioningEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customHttpsProvisioningEnabledInput() {
    return this._customHttpsProvisioningEnabled;
  }

  // frontend_endpoint_id - computed: false, optional: false, required: true
  private _frontendEndpointId?: string; 
  public get frontendEndpointId() {
    return this.getStringAttribute('frontend_endpoint_id');
  }
  public set frontendEndpointId(value: string) {
    this._frontendEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendEndpointIdInput() {
    return this._frontendEndpointId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // custom_https_configuration - computed: false, optional: true, required: false
  private _customHttpsConfiguration = new FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference(this, "custom_https_configuration");
  public get customHttpsConfiguration() {
    return this._customHttpsConfiguration;
  }
  public putCustomHttpsConfiguration(value: FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration) {
    this._customHttpsConfiguration.internalValue = value;
  }
  public resetCustomHttpsConfiguration() {
    this._customHttpsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHttpsConfigurationInput() {
    return this._customHttpsConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FrontdoorCustomHttpsConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FrontdoorCustomHttpsConfigurationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_https_provisioning_enabled: cdktf.booleanToTerraform(this._customHttpsProvisioningEnabled),
      frontend_endpoint_id: cdktf.stringToTerraform(this._frontendEndpointId),
      id: cdktf.stringToTerraform(this._id),
      custom_https_configuration: frontdoorCustomHttpsConfigurationCustomHttpsConfigurationToTerraform(this._customHttpsConfiguration.internalValue),
      timeouts: frontdoorCustomHttpsConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_https_provisioning_enabled: {
        value: cdktf.booleanToHclTerraform(this._customHttpsProvisioningEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frontend_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._frontendEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_https_configuration: {
        value: frontdoorCustomHttpsConfigurationCustomHttpsConfigurationToHclTerraform(this._customHttpsConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationList",
      },
      timeouts: {
        value: frontdoorCustomHttpsConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FrontdoorCustomHttpsConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
