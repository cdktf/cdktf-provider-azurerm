// https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualHubConnectionConfig extends cdktf.TerraformMetaArguments {
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

function virtualHubConnectionRoutingPropagatedRouteTableToTerraform(struct?: VirtualHubConnectionRoutingPropagatedRouteTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    labels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.labels),
    route_table_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.routeTableIds),
  }
}

export interface VirtualHubConnectionRoutingStaticVnetRoute {
  readonly addressPrefixes?: string[];
  readonly name?: string;
  readonly nextHopIpAddress?: string;
}

function virtualHubConnectionRoutingStaticVnetRouteToTerraform(struct?: VirtualHubConnectionRoutingStaticVnetRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.addressPrefixes),
    name: cdktf.stringToTerraform(struct!.name),
    next_hop_ip_address: cdktf.stringToTerraform(struct!.nextHopIpAddress),
  }
}

export interface VirtualHubConnectionRouting {
  readonly associatedRouteTableId?: string;
  /** propagated_route_table block */
  readonly propagatedRouteTable?: VirtualHubConnectionRoutingPropagatedRouteTable[];
  /** static_vnet_route block */
  readonly staticVnetRoute?: VirtualHubConnectionRoutingStaticVnetRoute[];
}

function virtualHubConnectionRoutingToTerraform(struct?: VirtualHubConnectionRouting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    associated_route_table_id: cdktf.stringToTerraform(struct!.associatedRouteTableId),
    propagated_route_table: cdktf.listMapper(virtualHubConnectionRoutingPropagatedRouteTableToTerraform)(struct!.propagatedRouteTable),
    static_vnet_route: cdktf.listMapper(virtualHubConnectionRoutingStaticVnetRouteToTerraform)(struct!.staticVnetRoute),
  }
}

export interface VirtualHubConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function virtualHubConnectionTimeoutsToTerraform(struct?: VirtualHubConnectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class VirtualHubConnection extends cdktf.TerraformResource {

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
      hub_to_vitual_network_traffic_allowed: cdktf.booleanToTerraform(this._hubToVitualNetworkTrafficAllowed),
      internet_security_enabled: cdktf.booleanToTerraform(this._internetSecurityEnabled),
      name: cdktf.stringToTerraform(this._name),
      remote_virtual_network_id: cdktf.stringToTerraform(this._remoteVirtualNetworkId),
      virtual_hub_id: cdktf.stringToTerraform(this._virtualHubId),
      vitual_network_to_hub_gateways_traffic_allowed: cdktf.booleanToTerraform(this._vitualNetworkToHubGatewaysTrafficAllowed),
      routing: cdktf.listMapper(virtualHubConnectionRoutingToTerraform)(this._routing),
      timeouts: virtualHubConnectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
