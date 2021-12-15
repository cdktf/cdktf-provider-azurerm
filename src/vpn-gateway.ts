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

export function vpnGatewayBgpSettingsInstance0BgpPeeringAddressToTerraform(struct?: VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference | VpnGatewayBgpSettingsInstance0BgpPeeringAddress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct!.customIps),
  }
}

export class VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VpnGatewayBgpSettingsInstance0BgpPeeringAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.customIps = this._customIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnGatewayBgpSettingsInstance0BgpPeeringAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customIps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customIps = value.customIps;
    }
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
    return this._customIps;
  }
}
export interface VpnGatewayBgpSettingsInstance1BgpPeeringAddress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/vpn_gateway.html#custom_ips VpnGateway#custom_ips}
  */
  readonly customIps: string[];
}

export function vpnGatewayBgpSettingsInstance1BgpPeeringAddressToTerraform(struct?: VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference | VpnGatewayBgpSettingsInstance1BgpPeeringAddress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct!.customIps),
  }
}

export class VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VpnGatewayBgpSettingsInstance1BgpPeeringAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.customIps = this._customIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnGatewayBgpSettingsInstance1BgpPeeringAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customIps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customIps = value.customIps;
    }
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
    return this._customIps;
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

export function vpnGatewayBgpSettingsToTerraform(struct?: VpnGatewayBgpSettingsOutputReference | VpnGatewayBgpSettings): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VpnGatewayBgpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._peerWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerWeight = this._peerWeight;
    }
    if (this._instance0BgpPeeringAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance0BgpPeeringAddress = this._instance0BgpPeeringAddress?.internalValue;
    }
    if (this._instance1BgpPeeringAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance1BgpPeeringAddress = this._instance1BgpPeeringAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnGatewayBgpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asn = undefined;
      this._peerWeight = undefined;
      this._instance0BgpPeeringAddress.internalValue = undefined;
      this._instance1BgpPeeringAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asn = value.asn;
      this._peerWeight = value.peerWeight;
      this._instance0BgpPeeringAddress.internalValue = value.instance0BgpPeeringAddress;
      this._instance1BgpPeeringAddress.internalValue = value.instance1BgpPeeringAddress;
    }
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
    return this._asn;
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
    return this._peerWeight;
  }

  // instance_0_bgp_peering_address - computed: false, optional: true, required: false
  private _instance0BgpPeeringAddress = new VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference(this as any, "instance_0_bgp_peering_address", true);
  public get instance0BgpPeeringAddress() {
    return this._instance0BgpPeeringAddress;
  }
  public putInstance0BgpPeeringAddress(value: VpnGatewayBgpSettingsInstance0BgpPeeringAddress) {
    this._instance0BgpPeeringAddress.internalValue = value;
  }
  public resetInstance0BgpPeeringAddress() {
    this._instance0BgpPeeringAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instance0BgpPeeringAddressInput() {
    return this._instance0BgpPeeringAddress.internalValue;
  }

  // instance_1_bgp_peering_address - computed: false, optional: true, required: false
  private _instance1BgpPeeringAddress = new VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference(this as any, "instance_1_bgp_peering_address", true);
  public get instance1BgpPeeringAddress() {
    return this._instance1BgpPeeringAddress;
  }
  public putInstance1BgpPeeringAddress(value: VpnGatewayBgpSettingsInstance1BgpPeeringAddress) {
    this._instance1BgpPeeringAddress.internalValue = value;
  }
  public resetInstance1BgpPeeringAddress() {
    this._instance1BgpPeeringAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instance1BgpPeeringAddressInput() {
    return this._instance1BgpPeeringAddress.internalValue;
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

export function vpnGatewayTimeoutsToTerraform(struct?: VpnGatewayTimeoutsOutputReference | VpnGatewayTimeouts): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VpnGatewayTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnGatewayTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
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
    this._bgpSettings.internalValue = config.bgpSettings;
    this._timeouts.internalValue = config.timeouts;
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
    return this._location;
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
    return this._name;
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
    return this._resourceGroupName;
  }

  // routing_preference - computed: true, optional: true, required: false
  private _routingPreference?: string; 
  public get routingPreference() {
    return this.getStringAttribute('routing_preference');
  }
  public set routingPreference(value: string) {
    this._routingPreference = value;
  }
  public resetRoutingPreference() {
    this._routingPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPreferenceInput() {
    return this._routingPreference;
  }

  // scale_unit - computed: false, optional: true, required: false
  private _scaleUnit?: number; 
  public get scaleUnit() {
    return this.getNumberAttribute('scale_unit');
  }
  public set scaleUnit(value: number) {
    this._scaleUnit = value;
  }
  public resetScaleUnit() {
    this._scaleUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUnitInput() {
    return this._scaleUnit;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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
    return this._virtualHubId;
  }

  // bgp_settings - computed: false, optional: true, required: false
  private _bgpSettings = new VpnGatewayBgpSettingsOutputReference(this as any, "bgp_settings", true);
  public get bgpSettings() {
    return this._bgpSettings;
  }
  public putBgpSettings(value: VpnGatewayBgpSettings) {
    this._bgpSettings.internalValue = value;
  }
  public resetBgpSettings() {
    this._bgpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpSettingsInput() {
    return this._bgpSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpnGatewayTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpnGatewayTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      bgp_settings: vpnGatewayBgpSettingsToTerraform(this._bgpSettings.internalValue),
      timeouts: vpnGatewayTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
