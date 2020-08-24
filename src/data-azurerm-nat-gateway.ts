// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_nat_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermNatGatewayConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly publicIpAddressIds?: string[];
  readonly publicIpPrefixIds?: string[];
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermNatGatewayTimeouts;
}
export interface DataAzurermNatGatewayTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermNatGateway extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermNatGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_nat_gateway',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._publicIpAddressIds = config.publicIpAddressIds;
    this._publicIpPrefixIds = config.publicIpPrefixIds;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // idle_timeout_in_minutes - computed: true, optional: false, required: true
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
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

  // public_ip_address_ids - computed: true, optional: true, required: false
  private _publicIpAddressIds?: string[];
  public get publicIpAddressIds() {
    return this._publicIpAddressIds ?? this.getListAttribute('public_ip_address_ids');
  }
  public set publicIpAddressIds(value: string[] | undefined) {
    this._publicIpAddressIds = value;
  }

  // public_ip_prefix_ids - computed: true, optional: true, required: false
  private _publicIpPrefixIds?: string[];
  public get publicIpPrefixIds() {
    return this._publicIpPrefixIds ?? this.getListAttribute('public_ip_prefix_ids');
  }
  public set publicIpPrefixIds(value: string[] | undefined) {
    this._publicIpPrefixIds = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // resource_guid - computed: true, optional: false, required: true
  public get resourceGuid() {
    return this.getStringAttribute('resource_guid');
  }

  // sku_name - computed: true, optional: false, required: true
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // zones - computed: true, optional: false, required: true
  public get zones() {
    return this.getListAttribute('zones');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermNatGatewayTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermNatGatewayTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      public_ip_address_ids: this._publicIpAddressIds,
      public_ip_prefix_ids: this._publicIpPrefixIds,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
