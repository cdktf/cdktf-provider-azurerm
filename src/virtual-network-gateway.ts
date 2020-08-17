// https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VirtualNetworkGatewayConfig extends TerraformMetaArguments {
  readonly activeActive?: boolean;
  readonly defaultLocalNetworkGatewayId?: string;
  readonly enableBgp?: boolean;
  readonly generation?: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly sku: string;
  readonly tags?: { [key: string]: string };
  readonly type: string;
  readonly vpnType?: string;
  /** bgp_settings block */
  readonly bgpSettings?: VirtualNetworkGatewayBgpSettings[];
  /** ip_configuration block */
  readonly ipConfiguration: VirtualNetworkGatewayIpConfiguration[];
  /** timeouts block */
  readonly timeouts?: VirtualNetworkGatewayTimeouts;
  /** vpn_client_configuration block */
  readonly vpnClientConfiguration?: VirtualNetworkGatewayVpnClientConfiguration[];
}
export interface VirtualNetworkGatewayBgpSettings {
  readonly asn?: number;
  readonly peerWeight?: number;
  readonly peeringAddress?: string;
}
export interface VirtualNetworkGatewayIpConfiguration {
  readonly name?: string;
  readonly privateIpAddressAllocation?: string;
  readonly publicIpAddressId?: string;
  readonly subnetId: string;
}
export interface VirtualNetworkGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}
export interface VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate {
  readonly name: string;
  readonly thumbprint: string;
}
export interface VirtualNetworkGatewayVpnClientConfigurationRootCertificate {
  readonly name: string;
  readonly publicCertData: string;
}
export interface VirtualNetworkGatewayVpnClientConfiguration {
  readonly addressSpace: string[];
  readonly radiusServerAddress?: string;
  readonly radiusServerSecret?: string;
  readonly vpnClientProtocols?: string[];
  /** revoked_certificate block */
  readonly revokedCertificate?: VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate[];
  /** root_certificate block */
  readonly rootCertificate?: VirtualNetworkGatewayVpnClientConfigurationRootCertificate[];
}

// Resource

export class VirtualNetworkGateway extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VirtualNetworkGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_network_gateway',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._activeActive = config.activeActive;
    this._defaultLocalNetworkGatewayId = config.defaultLocalNetworkGatewayId;
    this._enableBgp = config.enableBgp;
    this._generation = config.generation;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._type = config.type;
    this._vpnType = config.vpnType;
    this._bgpSettings = config.bgpSettings;
    this._ipConfiguration = config.ipConfiguration;
    this._timeouts = config.timeouts;
    this._vpnClientConfiguration = config.vpnClientConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_active - computed: true, optional: true, required: false
  private _activeActive?: boolean;
  public get activeActive() {
    return this._activeActive ?? this.getBooleanAttribute('active_active');
  }
  public set activeActive(value: boolean | undefined) {
    this._activeActive = value;
  }

  // default_local_network_gateway_id - computed: false, optional: true, required: false
  private _defaultLocalNetworkGatewayId?: string;
  public get defaultLocalNetworkGatewayId() {
    return this._defaultLocalNetworkGatewayId;
  }
  public set defaultLocalNetworkGatewayId(value: string | undefined) {
    this._defaultLocalNetworkGatewayId = value;
  }

  // enable_bgp - computed: true, optional: true, required: false
  private _enableBgp?: boolean;
  public get enableBgp() {
    return this._enableBgp ?? this.getBooleanAttribute('enable_bgp');
  }
  public set enableBgp(value: boolean | undefined) {
    this._enableBgp = value;
  }

  // generation - computed: true, optional: true, required: false
  private _generation?: string;
  public get generation() {
    return this._generation ?? this.getStringAttribute('generation');
  }
  public set generation(value: string | undefined) {
    this._generation = value;
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

  // sku - computed: false, optional: false, required: true
  private _sku: string;
  public get sku() {
    return this._sku;
  }
  public set sku(value: string) {
    this._sku = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // vpn_type - computed: false, optional: true, required: false
  private _vpnType?: string;
  public get vpnType() {
    return this._vpnType;
  }
  public set vpnType(value: string | undefined) {
    this._vpnType = value;
  }

  // bgp_settings - computed: false, optional: true, required: false
  private _bgpSettings?: VirtualNetworkGatewayBgpSettings[];
  public get bgpSettings() {
    return this._bgpSettings;
  }
  public set bgpSettings(value: VirtualNetworkGatewayBgpSettings[] | undefined) {
    this._bgpSettings = value;
  }

  // ip_configuration - computed: false, optional: false, required: true
  private _ipConfiguration: VirtualNetworkGatewayIpConfiguration[];
  public get ipConfiguration() {
    return this._ipConfiguration;
  }
  public set ipConfiguration(value: VirtualNetworkGatewayIpConfiguration[]) {
    this._ipConfiguration = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualNetworkGatewayTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: VirtualNetworkGatewayTimeouts | undefined) {
    this._timeouts = value;
  }

  // vpn_client_configuration - computed: false, optional: true, required: false
  private _vpnClientConfiguration?: VirtualNetworkGatewayVpnClientConfiguration[];
  public get vpnClientConfiguration() {
    return this._vpnClientConfiguration;
  }
  public set vpnClientConfiguration(value: VirtualNetworkGatewayVpnClientConfiguration[] | undefined) {
    this._vpnClientConfiguration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      active_active: this._activeActive,
      default_local_network_gateway_id: this._defaultLocalNetworkGatewayId,
      enable_bgp: this._enableBgp,
      generation: this._generation,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      sku: this._sku,
      tags: this._tags,
      type: this._type,
      vpn_type: this._vpnType,
      bgp_settings: this._bgpSettings,
      ip_configuration: this._ipConfiguration,
      timeouts: this._timeouts,
      vpn_client_configuration: this._vpnClientConfiguration,
    };
  }
}
