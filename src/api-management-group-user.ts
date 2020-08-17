// https://www.terraform.io/docs/providers/azurerm/r/api_management_group_user.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementGroupUserConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly groupName: string;
  readonly resourceGroupName: string;
  readonly userId: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementGroupUserTimeouts;
}
export interface ApiManagementGroupUserTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagementGroupUser extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementGroupUserConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_group_user',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._groupName = config.groupName;
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

  // group_name - computed: false, optional: false, required: true
  private _groupName: string;
  public get groupName() {
    return this._groupName;
  }
  public set groupName(value: string) {
    this._groupName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
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
  private _timeouts?: ApiManagementGroupUserTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApiManagementGroupUserTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: this._apiManagementName,
      group_name: this._groupName,
      resource_group_name: this._resourceGroupName,
      user_id: this._userId,
      timeouts: this._timeouts,
    };
  }
}
