// https://www.terraform.io/docs/providers/azurerm/r/app_service_virtual_network_swift_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServiceVirtualNetworkSwiftConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_virtual_network_swift_connection.html#app_service_id AppServiceVirtualNetworkSwiftConnection#app_service_id}
  */
  readonly appServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_virtual_network_swift_connection.html#subnet_id AppServiceVirtualNetworkSwiftConnection#subnet_id}
  */
  readonly subnetId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_virtual_network_swift_connection.html#timeouts AppServiceVirtualNetworkSwiftConnection#timeouts}
  */
  readonly timeouts?: AppServiceVirtualNetworkSwiftConnectionTimeouts;
}
export interface AppServiceVirtualNetworkSwiftConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_virtual_network_swift_connection.html#create AppServiceVirtualNetworkSwiftConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_virtual_network_swift_connection.html#delete AppServiceVirtualNetworkSwiftConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_virtual_network_swift_connection.html#read AppServiceVirtualNetworkSwiftConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_virtual_network_swift_connection.html#update AppServiceVirtualNetworkSwiftConnection#update}
  */
  readonly update?: string;
}

function appServiceVirtualNetworkSwiftConnectionTimeoutsToTerraform(struct?: AppServiceVirtualNetworkSwiftConnectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_virtual_network_swift_connection.html azurerm_app_service_virtual_network_swift_connection}
*/
export class AppServiceVirtualNetworkSwiftConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_app_service_virtual_network_swift_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/app_service_virtual_network_swift_connection.html azurerm_app_service_virtual_network_swift_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppServiceVirtualNetworkSwiftConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: AppServiceVirtualNetworkSwiftConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_virtual_network_swift_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appServiceId = config.appServiceId;
    this._subnetId = config.subnetId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_id - computed: false, optional: false, required: true
  private _appServiceId: string;
  public get appServiceId() {
    return this.getStringAttribute('app_service_id');
  }
  public set appServiceId(value: string) {
    this._appServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceIdInput() {
    return this._appServiceId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceVirtualNetworkSwiftConnectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppServiceVirtualNetworkSwiftConnectionTimeouts ) {
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
      app_service_id: cdktf.stringToTerraform(this._appServiceId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      timeouts: appServiceVirtualNetworkSwiftConnectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
