// https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VirtualHubConnectionConfig extends TerraformMetaArguments {
  readonly hubToVitualNetworkTrafficAllowed?: boolean;
  readonly internetSecurityEnabled?: boolean;
  readonly name: string;
  readonly remoteVirtualNetworkId: string;
  readonly virtualHubId: string;
  readonly vitualNetworkToHubGatewaysTrafficAllowed?: boolean;
  /** routing block */
  readonly routing?: VirtualHubConnectionRouting[];
  /** timeouts block */
  readonly timeouts?: VirtualHubConnectionTimeouts;
}
export interface VirtualHubConnectionRoutingPropagatedRouteTable {
  readonly labels?: string[];
  readonly routeTableIds?: string[];
}
export interface VirtualHubConnectionRoutingStaticVnetRoute {
  readonly addressPrefixes?: string[];
  readonly name?: string;
  readonly nextHopIpAddress?: string;
}
export interface VirtualHubConnectionRouting {
  readonly associatedRouteTableId?: string;
  /** propagated_route_table block */
  readonly propagatedRouteTable?: VirtualHubConnectionRoutingPropagatedRouteTable[];
  /** static_vnet_route block */
  readonly staticVnetRoute?: VirtualHubConnectionRoutingStaticVnetRoute[];
}
export interface VirtualHubConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class VirtualHubConnection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VirtualHubConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_hub_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._hubToVitualNetworkTrafficAllowed = config.hubToVitualNetworkTrafficAllowed;
    this._internetSecurityEnabled = config.internetSecurityEnabled;
    this._name = config.name;
    this._remoteVirtualNetworkId = config.remoteVirtualNetworkId;
    this._virtualHubId = config.virtualHubId;
    this._vitualNetworkToHubGatewaysTrafficAllowed = config.vitualNetworkToHubGatewaysTrafficAllowed;
    this._routing = config.routing;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hub_to_vitual_network_traffic_allowed - computed: false, optional: true, required: false
  private _hubToVitualNetworkTrafficAllowed?: boolean;
  public get hubToVitualNetworkTrafficAllowed() {
    return this.getBooleanAttribute('hub_to_vitual_network_traffic_allowed');
  }
  public set hubToVitualNetworkTrafficAllowed(value: boolean ) {
    this._hubToVitualNetworkTrafficAllowed = value;
  }
  public resetHubToVitualNetworkTrafficAllowed() {
    this._hubToVitualNetworkTrafficAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubToVitualNetworkTrafficAllowedInput() {
    return this._hubToVitualNetworkTrafficAllowed
  }

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

  // remote_virtual_network_id - computed: false, optional: false, required: true
  private _remoteVirtualNetworkId: string;
  public get remoteVirtualNetworkId() {
    return this.getStringAttribute('remote_virtual_network_id');
  }
  public set remoteVirtualNetworkId(value: string) {
    this._remoteVirtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVirtualNetworkIdInput() {
    return this._remoteVirtualNetworkId
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

  // vitual_network_to_hub_gateways_traffic_allowed - computed: false, optional: true, required: false
  private _vitualNetworkToHubGatewaysTrafficAllowed?: boolean;
  public get vitualNetworkToHubGatewaysTrafficAllowed() {
    return this.getBooleanAttribute('vitual_network_to_hub_gateways_traffic_allowed');
  }
  public set vitualNetworkToHubGatewaysTrafficAllowed(value: boolean ) {
    this._vitualNetworkToHubGatewaysTrafficAllowed = value;
  }
  public resetVitualNetworkToHubGatewaysTrafficAllowed() {
    this._vitualNetworkToHubGatewaysTrafficAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vitualNetworkToHubGatewaysTrafficAllowedInput() {
    return this._vitualNetworkToHubGatewaysTrafficAllowed
  }

  // routing - computed: false, optional: true, required: false
  private _routing?: VirtualHubConnectionRouting[];
  public get routing() {
    return this.interpolationForAttribute('routing') as any;
  }
  public set routing(value: VirtualHubConnectionRouting[] ) {
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
  private _timeouts?: VirtualHubConnectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualHubConnectionTimeouts ) {
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
      hub_to_vitual_network_traffic_allowed: this._hubToVitualNetworkTrafficAllowed,
      internet_security_enabled: this._internetSecurityEnabled,
      name: this._name,
      remote_virtual_network_id: this._remoteVirtualNetworkId,
      virtual_hub_id: this._virtualHubId,
      vitual_network_to_hub_gateways_traffic_allowed: this._vitualNetworkToHubGatewaysTrafficAllowed,
      routing: this._routing,
      timeouts: this._timeouts,
    };
  }
}
