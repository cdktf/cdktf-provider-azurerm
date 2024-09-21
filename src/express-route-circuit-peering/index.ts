// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressRouteCircuitPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#express_route_circuit_name ExpressRouteCircuitPeering#express_route_circuit_name}
  */
  readonly expressRouteCircuitName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#id ExpressRouteCircuitPeering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#ipv4_enabled ExpressRouteCircuitPeering#ipv4_enabled}
  */
  readonly ipv4Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#peer_asn ExpressRouteCircuitPeering#peer_asn}
  */
  readonly peerAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#peering_type ExpressRouteCircuitPeering#peering_type}
  */
  readonly peeringType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}
  */
  readonly primaryPeerAddressPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#resource_group_name ExpressRouteCircuitPeering#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}
  */
  readonly routeFilterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}
  */
  readonly secondaryPeerAddressPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#shared_key ExpressRouteCircuitPeering#shared_key}
  */
  readonly sharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#vlan_id ExpressRouteCircuitPeering#vlan_id}
  */
  readonly vlanId: number;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#ipv6 ExpressRouteCircuitPeering#ipv6}
  */
  readonly ipv6?: ExpressRouteCircuitPeeringIpv6;
  /**
  * microsoft_peering_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#microsoft_peering_config ExpressRouteCircuitPeering#microsoft_peering_config}
  */
  readonly microsoftPeeringConfig?: ExpressRouteCircuitPeeringMicrosoftPeeringConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#timeouts ExpressRouteCircuitPeering#timeouts}
  */
  readonly timeouts?: ExpressRouteCircuitPeeringTimeouts;
}
export interface ExpressRouteCircuitPeeringIpv6MicrosoftPeering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}
  */
  readonly advertisedCommunities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}
  */
  readonly advertisedPublicPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}
  */
  readonly customerAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}
  */
  readonly routingRegistryName?: string;
}

export function expressRouteCircuitPeeringIpv6MicrosoftPeeringToTerraform(struct?: ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference | ExpressRouteCircuitPeeringIpv6MicrosoftPeering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertised_communities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.advertisedCommunities),
    advertised_public_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.advertisedPublicPrefixes),
    customer_asn: cdktf.numberToTerraform(struct!.customerAsn),
    routing_registry_name: cdktf.stringToTerraform(struct!.routingRegistryName),
  }
}


export function expressRouteCircuitPeeringIpv6MicrosoftPeeringToHclTerraform(struct?: ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference | ExpressRouteCircuitPeeringIpv6MicrosoftPeering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertised_communities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.advertisedCommunities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advertised_public_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.advertisedPublicPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    customer_asn: {
      value: cdktf.numberToHclTerraform(struct!.customerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    routing_registry_name: {
      value: cdktf.stringToHclTerraform(struct!.routingRegistryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExpressRouteCircuitPeeringIpv6MicrosoftPeering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertisedCommunities !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedCommunities = this._advertisedCommunities;
    }
    if (this._advertisedPublicPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedPublicPrefixes = this._advertisedPublicPrefixes;
    }
    if (this._customerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerAsn = this._customerAsn;
    }
    if (this._routingRegistryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingRegistryName = this._routingRegistryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExpressRouteCircuitPeeringIpv6MicrosoftPeering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertisedCommunities = undefined;
      this._advertisedPublicPrefixes = undefined;
      this._customerAsn = undefined;
      this._routingRegistryName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertisedCommunities = value.advertisedCommunities;
      this._advertisedPublicPrefixes = value.advertisedPublicPrefixes;
      this._customerAsn = value.customerAsn;
      this._routingRegistryName = value.routingRegistryName;
    }
  }

  // advertised_communities - computed: false, optional: true, required: false
  private _advertisedCommunities?: string[]; 
  public get advertisedCommunities() {
    return this.getListAttribute('advertised_communities');
  }
  public set advertisedCommunities(value: string[]) {
    this._advertisedCommunities = value;
  }
  public resetAdvertisedCommunities() {
    this._advertisedCommunities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedCommunitiesInput() {
    return this._advertisedCommunities;
  }

  // advertised_public_prefixes - computed: false, optional: true, required: false
  private _advertisedPublicPrefixes?: string[]; 
  public get advertisedPublicPrefixes() {
    return this.getListAttribute('advertised_public_prefixes');
  }
  public set advertisedPublicPrefixes(value: string[]) {
    this._advertisedPublicPrefixes = value;
  }
  public resetAdvertisedPublicPrefixes() {
    this._advertisedPublicPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedPublicPrefixesInput() {
    return this._advertisedPublicPrefixes;
  }

  // customer_asn - computed: false, optional: true, required: false
  private _customerAsn?: number; 
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }
  public set customerAsn(value: number) {
    this._customerAsn = value;
  }
  public resetCustomerAsn() {
    this._customerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAsnInput() {
    return this._customerAsn;
  }

  // routing_registry_name - computed: false, optional: true, required: false
  private _routingRegistryName?: string; 
  public get routingRegistryName() {
    return this.getStringAttribute('routing_registry_name');
  }
  public set routingRegistryName(value: string) {
    this._routingRegistryName = value;
  }
  public resetRoutingRegistryName() {
    this._routingRegistryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRegistryNameInput() {
    return this._routingRegistryName;
  }
}
export interface ExpressRouteCircuitPeeringIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#enabled ExpressRouteCircuitPeering#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}
  */
  readonly primaryPeerAddressPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}
  */
  readonly routeFilterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}
  */
  readonly secondaryPeerAddressPrefix: string;
  /**
  * microsoft_peering block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#microsoft_peering ExpressRouteCircuitPeering#microsoft_peering}
  */
  readonly microsoftPeering?: ExpressRouteCircuitPeeringIpv6MicrosoftPeering;
}

export function expressRouteCircuitPeeringIpv6ToTerraform(struct?: ExpressRouteCircuitPeeringIpv6OutputReference | ExpressRouteCircuitPeeringIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    primary_peer_address_prefix: cdktf.stringToTerraform(struct!.primaryPeerAddressPrefix),
    route_filter_id: cdktf.stringToTerraform(struct!.routeFilterId),
    secondary_peer_address_prefix: cdktf.stringToTerraform(struct!.secondaryPeerAddressPrefix),
    microsoft_peering: expressRouteCircuitPeeringIpv6MicrosoftPeeringToTerraform(struct!.microsoftPeering),
  }
}


export function expressRouteCircuitPeeringIpv6ToHclTerraform(struct?: ExpressRouteCircuitPeeringIpv6OutputReference | ExpressRouteCircuitPeeringIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    primary_peer_address_prefix: {
      value: cdktf.stringToHclTerraform(struct!.primaryPeerAddressPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_filter_id: {
      value: cdktf.stringToHclTerraform(struct!.routeFilterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_peer_address_prefix: {
      value: cdktf.stringToHclTerraform(struct!.secondaryPeerAddressPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    microsoft_peering: {
      value: expressRouteCircuitPeeringIpv6MicrosoftPeeringToHclTerraform(struct!.microsoftPeering),
      isBlock: true,
      type: "list",
      storageClassType: "ExpressRouteCircuitPeeringIpv6MicrosoftPeeringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExpressRouteCircuitPeeringIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExpressRouteCircuitPeeringIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._primaryPeerAddressPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryPeerAddressPrefix = this._primaryPeerAddressPrefix;
    }
    if (this._routeFilterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeFilterId = this._routeFilterId;
    }
    if (this._secondaryPeerAddressPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPeerAddressPrefix = this._secondaryPeerAddressPrefix;
    }
    if (this._microsoftPeering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftPeering = this._microsoftPeering?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExpressRouteCircuitPeeringIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._primaryPeerAddressPrefix = undefined;
      this._routeFilterId = undefined;
      this._secondaryPeerAddressPrefix = undefined;
      this._microsoftPeering.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._primaryPeerAddressPrefix = value.primaryPeerAddressPrefix;
      this._routeFilterId = value.routeFilterId;
      this._secondaryPeerAddressPrefix = value.secondaryPeerAddressPrefix;
      this._microsoftPeering.internalValue = value.microsoftPeering;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // primary_peer_address_prefix - computed: false, optional: false, required: true
  private _primaryPeerAddressPrefix?: string; 
  public get primaryPeerAddressPrefix() {
    return this.getStringAttribute('primary_peer_address_prefix');
  }
  public set primaryPeerAddressPrefix(value: string) {
    this._primaryPeerAddressPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPeerAddressPrefixInput() {
    return this._primaryPeerAddressPrefix;
  }

  // route_filter_id - computed: false, optional: true, required: false
  private _routeFilterId?: string; 
  public get routeFilterId() {
    return this.getStringAttribute('route_filter_id');
  }
  public set routeFilterId(value: string) {
    this._routeFilterId = value;
  }
  public resetRouteFilterId() {
    this._routeFilterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeFilterIdInput() {
    return this._routeFilterId;
  }

  // secondary_peer_address_prefix - computed: false, optional: false, required: true
  private _secondaryPeerAddressPrefix?: string; 
  public get secondaryPeerAddressPrefix() {
    return this.getStringAttribute('secondary_peer_address_prefix');
  }
  public set secondaryPeerAddressPrefix(value: string) {
    this._secondaryPeerAddressPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPeerAddressPrefixInput() {
    return this._secondaryPeerAddressPrefix;
  }

  // microsoft_peering - computed: false, optional: true, required: false
  private _microsoftPeering = new ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference(this, "microsoft_peering");
  public get microsoftPeering() {
    return this._microsoftPeering;
  }
  public putMicrosoftPeering(value: ExpressRouteCircuitPeeringIpv6MicrosoftPeering) {
    this._microsoftPeering.internalValue = value;
  }
  public resetMicrosoftPeering() {
    this._microsoftPeering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftPeeringInput() {
    return this._microsoftPeering.internalValue;
  }
}
export interface ExpressRouteCircuitPeeringMicrosoftPeeringConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}
  */
  readonly advertisedCommunities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}
  */
  readonly advertisedPublicPrefixes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}
  */
  readonly customerAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}
  */
  readonly routingRegistryName?: string;
}

export function expressRouteCircuitPeeringMicrosoftPeeringConfigToTerraform(struct?: ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference | ExpressRouteCircuitPeeringMicrosoftPeeringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertised_communities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.advertisedCommunities),
    advertised_public_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.advertisedPublicPrefixes),
    customer_asn: cdktf.numberToTerraform(struct!.customerAsn),
    routing_registry_name: cdktf.stringToTerraform(struct!.routingRegistryName),
  }
}


export function expressRouteCircuitPeeringMicrosoftPeeringConfigToHclTerraform(struct?: ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference | ExpressRouteCircuitPeeringMicrosoftPeeringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertised_communities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.advertisedCommunities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advertised_public_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.advertisedPublicPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    customer_asn: {
      value: cdktf.numberToHclTerraform(struct!.customerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    routing_registry_name: {
      value: cdktf.stringToHclTerraform(struct!.routingRegistryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExpressRouteCircuitPeeringMicrosoftPeeringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertisedCommunities !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedCommunities = this._advertisedCommunities;
    }
    if (this._advertisedPublicPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedPublicPrefixes = this._advertisedPublicPrefixes;
    }
    if (this._customerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerAsn = this._customerAsn;
    }
    if (this._routingRegistryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingRegistryName = this._routingRegistryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExpressRouteCircuitPeeringMicrosoftPeeringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertisedCommunities = undefined;
      this._advertisedPublicPrefixes = undefined;
      this._customerAsn = undefined;
      this._routingRegistryName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertisedCommunities = value.advertisedCommunities;
      this._advertisedPublicPrefixes = value.advertisedPublicPrefixes;
      this._customerAsn = value.customerAsn;
      this._routingRegistryName = value.routingRegistryName;
    }
  }

  // advertised_communities - computed: false, optional: true, required: false
  private _advertisedCommunities?: string[]; 
  public get advertisedCommunities() {
    return this.getListAttribute('advertised_communities');
  }
  public set advertisedCommunities(value: string[]) {
    this._advertisedCommunities = value;
  }
  public resetAdvertisedCommunities() {
    this._advertisedCommunities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedCommunitiesInput() {
    return this._advertisedCommunities;
  }

  // advertised_public_prefixes - computed: false, optional: false, required: true
  private _advertisedPublicPrefixes?: string[]; 
  public get advertisedPublicPrefixes() {
    return this.getListAttribute('advertised_public_prefixes');
  }
  public set advertisedPublicPrefixes(value: string[]) {
    this._advertisedPublicPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedPublicPrefixesInput() {
    return this._advertisedPublicPrefixes;
  }

  // customer_asn - computed: false, optional: true, required: false
  private _customerAsn?: number; 
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }
  public set customerAsn(value: number) {
    this._customerAsn = value;
  }
  public resetCustomerAsn() {
    this._customerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAsnInput() {
    return this._customerAsn;
  }

  // routing_registry_name - computed: false, optional: true, required: false
  private _routingRegistryName?: string; 
  public get routingRegistryName() {
    return this.getStringAttribute('routing_registry_name');
  }
  public set routingRegistryName(value: string) {
    this._routingRegistryName = value;
  }
  public resetRoutingRegistryName() {
    this._routingRegistryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRegistryNameInput() {
    return this._routingRegistryName;
  }
}
export interface ExpressRouteCircuitPeeringTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#create ExpressRouteCircuitPeering#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#delete ExpressRouteCircuitPeering#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#read ExpressRouteCircuitPeering#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#update ExpressRouteCircuitPeering#update}
  */
  readonly update?: string;
}

export function expressRouteCircuitPeeringTimeoutsToTerraform(struct?: ExpressRouteCircuitPeeringTimeouts | cdktf.IResolvable): any {
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


export function expressRouteCircuitPeeringTimeoutsToHclTerraform(struct?: ExpressRouteCircuitPeeringTimeouts | cdktf.IResolvable): any {
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

export class ExpressRouteCircuitPeeringTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExpressRouteCircuitPeeringTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExpressRouteCircuitPeeringTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering azurerm_express_route_circuit_peering}
*/
export class ExpressRouteCircuitPeering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_express_route_circuit_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExpressRouteCircuitPeering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExpressRouteCircuitPeering to import
  * @param importFromId The id of the existing ExpressRouteCircuitPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExpressRouteCircuitPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_express_route_circuit_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/express_route_circuit_peering azurerm_express_route_circuit_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressRouteCircuitPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressRouteCircuitPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_express_route_circuit_peering',
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
    this._expressRouteCircuitName = config.expressRouteCircuitName;
    this._id = config.id;
    this._ipv4Enabled = config.ipv4Enabled;
    this._peerAsn = config.peerAsn;
    this._peeringType = config.peeringType;
    this._primaryPeerAddressPrefix = config.primaryPeerAddressPrefix;
    this._resourceGroupName = config.resourceGroupName;
    this._routeFilterId = config.routeFilterId;
    this._secondaryPeerAddressPrefix = config.secondaryPeerAddressPrefix;
    this._sharedKey = config.sharedKey;
    this._vlanId = config.vlanId;
    this._ipv6.internalValue = config.ipv6;
    this._microsoftPeeringConfig.internalValue = config.microsoftPeeringConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_asn - computed: true, optional: false, required: false
  public get azureAsn() {
    return this.getNumberAttribute('azure_asn');
  }

  // express_route_circuit_name - computed: false, optional: false, required: true
  private _expressRouteCircuitName?: string; 
  public get expressRouteCircuitName() {
    return this.getStringAttribute('express_route_circuit_name');
  }
  public set expressRouteCircuitName(value: string) {
    this._expressRouteCircuitName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteCircuitNameInput() {
    return this._expressRouteCircuitName;
  }

  // gateway_manager_etag - computed: true, optional: false, required: false
  public get gatewayManagerEtag() {
    return this.getStringAttribute('gateway_manager_etag');
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

  // ipv4_enabled - computed: false, optional: true, required: false
  private _ipv4Enabled?: boolean | cdktf.IResolvable; 
  public get ipv4Enabled() {
    return this.getBooleanAttribute('ipv4_enabled');
  }
  public set ipv4Enabled(value: boolean | cdktf.IResolvable) {
    this._ipv4Enabled = value;
  }
  public resetIpv4Enabled() {
    this._ipv4Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EnabledInput() {
    return this._ipv4Enabled;
  }

  // peer_asn - computed: true, optional: true, required: false
  private _peerAsn?: number; 
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }
  public set peerAsn(value: number) {
    this._peerAsn = value;
  }
  public resetPeerAsn() {
    this._peerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsnInput() {
    return this._peerAsn;
  }

  // peering_type - computed: false, optional: false, required: true
  private _peeringType?: string; 
  public get peeringType() {
    return this.getStringAttribute('peering_type');
  }
  public set peeringType(value: string) {
    this._peeringType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringTypeInput() {
    return this._peeringType;
  }

  // primary_azure_port - computed: true, optional: false, required: false
  public get primaryAzurePort() {
    return this.getStringAttribute('primary_azure_port');
  }

  // primary_peer_address_prefix - computed: false, optional: true, required: false
  private _primaryPeerAddressPrefix?: string; 
  public get primaryPeerAddressPrefix() {
    return this.getStringAttribute('primary_peer_address_prefix');
  }
  public set primaryPeerAddressPrefix(value: string) {
    this._primaryPeerAddressPrefix = value;
  }
  public resetPrimaryPeerAddressPrefix() {
    this._primaryPeerAddressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPeerAddressPrefixInput() {
    return this._primaryPeerAddressPrefix;
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

  // route_filter_id - computed: false, optional: true, required: false
  private _routeFilterId?: string; 
  public get routeFilterId() {
    return this.getStringAttribute('route_filter_id');
  }
  public set routeFilterId(value: string) {
    this._routeFilterId = value;
  }
  public resetRouteFilterId() {
    this._routeFilterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeFilterIdInput() {
    return this._routeFilterId;
  }

  // secondary_azure_port - computed: true, optional: false, required: false
  public get secondaryAzurePort() {
    return this.getStringAttribute('secondary_azure_port');
  }

  // secondary_peer_address_prefix - computed: false, optional: true, required: false
  private _secondaryPeerAddressPrefix?: string; 
  public get secondaryPeerAddressPrefix() {
    return this.getStringAttribute('secondary_peer_address_prefix');
  }
  public set secondaryPeerAddressPrefix(value: string) {
    this._secondaryPeerAddressPrefix = value;
  }
  public resetSecondaryPeerAddressPrefix() {
    this._secondaryPeerAddressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPeerAddressPrefixInput() {
    return this._secondaryPeerAddressPrefix;
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string; 
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string) {
    this._sharedKey = value;
  }
  public resetSharedKey() {
    this._sharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ExpressRouteCircuitPeeringIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ExpressRouteCircuitPeeringIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // microsoft_peering_config - computed: false, optional: true, required: false
  private _microsoftPeeringConfig = new ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference(this, "microsoft_peering_config");
  public get microsoftPeeringConfig() {
    return this._microsoftPeeringConfig;
  }
  public putMicrosoftPeeringConfig(value: ExpressRouteCircuitPeeringMicrosoftPeeringConfig) {
    this._microsoftPeeringConfig.internalValue = value;
  }
  public resetMicrosoftPeeringConfig() {
    this._microsoftPeeringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftPeeringConfigInput() {
    return this._microsoftPeeringConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ExpressRouteCircuitPeeringTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ExpressRouteCircuitPeeringTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      express_route_circuit_name: cdktf.stringToTerraform(this._expressRouteCircuitName),
      id: cdktf.stringToTerraform(this._id),
      ipv4_enabled: cdktf.booleanToTerraform(this._ipv4Enabled),
      peer_asn: cdktf.numberToTerraform(this._peerAsn),
      peering_type: cdktf.stringToTerraform(this._peeringType),
      primary_peer_address_prefix: cdktf.stringToTerraform(this._primaryPeerAddressPrefix),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      route_filter_id: cdktf.stringToTerraform(this._routeFilterId),
      secondary_peer_address_prefix: cdktf.stringToTerraform(this._secondaryPeerAddressPrefix),
      shared_key: cdktf.stringToTerraform(this._sharedKey),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      ipv6: expressRouteCircuitPeeringIpv6ToTerraform(this._ipv6.internalValue),
      microsoft_peering_config: expressRouteCircuitPeeringMicrosoftPeeringConfigToTerraform(this._microsoftPeeringConfig.internalValue),
      timeouts: expressRouteCircuitPeeringTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      express_route_circuit_name: {
        value: cdktf.stringToHclTerraform(this._expressRouteCircuitName),
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
      ipv4_enabled: {
        value: cdktf.booleanToHclTerraform(this._ipv4Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      peer_asn: {
        value: cdktf.numberToHclTerraform(this._peerAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peering_type: {
        value: cdktf.stringToHclTerraform(this._peeringType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_peer_address_prefix: {
        value: cdktf.stringToHclTerraform(this._primaryPeerAddressPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_filter_id: {
        value: cdktf.stringToHclTerraform(this._routeFilterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_peer_address_prefix: {
        value: cdktf.stringToHclTerraform(this._secondaryPeerAddressPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_key: {
        value: cdktf.stringToHclTerraform(this._sharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6: {
        value: expressRouteCircuitPeeringIpv6ToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExpressRouteCircuitPeeringIpv6List",
      },
      microsoft_peering_config: {
        value: expressRouteCircuitPeeringMicrosoftPeeringConfigToHclTerraform(this._microsoftPeeringConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExpressRouteCircuitPeeringMicrosoftPeeringConfigList",
      },
      timeouts: {
        value: expressRouteCircuitPeeringTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExpressRouteCircuitPeeringTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
