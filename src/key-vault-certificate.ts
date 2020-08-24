// https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KeyVaultCertificateConfig extends TerraformMetaArguments {
  readonly keyVaultId: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** certificate block */
  readonly certificate?: KeyVaultCertificateCertificate[];
  /** certificate_policy block */
  readonly certificatePolicy: KeyVaultCertificateCertificatePolicy[];
  /** timeouts block */
  readonly timeouts?: KeyVaultCertificateTimeouts;
}
export interface KeyVaultCertificateCertificate {
  readonly contents: string;
  readonly password?: string;
}
export interface KeyVaultCertificateCertificatePolicyIssuerParameters {
  readonly name: string;
}
export interface KeyVaultCertificateCertificatePolicyKeyProperties {
  readonly exportable: boolean;
  readonly keySize: number;
  readonly keyType: string;
  readonly reuseKey: boolean;
}
export interface KeyVaultCertificateCertificatePolicyLifetimeActionAction {
  readonly actionType: string;
}
export interface KeyVaultCertificateCertificatePolicyLifetimeActionTrigger {
  readonly daysBeforeExpiry?: number;
  readonly lifetimePercentage?: number;
}
export interface KeyVaultCertificateCertificatePolicyLifetimeAction {
  /** action block */
  readonly action: KeyVaultCertificateCertificatePolicyLifetimeActionAction[];
  /** trigger block */
  readonly trigger: KeyVaultCertificateCertificatePolicyLifetimeActionTrigger[];
}
export interface KeyVaultCertificateCertificatePolicySecretProperties {
  readonly contentType: string;
}
export interface KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames {
  readonly dnsNames?: string[];
  readonly emails?: string[];
  readonly upns?: string[];
}
export interface KeyVaultCertificateCertificatePolicyX509CertificateProperties {
  readonly extendedKeyUsage?: string[];
  readonly keyUsage: string[];
  readonly subject: string;
  readonly validityInMonths: number;
  /** subject_alternative_names block */
  readonly subjectAlternativeNames?: KeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames[];
}
export interface KeyVaultCertificateCertificatePolicy {
  /** issuer_parameters block */
  readonly issuerParameters: KeyVaultCertificateCertificatePolicyIssuerParameters[];
  /** key_properties block */
  readonly keyProperties: KeyVaultCertificateCertificatePolicyKeyProperties[];
  /** lifetime_action block */
  readonly lifetimeAction?: KeyVaultCertificateCertificatePolicyLifetimeAction[];
  /** secret_properties block */
  readonly secretProperties: KeyVaultCertificateCertificatePolicySecretProperties[];
  /** x509_certificate_properties block */
  readonly x509CertificateProperties?: KeyVaultCertificateCertificatePolicyX509CertificateProperties[];
}
export interface KeyVaultCertificateTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

// Resource

export class KeyVaultCertificate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KeyVaultCertificateConfig) {
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
    this._tags = config.tags;
    this._certificate = config.certificate;
    this._certificatePolicy = config.certificatePolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_data - computed: true, optional: false, required: true
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId: string;
  public get keyVaultId() {
    return this._keyVaultId;
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // secret_id - computed: true, optional: false, required: true
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // thumbprint - computed: true, optional: false, required: true
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: KeyVaultCertificateCertificate[];
  public get certificate() {
    return this._certificate;
  }
  public set certificate(value: KeyVaultCertificateCertificate[] | undefined) {
    this._certificate = value;
  }

  // certificate_policy - computed: false, optional: false, required: true
  private _certificatePolicy: KeyVaultCertificateCertificatePolicy[];
  public get certificatePolicy() {
    return this._certificatePolicy;
  }
  public set certificatePolicy(value: KeyVaultCertificateCertificatePolicy[]) {
    this._certificatePolicy = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KeyVaultCertificateTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KeyVaultCertificateTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_vault_id: this._keyVaultId,
      name: this._name,
      tags: this._tags,
      certificate: this._certificate,
      certificate_policy: this._certificatePolicy,
      timeouts: this._timeouts,
    };
  }
}
