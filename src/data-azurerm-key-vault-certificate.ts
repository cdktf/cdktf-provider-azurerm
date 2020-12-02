// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_key_vault_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermKeyVaultCertificateConfig extends TerraformMetaArguments {
  readonly keyVaultId: string;
  readonly name: string;
  readonly version?: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermKeyVaultCertificateTimeouts;
}
export class DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters extends ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties extends ComplexComputedList {

  // exportable - computed: true, optional: false, required: false
  public get exportable() {
    return this.getBooleanAttribute('exportable');
  }

  // key_size - computed: true, optional: false, required: false
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // reuse_key - computed: true, optional: false, required: false
  public get reuseKey() {
    return this.getBooleanAttribute('reuse_key');
  }
}
export class DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction extends ComplexComputedList {

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
}
export class DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger extends ComplexComputedList {

  // days_before_expiry - computed: true, optional: false, required: false
  public get daysBeforeExpiry() {
    return this.getNumberAttribute('days_before_expiry');
  }

  // lifetime_percentage - computed: true, optional: false, required: false
  public get lifetimePercentage() {
    return this.getNumberAttribute('lifetime_percentage');
  }
}
export class DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction extends ComplexComputedList {

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.interpolationForAttribute('action') as any;
  }

  // trigger - computed: true, optional: false, required: false
  public get trigger() {
    return this.interpolationForAttribute('trigger') as any;
  }
}
export class DataAzurermKeyVaultCertificateCertificatePolicySecretProperties extends ComplexComputedList {

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
}
export class DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames extends ComplexComputedList {

  // dns_names - computed: true, optional: false, required: false
  public get dnsNames() {
    return this.getListAttribute('dns_names');
  }

  // emails - computed: true, optional: false, required: false
  public get emails() {
    return this.getListAttribute('emails');
  }

  // upns - computed: true, optional: false, required: false
  public get upns() {
    return this.getListAttribute('upns');
  }
}
export class DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties extends ComplexComputedList {

  // extended_key_usage - computed: true, optional: false, required: false
  public get extendedKeyUsage() {
    return this.getListAttribute('extended_key_usage');
  }

  // key_usage - computed: true, optional: false, required: false
  public get keyUsage() {
    return this.getListAttribute('key_usage');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // subject_alternative_names - computed: true, optional: false, required: false
  public get subjectAlternativeNames() {
    return this.interpolationForAttribute('subject_alternative_names') as any;
  }

  // validity_in_months - computed: true, optional: false, required: false
  public get validityInMonths() {
    return this.getNumberAttribute('validity_in_months');
  }
}
export class DataAzurermKeyVaultCertificateCertificatePolicy extends ComplexComputedList {

  // issuer_parameters - computed: true, optional: false, required: false
  public get issuerParameters() {
    return this.interpolationForAttribute('issuer_parameters') as any;
  }

  // key_properties - computed: true, optional: false, required: false
  public get keyProperties() {
    return this.interpolationForAttribute('key_properties') as any;
  }

  // lifetime_action - computed: true, optional: false, required: false
  public get lifetimeAction() {
    return this.interpolationForAttribute('lifetime_action') as any;
  }

  // secret_properties - computed: true, optional: false, required: false
  public get secretProperties() {
    return this.interpolationForAttribute('secret_properties') as any;
  }

  // x509_certificate_properties - computed: true, optional: false, required: false
  public get x509CertificateProperties() {
    return this.interpolationForAttribute('x509_certificate_properties') as any;
  }
}
export interface DataAzurermKeyVaultCertificateTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermKeyVaultCertificate extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermKeyVaultCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_certificate',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyVaultId = config.keyVaultId;
    this._name = config.name;
    this._version = config.version;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_data - computed: true, optional: false, required: false
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }

  // certificate_policy - computed: true, optional: false, required: false
  public certificatePolicy(index: string) {
    return new DataAzurermKeyVaultCertificateCertificatePolicy(this, 'certificate_policy', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId: string;
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermKeyVaultCertificateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermKeyVaultCertificateTimeouts ) {
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
      key_vault_id: this._keyVaultId,
      name: this._name,
      version: this._version,
      timeouts: this._timeouts,
    };
  }
}
