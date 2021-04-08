// https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualNetworkConfig extends cdktf.TerraformMetaArguments {
  readonly addressSpace: string[];
  readonly bgpCommunity?: string;
  readonly dnsServers?: string[];
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly subnet?: VirtualNetworkSubnet[];
  readonly tags?: { [key: string]: string };
  readonly vmProtectionEnabled?: boolean;
  /** ddos_protection_plan block */
  readonly ddosProtectionPlan?: VirtualNetworkDdosProtectionPlan[];
  /** timeouts block */
  readonly timeouts?: VirtualNetworkTimeouts;
}
export interface VirtualNetworkSubnet {
  readonly addressPrefix?: string;
  readonly id?: string;
  readonly name?: string;
  readonly securityGroup?: string;
}

function virtualNetworkSubnetToTerraform(struct?: VirtualNetworkSubnet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address_prefix: struct!.addressPrefix === undefined ? null : cdktf.stringToTerraform(struct!.addressPrefix),
    id: struct!.id === undefined ? null : cdktf.stringToTerraform(struct!.id),
    name: struct!.name === undefined ? null : cdktf.stringToTerraform(struct!.name),
    security_group: struct!.securityGroup === undefined ? null : cdktf.stringToTerraform(struct!.securityGroup),
  }
}

export interface VirtualNetworkDdosProtectionPlan {
  readonly enable: boolean;
  readonly id: string;
}

function virtualNetworkDdosProtectionPlanToTerraform(struct?: VirtualNetworkDdosProtectionPlan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface VirtualNetworkTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function virtualNetworkTimeoutsToTerraform(struct?: VirtualNetworkTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class VirtualNetwork extends cdktf.TerraformResource {

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
    this._bgpCommunity = config.bgpCommunity;
    this._dnsServers = config.dnsServers;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._subnet = config.subnet;
    this._tags = config.tags;
    this._vmProtectionEnabled = config.vmProtectionEnabled;
    this._ddosProtectionPlan = config.ddosProtectionPlan;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_space - computed: false, optional: false, required: true
  private _addressSpace: string[];
  public get addressSpace() {
    return this.getListAttribute('address_space');
  }
  public set addressSpace(value: string[]) {
    this._addressSpace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSpaceInput() {
    return this._addressSpace
  }

  // bgp_community - computed: false, optional: true, required: false
  private _bgpCommunity?: string;
  public get bgpCommunity() {
    return this.getStringAttribute('bgp_community');
  }
  public set bgpCommunity(value: string ) {
    this._bgpCommunity = value;
  }
  public resetBgpCommunity() {
    this._bgpCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpCommunityInput() {
    return this._bgpCommunity
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[];
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[] ) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // subnet - computed: true, optional: true, required: false
  private _subnet?: VirtualNetworkSubnet[]
  public get subnet(): VirtualNetworkSubnet[] {
    return this.interpolationForAttribute('subnet') as any; // Getting the computed value is not yet implemented
  }
  public set subnet(value: VirtualNetworkSubnet[]) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet
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

  // vm_protection_enabled - computed: false, optional: true, required: false
  private _vmProtectionEnabled?: boolean;
  public get vmProtectionEnabled() {
    return this.getBooleanAttribute('vm_protection_enabled');
  }
  public set vmProtectionEnabled(value: boolean ) {
    this._vmProtectionEnabled = value;
  }
  public resetVmProtectionEnabled() {
    this._vmProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmProtectionEnabledInput() {
    return this._vmProtectionEnabled
  }

  // ddos_protection_plan - computed: false, optional: true, required: false
  private _ddosProtectionPlan?: VirtualNetworkDdosProtectionPlan[];
  public get ddosProtectionPlan() {
    return this.interpolationForAttribute('ddos_protection_plan') as any;
  }
  public set ddosProtectionPlan(value: VirtualNetworkDdosProtectionPlan[] ) {
    this._ddosProtectionPlan = value;
  }
  public resetDdosProtectionPlan() {
    this._ddosProtectionPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosProtectionPlanInput() {
    return this._ddosProtectionPlan
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualNetworkTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualNetworkTimeouts ) {
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
      address_space: cdktf.listMapper(cdktf.stringToTerraform)(this._addressSpace),
      bgp_community: cdktf.stringToTerraform(this._bgpCommunity),
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsServers),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      subnet: cdktf.listMapper(virtualNetworkSubnetToTerraform)(this._subnet),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vm_protection_enabled: cdktf.booleanToTerraform(this._vmProtectionEnabled),
      ddos_protection_plan: cdktf.listMapper(virtualNetworkDdosProtectionPlanToTerraform)(this._ddosProtectionPlan),
      timeouts: virtualNetworkTimeoutsToTerraform(this._timeouts),
    };
  }
}
