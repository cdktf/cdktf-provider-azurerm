// https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VirtualNetworkConfig extends TerraformMetaArguments {
  readonly addressSpace: string[];
  readonly dnsServers?: string[];
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** ddos_protection_plan block */
  readonly ddosProtectionPlan?: VirtualNetworkDdosProtectionPlan[];
  /** subnet block */
  readonly subnet?: VirtualNetworkSubnet[];
  /** timeouts block */
  readonly timeouts?: VirtualNetworkTimeouts;
}
export interface VirtualNetworkDdosProtectionPlan {
  readonly enable: boolean;
  readonly id: string;
}
export interface VirtualNetworkSubnet {
  readonly addressPrefix: string;
  readonly name: string;
  readonly securityGroup?: string;
}
export interface VirtualNetworkTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class VirtualNetwork extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VirtualNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_network',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addressSpace = config.addressSpace;
    this._dnsServers = config.dnsServers;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._ddosProtectionPlan = config.ddosProtectionPlan;
    this._subnet = config.subnet;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_space - computed: false, optional: false, required: true
  private _addressSpace: string[];
  public get addressSpace() {
    return this._addressSpace;
  }
  public set addressSpace(value: string[]) {
    this._addressSpace = value;
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[];
  public get dnsServers() {
    return this._dnsServers;
  }
  public set dnsServers(value: string[] | undefined) {
    this._dnsServers = value;
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

  // ddos_protection_plan - computed: false, optional: true, required: false
  private _ddosProtectionPlan?: VirtualNetworkDdosProtectionPlan[];
  public get ddosProtectionPlan() {
    return this._ddosProtectionPlan;
  }
  public set ddosProtectionPlan(value: VirtualNetworkDdosProtectionPlan[] | undefined) {
    this._ddosProtectionPlan = value;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: VirtualNetworkSubnet[];
  public get subnet() {
    return this._subnet;
  }
  public set subnet(value: VirtualNetworkSubnet[] | undefined) {
    this._subnet = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualNetworkTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: VirtualNetworkTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_space: this._addressSpace,
      dns_servers: this._dnsServers,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      ddos_protection_plan: this._ddosProtectionPlan,
      subnet: this._subnet,
      timeouts: this._timeouts,
    };
  }
}
