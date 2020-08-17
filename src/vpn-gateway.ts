// https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VpnGatewayConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly scaleUnit?: number;
  readonly tags?: { [key: string]: string };
  readonly virtualHubId: string;
  /** bgp_settings block */
  readonly bgpSettings?: VpnGatewayBgpSettings[];
  /** timeouts block */
  readonly timeouts?: VpnGatewayTimeouts;
}
export interface VpnGatewayBgpSettings {
  readonly asn: number;
  readonly peerWeight: number;
}
export interface VpnGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class VpnGateway extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpnGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_vpn_gateway',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._scaleUnit = config.scaleUnit;
    this._tags = config.tags;
    this._virtualHubId = config.virtualHubId;
    this._bgpSettings = config.bgpSettings;
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

  // scale_unit - computed: false, optional: true, required: false
  private _scaleUnit?: number;
  public get scaleUnit() {
    return this._scaleUnit;
  }
  public set scaleUnit(value: number | undefined) {
    this._scaleUnit = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // virtual_hub_id - computed: false, optional: false, required: true
  private _virtualHubId: string;
  public get virtualHubId() {
    return this._virtualHubId;
  }
  public set virtualHubId(value: string) {
    this._virtualHubId = value;
  }

  // bgp_settings - computed: false, optional: true, required: false
  private _bgpSettings?: VpnGatewayBgpSettings[];
  public get bgpSettings() {
    return this._bgpSettings;
  }
  public set bgpSettings(value: VpnGatewayBgpSettings[] | undefined) {
    this._bgpSettings = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpnGatewayTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: VpnGatewayTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      scale_unit: this._scaleUnit,
      tags: this._tags,
      virtual_hub_id: this._virtualHubId,
      bgp_settings: this._bgpSettings,
      timeouts: this._timeouts,
    };
  }
}
