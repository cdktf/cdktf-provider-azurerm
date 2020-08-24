// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_batch_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermBatchCertificateConfig extends TerraformMetaArguments {
  readonly accountName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermBatchCertificateTimeouts;
}
export interface DataAzurermBatchCertificateTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermBatchCertificate extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermBatchCertificateConfig) {
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
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

  // format - computed: true, optional: false, required: true
  public get format() {
    return this.getStringAttribute('format');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
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

  // thumbprint - computed: true, optional: false, required: true
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // thumbprint_algorithm - computed: true, optional: false, required: true
  public get thumbprintAlgorithm() {
    return this.getStringAttribute('thumbprint_algorithm');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermBatchCertificateTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermBatchCertificateTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: this._accountName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
