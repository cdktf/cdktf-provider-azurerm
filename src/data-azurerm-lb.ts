// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_lb.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermLbConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermLbTimeouts;
}
export class DataAzurermLbFrontendIpConfiguration extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_ip_address - computed: true, optional: false, required: true
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_ip_address_allocation - computed: true, optional: false, required: true
  public get privateIpAddressAllocation() {
    return this.getStringAttribute('private_ip_address_allocation');
  }

  // public_ip_address_id - computed: true, optional: false, required: true
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // zones - computed: true, optional: false, required: true
  public get zones() {
    return this.getListAttribute('zones');
  }
}
export interface DataAzurermLbTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermLb extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermLbConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_lb',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // frontend_ip_configuration - computed: true, optional: false, required: true
  public frontendIpConfiguration(index: string) {
    return new DataAzurermLbFrontendIpConfiguration(this, 'frontend_ip_configuration', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // private_ip_address - computed: true, optional: false, required: true
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_ip_addresses - computed: true, optional: false, required: true
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // sku - computed: true, optional: false, required: true
  public get sku() {
    return this.getStringAttribute('sku');
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermLbTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermLbTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
