// https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PointToSiteVpnGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#dns_servers PointToSiteVpnGateway#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#location PointToSiteVpnGateway#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#name PointToSiteVpnGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#resource_group_name PointToSiteVpnGateway#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#scale_unit PointToSiteVpnGateway#scale_unit}
  */
  readonly scaleUnit: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#tags PointToSiteVpnGateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#virtual_hub_id PointToSiteVpnGateway#virtual_hub_id}
  */
  readonly virtualHubId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#vpn_server_configuration_id PointToSiteVpnGateway#vpn_server_configuration_id}
  */
  readonly vpnServerConfigurationId: string;
  /**
  * connection_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#connection_configuration PointToSiteVpnGateway#connection_configuration}
  */
  readonly connectionConfiguration: PointToSiteVpnGatewayConnectionConfiguration[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#timeouts PointToSiteVpnGateway#timeouts}
  */
  readonly timeouts?: PointToSiteVpnGatewayTimeouts;
}
export interface PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#ids PointToSiteVpnGateway#ids}
  */
  readonly ids: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#labels PointToSiteVpnGateway#labels}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#associated_route_table_id PointToSiteVpnGateway#associated_route_table_id}
  */
  readonly associatedRouteTableId: string;
  /**
  * propagated_route_table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#propagated_route_table PointToSiteVpnGateway#propagated_route_table}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#address_prefixes PointToSiteVpnGateway#address_prefixes}
  */
  readonly addressPrefixes: string[];
}

function pointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolToTerraform(struct?: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.addressPrefixes),
  }
}

export interface PointToSiteVpnGatewayConnectionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#name PointToSiteVpnGateway#name}
  */
  readonly name: string;
  /**
  * route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#route PointToSiteVpnGateway#route}
  */
  readonly route?: PointToSiteVpnGatewayConnectionConfigurationRoute[];
  /**
  * vpn_client_address_pool block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#vpn_client_address_pool PointToSiteVpnGateway#vpn_client_address_pool}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#create PointToSiteVpnGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#delete PointToSiteVpnGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#read PointToSiteVpnGateway#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#update PointToSiteVpnGateway#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html azurerm_point_to_site_vpn_gateway}
*/
export class PointToSiteVpnGateway extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html azurerm_point_to_site_vpn_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PointToSiteVpnGatewayConfig
  */
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
