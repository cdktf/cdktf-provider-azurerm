// https://www.terraform.io/docs/providers/azurerm/r/virtual_hub.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualHubConfig extends cdktf.TerraformMetaArguments {
  readonly addressPrefix?: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly sku?: string;
  readonly tags?: { [key: string]: string };
  readonly virtualWanId?: string;
  /** route block */
  readonly route?: VirtualHubRoute[];
  /** timeouts block */
  readonly timeouts?: VirtualHubTimeouts;
}
export interface VirtualHubRoute {
  readonly addressPrefixes: string[];
  readonly nextHopIpAddress: string;
}

function virtualHubRouteToTerraform(struct?: VirtualHubRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.addressPrefixes),
    next_hop_ip_address: cdktf.stringToTerraform(struct!.nextHopIpAddress),
  }
}

export interface VirtualHubTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function virtualHubTimeoutsToTerraform(struct?: VirtualHubTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class VirtualHub extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VirtualHubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_hub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addressPrefix = config.addressPrefix;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._virtualWanId = config.virtualWanId;
    this._route = config.route;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_prefix - computed: false, optional: true, required: false
  private _addressPrefix?: string;
  public get addressPrefix() {
    return this.getStringAttribute('address_prefix');
  }
  public set addressPrefix(value: string ) {
    this._addressPrefix = value;
  }
  public resetAddressPrefix() {
    this._addressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixInput() {
    return this._addressPrefix
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
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

  // sku - computed: false, optional: true, required: false
  private _sku?: string;
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string ) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // virtual_wan_id - computed: false, optional: true, required: false
  private _virtualWanId?: string;
  public get virtualWanId() {
    return this.getStringAttribute('virtual_wan_id');
  }
  public set virtualWanId(value: string ) {
    this._virtualWanId = value;
  }
  public resetVirtualWanId() {
    this._virtualWanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualWanIdInput() {
    return this._virtualWanId
  }

  // route - computed: false, optional: true, required: false
  private _route?: VirtualHubRoute[];
  public get route() {
    return this.interpolationForAttribute('route') as any;
  }
  public set route(value: VirtualHubRoute[] ) {
    this._route = value;
  }
  public resetRoute() {
    this._route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualHubTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualHubTimeouts ) {
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
      address_prefix: cdktf.stringToTerraform(this._addressPrefix),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      virtual_wan_id: cdktf.stringToTerraform(this._virtualWanId),
      route: cdktf.listMapper(virtualHubRouteToTerraform)(this._route),
      timeouts: virtualHubTimeoutsToTerraform(this._timeouts),
    };
  }
}
