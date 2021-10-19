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
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
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
  readonly connectionConfiguration: PointToSiteVpnGatewayConnectionConfiguration;
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

function pointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableToTerraform(struct?: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference | PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ids),
    labels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}

export class PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // ids - computed: false, optional: false, required: true
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[] | undefined; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[] | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
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
  readonly propagatedRouteTable?: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable;
}

function pointToSiteVpnGatewayConnectionConfigurationRouteToTerraform(struct?: PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference | PointToSiteVpnGatewayConnectionConfigurationRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associated_route_table_id: cdktf.stringToTerraform(struct!.associatedRouteTableId),
    propagated_route_table: pointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableToTerraform(struct!.propagatedRouteTable),
  }
}

export class PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // associated_route_table_id - computed: false, optional: false, required: true
  private _associatedRouteTableId?: string; 
  public get associatedRouteTableId() {
    return this.getStringAttribute('associated_route_table_id');
  }
  public set associatedRouteTableId(value: string) {
    this._associatedRouteTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedRouteTableIdInput() {
    return this._associatedRouteTableId
  }

  // propagated_route_table - computed: false, optional: true, required: false
  private _propagatedRouteTable?: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable | undefined; 
  private __propagatedRouteTableOutput = new PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference(this as any, "propagated_route_table", true);
  public get propagatedRouteTable() {
    return this.__propagatedRouteTableOutput;
  }
  public putPropagatedRouteTable(value: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable | undefined) {
    this._propagatedRouteTable = value;
  }
  public resetPropagatedRouteTable() {
    this._propagatedRouteTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedRouteTableInput() {
    return this._propagatedRouteTable
  }
}
export interface PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#address_prefixes PointToSiteVpnGateway#address_prefixes}
  */
  readonly addressPrefixes: string[];
}

function pointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolToTerraform(struct?: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference | PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.addressPrefixes),
  }
}

export class PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // address_prefixes - computed: false, optional: false, required: true
  private _addressPrefixes?: string[]; 
  public get addressPrefixes() {
    return this.getListAttribute('address_prefixes');
  }
  public set addressPrefixes(value: string[]) {
    this._addressPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixesInput() {
    return this._addressPrefixes
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
  readonly route?: PointToSiteVpnGatewayConnectionConfigurationRoute;
  /**
  * vpn_client_address_pool block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html#vpn_client_address_pool PointToSiteVpnGateway#vpn_client_address_pool}
  */
  readonly vpnClientAddressPool: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool;
}

function pointToSiteVpnGatewayConnectionConfigurationToTerraform(struct?: PointToSiteVpnGatewayConnectionConfigurationOutputReference | PointToSiteVpnGatewayConnectionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    route: pointToSiteVpnGatewayConnectionConfigurationRouteToTerraform(struct!.route),
    vpn_client_address_pool: pointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolToTerraform(struct!.vpnClientAddressPool),
  }
}

export class PointToSiteVpnGatewayConnectionConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
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

  // route - computed: false, optional: true, required: false
  private _route?: PointToSiteVpnGatewayConnectionConfigurationRoute | undefined; 
  private __routeOutput = new PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference(this as any, "route", true);
  public get route() {
    return this.__routeOutput;
  }
  public putRoute(value: PointToSiteVpnGatewayConnectionConfigurationRoute | undefined) {
    this._route = value;
  }
  public resetRoute() {
    this._route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route
  }

  // vpn_client_address_pool - computed: false, optional: false, required: true
  private _vpnClientAddressPool?: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool; 
  private __vpnClientAddressPoolOutput = new PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference(this as any, "vpn_client_address_pool", true);
  public get vpnClientAddressPool() {
    return this.__vpnClientAddressPoolOutput;
  }
  public putVpnClientAddressPool(value: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool) {
    this._vpnClientAddressPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnClientAddressPoolInput() {
    return this._vpnClientAddressPool
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

function pointToSiteVpnGatewayTimeoutsToTerraform(struct?: PointToSiteVpnGatewayTimeoutsOutputReference | PointToSiteVpnGatewayTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class PointToSiteVpnGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html azurerm_point_to_site_vpn_gateway}
*/
export class PointToSiteVpnGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_point_to_site_vpn_gateway";

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
  private _dnsServers?: string[] | undefined; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[] | undefined) {
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
  private _location?: string; 
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
  private _name?: string; 
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
  private _resourceGroupName?: string; 
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
  private _scaleUnit?: number; 
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _virtualHubId?: string; 
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
  private _vpnServerConfigurationId?: string; 
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
  private _connectionConfiguration?: PointToSiteVpnGatewayConnectionConfiguration; 
  private __connectionConfigurationOutput = new PointToSiteVpnGatewayConnectionConfigurationOutputReference(this as any, "connection_configuration", true);
  public get connectionConfiguration() {
    return this.__connectionConfigurationOutput;
  }
  public putConnectionConfiguration(value: PointToSiteVpnGatewayConnectionConfiguration) {
    this._connectionConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConfigurationInput() {
    return this._connectionConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PointToSiteVpnGatewayTimeouts | undefined; 
  private __timeoutsOutput = new PointToSiteVpnGatewayTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: PointToSiteVpnGatewayTimeouts | undefined) {
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
      connection_configuration: pointToSiteVpnGatewayConnectionConfigurationToTerraform(this._connectionConfiguration),
      timeouts: pointToSiteVpnGatewayTimeoutsToTerraform(this._timeouts),
    };
  }
}
