// https://www.terraform.io/docs/providers/azurerm/r/app_service_virtual_network_swift_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppServiceVirtualNetworkSwiftConnectionConfig extends TerraformMetaArguments {
  readonly appServiceId: string;
  readonly subnetId: string;
  /** timeouts block */
  readonly timeouts?: AppServiceVirtualNetworkSwiftConnectionTimeouts;
}
export interface AppServiceVirtualNetworkSwiftConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AppServiceVirtualNetworkSwiftConnection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._appServiceId;
  }
  public set appServiceId(value: string) {
    this._appServiceId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceVirtualNetworkSwiftConnectionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AppServiceVirtualNetworkSwiftConnectionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      app_service_id: this._appServiceId,
      subnet_id: this._subnetId,
      timeouts: this._timeouts,
    };
  }
}
