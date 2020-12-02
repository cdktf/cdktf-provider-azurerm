// https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VpnSiteConfig extends TerraformMetaArguments {
  readonly addressCidrs?: string[];
  readonly deviceModel?: string;
  readonly deviceVendor?: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly virtualWanId: string;
  /** link block */
  readonly link?: VpnSiteLink[];
  /** timeouts block */
  readonly timeouts?: VpnSiteTimeouts;
}
export interface VpnSiteLinkBgp {
  readonly asn: number;
  readonly peeringAddress: string;
}
export interface VpnSiteLink {
  readonly fqdn?: string;
  readonly ipAddress?: string;
  readonly name: string;
  readonly providerName?: string;
  readonly speedInMbps?: number;
  /** bgp block */
  readonly bgp?: VpnSiteLinkBgp[];
}
export interface VpnSiteTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class VpnSite extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpnSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_vpn_site',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addressCidrs = config.addressCidrs;
    this._deviceModel = config.deviceModel;
    this._deviceVendor = config.deviceVendor;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._virtualWanId = config.virtualWanId;
    this._link = config.link;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_cidrs - computed: false, optional: true, required: false
  private _addressCidrs?: string[];
  public get addressCidrs() {
    return this.getListAttribute('address_cidrs');
  }
  public set addressCidrs(value: string[] ) {
    this._addressCidrs = value;
  }
  public resetAddressCidrs() {
    this._addressCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressCidrsInput() {
    return this._addressCidrs
  }

  // device_model - computed: false, optional: true, required: false
  private _deviceModel?: string;
  public get deviceModel() {
    return this.getStringAttribute('device_model');
  }
  public set deviceModel(value: string ) {
    this._deviceModel = value;
  }
  public resetDeviceModel() {
    this._deviceModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceModelInput() {
    return this._deviceModel
  }

  // device_vendor - computed: false, optional: true, required: false
  private _deviceVendor?: string;
  public get deviceVendor() {
    return this.getStringAttribute('device_vendor');
  }
  public set deviceVendor(value: string ) {
    this._deviceVendor = value;
  }
  public resetDeviceVendor() {
    this._deviceVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVendorInput() {
    return this._deviceVendor
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

  // virtual_wan_id - computed: false, optional: false, required: true
  private _virtualWanId: string;
  public get virtualWanId() {
    return this.getStringAttribute('virtual_wan_id');
  }
  public set virtualWanId(value: string) {
    this._virtualWanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualWanIdInput() {
    return this._virtualWanId
  }

  // link - computed: false, optional: true, required: false
  private _link?: VpnSiteLink[];
  public get link() {
    return this.interpolationForAttribute('link') as any;
  }
  public set link(value: VpnSiteLink[] ) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpnSiteTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VpnSiteTimeouts ) {
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
      address_cidrs: this._addressCidrs,
      device_model: this._deviceModel,
      device_vendor: this._deviceVendor,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      virtual_wan_id: this._virtualWanId,
      link: this._link,
      timeouts: this._timeouts,
    };
  }
}
