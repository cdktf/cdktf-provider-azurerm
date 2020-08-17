// https://www.terraform.io/docs/providers/azurerm/r/virtual_network_peering.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VirtualNetworkPeeringConfig extends TerraformMetaArguments {
  readonly allowForwardedTraffic?: boolean;
  readonly allowGatewayTransit?: boolean;
  readonly allowVirtualNetworkAccess?: boolean;
  readonly name: string;
  readonly remoteVirtualNetworkId: string;
  readonly resourceGroupName: string;
  readonly useRemoteGateways?: boolean;
  readonly virtualNetworkName: string;
  /** timeouts block */
  readonly timeouts?: VirtualNetworkPeeringTimeouts;
}
export interface VirtualNetworkPeeringTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class VirtualNetworkPeering extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VirtualNetworkPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_network_peering',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowForwardedTraffic = config.allowForwardedTraffic;
    this._allowGatewayTransit = config.allowGatewayTransit;
    this._allowVirtualNetworkAccess = config.allowVirtualNetworkAccess;
    this._name = config.name;
    this._remoteVirtualNetworkId = config.remoteVirtualNetworkId;
    this._resourceGroupName = config.resourceGroupName;
    this._useRemoteGateways = config.useRemoteGateways;
    this._virtualNetworkName = config.virtualNetworkName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_forwarded_traffic - computed: true, optional: true, required: false
  private _allowForwardedTraffic?: boolean;
  public get allowForwardedTraffic() {
    return this._allowForwardedTraffic ?? this.getBooleanAttribute('allow_forwarded_traffic');
  }
  public set allowForwardedTraffic(value: boolean | undefined) {
    this._allowForwardedTraffic = value;
  }

  // allow_gateway_transit - computed: true, optional: true, required: false
  private _allowGatewayTransit?: boolean;
  public get allowGatewayTransit() {
    return this._allowGatewayTransit ?? this.getBooleanAttribute('allow_gateway_transit');
  }
  public set allowGatewayTransit(value: boolean | undefined) {
    this._allowGatewayTransit = value;
  }

  // allow_virtual_network_access - computed: false, optional: true, required: false
  private _allowVirtualNetworkAccess?: boolean;
  public get allowVirtualNetworkAccess() {
    return this._allowVirtualNetworkAccess;
  }
  public set allowVirtualNetworkAccess(value: boolean | undefined) {
    this._allowVirtualNetworkAccess = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // remote_virtual_network_id - computed: false, optional: false, required: true
  private _remoteVirtualNetworkId: string;
  public get remoteVirtualNetworkId() {
    return this._remoteVirtualNetworkId;
  }
  public set remoteVirtualNetworkId(value: string) {
    this._remoteVirtualNetworkId = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // use_remote_gateways - computed: true, optional: true, required: false
  private _useRemoteGateways?: boolean;
  public get useRemoteGateways() {
    return this._useRemoteGateways ?? this.getBooleanAttribute('use_remote_gateways');
  }
  public set useRemoteGateways(value: boolean | undefined) {
    this._useRemoteGateways = value;
  }

  // virtual_network_name - computed: false, optional: false, required: true
  private _virtualNetworkName: string;
  public get virtualNetworkName() {
    return this._virtualNetworkName;
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualNetworkPeeringTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: VirtualNetworkPeeringTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_forwarded_traffic: this._allowForwardedTraffic,
      allow_gateway_transit: this._allowGatewayTransit,
      allow_virtual_network_access: this._allowVirtualNetworkAccess,
      name: this._name,
      remote_virtual_network_id: this._remoteVirtualNetworkId,
      resource_group_name: this._resourceGroupName,
      use_remote_gateways: this._useRemoteGateways,
      virtual_network_name: this._virtualNetworkName,
      timeouts: this._timeouts,
    };
  }
}
