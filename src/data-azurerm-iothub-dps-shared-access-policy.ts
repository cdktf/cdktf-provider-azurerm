// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_iothub_dps_shared_access_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermIothubDpsSharedAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly iothubDpsName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermIothubDpsSharedAccessPolicyTimeouts;
}
export interface DataAzurermIothubDpsSharedAccessPolicyTimeouts {
  readonly read?: string;
}

function dataAzurermIothubDpsSharedAccessPolicyTimeoutsToTerraform(struct?: DataAzurermIothubDpsSharedAccessPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermIothubDpsSharedAccessPolicy extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermIothubDpsSharedAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iothub_dps_shared_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._iothubDpsName = config.iothubDpsName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iothub_dps_name - computed: false, optional: false, required: true
  private _iothubDpsName: string;
  public get iothubDpsName() {
    return this.getStringAttribute('iothub_dps_name');
  }
  public set iothubDpsName(value: string) {
    this._iothubDpsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iothubDpsNameInput() {
    return this._iothubDpsName
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

  // primary_connection_string - computed: true, optional: false, required: false
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
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

  // secondary_connection_string - computed: true, optional: false, required: false
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // secondary_key - computed: true, optional: false, required: false
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermIothubDpsSharedAccessPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermIothubDpsSharedAccessPolicyTimeouts ) {
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
      iothub_dps_name: cdktf.stringToTerraform(this._iothubDpsName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermIothubDpsSharedAccessPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
