// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#address_cidrs VpnSite#address_cidrs}
  */
  readonly addressCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#device_model VpnSite#device_model}
  */
  readonly deviceModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#device_vendor VpnSite#device_vendor}
  */
  readonly deviceVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#id VpnSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#location VpnSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#name VpnSite#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#resource_group_name VpnSite#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#tags VpnSite#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#virtual_wan_id VpnSite#virtual_wan_id}
  */
  readonly virtualWanId: string;
  /**
  * link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#link VpnSite#link}
  */
  readonly link?: VpnSiteLink[] | cdktf.IResolvable;
  /**
  * o365_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#o365_policy VpnSite#o365_policy}
  */
  readonly o365Policy?: VpnSiteO365Policy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#timeouts VpnSite#timeouts}
  */
  readonly timeouts?: VpnSiteTimeouts;
}
export interface VpnSiteLinkBgp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#asn VpnSite#asn}
  */
  readonly asn: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#peering_address VpnSite#peering_address}
  */
  readonly peeringAddress: string;
}

export function vpnSiteLinkBgpToTerraform(struct?: VpnSiteLinkBgpOutputReference | VpnSiteLinkBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    peering_address: cdktf.stringToTerraform(struct!.peeringAddress),
  }
}


export function vpnSiteLinkBgpToHclTerraform(struct?: VpnSiteLinkBgpOutputReference | VpnSiteLinkBgp): any {
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
    peering_address: {
      value: cdktf.stringToHclTerraform(struct!.peeringAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnSiteLinkBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnSiteLinkBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._peeringAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.peeringAddress = this._peeringAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnSiteLinkBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asn = undefined;
      this._peeringAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asn = value.asn;
      this._peeringAddress = value.peeringAddress;
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
    return this._peeringAddress;
  }
}
export interface VpnSiteLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#fqdn VpnSite#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#ip_address VpnSite#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#name VpnSite#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#provider_name VpnSite#provider_name}
  */
  readonly providerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#speed_in_mbps VpnSite#speed_in_mbps}
  */
  readonly speedInMbps?: number;
  /**
  * bgp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#bgp VpnSite#bgp}
  */
  readonly bgp?: VpnSiteLinkBgp;
}

export function vpnSiteLinkToTerraform(struct?: VpnSiteLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function vpnSiteLinkToHclTerraform(struct?: VpnSiteLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_name: {
      value: cdktf.stringToHclTerraform(struct!.providerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speed_in_mbps: {
      value: cdktf.numberToHclTerraform(struct!.speedInMbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgp: {
      value: vpnSiteLinkBgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "list",
      storageClassType: "VpnSiteLinkBgpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnSiteLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VpnSiteLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._providerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerName = this._providerName;
    }
    if (this._speedInMbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.speedInMbps = this._speedInMbps;
    }
    if (this._bgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnSiteLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._ipAddress = undefined;
      this._name = undefined;
      this._providerName = undefined;
      this._speedInMbps = undefined;
      this._bgp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._ipAddress = value.ipAddress;
      this._name = value.name;
      this._providerName = value.providerName;
      this._speedInMbps = value.speedInMbps;
      this._bgp.internalValue = value.bgp;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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

  // provider_name - computed: false, optional: true, required: false
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  public resetProviderName() {
    this._providerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // speed_in_mbps - computed: false, optional: true, required: false
  private _speedInMbps?: number; 
  public get speedInMbps() {
    return this.getNumberAttribute('speed_in_mbps');
  }
  public set speedInMbps(value: number) {
    this._speedInMbps = value;
  }
  public resetSpeedInMbps() {
    this._speedInMbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInMbpsInput() {
    return this._speedInMbps;
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new VpnSiteLinkBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: VpnSiteLinkBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }
}

export class VpnSiteLinkList extends cdktf.ComplexList {
  public internalValue? : VpnSiteLink[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VpnSiteLinkOutputReference {
    return new VpnSiteLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnSiteO365PolicyTrafficCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#allow_endpoint_enabled VpnSite#allow_endpoint_enabled}
  */
  readonly allowEndpointEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#default_endpoint_enabled VpnSite#default_endpoint_enabled}
  */
  readonly defaultEndpointEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#optimize_endpoint_enabled VpnSite#optimize_endpoint_enabled}
  */
  readonly optimizeEndpointEnabled?: boolean | cdktf.IResolvable;
}

export function vpnSiteO365PolicyTrafficCategoryToTerraform(struct?: VpnSiteO365PolicyTrafficCategoryOutputReference | VpnSiteO365PolicyTrafficCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_endpoint_enabled: cdktf.booleanToTerraform(struct!.allowEndpointEnabled),
    default_endpoint_enabled: cdktf.booleanToTerraform(struct!.defaultEndpointEnabled),
    optimize_endpoint_enabled: cdktf.booleanToTerraform(struct!.optimizeEndpointEnabled),
  }
}


export function vpnSiteO365PolicyTrafficCategoryToHclTerraform(struct?: VpnSiteO365PolicyTrafficCategoryOutputReference | VpnSiteO365PolicyTrafficCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_endpoint_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.allowEndpointEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_endpoint_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.defaultEndpointEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    optimize_endpoint_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.optimizeEndpointEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnSiteO365PolicyTrafficCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnSiteO365PolicyTrafficCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowEndpointEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEndpointEnabled = this._allowEndpointEnabled;
    }
    if (this._defaultEndpointEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEndpointEnabled = this._defaultEndpointEnabled;
    }
    if (this._optimizeEndpointEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizeEndpointEnabled = this._optimizeEndpointEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnSiteO365PolicyTrafficCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowEndpointEnabled = undefined;
      this._defaultEndpointEnabled = undefined;
      this._optimizeEndpointEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowEndpointEnabled = value.allowEndpointEnabled;
      this._defaultEndpointEnabled = value.defaultEndpointEnabled;
      this._optimizeEndpointEnabled = value.optimizeEndpointEnabled;
    }
  }

  // allow_endpoint_enabled - computed: false, optional: true, required: false
  private _allowEndpointEnabled?: boolean | cdktf.IResolvable; 
  public get allowEndpointEnabled() {
    return this.getBooleanAttribute('allow_endpoint_enabled');
  }
  public set allowEndpointEnabled(value: boolean | cdktf.IResolvable) {
    this._allowEndpointEnabled = value;
  }
  public resetAllowEndpointEnabled() {
    this._allowEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEndpointEnabledInput() {
    return this._allowEndpointEnabled;
  }

  // default_endpoint_enabled - computed: false, optional: true, required: false
  private _defaultEndpointEnabled?: boolean | cdktf.IResolvable; 
  public get defaultEndpointEnabled() {
    return this.getBooleanAttribute('default_endpoint_enabled');
  }
  public set defaultEndpointEnabled(value: boolean | cdktf.IResolvable) {
    this._defaultEndpointEnabled = value;
  }
  public resetDefaultEndpointEnabled() {
    this._defaultEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEndpointEnabledInput() {
    return this._defaultEndpointEnabled;
  }

  // optimize_endpoint_enabled - computed: false, optional: true, required: false
  private _optimizeEndpointEnabled?: boolean | cdktf.IResolvable; 
  public get optimizeEndpointEnabled() {
    return this.getBooleanAttribute('optimize_endpoint_enabled');
  }
  public set optimizeEndpointEnabled(value: boolean | cdktf.IResolvable) {
    this._optimizeEndpointEnabled = value;
  }
  public resetOptimizeEndpointEnabled() {
    this._optimizeEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizeEndpointEnabledInput() {
    return this._optimizeEndpointEnabled;
  }
}
export interface VpnSiteO365Policy {
  /**
  * traffic_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#traffic_category VpnSite#traffic_category}
  */
  readonly trafficCategory?: VpnSiteO365PolicyTrafficCategory;
}

export function vpnSiteO365PolicyToTerraform(struct?: VpnSiteO365PolicyOutputReference | VpnSiteO365Policy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    traffic_category: vpnSiteO365PolicyTrafficCategoryToTerraform(struct!.trafficCategory),
  }
}


export function vpnSiteO365PolicyToHclTerraform(struct?: VpnSiteO365PolicyOutputReference | VpnSiteO365Policy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    traffic_category: {
      value: vpnSiteO365PolicyTrafficCategoryToHclTerraform(struct!.trafficCategory),
      isBlock: true,
      type: "list",
      storageClassType: "VpnSiteO365PolicyTrafficCategoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnSiteO365PolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnSiteO365Policy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trafficCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficCategory = this._trafficCategory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnSiteO365Policy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trafficCategory.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trafficCategory.internalValue = value.trafficCategory;
    }
  }

  // traffic_category - computed: false, optional: true, required: false
  private _trafficCategory = new VpnSiteO365PolicyTrafficCategoryOutputReference(this, "traffic_category");
  public get trafficCategory() {
    return this._trafficCategory;
  }
  public putTrafficCategory(value: VpnSiteO365PolicyTrafficCategory) {
    this._trafficCategory.internalValue = value;
  }
  public resetTrafficCategory() {
    this._trafficCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficCategoryInput() {
    return this._trafficCategory.internalValue;
  }
}
export interface VpnSiteTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#create VpnSite#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#delete VpnSite#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#read VpnSite#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#update VpnSite#update}
  */
  readonly update?: string;
}

export function vpnSiteTimeoutsToTerraform(struct?: VpnSiteTimeouts | cdktf.IResolvable): any {
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


export function vpnSiteTimeoutsToHclTerraform(struct?: VpnSiteTimeouts | cdktf.IResolvable): any {
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

export class VpnSiteTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpnSiteTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnSiteTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site azurerm_vpn_site}
*/
export class VpnSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_vpn_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnSite to import
  * @param importFromId The id of the existing VpnSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_vpn_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/vpn_site azurerm_vpn_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnSiteConfig
  */
  public constructor(scope: Construct, id: string, config: VpnSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_vpn_site',
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
    this._addressCidrs = config.addressCidrs;
    this._deviceModel = config.deviceModel;
    this._deviceVendor = config.deviceVendor;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._virtualWanId = config.virtualWanId;
    this._link.internalValue = config.link;
    this._o365Policy.internalValue = config.o365Policy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_cidrs - computed: false, optional: true, required: false
  private _addressCidrs?: string[]; 
  public get addressCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('address_cidrs'));
  }
  public set addressCidrs(value: string[]) {
    this._addressCidrs = value;
  }
  public resetAddressCidrs() {
    this._addressCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressCidrsInput() {
    return this._addressCidrs;
  }

  // device_model - computed: false, optional: true, required: false
  private _deviceModel?: string; 
  public get deviceModel() {
    return this.getStringAttribute('device_model');
  }
  public set deviceModel(value: string) {
    this._deviceModel = value;
  }
  public resetDeviceModel() {
    this._deviceModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceModelInput() {
    return this._deviceModel;
  }

  // device_vendor - computed: false, optional: true, required: false
  private _deviceVendor?: string; 
  public get deviceVendor() {
    return this.getStringAttribute('device_vendor');
  }
  public set deviceVendor(value: string) {
    this._deviceVendor = value;
  }
  public resetDeviceVendor() {
    this._deviceVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVendorInput() {
    return this._deviceVendor;
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
    return this._virtualWanId;
  }

  // link - computed: false, optional: true, required: false
  private _link = new VpnSiteLinkList(this, "link", false);
  public get link() {
    return this._link;
  }
  public putLink(value: VpnSiteLink[] | cdktf.IResolvable) {
    this._link.internalValue = value;
  }
  public resetLink() {
    this._link.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link.internalValue;
  }

  // o365_policy - computed: false, optional: true, required: false
  private _o365Policy = new VpnSiteO365PolicyOutputReference(this, "o365_policy");
  public get o365Policy() {
    return this._o365Policy;
  }
  public putO365Policy(value: VpnSiteO365Policy) {
    this._o365Policy.internalValue = value;
  }
  public resetO365Policy() {
    this._o365Policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get o365PolicyInput() {
    return this._o365Policy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpnSiteTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpnSiteTimeouts) {
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
      address_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addressCidrs),
      device_model: cdktf.stringToTerraform(this._deviceModel),
      device_vendor: cdktf.stringToTerraform(this._deviceVendor),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      virtual_wan_id: cdktf.stringToTerraform(this._virtualWanId),
      link: cdktf.listMapper(vpnSiteLinkToTerraform, true)(this._link.internalValue),
      o365_policy: vpnSiteO365PolicyToTerraform(this._o365Policy.internalValue),
      timeouts: vpnSiteTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addressCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_model: {
        value: cdktf.stringToHclTerraform(this._deviceModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vendor: {
        value: cdktf.stringToHclTerraform(this._deviceVendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      virtual_wan_id: {
        value: cdktf.stringToHclTerraform(this._virtualWanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link: {
        value: cdktf.listMapperHcl(vpnSiteLinkToHclTerraform, true)(this._link.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnSiteLinkList",
      },
      o365_policy: {
        value: vpnSiteO365PolicyToHclTerraform(this._o365Policy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnSiteO365PolicyList",
      },
      timeouts: {
        value: vpnSiteTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpnSiteTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
