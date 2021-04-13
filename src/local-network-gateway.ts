// https://www.terraform.io/docs/providers/azurerm/r/local_network_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocalNetworkGatewayConfig extends cdktf.TerraformMetaArguments {
  readonly addressSpace?: string[];
  readonly gatewayAddress?: string;
  readonly gatewayFqdn?: string;
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

function localNetworkGatewayBgpSettingsToTerraform(struct?: LocalNetworkGatewayBgpSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    bgp_peering_address: cdktf.stringToTerraform(struct!.bgpPeeringAddress),
    peer_weight: cdktf.numberToTerraform(struct!.peerWeight),
  }
}

export interface LocalNetworkGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function localNetworkGatewayTimeoutsToTerraform(struct?: LocalNetworkGatewayTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class LocalNetworkGateway extends cdktf.TerraformResource {

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
    this._gatewayFqdn = config.gatewayFqdn;
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

  // address_space - computed: false, optional: true, required: false
  private _addressSpace?: string[];
  public get addressSpace() {
    return this.getListAttribute('address_space');
  }
  public set addressSpace(value: string[] ) {
    this._addressSpace = value;
  }
  public resetAddressSpace() {
    this._addressSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSpaceInput() {
    return this._addressSpace
  }

  // gateway_address - computed: false, optional: true, required: false
  private _gatewayAddress?: string;
  public get gatewayAddress() {
    return this.getStringAttribute('gateway_address');
  }
  public set gatewayAddress(value: string ) {
    this._gatewayAddress = value;
  }
  public resetGatewayAddress() {
    this._gatewayAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayAddressInput() {
    return this._gatewayAddress
  }

  // gateway_fqdn - computed: false, optional: true, required: false
  private _gatewayFqdn?: string;
  public get gatewayFqdn() {
    return this.getStringAttribute('gateway_fqdn');
  }
  public set gatewayFqdn(value: string ) {
    this._gatewayFqdn = value;
  }
  public resetGatewayFqdn() {
    this._gatewayFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayFqdnInput() {
    return this._gatewayFqdn
  }

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

  // bgp_settings - computed: false, optional: true, required: false
  private _bgpSettings?: LocalNetworkGatewayBgpSettings[];
  public get bgpSettings() {
    return this.interpolationForAttribute('bgp_settings') as any;
  }
  public set bgpSettings(value: LocalNetworkGatewayBgpSettings[] ) {
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
  private _timeouts?: LocalNetworkGatewayTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LocalNetworkGatewayTimeouts ) {
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
      address_space: cdktf.listMapper(cdktf.stringToTerraform)(this._addressSpace),
      gateway_address: cdktf.stringToTerraform(this._gatewayAddress),
      gateway_fqdn: cdktf.stringToTerraform(this._gatewayFqdn),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      bgp_settings: cdktf.listMapper(localNetworkGatewayBgpSettingsToTerraform)(this._bgpSettings),
      timeouts: localNetworkGatewayTimeoutsToTerraform(this._timeouts),
    };
  }
}
