// https://www.terraform.io/docs/providers/azurerm/r/api_management_group_user.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementGroupUserConfig extends cdktf.TerraformMetaArguments {
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

function apiManagementGroupUserTimeoutsToTerraform(struct?: ApiManagementGroupUserTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ApiManagementGroupUser extends cdktf.TerraformResource {

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
    return this.getStringAttribute('api_management_name');
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementNameInput() {
    return this._apiManagementName
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName: string;
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // user_id - computed: false, optional: false, required: true
  private _userId: string;
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementGroupUserTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementGroupUserTimeouts ) {
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
      group_name: cdktf.stringToTerraform(this._groupName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      user_id: cdktf.stringToTerraform(this._userId),
      timeouts: apiManagementGroupUserTimeoutsToTerraform(this._timeouts),
    };
  }
}
