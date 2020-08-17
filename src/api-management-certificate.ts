// https://www.terraform.io/docs/providers/azurerm/r/api_management_certificate_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementCertificateAConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly data: string;
  readonly name: string;
  readonly password?: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementCertificateTimeouts;
}
export interface ApiManagementCertificateTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagementCertificateA extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementCertificateAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_certificate',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._data = config.data;
    this._name = config.name;
    this._password = config.password;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_name - computed: false, optional: false, required: true
  private _apiManagementName: string;
  public get apiManagementName() {
    return this._apiManagementName;
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }

  // data - computed: false, optional: false, required: true
  private _data: string;
  public get data() {
    return this._data;
  }
  public set data(value: string) {
    this._data = value;
  }

  // expiration - computed: true, optional: false, required: true
  public get expiration() {
    return this.getStringAttribute('expiration');
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

  // password - computed: false, optional: true, required: false
  private _password?: string;
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // subject - computed: true, optional: false, required: true
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // thumbprint - computed: true, optional: false, required: true
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementCertificateTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApiManagementCertificateTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: this._apiManagementName,
      data: this._data,
      name: this._name,
      password: this._password,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
