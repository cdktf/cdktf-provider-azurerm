// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_api_management_user.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermApiManagementUserConfig extends cdktf.TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly resourceGroupName: string;
  readonly userId: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermApiManagementUserTimeouts;
}
export interface DataAzurermApiManagementUserTimeouts {
  readonly read?: string;
}

function dataAzurermApiManagementUserTimeoutsToTerraform(struct?: DataAzurermApiManagementUserTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermApiManagementUser extends cdktf.TerraformDataSource {

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
    return this.getStringAttribute('api_management_name');
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementNameInput() {
    return this._apiManagementName
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // note - computed: true, optional: false, required: false
  public get note() {
    return this.getStringAttribute('note');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
  private _timeouts?: DataAzurermApiManagementUserTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermApiManagementUserTimeouts ) {
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
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      user_id: cdktf.stringToTerraform(this._userId),
      timeouts: dataAzurermApiManagementUserTimeoutsToTerraform(this._timeouts),
    };
  }
}
