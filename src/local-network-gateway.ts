// https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LocalNetworkGatewayConfig extends TerraformMetaArguments {
  readonly addressSpace: string[];
  readonly gatewayAddress: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** bgp_settings block */
  readonly bgpSettings?: LocalNetworkGatewayBgpSettings[];
  /** timeouts block */
  readonly timeouts?: LocalNetworkGatewayTimeouts;
}
export interface LocalNetworkGatewayBgpSettings {
  readonly asn: number;
  readonly bgpPeeringAddress: string;
  readonly peerWeight?: number;
}
export interface LocalNetworkGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LocalNetworkGateway extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LocalNetworkGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_local_network_gateway',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addressSpace = config.addressSpace;
    this._gatewayAddress = config.gatewayAddress;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._bgpSettings = config.bgpSettings;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_space - computed: false, optional: false, required: true
  private _addressSpace: string[];
  public get addressSpace() {
    return this._addressSpace;
  }
  public set addressSpace(value: string[]) {
    this._addressSpace = value;
  }

  // gateway_address - computed: false, optional: false, required: true
  private _gatewayAddress: string;
  public get gatewayAddress() {
    return this._gatewayAddress;
  }
  public set gatewayAddress(value: string) {
    this._gatewayAddress = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // bgp_settings - computed: false, optional: true, required: false
  private _bgpSettings?: LocalNetworkGatewayBgpSettings[];
  public get bgpSettings() {
    return this._bgpSettings;
  }
  public set bgpSettings(value: LocalNetworkGatewayBgpSettings[] | undefined) {
    this._bgpSettings = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LocalNetworkGatewayTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LocalNetworkGatewayTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      address_space: this._addressSpace,
      gateway_address: this._gatewayAddress,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      bgp_settings: this._bgpSettings,
      timeouts: this._timeouts,
    };
  }
}
