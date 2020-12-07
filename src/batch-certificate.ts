// https://www.terraform.io/docs/providers/azurerm/r/batch_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchCertificateConfig extends cdktf.TerraformMetaArguments {
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

function batchCertificateTimeoutsToTerraform(struct?: BatchCertificateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class BatchCertificate extends cdktf.TerraformResource {

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
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate: string;
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate
  }

  // format - computed: false, optional: false, required: true
  private _format: string;
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: false, optional: true, required: false
  private _password?: string;
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string ) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // public_data - computed: true, optional: false, required: false
  public get publicData() {
    return this.getStringAttribute('public_data');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // thumbprint - computed: false, optional: false, required: true
  private _thumbprint: string;
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint
  }

  // thumbprint_algorithm - computed: false, optional: false, required: true
  private _thumbprintAlgorithm: string;
  public get thumbprintAlgorithm() {
    return this.getStringAttribute('thumbprint_algorithm');
  }
  public set thumbprintAlgorithm(value: string) {
    this._thumbprintAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintAlgorithmInput() {
    return this._thumbprintAlgorithm
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BatchCertificateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BatchCertificateTimeouts ) {
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
      account_name: cdktf.stringToTerraform(this._accountName),
      certificate: cdktf.stringToTerraform(this._certificate),
      format: cdktf.stringToTerraform(this._format),
      password: cdktf.stringToTerraform(this._password),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      thumbprint: cdktf.stringToTerraform(this._thumbprint),
      thumbprint_algorithm: cdktf.stringToTerraform(this._thumbprintAlgorithm),
      timeouts: batchCertificateTimeoutsToTerraform(this._timeouts),
    };
  }
}
