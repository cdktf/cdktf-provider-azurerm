// https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressRouteCircuitPeeringConfig extends cdktf.TerraformMetaArguments {
  readonly expressRouteCircuitName: string;
  readonly peerAsn?: number;
  readonly peeringType: string;
  readonly primaryPeerAddressPrefix: string;
  readonly resourceGroupName: string;
  readonly routeFilterId?: string;
  readonly secondaryPeerAddressPrefix: string;
  readonly sharedKey?: string;
  readonly vlanId: number;
  /** ipv6 block */
  readonly ipv6?: ExpressRouteCircuitPeeringIpv6[];
  /** microsoft_peering_config block */
  readonly microsoftPeeringConfig?: ExpressRouteCircuitPeeringMicrosoftPeeringConfig[];
  /** timeouts block */
  readonly timeouts?: ExpressRouteCircuitPeeringTimeouts;
}
export interface ExpressRouteCircuitPeeringIpv6MicrosoftPeering {
  readonly advertisedPublicPrefixes?: string[];
  readonly customerAsn?: number;
  readonly routingRegistryName?: string;
}

function expressRouteCircuitPeeringIpv6MicrosoftPeeringToTerraform(struct?: ExpressRouteCircuitPeeringIpv6MicrosoftPeering): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    advertised_public_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.advertisedPublicPrefixes),
    customer_asn: cdktf.numberToTerraform(struct!.customerAsn),
    routing_registry_name: cdktf.stringToTerraform(struct!.routingRegistryName),
  }
}

export interface ExpressRouteCircuitPeeringIpv6 {
  readonly primaryPeerAddressPrefix: string;
  readonly routeFilterId?: string;
  readonly secondaryPeerAddressPrefix: string;
  /** microsoft_peering block */
  readonly microsoftPeering: ExpressRouteCircuitPeeringIpv6MicrosoftPeering[];
}

function expressRouteCircuitPeeringIpv6ToTerraform(struct?: ExpressRouteCircuitPeeringIpv6): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    primary_peer_address_prefix: cdktf.stringToTerraform(struct!.primaryPeerAddressPrefix),
    route_filter_id: cdktf.stringToTerraform(struct!.routeFilterId),
    secondary_peer_address_prefix: cdktf.stringToTerraform(struct!.secondaryPeerAddressPrefix),
    microsoft_peering: cdktf.listMapper(expressRouteCircuitPeeringIpv6MicrosoftPeeringToTerraform)(struct!.microsoftPeering),
  }
}

export interface ExpressRouteCircuitPeeringMicrosoftPeeringConfig {
  readonly advertisedPublicPrefixes: string[];
  readonly customerAsn?: number;
  readonly routingRegistryName?: string;
}

function expressRouteCircuitPeeringMicrosoftPeeringConfigToTerraform(struct?: ExpressRouteCircuitPeeringMicrosoftPeeringConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    advertised_public_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.advertisedPublicPrefixes),
    customer_asn: cdktf.numberToTerraform(struct!.customerAsn),
    routing_registry_name: cdktf.stringToTerraform(struct!.routingRegistryName),
  }
}

export interface ExpressRouteCircuitPeeringTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function expressRouteCircuitPeeringTimeoutsToTerraform(struct?: ExpressRouteCircuitPeeringTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ExpressRouteCircuitPeering extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ExpressRouteCircuitPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_express_route_circuit_peering',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._expressRouteCircuitName = config.expressRouteCircuitName;
    this._peerAsn = config.peerAsn;
    this._peeringType = config.peeringType;
    this._primaryPeerAddressPrefix = config.primaryPeerAddressPrefix;
    this._resourceGroupName = config.resourceGroupName;
    this._routeFilterId = config.routeFilterId;
    this._secondaryPeerAddressPrefix = config.secondaryPeerAddressPrefix;
    this._sharedKey = config.sharedKey;
    this._vlanId = config.vlanId;
    this._ipv6 = config.ipv6;
    this._microsoftPeeringConfig = config.microsoftPeeringConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_asn - computed: true, optional: false, required: false
  public get azureAsn() {
    return this.getNumberAttribute('azure_asn');
  }

  // express_route_circuit_name - computed: false, optional: false, required: true
  private _expressRouteCircuitName: string;
  public get expressRouteCircuitName() {
    return this.getStringAttribute('express_route_circuit_name');
  }
  public set expressRouteCircuitName(value: string) {
    this._expressRouteCircuitName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteCircuitNameInput() {
    return this._expressRouteCircuitName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // peer_asn - computed: true, optional: true, required: false
  private _peerAsn?: number;
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }
  public set peerAsn(value: number) {
    this._peerAsn = value;
  }
  public resetPeerAsn() {
    this._peerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsnInput() {
    return this._peerAsn
  }

  // peering_type - computed: false, optional: false, required: true
  private _peeringType: string;
  public get peeringType() {
    return this.getStringAttribute('peering_type');
  }
  public set peeringType(value: string) {
    this._peeringType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringTypeInput() {
    return this._peeringType
  }

  // primary_azure_port - computed: true, optional: false, required: false
  public get primaryAzurePort() {
    return this.getStringAttribute('primary_azure_port');
  }

  // primary_peer_address_prefix - computed: false, optional: false, required: true
  private _primaryPeerAddressPrefix: string;
  public get primaryPeerAddressPrefix() {
    return this.getStringAttribute('primary_peer_address_prefix');
  }
  public set primaryPeerAddressPrefix(value: string) {
    this._primaryPeerAddressPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPeerAddressPrefixInput() {
    return this._primaryPeerAddressPrefix
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

  // route_filter_id - computed: false, optional: true, required: false
  private _routeFilterId?: string;
  public get routeFilterId() {
    return this.getStringAttribute('route_filter_id');
  }
  public set routeFilterId(value: string ) {
    this._routeFilterId = value;
  }
  public resetRouteFilterId() {
    this._routeFilterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeFilterIdInput() {
    return this._routeFilterId
  }

  // secondary_azure_port - computed: true, optional: false, required: false
  public get secondaryAzurePort() {
    return this.getStringAttribute('secondary_azure_port');
  }

  // secondary_peer_address_prefix - computed: false, optional: false, required: true
  private _secondaryPeerAddressPrefix: string;
  public get secondaryPeerAddressPrefix() {
    return this.getStringAttribute('secondary_peer_address_prefix');
  }
  public set secondaryPeerAddressPrefix(value: string) {
    this._secondaryPeerAddressPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPeerAddressPrefixInput() {
    return this._secondaryPeerAddressPrefix
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string;
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string ) {
    this._sharedKey = value;
  }
  public resetSharedKey() {
    this._sharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId: number;
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: ExpressRouteCircuitPeeringIpv6[];
  public get ipv6() {
    return this.interpolationForAttribute('ipv6') as any;
  }
  public set ipv6(value: ExpressRouteCircuitPeeringIpv6[] ) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6
  }

  // microsoft_peering_config - computed: false, optional: true, required: false
  private _microsoftPeeringConfig?: ExpressRouteCircuitPeeringMicrosoftPeeringConfig[];
  public get microsoftPeeringConfig() {
    return this.interpolationForAttribute('microsoft_peering_config') as any;
  }
  public set microsoftPeeringConfig(value: ExpressRouteCircuitPeeringMicrosoftPeeringConfig[] ) {
    this._microsoftPeeringConfig = value;
  }
  public resetMicrosoftPeeringConfig() {
    this._microsoftPeeringConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftPeeringConfigInput() {
    return this._microsoftPeeringConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ExpressRouteCircuitPeeringTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ExpressRouteCircuitPeeringTimeouts ) {
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
      express_route_circuit_name: cdktf.stringToTerraform(this._expressRouteCircuitName),
      peer_asn: cdktf.numberToTerraform(this._peerAsn),
      peering_type: cdktf.stringToTerraform(this._peeringType),
      primary_peer_address_prefix: cdktf.stringToTerraform(this._primaryPeerAddressPrefix),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      route_filter_id: cdktf.stringToTerraform(this._routeFilterId),
      secondary_peer_address_prefix: cdktf.stringToTerraform(this._secondaryPeerAddressPrefix),
      shared_key: cdktf.stringToTerraform(this._sharedKey),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      ipv6: cdktf.listMapper(expressRouteCircuitPeeringIpv6ToTerraform)(this._ipv6),
      microsoft_peering_config: cdktf.listMapper(expressRouteCircuitPeeringMicrosoftPeeringConfigToTerraform)(this._microsoftPeeringConfig),
      timeouts: expressRouteCircuitPeeringTimeoutsToTerraform(this._timeouts),
    };
  }
}
