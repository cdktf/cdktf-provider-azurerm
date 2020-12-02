// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_virtual_network_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermVirtualNetworkGatewayConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermVirtualNetworkGatewayTimeouts;
}
export class DataAzurermVirtualNetworkGatewayBgpSettings extends ComplexComputedList {

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // peer_weight - computed: true, optional: false, required: false
  public get peerWeight() {
    return this.getNumberAttribute('peer_weight');
  }

  // peering_address - computed: true, optional: false, required: false
  public get peeringAddress() {
    return this.getStringAttribute('peering_address');
  }
}
export class DataAzurermVirtualNetworkGatewayCustomRoute extends ComplexComputedList {

  // address_prefixes - computed: true, optional: false, required: false
  public get addressPrefixes() {
    return this.getListAttribute('address_prefixes');
  }
}
export class DataAzurermVirtualNetworkGatewayIpConfiguration extends ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_ip_address_allocation - computed: true, optional: false, required: false
  public get privateIpAddressAllocation() {
    return this.getStringAttribute('private_ip_address_allocation');
  }

  // public_ip_address_id - computed: true, optional: false, required: false
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataAzurermVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate extends ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}
export class DataAzurermVirtualNetworkGatewayVpnClientConfigurationRootCertificate extends ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // public_cert_data - computed: true, optional: false, required: false
  public get publicCertData() {
    return this.getStringAttribute('public_cert_data');
  }
}
export class DataAzurermVirtualNetworkGatewayVpnClientConfiguration extends ComplexComputedList {

  // aad_audience - computed: true, optional: false, required: false
  public get aadAudience() {
    return this.getStringAttribute('aad_audience');
  }

  // aad_issuer - computed: true, optional: false, required: false
  public get aadIssuer() {
    return this.getStringAttribute('aad_issuer');
  }

  // aad_tenant - computed: true, optional: false, required: false
  public get aadTenant() {
    return this.getStringAttribute('aad_tenant');
  }

  // address_space - computed: true, optional: false, required: false
  public get addressSpace() {
    return this.getListAttribute('address_space');
  }

  // radius_server_address - computed: true, optional: false, required: false
  public get radiusServerAddress() {
    return this.getStringAttribute('radius_server_address');
  }

  // radius_server_secret - computed: true, optional: false, required: false
  public get radiusServerSecret() {
    return this.getStringAttribute('radius_server_secret');
  }

  // revoked_certificate - computed: true, optional: false, required: false
  public get revokedCertificate() {
    return this.interpolationForAttribute('revoked_certificate') as any;
  }

  // root_certificate - computed: true, optional: false, required: false
  public get rootCertificate() {
    return this.interpolationForAttribute('root_certificate') as any;
  }

  // vpn_client_protocols - computed: true, optional: false, required: false
  public get vpnClientProtocols() {
    return this.getListAttribute('vpn_client_protocols');
  }
}
export interface DataAzurermVirtualNetworkGatewayTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermVirtualNetworkGateway extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermVirtualNetworkGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_network_gateway',
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

  // active_active - computed: true, optional: false, required: false
  public get activeActive() {
    return this.getBooleanAttribute('active_active');
  }

  // bgp_settings - computed: true, optional: false, required: false
  public bgpSettings(index: string) {
    return new DataAzurermVirtualNetworkGatewayBgpSettings(this, 'bgp_settings', index);
  }

  // custom_route - computed: true, optional: false, required: false
  public customRoute(index: string) {
    return new DataAzurermVirtualNetworkGatewayCustomRoute(this, 'custom_route', index);
  }

  // default_local_network_gateway_id - computed: true, optional: false, required: false
  public get defaultLocalNetworkGatewayId() {
    return this.getStringAttribute('default_local_network_gateway_id');
  }

  // enable_bgp - computed: true, optional: false, required: false
  public get enableBgp() {
    return this.getBooleanAttribute('enable_bgp');
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getStringAttribute('generation');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_configuration - computed: true, optional: false, required: false
  public ipConfiguration(index: string) {
    return new DataAzurermVirtualNetworkGatewayIpConfiguration(this, 'ip_configuration', index);
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // private_ip_address_enabled - computed: true, optional: false, required: false
  public get privateIpAddressEnabled() {
    return this.getBooleanAttribute('private_ip_address_enabled');
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

  // sku - computed: true, optional: false, required: false
  public get sku() {
    return this.getStringAttribute('sku');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpn_client_configuration - computed: true, optional: false, required: false
  public vpnClientConfiguration(index: string) {
    return new DataAzurermVirtualNetworkGatewayVpnClientConfiguration(this, 'vpn_client_configuration', index);
  }

  // vpn_type - computed: true, optional: false, required: false
  public get vpnType() {
    return this.getStringAttribute('vpn_type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermVirtualNetworkGatewayTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermVirtualNetworkGatewayTimeouts ) {
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
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
