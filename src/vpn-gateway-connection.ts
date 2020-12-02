// https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VpnGatewayConnectionConfig extends TerraformMetaArguments {
  readonly internetSecurityEnabled?: boolean;
  readonly name: string;
  readonly remoteVpnSiteId: string;
  readonly vpnGatewayId: string;
  /** routing block */
  readonly routing?: VpnGatewayConnectionRouting[];
  /** timeouts block */
  readonly timeouts?: VpnGatewayConnectionTimeouts;
  /** vpn_link block */
  readonly vpnLink: VpnGatewayConnectionVpnLink[];
}
export interface VpnGatewayConnectionRouting {
  readonly associatedRouteTable: string;
  readonly propagatedRouteTables: string[];
}
export interface VpnGatewayConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}
export interface VpnGatewayConnectionVpnLinkIpsecPolicy {
  readonly dhGroup: string;
  readonly encryptionAlgorithm: string;
  readonly ikeEncryptionAlgorithm: string;
  readonly ikeIntegrityAlgorithm: string;
  readonly integrityAlgorithm: string;
  readonly pfsGroup: string;
  readonly saDataSizeKb: number;
  readonly saLifetimeSec: number;
}
export interface VpnGatewayConnectionVpnLink {
  readonly bandwidthMbps?: number;
  readonly bgpEnabled?: boolean;
  readonly localAzureIpAddressEnabled?: boolean;
  readonly name: string;
  readonly policyBasedTrafficSelectorEnabled?: boolean;
  readonly protocol?: string;
  readonly ratelimitEnabled?: boolean;
  readonly routeWeight?: number;
  readonly sharedKey?: string;
  readonly vpnSiteLinkId: string;
  /** ipsec_policy block */
  readonly ipsecPolicy?: VpnGatewayConnectionVpnLinkIpsecPolicy[];
}

// Resource

export class VpnGatewayConnection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpnGatewayConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_vpn_gateway_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._internetSecurityEnabled = config.internetSecurityEnabled;
    this._name = config.name;
    this._remoteVpnSiteId = config.remoteVpnSiteId;
    this._vpnGatewayId = config.vpnGatewayId;
    this._routing = config.routing;
    this._timeouts = config.timeouts;
    this._vpnLink = config.vpnLink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_security_enabled - computed: false, optional: true, required: false
  private _internetSecurityEnabled?: boolean;
  public get internetSecurityEnabled() {
    return this.getBooleanAttribute('internet_security_enabled');
  }
  public set internetSecurityEnabled(value: boolean ) {
    this._internetSecurityEnabled = value;
  }
  public resetInternetSecurityEnabled() {
    this._internetSecurityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetSecurityEnabledInput() {
    return this._internetSecurityEnabled
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

  // remote_vpn_site_id - computed: false, optional: false, required: true
  private _remoteVpnSiteId: string;
  public get remoteVpnSiteId() {
    return this.getStringAttribute('remote_vpn_site_id');
  }
  public set remoteVpnSiteId(value: string) {
    this._remoteVpnSiteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVpnSiteIdInput() {
    return this._remoteVpnSiteId
  }

  // vpn_gateway_id - computed: false, optional: false, required: true
  private _vpnGatewayId: string;
  public get vpnGatewayId() {
    return this.getStringAttribute('vpn_gateway_id');
  }
  public set vpnGatewayId(value: string) {
    this._vpnGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayIdInput() {
    return this._vpnGatewayId
  }

  // routing - computed: false, optional: true, required: false
  private _routing?: VpnGatewayConnectionRouting[];
  public get routing() {
    return this.interpolationForAttribute('routing') as any;
  }
  public set routing(value: VpnGatewayConnectionRouting[] ) {
    this._routing = value;
  }
  public resetRouting() {
    this._routing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpnGatewayConnectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VpnGatewayConnectionTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // vpn_link - computed: false, optional: false, required: true
  private _vpnLink: VpnGatewayConnectionVpnLink[];
  public get vpnLink() {
    return this.interpolationForAttribute('vpn_link') as any;
  }
  public set vpnLink(value: VpnGatewayConnectionVpnLink[]) {
    this._vpnLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnLinkInput() {
    return this._vpnLink
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      internet_security_enabled: this._internetSecurityEnabled,
      name: this._name,
      remote_vpn_site_id: this._remoteVpnSiteId,
      vpn_gateway_id: this._vpnGatewayId,
      routing: this._routing,
      timeouts: this._timeouts,
      vpn_link: this._vpnLink,
    };
  }
}
