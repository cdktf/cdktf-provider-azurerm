// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_api_management_user.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermApiManagementUserConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly resourceGroupName: string;
  readonly userId: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermApiManagementUserTimeouts;
}
export interface DataAzurermApiManagementUserTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermApiManagementUser extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermApiManagementUserConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_user',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._resourceGroupName = config.resourceGroupName;
    this._userId = config.userId;
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

  // email - computed: true, optional: false, required: true
  public get email() {
    return this.getStringAttribute('email');
  }

  // first_name - computed: true, optional: false, required: true
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_name - computed: true, optional: false, required: true
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // note - computed: true, optional: false, required: true
  public get note() {
    return this.getStringAttribute('note');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // user_id - computed: false, optional: false, required: true
  private _userId: string;
  public get userId() {
    return this._userId;
  }
  public set userId(value: string) {
    this._userId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermApiManagementUserTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermApiManagementUserTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: this._apiManagementName,
      resource_group_name: this._resourceGroupName,
      user_id: this._userId,
      timeouts: this._timeouts,
    };
  }
}
