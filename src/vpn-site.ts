// https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#address_cidrs VpnSite#address_cidrs}
  */
  readonly addressCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#device_model VpnSite#device_model}
  */
  readonly deviceModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#device_vendor VpnSite#device_vendor}
  */
  readonly deviceVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#location VpnSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#name VpnSite#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#resource_group_name VpnSite#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#tags VpnSite#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#virtual_wan_id VpnSite#virtual_wan_id}
  */
  readonly virtualWanId: string;
  /**
  * link block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#link VpnSite#link}
  */
  readonly link?: VpnSiteLink[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#timeouts VpnSite#timeouts}
  */
  readonly timeouts?: VpnSiteTimeouts;
}
export interface VpnSiteLinkBgp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#asn VpnSite#asn}
  */
  readonly asn: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#peering_address VpnSite#peering_address}
  */
  readonly peeringAddress: string;
}

function vpnSiteLinkBgpToTerraform(struct?: VpnSiteLinkBgp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    peering_address: cdktf.stringToTerraform(struct!.peeringAddress),
  }
}

export interface VpnSiteLink {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#fqdn VpnSite#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#ip_address VpnSite#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#name VpnSite#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#provider_name VpnSite#provider_name}
  */
  readonly providerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#speed_in_mbps VpnSite#speed_in_mbps}
  */
  readonly speedInMbps?: number;
  /**
  * bgp block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#bgp VpnSite#bgp}
  */
  readonly bgp?: VpnSiteLinkBgp[];
}

function vpnSiteLinkToTerraform(struct?: VpnSiteLink): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    provider_name: cdktf.stringToTerraform(struct!.providerName),
    speed_in_mbps: cdktf.numberToTerraform(struct!.speedInMbps),
    bgp: cdktf.listMapper(vpnSiteLinkBgpToTerraform)(struct!.bgp),
  }
}

export interface VpnSiteTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#create VpnSite#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#delete VpnSite#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#read VpnSite#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html#update VpnSite#update}
  */
  readonly update?: string;
}

function vpnSiteTimeoutsToTerraform(struct?: VpnSiteTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html azurerm_vpn_site}
*/
export class VpnSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_vpn_site";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_site.html azurerm_vpn_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnSiteConfig
  */
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
      address_cidrs: cdktf.listMapper(cdktf.stringToTerraform)(this._addressCidrs),
      device_model: cdktf.stringToTerraform(this._deviceModel),
      device_vendor: cdktf.stringToTerraform(this._deviceVendor),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      virtual_wan_id: cdktf.stringToTerraform(this._virtualWanId),
      link: cdktf.listMapper(vpnSiteLinkToTerraform)(this._link),
      timeouts: vpnSiteTimeoutsToTerraform(this._timeouts),
    };
  }
}
