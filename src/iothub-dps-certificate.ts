// https://www.terraform.io/docs/providers/azurerm/r/iothub_dps_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IothubDpsCertificateConfig extends TerraformMetaArguments {
  readonly certificateContent: string;
  readonly iotDpsName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: IothubDpsCertificateTimeouts;
}
export interface IothubDpsCertificateTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class IothubDpsCertificate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IothubDpsCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iothub_dps_certificate',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateContent = config.certificateContent;
    this._iotDpsName = config.iotDpsName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_content - computed: false, optional: false, required: true
  private _certificateContent: string;
  public get certificateContent() {
    return this._certificateContent;
  }
  public set certificateContent(value: string) {
    this._certificateContent = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // iot_dps_name - computed: false, optional: false, required: true
  private _iotDpsName: string;
  public get iotDpsName() {
    return this._iotDpsName;
  }
  public set iotDpsName(value: string) {
    this._iotDpsName = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IothubDpsCertificateTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IothubDpsCertificateTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_content: this._certificateContent,
      iot_dps_name: this._iotDpsName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
