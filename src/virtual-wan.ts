// https://www.terraform.io/docs/providers/azurerm/r/virtual_wan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualWanConfig extends cdktf.TerraformMetaArguments {
  readonly allowBranchToBranchTraffic?: boolean;
  readonly allowVnetToVnetTraffic?: boolean;
  readonly disableVpnEncryption?: boolean;
  readonly location: string;
  readonly name: string;
  readonly office365LocalBreakoutCategory?: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly type?: string;
  /** timeouts block */
  readonly timeouts?: VirtualWanTimeouts;
}
export interface VirtualWanTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function virtualWanTimeoutsToTerraform(struct?: VirtualWanTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class VirtualWan extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VirtualWanConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_wan',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowBranchToBranchTraffic = config.allowBranchToBranchTraffic;
    this._allowVnetToVnetTraffic = config.allowVnetToVnetTraffic;
    this._disableVpnEncryption = config.disableVpnEncryption;
    this._location = config.location;
    this._name = config.name;
    this._office365LocalBreakoutCategory = config.office365LocalBreakoutCategory;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._type = config.type;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_branch_to_branch_traffic - computed: false, optional: true, required: false
  private _allowBranchToBranchTraffic?: boolean;
  public get allowBranchToBranchTraffic() {
    return this.getBooleanAttribute('allow_branch_to_branch_traffic');
  }
  public set allowBranchToBranchTraffic(value: boolean ) {
    this._allowBranchToBranchTraffic = value;
  }
  public resetAllowBranchToBranchTraffic() {
    this._allowBranchToBranchTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowBranchToBranchTrafficInput() {
    return this._allowBranchToBranchTraffic
  }

  // allow_vnet_to_vnet_traffic - computed: false, optional: true, required: false
  private _allowVnetToVnetTraffic?: boolean;
  public get allowVnetToVnetTraffic() {
    return this.getBooleanAttribute('allow_vnet_to_vnet_traffic');
  }
  public set allowVnetToVnetTraffic(value: boolean ) {
    this._allowVnetToVnetTraffic = value;
  }
  public resetAllowVnetToVnetTraffic() {
    this._allowVnetToVnetTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVnetToVnetTrafficInput() {
    return this._allowVnetToVnetTraffic
  }

  // disable_vpn_encryption - computed: false, optional: true, required: false
  private _disableVpnEncryption?: boolean;
  public get disableVpnEncryption() {
    return this.getBooleanAttribute('disable_vpn_encryption');
  }
  public set disableVpnEncryption(value: boolean ) {
    this._disableVpnEncryption = value;
  }
  public resetDisableVpnEncryption() {
    this._disableVpnEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVpnEncryptionInput() {
    return this._disableVpnEncryption
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

  // office365_local_breakout_category - computed: false, optional: true, required: false
  private _office365LocalBreakoutCategory?: string;
  public get office365LocalBreakoutCategory() {
    return this.getStringAttribute('office365_local_breakout_category');
  }
  public set office365LocalBreakoutCategory(value: string ) {
    this._office365LocalBreakoutCategory = value;
  }
  public resetOffice365LocalBreakoutCategory() {
    this._office365LocalBreakoutCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get office365LocalBreakoutCategoryInput() {
    return this._office365LocalBreakoutCategory
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

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string ) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualWanTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualWanTimeouts ) {
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
      allow_branch_to_branch_traffic: cdktf.booleanToTerraform(this._allowBranchToBranchTraffic),
      allow_vnet_to_vnet_traffic: cdktf.booleanToTerraform(this._allowVnetToVnetTraffic),
      disable_vpn_encryption: cdktf.booleanToTerraform(this._disableVpnEncryption),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      office365_local_breakout_category: cdktf.stringToTerraform(this._office365LocalBreakoutCategory),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      timeouts: virtualWanTimeoutsToTerraform(this._timeouts),
    };
  }
}
