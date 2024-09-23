// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualHubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub#address_prefix VirtualHub#address_prefix}
  */
  readonly addressPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub#hub_routing_preference VirtualHub#hub_routing_preference}
  */
  readonly hubRoutingPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub#id VirtualHub#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub#location VirtualHub#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub#name VirtualHub#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub#resource_group_name VirtualHub#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub#sku VirtualHub#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub#tags VirtualHub#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub#virtual_router_auto_scale_min_capacity VirtualHub#virtual_router_auto_scale_min_capacity}
  */
  readonly virtualRouterAutoScaleMinCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub#virtual_wan_id VirtualHub#virtual_wan_id}
  */
  readonly virtualWanId?: string;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub#route VirtualHub#route}
  */
  readonly route?: VirtualHubRoute[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub#timeouts VirtualHub#timeouts}
  */
  readonly timeouts?: VirtualHubTimeouts;
}
export interface VirtualHubRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub#address_prefixes VirtualHub#address_prefixes}
  */
  readonly addressPrefixes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub#next_hop_ip_address VirtualHub#next_hop_ip_address}
  */
  readonly nextHopIpAddress: string;
}

export function virtualHubRouteToTerraform(struct?: VirtualHubRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addressPrefixes),
    next_hop_ip_address: cdktf.stringToTerraform(struct!.nextHopIpAddress),
  }
}


export function virtualHubRouteToHclTerraform(struct?: VirtualHubRoute | cdktf.IResolvable): any {
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
    next_hop_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.nextHopIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualHubRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualHubRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressPrefixes = this._addressPrefixes;
    }
    if (this._nextHopIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopIpAddress = this._nextHopIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualHubRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressPrefixes = undefined;
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
      this._nextHopIpAddress = value.nextHopIpAddress;
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

  // next_hop_ip_address - computed: false, optional: false, required: true
  private _nextHopIpAddress?: string; 
  public get nextHopIpAddress() {
    return this.getStringAttribute('next_hop_ip_address');
  }
  public set nextHopIpAddress(value: string) {
    this._nextHopIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopIpAddressInput() {
    return this._nextHopIpAddress;
  }
}

export class VirtualHubRouteList extends cdktf.ComplexList {
  public internalValue? : VirtualHubRoute[] | cdktf.IResolvable

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
  public get(index: number): VirtualHubRouteOutputReference {
    return new VirtualHubRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualHubTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub#create VirtualHub#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub#delete VirtualHub#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub#read VirtualHub#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub#update VirtualHub#update}
  */
  readonly update?: string;
}

export function virtualHubTimeoutsToTerraform(struct?: VirtualHubTimeouts | cdktf.IResolvable): any {
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


export function virtualHubTimeoutsToHclTerraform(struct?: VirtualHubTimeouts | cdktf.IResolvable): any {
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

export class VirtualHubTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualHubTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualHubTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub azurerm_virtual_hub}
*/
export class VirtualHub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_virtual_hub";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualHub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualHub to import
  * @param importFromId The id of the existing VirtualHub that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualHub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_virtual_hub", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_hub azurerm_virtual_hub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualHubConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualHubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_hub',
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
    this._addressPrefix = config.addressPrefix;
    this._hubRoutingPreference = config.hubRoutingPreference;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._virtualRouterAutoScaleMinCapacity = config.virtualRouterAutoScaleMinCapacity;
    this._virtualWanId = config.virtualWanId;
    this._route.internalValue = config.route;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_prefix - computed: false, optional: true, required: false
  private _addressPrefix?: string; 
  public get addressPrefix() {
    return this.getStringAttribute('address_prefix');
  }
  public set addressPrefix(value: string) {
    this._addressPrefix = value;
  }
  public resetAddressPrefix() {
    this._addressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixInput() {
    return this._addressPrefix;
  }

  // default_route_table_id - computed: true, optional: false, required: false
  public get defaultRouteTableId() {
    return this.getStringAttribute('default_route_table_id');
  }

  // hub_routing_preference - computed: false, optional: true, required: false
  private _hubRoutingPreference?: string; 
  public get hubRoutingPreference() {
    return this.getStringAttribute('hub_routing_preference');
  }
  public set hubRoutingPreference(value: string) {
    this._hubRoutingPreference = value;
  }
  public resetHubRoutingPreference() {
    this._hubRoutingPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubRoutingPreferenceInput() {
    return this._hubRoutingPreference;
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

  // sku - computed: false, optional: true, required: false
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
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

  // virtual_router_asn - computed: true, optional: false, required: false
  public get virtualRouterAsn() {
    return this.getNumberAttribute('virtual_router_asn');
  }

  // virtual_router_auto_scale_min_capacity - computed: false, optional: true, required: false
  private _virtualRouterAutoScaleMinCapacity?: number; 
  public get virtualRouterAutoScaleMinCapacity() {
    return this.getNumberAttribute('virtual_router_auto_scale_min_capacity');
  }
  public set virtualRouterAutoScaleMinCapacity(value: number) {
    this._virtualRouterAutoScaleMinCapacity = value;
  }
  public resetVirtualRouterAutoScaleMinCapacity() {
    this._virtualRouterAutoScaleMinCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRouterAutoScaleMinCapacityInput() {
    return this._virtualRouterAutoScaleMinCapacity;
  }

  // virtual_router_ips - computed: true, optional: false, required: false
  public get virtualRouterIps() {
    return this.getListAttribute('virtual_router_ips');
  }

  // virtual_wan_id - computed: false, optional: true, required: false
  private _virtualWanId?: string; 
  public get virtualWanId() {
    return this.getStringAttribute('virtual_wan_id');
  }
  public set virtualWanId(value: string) {
    this._virtualWanId = value;
  }
  public resetVirtualWanId() {
    this._virtualWanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualWanIdInput() {
    return this._virtualWanId;
  }

  // route - computed: false, optional: true, required: false
  private _route = new VirtualHubRouteList(this, "route", true);
  public get route() {
    return this._route;
  }
  public putRoute(value: VirtualHubRoute[] | cdktf.IResolvable) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualHubTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualHubTimeouts) {
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
      address_prefix: cdktf.stringToTerraform(this._addressPrefix),
      hub_routing_preference: cdktf.stringToTerraform(this._hubRoutingPreference),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      virtual_router_auto_scale_min_capacity: cdktf.numberToTerraform(this._virtualRouterAutoScaleMinCapacity),
      virtual_wan_id: cdktf.stringToTerraform(this._virtualWanId),
      route: cdktf.listMapper(virtualHubRouteToTerraform, true)(this._route.internalValue),
      timeouts: virtualHubTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_prefix: {
        value: cdktf.stringToHclTerraform(this._addressPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hub_routing_preference: {
        value: cdktf.stringToHclTerraform(this._hubRoutingPreference),
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
      virtual_router_auto_scale_min_capacity: {
        value: cdktf.numberToHclTerraform(this._virtualRouterAutoScaleMinCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtual_wan_id: {
        value: cdktf.stringToHclTerraform(this._virtualWanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route: {
        value: cdktf.listMapperHcl(virtualHubRouteToHclTerraform, true)(this._route.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualHubRouteList",
      },
      timeouts: {
        value: virtualHubTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualHubTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
