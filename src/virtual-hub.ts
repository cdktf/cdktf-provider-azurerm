// https://www.terraform.io/docs/providers/azurerm/r/virtual_hub.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VirtualHubConfig extends TerraformMetaArguments {
  readonly addressPrefix: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly virtualWanId: string;
  /** route block */
  readonly route?: VirtualHubRoute[];
  /** timeouts block */
  readonly timeouts?: VirtualHubTimeouts;
}
export interface VirtualHubRoute {
  readonly addressPrefixes: string[];
  readonly nextHopIpAddress: string;
}
export interface VirtualHubTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class VirtualHub extends TerraformResource {

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
    this._tags = config.tags;
    this._virtualWanId = config.virtualWanId;
    this._route = config.route;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_prefix - computed: false, optional: false, required: true
  private _addressPrefix: string;
  public get addressPrefix() {
    return this._addressPrefix;
  }
  public set addressPrefix(value: string) {
    this._addressPrefix = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // virtual_wan_id - computed: false, optional: false, required: true
  private _virtualWanId: string;
  public get virtualWanId() {
    return this._virtualWanId;
  }
  public set virtualWanId(value: string) {
    this._virtualWanId = value;
  }

  // route - computed: false, optional: true, required: false
  private _route?: VirtualHubRoute[];
  public get route() {
    return this._route;
  }
  public set route(value: VirtualHubRoute[] | undefined) {
    this._route = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualHubTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: VirtualHubTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_prefix: this._addressPrefix,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      virtual_wan_id: this._virtualWanId,
      route: this._route,
      timeouts: this._timeouts,
    };
  }
}
