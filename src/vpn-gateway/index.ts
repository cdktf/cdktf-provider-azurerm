// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#bgp_route_translation_for_nat_enabled VpnGateway#bgp_route_translation_for_nat_enabled}
  */
  readonly bgpRouteTranslationForNatEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#id VpnGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#location VpnGateway#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#name VpnGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#resource_group_name VpnGateway#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#routing_preference VpnGateway#routing_preference}
  */
  readonly routingPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#scale_unit VpnGateway#scale_unit}
  */
  readonly scaleUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#tags VpnGateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#virtual_hub_id VpnGateway#virtual_hub_id}
  */
  readonly virtualHubId: string;
  /**
  * bgp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#bgp_settings VpnGateway#bgp_settings}
  */
  readonly bgpSettings?: VpnGatewayBgpSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#timeouts VpnGateway#timeouts}
  */
  readonly timeouts?: VpnGatewayTimeouts;
}
export interface VpnGatewayBgpSettingsInstance0BgpPeeringAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#custom_ips VpnGateway#custom_ips}
  */
  readonly customIps: string[];
}

export function vpnGatewayBgpSettingsInstance0BgpPeeringAddressToTerraform(struct?: VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference | VpnGatewayBgpSettingsInstance0BgpPeeringAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customIps),
  }
}


export function vpnGatewayBgpSettingsInstance0BgpPeeringAddressToHclTerraform(struct?: VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference | VpnGatewayBgpSettingsInstance0BgpPeeringAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
    return cdktf.Fn.tolist(this.getListAttribute('custom_ips'));
  }
  public set customIps(value: string[]) {
    this._customIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customIpsInput() {
    return this._customIps;
  }

  // default_ips - computed: true, optional: false, required: false
  public get defaultIps() {
    return cdktf.Fn.tolist(this.getListAttribute('default_ips'));
  }

  // ip_configuration_id - computed: true, optional: false, required: false
  public get ipConfigurationId() {
    return this.getStringAttribute('ip_configuration_id');
  }

  // tunnel_ips - computed: true, optional: false, required: false
  public get tunnelIps() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_ips'));
  }
}
export interface VpnGatewayBgpSettingsInstance1BgpPeeringAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#custom_ips VpnGateway#custom_ips}
  */
  readonly customIps: string[];
}

export function vpnGatewayBgpSettingsInstance1BgpPeeringAddressToTerraform(struct?: VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference | VpnGatewayBgpSettingsInstance1BgpPeeringAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customIps),
  }
}


export function vpnGatewayBgpSettingsInstance1BgpPeeringAddressToHclTerraform(struct?: VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference | VpnGatewayBgpSettingsInstance1BgpPeeringAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
    return cdktf.Fn.tolist(this.getListAttribute('custom_ips'));
  }
  public set customIps(value: string[]) {
    this._customIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customIpsInput() {
    return this._customIps;
  }

  // default_ips - computed: true, optional: false, required: false
  public get defaultIps() {
    return cdktf.Fn.tolist(this.getListAttribute('default_ips'));
  }

  // ip_configuration_id - computed: true, optional: false, required: false
  public get ipConfigurationId() {
    return this.getStringAttribute('ip_configuration_id');
  }

  // tunnel_ips - computed: true, optional: false, required: false
  public get tunnelIps() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_ips'));
  }
}
export interface VpnGatewayBgpSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#asn VpnGateway#asn}
  */
  readonly asn: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#peer_weight VpnGateway#peer_weight}
  */
  readonly peerWeight: number;
  /**
  * instance_0_bgp_peering_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#instance_0_bgp_peering_address VpnGateway#instance_0_bgp_peering_address}
  */
  readonly instance0BgpPeeringAddress?: VpnGatewayBgpSettingsInstance0BgpPeeringAddress;
  /**
  * instance_1_bgp_peering_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#instance_1_bgp_peering_address VpnGateway#instance_1_bgp_peering_address}
  */
  readonly instance1BgpPeeringAddress?: VpnGatewayBgpSettingsInstance1BgpPeeringAddress;
}

export function vpnGatewayBgpSettingsToTerraform(struct?: VpnGatewayBgpSettingsOutputReference | VpnGatewayBgpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function vpnGatewayBgpSettingsToHclTerraform(struct?: VpnGatewayBgpSettingsOutputReference | VpnGatewayBgpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_weight: {
      value: cdktf.numberToHclTerraform(struct!.peerWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_0_bgp_peering_address: {
      value: vpnGatewayBgpSettingsInstance0BgpPeeringAddressToHclTerraform(struct!.instance0BgpPeeringAddress),
      isBlock: true,
      type: "list",
      storageClassType: "VpnGatewayBgpSettingsInstance0BgpPeeringAddressList",
    },
    instance_1_bgp_peering_address: {
      value: vpnGatewayBgpSettingsInstance1BgpPeeringAddressToHclTerraform(struct!.instance1BgpPeeringAddress),
      isBlock: true,
      type: "list",
      storageClassType: "VpnGatewayBgpSettingsInstance1BgpPeeringAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnGatewayBgpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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

  // bgp_peering_address - computed: true, optional: false, required: false
  public get bgpPeeringAddress() {
    return this.getStringAttribute('bgp_peering_address');
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
  private _instance0BgpPeeringAddress = new VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference(this, "instance_0_bgp_peering_address");
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
  private _instance1BgpPeeringAddress = new VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference(this, "instance_1_bgp_peering_address");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#create VpnGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#delete VpnGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#read VpnGateway#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#update VpnGateway#update}
  */
  readonly update?: string;
}

export function vpnGatewayTimeoutsToTerraform(struct?: VpnGatewayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function vpnGatewayTimeoutsToHclTerraform(struct?: VpnGatewayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpnGatewayTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: VpnGatewayTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway azurerm_vpn_gateway}
*/
export class VpnGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_vpn_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnGateway to import
  * @param importFromId The id of the existing VpnGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_vpn_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_gateway azurerm_vpn_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: VpnGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_vpn_gateway',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bgpRouteTranslationForNatEnabled = config.bgpRouteTranslationForNatEnabled;
    this._id = config.id;
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

  // bgp_route_translation_for_nat_enabled - computed: false, optional: true, required: false
  private _bgpRouteTranslationForNatEnabled?: boolean | cdktf.IResolvable; 
  public get bgpRouteTranslationForNatEnabled() {
    return this.getBooleanAttribute('bgp_route_translation_for_nat_enabled');
  }
  public set bgpRouteTranslationForNatEnabled(value: boolean | cdktf.IResolvable) {
    this._bgpRouteTranslationForNatEnabled = value;
  }
  public resetBgpRouteTranslationForNatEnabled() {
    this._bgpRouteTranslationForNatEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouteTranslationForNatEnabledInput() {
    return this._bgpRouteTranslationForNatEnabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // routing_preference - computed: false, optional: true, required: false
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
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  private _bgpSettings = new VpnGatewayBgpSettingsOutputReference(this, "bgp_settings");
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
  private _timeouts = new VpnGatewayTimeoutsOutputReference(this, "timeouts");
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
      bgp_route_translation_for_nat_enabled: cdktf.booleanToTerraform(this._bgpRouteTranslationForNatEnabled),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      routing_preference: cdktf.stringToTerraform(this._routingPreference),
      scale_unit: cdktf.numberToTerraform(this._scaleUnit),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      virtual_hub_id: cdktf.stringToTerraform(this._virtualHubId),
      bgp_settings: vpnGatewayBgpSettingsToTerraform(this._bgpSettings.internalValue),
      timeouts: vpnGatewayTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bgp_route_translation_for_nat_enabled: {
        value: cdktf.booleanToHclTerraform(this._bgpRouteTranslationForNatEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_preference: {
        value: cdktf.stringToHclTerraform(this._routingPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_unit: {
        value: cdktf.numberToHclTerraform(this._scaleUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      virtual_hub_id: {
        value: cdktf.stringToHclTerraform(this._virtualHubId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_settings: {
        value: vpnGatewayBgpSettingsToHclTerraform(this._bgpSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnGatewayBgpSettingsList",
      },
      timeouts: {
        value: vpnGatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpnGatewayTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
