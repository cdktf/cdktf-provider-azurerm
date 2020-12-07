// https://www.terraform.io/docs/providers/azurerm/r/api_management_certificate_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementCertificateAConfig extends cdktf.TerraformMetaArguments {
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

function apiManagementCertificateTimeoutsToTerraform(struct?: ApiManagementCertificateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ApiManagementCertificateA extends cdktf.TerraformResource {

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
    return this.getStringAttribute('api_management_name');
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementNameInput() {
    return this._apiManagementName
  }

  // data - computed: false, optional: false, required: true
  private _data: string;
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementCertificateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementCertificateTimeouts ) {
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
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      data: cdktf.stringToTerraform(this._data),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: apiManagementCertificateTimeoutsToTerraform(this._timeouts),
    };
  }
}
