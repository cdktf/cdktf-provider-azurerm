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

  // asn - computed: true, optional: false, required: true
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // peer_weight - computed: true, optional: false, required: true
  public get peerWeight() {
    return this.getNumberAttribute('peer_weight');
  }

  // peering_address - computed: true, optional: false, required: true
  public get peeringAddress() {
    return this.getStringAttribute('peering_address');
  }
}
export class DataAzurermVirtualNetworkGatewayIpConfiguration extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_ip_address_allocation - computed: true, optional: false, required: true
  public get privateIpAddressAllocation() {
    return this.getStringAttribute('private_ip_address_allocation');
  }

  // public_ip_address_id - computed: true, optional: false, required: true
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataAzurermVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // thumbprint - computed: true, optional: false, required: true
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}
export class DataAzurermVirtualNetworkGatewayVpnClientConfigurationRootCertificate extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // public_cert_data - computed: true, optional: false, required: true
  public get publicCertData() {
    return this.getStringAttribute('public_cert_data');
  }
}
export class DataAzurermVirtualNetworkGatewayVpnClientConfiguration extends ComplexComputedList {

  // address_space - computed: true, optional: false, required: true
  public get addressSpace() {
    return this.getListAttribute('address_space');
  }

  // radius_server_address - computed: true, optional: false, required: true
  public get radiusServerAddress() {
    return this.getStringAttribute('radius_server_address');
  }

  // radius_server_secret - computed: true, optional: false, required: true
  public get radiusServerSecret() {
    return this.getStringAttribute('radius_server_secret');
  }

  // revoked_certificate - computed: true, optional: false, required: true
  public get revokedCertificate() {
    return 'not implemented' as any;
  }

  // root_certificate - computed: true, optional: false, required: true
  public get rootCertificate() {
    return 'not implemented' as any;
  }

  // vpn_client_protocols - computed: true, optional: false, required: true
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

  // active_active - computed: true, optional: false, required: true
  public get activeActive() {
    return this.getBooleanAttribute('active_active');
  }

  // bgp_settings - computed: true, optional: false, required: true
  public bgpSettings(index: string) {
    return new DataAzurermVirtualNetworkGatewayBgpSettings(this, 'bgp_settings', index);
  }

  // default_local_network_gateway_id - computed: true, optional: false, required: true
  public get defaultLocalNetworkGatewayId() {
    return this.getStringAttribute('default_local_network_gateway_id');
  }

  // enable_bgp - computed: true, optional: false, required: true
  public get enableBgp() {
    return this.getBooleanAttribute('enable_bgp');
  }

  // generation - computed: true, optional: false, required: true
  public get generation() {
    return this.getStringAttribute('generation');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_configuration - computed: true, optional: false, required: true
  public ipConfiguration(index: string) {
    return new DataAzurermVirtualNetworkGatewayIpConfiguration(this, 'ip_configuration', index);
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // sku - computed: true, optional: false, required: true
  public get sku() {
    return this.getStringAttribute('sku');
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpn_client_configuration - computed: true, optional: false, required: true
  public vpnClientConfiguration(index: string) {
    return new DataAzurermVirtualNetworkGatewayVpnClientConfiguration(this, 'vpn_client_configuration', index);
  }

  // vpn_type - computed: true, optional: false, required: true
  public get vpnType() {
    return this.getStringAttribute('vpn_type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermVirtualNetworkGatewayTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermVirtualNetworkGatewayTimeouts | undefined) {
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
