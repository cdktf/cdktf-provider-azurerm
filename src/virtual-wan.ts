// https://www.terraform.io/docs/providers/azurerm/r/virtual_wan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VirtualWanConfig extends TerraformMetaArguments {
  readonly allowBranchToBranchTraffic?: boolean;
  readonly allowVnetToVnetTraffic?: boolean;
  readonly disableVpnEncryption?: boolean;
  readonly location: string;
  readonly name: string;
  readonly office365LocalBreakoutCategory?: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: VirtualWanTimeouts;
}
export interface VirtualWanTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class VirtualWan extends TerraformResource {

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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_branch_to_branch_traffic - computed: false, optional: true, required: false
  private _allowBranchToBranchTraffic?: boolean;
  public get allowBranchToBranchTraffic() {
    return this._allowBranchToBranchTraffic;
  }
  public set allowBranchToBranchTraffic(value: boolean | undefined) {
    this._allowBranchToBranchTraffic = value;
  }

  // allow_vnet_to_vnet_traffic - computed: false, optional: true, required: false
  private _allowVnetToVnetTraffic?: boolean;
  public get allowVnetToVnetTraffic() {
    return this._allowVnetToVnetTraffic;
  }
  public set allowVnetToVnetTraffic(value: boolean | undefined) {
    this._allowVnetToVnetTraffic = value;
  }

  // disable_vpn_encryption - computed: false, optional: true, required: false
  private _disableVpnEncryption?: boolean;
  public get disableVpnEncryption() {
    return this._disableVpnEncryption;
  }
  public set disableVpnEncryption(value: boolean | undefined) {
    this._disableVpnEncryption = value;
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

  // office365_local_breakout_category - computed: false, optional: true, required: false
  private _office365LocalBreakoutCategory?: string;
  public get office365LocalBreakoutCategory() {
    return this._office365LocalBreakoutCategory;
  }
  public set office365LocalBreakoutCategory(value: string | undefined) {
    this._office365LocalBreakoutCategory = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualWanTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: VirtualWanTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_branch_to_branch_traffic: this._allowBranchToBranchTraffic,
      allow_vnet_to_vnet_traffic: this._allowVnetToVnetTraffic,
      disable_vpn_encryption: this._disableVpnEncryption,
      location: this._location,
      name: this._name,
      office365_local_breakout_category: this._office365LocalBreakoutCategory,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
