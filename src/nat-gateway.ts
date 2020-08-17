// https://www.terraform.io/docs/providers/azurerm/r/nat_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NatGatewayConfig extends TerraformMetaArguments {
  readonly idleTimeoutInMinutes?: number;
  readonly location: string;
  readonly name: string;
  readonly publicIpAddressIds?: string[];
  readonly publicIpPrefixIds?: string[];
  readonly resourceGroupName: string;
  readonly skuName?: string;
  readonly tags?: { [key: string]: string };
  readonly zones?: string[];
  /** timeouts block */
  readonly timeouts?: NatGatewayTimeouts;
}
export interface NatGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class NatGateway extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NatGatewayConfig) {
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
    this._idleTimeoutInMinutes = config.idleTimeoutInMinutes;
    this._location = config.location;
    this._name = config.name;
    this._publicIpAddressIds = config.publicIpAddressIds;
    this._publicIpPrefixIds = config.publicIpPrefixIds;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._tags = config.tags;
    this._zones = config.zones;
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

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number;
  public get idleTimeoutInMinutes() {
    return this._idleTimeoutInMinutes;
  }
  public set idleTimeoutInMinutes(value: number | undefined) {
    this._idleTimeoutInMinutes = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // public_ip_address_ids - computed: false, optional: true, required: false
  private _publicIpAddressIds?: string[];
  public get publicIpAddressIds() {
    return this._publicIpAddressIds;
  }
  public set publicIpAddressIds(value: string[] | undefined) {
    this._publicIpAddressIds = value;
  }

  // public_ip_prefix_ids - computed: false, optional: true, required: false
  private _publicIpPrefixIds?: string[];
  public get publicIpPrefixIds() {
    return this._publicIpPrefixIds;
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

  // sku_name - computed: false, optional: true, required: false
  private _skuName?: string;
  public get skuName() {
    return this._skuName;
  }
  public set skuName(value: string | undefined) {
    this._skuName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this._zones;
  }
  public set zones(value: string[] | undefined) {
    this._zones = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NatGatewayTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NatGatewayTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      idle_timeout_in_minutes: this._idleTimeoutInMinutes,
      location: this._location,
      name: this._name,
      public_ip_address_ids: this._publicIpAddressIds,
      public_ip_prefix_ids: this._publicIpPrefixIds,
      resource_group_name: this._resourceGroupName,
      sku_name: this._skuName,
      tags: this._tags,
      zones: this._zones,
      timeouts: this._timeouts,
    };
  }
}
