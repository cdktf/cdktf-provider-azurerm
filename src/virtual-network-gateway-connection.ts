// https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VirtualNetworkGatewayConnectionConfig extends TerraformMetaArguments {
  readonly authorizationKey?: string;
  readonly connectionProtocol?: string;
  readonly enableBgp?: boolean;
  readonly expressRouteCircuitId?: string;
  readonly expressRouteGatewayBypass?: boolean;
  readonly localNetworkGatewayId?: string;
  readonly location: string;
  readonly name: string;
  readonly peerVirtualNetworkGatewayId?: string;
  readonly resourceGroupName: string;
  readonly routingWeight?: number;
  readonly sharedKey?: string;
  readonly tags?: { [key: string]: string };
  readonly type: string;
  readonly usePolicyBasedTrafficSelectors?: boolean;
  readonly virtualNetworkGatewayId: string;
  /** ipsec_policy block */
  readonly ipsecPolicy?: VirtualNetworkGatewayConnectionIpsecPolicy[];
  /** timeouts block */
  readonly timeouts?: VirtualNetworkGatewayConnectionTimeouts;
}
export interface VirtualNetworkGatewayConnectionIpsecPolicy {
  readonly dhGroup: string;
  readonly ikeEncryption: string;
  readonly ikeIntegrity: string;
  readonly ipsecEncryption: string;
  readonly ipsecIntegrity: string;
  readonly pfsGroup: string;
  readonly saDatasize?: number;
  readonly saLifetime?: number;
}
export interface VirtualNetworkGatewayConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class VirtualNetworkGatewayConnection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VirtualNetworkGatewayConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_network_gateway_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authorizationKey = config.authorizationKey;
    this._connectionProtocol = config.connectionProtocol;
    this._enableBgp = config.enableBgp;
    this._expressRouteCircuitId = config.expressRouteCircuitId;
    this._expressRouteGatewayBypass = config.expressRouteGatewayBypass;
    this._localNetworkGatewayId = config.localNetworkGatewayId;
    this._location = config.location;
    this._name = config.name;
    this._peerVirtualNetworkGatewayId = config.peerVirtualNetworkGatewayId;
    this._resourceGroupName = config.resourceGroupName;
    this._routingWeight = config.routingWeight;
    this._sharedKey = config.sharedKey;
    this._tags = config.tags;
    this._type = config.type;
    this._usePolicyBasedTrafficSelectors = config.usePolicyBasedTrafficSelectors;
    this._virtualNetworkGatewayId = config.virtualNetworkGatewayId;
    this._ipsecPolicy = config.ipsecPolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_key - computed: false, optional: true, required: false
  private _authorizationKey?: string;
  public get authorizationKey() {
    return this._authorizationKey;
  }
  public set authorizationKey(value: string | undefined) {
    this._authorizationKey = value;
  }

  // connection_protocol - computed: true, optional: true, required: false
  private _connectionProtocol?: string;
  public get connectionProtocol() {
    return this._connectionProtocol ?? this.getStringAttribute('connection_protocol');
  }
  public set connectionProtocol(value: string | undefined) {
    this._connectionProtocol = value;
  }

  // enable_bgp - computed: true, optional: true, required: false
  private _enableBgp?: boolean;
  public get enableBgp() {
    return this._enableBgp ?? this.getBooleanAttribute('enable_bgp');
  }
  public set enableBgp(value: boolean | undefined) {
    this._enableBgp = value;
  }

  // express_route_circuit_id - computed: false, optional: true, required: false
  private _expressRouteCircuitId?: string;
  public get expressRouteCircuitId() {
    return this._expressRouteCircuitId;
  }
  public set expressRouteCircuitId(value: string | undefined) {
    this._expressRouteCircuitId = value;
  }

  // express_route_gateway_bypass - computed: true, optional: true, required: false
  private _expressRouteGatewayBypass?: boolean;
  public get expressRouteGatewayBypass() {
    return this._expressRouteGatewayBypass ?? this.getBooleanAttribute('express_route_gateway_bypass');
  }
  public set expressRouteGatewayBypass(value: boolean | undefined) {
    this._expressRouteGatewayBypass = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // local_network_gateway_id - computed: false, optional: true, required: false
  private _localNetworkGatewayId?: string;
  public get localNetworkGatewayId() {
    return this._localNetworkGatewayId;
  }
  public set localNetworkGatewayId(value: string | undefined) {
    this._localNetworkGatewayId = value;
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

  // peer_virtual_network_gateway_id - computed: false, optional: true, required: false
  private _peerVirtualNetworkGatewayId?: string;
  public get peerVirtualNetworkGatewayId() {
    return this._peerVirtualNetworkGatewayId;
  }
  public set peerVirtualNetworkGatewayId(value: string | undefined) {
    this._peerVirtualNetworkGatewayId = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // routing_weight - computed: true, optional: true, required: false
  private _routingWeight?: number;
  public get routingWeight() {
    return this._routingWeight ?? this.getNumberAttribute('routing_weight');
  }
  public set routingWeight(value: number | undefined) {
    this._routingWeight = value;
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string;
  public get sharedKey() {
    return this._sharedKey;
  }
  public set sharedKey(value: string | undefined) {
    this._sharedKey = value;
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

  // use_policy_based_traffic_selectors - computed: true, optional: true, required: false
  private _usePolicyBasedTrafficSelectors?: boolean;
  public get usePolicyBasedTrafficSelectors() {
    return this._usePolicyBasedTrafficSelectors ?? this.getBooleanAttribute('use_policy_based_traffic_selectors');
  }
  public set usePolicyBasedTrafficSelectors(value: boolean | undefined) {
    this._usePolicyBasedTrafficSelectors = value;
  }

  // virtual_network_gateway_id - computed: false, optional: false, required: true
  private _virtualNetworkGatewayId: string;
  public get virtualNetworkGatewayId() {
    return this._virtualNetworkGatewayId;
  }
  public set virtualNetworkGatewayId(value: string) {
    this._virtualNetworkGatewayId = value;
  }

  // ipsec_policy - computed: false, optional: true, required: false
  private _ipsecPolicy?: VirtualNetworkGatewayConnectionIpsecPolicy[];
  public get ipsecPolicy() {
    return this._ipsecPolicy;
  }
  public set ipsecPolicy(value: VirtualNetworkGatewayConnectionIpsecPolicy[] | undefined) {
    this._ipsecPolicy = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualNetworkGatewayConnectionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: VirtualNetworkGatewayConnectionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_key: this._authorizationKey,
      connection_protocol: this._connectionProtocol,
      enable_bgp: this._enableBgp,
      express_route_circuit_id: this._expressRouteCircuitId,
      express_route_gateway_bypass: this._expressRouteGatewayBypass,
      local_network_gateway_id: this._localNetworkGatewayId,
      location: this._location,
      name: this._name,
      peer_virtual_network_gateway_id: this._peerVirtualNetworkGatewayId,
      resource_group_name: this._resourceGroupName,
      routing_weight: this._routingWeight,
      shared_key: this._sharedKey,
      tags: this._tags,
      type: this._type,
      use_policy_based_traffic_selectors: this._usePolicyBasedTrafficSelectors,
      virtual_network_gateway_id: this._virtualNetworkGatewayId,
      ipsec_policy: this._ipsecPolicy,
      timeouts: this._timeouts,
    };
  }
}
