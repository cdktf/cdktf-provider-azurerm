// https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#address_space VirtualNetwork#address_space}
  */
  readonly addressSpace: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#bgp_community VirtualNetwork#bgp_community}
  */
  readonly bgpCommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#dns_servers VirtualNetwork#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#location VirtualNetwork#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#name VirtualNetwork#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#resource_group_name VirtualNetwork#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#subnet VirtualNetwork#subnet}
  */
  readonly subnet?: VirtualNetworkSubnet[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#tags VirtualNetwork#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#vm_protection_enabled VirtualNetwork#vm_protection_enabled}
  */
  readonly vmProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * ddos_protection_plan block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#ddos_protection_plan VirtualNetwork#ddos_protection_plan}
  */
  readonly ddosProtectionPlan?: VirtualNetworkDdosProtectionPlan[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#timeouts VirtualNetwork#timeouts}
  */
  readonly timeouts?: VirtualNetworkTimeouts;
}
export interface VirtualNetworkSubnet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#address_prefix VirtualNetwork#address_prefix}
  */
  readonly addressPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#id VirtualNetwork#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#name VirtualNetwork#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#security_group VirtualNetwork#security_group}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#enable VirtualNetwork#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#id VirtualNetwork#id}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#create VirtualNetwork#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#delete VirtualNetwork#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#read VirtualNetwork#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html#update VirtualNetwork#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html azurerm_virtual_network}
*/
export class VirtualNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_virtual_network";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_network.html azurerm_virtual_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualNetworkConfig
  */
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

  // dns_servers - computed: true, optional: true, required: false
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _vmProtectionEnabled?: boolean | cdktf.IResolvable;
  public get vmProtectionEnabled() {
    return this.getBooleanAttribute('vm_protection_enabled');
  }
  public set vmProtectionEnabled(value: boolean | cdktf.IResolvable ) {
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
