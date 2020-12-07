// https://www.terraform.io/docs/providers/azurerm/r/dedicated_hardware_security_module.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DedicatedHardwareSecurityModuleConfig extends cdktf.TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly skuName: string;
  readonly stampId?: string;
  readonly tags?: { [key: string]: string };
  readonly zones?: string[];
  /** network_profile block */
  readonly networkProfile: DedicatedHardwareSecurityModuleNetworkProfile[];
  /** timeouts block */
  readonly timeouts?: DedicatedHardwareSecurityModuleTimeouts;
}
export interface DedicatedHardwareSecurityModuleNetworkProfile {
  readonly networkInterfacePrivateIpAddresses: string[];
  readonly subnetId: string;
}

function dedicatedHardwareSecurityModuleNetworkProfileToTerraform(struct?: DedicatedHardwareSecurityModuleNetworkProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    network_interface_private_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.networkInterfacePrivateIpAddresses),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface DedicatedHardwareSecurityModuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function dedicatedHardwareSecurityModuleTimeoutsToTerraform(struct?: DedicatedHardwareSecurityModuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DedicatedHardwareSecurityModule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DedicatedHardwareSecurityModuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dedicated_hardware_security_module',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._stampId = config.stampId;
    this._tags = config.tags;
    this._zones = config.zones;
    this._networkProfile = config.networkProfile;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // sku_name - computed: false, optional: false, required: true
  private _skuName: string;
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // stamp_id - computed: false, optional: true, required: false
  private _stampId?: string;
  public get stampId() {
    return this.getStringAttribute('stamp_id');
  }
  public set stampId(value: string ) {
    this._stampId = value;
  }
  public resetStampId() {
    this._stampId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stampIdInput() {
    return this._stampId
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

  // zones - computed: false, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] ) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones
  }

  // network_profile - computed: false, optional: false, required: true
  private _networkProfile: DedicatedHardwareSecurityModuleNetworkProfile[];
  public get networkProfile() {
    return this.interpolationForAttribute('network_profile') as any;
  }
  public set networkProfile(value: DedicatedHardwareSecurityModuleNetworkProfile[]) {
    this._networkProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileInput() {
    return this._networkProfile
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DedicatedHardwareSecurityModuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DedicatedHardwareSecurityModuleTimeouts ) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      stamp_id: cdktf.stringToTerraform(this._stampId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      network_profile: cdktf.listMapper(dedicatedHardwareSecurityModuleNetworkProfileToTerraform)(this._networkProfile),
      timeouts: dedicatedHardwareSecurityModuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
