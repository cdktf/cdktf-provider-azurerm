// https://www.terraform.io/docs/providers/azurerm/r/app_service_active_slot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServiceActiveSlotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_active_slot.html#app_service_name AppServiceActiveSlot#app_service_name}
  */
  readonly appServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_active_slot.html#app_service_slot_name AppServiceActiveSlot#app_service_slot_name}
  */
  readonly appServiceSlotName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_active_slot.html#resource_group_name AppServiceActiveSlot#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_active_slot.html#timeouts AppServiceActiveSlot#timeouts}
  */
  readonly timeouts?: AppServiceActiveSlotTimeouts;
}
export interface AppServiceActiveSlotTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_active_slot.html#create AppServiceActiveSlot#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_active_slot.html#delete AppServiceActiveSlot#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_active_slot.html#read AppServiceActiveSlot#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_active_slot.html#update AppServiceActiveSlot#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_active_slot.html azurerm_app_service_active_slot}
*/
export class AppServiceActiveSlot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_app_service_active_slot";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_active_slot.html azurerm_app_service_active_slot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppServiceActiveSlotConfig
  */
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
