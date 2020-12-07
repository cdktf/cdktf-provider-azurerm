// https://www.terraform.io/docs/providers/azurerm/r/app_service_active_slot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServiceActiveSlotConfig extends cdktf.TerraformMetaArguments {
  readonly appServiceName: string;
  readonly appServiceSlotName: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: AppServiceActiveSlotTimeouts;
}
export interface AppServiceActiveSlotTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function appServiceActiveSlotTimeoutsToTerraform(struct?: AppServiceActiveSlotTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AppServiceActiveSlot extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppServiceActiveSlotConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_active_slot',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appServiceName = config.appServiceName;
    this._appServiceSlotName = config.appServiceSlotName;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_name - computed: false, optional: false, required: true
  private _appServiceName: string;
  public get appServiceName() {
    return this.getStringAttribute('app_service_name');
  }
  public set appServiceName(value: string) {
    this._appServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceNameInput() {
    return this._appServiceName
  }

  // app_service_slot_name - computed: false, optional: false, required: true
  private _appServiceSlotName: string;
  public get appServiceSlotName() {
    return this.getStringAttribute('app_service_slot_name');
  }
  public set appServiceSlotName(value: string) {
    this._appServiceSlotName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceSlotNameInput() {
    return this._appServiceSlotName
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceActiveSlotTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppServiceActiveSlotTimeouts ) {
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
      app_service_name: cdktf.stringToTerraform(this._appServiceName),
      app_service_slot_name: cdktf.stringToTerraform(this._appServiceSlotName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: appServiceActiveSlotTimeoutsToTerraform(this._timeouts),
    };
  }
}
