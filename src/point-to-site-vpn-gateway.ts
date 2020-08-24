// https://www.terraform.io/docs/providers/azurerm/r/point_to_site_vpn_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PointToSiteVpnGatewayConfig extends TerraformMetaArguments {
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
export interface PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool {
  readonly addressPrefixes: string[];
}
export interface PointToSiteVpnGatewayConnectionConfiguration {
  readonly name: string;
  /** vpn_client_address_pool block */
  readonly vpnClientAddressPool: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool[];
}
export interface PointToSiteVpnGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class PointToSiteVpnGateway extends TerraformResource {

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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // scale_unit - computed: false, optional: false, required: true
  private _scaleUnit: number;
  public get scaleUnit() {
    return this._scaleUnit;
  }
  public set scaleUnit(value: number) {
    this._scaleUnit = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // virtual_hub_id - computed: false, optional: false, required: true
  private _virtualHubId: string;
  public get virtualHubId() {
    return this._virtualHubId;
  }
  public set virtualHubId(value: string) {
    this._virtualHubId = value;
  }

  // vpn_server_configuration_id - computed: false, optional: false, required: true
  private _vpnServerConfigurationId: string;
  public get vpnServerConfigurationId() {
    return this._vpnServerConfigurationId;
  }
  public set vpnServerConfigurationId(value: string) {
    this._vpnServerConfigurationId = value;
  }

  // connection_configuration - computed: false, optional: false, required: true
  private _connectionConfiguration: PointToSiteVpnGatewayConnectionConfiguration[];
  public get connectionConfiguration() {
    return this._connectionConfiguration;
  }
  public set connectionConfiguration(value: PointToSiteVpnGatewayConnectionConfiguration[]) {
    this._connectionConfiguration = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PointToSiteVpnGatewayTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: PointToSiteVpnGatewayTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      scale_unit: this._scaleUnit,
      tags: this._tags,
      virtual_hub_id: this._virtualHubId,
      vpn_server_configuration_id: this._vpnServerConfigurationId,
      connection_configuration: this._connectionConfiguration,
      timeouts: this._timeouts,
    };
  }
}
