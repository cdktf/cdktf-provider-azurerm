// https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualNetworkGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#active_active VirtualNetworkGateway#active_active}
  */
  readonly activeActive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#default_local_network_gateway_id VirtualNetworkGateway#default_local_network_gateway_id}
  */
  readonly defaultLocalNetworkGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#enable_bgp VirtualNetworkGateway#enable_bgp}
  */
  readonly enableBgp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#generation VirtualNetworkGateway#generation}
  */
  readonly generation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#location VirtualNetworkGateway#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#name VirtualNetworkGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#private_ip_address_enabled VirtualNetworkGateway#private_ip_address_enabled}
  */
  readonly privateIpAddressEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#resource_group_name VirtualNetworkGateway#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#sku VirtualNetworkGateway#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#tags VirtualNetworkGateway#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#type VirtualNetworkGateway#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#vpn_type VirtualNetworkGateway#vpn_type}
  */
  readonly vpnType?: string;
  /**
  * bgp_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#bgp_settings VirtualNetworkGateway#bgp_settings}
  */
  readonly bgpSettings?: VirtualNetworkGatewayBgpSettings;
  /**
  * custom_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#custom_route VirtualNetworkGateway#custom_route}
  */
  readonly customRoute?: VirtualNetworkGatewayCustomRoute;
  /**
  * ip_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#ip_configuration VirtualNetworkGateway#ip_configuration}
  */
  readonly ipConfiguration: VirtualNetworkGatewayIpConfiguration[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#timeouts VirtualNetworkGateway#timeouts}
  */
  readonly timeouts?: VirtualNetworkGatewayTimeouts;
  /**
  * vpn_client_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#vpn_client_configuration VirtualNetworkGateway#vpn_client_configuration}
  */
  readonly vpnClientConfiguration?: VirtualNetworkGatewayVpnClientConfiguration;
}
export interface VirtualNetworkGatewayBgpSettingsPeeringAddresses {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#apipa_addresses VirtualNetworkGateway#apipa_addresses}
  */
  readonly apipaAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#ip_configuration_name VirtualNetworkGateway#ip_configuration_name}
  */
  readonly ipConfigurationName?: string;
}

function virtualNetworkGatewayBgpSettingsPeeringAddressesToTerraform(struct?: VirtualNetworkGatewayBgpSettingsPeeringAddresses): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apipa_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.apipaAddresses),
    ip_configuration_name: cdktf.stringToTerraform(struct!.ipConfigurationName),
  }
}

export interface VirtualNetworkGatewayBgpSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#asn VirtualNetworkGateway#asn}
  */
  readonly asn?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#peer_weight VirtualNetworkGateway#peer_weight}
  */
  readonly peerWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#peering_address VirtualNetworkGateway#peering_address}
  */
  readonly peeringAddress?: string;
  /**
  * peering_addresses block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#peering_addresses VirtualNetworkGateway#peering_addresses}
  */
  readonly peeringAddresses?: VirtualNetworkGatewayBgpSettingsPeeringAddresses[];
}

function virtualNetworkGatewayBgpSettingsToTerraform(struct?: VirtualNetworkGatewayBgpSettingsOutputReference | VirtualNetworkGatewayBgpSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    peer_weight: cdktf.numberToTerraform(struct!.peerWeight),
    peering_address: cdktf.stringToTerraform(struct!.peeringAddress),
    peering_addresses: cdktf.listMapper(virtualNetworkGatewayBgpSettingsPeeringAddressesToTerraform)(struct!.peeringAddresses),
  }
}

export class VirtualNetworkGatewayBgpSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: number | undefined; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number | undefined) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn
  }

  // peer_weight - computed: false, optional: true, required: false
  private _peerWeight?: number | undefined; 
  public get peerWeight() {
    return this.getNumberAttribute('peer_weight');
  }
  public set peerWeight(value: number | undefined) {
    this._peerWeight = value;
  }
  public resetPeerWeight() {
    this._peerWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerWeightInput() {
    return this._peerWeight
  }

  // peering_address - computed: true, optional: true, required: false
  private _peeringAddress?: string | undefined; 
  public get peeringAddress() {
    return this.getStringAttribute('peering_address');
  }
  public set peeringAddress(value: string | undefined) {
    this._peeringAddress = value;
  }
  public resetPeeringAddress() {
    this._peeringAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringAddressInput() {
    return this._peeringAddress
  }

  // peering_addresses - computed: false, optional: true, required: false
  private _peeringAddresses?: VirtualNetworkGatewayBgpSettingsPeeringAddresses[] | undefined; 
  public get peeringAddresses() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('peering_addresses') as any;
  }
  public set peeringAddresses(value: VirtualNetworkGatewayBgpSettingsPeeringAddresses[] | undefined) {
    this._peeringAddresses = value;
  }
  public resetPeeringAddresses() {
    this._peeringAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringAddressesInput() {
    return this._peeringAddresses
  }
}
export interface VirtualNetworkGatewayCustomRoute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#address_prefixes VirtualNetworkGateway#address_prefixes}
  */
  readonly addressPrefixes?: string[];
}

function virtualNetworkGatewayCustomRouteToTerraform(struct?: VirtualNetworkGatewayCustomRouteOutputReference | VirtualNetworkGatewayCustomRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.addressPrefixes),
  }
}

export class VirtualNetworkGatewayCustomRouteOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // address_prefixes - computed: false, optional: true, required: false
  private _addressPrefixes?: string[] | undefined; 
  public get addressPrefixes() {
    return this.getListAttribute('address_prefixes');
  }
  public set addressPrefixes(value: string[] | undefined) {
    this._addressPrefixes = value;
  }
  public resetAddressPrefixes() {
    this._addressPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixesInput() {
    return this._addressPrefixes
  }
}
export interface VirtualNetworkGatewayIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#name VirtualNetworkGateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#private_ip_address_allocation VirtualNetworkGateway#private_ip_address_allocation}
  */
  readonly privateIpAddressAllocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#public_ip_address_id VirtualNetworkGateway#public_ip_address_id}
  */
  readonly publicIpAddressId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#subnet_id VirtualNetworkGateway#subnet_id}
  */
  readonly subnetId: string;
}

function virtualNetworkGatewayIpConfigurationToTerraform(struct?: VirtualNetworkGatewayIpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    private_ip_address_allocation: cdktf.stringToTerraform(struct!.privateIpAddressAllocation),
    public_ip_address_id: cdktf.stringToTerraform(struct!.publicIpAddressId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface VirtualNetworkGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#create VirtualNetworkGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#delete VirtualNetworkGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#read VirtualNetworkGateway#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#update VirtualNetworkGateway#update}
  */
  readonly update?: string;
}

function virtualNetworkGatewayTimeoutsToTerraform(struct?: VirtualNetworkGatewayTimeoutsOutputReference | VirtualNetworkGatewayTimeouts): any {
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

export class VirtualNetworkGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#name VirtualNetworkGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#thumbprint VirtualNetworkGateway#thumbprint}
  */
  readonly thumbprint: string;
}

function virtualNetworkGatewayVpnClientConfigurationRevokedCertificateToTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
  }
}

export interface VirtualNetworkGatewayVpnClientConfigurationRootCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#name VirtualNetworkGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#public_cert_data VirtualNetworkGateway#public_cert_data}
  */
  readonly publicCertData: string;
}

function virtualNetworkGatewayVpnClientConfigurationRootCertificateToTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationRootCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    public_cert_data: cdktf.stringToTerraform(struct!.publicCertData),
  }
}

export interface VirtualNetworkGatewayVpnClientConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#aad_audience VirtualNetworkGateway#aad_audience}
  */
  readonly aadAudience?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#aad_issuer VirtualNetworkGateway#aad_issuer}
  */
  readonly aadIssuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#aad_tenant VirtualNetworkGateway#aad_tenant}
  */
  readonly aadTenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#address_space VirtualNetworkGateway#address_space}
  */
  readonly addressSpace: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#radius_server_address VirtualNetworkGateway#radius_server_address}
  */
  readonly radiusServerAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#radius_server_secret VirtualNetworkGateway#radius_server_secret}
  */
  readonly radiusServerSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#vpn_auth_types VirtualNetworkGateway#vpn_auth_types}
  */
  readonly vpnAuthTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#vpn_client_protocols VirtualNetworkGateway#vpn_client_protocols}
  */
  readonly vpnClientProtocols?: string[];
  /**
  * revoked_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#revoked_certificate VirtualNetworkGateway#revoked_certificate}
  */
  readonly revokedCertificate?: VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate[];
  /**
  * root_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html#root_certificate VirtualNetworkGateway#root_certificate}
  */
  readonly rootCertificate?: VirtualNetworkGatewayVpnClientConfigurationRootCertificate[];
}

function virtualNetworkGatewayVpnClientConfigurationToTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationOutputReference | VirtualNetworkGatewayVpnClientConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aad_audience: cdktf.stringToTerraform(struct!.aadAudience),
    aad_issuer: cdktf.stringToTerraform(struct!.aadIssuer),
    aad_tenant: cdktf.stringToTerraform(struct!.aadTenant),
    address_space: cdktf.listMapper(cdktf.stringToTerraform)(struct!.addressSpace),
    radius_server_address: cdktf.stringToTerraform(struct!.radiusServerAddress),
    radius_server_secret: cdktf.stringToTerraform(struct!.radiusServerSecret),
    vpn_auth_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.vpnAuthTypes),
    vpn_client_protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.vpnClientProtocols),
    revoked_certificate: cdktf.listMapper(virtualNetworkGatewayVpnClientConfigurationRevokedCertificateToTerraform)(struct!.revokedCertificate),
    root_certificate: cdktf.listMapper(virtualNetworkGatewayVpnClientConfigurationRootCertificateToTerraform)(struct!.rootCertificate),
  }
}

export class VirtualNetworkGatewayVpnClientConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // aad_audience - computed: false, optional: true, required: false
  private _aadAudience?: string | undefined; 
  public get aadAudience() {
    return this.getStringAttribute('aad_audience');
  }
  public set aadAudience(value: string | undefined) {
    this._aadAudience = value;
  }
  public resetAadAudience() {
    this._aadAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadAudienceInput() {
    return this._aadAudience
  }

  // aad_issuer - computed: false, optional: true, required: false
  private _aadIssuer?: string | undefined; 
  public get aadIssuer() {
    return this.getStringAttribute('aad_issuer');
  }
  public set aadIssuer(value: string | undefined) {
    this._aadIssuer = value;
  }
  public resetAadIssuer() {
    this._aadIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadIssuerInput() {
    return this._aadIssuer
  }

  // aad_tenant - computed: false, optional: true, required: false
  private _aadTenant?: string | undefined; 
  public get aadTenant() {
    return this.getStringAttribute('aad_tenant');
  }
  public set aadTenant(value: string | undefined) {
    this._aadTenant = value;
  }
  public resetAadTenant() {
    this._aadTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadTenantInput() {
    return this._aadTenant
  }

  // address_space - computed: false, optional: false, required: true
  private _addressSpace?: string[]; 
  public get addressSpace() {
    return this.getListAttribute('address_space');
  }
  public set addressSpace(value: string[]) {
    this._addressSpace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSpaceInput() {
    return this._addressSpace
  }

  // radius_server_address - computed: false, optional: true, required: false
  private _radiusServerAddress?: string | undefined; 
  public get radiusServerAddress() {
    return this.getStringAttribute('radius_server_address');
  }
  public set radiusServerAddress(value: string | undefined) {
    this._radiusServerAddress = value;
  }
  public resetRadiusServerAddress() {
    this._radiusServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerAddressInput() {
    return this._radiusServerAddress
  }

  // radius_server_secret - computed: false, optional: true, required: false
  private _radiusServerSecret?: string | undefined; 
  public get radiusServerSecret() {
    return this.getStringAttribute('radius_server_secret');
  }
  public set radiusServerSecret(value: string | undefined) {
    this._radiusServerSecret = value;
  }
  public resetRadiusServerSecret() {
    this._radiusServerSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerSecretInput() {
    return this._radiusServerSecret
  }

  // vpn_auth_types - computed: true, optional: true, required: false
  private _vpnAuthTypes?: string[] | undefined; 
  public get vpnAuthTypes() {
    return this.getListAttribute('vpn_auth_types');
  }
  public set vpnAuthTypes(value: string[] | undefined) {
    this._vpnAuthTypes = value;
  }
  public resetVpnAuthTypes() {
    this._vpnAuthTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnAuthTypesInput() {
    return this._vpnAuthTypes
  }

  // vpn_client_protocols - computed: true, optional: true, required: false
  private _vpnClientProtocols?: string[] | undefined; 
  public get vpnClientProtocols() {
    return this.getListAttribute('vpn_client_protocols');
  }
  public set vpnClientProtocols(value: string[] | undefined) {
    this._vpnClientProtocols = value;
  }
  public resetVpnClientProtocols() {
    this._vpnClientProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnClientProtocolsInput() {
    return this._vpnClientProtocols
  }

  // revoked_certificate - computed: false, optional: true, required: false
  private _revokedCertificate?: VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate[] | undefined; 
  public get revokedCertificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('revoked_certificate') as any;
  }
  public set revokedCertificate(value: VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate[] | undefined) {
    this._revokedCertificate = value;
  }
  public resetRevokedCertificate() {
    this._revokedCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedCertificateInput() {
    return this._revokedCertificate
  }

  // root_certificate - computed: false, optional: true, required: false
  private _rootCertificate?: VirtualNetworkGatewayVpnClientConfigurationRootCertificate[] | undefined; 
  public get rootCertificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('root_certificate') as any;
  }
  public set rootCertificate(value: VirtualNetworkGatewayVpnClientConfigurationRootCertificate[] | undefined) {
    this._rootCertificate = value;
  }
  public resetRootCertificate() {
    this._rootCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCertificateInput() {
    return this._rootCertificate
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html azurerm_virtual_network_gateway}
*/
export class VirtualNetworkGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_virtual_network_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network_gateway.html azurerm_virtual_network_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualNetworkGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualNetworkGatewayConfig) {
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
    this._activeActive = config.activeActive;
    this._defaultLocalNetworkGatewayId = config.defaultLocalNetworkGatewayId;
    this._enableBgp = config.enableBgp;
    this._generation = config.generation;
    this._location = config.location;
    this._name = config.name;
    this._privateIpAddressEnabled = config.privateIpAddressEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._type = config.type;
    this._vpnType = config.vpnType;
    this._bgpSettings = config.bgpSettings;
    this._customRoute = config.customRoute;
    this._ipConfiguration = config.ipConfiguration;
    this._timeouts = config.timeouts;
    this._vpnClientConfiguration = config.vpnClientConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_active - computed: true, optional: true, required: false
  private _activeActive?: boolean | cdktf.IResolvable | undefined; 
  public get activeActive() {
    return this.getBooleanAttribute('active_active') as any;
  }
  public set activeActive(value: boolean | cdktf.IResolvable | undefined) {
    this._activeActive = value;
  }
  public resetActiveActive() {
    this._activeActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeActiveInput() {
    return this._activeActive
  }

  // default_local_network_gateway_id - computed: false, optional: true, required: false
  private _defaultLocalNetworkGatewayId?: string | undefined; 
  public get defaultLocalNetworkGatewayId() {
    return this.getStringAttribute('default_local_network_gateway_id');
  }
  public set defaultLocalNetworkGatewayId(value: string | undefined) {
    this._defaultLocalNetworkGatewayId = value;
  }
  public resetDefaultLocalNetworkGatewayId() {
    this._defaultLocalNetworkGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLocalNetworkGatewayIdInput() {
    return this._defaultLocalNetworkGatewayId
  }

  // enable_bgp - computed: true, optional: true, required: false
  private _enableBgp?: boolean | cdktf.IResolvable | undefined; 
  public get enableBgp() {
    return this.getBooleanAttribute('enable_bgp') as any;
  }
  public set enableBgp(value: boolean | cdktf.IResolvable | undefined) {
    this._enableBgp = value;
  }
  public resetEnableBgp() {
    this._enableBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBgpInput() {
    return this._enableBgp
  }

  // generation - computed: true, optional: true, required: false
  private _generation?: string | undefined; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string | undefined) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation
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

  // private_ip_address_enabled - computed: false, optional: true, required: false
  private _privateIpAddressEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get privateIpAddressEnabled() {
    return this.getBooleanAttribute('private_ip_address_enabled') as any;
  }
  public set privateIpAddressEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._privateIpAddressEnabled = value;
  }
  public resetPrivateIpAddressEnabled() {
    this._privateIpAddressEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressEnabledInput() {
    return this._privateIpAddressEnabled
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

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // vpn_type - computed: false, optional: true, required: false
  private _vpnType?: string | undefined; 
  public get vpnType() {
    return this.getStringAttribute('vpn_type');
  }
  public set vpnType(value: string | undefined) {
    this._vpnType = value;
  }
  public resetVpnType() {
    this._vpnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnTypeInput() {
    return this._vpnType
  }

  // bgp_settings - computed: false, optional: true, required: false
  private _bgpSettings?: VirtualNetworkGatewayBgpSettings | undefined; 
  private __bgpSettingsOutput = new VirtualNetworkGatewayBgpSettingsOutputReference(this as any, "bgp_settings", true);
  public get bgpSettings() {
    return this.__bgpSettingsOutput;
  }
  public putBgpSettings(value: VirtualNetworkGatewayBgpSettings | undefined) {
    this._bgpSettings = value;
  }
  public resetBgpSettings() {
    this._bgpSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpSettingsInput() {
    return this._bgpSettings
  }

  // custom_route - computed: false, optional: true, required: false
  private _customRoute?: VirtualNetworkGatewayCustomRoute | undefined; 
  private __customRouteOutput = new VirtualNetworkGatewayCustomRouteOutputReference(this as any, "custom_route", true);
  public get customRoute() {
    return this.__customRouteOutput;
  }
  public putCustomRoute(value: VirtualNetworkGatewayCustomRoute | undefined) {
    this._customRoute = value;
  }
  public resetCustomRoute() {
    this._customRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRouteInput() {
    return this._customRoute
  }

  // ip_configuration - computed: false, optional: false, required: true
  private _ipConfiguration?: VirtualNetworkGatewayIpConfiguration[]; 
  public get ipConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_configuration') as any;
  }
  public set ipConfiguration(value: VirtualNetworkGatewayIpConfiguration[]) {
    this._ipConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualNetworkGatewayTimeouts | undefined; 
  private __timeoutsOutput = new VirtualNetworkGatewayTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VirtualNetworkGatewayTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // vpn_client_configuration - computed: false, optional: true, required: false
  private _vpnClientConfiguration?: VirtualNetworkGatewayVpnClientConfiguration | undefined; 
  private __vpnClientConfigurationOutput = new VirtualNetworkGatewayVpnClientConfigurationOutputReference(this as any, "vpn_client_configuration", true);
  public get vpnClientConfiguration() {
    return this.__vpnClientConfigurationOutput;
  }
  public putVpnClientConfiguration(value: VirtualNetworkGatewayVpnClientConfiguration | undefined) {
    this._vpnClientConfiguration = value;
  }
  public resetVpnClientConfiguration() {
    this._vpnClientConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnClientConfigurationInput() {
    return this._vpnClientConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_active: cdktf.booleanToTerraform(this._activeActive),
      default_local_network_gateway_id: cdktf.stringToTerraform(this._defaultLocalNetworkGatewayId),
      enable_bgp: cdktf.booleanToTerraform(this._enableBgp),
      generation: cdktf.stringToTerraform(this._generation),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      private_ip_address_enabled: cdktf.booleanToTerraform(this._privateIpAddressEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      vpn_type: cdktf.stringToTerraform(this._vpnType),
      bgp_settings: virtualNetworkGatewayBgpSettingsToTerraform(this._bgpSettings),
      custom_route: virtualNetworkGatewayCustomRouteToTerraform(this._customRoute),
      ip_configuration: cdktf.listMapper(virtualNetworkGatewayIpConfigurationToTerraform)(this._ipConfiguration),
      timeouts: virtualNetworkGatewayTimeoutsToTerraform(this._timeouts),
      vpn_client_configuration: virtualNetworkGatewayVpnClientConfigurationToTerraform(this._vpnClientConfiguration),
    };
  }
}
