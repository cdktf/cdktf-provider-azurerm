// https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool_address.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbBackendAddressPoolAddressConfig extends cdktf.TerraformMetaArguments {
  readonly backendAddressPoolId: string;
  readonly ipAddress: string;
  readonly name: string;
  readonly virtualNetworkId: string;
  /** timeouts block */
  readonly timeouts?: LbBackendAddressPoolAddressTimeouts;
}
export interface LbBackendAddressPoolAddressTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function lbBackendAddressPoolAddressTimeoutsToTerraform(struct?: LbBackendAddressPoolAddressTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class LbBackendAddressPoolAddress extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LbBackendAddressPoolAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_lb_backend_address_pool_address',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backendAddressPoolId = config.backendAddressPoolId;
    this._ipAddress = config.ipAddress;
    this._name = config.name;
    this._virtualNetworkId = config.virtualNetworkId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_address_pool_id - computed: false, optional: false, required: true
  private _backendAddressPoolId: string;
  public get backendAddressPoolId() {
    return this.getStringAttribute('backend_address_pool_id');
  }
  public set backendAddressPoolId(value: string) {
    this._backendAddressPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendAddressPoolIdInput() {
    return this._backendAddressPoolId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress: string;
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress
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

  // virtual_network_id - computed: false, optional: false, required: true
  private _virtualNetworkId: string;
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LbBackendAddressPoolAddressTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LbBackendAddressPoolAddressTimeouts ) {
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
      backend_address_pool_id: cdktf.stringToTerraform(this._backendAddressPoolId),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      name: cdktf.stringToTerraform(this._name),
      virtual_network_id: cdktf.stringToTerraform(this._virtualNetworkId),
      timeouts: lbBackendAddressPoolAddressTimeoutsToTerraform(this._timeouts),
    };
  }
}
