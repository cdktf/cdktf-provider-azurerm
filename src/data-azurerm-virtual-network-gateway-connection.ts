// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_virtual_network_gateway_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermVirtualNetworkGatewayConnectionConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermVirtualNetworkGatewayConnectionTimeouts;
}
export class DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy extends ComplexComputedList {

  // dh_group - computed: true, optional: false, required: true
  public get dhGroup() {
    return this.getStringAttribute('dh_group');
  }

  // ike_encryption - computed: true, optional: false, required: true
  public get ikeEncryption() {
    return this.getStringAttribute('ike_encryption');
  }

  // ike_integrity - computed: true, optional: false, required: true
  public get ikeIntegrity() {
    return this.getStringAttribute('ike_integrity');
  }

  // ipsec_encryption - computed: true, optional: false, required: true
  public get ipsecEncryption() {
    return this.getStringAttribute('ipsec_encryption');
  }

  // ipsec_integrity - computed: true, optional: false, required: true
  public get ipsecIntegrity() {
    return this.getStringAttribute('ipsec_integrity');
  }

  // pfs_group - computed: true, optional: false, required: true
  public get pfsGroup() {
    return this.getStringAttribute('pfs_group');
  }

  // sa_datasize - computed: true, optional: false, required: true
  public get saDatasize() {
    return this.getNumberAttribute('sa_datasize');
  }

  // sa_lifetime - computed: true, optional: false, required: true
  public get saLifetime() {
    return this.getNumberAttribute('sa_lifetime');
  }
}
export interface DataAzurermVirtualNetworkGatewayConnectionTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermVirtualNetworkGatewayConnection extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermVirtualNetworkGatewayConnectionConfig) {
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_key - computed: true, optional: false, required: true
  public get authorizationKey() {
    return this.getStringAttribute('authorization_key');
  }

  // connection_protocol - computed: true, optional: false, required: true
  public get connectionProtocol() {
    return this.getStringAttribute('connection_protocol');
  }

  // egress_bytes_transferred - computed: true, optional: false, required: true
  public get egressBytesTransferred() {
    return this.getNumberAttribute('egress_bytes_transferred');
  }

  // enable_bgp - computed: true, optional: false, required: true
  public get enableBgp() {
    return this.getBooleanAttribute('enable_bgp');
  }

  // express_route_circuit_id - computed: true, optional: false, required: true
  public get expressRouteCircuitId() {
    return this.getStringAttribute('express_route_circuit_id');
  }

  // express_route_gateway_bypass - computed: true, optional: false, required: true
  public get expressRouteGatewayBypass() {
    return this.getBooleanAttribute('express_route_gateway_bypass');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ingress_bytes_transferred - computed: true, optional: false, required: true
  public get ingressBytesTransferred() {
    return this.getNumberAttribute('ingress_bytes_transferred');
  }

  // ipsec_policy - computed: true, optional: false, required: true
  public ipsecPolicy(index: string) {
    return new DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy(this, 'ipsec_policy', index);
  }

  // local_network_gateway_id - computed: true, optional: false, required: true
  public get localNetworkGatewayId() {
    return this.getStringAttribute('local_network_gateway_id');
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // peer_virtual_network_gateway_id - computed: true, optional: false, required: true
  public get peerVirtualNetworkGatewayId() {
    return this.getStringAttribute('peer_virtual_network_gateway_id');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // resource_guid - computed: true, optional: false, required: true
  public get resourceGuid() {
    return this.getStringAttribute('resource_guid');
  }

  // routing_weight - computed: true, optional: false, required: true
  public get routingWeight() {
    return this.getNumberAttribute('routing_weight');
  }

  // shared_key - computed: true, optional: false, required: true
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_policy_based_traffic_selectors - computed: true, optional: false, required: true
  public get usePolicyBasedTrafficSelectors() {
    return this.getBooleanAttribute('use_policy_based_traffic_selectors');
  }

  // virtual_network_gateway_id - computed: true, optional: false, required: true
  public get virtualNetworkGatewayId() {
    return this.getStringAttribute('virtual_network_gateway_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermVirtualNetworkGatewayConnectionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermVirtualNetworkGatewayConnectionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
