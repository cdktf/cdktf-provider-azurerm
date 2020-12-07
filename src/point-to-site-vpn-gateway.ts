// https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PointToSiteVpnGatewayConfig extends cdktf.TerraformMetaArguments {
  readonly dnsServers?: string[];
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly scaleUnit: number;
  readonly tags?: { [key: string]: string };
  readonly virtualHubId: string;
  readonly vpnServerConfigurationId: string;
  /** connection_configuration block */
  readonly connectionConfiguration: PointToSiteVpnGatewayConnectionConfiguration[];
  /** timeouts block */
  readonly timeouts?: PointToSiteVpnGatewayTimeouts;
}
export interface PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable {
  readonly ids: string[];
  readonly labels?: string[];
}

function pointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableToTerraform(struct?: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ids),
    labels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}

export interface PointToSiteVpnGatewayConnectionConfigurationRoute {
  readonly associatedRouteTableId: string;
  /** propagated_route_table block */
  readonly propagatedRouteTable?: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable[];
}

function pointToSiteVpnGatewayConnectionConfigurationRouteToTerraform(struct?: PointToSiteVpnGatewayConnectionConfigurationRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    associated_route_table_id: cdktf.stringToTerraform(struct!.associatedRouteTableId),
    propagated_route_table: cdktf.listMapper(pointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableToTerraform)(struct!.propagatedRouteTable),
  }
}

export interface PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool {
  readonly addressPrefixes: string[];
}

function pointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolToTerraform(struct?: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.addressPrefixes),
  }
}

export interface PointToSiteVpnGatewayConnectionConfiguration {
  readonly name: string;
  /** route block */
  readonly route?: PointToSiteVpnGatewayConnectionConfigurationRoute[];
  /** vpn_client_address_pool block */
  readonly vpnClientAddressPool: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool[];
}

function pointToSiteVpnGatewayConnectionConfigurationToTerraform(struct?: PointToSiteVpnGatewayConnectionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    route: cdktf.listMapper(pointToSiteVpnGatewayConnectionConfigurationRouteToTerraform)(struct!.route),
    vpn_client_address_pool: cdktf.listMapper(pointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolToTerraform)(struct!.vpnClientAddressPool),
  }
}

export interface PointToSiteVpnGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function pointToSiteVpnGatewayTimeoutsToTerraform(struct?: PointToSiteVpnGatewayTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class PointToSiteVpnGateway extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PointToSiteVpnGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_point_to_site_vpn_gateway',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dnsServers = config.dnsServers;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._scaleUnit = config.scaleUnit;
    this._tags = config.tags;
    this._virtualHubId = config.virtualHubId;
    this._vpnServerConfigurationId = config.vpnServerConfigurationId;
    this._connectionConfiguration = config.connectionConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[];
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[] ) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers
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

  // scale_unit - computed: false, optional: false, required: true
  private _scaleUnit: number;
  public get scaleUnit() {
    return this.getNumberAttribute('scale_unit');
  }
  public set scaleUnit(value: number) {
    this._scaleUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUnitInput() {
    return this._scaleUnit
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

  // vpn_server_configuration_id - computed: false, optional: false, required: true
  private _vpnServerConfigurationId: string;
  public get vpnServerConfigurationId() {
    return this.getStringAttribute('vpn_server_configuration_id');
  }
  public set vpnServerConfigurationId(value: string) {
    this._vpnServerConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnServerConfigurationIdInput() {
    return this._vpnServerConfigurationId
  }

  // connection_configuration - computed: false, optional: false, required: true
  private _connectionConfiguration: PointToSiteVpnGatewayConnectionConfiguration[];
  public get connectionConfiguration() {
    return this.interpolationForAttribute('connection_configuration') as any;
  }
  public set connectionConfiguration(value: PointToSiteVpnGatewayConnectionConfiguration[]) {
    this._connectionConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConfigurationInput() {
    return this._connectionConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PointToSiteVpnGatewayTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PointToSiteVpnGatewayTimeouts ) {
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
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsServers),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      scale_unit: cdktf.numberToTerraform(this._scaleUnit),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      virtual_hub_id: cdktf.stringToTerraform(this._virtualHubId),
      vpn_server_configuration_id: cdktf.stringToTerraform(this._vpnServerConfigurationId),
      connection_configuration: cdktf.listMapper(pointToSiteVpnGatewayConnectionConfigurationToTerraform)(this._connectionConfiguration),
      timeouts: pointToSiteVpnGatewayTimeoutsToTerraform(this._timeouts),
    };
  }
}
