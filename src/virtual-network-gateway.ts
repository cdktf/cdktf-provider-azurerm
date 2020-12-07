// https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualNetworkGatewayConfig extends cdktf.TerraformMetaArguments {
  readonly activeActive?: boolean;
  readonly defaultLocalNetworkGatewayId?: string;
  readonly enableBgp?: boolean;
  readonly generation?: string;
  readonly location: string;
  readonly name: string;
  readonly privateIpAddressEnabled?: boolean;
  readonly resourceGroupName: string;
  readonly sku: string;
  readonly tags?: { [key: string]: string };
  readonly type: string;
  readonly vpnType?: string;
  /** bgp_settings block */
  readonly bgpSettings?: VirtualNetworkGatewayBgpSettings[];
  /** custom_route block */
  readonly customRoute?: VirtualNetworkGatewayCustomRoute[];
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

function virtualNetworkGatewayBgpSettingsToTerraform(struct?: VirtualNetworkGatewayBgpSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    peer_weight: cdktf.numberToTerraform(struct!.peerWeight),
    peering_address: cdktf.stringToTerraform(struct!.peeringAddress),
  }
}

export interface VirtualNetworkGatewayCustomRoute {
  readonly addressPrefixes?: string[];
}

function virtualNetworkGatewayCustomRouteToTerraform(struct?: VirtualNetworkGatewayCustomRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.addressPrefixes),
  }
}

export interface VirtualNetworkGatewayIpConfiguration {
  readonly name?: string;
  readonly privateIpAddressAllocation?: string;
  readonly publicIpAddressId: string;
  readonly subnetId: string;
}

function virtualNetworkGatewayIpConfigurationToTerraform(struct?: VirtualNetworkGatewayIpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    private_ip_address_allocation: cdktf.stringToTerraform(struct!.privateIpAddressAllocation),
    public_ip_address_id: cdktf.stringToTerraform(struct!.publicIpAddressId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface VirtualNetworkGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function virtualNetworkGatewayTimeoutsToTerraform(struct?: VirtualNetworkGatewayTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate {
  readonly name: string;
  readonly thumbprint: string;
}

function virtualNetworkGatewayVpnClientConfigurationRevokedCertificateToTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
  }
}

export interface VirtualNetworkGatewayVpnClientConfigurationRootCertificate {
  readonly name: string;
  readonly publicCertData: string;
}

function virtualNetworkGatewayVpnClientConfigurationRootCertificateToTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationRootCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    public_cert_data: cdktf.stringToTerraform(struct!.publicCertData),
  }
}

export interface VirtualNetworkGatewayVpnClientConfiguration {
  readonly aadAudience?: string;
  readonly aadIssuer?: string;
  readonly aadTenant?: string;
  readonly addressSpace: string[];
  readonly radiusServerAddress?: string;
  readonly radiusServerSecret?: string;
  readonly vpnClientProtocols?: string[];
  /** revoked_certificate block */
  readonly revokedCertificate?: VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate[];
  /** root_certificate block */
  readonly rootCertificate?: VirtualNetworkGatewayVpnClientConfigurationRootCertificate[];
}

function virtualNetworkGatewayVpnClientConfigurationToTerraform(struct?: VirtualNetworkGatewayVpnClientConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aad_audience: cdktf.stringToTerraform(struct!.aadAudience),
    aad_issuer: cdktf.stringToTerraform(struct!.aadIssuer),
    aad_tenant: cdktf.stringToTerraform(struct!.aadTenant),
    address_space: cdktf.listMapper(cdktf.stringToTerraform)(struct!.addressSpace),
    radius_server_address: cdktf.stringToTerraform(struct!.radiusServerAddress),
    radius_server_secret: cdktf.stringToTerraform(struct!.radiusServerSecret),
    vpn_client_protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.vpnClientProtocols),
    revoked_certificate: cdktf.listMapper(virtualNetworkGatewayVpnClientConfigurationRevokedCertificateToTerraform)(struct!.revokedCertificate),
    root_certificate: cdktf.listMapper(virtualNetworkGatewayVpnClientConfigurationRootCertificateToTerraform)(struct!.rootCertificate),
  }
}


// Resource

export class VirtualNetworkGateway extends cdktf.TerraformResource {

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
    this._privateIpAddressEnabled = config.privateIpAddressEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._type = config.type;
    this._vpnType = config.vpnType;
    this._bgpSettings = config.bgpSettings;
    this._customRoute = config.customRoute;
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
    return this.getBooleanAttribute('active_active');
  }
  public set activeActive(value: boolean) {
    this._activeActive = value;
  }
  public resetActiveActive() {
    this._activeActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeActiveInput() {
    return this._activeActive
  }

  // default_local_network_gateway_id - computed: false, optional: true, required: false
  private _defaultLocalNetworkGatewayId?: string;
  public get defaultLocalNetworkGatewayId() {
    return this.getStringAttribute('default_local_network_gateway_id');
  }
  public set defaultLocalNetworkGatewayId(value: string ) {
    this._defaultLocalNetworkGatewayId = value;
  }
  public resetDefaultLocalNetworkGatewayId() {
    this._defaultLocalNetworkGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLocalNetworkGatewayIdInput() {
    return this._defaultLocalNetworkGatewayId
  }

  // enable_bgp - computed: true, optional: true, required: false
  private _enableBgp?: boolean;
  public get enableBgp() {
    return this.getBooleanAttribute('enable_bgp');
  }
  public set enableBgp(value: boolean) {
    this._enableBgp = value;
  }
  public resetEnableBgp() {
    this._enableBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBgpInput() {
    return this._enableBgp
  }

  // generation - computed: true, optional: true, required: false
  private _generation?: string;
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation
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

  // private_ip_address_enabled - computed: false, optional: true, required: false
  private _privateIpAddressEnabled?: boolean;
  public get privateIpAddressEnabled() {
    return this.getBooleanAttribute('private_ip_address_enabled');
  }
  public set privateIpAddressEnabled(value: boolean ) {
    this._privateIpAddressEnabled = value;
  }
  public resetPrivateIpAddressEnabled() {
    this._privateIpAddressEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressEnabledInput() {
    return this._privateIpAddressEnabled
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

  // sku - computed: false, optional: false, required: true
  private _sku: string;
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
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

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // vpn_type - computed: false, optional: true, required: false
  private _vpnType?: string;
  public get vpnType() {
    return this.getStringAttribute('vpn_type');
  }
  public set vpnType(value: string ) {
    this._vpnType = value;
  }
  public resetVpnType() {
    this._vpnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnTypeInput() {
    return this._vpnType
  }

  // bgp_settings - computed: false, optional: true, required: false
  private _bgpSettings?: VirtualNetworkGatewayBgpSettings[];
  public get bgpSettings() {
    return this.interpolationForAttribute('bgp_settings') as any;
  }
  public set bgpSettings(value: VirtualNetworkGatewayBgpSettings[] ) {
    this._bgpSettings = value;
  }
  public resetBgpSettings() {
    this._bgpSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpSettingsInput() {
    return this._bgpSettings
  }

  // custom_route - computed: false, optional: true, required: false
  private _customRoute?: VirtualNetworkGatewayCustomRoute[];
  public get customRoute() {
    return this.interpolationForAttribute('custom_route') as any;
  }
  public set customRoute(value: VirtualNetworkGatewayCustomRoute[] ) {
    this._customRoute = value;
  }
  public resetCustomRoute() {
    this._customRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRouteInput() {
    return this._customRoute
  }

  // ip_configuration - computed: false, optional: false, required: true
  private _ipConfiguration: VirtualNetworkGatewayIpConfiguration[];
  public get ipConfiguration() {
    return this.interpolationForAttribute('ip_configuration') as any;
  }
  public set ipConfiguration(value: VirtualNetworkGatewayIpConfiguration[]) {
    this._ipConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualNetworkGatewayTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualNetworkGatewayTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // vpn_client_configuration - computed: false, optional: true, required: false
  private _vpnClientConfiguration?: VirtualNetworkGatewayVpnClientConfiguration[];
  public get vpnClientConfiguration() {
    return this.interpolationForAttribute('vpn_client_configuration') as any;
  }
  public set vpnClientConfiguration(value: VirtualNetworkGatewayVpnClientConfiguration[] ) {
    this._vpnClientConfiguration = value;
  }
  public resetVpnClientConfiguration() {
    this._vpnClientConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnClientConfigurationInput() {
    return this._vpnClientConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_active: cdktf.booleanToTerraform(this._activeActive),
      default_local_network_gateway_id: cdktf.stringToTerraform(this._defaultLocalNetworkGatewayId),
      enable_bgp: cdktf.booleanToTerraform(this._enableBgp),
      generation: cdktf.stringToTerraform(this._generation),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      private_ip_address_enabled: cdktf.booleanToTerraform(this._privateIpAddressEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      vpn_type: cdktf.stringToTerraform(this._vpnType),
      bgp_settings: cdktf.listMapper(virtualNetworkGatewayBgpSettingsToTerraform)(this._bgpSettings),
      custom_route: cdktf.listMapper(virtualNetworkGatewayCustomRouteToTerraform)(this._customRoute),
      ip_configuration: cdktf.listMapper(virtualNetworkGatewayIpConfigurationToTerraform)(this._ipConfiguration),
      timeouts: virtualNetworkGatewayTimeoutsToTerraform(this._timeouts),
      vpn_client_configuration: cdktf.listMapper(virtualNetworkGatewayVpnClientConfigurationToTerraform)(this._vpnClientConfiguration),
    };
  }
}
