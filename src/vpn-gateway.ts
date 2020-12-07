// https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnGatewayConfig extends cdktf.TerraformMetaArguments {
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
export interface VpnGatewayBgpSettingsInstance0BgpPeeringAddress {
  readonly customIps: string[];
}

function vpnGatewayBgpSettingsInstance0BgpPeeringAddressToTerraform(struct?: VpnGatewayBgpSettingsInstance0BgpPeeringAddress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct!.customIps),
  }
}

export interface VpnGatewayBgpSettingsInstance1BgpPeeringAddress {
  readonly customIps: string[];
}

function vpnGatewayBgpSettingsInstance1BgpPeeringAddressToTerraform(struct?: VpnGatewayBgpSettingsInstance1BgpPeeringAddress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct!.customIps),
  }
}

export interface VpnGatewayBgpSettings {
  readonly asn: number;
  readonly peerWeight: number;
  /** instance_0_bgp_peering_address block */
  readonly instance0BgpPeeringAddress?: VpnGatewayBgpSettingsInstance0BgpPeeringAddress[];
  /** instance_1_bgp_peering_address block */
  readonly instance1BgpPeeringAddress?: VpnGatewayBgpSettingsInstance1BgpPeeringAddress[];
}

function vpnGatewayBgpSettingsToTerraform(struct?: VpnGatewayBgpSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    peer_weight: cdktf.numberToTerraform(struct!.peerWeight),
    instance_0_bgp_peering_address: cdktf.listMapper(vpnGatewayBgpSettingsInstance0BgpPeeringAddressToTerraform)(struct!.instance0BgpPeeringAddress),
    instance_1_bgp_peering_address: cdktf.listMapper(vpnGatewayBgpSettingsInstance1BgpPeeringAddressToTerraform)(struct!.instance1BgpPeeringAddress),
  }
}

export interface VpnGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function vpnGatewayTimeoutsToTerraform(struct?: VpnGatewayTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class VpnGateway extends cdktf.TerraformResource {

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // scale_unit - computed: false, optional: true, required: false
  private _scaleUnit?: number;
  public get scaleUnit() {
    return this.getNumberAttribute('scale_unit');
  }
  public set scaleUnit(value: number ) {
    this._scaleUnit = value;
  }
  public resetScaleUnit() {
    this._scaleUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUnitInput() {
    return this._scaleUnit
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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

  // bgp_settings - computed: false, optional: true, required: false
  private _bgpSettings?: VpnGatewayBgpSettings[];
  public get bgpSettings() {
    return this.interpolationForAttribute('bgp_settings') as any;
  }
  public set bgpSettings(value: VpnGatewayBgpSettings[] ) {
    this._bgpSettings = value;
  }
  public resetBgpSettings() {
    this._bgpSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpSettingsInput() {
    return this._bgpSettings
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpnGatewayTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VpnGatewayTimeouts ) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      scale_unit: cdktf.numberToTerraform(this._scaleUnit),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      virtual_hub_id: cdktf.stringToTerraform(this._virtualHubId),
      bgp_settings: cdktf.listMapper(vpnGatewayBgpSettingsToTerraform)(this._bgpSettings),
      timeouts: vpnGatewayTimeoutsToTerraform(this._timeouts),
    };
  }
}
