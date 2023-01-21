// https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualHubConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection#id VirtualHubConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection#internet_security_enabled VirtualHubConnection#internet_security_enabled}
  */
  readonly internetSecurityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection#name VirtualHubConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection#remote_virtual_network_id VirtualHubConnection#remote_virtual_network_id}
  */
  readonly remoteVirtualNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection#virtual_hub_id VirtualHubConnection#virtual_hub_id}
  */
  readonly virtualHubId: string;
  /**
  * routing block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection#routing VirtualHubConnection#routing}
  */
  readonly routing?: VirtualHubConnectionRouting;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection#timeouts VirtualHubConnection#timeouts}
  */
  readonly timeouts?: VirtualHubConnectionTimeouts;
}
export interface VirtualHubConnectionRoutingPropagatedRouteTable {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection#labels VirtualHubConnection#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection#route_table_ids VirtualHubConnection#route_table_ids}
  */
  readonly routeTableIds?: string[];
}

export function virtualHubConnectionRoutingPropagatedRouteTableToTerraform(struct?: VirtualHubConnectionRoutingPropagatedRouteTableOutputReference | VirtualHubConnectionRoutingPropagatedRouteTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    route_table_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeTableIds),
  }
}

export class VirtualHubConnectionRoutingPropagatedRouteTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHubConnectionRoutingPropagatedRouteTable | undefined {
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

  public set internalValue(value: VirtualHubConnectionRoutingPropagatedRouteTable | undefined) {
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

  // labels - computed: true, optional: true, required: false
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

  // route_table_ids - computed: true, optional: true, required: false
  private _routeTableIds?: string[]; 
  public get routeTableIds() {
    return this.getListAttribute('route_table_ids');
  }
  public set routeTableIds(value: string[]) {
    this._routeTableIds = value;
  }
  public resetRouteTableIds() {
    this._routeTableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdsInput() {
    return this._routeTableIds;
  }
}
export interface VirtualHubConnectionRoutingStaticVnetRoute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection#address_prefixes VirtualHubConnection#address_prefixes}
  */
  readonly addressPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection#name VirtualHubConnection#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection#next_hop_ip_address VirtualHubConnection#next_hop_ip_address}
  */
  readonly nextHopIpAddress?: string;
}

export function virtualHubConnectionRoutingStaticVnetRouteToTerraform(struct?: VirtualHubConnectionRoutingStaticVnetRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addressPrefixes),
    name: cdktf.stringToTerraform(struct!.name),
    next_hop_ip_address: cdktf.stringToTerraform(struct!.nextHopIpAddress),
  }
}

export class VirtualHubConnectionRoutingStaticVnetRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualHubConnectionRoutingStaticVnetRoute | cdktf.IResolvable | undefined {
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
    if (this._nextHopIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopIpAddress = this._nextHopIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHubConnectionRoutingStaticVnetRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressPrefixes = undefined;
      this._name = undefined;
      this._nextHopIpAddress = undefined;
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
      this._nextHopIpAddress = value.nextHopIpAddress;
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

  // next_hop_ip_address - computed: false, optional: true, required: false
  private _nextHopIpAddress?: string; 
  public get nextHopIpAddress() {
    return this.getStringAttribute('next_hop_ip_address');
  }
  public set nextHopIpAddress(value: string) {
    this._nextHopIpAddress = value;
  }
  public resetNextHopIpAddress() {
    this._nextHopIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopIpAddressInput() {
    return this._nextHopIpAddress;
  }
}

export class VirtualHubConnectionRoutingStaticVnetRouteList extends cdktf.ComplexList {
  public internalValue? : VirtualHubConnectionRoutingStaticVnetRoute[] | cdktf.IResolvable

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
  public get(index: number): VirtualHubConnectionRoutingStaticVnetRouteOutputReference {
    return new VirtualHubConnectionRoutingStaticVnetRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualHubConnectionRouting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection#associated_route_table_id VirtualHubConnection#associated_route_table_id}
  */
  readonly associatedRouteTableId?: string;
  /**
  * propagated_route_table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection#propagated_route_table VirtualHubConnection#propagated_route_table}
  */
  readonly propagatedRouteTable?: VirtualHubConnectionRoutingPropagatedRouteTable;
  /**
  * static_vnet_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection#static_vnet_route VirtualHubConnection#static_vnet_route}
  */
  readonly staticVnetRoute?: VirtualHubConnectionRoutingStaticVnetRoute[] | cdktf.IResolvable;
}

export function virtualHubConnectionRoutingToTerraform(struct?: VirtualHubConnectionRoutingOutputReference | VirtualHubConnectionRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associated_route_table_id: cdktf.stringToTerraform(struct!.associatedRouteTableId),
    propagated_route_table: virtualHubConnectionRoutingPropagatedRouteTableToTerraform(struct!.propagatedRouteTable),
    static_vnet_route: cdktf.listMapper(virtualHubConnectionRoutingStaticVnetRouteToTerraform, true)(struct!.staticVnetRoute),
  }
}

export class VirtualHubConnectionRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHubConnectionRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associatedRouteTableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedRouteTableId = this._associatedRouteTableId;
    }
    if (this._propagatedRouteTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagatedRouteTable = this._propagatedRouteTable?.internalValue;
    }
    if (this._staticVnetRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticVnetRoute = this._staticVnetRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHubConnectionRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._associatedRouteTableId = undefined;
      this._propagatedRouteTable.internalValue = undefined;
      this._staticVnetRoute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._associatedRouteTableId = value.associatedRouteTableId;
      this._propagatedRouteTable.internalValue = value.propagatedRouteTable;
      this._staticVnetRoute.internalValue = value.staticVnetRoute;
    }
  }

  // associated_route_table_id - computed: true, optional: true, required: false
  private _associatedRouteTableId?: string; 
  public get associatedRouteTableId() {
    return this.getStringAttribute('associated_route_table_id');
  }
  public set associatedRouteTableId(value: string) {
    this._associatedRouteTableId = value;
  }
  public resetAssociatedRouteTableId() {
    this._associatedRouteTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedRouteTableIdInput() {
    return this._associatedRouteTableId;
  }

  // propagated_route_table - computed: false, optional: true, required: false
  private _propagatedRouteTable = new VirtualHubConnectionRoutingPropagatedRouteTableOutputReference(this, "propagated_route_table");
  public get propagatedRouteTable() {
    return this._propagatedRouteTable;
  }
  public putPropagatedRouteTable(value: VirtualHubConnectionRoutingPropagatedRouteTable) {
    this._propagatedRouteTable.internalValue = value;
  }
  public resetPropagatedRouteTable() {
    this._propagatedRouteTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedRouteTableInput() {
    return this._propagatedRouteTable.internalValue;
  }

  // static_vnet_route - computed: false, optional: true, required: false
  private _staticVnetRoute = new VirtualHubConnectionRoutingStaticVnetRouteList(this, "static_vnet_route", false);
  public get staticVnetRoute() {
    return this._staticVnetRoute;
  }
  public putStaticVnetRoute(value: VirtualHubConnectionRoutingStaticVnetRoute[] | cdktf.IResolvable) {
    this._staticVnetRoute.internalValue = value;
  }
  public resetStaticVnetRoute() {
    this._staticVnetRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticVnetRouteInput() {
    return this._staticVnetRoute.internalValue;
  }
}
export interface VirtualHubConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection#create VirtualHubConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection#delete VirtualHubConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection#read VirtualHubConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection#update VirtualHubConnection#update}
  */
  readonly update?: string;
}

export function virtualHubConnectionTimeoutsToTerraform(struct?: VirtualHubConnectionTimeoutsOutputReference | VirtualHubConnectionTimeouts | cdktf.IResolvable): any {
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

export class VirtualHubConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualHubConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualHubConnectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection azurerm_virtual_hub_connection}
*/
export class VirtualHubConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_virtual_hub_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_connection azurerm_virtual_hub_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualHubConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualHubConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_hub_connection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.40.0',
        providerVersionConstraint: '~> 3.10'
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
    this._remoteVirtualNetworkId = config.remoteVirtualNetworkId;
    this._virtualHubId = config.virtualHubId;
    this._routing.internalValue = config.routing;
    this._timeouts.internalValue = config.timeouts;
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

  // remote_virtual_network_id - computed: false, optional: false, required: true
  private _remoteVirtualNetworkId?: string; 
  public get remoteVirtualNetworkId() {
    return this.getStringAttribute('remote_virtual_network_id');
  }
  public set remoteVirtualNetworkId(value: string) {
    this._remoteVirtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVirtualNetworkIdInput() {
    return this._remoteVirtualNetworkId;
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

  // routing - computed: false, optional: true, required: false
  private _routing = new VirtualHubConnectionRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: VirtualHubConnectionRouting) {
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
  private _timeouts = new VirtualHubConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualHubConnectionTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      internet_security_enabled: cdktf.booleanToTerraform(this._internetSecurityEnabled),
      name: cdktf.stringToTerraform(this._name),
      remote_virtual_network_id: cdktf.stringToTerraform(this._remoteVirtualNetworkId),
      virtual_hub_id: cdktf.stringToTerraform(this._virtualHubId),
      routing: virtualHubConnectionRoutingToTerraform(this._routing.internalValue),
      timeouts: virtualHubConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
