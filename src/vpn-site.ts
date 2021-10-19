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

function vpnSiteLinkBgpToTerraform(struct?: VpnSiteLinkBgpOutputReference | VpnSiteLinkBgp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    peering_address: cdktf.stringToTerraform(struct!.peeringAddress),
  }
}

export class VpnSiteLinkBgpOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn
  }

  // peering_address - computed: false, optional: false, required: true
  private _peeringAddress?: string; 
  public get peeringAddress() {
    return this.getStringAttribute('peering_address');
  }
  public set peeringAddress(value: string) {
    this._peeringAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringAddressInput() {
    return this._peeringAddress
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
  readonly bgp?: VpnSiteLinkBgp;
}

function vpnSiteLinkToTerraform(struct?: VpnSiteLink): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    provider_name: cdktf.stringToTerraform(struct!.providerName),
    speed_in_mbps: cdktf.numberToTerraform(struct!.speedInMbps),
    bgp: vpnSiteLinkBgpToTerraform(struct!.bgp),
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

function vpnSiteTimeoutsToTerraform(struct?: VpnSiteTimeoutsOutputReference | VpnSiteTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class VpnSiteTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
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
  private _addressCidrs?: string[] | undefined; 
  public get addressCidrs() {
    return this.getListAttribute('address_cidrs');
  }
  public set addressCidrs(value: string[] | undefined) {
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
  private _deviceModel?: string | undefined; 
  public get deviceModel() {
    return this.getStringAttribute('device_model');
  }
  public set deviceModel(value: string | undefined) {
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
  private _deviceVendor?: string | undefined; 
  public get deviceVendor() {
    return this.getStringAttribute('device_vendor');
  }
  public set deviceVendor(value: string | undefined) {
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
  private _location?: string; 
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
  private _name?: string; 
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
  private _resourceGroupName?: string; 
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _virtualWanId?: string; 
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
  private _link?: VpnSiteLink[] | undefined; 
  public get link() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('link') as any;
  }
  public set link(value: VpnSiteLink[] | undefined) {
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
  private _timeouts?: VpnSiteTimeouts | undefined; 
  private __timeoutsOutput = new VpnSiteTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VpnSiteTimeouts | undefined) {
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
