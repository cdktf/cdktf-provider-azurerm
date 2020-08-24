// https://www.terraform.io/docs/providers/azurerm/r/batch_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BatchCertificateConfig extends TerraformMetaArguments {
  readonly accountName: string;
  readonly certificate: string;
  readonly format: string;
  readonly password?: string;
  readonly resourceGroupName: string;
  readonly thumbprint: string;
  readonly thumbprintAlgorithm: string;
  /** timeouts block */
  readonly timeouts?: BatchCertificateTimeouts;
}
export interface BatchCertificateTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class BatchCertificate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BatchCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_batch_certificate',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._certificate = config.certificate;
    this._format = config.format;
    this._password = config.password;
    this._resourceGroupName = config.resourceGroupName;
    this._thumbprint = config.thumbprint;
    this._thumbprintAlgorithm = config.thumbprintAlgorithm;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName: string;
  public get accountName() {
    return this._accountName;
  }
  public set accountName(value: string) {
    this._accountName = value;
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate: string;
  public get certificate() {
    return this._certificate;
  }
  public set certificate(value: string) {
    this._certificate = value;
  }

  // format - computed: false, optional: false, required: true
  private _format: string;
  public get format() {
    return this._format;
  }
  public set format(value: string) {
    this._format = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: false, optional: true, required: false
  private _password?: string;
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }

  // public_data - computed: true, optional: false, required: true
  public get publicData() {
    return this.getStringAttribute('public_data');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // thumbprint - computed: false, optional: false, required: true
  private _thumbprint: string;
  public get thumbprint() {
    return this._thumbprint;
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }

  // thumbprint_algorithm - computed: false, optional: false, required: true
  private _thumbprintAlgorithm: string;
  public get thumbprintAlgorithm() {
    return this._thumbprintAlgorithm;
  }
  public set thumbprintAlgorithm(value: string) {
    this._thumbprintAlgorithm = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BatchCertificateTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BatchCertificateTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: this._accountName,
      certificate: this._certificate,
      format: this._format,
      password: this._password,
      resource_group_name: this._resourceGroupName,
      thumbprint: this._thumbprint,
      thumbprint_algorithm: this._thumbprintAlgorithm,
      timeouts: this._timeouts,
    };
  }
}
