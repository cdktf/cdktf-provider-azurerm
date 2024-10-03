// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnGatewayConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#id VpnGatewayConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#internet_security_enabled VpnGatewayConnection#internet_security_enabled}
  */
  readonly internetSecurityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#name VpnGatewayConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#remote_vpn_site_id VpnGatewayConnection#remote_vpn_site_id}
  */
  readonly remoteVpnSiteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#vpn_gateway_id VpnGatewayConnection#vpn_gateway_id}
  */
  readonly vpnGatewayId: string;
  /**
  * routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#routing VpnGatewayConnection#routing}
  */
  readonly routing?: VpnGatewayConnectionRouting;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#timeouts VpnGatewayConnection#timeouts}
  */
  readonly timeouts?: VpnGatewayConnectionTimeouts;
  /**
  * traffic_selector_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#traffic_selector_policy VpnGatewayConnection#traffic_selector_policy}
  */
  readonly trafficSelectorPolicy?: VpnGatewayConnectionTrafficSelectorPolicy[] | cdktf.IResolvable;
  /**
  * vpn_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#vpn_link VpnGatewayConnection#vpn_link}
  */
  readonly vpnLink: VpnGatewayConnectionVpnLink[] | cdktf.IResolvable;
}
export interface VpnGatewayConnectionRoutingPropagatedRouteTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#labels VpnGatewayConnection#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#route_table_ids VpnGatewayConnection#route_table_ids}
  */
  readonly routeTableIds: string[];
}

export function vpnGatewayConnectionRoutingPropagatedRouteTableToTerraform(struct?: VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference | VpnGatewayConnectionRoutingPropagatedRouteTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    route_table_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeTableIds),
  }
}


export function vpnGatewayConnectionRoutingPropagatedRouteTableToHclTerraform(struct?: VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference | VpnGatewayConnectionRoutingPropagatedRouteTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_table_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeTableIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnGatewayConnectionRoutingPropagatedRouteTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._routeTableIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTableIds = this._routeTableIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnGatewayConnectionRoutingPropagatedRouteTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._routeTableIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._routeTableIds = value.routeTableIds;
    }
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

  // route_table_ids - computed: false, optional: false, required: true
  private _routeTableIds?: string[]; 
  public get routeTableIds() {
    return this.getListAttribute('route_table_ids');
  }
  public set routeTableIds(value: string[]) {
    this._routeTableIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdsInput() {
    return this._routeTableIds;
  }
}
export interface VpnGatewayConnectionRouting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#associated_route_table VpnGatewayConnection#associated_route_table}
  */
  readonly associatedRouteTable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#inbound_route_map_id VpnGatewayConnection#inbound_route_map_id}
  */
  readonly inboundRouteMapId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#outbound_route_map_id VpnGatewayConnection#outbound_route_map_id}
  */
  readonly outboundRouteMapId?: string;
  /**
  * propagated_route_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#propagated_route_table VpnGatewayConnection#propagated_route_table}
  */
  readonly propagatedRouteTable?: VpnGatewayConnectionRoutingPropagatedRouteTable;
}

export function vpnGatewayConnectionRoutingToTerraform(struct?: VpnGatewayConnectionRoutingOutputReference | VpnGatewayConnectionRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associated_route_table: cdktf.stringToTerraform(struct!.associatedRouteTable),
    inbound_route_map_id: cdktf.stringToTerraform(struct!.inboundRouteMapId),
    outbound_route_map_id: cdktf.stringToTerraform(struct!.outboundRouteMapId),
    propagated_route_table: vpnGatewayConnectionRoutingPropagatedRouteTableToTerraform(struct!.propagatedRouteTable),
  }
}


export function vpnGatewayConnectionRoutingToHclTerraform(struct?: VpnGatewayConnectionRoutingOutputReference | VpnGatewayConnectionRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    associated_route_table: {
      value: cdktf.stringToHclTerraform(struct!.associatedRouteTable),
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
      value: vpnGatewayConnectionRoutingPropagatedRouteTableToHclTerraform(struct!.propagatedRouteTable),
      isBlock: true,
      type: "list",
      storageClassType: "VpnGatewayConnectionRoutingPropagatedRouteTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnGatewayConnectionRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnGatewayConnectionRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associatedRouteTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedRouteTable = this._associatedRouteTable;
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

  public set internalValue(value: VpnGatewayConnectionRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._associatedRouteTable = undefined;
      this._inboundRouteMapId = undefined;
      this._outboundRouteMapId = undefined;
      this._propagatedRouteTable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._associatedRouteTable = value.associatedRouteTable;
      this._inboundRouteMapId = value.inboundRouteMapId;
      this._outboundRouteMapId = value.outboundRouteMapId;
      this._propagatedRouteTable.internalValue = value.propagatedRouteTable;
    }
  }

  // associated_route_table - computed: false, optional: false, required: true
  private _associatedRouteTable?: string; 
  public get associatedRouteTable() {
    return this.getStringAttribute('associated_route_table');
  }
  public set associatedRouteTable(value: string) {
    this._associatedRouteTable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedRouteTableInput() {
    return this._associatedRouteTable;
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
  private _propagatedRouteTable = new VpnGatewayConnectionRoutingPropagatedRouteTableOutputReference(this, "propagated_route_table");
  public get propagatedRouteTable() {
    return this._propagatedRouteTable;
  }
  public putPropagatedRouteTable(value: VpnGatewayConnectionRoutingPropagatedRouteTable) {
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
export interface VpnGatewayConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#create VpnGatewayConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#delete VpnGatewayConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#read VpnGatewayConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#update VpnGatewayConnection#update}
  */
  readonly update?: string;
}

export function vpnGatewayConnectionTimeoutsToTerraform(struct?: VpnGatewayConnectionTimeouts | cdktf.IResolvable): any {
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


export function vpnGatewayConnectionTimeoutsToHclTerraform(struct?: VpnGatewayConnectionTimeouts | cdktf.IResolvable): any {
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

export class VpnGatewayConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpnGatewayConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnGatewayConnectionTimeouts | cdktf.IResolvable | undefined) {
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
export interface VpnGatewayConnectionTrafficSelectorPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#local_address_ranges VpnGatewayConnection#local_address_ranges}
  */
  readonly localAddressRanges: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#remote_address_ranges VpnGatewayConnection#remote_address_ranges}
  */
  readonly remoteAddressRanges: string[];
}

export function vpnGatewayConnectionTrafficSelectorPolicyToTerraform(struct?: VpnGatewayConnectionTrafficSelectorPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_address_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localAddressRanges),
    remote_address_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteAddressRanges),
  }
}


export function vpnGatewayConnectionTrafficSelectorPolicyToHclTerraform(struct?: VpnGatewayConnectionTrafficSelectorPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_address_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localAddressRanges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    remote_address_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteAddressRanges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnGatewayConnectionTrafficSelectorPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnGatewayConnectionTrafficSelectorPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localAddressRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAddressRanges = this._localAddressRanges;
    }
    if (this._remoteAddressRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAddressRanges = this._remoteAddressRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnGatewayConnectionTrafficSelectorPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localAddressRanges = undefined;
      this._remoteAddressRanges = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localAddressRanges = value.localAddressRanges;
      this._remoteAddressRanges = value.remoteAddressRanges;
    }
  }

  // local_address_ranges - computed: false, optional: false, required: true
  private _localAddressRanges?: string[]; 
  public get localAddressRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('local_address_ranges'));
  }
  public set localAddressRanges(value: string[]) {
    this._localAddressRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressRangesInput() {
    return this._localAddressRanges;
  }

  // remote_address_ranges - computed: false, optional: false, required: true
  private _remoteAddressRanges?: string[]; 
  public get remoteAddressRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_address_ranges'));
  }
  public set remoteAddressRanges(value: string[]) {
    this._remoteAddressRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressRangesInput() {
    return this._remoteAddressRanges;
  }
}

export class VpnGatewayConnectionTrafficSelectorPolicyList extends cdktf.ComplexList {
  public internalValue? : VpnGatewayConnectionTrafficSelectorPolicy[] | cdktf.IResolvable

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
  public get(index: number): VpnGatewayConnectionTrafficSelectorPolicyOutputReference {
    return new VpnGatewayConnectionTrafficSelectorPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnGatewayConnectionVpnLinkCustomBgpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#ip_address VpnGatewayConnection#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#ip_configuration_id VpnGatewayConnection#ip_configuration_id}
  */
  readonly ipConfigurationId: string;
}

export function vpnGatewayConnectionVpnLinkCustomBgpAddressToTerraform(struct?: VpnGatewayConnectionVpnLinkCustomBgpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_configuration_id: cdktf.stringToTerraform(struct!.ipConfigurationId),
  }
}


export function vpnGatewayConnectionVpnLinkCustomBgpAddressToHclTerraform(struct?: VpnGatewayConnectionVpnLinkCustomBgpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.ipConfigurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnGatewayConnectionVpnLinkCustomBgpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConfigurationId = this._ipConfigurationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnGatewayConnectionVpnLinkCustomBgpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipConfigurationId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._ipConfigurationId = value.ipConfigurationId;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_configuration_id - computed: false, optional: false, required: true
  private _ipConfigurationId?: string; 
  public get ipConfigurationId() {
    return this.getStringAttribute('ip_configuration_id');
  }
  public set ipConfigurationId(value: string) {
    this._ipConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationIdInput() {
    return this._ipConfigurationId;
  }
}

export class VpnGatewayConnectionVpnLinkCustomBgpAddressList extends cdktf.ComplexList {
  public internalValue? : VpnGatewayConnectionVpnLinkCustomBgpAddress[] | cdktf.IResolvable

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
  public get(index: number): VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference {
    return new VpnGatewayConnectionVpnLinkCustomBgpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnGatewayConnectionVpnLinkIpsecPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#dh_group VpnGatewayConnection#dh_group}
  */
  readonly dhGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#encryption_algorithm VpnGatewayConnection#encryption_algorithm}
  */
  readonly encryptionAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#ike_encryption_algorithm VpnGatewayConnection#ike_encryption_algorithm}
  */
  readonly ikeEncryptionAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#ike_integrity_algorithm VpnGatewayConnection#ike_integrity_algorithm}
  */
  readonly ikeIntegrityAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#integrity_algorithm VpnGatewayConnection#integrity_algorithm}
  */
  readonly integrityAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#pfs_group VpnGatewayConnection#pfs_group}
  */
  readonly pfsGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#sa_data_size_kb VpnGatewayConnection#sa_data_size_kb}
  */
  readonly saDataSizeKb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#sa_lifetime_sec VpnGatewayConnection#sa_lifetime_sec}
  */
  readonly saLifetimeSec: number;
}

export function vpnGatewayConnectionVpnLinkIpsecPolicyToTerraform(struct?: VpnGatewayConnectionVpnLinkIpsecPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dh_group: cdktf.stringToTerraform(struct!.dhGroup),
    encryption_algorithm: cdktf.stringToTerraform(struct!.encryptionAlgorithm),
    ike_encryption_algorithm: cdktf.stringToTerraform(struct!.ikeEncryptionAlgorithm),
    ike_integrity_algorithm: cdktf.stringToTerraform(struct!.ikeIntegrityAlgorithm),
    integrity_algorithm: cdktf.stringToTerraform(struct!.integrityAlgorithm),
    pfs_group: cdktf.stringToTerraform(struct!.pfsGroup),
    sa_data_size_kb: cdktf.numberToTerraform(struct!.saDataSizeKb),
    sa_lifetime_sec: cdktf.numberToTerraform(struct!.saLifetimeSec),
  }
}


export function vpnGatewayConnectionVpnLinkIpsecPolicyToHclTerraform(struct?: VpnGatewayConnectionVpnLinkIpsecPolicy | cdktf.IResolvable): any {
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
    encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.encryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.ikeEncryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_integrity_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.ikeIntegrityAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integrity_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.integrityAlgorithm),
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
    sa_data_size_kb: {
      value: cdktf.numberToHclTerraform(struct!.saDataSizeKb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sa_lifetime_sec: {
      value: cdktf.numberToHclTerraform(struct!.saLifetimeSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnGatewayConnectionVpnLinkIpsecPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhGroup = this._dhGroup;
    }
    if (this._encryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAlgorithm = this._encryptionAlgorithm;
    }
    if (this._ikeEncryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeEncryptionAlgorithm = this._ikeEncryptionAlgorithm;
    }
    if (this._ikeIntegrityAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeIntegrityAlgorithm = this._ikeIntegrityAlgorithm;
    }
    if (this._integrityAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrityAlgorithm = this._integrityAlgorithm;
    }
    if (this._pfsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfsGroup = this._pfsGroup;
    }
    if (this._saDataSizeKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.saDataSizeKb = this._saDataSizeKb;
    }
    if (this._saLifetimeSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.saLifetimeSec = this._saLifetimeSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnGatewayConnectionVpnLinkIpsecPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhGroup = undefined;
      this._encryptionAlgorithm = undefined;
      this._ikeEncryptionAlgorithm = undefined;
      this._ikeIntegrityAlgorithm = undefined;
      this._integrityAlgorithm = undefined;
      this._pfsGroup = undefined;
      this._saDataSizeKb = undefined;
      this._saLifetimeSec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhGroup = value.dhGroup;
      this._encryptionAlgorithm = value.encryptionAlgorithm;
      this._ikeEncryptionAlgorithm = value.ikeEncryptionAlgorithm;
      this._ikeIntegrityAlgorithm = value.ikeIntegrityAlgorithm;
      this._integrityAlgorithm = value.integrityAlgorithm;
      this._pfsGroup = value.pfsGroup;
      this._saDataSizeKb = value.saDataSizeKb;
      this._saLifetimeSec = value.saLifetimeSec;
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

  // encryption_algorithm - computed: false, optional: false, required: true
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // ike_encryption_algorithm - computed: false, optional: false, required: true
  private _ikeEncryptionAlgorithm?: string; 
  public get ikeEncryptionAlgorithm() {
    return this.getStringAttribute('ike_encryption_algorithm');
  }
  public set ikeEncryptionAlgorithm(value: string) {
    this._ikeEncryptionAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeEncryptionAlgorithmInput() {
    return this._ikeEncryptionAlgorithm;
  }

  // ike_integrity_algorithm - computed: false, optional: false, required: true
  private _ikeIntegrityAlgorithm?: string; 
  public get ikeIntegrityAlgorithm() {
    return this.getStringAttribute('ike_integrity_algorithm');
  }
  public set ikeIntegrityAlgorithm(value: string) {
    this._ikeIntegrityAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeIntegrityAlgorithmInput() {
    return this._ikeIntegrityAlgorithm;
  }

  // integrity_algorithm - computed: false, optional: false, required: true
  private _integrityAlgorithm?: string; 
  public get integrityAlgorithm() {
    return this.getStringAttribute('integrity_algorithm');
  }
  public set integrityAlgorithm(value: string) {
    this._integrityAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrityAlgorithmInput() {
    return this._integrityAlgorithm;
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

  // sa_data_size_kb - computed: false, optional: false, required: true
  private _saDataSizeKb?: number; 
  public get saDataSizeKb() {
    return this.getNumberAttribute('sa_data_size_kb');
  }
  public set saDataSizeKb(value: number) {
    this._saDataSizeKb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saDataSizeKbInput() {
    return this._saDataSizeKb;
  }

  // sa_lifetime_sec - computed: false, optional: false, required: true
  private _saLifetimeSec?: number; 
  public get saLifetimeSec() {
    return this.getNumberAttribute('sa_lifetime_sec');
  }
  public set saLifetimeSec(value: number) {
    this._saLifetimeSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saLifetimeSecInput() {
    return this._saLifetimeSec;
  }
}

export class VpnGatewayConnectionVpnLinkIpsecPolicyList extends cdktf.ComplexList {
  public internalValue? : VpnGatewayConnectionVpnLinkIpsecPolicy[] | cdktf.IResolvable

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
  public get(index: number): VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference {
    return new VpnGatewayConnectionVpnLinkIpsecPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnGatewayConnectionVpnLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#bandwidth_mbps VpnGatewayConnection#bandwidth_mbps}
  */
  readonly bandwidthMbps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#bgp_enabled VpnGatewayConnection#bgp_enabled}
  */
  readonly bgpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#connection_mode VpnGatewayConnection#connection_mode}
  */
  readonly connectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#egress_nat_rule_ids VpnGatewayConnection#egress_nat_rule_ids}
  */
  readonly egressNatRuleIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#ingress_nat_rule_ids VpnGatewayConnection#ingress_nat_rule_ids}
  */
  readonly ingressNatRuleIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#local_azure_ip_address_enabled VpnGatewayConnection#local_azure_ip_address_enabled}
  */
  readonly localAzureIpAddressEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#name VpnGatewayConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#policy_based_traffic_selector_enabled VpnGatewayConnection#policy_based_traffic_selector_enabled}
  */
  readonly policyBasedTrafficSelectorEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#protocol VpnGatewayConnection#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#ratelimit_enabled VpnGatewayConnection#ratelimit_enabled}
  */
  readonly ratelimitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#route_weight VpnGatewayConnection#route_weight}
  */
  readonly routeWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#shared_key VpnGatewayConnection#shared_key}
  */
  readonly sharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#vpn_site_link_id VpnGatewayConnection#vpn_site_link_id}
  */
  readonly vpnSiteLinkId: string;
  /**
  * custom_bgp_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#custom_bgp_address VpnGatewayConnection#custom_bgp_address}
  */
  readonly customBgpAddress?: VpnGatewayConnectionVpnLinkCustomBgpAddress[] | cdktf.IResolvable;
  /**
  * ipsec_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#ipsec_policy VpnGatewayConnection#ipsec_policy}
  */
  readonly ipsecPolicy?: VpnGatewayConnectionVpnLinkIpsecPolicy[] | cdktf.IResolvable;
}

export function vpnGatewayConnectionVpnLinkToTerraform(struct?: VpnGatewayConnectionVpnLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_mbps: cdktf.numberToTerraform(struct!.bandwidthMbps),
    bgp_enabled: cdktf.booleanToTerraform(struct!.bgpEnabled),
    connection_mode: cdktf.stringToTerraform(struct!.connectionMode),
    egress_nat_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.egressNatRuleIds),
    ingress_nat_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ingressNatRuleIds),
    local_azure_ip_address_enabled: cdktf.booleanToTerraform(struct!.localAzureIpAddressEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    policy_based_traffic_selector_enabled: cdktf.booleanToTerraform(struct!.policyBasedTrafficSelectorEnabled),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    ratelimit_enabled: cdktf.booleanToTerraform(struct!.ratelimitEnabled),
    route_weight: cdktf.numberToTerraform(struct!.routeWeight),
    shared_key: cdktf.stringToTerraform(struct!.sharedKey),
    vpn_site_link_id: cdktf.stringToTerraform(struct!.vpnSiteLinkId),
    custom_bgp_address: cdktf.listMapper(vpnGatewayConnectionVpnLinkCustomBgpAddressToTerraform, true)(struct!.customBgpAddress),
    ipsec_policy: cdktf.listMapper(vpnGatewayConnectionVpnLinkIpsecPolicyToTerraform, true)(struct!.ipsecPolicy),
  }
}


export function vpnGatewayConnectionVpnLinkToHclTerraform(struct?: VpnGatewayConnectionVpnLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_mbps: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthMbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgp_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bgpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connection_mode: {
      value: cdktf.stringToHclTerraform(struct!.connectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_nat_rule_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.egressNatRuleIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ingress_nat_rule_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ingressNatRuleIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    local_azure_ip_address_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.localAzureIpAddressEnabled),
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
    policy_based_traffic_selector_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.policyBasedTrafficSelectorEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ratelimit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ratelimitEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    route_weight: {
      value: cdktf.numberToHclTerraform(struct!.routeWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_key: {
      value: cdktf.stringToHclTerraform(struct!.sharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_site_link_id: {
      value: cdktf.stringToHclTerraform(struct!.vpnSiteLinkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_bgp_address: {
      value: cdktf.listMapperHcl(vpnGatewayConnectionVpnLinkCustomBgpAddressToHclTerraform, true)(struct!.customBgpAddress),
      isBlock: true,
      type: "set",
      storageClassType: "VpnGatewayConnectionVpnLinkCustomBgpAddressList",
    },
    ipsec_policy: {
      value: cdktf.listMapperHcl(vpnGatewayConnectionVpnLinkIpsecPolicyToHclTerraform, true)(struct!.ipsecPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "VpnGatewayConnectionVpnLinkIpsecPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnGatewayConnectionVpnLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnGatewayConnectionVpnLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthMbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthMbps = this._bandwidthMbps;
    }
    if (this._bgpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpEnabled = this._bgpEnabled;
    }
    if (this._connectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionMode = this._connectionMode;
    }
    if (this._egressNatRuleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressNatRuleIds = this._egressNatRuleIds;
    }
    if (this._ingressNatRuleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressNatRuleIds = this._ingressNatRuleIds;
    }
    if (this._localAzureIpAddressEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAzureIpAddressEnabled = this._localAzureIpAddressEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policyBasedTrafficSelectorEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyBasedTrafficSelectorEnabled = this._policyBasedTrafficSelectorEnabled;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._ratelimitEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitEnabled = this._ratelimitEnabled;
    }
    if (this._routeWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeWeight = this._routeWeight;
    }
    if (this._sharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedKey = this._sharedKey;
    }
    if (this._vpnSiteLinkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnSiteLinkId = this._vpnSiteLinkId;
    }
    if (this._customBgpAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customBgpAddress = this._customBgpAddress?.internalValue;
    }
    if (this._ipsecPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPolicy = this._ipsecPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnGatewayConnectionVpnLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidthMbps = undefined;
      this._bgpEnabled = undefined;
      this._connectionMode = undefined;
      this._egressNatRuleIds = undefined;
      this._ingressNatRuleIds = undefined;
      this._localAzureIpAddressEnabled = undefined;
      this._name = undefined;
      this._policyBasedTrafficSelectorEnabled = undefined;
      this._protocol = undefined;
      this._ratelimitEnabled = undefined;
      this._routeWeight = undefined;
      this._sharedKey = undefined;
      this._vpnSiteLinkId = undefined;
      this._customBgpAddress.internalValue = undefined;
      this._ipsecPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidthMbps = value.bandwidthMbps;
      this._bgpEnabled = value.bgpEnabled;
      this._connectionMode = value.connectionMode;
      this._egressNatRuleIds = value.egressNatRuleIds;
      this._ingressNatRuleIds = value.ingressNatRuleIds;
      this._localAzureIpAddressEnabled = value.localAzureIpAddressEnabled;
      this._name = value.name;
      this._policyBasedTrafficSelectorEnabled = value.policyBasedTrafficSelectorEnabled;
      this._protocol = value.protocol;
      this._ratelimitEnabled = value.ratelimitEnabled;
      this._routeWeight = value.routeWeight;
      this._sharedKey = value.sharedKey;
      this._vpnSiteLinkId = value.vpnSiteLinkId;
      this._customBgpAddress.internalValue = value.customBgpAddress;
      this._ipsecPolicy.internalValue = value.ipsecPolicy;
    }
  }

  // bandwidth_mbps - computed: false, optional: true, required: false
  private _bandwidthMbps?: number; 
  public get bandwidthMbps() {
    return this.getNumberAttribute('bandwidth_mbps');
  }
  public set bandwidthMbps(value: number) {
    this._bandwidthMbps = value;
  }
  public resetBandwidthMbps() {
    this._bandwidthMbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthMbpsInput() {
    return this._bandwidthMbps;
  }

  // bgp_enabled - computed: false, optional: true, required: false
  private _bgpEnabled?: boolean | cdktf.IResolvable; 
  public get bgpEnabled() {
    return this.getBooleanAttribute('bgp_enabled');
  }
  public set bgpEnabled(value: boolean | cdktf.IResolvable) {
    this._bgpEnabled = value;
  }
  public resetBgpEnabled() {
    this._bgpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpEnabledInput() {
    return this._bgpEnabled;
  }

  // connection_mode - computed: false, optional: true, required: false
  private _connectionMode?: string; 
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
  }
  public set connectionMode(value: string) {
    this._connectionMode = value;
  }
  public resetConnectionMode() {
    this._connectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionModeInput() {
    return this._connectionMode;
  }

  // egress_nat_rule_ids - computed: false, optional: true, required: false
  private _egressNatRuleIds?: string[]; 
  public get egressNatRuleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('egress_nat_rule_ids'));
  }
  public set egressNatRuleIds(value: string[]) {
    this._egressNatRuleIds = value;
  }
  public resetEgressNatRuleIds() {
    this._egressNatRuleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressNatRuleIdsInput() {
    return this._egressNatRuleIds;
  }

  // ingress_nat_rule_ids - computed: false, optional: true, required: false
  private _ingressNatRuleIds?: string[]; 
  public get ingressNatRuleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ingress_nat_rule_ids'));
  }
  public set ingressNatRuleIds(value: string[]) {
    this._ingressNatRuleIds = value;
  }
  public resetIngressNatRuleIds() {
    this._ingressNatRuleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressNatRuleIdsInput() {
    return this._ingressNatRuleIds;
  }

  // local_azure_ip_address_enabled - computed: false, optional: true, required: false
  private _localAzureIpAddressEnabled?: boolean | cdktf.IResolvable; 
  public get localAzureIpAddressEnabled() {
    return this.getBooleanAttribute('local_azure_ip_address_enabled');
  }
  public set localAzureIpAddressEnabled(value: boolean | cdktf.IResolvable) {
    this._localAzureIpAddressEnabled = value;
  }
  public resetLocalAzureIpAddressEnabled() {
    this._localAzureIpAddressEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAzureIpAddressEnabledInput() {
    return this._localAzureIpAddressEnabled;
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

  // policy_based_traffic_selector_enabled - computed: false, optional: true, required: false
  private _policyBasedTrafficSelectorEnabled?: boolean | cdktf.IResolvable; 
  public get policyBasedTrafficSelectorEnabled() {
    return this.getBooleanAttribute('policy_based_traffic_selector_enabled');
  }
  public set policyBasedTrafficSelectorEnabled(value: boolean | cdktf.IResolvable) {
    this._policyBasedTrafficSelectorEnabled = value;
  }
  public resetPolicyBasedTrafficSelectorEnabled() {
    this._policyBasedTrafficSelectorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyBasedTrafficSelectorEnabledInput() {
    return this._policyBasedTrafficSelectorEnabled;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // ratelimit_enabled - computed: false, optional: true, required: false
  private _ratelimitEnabled?: boolean | cdktf.IResolvable; 
  public get ratelimitEnabled() {
    return this.getBooleanAttribute('ratelimit_enabled');
  }
  public set ratelimitEnabled(value: boolean | cdktf.IResolvable) {
    this._ratelimitEnabled = value;
  }
  public resetRatelimitEnabled() {
    this._ratelimitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitEnabledInput() {
    return this._ratelimitEnabled;
  }

  // route_weight - computed: false, optional: true, required: false
  private _routeWeight?: number; 
  public get routeWeight() {
    return this.getNumberAttribute('route_weight');
  }
  public set routeWeight(value: number) {
    this._routeWeight = value;
  }
  public resetRouteWeight() {
    this._routeWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeWeightInput() {
    return this._routeWeight;
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

  // vpn_site_link_id - computed: false, optional: false, required: true
  private _vpnSiteLinkId?: string; 
  public get vpnSiteLinkId() {
    return this.getStringAttribute('vpn_site_link_id');
  }
  public set vpnSiteLinkId(value: string) {
    this._vpnSiteLinkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnSiteLinkIdInput() {
    return this._vpnSiteLinkId;
  }

  // custom_bgp_address - computed: false, optional: true, required: false
  private _customBgpAddress = new VpnGatewayConnectionVpnLinkCustomBgpAddressList(this, "custom_bgp_address", true);
  public get customBgpAddress() {
    return this._customBgpAddress;
  }
  public putCustomBgpAddress(value: VpnGatewayConnectionVpnLinkCustomBgpAddress[] | cdktf.IResolvable) {
    this._customBgpAddress.internalValue = value;
  }
  public resetCustomBgpAddress() {
    this._customBgpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBgpAddressInput() {
    return this._customBgpAddress.internalValue;
  }

  // ipsec_policy - computed: false, optional: true, required: false
  private _ipsecPolicy = new VpnGatewayConnectionVpnLinkIpsecPolicyList(this, "ipsec_policy", false);
  public get ipsecPolicy() {
    return this._ipsecPolicy;
  }
  public putIpsecPolicy(value: VpnGatewayConnectionVpnLinkIpsecPolicy[] | cdktf.IResolvable) {
    this._ipsecPolicy.internalValue = value;
  }
  public resetIpsecPolicy() {
    this._ipsecPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPolicyInput() {
    return this._ipsecPolicy.internalValue;
  }
}

export class VpnGatewayConnectionVpnLinkList extends cdktf.ComplexList {
  public internalValue? : VpnGatewayConnectionVpnLink[] | cdktf.IResolvable

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
  public get(index: number): VpnGatewayConnectionVpnLinkOutputReference {
    return new VpnGatewayConnectionVpnLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection azurerm_vpn_gateway_connection}
*/
export class VpnGatewayConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_vpn_gateway_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnGatewayConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnGatewayConnection to import
  * @param importFromId The id of the existing VpnGatewayConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnGatewayConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_vpn_gateway_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway_connection azurerm_vpn_gateway_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnGatewayConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: VpnGatewayConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_vpn_gateway_connection',
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
    this._id = config.id;
    this._internetSecurityEnabled = config.internetSecurityEnabled;
    this._name = config.name;
    this._remoteVpnSiteId = config.remoteVpnSiteId;
    this._vpnGatewayId = config.vpnGatewayId;
    this._routing.internalValue = config.routing;
    this._timeouts.internalValue = config.timeouts;
    this._trafficSelectorPolicy.internalValue = config.trafficSelectorPolicy;
    this._vpnLink.internalValue = config.vpnLink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // remote_vpn_site_id - computed: false, optional: false, required: true
  private _remoteVpnSiteId?: string; 
  public get remoteVpnSiteId() {
    return this.getStringAttribute('remote_vpn_site_id');
  }
  public set remoteVpnSiteId(value: string) {
    this._remoteVpnSiteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVpnSiteIdInput() {
    return this._remoteVpnSiteId;
  }

  // vpn_gateway_id - computed: false, optional: false, required: true
  private _vpnGatewayId?: string; 
  public get vpnGatewayId() {
    return this.getStringAttribute('vpn_gateway_id');
  }
  public set vpnGatewayId(value: string) {
    this._vpnGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayIdInput() {
    return this._vpnGatewayId;
  }

  // routing - computed: false, optional: true, required: false
  private _routing = new VpnGatewayConnectionRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: VpnGatewayConnectionRouting) {
    this._routing.internalValue = value;
  }
  public resetRouting() {
    this._routing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpnGatewayConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpnGatewayConnectionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // traffic_selector_policy - computed: false, optional: true, required: false
  private _trafficSelectorPolicy = new VpnGatewayConnectionTrafficSelectorPolicyList(this, "traffic_selector_policy", true);
  public get trafficSelectorPolicy() {
    return this._trafficSelectorPolicy;
  }
  public putTrafficSelectorPolicy(value: VpnGatewayConnectionTrafficSelectorPolicy[] | cdktf.IResolvable) {
    this._trafficSelectorPolicy.internalValue = value;
  }
  public resetTrafficSelectorPolicy() {
    this._trafficSelectorPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSelectorPolicyInput() {
    return this._trafficSelectorPolicy.internalValue;
  }

  // vpn_link - computed: false, optional: false, required: true
  private _vpnLink = new VpnGatewayConnectionVpnLinkList(this, "vpn_link", false);
  public get vpnLink() {
    return this._vpnLink;
  }
  public putVpnLink(value: VpnGatewayConnectionVpnLink[] | cdktf.IResolvable) {
    this._vpnLink.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnLinkInput() {
    return this._vpnLink.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      internet_security_enabled: cdktf.booleanToTerraform(this._internetSecurityEnabled),
      name: cdktf.stringToTerraform(this._name),
      remote_vpn_site_id: cdktf.stringToTerraform(this._remoteVpnSiteId),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
      routing: vpnGatewayConnectionRoutingToTerraform(this._routing.internalValue),
      timeouts: vpnGatewayConnectionTimeoutsToTerraform(this._timeouts.internalValue),
      traffic_selector_policy: cdktf.listMapper(vpnGatewayConnectionTrafficSelectorPolicyToTerraform, true)(this._trafficSelectorPolicy.internalValue),
      vpn_link: cdktf.listMapper(vpnGatewayConnectionVpnLinkToTerraform, true)(this._vpnLink.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_security_enabled: {
        value: cdktf.booleanToHclTerraform(this._internetSecurityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_vpn_site_id: {
        value: cdktf.stringToHclTerraform(this._remoteVpnSiteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_gateway_id: {
        value: cdktf.stringToHclTerraform(this._vpnGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing: {
        value: vpnGatewayConnectionRoutingToHclTerraform(this._routing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnGatewayConnectionRoutingList",
      },
      timeouts: {
        value: vpnGatewayConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpnGatewayConnectionTimeouts",
      },
      traffic_selector_policy: {
        value: cdktf.listMapperHcl(vpnGatewayConnectionTrafficSelectorPolicyToHclTerraform, true)(this._trafficSelectorPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpnGatewayConnectionTrafficSelectorPolicyList",
      },
      vpn_link: {
        value: cdktf.listMapperHcl(vpnGatewayConnectionVpnLinkToHclTerraform, true)(this._vpnLink.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnGatewayConnectionVpnLinkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
