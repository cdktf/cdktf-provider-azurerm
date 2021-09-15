// https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool_address.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbBackendAddressPoolAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool_address.html#backend_address_pool_id LbBackendAddressPoolAddress#backend_address_pool_id}
  */
  readonly backendAddressPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool_address.html#ip_address LbBackendAddressPoolAddress#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool_address.html#name LbBackendAddressPoolAddress#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool_address.html#virtual_network_id LbBackendAddressPoolAddress#virtual_network_id}
  */
  readonly virtualNetworkId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool_address.html#timeouts LbBackendAddressPoolAddress#timeouts}
  */
  readonly timeouts?: LbBackendAddressPoolAddressTimeouts;
}
export interface LbBackendAddressPoolAddressTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool_address.html#create LbBackendAddressPoolAddress#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool_address.html#delete LbBackendAddressPoolAddress#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool_address.html#read LbBackendAddressPoolAddress#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool_address.html#update LbBackendAddressPoolAddress#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool_address.html azurerm_lb_backend_address_pool_address}
*/
export class LbBackendAddressPoolAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_lb_backend_address_pool_address";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/lb_backend_address_pool_address.html azurerm_lb_backend_address_pool_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbBackendAddressPoolAddressConfig
  */
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
