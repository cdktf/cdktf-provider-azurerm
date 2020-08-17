// https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ExpressRouteCircuitPeeringConfig extends TerraformMetaArguments {
  readonly expressRouteCircuitName: string;
  readonly peerAsn?: number;
  readonly peeringType: string;
  readonly primaryPeerAddressPrefix: string;
  readonly resourceGroupName: string;
  readonly secondaryPeerAddressPrefix: string;
  readonly sharedKey?: string;
  readonly vlanId: number;
  /** microsoft_peering_config block */
  readonly microsoftPeeringConfig?: ExpressRouteCircuitPeeringMicrosoftPeeringConfig[];
  /** timeouts block */
  readonly timeouts?: ExpressRouteCircuitPeeringTimeouts;
}
export interface ExpressRouteCircuitPeeringMicrosoftPeeringConfig {
  readonly advertisedPublicPrefixes: string[];
}
export interface ExpressRouteCircuitPeeringTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ExpressRouteCircuitPeering extends TerraformResource {

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
    this._secondaryPeerAddressPrefix = config.secondaryPeerAddressPrefix;
    this._sharedKey = config.sharedKey;
    this._vlanId = config.vlanId;
    this._microsoftPeeringConfig = config.microsoftPeeringConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_asn - computed: true, optional: false, required: true
  public get azureAsn() {
    return this.getNumberAttribute('azure_asn');
  }

  // express_route_circuit_name - computed: false, optional: false, required: true
  private _expressRouteCircuitName: string;
  public get expressRouteCircuitName() {
    return this._expressRouteCircuitName;
  }
  public set expressRouteCircuitName(value: string) {
    this._expressRouteCircuitName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // peer_asn - computed: true, optional: true, required: false
  private _peerAsn?: number;
  public get peerAsn() {
    return this._peerAsn ?? this.getNumberAttribute('peer_asn');
  }
  public set peerAsn(value: number | undefined) {
    this._peerAsn = value;
  }

  // peering_type - computed: false, optional: false, required: true
  private _peeringType: string;
  public get peeringType() {
    return this._peeringType;
  }
  public set peeringType(value: string) {
    this._peeringType = value;
  }

  // primary_azure_port - computed: true, optional: false, required: true
  public get primaryAzurePort() {
    return this.getStringAttribute('primary_azure_port');
  }

  // primary_peer_address_prefix - computed: false, optional: false, required: true
  private _primaryPeerAddressPrefix: string;
  public get primaryPeerAddressPrefix() {
    return this._primaryPeerAddressPrefix;
  }
  public set primaryPeerAddressPrefix(value: string) {
    this._primaryPeerAddressPrefix = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // secondary_azure_port - computed: true, optional: false, required: true
  public get secondaryAzurePort() {
    return this.getStringAttribute('secondary_azure_port');
  }

  // secondary_peer_address_prefix - computed: false, optional: false, required: true
  private _secondaryPeerAddressPrefix: string;
  public get secondaryPeerAddressPrefix() {
    return this._secondaryPeerAddressPrefix;
  }
  public set secondaryPeerAddressPrefix(value: string) {
    this._secondaryPeerAddressPrefix = value;
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string;
  public get sharedKey() {
    return this._sharedKey;
  }
  public set sharedKey(value: string | undefined) {
    this._sharedKey = value;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId: number;
  public get vlanId() {
    return this._vlanId;
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }

  // microsoft_peering_config - computed: false, optional: true, required: false
  private _microsoftPeeringConfig?: ExpressRouteCircuitPeeringMicrosoftPeeringConfig[];
  public get microsoftPeeringConfig() {
    return this._microsoftPeeringConfig;
  }
  public set microsoftPeeringConfig(value: ExpressRouteCircuitPeeringMicrosoftPeeringConfig[] | undefined) {
    this._microsoftPeeringConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ExpressRouteCircuitPeeringTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ExpressRouteCircuitPeeringTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      express_route_circuit_name: this._expressRouteCircuitName,
      peer_asn: this._peerAsn,
      peering_type: this._peeringType,
      primary_peer_address_prefix: this._primaryPeerAddressPrefix,
      resource_group_name: this._resourceGroupName,
      secondary_peer_address_prefix: this._secondaryPeerAddressPrefix,
      shared_key: this._sharedKey,
      vlan_id: this._vlanId,
      microsoft_peering_config: this._microsoftPeeringConfig,
      timeouts: this._timeouts,
    };
  }
}
