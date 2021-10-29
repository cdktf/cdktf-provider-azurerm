// https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#location VpnGateway#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#name VpnGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#resource_group_name VpnGateway#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#routing_preference VpnGateway#routing_preference}
  */
  readonly routingPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#scale_unit VpnGateway#scale_unit}
  */
  readonly scaleUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#tags VpnGateway#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#virtual_hub_id VpnGateway#virtual_hub_id}
  */
  readonly virtualHubId: string;
  /**
  * bgp_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#bgp_settings VpnGateway#bgp_settings}
  */
  readonly bgpSettings?: VpnGatewayBgpSettings;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#timeouts VpnGateway#timeouts}
  */
  readonly timeouts?: VpnGatewayTimeouts;
}
export interface VpnGatewayBgpSettingsInstance0BgpPeeringAddress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#custom_ips VpnGateway#custom_ips}
  */
  readonly customIps: string[];
}

function vpnGatewayBgpSettingsInstance0BgpPeeringAddressToTerraform(struct?: VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference | VpnGatewayBgpSettingsInstance0BgpPeeringAddress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct!.customIps),
  }
}

export class VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // custom_ips - computed: false, optional: false, required: true
  private _customIps?: string[]; 
  public get customIps() {
    return this.getListAttribute('custom_ips');
  }
  public set customIps(value: string[]) {
    this._customIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customIpsInput() {
    return this._customIps
  }
}
export interface VpnGatewayBgpSettingsInstance1BgpPeeringAddress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#custom_ips VpnGateway#custom_ips}
  */
  readonly customIps: string[];
}

function vpnGatewayBgpSettingsInstance1BgpPeeringAddressToTerraform(struct?: VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference | VpnGatewayBgpSettingsInstance1BgpPeeringAddress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct!.customIps),
  }
}

export class VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // custom_ips - computed: false, optional: false, required: true
  private _customIps?: string[]; 
  public get customIps() {
    return this.getListAttribute('custom_ips');
  }
  public set customIps(value: string[]) {
    this._customIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customIpsInput() {
    return this._customIps
  }
}
export interface VpnGatewayBgpSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#asn VpnGateway#asn}
  */
  readonly asn: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#peer_weight VpnGateway#peer_weight}
  */
  readonly peerWeight: number;
  /**
  * instance_0_bgp_peering_address block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#instance_0_bgp_peering_address VpnGateway#instance_0_bgp_peering_address}
  */
  readonly instance0BgpPeeringAddress?: VpnGatewayBgpSettingsInstance0BgpPeeringAddress;
  /**
  * instance_1_bgp_peering_address block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#instance_1_bgp_peering_address VpnGateway#instance_1_bgp_peering_address}
  */
  readonly instance1BgpPeeringAddress?: VpnGatewayBgpSettingsInstance1BgpPeeringAddress;
}

function vpnGatewayBgpSettingsToTerraform(struct?: VpnGatewayBgpSettingsOutputReference | VpnGatewayBgpSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    peer_weight: cdktf.numberToTerraform(struct!.peerWeight),
    instance_0_bgp_peering_address: vpnGatewayBgpSettingsInstance0BgpPeeringAddressToTerraform(struct!.instance0BgpPeeringAddress),
    instance_1_bgp_peering_address: vpnGatewayBgpSettingsInstance1BgpPeeringAddressToTerraform(struct!.instance1BgpPeeringAddress),
  }
}

export class VpnGatewayBgpSettingsOutputReference extends cdktf.ComplexObject {
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

  // peer_weight - computed: false, optional: false, required: true
  private _peerWeight?: number; 
  public get peerWeight() {
    return this.getNumberAttribute('peer_weight');
  }
  public set peerWeight(value: number) {
    this._peerWeight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerWeightInput() {
    return this._peerWeight
  }

  // instance_0_bgp_peering_address - computed: false, optional: true, required: false
  private _instance0BgpPeeringAddress?: VpnGatewayBgpSettingsInstance0BgpPeeringAddress | undefined; 
  private __instance0BgpPeeringAddressOutput = new VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference(this as any, "instance_0_bgp_peering_address", true);
  public get instance0BgpPeeringAddress() {
    return this.__instance0BgpPeeringAddressOutput;
  }
  public putInstance0BgpPeeringAddress(value: VpnGatewayBgpSettingsInstance0BgpPeeringAddress | undefined) {
    this._instance0BgpPeeringAddress = value;
  }
  public resetInstance0BgpPeeringAddress() {
    this._instance0BgpPeeringAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instance0BgpPeeringAddressInput() {
    return this._instance0BgpPeeringAddress
  }

  // instance_1_bgp_peering_address - computed: false, optional: true, required: false
  private _instance1BgpPeeringAddress?: VpnGatewayBgpSettingsInstance1BgpPeeringAddress | undefined; 
  private __instance1BgpPeeringAddressOutput = new VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference(this as any, "instance_1_bgp_peering_address", true);
  public get instance1BgpPeeringAddress() {
    return this.__instance1BgpPeeringAddressOutput;
  }
  public putInstance1BgpPeeringAddress(value: VpnGatewayBgpSettingsInstance1BgpPeeringAddress | undefined) {
    this._instance1BgpPeeringAddress = value;
  }
  public resetInstance1BgpPeeringAddress() {
    this._instance1BgpPeeringAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instance1BgpPeeringAddressInput() {
    return this._instance1BgpPeeringAddress
  }
}
export interface VpnGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#create VpnGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#delete VpnGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#read VpnGateway#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#update VpnGateway#update}
  */
  readonly update?: string;
}

function vpnGatewayTimeoutsToTerraform(struct?: VpnGatewayTimeoutsOutputReference | VpnGatewayTimeouts): any {
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

export class VpnGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html azurerm_vpn_gateway}
*/
export class VpnGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_vpn_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html azurerm_vpn_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: VpnGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_vpn_gateway',
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
    this._routingPreference = config.routingPreference;
    this._scaleUnit = config.scaleUnit;
    this._tags = config.tags;
    this._virtualHubId = config.virtualHubId;
    this._bgpSettings = config.bgpSettings;
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

  // routing_preference - computed: true, optional: true, required: false
  private _routingPreference?: string | undefined; 
  public get routingPreference() {
    return this.getStringAttribute('routing_preference');
  }
  public set routingPreference(value: string | undefined) {
    this._routingPreference = value;
  }
  public resetRoutingPreference() {
    this._routingPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPreferenceInput() {
    return this._routingPreference
  }

  // scale_unit - computed: false, optional: true, required: false
  private _scaleUnit?: number | undefined; 
  public get scaleUnit() {
    return this.getNumberAttribute('scale_unit');
  }
  public set scaleUnit(value: number | undefined) {
    this._scaleUnit = value;
  }
  public resetScaleUnit() {
    this._scaleUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUnitInput() {
    return this._scaleUnit
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

  // virtual_hub_id - computed: false, optional: false, required: true
  private _virtualHubId?: string; 
  public get virtualHubId() {
    return this.getStringAttribute('virtual_hub_id');
  }
  public set virtualHubId(value: string) {
    this._virtualHubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHubIdInput() {
    return this._virtualHubId
  }

  // bgp_settings - computed: false, optional: true, required: false
  private _bgpSettings?: VpnGatewayBgpSettings | undefined; 
  private __bgpSettingsOutput = new VpnGatewayBgpSettingsOutputReference(this as any, "bgp_settings", true);
  public get bgpSettings() {
    return this.__bgpSettingsOutput;
  }
  public putBgpSettings(value: VpnGatewayBgpSettings | undefined) {
    this._bgpSettings = value;
  }
  public resetBgpSettings() {
    this._bgpSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpSettingsInput() {
    return this._bgpSettings
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpnGatewayTimeouts | undefined; 
  private __timeoutsOutput = new VpnGatewayTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VpnGatewayTimeouts | undefined) {
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
      routing_preference: cdktf.stringToTerraform(this._routingPreference),
      scale_unit: cdktf.numberToTerraform(this._scaleUnit),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      virtual_hub_id: cdktf.stringToTerraform(this._virtualHubId),
      bgp_settings: vpnGatewayBgpSettingsToTerraform(this._bgpSettings),
      timeouts: vpnGatewayTimeoutsToTerraform(this._timeouts),
    };
  }
}
