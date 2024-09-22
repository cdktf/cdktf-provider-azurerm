// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualNetworkGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#active_active VirtualNetworkGateway#active_active}
  */
  readonly activeActive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#bgp_route_translation_for_nat_enabled VirtualNetworkGateway#bgp_route_translation_for_nat_enabled}
  */
  readonly bgpRouteTranslationForNatEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#default_local_network_gateway_id VirtualNetworkGateway#default_local_network_gateway_id}
  */
  readonly defaultLocalNetworkGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#dns_forwarding_enabled VirtualNetworkGateway#dns_forwarding_enabled}
  */
  readonly dnsForwardingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#edge_zone VirtualNetworkGateway#edge_zone}
  */
  readonly edgeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#enable_bgp VirtualNetworkGateway#enable_bgp}
  */
  readonly enableBgp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#generation VirtualNetworkGateway#generation}
  */
  readonly generation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#id VirtualNetworkGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#ip_sec_replay_protection_enabled VirtualNetworkGateway#ip_sec_replay_protection_enabled}
  */
  readonly ipSecReplayProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#location VirtualNetworkGateway#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#private_ip_address_enabled VirtualNetworkGateway#private_ip_address_enabled}
  */
  readonly privateIpAddressEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#remote_vnet_traffic_enabled VirtualNetworkGateway#remote_vnet_traffic_enabled}
  */
  readonly remoteVnetTrafficEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#resource_group_name VirtualNetworkGateway#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#sku VirtualNetworkGateway#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#tags VirtualNetworkGateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#type VirtualNetworkGateway#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#virtual_wan_traffic_enabled VirtualNetworkGateway#virtual_wan_traffic_enabled}
  */
  readonly virtualWanTrafficEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#vpn_type VirtualNetworkGateway#vpn_type}
  */
  readonly vpnType?: string;
  /**
  * bgp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#bgp_settings VirtualNetworkGateway#bgp_settings}
  */
  readonly bgpSettings?: VirtualNetworkGatewayBgpSettings;
  /**
  * custom_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#custom_route VirtualNetworkGateway#custom_route}
  */
  readonly customRoute?: VirtualNetworkGatewayCustomRoute;
  /**
  * ip_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#ip_configuration VirtualNetworkGateway#ip_configuration}
  */
  readonly ipConfiguration: VirtualNetworkGatewayIpConfiguration[] | cdktf.IResolvable;
  /**
  * policy_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#policy_group VirtualNetworkGateway#policy_group}
  */
  readonly policyGroup?: VirtualNetworkGatewayPolicyGroup[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#timeouts VirtualNetworkGateway#timeouts}
  */
  readonly timeouts?: VirtualNetworkGatewayTimeouts;
  /**
  * vpn_client_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#vpn_client_configuration VirtualNetworkGateway#vpn_client_configuration}
  */
  readonly vpnClientConfiguration?: VirtualNetworkGatewayVpnClientConfiguration;
}
export interface VirtualNetworkGatewayBgpSettingsPeeringAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#apipa_addresses VirtualNetworkGateway#apipa_addresses}
  */
  readonly apipaAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#ip_configuration_name VirtualNetworkGateway#ip_configuration_name}
  */
  readonly ipConfigurationName?: string;
}

export function virtualNetworkGatewayBgpSettingsPeeringAddressesToTerraform(struct?: VirtualNetworkGatewayBgpSettingsPeeringAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apipa_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apipaAddresses),
    ip_configuration_name: cdktf.stringToTerraform(struct!.ipConfigurationName),
  }
}


export function virtualNetworkGatewayBgpSettingsPeeringAddressesToHclTerraform(struct?: VirtualNetworkGatewayBgpSettingsPeeringAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apipa_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apipaAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_configuration_name: {
      value: cdktf.stringToHclTerraform(struct!.ipConfigurationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualNetworkGatewayBgpSettingsPeeringAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apipaAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.apipaAddresses = this._apipaAddresses;
    }
    if (this._ipConfigurationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConfigurationName = this._ipConfigurationName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayBgpSettingsPeeringAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apipaAddresses = undefined;
      this._ipConfigurationName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apipaAddresses = value.apipaAddresses;
      this._ipConfigurationName = value.ipConfigurationName;
    }
  }

  // apipa_addresses - computed: false, optional: true, required: false
  private _apipaAddresses?: string[]; 
  public get apipaAddresses() {
    return this.getListAttribute('apipa_addresses');
  }
  public set apipaAddresses(value: string[]) {
    this._apipaAddresses = value;
  }
  public resetApipaAddresses() {
    this._apipaAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apipaAddressesInput() {
    return this._apipaAddresses;
  }

  // default_addresses - computed: true, optional: false, required: false
  public get defaultAddresses() {
    return this.getListAttribute('default_addresses');
  }

  // ip_configuration_name - computed: true, optional: true, required: false
  private _ipConfigurationName?: string; 
  public get ipConfigurationName() {
    return this.getStringAttribute('ip_configuration_name');
  }
  public set ipConfigurationName(value: string) {
    this._ipConfigurationName = value;
  }
  public resetIpConfigurationName() {
    this._ipConfigurationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationNameInput() {
    return this._ipConfigurationName;
  }

  // tunnel_ip_addresses - computed: true, optional: false, required: false
  public get tunnelIpAddresses() {
    return this.getListAttribute('tunnel_ip_addresses');
  }
}

export class VirtualNetworkGatewayBgpSettingsPeeringAddressesList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkGatewayBgpSettingsPeeringAddresses[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference {
    return new VirtualNetworkGatewayBgpSettingsPeeringAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkGatewayBgpSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#asn VirtualNetworkGateway#asn}
  */
  readonly asn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#peer_weight VirtualNetworkGateway#peer_weight}
  */
  readonly peerWeight?: number;
  /**
  * peering_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#peering_addresses VirtualNetworkGateway#peering_addresses}
  */
  readonly peeringAddresses?: VirtualNetworkGatewayBgpSettingsPeeringAddresses[] | cdktf.IResolvable;
}

export function virtualNetworkGatewayBgpSettingsToTerraform(struct?: VirtualNetworkGatewayBgpSettingsOutputReference | VirtualNetworkGatewayBgpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    peer_weight: cdktf.numberToTerraform(struct!.peerWeight),
    peering_addresses: cdktf.listMapper(virtualNetworkGatewayBgpSettingsPeeringAddressesToTerraform, true)(struct!.peeringAddresses),
  }
}


export function virtualNetworkGatewayBgpSettingsToHclTerraform(struct?: VirtualNetworkGatewayBgpSettingsOutputReference | VirtualNetworkGatewayBgpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_weight: {
      value: cdktf.numberToHclTerraform(struct!.peerWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peering_addresses: {
      value: cdktf.listMapperHcl(virtualNetworkGatewayBgpSettingsPeeringAddressesToHclTerraform, true)(struct!.peeringAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkGatewayBgpSettingsPeeringAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayBgpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkGatewayBgpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._peerWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerWeight = this._peerWeight;
    }
    if (this._peeringAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peeringAddresses = this._peeringAddresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayBgpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asn = undefined;
      this._peerWeight = undefined;
      this._peeringAddresses.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asn = value.asn;
      this._peerWeight = value.peerWeight;
      this._peeringAddresses.internalValue = value.peeringAddresses;
    }
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // peer_weight - computed: false, optional: true, required: false
  private _peerWeight?: number; 
  public get peerWeight() {
    return this.getNumberAttribute('peer_weight');
  }
  public set peerWeight(value: number) {
    this._peerWeight = value;
  }
  public resetPeerWeight() {
    this._peerWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerWeightInput() {
    return this._peerWeight;
  }

  // peering_addresses - computed: false, optional: true, required: false
  private _peeringAddresses = new VirtualNetworkGatewayBgpSettingsPeeringAddressesList(this, "peering_addresses", false);
  public get peeringAddresses() {
    return this._peeringAddresses;
  }
  public putPeeringAddresses(value: VirtualNetworkGatewayBgpSettingsPeeringAddresses[] | cdktf.IResolvable) {
    this._peeringAddresses.internalValue = value;
  }
  public resetPeeringAddresses() {
    this._peeringAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringAddressesInput() {
    return this._peeringAddresses.internalValue;
  }
}
export interface VirtualNetworkGatewayCustomRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#address_prefixes VirtualNetworkGateway#address_prefixes}
  */
  readonly addressPrefixes?: string[];
}

export function virtualNetworkGatewayCustomRouteToTerraform(struct?: VirtualNetworkGatewayCustomRouteOutputReference | VirtualNetworkGatewayCustomRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addressPrefixes),
  }
}


export function virtualNetworkGatewayCustomRouteToHclTerraform(struct?: VirtualNetworkGatewayCustomRouteOutputReference | VirtualNetworkGatewayCustomRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addressPrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayCustomRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkGatewayCustomRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressPrefixes = this._addressPrefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayCustomRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressPrefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressPrefixes = value.addressPrefixes;
    }
  }

  // address_prefixes - computed: false, optional: true, required: false
  private _addressPrefixes?: string[]; 
  public get addressPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('address_prefixes'));
  }
  public set addressPrefixes(value: string[]) {
    this._addressPrefixes = value;
  }
  public resetAddressPrefixes() {
    this._addressPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixesInput() {
    return this._addressPrefixes;
  }
}
export interface VirtualNetworkGatewayIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#private_ip_address_allocation VirtualNetworkGateway#private_ip_address_allocation}
  */
  readonly privateIpAddressAllocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#public_ip_address_id VirtualNetworkGateway#public_ip_address_id}
  */
  readonly publicIpAddressId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#subnet_id VirtualNetworkGateway#subnet_id}
  */
  readonly subnetId: string;
}

export function virtualNetworkGatewayIpConfigurationToTerraform(struct?: VirtualNetworkGatewayIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function virtualNetworkGatewayIpConfigurationToHclTerraform(struct?: VirtualNetworkGatewayIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip_address_allocation: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddressAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip_address_id: {
      value: cdktf.stringToHclTerraform(struct!.publicIpAddressId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayIpConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualNetworkGatewayIpConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privateIpAddressAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddressAllocation = this._privateIpAddressAllocation;
    }
    if (this._publicIpAddressId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAddressId = this._publicIpAddressId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayIpConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._privateIpAddressAllocation = undefined;
      this._publicIpAddressId = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._privateIpAddressAllocation = value.privateIpAddressAllocation;
      this._publicIpAddressId = value.publicIpAddressId;
      this._subnetId = value.subnetId;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // private_ip_address_allocation - computed: false, optional: true, required: false
  private _privateIpAddressAllocation?: string; 
  public get privateIpAddressAllocation() {
    return this.getStringAttribute('private_ip_address_allocation');
  }
  public set privateIpAddressAllocation(value: string) {
    this._privateIpAddressAllocation = value;
  }
  public resetPrivateIpAddressAllocation() {
    this._privateIpAddressAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressAllocationInput() {
    return this._privateIpAddressAllocation;
  }

  // public_ip_address_id - computed: false, optional: false, required: true
  private _publicIpAddressId?: string; 
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }
  public set publicIpAddressId(value: string) {
    this._publicIpAddressId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressIdInput() {
    return this._publicIpAddressId;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class VirtualNetworkGatewayIpConfigurationList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkGatewayIpConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualNetworkGatewayIpConfigurationOutputReference {
    return new VirtualNetworkGatewayIpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkGatewayPolicyGroupPolicyMember {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#type VirtualNetworkGateway#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#value VirtualNetworkGateway#value}
  */
  readonly value: string;
}

export function virtualNetworkGatewayPolicyGroupPolicyMemberToTerraform(struct?: VirtualNetworkGatewayPolicyGroupPolicyMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function virtualNetworkGatewayPolicyGroupPolicyMemberToHclTerraform(struct?: VirtualNetworkGatewayPolicyGroupPolicyMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayPolicyGroupPolicyMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualNetworkGatewayPolicyGroupPolicyMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayPolicyGroupPolicyMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
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
    return this._name;
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
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VirtualNetworkGatewayPolicyGroupPolicyMemberList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkGatewayPolicyGroupPolicyMember[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualNetworkGatewayPolicyGroupPolicyMemberOutputReference {
    return new VirtualNetworkGatewayPolicyGroupPolicyMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkGatewayPolicyGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#is_default VirtualNetworkGateway#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#priority VirtualNetworkGateway#priority}
  */
  readonly priority?: number;
  /**
  * policy_member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#policy_member VirtualNetworkGateway#policy_member}
  */
  readonly policyMember: VirtualNetworkGatewayPolicyGroupPolicyMember[] | cdktf.IResolvable;
}

export function virtualNetworkGatewayPolicyGroupToTerraform(struct?: VirtualNetworkGatewayPolicyGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    policy_member: cdktf.listMapper(virtualNetworkGatewayPolicyGroupPolicyMemberToTerraform, true)(struct!.policyMember),
  }
}


export function virtualNetworkGatewayPolicyGroupToHclTerraform(struct?: VirtualNetworkGatewayPolicyGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_member: {
      value: cdktf.listMapperHcl(virtualNetworkGatewayPolicyGroupPolicyMemberToHclTerraform, true)(struct!.policyMember),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkGatewayPolicyGroupPolicyMemberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayPolicyGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualNetworkGatewayPolicyGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._policyMember?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyMember = this._policyMember?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayPolicyGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isDefault = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._policyMember.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isDefault = value.isDefault;
      this._name = value.name;
      this._priority = value.priority;
      this._policyMember.internalValue = value.policyMember;
    }
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
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
    return this._name;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // policy_member - computed: false, optional: false, required: true
  private _policyMember = new VirtualNetworkGatewayPolicyGroupPolicyMemberList(this, "policy_member", false);
  public get policyMember() {
    return this._policyMember;
  }
  public putPolicyMember(value: VirtualNetworkGatewayPolicyGroupPolicyMember[] | cdktf.IResolvable) {
    this._policyMember.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyMemberInput() {
    return this._policyMember.internalValue;
  }
}

export class VirtualNetworkGatewayPolicyGroupList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkGatewayPolicyGroup[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualNetworkGatewayPolicyGroupOutputReference {
    return new VirtualNetworkGatewayPolicyGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#create VirtualNetworkGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#delete VirtualNetworkGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#read VirtualNetworkGateway#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#update VirtualNetworkGateway#update}
  */
  readonly update?: string;
}

export function virtualNetworkGatewayTimeoutsToTerraform(struct?: VirtualNetworkGatewayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function virtualNetworkGatewayTimeoutsToHclTerraform(struct?: VirtualNetworkGatewayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualNetworkGatewayTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface VirtualNetworkGatewayVpnClientConfigurationIpsecPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#dh_group VirtualNetworkGateway#dh_group}
  */
  readonly dhGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#ike_encryption VirtualNetworkGateway#ike_encryption}
  */
  readonly ikeEncryption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#ike_integrity VirtualNetworkGateway#ike_integrity}
  */
  readonly ikeIntegrity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#ipsec_encryption VirtualNetworkGateway#ipsec_encryption}
  */
  readonly ipsecEncryption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#ipsec_integrity VirtualNetworkGateway#ipsec_integrity}
  */
  readonly ipsecIntegrity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#pfs_group VirtualNetworkGateway#pfs_group}
  */
  readonly pfsGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#sa_data_size_in_kilobytes VirtualNetworkGateway#sa_data_size_in_kilobytes}
  */
  readonly saDataSizeInKilobytes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#sa_lifetime_in_seconds VirtualNetworkGateway#sa_lifetime_in_seconds}
  */
  readonly saLifetimeInSeconds: number;
}

export function virtualNetworkGatewayVpnClientConfigurationIpsecPolicyToTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationIpsecPolicyOutputReference | VirtualNetworkGatewayVpnClientConfigurationIpsecPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dh_group: cdktf.stringToTerraform(struct!.dhGroup),
    ike_encryption: cdktf.stringToTerraform(struct!.ikeEncryption),
    ike_integrity: cdktf.stringToTerraform(struct!.ikeIntegrity),
    ipsec_encryption: cdktf.stringToTerraform(struct!.ipsecEncryption),
    ipsec_integrity: cdktf.stringToTerraform(struct!.ipsecIntegrity),
    pfs_group: cdktf.stringToTerraform(struct!.pfsGroup),
    sa_data_size_in_kilobytes: cdktf.numberToTerraform(struct!.saDataSizeInKilobytes),
    sa_lifetime_in_seconds: cdktf.numberToTerraform(struct!.saLifetimeInSeconds),
  }
}


export function virtualNetworkGatewayVpnClientConfigurationIpsecPolicyToHclTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationIpsecPolicyOutputReference | VirtualNetworkGatewayVpnClientConfigurationIpsecPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dh_group: {
      value: cdktf.stringToHclTerraform(struct!.dhGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_encryption: {
      value: cdktf.stringToHclTerraform(struct!.ikeEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_integrity: {
      value: cdktf.stringToHclTerraform(struct!.ikeIntegrity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_encryption: {
      value: cdktf.stringToHclTerraform(struct!.ipsecEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_integrity: {
      value: cdktf.stringToHclTerraform(struct!.ipsecIntegrity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pfs_group: {
      value: cdktf.stringToHclTerraform(struct!.pfsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sa_data_size_in_kilobytes: {
      value: cdktf.numberToHclTerraform(struct!.saDataSizeInKilobytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sa_lifetime_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.saLifetimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayVpnClientConfigurationIpsecPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkGatewayVpnClientConfigurationIpsecPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhGroup = this._dhGroup;
    }
    if (this._ikeEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeEncryption = this._ikeEncryption;
    }
    if (this._ikeIntegrity !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeIntegrity = this._ikeIntegrity;
    }
    if (this._ipsecEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecEncryption = this._ipsecEncryption;
    }
    if (this._ipsecIntegrity !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecIntegrity = this._ipsecIntegrity;
    }
    if (this._pfsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfsGroup = this._pfsGroup;
    }
    if (this._saDataSizeInKilobytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.saDataSizeInKilobytes = this._saDataSizeInKilobytes;
    }
    if (this._saLifetimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.saLifetimeInSeconds = this._saLifetimeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayVpnClientConfigurationIpsecPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhGroup = undefined;
      this._ikeEncryption = undefined;
      this._ikeIntegrity = undefined;
      this._ipsecEncryption = undefined;
      this._ipsecIntegrity = undefined;
      this._pfsGroup = undefined;
      this._saDataSizeInKilobytes = undefined;
      this._saLifetimeInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhGroup = value.dhGroup;
      this._ikeEncryption = value.ikeEncryption;
      this._ikeIntegrity = value.ikeIntegrity;
      this._ipsecEncryption = value.ipsecEncryption;
      this._ipsecIntegrity = value.ipsecIntegrity;
      this._pfsGroup = value.pfsGroup;
      this._saDataSizeInKilobytes = value.saDataSizeInKilobytes;
      this._saLifetimeInSeconds = value.saLifetimeInSeconds;
    }
  }

  // dh_group - computed: false, optional: false, required: true
  private _dhGroup?: string; 
  public get dhGroup() {
    return this.getStringAttribute('dh_group');
  }
  public set dhGroup(value: string) {
    this._dhGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // ike_encryption - computed: false, optional: false, required: true
  private _ikeEncryption?: string; 
  public get ikeEncryption() {
    return this.getStringAttribute('ike_encryption');
  }
  public set ikeEncryption(value: string) {
    this._ikeEncryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeEncryptionInput() {
    return this._ikeEncryption;
  }

  // ike_integrity - computed: false, optional: false, required: true
  private _ikeIntegrity?: string; 
  public get ikeIntegrity() {
    return this.getStringAttribute('ike_integrity');
  }
  public set ikeIntegrity(value: string) {
    this._ikeIntegrity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeIntegrityInput() {
    return this._ikeIntegrity;
  }

  // ipsec_encryption - computed: false, optional: false, required: true
  private _ipsecEncryption?: string; 
  public get ipsecEncryption() {
    return this.getStringAttribute('ipsec_encryption');
  }
  public set ipsecEncryption(value: string) {
    this._ipsecEncryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEncryptionInput() {
    return this._ipsecEncryption;
  }

  // ipsec_integrity - computed: false, optional: false, required: true
  private _ipsecIntegrity?: string; 
  public get ipsecIntegrity() {
    return this.getStringAttribute('ipsec_integrity');
  }
  public set ipsecIntegrity(value: string) {
    this._ipsecIntegrity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecIntegrityInput() {
    return this._ipsecIntegrity;
  }

  // pfs_group - computed: false, optional: false, required: true
  private _pfsGroup?: string; 
  public get pfsGroup() {
    return this.getStringAttribute('pfs_group');
  }
  public set pfsGroup(value: string) {
    this._pfsGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pfsGroupInput() {
    return this._pfsGroup;
  }

  // sa_data_size_in_kilobytes - computed: false, optional: false, required: true
  private _saDataSizeInKilobytes?: number; 
  public get saDataSizeInKilobytes() {
    return this.getNumberAttribute('sa_data_size_in_kilobytes');
  }
  public set saDataSizeInKilobytes(value: number) {
    this._saDataSizeInKilobytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saDataSizeInKilobytesInput() {
    return this._saDataSizeInKilobytes;
  }

  // sa_lifetime_in_seconds - computed: false, optional: false, required: true
  private _saLifetimeInSeconds?: number; 
  public get saLifetimeInSeconds() {
    return this.getNumberAttribute('sa_lifetime_in_seconds');
  }
  public set saLifetimeInSeconds(value: number) {
    this._saLifetimeInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saLifetimeInSecondsInput() {
    return this._saLifetimeInSeconds;
  }
}
export interface VirtualNetworkGatewayVpnClientConfigurationRadiusServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#address VirtualNetworkGateway#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#score VirtualNetworkGateway#score}
  */
  readonly score: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#secret VirtualNetworkGateway#secret}
  */
  readonly secret: string;
}

export function virtualNetworkGatewayVpnClientConfigurationRadiusServerToTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationRadiusServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    score: cdktf.numberToTerraform(struct!.score),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function virtualNetworkGatewayVpnClientConfigurationRadiusServerToHclTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationRadiusServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    score: {
      value: cdktf.numberToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayVpnClientConfigurationRadiusServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualNetworkGatewayVpnClientConfigurationRadiusServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayVpnClientConfigurationRadiusServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._score = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._score = value.score;
      this._secret = value.secret;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // score - computed: false, optional: false, required: true
  private _score?: number; 
  public get score() {
    return this.getNumberAttribute('score');
  }
  public set score(value: number) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}

export class VirtualNetworkGatewayVpnClientConfigurationRadiusServerList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkGatewayVpnClientConfigurationRadiusServer[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualNetworkGatewayVpnClientConfigurationRadiusServerOutputReference {
    return new VirtualNetworkGatewayVpnClientConfigurationRadiusServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#thumbprint VirtualNetworkGateway#thumbprint}
  */
  readonly thumbprint: string;
}

export function virtualNetworkGatewayVpnClientConfigurationRevokedCertificateToTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
  }
}


export function virtualNetworkGatewayVpnClientConfigurationRevokedCertificateToHclTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._thumbprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._thumbprint = value.thumbprint;
    }
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
    return this._name;
  }

  // thumbprint - computed: false, optional: false, required: true
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }
}

export class VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference {
    return new VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkGatewayVpnClientConfigurationRootCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#public_cert_data VirtualNetworkGateway#public_cert_data}
  */
  readonly publicCertData: string;
}

export function virtualNetworkGatewayVpnClientConfigurationRootCertificateToTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationRootCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    public_cert_data: cdktf.stringToTerraform(struct!.publicCertData),
  }
}


export function virtualNetworkGatewayVpnClientConfigurationRootCertificateToHclTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationRootCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_cert_data: {
      value: cdktf.stringToHclTerraform(struct!.publicCertData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualNetworkGatewayVpnClientConfigurationRootCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publicCertData !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicCertData = this._publicCertData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayVpnClientConfigurationRootCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._publicCertData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._publicCertData = value.publicCertData;
    }
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
    return this._name;
  }

  // public_cert_data - computed: false, optional: false, required: true
  private _publicCertData?: string; 
  public get publicCertData() {
    return this.getStringAttribute('public_cert_data');
  }
  public set publicCertData(value: string) {
    this._publicCertData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicCertDataInput() {
    return this._publicCertData;
  }
}

export class VirtualNetworkGatewayVpnClientConfigurationRootCertificateList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkGatewayVpnClientConfigurationRootCertificate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference {
    return new VirtualNetworkGatewayVpnClientConfigurationRootCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkGatewayVpnClientConfigurationVirtualNetworkGatewayClientConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#address_prefixes VirtualNetworkGateway#address_prefixes}
  */
  readonly addressPrefixes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#name VirtualNetworkGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#policy_group_names VirtualNetworkGateway#policy_group_names}
  */
  readonly policyGroupNames: string[];
}

export function virtualNetworkGatewayVpnClientConfigurationVirtualNetworkGatewayClientConnectionToTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationVirtualNetworkGatewayClientConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addressPrefixes),
    name: cdktf.stringToTerraform(struct!.name),
    policy_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyGroupNames),
  }
}


export function virtualNetworkGatewayVpnClientConfigurationVirtualNetworkGatewayClientConnectionToHclTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationVirtualNetworkGatewayClientConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addressPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_group_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyGroupNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayVpnClientConfigurationVirtualNetworkGatewayClientConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualNetworkGatewayVpnClientConfigurationVirtualNetworkGatewayClientConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressPrefixes = this._addressPrefixes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policyGroupNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyGroupNames = this._policyGroupNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayVpnClientConfigurationVirtualNetworkGatewayClientConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressPrefixes = undefined;
      this._name = undefined;
      this._policyGroupNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressPrefixes = value.addressPrefixes;
      this._name = value.name;
      this._policyGroupNames = value.policyGroupNames;
    }
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
    return this._addressPrefixes;
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
    return this._name;
  }

  // policy_group_names - computed: false, optional: false, required: true
  private _policyGroupNames?: string[]; 
  public get policyGroupNames() {
    return this.getListAttribute('policy_group_names');
  }
  public set policyGroupNames(value: string[]) {
    this._policyGroupNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyGroupNamesInput() {
    return this._policyGroupNames;
  }
}

export class VirtualNetworkGatewayVpnClientConfigurationVirtualNetworkGatewayClientConnectionList extends cdktf.ComplexList {
  public internalValue? : VirtualNetworkGatewayVpnClientConfigurationVirtualNetworkGatewayClientConnection[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VirtualNetworkGatewayVpnClientConfigurationVirtualNetworkGatewayClientConnectionOutputReference {
    return new VirtualNetworkGatewayVpnClientConfigurationVirtualNetworkGatewayClientConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualNetworkGatewayVpnClientConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#aad_audience VirtualNetworkGateway#aad_audience}
  */
  readonly aadAudience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#aad_issuer VirtualNetworkGateway#aad_issuer}
  */
  readonly aadIssuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#aad_tenant VirtualNetworkGateway#aad_tenant}
  */
  readonly aadTenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#address_space VirtualNetworkGateway#address_space}
  */
  readonly addressSpace: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#radius_server_address VirtualNetworkGateway#radius_server_address}
  */
  readonly radiusServerAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#radius_server_secret VirtualNetworkGateway#radius_server_secret}
  */
  readonly radiusServerSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#vpn_auth_types VirtualNetworkGateway#vpn_auth_types}
  */
  readonly vpnAuthTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#vpn_client_protocols VirtualNetworkGateway#vpn_client_protocols}
  */
  readonly vpnClientProtocols?: string[];
  /**
  * ipsec_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#ipsec_policy VirtualNetworkGateway#ipsec_policy}
  */
  readonly ipsecPolicy?: VirtualNetworkGatewayVpnClientConfigurationIpsecPolicy;
  /**
  * radius_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#radius_server VirtualNetworkGateway#radius_server}
  */
  readonly radiusServer?: VirtualNetworkGatewayVpnClientConfigurationRadiusServer[] | cdktf.IResolvable;
  /**
  * revoked_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#revoked_certificate VirtualNetworkGateway#revoked_certificate}
  */
  readonly revokedCertificate?: VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate[] | cdktf.IResolvable;
  /**
  * root_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#root_certificate VirtualNetworkGateway#root_certificate}
  */
  readonly rootCertificate?: VirtualNetworkGatewayVpnClientConfigurationRootCertificate[] | cdktf.IResolvable;
  /**
  * virtual_network_gateway_client_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#virtual_network_gateway_client_connection VirtualNetworkGateway#virtual_network_gateway_client_connection}
  */
  readonly virtualNetworkGatewayClientConnection?: VirtualNetworkGatewayVpnClientConfigurationVirtualNetworkGatewayClientConnection[] | cdktf.IResolvable;
}

export function virtualNetworkGatewayVpnClientConfigurationToTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationOutputReference | VirtualNetworkGatewayVpnClientConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aad_audience: cdktf.stringToTerraform(struct!.aadAudience),
    aad_issuer: cdktf.stringToTerraform(struct!.aadIssuer),
    aad_tenant: cdktf.stringToTerraform(struct!.aadTenant),
    address_space: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addressSpace),
    radius_server_address: cdktf.stringToTerraform(struct!.radiusServerAddress),
    radius_server_secret: cdktf.stringToTerraform(struct!.radiusServerSecret),
    vpn_auth_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpnAuthTypes),
    vpn_client_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpnClientProtocols),
    ipsec_policy: virtualNetworkGatewayVpnClientConfigurationIpsecPolicyToTerraform(struct!.ipsecPolicy),
    radius_server: cdktf.listMapper(virtualNetworkGatewayVpnClientConfigurationRadiusServerToTerraform, true)(struct!.radiusServer),
    revoked_certificate: cdktf.listMapper(virtualNetworkGatewayVpnClientConfigurationRevokedCertificateToTerraform, true)(struct!.revokedCertificate),
    root_certificate: cdktf.listMapper(virtualNetworkGatewayVpnClientConfigurationRootCertificateToTerraform, true)(struct!.rootCertificate),
    virtual_network_gateway_client_connection: cdktf.listMapper(virtualNetworkGatewayVpnClientConfigurationVirtualNetworkGatewayClientConnectionToTerraform, true)(struct!.virtualNetworkGatewayClientConnection),
  }
}


export function virtualNetworkGatewayVpnClientConfigurationToHclTerraform(struct?: VirtualNetworkGatewayVpnClientConfigurationOutputReference | VirtualNetworkGatewayVpnClientConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aad_audience: {
      value: cdktf.stringToHclTerraform(struct!.aadAudience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aad_issuer: {
      value: cdktf.stringToHclTerraform(struct!.aadIssuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aad_tenant: {
      value: cdktf.stringToHclTerraform(struct!.aadTenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_space: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addressSpace),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    radius_server_address: {
      value: cdktf.stringToHclTerraform(struct!.radiusServerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_server_secret: {
      value: cdktf.stringToHclTerraform(struct!.radiusServerSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_auth_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpnAuthTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vpn_client_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpnClientProtocols),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ipsec_policy: {
      value: virtualNetworkGatewayVpnClientConfigurationIpsecPolicyToHclTerraform(struct!.ipsecPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkGatewayVpnClientConfigurationIpsecPolicyList",
    },
    radius_server: {
      value: cdktf.listMapperHcl(virtualNetworkGatewayVpnClientConfigurationRadiusServerToHclTerraform, true)(struct!.radiusServer),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkGatewayVpnClientConfigurationRadiusServerList",
    },
    revoked_certificate: {
      value: cdktf.listMapperHcl(virtualNetworkGatewayVpnClientConfigurationRevokedCertificateToHclTerraform, true)(struct!.revokedCertificate),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList",
    },
    root_certificate: {
      value: cdktf.listMapperHcl(virtualNetworkGatewayVpnClientConfigurationRootCertificateToHclTerraform, true)(struct!.rootCertificate),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualNetworkGatewayVpnClientConfigurationRootCertificateList",
    },
    virtual_network_gateway_client_connection: {
      value: cdktf.listMapperHcl(virtualNetworkGatewayVpnClientConfigurationVirtualNetworkGatewayClientConnectionToHclTerraform, true)(struct!.virtualNetworkGatewayClientConnection),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualNetworkGatewayVpnClientConfigurationVirtualNetworkGatewayClientConnectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualNetworkGatewayVpnClientConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualNetworkGatewayVpnClientConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aadAudience !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadAudience = this._aadAudience;
    }
    if (this._aadIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadIssuer = this._aadIssuer;
    }
    if (this._aadTenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadTenant = this._aadTenant;
    }
    if (this._addressSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressSpace = this._addressSpace;
    }
    if (this._radiusServerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusServerAddress = this._radiusServerAddress;
    }
    if (this._radiusServerSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusServerSecret = this._radiusServerSecret;
    }
    if (this._vpnAuthTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnAuthTypes = this._vpnAuthTypes;
    }
    if (this._vpnClientProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnClientProtocols = this._vpnClientProtocols;
    }
    if (this._ipsecPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPolicy = this._ipsecPolicy?.internalValue;
    }
    if (this._radiusServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusServer = this._radiusServer?.internalValue;
    }
    if (this._revokedCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revokedCertificate = this._revokedCertificate?.internalValue;
    }
    if (this._rootCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCertificate = this._rootCertificate?.internalValue;
    }
    if (this._virtualNetworkGatewayClientConnection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkGatewayClientConnection = this._virtualNetworkGatewayClientConnection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualNetworkGatewayVpnClientConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aadAudience = undefined;
      this._aadIssuer = undefined;
      this._aadTenant = undefined;
      this._addressSpace = undefined;
      this._radiusServerAddress = undefined;
      this._radiusServerSecret = undefined;
      this._vpnAuthTypes = undefined;
      this._vpnClientProtocols = undefined;
      this._ipsecPolicy.internalValue = undefined;
      this._radiusServer.internalValue = undefined;
      this._revokedCertificate.internalValue = undefined;
      this._rootCertificate.internalValue = undefined;
      this._virtualNetworkGatewayClientConnection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aadAudience = value.aadAudience;
      this._aadIssuer = value.aadIssuer;
      this._aadTenant = value.aadTenant;
      this._addressSpace = value.addressSpace;
      this._radiusServerAddress = value.radiusServerAddress;
      this._radiusServerSecret = value.radiusServerSecret;
      this._vpnAuthTypes = value.vpnAuthTypes;
      this._vpnClientProtocols = value.vpnClientProtocols;
      this._ipsecPolicy.internalValue = value.ipsecPolicy;
      this._radiusServer.internalValue = value.radiusServer;
      this._revokedCertificate.internalValue = value.revokedCertificate;
      this._rootCertificate.internalValue = value.rootCertificate;
      this._virtualNetworkGatewayClientConnection.internalValue = value.virtualNetworkGatewayClientConnection;
    }
  }

  // aad_audience - computed: false, optional: true, required: false
  private _aadAudience?: string; 
  public get aadAudience() {
    return this.getStringAttribute('aad_audience');
  }
  public set aadAudience(value: string) {
    this._aadAudience = value;
  }
  public resetAadAudience() {
    this._aadAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadAudienceInput() {
    return this._aadAudience;
  }

  // aad_issuer - computed: false, optional: true, required: false
  private _aadIssuer?: string; 
  public get aadIssuer() {
    return this.getStringAttribute('aad_issuer');
  }
  public set aadIssuer(value: string) {
    this._aadIssuer = value;
  }
  public resetAadIssuer() {
    this._aadIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadIssuerInput() {
    return this._aadIssuer;
  }

  // aad_tenant - computed: false, optional: true, required: false
  private _aadTenant?: string; 
  public get aadTenant() {
    return this.getStringAttribute('aad_tenant');
  }
  public set aadTenant(value: string) {
    this._aadTenant = value;
  }
  public resetAadTenant() {
    this._aadTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadTenantInput() {
    return this._aadTenant;
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
    return this._addressSpace;
  }

  // radius_server_address - computed: false, optional: true, required: false
  private _radiusServerAddress?: string; 
  public get radiusServerAddress() {
    return this.getStringAttribute('radius_server_address');
  }
  public set radiusServerAddress(value: string) {
    this._radiusServerAddress = value;
  }
  public resetRadiusServerAddress() {
    this._radiusServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerAddressInput() {
    return this._radiusServerAddress;
  }

  // radius_server_secret - computed: false, optional: true, required: false
  private _radiusServerSecret?: string; 
  public get radiusServerSecret() {
    return this.getStringAttribute('radius_server_secret');
  }
  public set radiusServerSecret(value: string) {
    this._radiusServerSecret = value;
  }
  public resetRadiusServerSecret() {
    this._radiusServerSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerSecretInput() {
    return this._radiusServerSecret;
  }

  // vpn_auth_types - computed: true, optional: true, required: false
  private _vpnAuthTypes?: string[]; 
  public get vpnAuthTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('vpn_auth_types'));
  }
  public set vpnAuthTypes(value: string[]) {
    this._vpnAuthTypes = value;
  }
  public resetVpnAuthTypes() {
    this._vpnAuthTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnAuthTypesInput() {
    return this._vpnAuthTypes;
  }

  // vpn_client_protocols - computed: true, optional: true, required: false
  private _vpnClientProtocols?: string[]; 
  public get vpnClientProtocols() {
    return cdktf.Fn.tolist(this.getListAttribute('vpn_client_protocols'));
  }
  public set vpnClientProtocols(value: string[]) {
    this._vpnClientProtocols = value;
  }
  public resetVpnClientProtocols() {
    this._vpnClientProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnClientProtocolsInput() {
    return this._vpnClientProtocols;
  }

  // ipsec_policy - computed: false, optional: true, required: false
  private _ipsecPolicy = new VirtualNetworkGatewayVpnClientConfigurationIpsecPolicyOutputReference(this, "ipsec_policy");
  public get ipsecPolicy() {
    return this._ipsecPolicy;
  }
  public putIpsecPolicy(value: VirtualNetworkGatewayVpnClientConfigurationIpsecPolicy) {
    this._ipsecPolicy.internalValue = value;
  }
  public resetIpsecPolicy() {
    this._ipsecPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPolicyInput() {
    return this._ipsecPolicy.internalValue;
  }

  // radius_server - computed: false, optional: true, required: false
  private _radiusServer = new VirtualNetworkGatewayVpnClientConfigurationRadiusServerList(this, "radius_server", false);
  public get radiusServer() {
    return this._radiusServer;
  }
  public putRadiusServer(value: VirtualNetworkGatewayVpnClientConfigurationRadiusServer[] | cdktf.IResolvable) {
    this._radiusServer.internalValue = value;
  }
  public resetRadiusServer() {
    this._radiusServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerInput() {
    return this._radiusServer.internalValue;
  }

  // revoked_certificate - computed: false, optional: true, required: false
  private _revokedCertificate = new VirtualNetworkGatewayVpnClientConfigurationRevokedCertificateList(this, "revoked_certificate", true);
  public get revokedCertificate() {
    return this._revokedCertificate;
  }
  public putRevokedCertificate(value: VirtualNetworkGatewayVpnClientConfigurationRevokedCertificate[] | cdktf.IResolvable) {
    this._revokedCertificate.internalValue = value;
  }
  public resetRevokedCertificate() {
    this._revokedCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedCertificateInput() {
    return this._revokedCertificate.internalValue;
  }

  // root_certificate - computed: false, optional: true, required: false
  private _rootCertificate = new VirtualNetworkGatewayVpnClientConfigurationRootCertificateList(this, "root_certificate", true);
  public get rootCertificate() {
    return this._rootCertificate;
  }
  public putRootCertificate(value: VirtualNetworkGatewayVpnClientConfigurationRootCertificate[] | cdktf.IResolvable) {
    this._rootCertificate.internalValue = value;
  }
  public resetRootCertificate() {
    this._rootCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCertificateInput() {
    return this._rootCertificate.internalValue;
  }

  // virtual_network_gateway_client_connection - computed: false, optional: true, required: false
  private _virtualNetworkGatewayClientConnection = new VirtualNetworkGatewayVpnClientConfigurationVirtualNetworkGatewayClientConnectionList(this, "virtual_network_gateway_client_connection", false);
  public get virtualNetworkGatewayClientConnection() {
    return this._virtualNetworkGatewayClientConnection;
  }
  public putVirtualNetworkGatewayClientConnection(value: VirtualNetworkGatewayVpnClientConfigurationVirtualNetworkGatewayClientConnection[] | cdktf.IResolvable) {
    this._virtualNetworkGatewayClientConnection.internalValue = value;
  }
  public resetVirtualNetworkGatewayClientConnection() {
    this._virtualNetworkGatewayClientConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkGatewayClientConnectionInput() {
    return this._virtualNetworkGatewayClientConnection.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway azurerm_virtual_network_gateway}
*/
export class VirtualNetworkGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_virtual_network_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualNetworkGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualNetworkGateway to import
  * @param importFromId The id of the existing VirtualNetworkGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualNetworkGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_virtual_network_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_network_gateway azurerm_virtual_network_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualNetworkGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualNetworkGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_network_gateway',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeActive = config.activeActive;
    this._bgpRouteTranslationForNatEnabled = config.bgpRouteTranslationForNatEnabled;
    this._defaultLocalNetworkGatewayId = config.defaultLocalNetworkGatewayId;
    this._dnsForwardingEnabled = config.dnsForwardingEnabled;
    this._edgeZone = config.edgeZone;
    this._enableBgp = config.enableBgp;
    this._generation = config.generation;
    this._id = config.id;
    this._ipSecReplayProtectionEnabled = config.ipSecReplayProtectionEnabled;
    this._location = config.location;
    this._name = config.name;
    this._privateIpAddressEnabled = config.privateIpAddressEnabled;
    this._remoteVnetTrafficEnabled = config.remoteVnetTrafficEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._type = config.type;
    this._virtualWanTrafficEnabled = config.virtualWanTrafficEnabled;
    this._vpnType = config.vpnType;
    this._bgpSettings.internalValue = config.bgpSettings;
    this._customRoute.internalValue = config.customRoute;
    this._ipConfiguration.internalValue = config.ipConfiguration;
    this._policyGroup.internalValue = config.policyGroup;
    this._timeouts.internalValue = config.timeouts;
    this._vpnClientConfiguration.internalValue = config.vpnClientConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_active - computed: true, optional: true, required: false
  private _activeActive?: boolean | cdktf.IResolvable; 
  public get activeActive() {
    return this.getBooleanAttribute('active_active');
  }
  public set activeActive(value: boolean | cdktf.IResolvable) {
    this._activeActive = value;
  }
  public resetActiveActive() {
    this._activeActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeActiveInput() {
    return this._activeActive;
  }

  // bgp_route_translation_for_nat_enabled - computed: false, optional: true, required: false
  private _bgpRouteTranslationForNatEnabled?: boolean | cdktf.IResolvable; 
  public get bgpRouteTranslationForNatEnabled() {
    return this.getBooleanAttribute('bgp_route_translation_for_nat_enabled');
  }
  public set bgpRouteTranslationForNatEnabled(value: boolean | cdktf.IResolvable) {
    this._bgpRouteTranslationForNatEnabled = value;
  }
  public resetBgpRouteTranslationForNatEnabled() {
    this._bgpRouteTranslationForNatEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouteTranslationForNatEnabledInput() {
    return this._bgpRouteTranslationForNatEnabled;
  }

  // default_local_network_gateway_id - computed: false, optional: true, required: false
  private _defaultLocalNetworkGatewayId?: string; 
  public get defaultLocalNetworkGatewayId() {
    return this.getStringAttribute('default_local_network_gateway_id');
  }
  public set defaultLocalNetworkGatewayId(value: string) {
    this._defaultLocalNetworkGatewayId = value;
  }
  public resetDefaultLocalNetworkGatewayId() {
    this._defaultLocalNetworkGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLocalNetworkGatewayIdInput() {
    return this._defaultLocalNetworkGatewayId;
  }

  // dns_forwarding_enabled - computed: false, optional: true, required: false
  private _dnsForwardingEnabled?: boolean | cdktf.IResolvable; 
  public get dnsForwardingEnabled() {
    return this.getBooleanAttribute('dns_forwarding_enabled');
  }
  public set dnsForwardingEnabled(value: boolean | cdktf.IResolvable) {
    this._dnsForwardingEnabled = value;
  }
  public resetDnsForwardingEnabled() {
    this._dnsForwardingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsForwardingEnabledInput() {
    return this._dnsForwardingEnabled;
  }

  // edge_zone - computed: false, optional: true, required: false
  private _edgeZone?: string; 
  public get edgeZone() {
    return this.getStringAttribute('edge_zone');
  }
  public set edgeZone(value: string) {
    this._edgeZone = value;
  }
  public resetEdgeZone() {
    this._edgeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeZoneInput() {
    return this._edgeZone;
  }

  // enable_bgp - computed: true, optional: true, required: false
  private _enableBgp?: boolean | cdktf.IResolvable; 
  public get enableBgp() {
    return this.getBooleanAttribute('enable_bgp');
  }
  public set enableBgp(value: boolean | cdktf.IResolvable) {
    this._enableBgp = value;
  }
  public resetEnableBgp() {
    this._enableBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBgpInput() {
    return this._enableBgp;
  }

  // generation - computed: true, optional: true, required: false
  private _generation?: string; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_sec_replay_protection_enabled - computed: false, optional: true, required: false
  private _ipSecReplayProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get ipSecReplayProtectionEnabled() {
    return this.getBooleanAttribute('ip_sec_replay_protection_enabled');
  }
  public set ipSecReplayProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._ipSecReplayProtectionEnabled = value;
  }
  public resetIpSecReplayProtectionEnabled() {
    this._ipSecReplayProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSecReplayProtectionEnabledInput() {
    return this._ipSecReplayProtectionEnabled;
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
    return this._location;
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
    return this._name;
  }

  // private_ip_address_enabled - computed: false, optional: true, required: false
  private _privateIpAddressEnabled?: boolean | cdktf.IResolvable; 
  public get privateIpAddressEnabled() {
    return this.getBooleanAttribute('private_ip_address_enabled');
  }
  public set privateIpAddressEnabled(value: boolean | cdktf.IResolvable) {
    this._privateIpAddressEnabled = value;
  }
  public resetPrivateIpAddressEnabled() {
    this._privateIpAddressEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressEnabledInput() {
    return this._privateIpAddressEnabled;
  }

  // remote_vnet_traffic_enabled - computed: false, optional: true, required: false
  private _remoteVnetTrafficEnabled?: boolean | cdktf.IResolvable; 
  public get remoteVnetTrafficEnabled() {
    return this.getBooleanAttribute('remote_vnet_traffic_enabled');
  }
  public set remoteVnetTrafficEnabled(value: boolean | cdktf.IResolvable) {
    this._remoteVnetTrafficEnabled = value;
  }
  public resetRemoteVnetTrafficEnabled() {
    this._remoteVnetTrafficEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVnetTrafficEnabledInput() {
    return this._remoteVnetTrafficEnabled;
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
    return this._resourceGroupName;
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
    return this._sku;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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
    return this._type;
  }

  // virtual_wan_traffic_enabled - computed: false, optional: true, required: false
  private _virtualWanTrafficEnabled?: boolean | cdktf.IResolvable; 
  public get virtualWanTrafficEnabled() {
    return this.getBooleanAttribute('virtual_wan_traffic_enabled');
  }
  public set virtualWanTrafficEnabled(value: boolean | cdktf.IResolvable) {
    this._virtualWanTrafficEnabled = value;
  }
  public resetVirtualWanTrafficEnabled() {
    this._virtualWanTrafficEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualWanTrafficEnabledInput() {
    return this._virtualWanTrafficEnabled;
  }

  // vpn_type - computed: false, optional: true, required: false
  private _vpnType?: string; 
  public get vpnType() {
    return this.getStringAttribute('vpn_type');
  }
  public set vpnType(value: string) {
    this._vpnType = value;
  }
  public resetVpnType() {
    this._vpnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnTypeInput() {
    return this._vpnType;
  }

  // bgp_settings - computed: false, optional: true, required: false
  private _bgpSettings = new VirtualNetworkGatewayBgpSettingsOutputReference(this, "bgp_settings");
  public get bgpSettings() {
    return this._bgpSettings;
  }
  public putBgpSettings(value: VirtualNetworkGatewayBgpSettings) {
    this._bgpSettings.internalValue = value;
  }
  public resetBgpSettings() {
    this._bgpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpSettingsInput() {
    return this._bgpSettings.internalValue;
  }

  // custom_route - computed: false, optional: true, required: false
  private _customRoute = new VirtualNetworkGatewayCustomRouteOutputReference(this, "custom_route");
  public get customRoute() {
    return this._customRoute;
  }
  public putCustomRoute(value: VirtualNetworkGatewayCustomRoute) {
    this._customRoute.internalValue = value;
  }
  public resetCustomRoute() {
    this._customRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRouteInput() {
    return this._customRoute.internalValue;
  }

  // ip_configuration - computed: false, optional: false, required: true
  private _ipConfiguration = new VirtualNetworkGatewayIpConfigurationList(this, "ip_configuration", false);
  public get ipConfiguration() {
    return this._ipConfiguration;
  }
  public putIpConfiguration(value: VirtualNetworkGatewayIpConfiguration[] | cdktf.IResolvable) {
    this._ipConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration.internalValue;
  }

  // policy_group - computed: false, optional: true, required: false
  private _policyGroup = new VirtualNetworkGatewayPolicyGroupList(this, "policy_group", false);
  public get policyGroup() {
    return this._policyGroup;
  }
  public putPolicyGroup(value: VirtualNetworkGatewayPolicyGroup[] | cdktf.IResolvable) {
    this._policyGroup.internalValue = value;
  }
  public resetPolicyGroup() {
    this._policyGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyGroupInput() {
    return this._policyGroup.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualNetworkGatewayTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualNetworkGatewayTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpn_client_configuration - computed: false, optional: true, required: false
  private _vpnClientConfiguration = new VirtualNetworkGatewayVpnClientConfigurationOutputReference(this, "vpn_client_configuration");
  public get vpnClientConfiguration() {
    return this._vpnClientConfiguration;
  }
  public putVpnClientConfiguration(value: VirtualNetworkGatewayVpnClientConfiguration) {
    this._vpnClientConfiguration.internalValue = value;
  }
  public resetVpnClientConfiguration() {
    this._vpnClientConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnClientConfigurationInput() {
    return this._vpnClientConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_active: cdktf.booleanToTerraform(this._activeActive),
      bgp_route_translation_for_nat_enabled: cdktf.booleanToTerraform(this._bgpRouteTranslationForNatEnabled),
      default_local_network_gateway_id: cdktf.stringToTerraform(this._defaultLocalNetworkGatewayId),
      dns_forwarding_enabled: cdktf.booleanToTerraform(this._dnsForwardingEnabled),
      edge_zone: cdktf.stringToTerraform(this._edgeZone),
      enable_bgp: cdktf.booleanToTerraform(this._enableBgp),
      generation: cdktf.stringToTerraform(this._generation),
      id: cdktf.stringToTerraform(this._id),
      ip_sec_replay_protection_enabled: cdktf.booleanToTerraform(this._ipSecReplayProtectionEnabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      private_ip_address_enabled: cdktf.booleanToTerraform(this._privateIpAddressEnabled),
      remote_vnet_traffic_enabled: cdktf.booleanToTerraform(this._remoteVnetTrafficEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      virtual_wan_traffic_enabled: cdktf.booleanToTerraform(this._virtualWanTrafficEnabled),
      vpn_type: cdktf.stringToTerraform(this._vpnType),
      bgp_settings: virtualNetworkGatewayBgpSettingsToTerraform(this._bgpSettings.internalValue),
      custom_route: virtualNetworkGatewayCustomRouteToTerraform(this._customRoute.internalValue),
      ip_configuration: cdktf.listMapper(virtualNetworkGatewayIpConfigurationToTerraform, true)(this._ipConfiguration.internalValue),
      policy_group: cdktf.listMapper(virtualNetworkGatewayPolicyGroupToTerraform, true)(this._policyGroup.internalValue),
      timeouts: virtualNetworkGatewayTimeoutsToTerraform(this._timeouts.internalValue),
      vpn_client_configuration: virtualNetworkGatewayVpnClientConfigurationToTerraform(this._vpnClientConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_active: {
        value: cdktf.booleanToHclTerraform(this._activeActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_route_translation_for_nat_enabled: {
        value: cdktf.booleanToHclTerraform(this._bgpRouteTranslationForNatEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_local_network_gateway_id: {
        value: cdktf.stringToHclTerraform(this._defaultLocalNetworkGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_forwarding_enabled: {
        value: cdktf.booleanToHclTerraform(this._dnsForwardingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      edge_zone: {
        value: cdktf.stringToHclTerraform(this._edgeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_bgp: {
        value: cdktf.booleanToHclTerraform(this._enableBgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      generation: {
        value: cdktf.stringToHclTerraform(this._generation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_sec_replay_protection_enabled: {
        value: cdktf.booleanToHclTerraform(this._ipSecReplayProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ip_address_enabled: {
        value: cdktf.booleanToHclTerraform(this._privateIpAddressEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remote_vnet_traffic_enabled: {
        value: cdktf.booleanToHclTerraform(this._remoteVnetTrafficEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sku: {
        value: cdktf.stringToHclTerraform(this._sku),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_wan_traffic_enabled: {
        value: cdktf.booleanToHclTerraform(this._virtualWanTrafficEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpn_type: {
        value: cdktf.stringToHclTerraform(this._vpnType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_settings: {
        value: virtualNetworkGatewayBgpSettingsToHclTerraform(this._bgpSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualNetworkGatewayBgpSettingsList",
      },
      custom_route: {
        value: virtualNetworkGatewayCustomRouteToHclTerraform(this._customRoute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualNetworkGatewayCustomRouteList",
      },
      ip_configuration: {
        value: cdktf.listMapperHcl(virtualNetworkGatewayIpConfigurationToHclTerraform, true)(this._ipConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualNetworkGatewayIpConfigurationList",
      },
      policy_group: {
        value: cdktf.listMapperHcl(virtualNetworkGatewayPolicyGroupToHclTerraform, true)(this._policyGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualNetworkGatewayPolicyGroupList",
      },
      timeouts: {
        value: virtualNetworkGatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualNetworkGatewayTimeouts",
      },
      vpn_client_configuration: {
        value: virtualNetworkGatewayVpnClientConfigurationToHclTerraform(this._vpnClientConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualNetworkGatewayVpnClientConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
