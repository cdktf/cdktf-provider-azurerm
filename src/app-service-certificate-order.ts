// https://www.terraform.io/docs/providers/azurerm/r/app_service_certificate_order.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface AppServiceCertificateOrderConfig extends TerraformMetaArguments {
  readonly autoRenew?: boolean;
  readonly csr?: string;
  readonly distinguishedName?: string;
  readonly keySize?: number;
  readonly location: string;
  readonly name: string;
  readonly productType?: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly validityInYears?: number;
  /** timeouts block */
  readonly timeouts?: AppServiceCertificateOrderTimeouts;
}
export class AppServiceCertificateOrderCertificates extends ComplexComputedList {

  // certificate_name - computed: true, optional: false, required: true
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // key_vault_id - computed: true, optional: false, required: true
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // key_vault_secret_name - computed: true, optional: false, required: true
  public get keyVaultSecretName() {
    return this.getStringAttribute('key_vault_secret_name');
  }

  // provisioning_state - computed: true, optional: false, required: true
  public get provisioningState() {
    return this.getStringAttribute('provisioning_state');
  }
}
export interface AppServiceCertificateOrderTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AppServiceCertificateOrder extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppServiceCertificateOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_certificate_order',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoRenew = config.autoRenew;
    this._csr = config.csr;
    this._distinguishedName = config.distinguishedName;
    this._keySize = config.keySize;
    this._location = config.location;
    this._name = config.name;
    this._productType = config.productType;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._validityInYears = config.validityInYears;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_certificate_not_renewable_reasons - computed: true, optional: false, required: true
  public get appServiceCertificateNotRenewableReasons() {
    return this.getListAttribute('app_service_certificate_not_renewable_reasons');
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean;
  public get autoRenew() {
    return this._autoRenew;
  }
  public set autoRenew(value: boolean | undefined) {
    this._autoRenew = value;
  }

  // certificates - computed: true, optional: false, required: true
  public certificates(index: string) {
    return new AppServiceCertificateOrderCertificates(this, 'certificates', index);
  }

  // csr - computed: true, optional: true, required: false
  private _csr?: string;
  public get csr() {
    return this._csr ?? this.getStringAttribute('csr');
  }
  public set csr(value: string | undefined) {
    this._csr = value;
  }

  // distinguished_name - computed: true, optional: true, required: false
  private _distinguishedName?: string;
  public get distinguishedName() {
    return this._distinguishedName ?? this.getStringAttribute('distinguished_name');
  }
  public set distinguishedName(value: string | undefined) {
    this._distinguishedName = value;
  }

  // domain_verification_token - computed: true, optional: false, required: true
  public get domainVerificationToken() {
    return this.getStringAttribute('domain_verification_token');
  }

  // expiration_time - computed: true, optional: false, required: true
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // intermediate_thumbprint - computed: true, optional: false, required: true
  public get intermediateThumbprint() {
    return this.getStringAttribute('intermediate_thumbprint');
  }

  // is_private_key_external - computed: true, optional: false, required: true
  public get isPrivateKeyExternal() {
    return this.getBooleanAttribute('is_private_key_external');
  }

  // key_size - computed: false, optional: true, required: false
  private _keySize?: number;
  public get keySize() {
    return this._keySize;
  }
  public set keySize(value: number | undefined) {
    this._keySize = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // product_type - computed: false, optional: true, required: false
  private _productType?: string;
  public get productType() {
    return this._productType;
  }
  public set productType(value: string | undefined) {
    this._productType = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // root_thumbprint - computed: true, optional: false, required: true
  public get rootThumbprint() {
    return this.getStringAttribute('root_thumbprint');
  }

  // signed_certificate_thumbprint - computed: true, optional: false, required: true
  public get signedCertificateThumbprint() {
    return this.getStringAttribute('signed_certificate_thumbprint');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // validity_in_years - computed: false, optional: true, required: false
  private _validityInYears?: number;
  public get validityInYears() {
    return this._validityInYears;
  }
  public set validityInYears(value: number | undefined) {
    this._validityInYears = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceCertificateOrderTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AppServiceCertificateOrderTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew: this._autoRenew,
      csr: this._csr,
      distinguished_name: this._distinguishedName,
      key_size: this._keySize,
      location: this._location,
      name: this._name,
      product_type: this._productType,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      validity_in_years: this._validityInYears,
      timeouts: this._timeouts,
    };
  }
}
