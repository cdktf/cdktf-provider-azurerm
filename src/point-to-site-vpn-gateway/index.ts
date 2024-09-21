// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PointToSiteVpnGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#dns_servers PointToSiteVpnGateway#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#id PointToSiteVpnGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#location PointToSiteVpnGateway#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#resource_group_name PointToSiteVpnGateway#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#routing_preference_internet_enabled PointToSiteVpnGateway#routing_preference_internet_enabled}
  */
  readonly routingPreferenceInternetEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#scale_unit PointToSiteVpnGateway#scale_unit}
  */
  readonly scaleUnit: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#tags PointToSiteVpnGateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#virtual_hub_id PointToSiteVpnGateway#virtual_hub_id}
  */
  readonly virtualHubId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#vpn_server_configuration_id PointToSiteVpnGateway#vpn_server_configuration_id}
  */
  readonly vpnServerConfigurationId: string;
  /**
  * connection_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#connection_configuration PointToSiteVpnGateway#connection_configuration}
  */
  readonly connectionConfiguration: PointToSiteVpnGatewayConnectionConfiguration[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#timeouts PointToSiteVpnGateway#timeouts}
  */
  readonly timeouts?: PointToSiteVpnGatewayTimeouts;
}
export interface PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#ids PointToSiteVpnGateway#ids}
  */
  readonly ids: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#labels PointToSiteVpnGateway#labels}
  */
  readonly labels?: string[];
}

export function pointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableToTerraform(struct?: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference | PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ids),
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
  }
}


export function pointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableToHclTerraform(struct?: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference | PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ids = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ids = value.ids;
      this._labels = value.labels;
    }
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
    return this._ids;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }
}
export interface PointToSiteVpnGatewayConnectionConfigurationRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#associated_route_table_id PointToSiteVpnGateway#associated_route_table_id}
  */
  readonly associatedRouteTableId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#inbound_route_map_id PointToSiteVpnGateway#inbound_route_map_id}
  */
  readonly inboundRouteMapId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#outbound_route_map_id PointToSiteVpnGateway#outbound_route_map_id}
  */
  readonly outboundRouteMapId?: string;
  /**
  * propagated_route_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#propagated_route_table PointToSiteVpnGateway#propagated_route_table}
  */
  readonly propagatedRouteTable?: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable;
}

export function pointToSiteVpnGatewayConnectionConfigurationRouteToTerraform(struct?: PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference | PointToSiteVpnGatewayConnectionConfigurationRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associated_route_table_id: cdktf.stringToTerraform(struct!.associatedRouteTableId),
    inbound_route_map_id: cdktf.stringToTerraform(struct!.inboundRouteMapId),
    outbound_route_map_id: cdktf.stringToTerraform(struct!.outboundRouteMapId),
    propagated_route_table: pointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableToTerraform(struct!.propagatedRouteTable),
  }
}


export function pointToSiteVpnGatewayConnectionConfigurationRouteToHclTerraform(struct?: PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference | PointToSiteVpnGatewayConnectionConfigurationRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    associated_route_table_id: {
      value: cdktf.stringToHclTerraform(struct!.associatedRouteTableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_route_map_id: {
      value: cdktf.stringToHclTerraform(struct!.inboundRouteMapId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_route_map_id: {
      value: cdktf.stringToHclTerraform(struct!.outboundRouteMapId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagated_route_table: {
      value: pointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableToHclTerraform(struct!.propagatedRouteTable),
      isBlock: true,
      type: "list",
      storageClassType: "PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PointToSiteVpnGatewayConnectionConfigurationRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associatedRouteTableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedRouteTableId = this._associatedRouteTableId;
    }
    if (this._inboundRouteMapId !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundRouteMapId = this._inboundRouteMapId;
    }
    if (this._outboundRouteMapId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundRouteMapId = this._outboundRouteMapId;
    }
    if (this._propagatedRouteTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagatedRouteTable = this._propagatedRouteTable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PointToSiteVpnGatewayConnectionConfigurationRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._associatedRouteTableId = undefined;
      this._inboundRouteMapId = undefined;
      this._outboundRouteMapId = undefined;
      this._propagatedRouteTable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._associatedRouteTableId = value.associatedRouteTableId;
      this._inboundRouteMapId = value.inboundRouteMapId;
      this._outboundRouteMapId = value.outboundRouteMapId;
      this._propagatedRouteTable.internalValue = value.propagatedRouteTable;
    }
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
    return this._associatedRouteTableId;
  }

  // inbound_route_map_id - computed: false, optional: true, required: false
  private _inboundRouteMapId?: string; 
  public get inboundRouteMapId() {
    return this.getStringAttribute('inbound_route_map_id');
  }
  public set inboundRouteMapId(value: string) {
    this._inboundRouteMapId = value;
  }
  public resetInboundRouteMapId() {
    this._inboundRouteMapId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundRouteMapIdInput() {
    return this._inboundRouteMapId;
  }

  // outbound_route_map_id - computed: false, optional: true, required: false
  private _outboundRouteMapId?: string; 
  public get outboundRouteMapId() {
    return this.getStringAttribute('outbound_route_map_id');
  }
  public set outboundRouteMapId(value: string) {
    this._outboundRouteMapId = value;
  }
  public resetOutboundRouteMapId() {
    this._outboundRouteMapId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundRouteMapIdInput() {
    return this._outboundRouteMapId;
  }

  // propagated_route_table - computed: false, optional: true, required: false
  private _propagatedRouteTable = new PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTableOutputReference(this, "propagated_route_table");
  public get propagatedRouteTable() {
    return this._propagatedRouteTable;
  }
  public putPropagatedRouteTable(value: PointToSiteVpnGatewayConnectionConfigurationRoutePropagatedRouteTable) {
    this._propagatedRouteTable.internalValue = value;
  }
  public resetPropagatedRouteTable() {
    this._propagatedRouteTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedRouteTableInput() {
    return this._propagatedRouteTable.internalValue;
  }
}
export interface PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#address_prefixes PointToSiteVpnGateway#address_prefixes}
  */
  readonly addressPrefixes: string[];
}

export function pointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolToTerraform(struct?: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference | PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addressPrefixes),
  }
}


export function pointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolToHclTerraform(struct?: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference | PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool): any {
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

export class PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressPrefixes = this._addressPrefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressPrefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressPrefixes = value.addressPrefixes;
    }
  }

  // address_prefixes - computed: false, optional: false, required: true
  private _addressPrefixes?: string[]; 
  public get addressPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('address_prefixes'));
  }
  public set addressPrefixes(value: string[]) {
    this._addressPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixesInput() {
    return this._addressPrefixes;
  }
}
export interface PointToSiteVpnGatewayConnectionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#internet_security_enabled PointToSiteVpnGateway#internet_security_enabled}
  */
  readonly internetSecurityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#name PointToSiteVpnGateway#name}
  */
  readonly name: string;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#route PointToSiteVpnGateway#route}
  */
  readonly route?: PointToSiteVpnGatewayConnectionConfigurationRoute;
  /**
  * vpn_client_address_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#vpn_client_address_pool PointToSiteVpnGateway#vpn_client_address_pool}
  */
  readonly vpnClientAddressPool: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool;
}

export function pointToSiteVpnGatewayConnectionConfigurationToTerraform(struct?: PointToSiteVpnGatewayConnectionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internet_security_enabled: cdktf.booleanToTerraform(struct!.internetSecurityEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    route: pointToSiteVpnGatewayConnectionConfigurationRouteToTerraform(struct!.route),
    vpn_client_address_pool: pointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolToTerraform(struct!.vpnClientAddressPool),
  }
}


export function pointToSiteVpnGatewayConnectionConfigurationToHclTerraform(struct?: PointToSiteVpnGatewayConnectionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internet_security_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.internetSecurityEnabled),
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
    route: {
      value: pointToSiteVpnGatewayConnectionConfigurationRouteToHclTerraform(struct!.route),
      isBlock: true,
      type: "list",
      storageClassType: "PointToSiteVpnGatewayConnectionConfigurationRouteList",
    },
    vpn_client_address_pool: {
      value: pointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolToHclTerraform(struct!.vpnClientAddressPool),
      isBlock: true,
      type: "list",
      storageClassType: "PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PointToSiteVpnGatewayConnectionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PointToSiteVpnGatewayConnectionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internetSecurityEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetSecurityEnabled = this._internetSecurityEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    if (this._vpnClientAddressPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnClientAddressPool = this._vpnClientAddressPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PointToSiteVpnGatewayConnectionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._internetSecurityEnabled = undefined;
      this._name = undefined;
      this._route.internalValue = undefined;
      this._vpnClientAddressPool.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._internetSecurityEnabled = value.internetSecurityEnabled;
      this._name = value.name;
      this._route.internalValue = value.route;
      this._vpnClientAddressPool.internalValue = value.vpnClientAddressPool;
    }
  }

  // internet_security_enabled - computed: false, optional: true, required: false
  private _internetSecurityEnabled?: boolean | cdktf.IResolvable; 
  public get internetSecurityEnabled() {
    return this.getBooleanAttribute('internet_security_enabled');
  }
  public set internetSecurityEnabled(value: boolean | cdktf.IResolvable) {
    this._internetSecurityEnabled = value;
  }
  public resetInternetSecurityEnabled() {
    this._internetSecurityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetSecurityEnabledInput() {
    return this._internetSecurityEnabled;
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

  // route - computed: false, optional: true, required: false
  private _route = new PointToSiteVpnGatewayConnectionConfigurationRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: PointToSiteVpnGatewayConnectionConfigurationRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // vpn_client_address_pool - computed: false, optional: false, required: true
  private _vpnClientAddressPool = new PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPoolOutputReference(this, "vpn_client_address_pool");
  public get vpnClientAddressPool() {
    return this._vpnClientAddressPool;
  }
  public putVpnClientAddressPool(value: PointToSiteVpnGatewayConnectionConfigurationVpnClientAddressPool) {
    this._vpnClientAddressPool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnClientAddressPoolInput() {
    return this._vpnClientAddressPool.internalValue;
  }
}

export class PointToSiteVpnGatewayConnectionConfigurationList extends cdktf.ComplexList {
  public internalValue? : PointToSiteVpnGatewayConnectionConfiguration[] | cdktf.IResolvable

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
  public get(index: number): PointToSiteVpnGatewayConnectionConfigurationOutputReference {
    return new PointToSiteVpnGatewayConnectionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PointToSiteVpnGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#create PointToSiteVpnGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#delete PointToSiteVpnGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#read PointToSiteVpnGateway#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#update PointToSiteVpnGateway#update}
  */
  readonly update?: string;
}

export function pointToSiteVpnGatewayTimeoutsToTerraform(struct?: PointToSiteVpnGatewayTimeouts | cdktf.IResolvable): any {
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


export function pointToSiteVpnGatewayTimeoutsToHclTerraform(struct?: PointToSiteVpnGatewayTimeouts | cdktf.IResolvable): any {
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

export class PointToSiteVpnGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PointToSiteVpnGatewayTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PointToSiteVpnGatewayTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway azurerm_point_to_site_vpn_gateway}
*/
export class PointToSiteVpnGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_point_to_site_vpn_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PointToSiteVpnGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PointToSiteVpnGateway to import
  * @param importFromId The id of the existing PointToSiteVpnGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PointToSiteVpnGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_point_to_site_vpn_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/point_to_site_vpn_gateway azurerm_point_to_site_vpn_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PointToSiteVpnGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: PointToSiteVpnGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_point_to_site_vpn_gateway',
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
    this._dnsServers = config.dnsServers;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._routingPreferenceInternetEnabled = config.routingPreferenceInternetEnabled;
    this._scaleUnit = config.scaleUnit;
    this._tags = config.tags;
    this._virtualHubId = config.virtualHubId;
    this._vpnServerConfigurationId = config.vpnServerConfigurationId;
    this._connectionConfiguration.internalValue = config.connectionConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
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

  // routing_preference_internet_enabled - computed: false, optional: true, required: false
  private _routingPreferenceInternetEnabled?: boolean | cdktf.IResolvable; 
  public get routingPreferenceInternetEnabled() {
    return this.getBooleanAttribute('routing_preference_internet_enabled');
  }
  public set routingPreferenceInternetEnabled(value: boolean | cdktf.IResolvable) {
    this._routingPreferenceInternetEnabled = value;
  }
  public resetRoutingPreferenceInternetEnabled() {
    this._routingPreferenceInternetEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPreferenceInternetEnabledInput() {
    return this._routingPreferenceInternetEnabled;
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
    return this._scaleUnit;
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
    return this._virtualHubId;
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
    return this._vpnServerConfigurationId;
  }

  // connection_configuration - computed: false, optional: false, required: true
  private _connectionConfiguration = new PointToSiteVpnGatewayConnectionConfigurationList(this, "connection_configuration", false);
  public get connectionConfiguration() {
    return this._connectionConfiguration;
  }
  public putConnectionConfiguration(value: PointToSiteVpnGatewayConnectionConfiguration[] | cdktf.IResolvable) {
    this._connectionConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConfigurationInput() {
    return this._connectionConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PointToSiteVpnGatewayTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PointToSiteVpnGatewayTimeouts) {
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
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServers),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      routing_preference_internet_enabled: cdktf.booleanToTerraform(this._routingPreferenceInternetEnabled),
      scale_unit: cdktf.numberToTerraform(this._scaleUnit),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      virtual_hub_id: cdktf.stringToTerraform(this._virtualHubId),
      vpn_server_configuration_id: cdktf.stringToTerraform(this._vpnServerConfigurationId),
      connection_configuration: cdktf.listMapper(pointToSiteVpnGatewayConnectionConfigurationToTerraform, true)(this._connectionConfiguration.internalValue),
      timeouts: pointToSiteVpnGatewayTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_preference_internet_enabled: {
        value: cdktf.booleanToHclTerraform(this._routingPreferenceInternetEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scale_unit: {
        value: cdktf.numberToHclTerraform(this._scaleUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      virtual_hub_id: {
        value: cdktf.stringToHclTerraform(this._virtualHubId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_server_configuration_id: {
        value: cdktf.stringToHclTerraform(this._vpnServerConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_configuration: {
        value: cdktf.listMapperHcl(pointToSiteVpnGatewayConnectionConfigurationToHclTerraform, true)(this._connectionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PointToSiteVpnGatewayConnectionConfigurationList",
      },
      timeouts: {
        value: pointToSiteVpnGatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PointToSiteVpnGatewayTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
