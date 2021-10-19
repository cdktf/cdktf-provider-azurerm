// https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressRouteCircuitPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#express_route_circuit_name ExpressRouteCircuitPeering#express_route_circuit_name}
  */
  readonly expressRouteCircuitName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#peer_asn ExpressRouteCircuitPeering#peer_asn}
  */
  readonly peerAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#peering_type ExpressRouteCircuitPeering#peering_type}
  */
  readonly peeringType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}
  */
  readonly primaryPeerAddressPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#resource_group_name ExpressRouteCircuitPeering#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#route_filter_id ExpressRouteCircuitPeering#route_filter_id}
  */
  readonly routeFilterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}
  */
  readonly secondaryPeerAddressPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#shared_key ExpressRouteCircuitPeering#shared_key}
  */
  readonly sharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#vlan_id ExpressRouteCircuitPeering#vlan_id}
  */
  readonly vlanId: number;
  /**
  * ipv6 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#ipv6 ExpressRouteCircuitPeering#ipv6}
  */
  readonly ipv6?: ExpressRouteCircuitPeeringIpv6;
  /**
  * microsoft_peering_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#microsoft_peering_config ExpressRouteCircuitPeering#microsoft_peering_config}
  */
  readonly microsoftPeeringConfig?: ExpressRouteCircuitPeeringMicrosoftPeeringConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#timeouts ExpressRouteCircuitPeering#timeouts}
  */
  readonly timeouts?: ExpressRouteCircuitPeeringTimeouts;
}
export interface ExpressRouteCircuitPeeringIpv6MicrosoftPeering {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}
  */
  readonly advertisedPublicPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#customer_asn ExpressRouteCircuitPeering#customer_asn}
  */
  readonly customerAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}
  */
  readonly routingRegistryName?: string;
}

function expressRouteCircuitPeeringIpv6MicrosoftPeeringToTerraform(struct?: ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference | ExpressRouteCircuitPeeringIpv6MicrosoftPeering): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertised_public_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.advertisedPublicPrefixes),
    customer_asn: cdktf.numberToTerraform(struct!.customerAsn),
    routing_registry_name: cdktf.stringToTerraform(struct!.routingRegistryName),
  }
}

export class ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // advertised_public_prefixes - computed: false, optional: true, required: false
  private _advertisedPublicPrefixes?: string[] | undefined; 
  public get advertisedPublicPrefixes() {
    return this.getListAttribute('advertised_public_prefixes');
  }
  public set advertisedPublicPrefixes(value: string[] | undefined) {
    this._advertisedPublicPrefixes = value;
  }
  public resetAdvertisedPublicPrefixes() {
    this._advertisedPublicPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedPublicPrefixesInput() {
    return this._advertisedPublicPrefixes
  }

  // customer_asn - computed: false, optional: true, required: false
  private _customerAsn?: number | undefined; 
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }
  public set customerAsn(value: number | undefined) {
    this._customerAsn = value;
  }
  public resetCustomerAsn() {
    this._customerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAsnInput() {
    return this._customerAsn
  }

  // routing_registry_name - computed: false, optional: true, required: false
  private _routingRegistryName?: string | undefined; 
  public get routingRegistryName() {
    return this.getStringAttribute('routing_registry_name');
  }
  public set routingRegistryName(value: string | undefined) {
    this._routingRegistryName = value;
  }
  public resetRoutingRegistryName() {
    this._routingRegistryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRegistryNameInput() {
    return this._routingRegistryName
  }
}
export interface ExpressRouteCircuitPeeringIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}
  */
  readonly primaryPeerAddressPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#route_filter_id ExpressRouteCircuitPeering#route_filter_id}
  */
  readonly routeFilterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}
  */
  readonly secondaryPeerAddressPrefix: string;
  /**
  * microsoft_peering block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#microsoft_peering ExpressRouteCircuitPeering#microsoft_peering}
  */
  readonly microsoftPeering: ExpressRouteCircuitPeeringIpv6MicrosoftPeering;
}

function expressRouteCircuitPeeringIpv6ToTerraform(struct?: ExpressRouteCircuitPeeringIpv6OutputReference | ExpressRouteCircuitPeeringIpv6): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_peer_address_prefix: cdktf.stringToTerraform(struct!.primaryPeerAddressPrefix),
    route_filter_id: cdktf.stringToTerraform(struct!.routeFilterId),
    secondary_peer_address_prefix: cdktf.stringToTerraform(struct!.secondaryPeerAddressPrefix),
    microsoft_peering: expressRouteCircuitPeeringIpv6MicrosoftPeeringToTerraform(struct!.microsoftPeering),
  }
}

export class ExpressRouteCircuitPeeringIpv6OutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._primaryPeerAddressPrefix
  }

  // route_filter_id - computed: false, optional: true, required: false
  private _routeFilterId?: string | undefined; 
  public get routeFilterId() {
    return this.getStringAttribute('route_filter_id');
  }
  public set routeFilterId(value: string | undefined) {
    this._routeFilterId = value;
  }
  public resetRouteFilterId() {
    this._routeFilterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeFilterIdInput() {
    return this._routeFilterId
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
    return this._secondaryPeerAddressPrefix
  }

  // microsoft_peering - computed: false, optional: false, required: true
  private _microsoftPeering?: ExpressRouteCircuitPeeringIpv6MicrosoftPeering; 
  private __microsoftPeeringOutput = new ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference(this as any, "microsoft_peering", true);
  public get microsoftPeering() {
    return this.__microsoftPeeringOutput;
  }
  public putMicrosoftPeering(value: ExpressRouteCircuitPeeringIpv6MicrosoftPeering) {
    this._microsoftPeering = value;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftPeeringInput() {
    return this._microsoftPeering
  }
}
export interface ExpressRouteCircuitPeeringMicrosoftPeeringConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}
  */
  readonly advertisedPublicPrefixes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#customer_asn ExpressRouteCircuitPeering#customer_asn}
  */
  readonly customerAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}
  */
  readonly routingRegistryName?: string;
}

function expressRouteCircuitPeeringMicrosoftPeeringConfigToTerraform(struct?: ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference | ExpressRouteCircuitPeeringMicrosoftPeeringConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertised_public_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.advertisedPublicPrefixes),
    customer_asn: cdktf.numberToTerraform(struct!.customerAsn),
    routing_registry_name: cdktf.stringToTerraform(struct!.routingRegistryName),
  }
}

export class ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._advertisedPublicPrefixes
  }

  // customer_asn - computed: false, optional: true, required: false
  private _customerAsn?: number | undefined; 
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }
  public set customerAsn(value: number | undefined) {
    this._customerAsn = value;
  }
  public resetCustomerAsn() {
    this._customerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAsnInput() {
    return this._customerAsn
  }

  // routing_registry_name - computed: false, optional: true, required: false
  private _routingRegistryName?: string | undefined; 
  public get routingRegistryName() {
    return this.getStringAttribute('routing_registry_name');
  }
  public set routingRegistryName(value: string | undefined) {
    this._routingRegistryName = value;
  }
  public resetRoutingRegistryName() {
    this._routingRegistryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRegistryNameInput() {
    return this._routingRegistryName
  }
}
export interface ExpressRouteCircuitPeeringTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#create ExpressRouteCircuitPeering#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#delete ExpressRouteCircuitPeering#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#read ExpressRouteCircuitPeering#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html#update ExpressRouteCircuitPeering#update}
  */
  readonly update?: string;
}

function expressRouteCircuitPeeringTimeoutsToTerraform(struct?: ExpressRouteCircuitPeeringTimeoutsOutputReference | ExpressRouteCircuitPeeringTimeouts): any {
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

export class ExpressRouteCircuitPeeringTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html azurerm_express_route_circuit_peering}
*/
export class ExpressRouteCircuitPeering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_express_route_circuit_peering";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/express_route_circuit_peering.html azurerm_express_route_circuit_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressRouteCircuitPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressRouteCircuitPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_express_route_circuit_peering',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._expressRouteCircuitName = config.expressRouteCircuitName;
    this._peerAsn = config.peerAsn;
    this._peeringType = config.peeringType;
    this._primaryPeerAddressPrefix = config.primaryPeerAddressPrefix;
    this._resourceGroupName = config.resourceGroupName;
    this._routeFilterId = config.routeFilterId;
    this._secondaryPeerAddressPrefix = config.secondaryPeerAddressPrefix;
    this._sharedKey = config.sharedKey;
    this._vlanId = config.vlanId;
    this._ipv6 = config.ipv6;
    this._microsoftPeeringConfig = config.microsoftPeeringConfig;
    this._timeouts = config.timeouts;
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
    return this._expressRouteCircuitName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // peer_asn - computed: true, optional: true, required: false
  private _peerAsn?: number | undefined; 
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }
  public set peerAsn(value: number | undefined) {
    this._peerAsn = value;
  }
  public resetPeerAsn() {
    this._peerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsnInput() {
    return this._peerAsn
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
    return this._peeringType
  }

  // primary_azure_port - computed: true, optional: false, required: false
  public get primaryAzurePort() {
    return this.getStringAttribute('primary_azure_port');
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
    return this._primaryPeerAddressPrefix
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

  // route_filter_id - computed: false, optional: true, required: false
  private _routeFilterId?: string | undefined; 
  public get routeFilterId() {
    return this.getStringAttribute('route_filter_id');
  }
  public set routeFilterId(value: string | undefined) {
    this._routeFilterId = value;
  }
  public resetRouteFilterId() {
    this._routeFilterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeFilterIdInput() {
    return this._routeFilterId
  }

  // secondary_azure_port - computed: true, optional: false, required: false
  public get secondaryAzurePort() {
    return this.getStringAttribute('secondary_azure_port');
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
    return this._secondaryPeerAddressPrefix
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string | undefined; 
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string | undefined) {
    this._sharedKey = value;
  }
  public resetSharedKey() {
    this._sharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey
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
    return this._vlanId
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: ExpressRouteCircuitPeeringIpv6 | undefined; 
  private __ipv6Output = new ExpressRouteCircuitPeeringIpv6OutputReference(this as any, "ipv6", true);
  public get ipv6() {
    return this.__ipv6Output;
  }
  public putIpv6(value: ExpressRouteCircuitPeeringIpv6 | undefined) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6
  }

  // microsoft_peering_config - computed: false, optional: true, required: false
  private _microsoftPeeringConfig?: ExpressRouteCircuitPeeringMicrosoftPeeringConfig | undefined; 
  private __microsoftPeeringConfigOutput = new ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference(this as any, "microsoft_peering_config", true);
  public get microsoftPeeringConfig() {
    return this.__microsoftPeeringConfigOutput;
  }
  public putMicrosoftPeeringConfig(value: ExpressRouteCircuitPeeringMicrosoftPeeringConfig | undefined) {
    this._microsoftPeeringConfig = value;
  }
  public resetMicrosoftPeeringConfig() {
    this._microsoftPeeringConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftPeeringConfigInput() {
    return this._microsoftPeeringConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ExpressRouteCircuitPeeringTimeouts | undefined; 
  private __timeoutsOutput = new ExpressRouteCircuitPeeringTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ExpressRouteCircuitPeeringTimeouts | undefined) {
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
      express_route_circuit_name: cdktf.stringToTerraform(this._expressRouteCircuitName),
      peer_asn: cdktf.numberToTerraform(this._peerAsn),
      peering_type: cdktf.stringToTerraform(this._peeringType),
      primary_peer_address_prefix: cdktf.stringToTerraform(this._primaryPeerAddressPrefix),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      route_filter_id: cdktf.stringToTerraform(this._routeFilterId),
      secondary_peer_address_prefix: cdktf.stringToTerraform(this._secondaryPeerAddressPrefix),
      shared_key: cdktf.stringToTerraform(this._sharedKey),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      ipv6: expressRouteCircuitPeeringIpv6ToTerraform(this._ipv6),
      microsoft_peering_config: expressRouteCircuitPeeringMicrosoftPeeringConfigToTerraform(this._microsoftPeeringConfig),
      timeouts: expressRouteCircuitPeeringTimeoutsToTerraform(this._timeouts),
    };
  }
}
