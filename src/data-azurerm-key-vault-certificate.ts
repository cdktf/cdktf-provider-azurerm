// https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermKeyVaultCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate.html#key_vault_id DataAzurermKeyVaultCertificate#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate.html#name DataAzurermKeyVaultCertificate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate.html#version DataAzurermKeyVaultCertificate#version}
  */
  readonly version?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate.html#timeouts DataAzurermKeyVaultCertificate#timeouts}
  */
  readonly timeouts?: DataAzurermKeyVaultCertificateTimeouts;
}
export class DataAzurermKeyVaultCertificateCertificatePolicyIssuerParameters extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataAzurermKeyVaultCertificateCertificatePolicyKeyProperties extends cdktf.ComplexComputedList {

  // curve - computed: true, optional: false, required: false
  public get curve() {
    return this.getStringAttribute('curve');
  }

  // exportable - computed: true, optional: false, required: false
  public get exportable() {
    return this.getBooleanAttribute('exportable') as any;
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
    return this.getBooleanAttribute('reuse_key') as any;
  }
}
export class DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionAction extends cdktf.ComplexComputedList {

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
}
export class DataAzurermKeyVaultCertificateCertificatePolicyLifetimeActionTrigger extends cdktf.ComplexComputedList {

  // days_before_expiry - computed: true, optional: false, required: false
  public get daysBeforeExpiry() {
    return this.getNumberAttribute('days_before_expiry');
  }

  // lifetime_percentage - computed: true, optional: false, required: false
  public get lifetimePercentage() {
    return this.getNumberAttribute('lifetime_percentage');
  }
}
export class DataAzurermKeyVaultCertificateCertificatePolicyLifetimeAction extends cdktf.ComplexComputedList {

  // action - computed: true, optional: false, required: false
  public get action() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('action') as any;
  }

  // trigger - computed: true, optional: false, required: false
  public get trigger() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('trigger') as any;
  }
}
export class DataAzurermKeyVaultCertificateCertificatePolicySecretProperties extends cdktf.ComplexComputedList {

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
}
export class DataAzurermKeyVaultCertificateCertificatePolicyX509CertificatePropertiesSubjectAlternativeNames extends cdktf.ComplexComputedList {

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
export class DataAzurermKeyVaultCertificateCertificatePolicyX509CertificateProperties extends cdktf.ComplexComputedList {

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
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subject_alternative_names') as any;
  }

  // validity_in_months - computed: true, optional: false, required: false
  public get validityInMonths() {
    return this.getNumberAttribute('validity_in_months');
  }
}
export class DataAzurermKeyVaultCertificateCertificatePolicy extends cdktf.ComplexComputedList {

  // issuer_parameters - computed: true, optional: false, required: false
  public get issuerParameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('issuer_parameters') as any;
  }

  // key_properties - computed: true, optional: false, required: false
  public get keyProperties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('key_properties') as any;
  }

  // lifetime_action - computed: true, optional: false, required: false
  public get lifetimeAction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('lifetime_action') as any;
  }

  // secret_properties - computed: true, optional: false, required: false
  public get secretProperties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret_properties') as any;
  }

  // x509_certificate_properties - computed: true, optional: false, required: false
  public get x509CertificateProperties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('x509_certificate_properties') as any;
  }
}
export interface DataAzurermKeyVaultCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate.html#read DataAzurermKeyVaultCertificate#read}
  */
  readonly read?: string;
}

function dataAzurermKeyVaultCertificateTimeoutsToTerraform(struct?: DataAzurermKeyVaultCertificateTimeoutsOutputReference | DataAzurermKeyVaultCertificateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermKeyVaultCertificateTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate.html azurerm_key_vault_certificate}
*/
export class DataAzurermKeyVaultCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_key_vault_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate.html azurerm_key_vault_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermKeyVaultCertificateConfig
  */
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

  // certificate_data_base64 - computed: true, optional: false, required: false
  public get certificateDataBase64() {
    return this.getStringAttribute('certificate_data_base64');
  }

  // certificate_policy - computed: true, optional: false, required: false
  public certificatePolicy(index: string) {
    return new DataAzurermKeyVaultCertificateCertificatePolicy(this, 'certificate_policy', index);
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId?: string; 
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
  private _name?: string; 
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

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string | undefined; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
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
  private _timeouts?: DataAzurermKeyVaultCertificateTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermKeyVaultCertificateTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermKeyVaultCertificateTimeouts | undefined) {
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
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      name: cdktf.stringToTerraform(this._name),
      version: cdktf.stringToTerraform(this._version),
      timeouts: dataAzurermKeyVaultCertificateTimeoutsToTerraform(this._timeouts),
    };
  }
}
