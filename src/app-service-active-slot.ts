// https://www.terraform.io/docs/providers/azurerm/r/app_service_active_slot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppServiceActiveSlotConfig extends TerraformMetaArguments {
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

// Resource

export class AppServiceActiveSlot extends TerraformResource {

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
    return this._appServiceName;
  }
  public set appServiceName(value: string) {
    this._appServiceName = value;
  }

  // app_service_slot_name - computed: false, optional: false, required: true
  private _appServiceSlotName: string;
  public get appServiceSlotName() {
    return this._appServiceSlotName;
  }
  public set appServiceSlotName(value: string) {
    this._appServiceSlotName = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceActiveSlotTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AppServiceActiveSlotTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      app_service_name: this._appServiceName,
      app_service_slot_name: this._appServiceSlotName,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
