// https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_ip.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VirtualHubIpConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly privateIpAddress?: string;
  readonly privateIpAllocationMethod?: string;
  readonly publicIpAddressId?: string;
  readonly subnetId: string;
  readonly virtualHubId: string;
  /** timeouts block */
  readonly timeouts?: VirtualHubIpTimeouts;
}
export interface VirtualHubIpTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class VirtualHubIp extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VirtualHubIpConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_hub_ip',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._privateIpAddress = config.privateIpAddress;
    this._privateIpAllocationMethod = config.privateIpAllocationMethod;
    this._publicIpAddressId = config.publicIpAddressId;
    this._subnetId = config.subnetId;
    this._virtualHubId = config.virtualHubId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // private_ip_address - computed: false, optional: true, required: false
  private _privateIpAddress?: string;
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string ) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress
  }

  // private_ip_allocation_method - computed: false, optional: true, required: false
  private _privateIpAllocationMethod?: string;
  public get privateIpAllocationMethod() {
    return this.getStringAttribute('private_ip_allocation_method');
  }
  public set privateIpAllocationMethod(value: string ) {
    this._privateIpAllocationMethod = value;
  }
  public resetPrivateIpAllocationMethod() {
    this._privateIpAllocationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAllocationMethodInput() {
    return this._privateIpAllocationMethod
  }

  // public_ip_address_id - computed: false, optional: true, required: false
  private _publicIpAddressId?: string;
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }
  public set publicIpAddressId(value: string ) {
    this._publicIpAddressId = value;
  }
  public resetPublicIpAddressId() {
    this._publicIpAddressId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressIdInput() {
    return this._publicIpAddressId
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

  // virtual_hub_id - computed: false, optional: false, required: true
  private _virtualHubId: string;
  public get virtualHubId() {
    return this.getStringAttribute('virtual_hub_id');
  }
  public set virtualHubId(value: string) {
    this._virtualHubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHubIdInput() {
    return this._virtualHubId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualHubIpTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualHubIpTimeouts ) {
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
      name: this._name,
      private_ip_address: this._privateIpAddress,
      private_ip_allocation_method: this._privateIpAllocationMethod,
      public_ip_address_id: this._publicIpAddressId,
      subnet_id: this._subnetId,
      virtual_hub_id: this._virtualHubId,
      timeouts: this._timeouts,
    };
  }
}
