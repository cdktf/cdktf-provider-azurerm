// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MobileNetworkAttachedDataNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#dns_addresses MobileNetworkAttachedDataNetwork#dns_addresses}
  */
  readonly dnsAddresses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#id MobileNetworkAttachedDataNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#location MobileNetworkAttachedDataNetwork#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#mobile_network_data_network_name MobileNetworkAttachedDataNetwork#mobile_network_data_network_name}
  */
  readonly mobileNetworkDataNetworkName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#mobile_network_packet_core_data_plane_id MobileNetworkAttachedDataNetwork#mobile_network_packet_core_data_plane_id}
  */
  readonly mobileNetworkPacketCoreDataPlaneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#tags MobileNetworkAttachedDataNetwork#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#user_equipment_address_pool_prefixes MobileNetworkAttachedDataNetwork#user_equipment_address_pool_prefixes}
  */
  readonly userEquipmentAddressPoolPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#user_equipment_static_address_pool_prefixes MobileNetworkAttachedDataNetwork#user_equipment_static_address_pool_prefixes}
  */
  readonly userEquipmentStaticAddressPoolPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_address MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_address}
  */
  readonly userPlaneAccessIpv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_gateway MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_gateway}
  */
  readonly userPlaneAccessIpv4Gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_subnet MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_subnet}
  */
  readonly userPlaneAccessIpv4Subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#user_plane_access_name MobileNetworkAttachedDataNetwork#user_plane_access_name}
  */
  readonly userPlaneAccessName?: string;
  /**
  * network_address_port_translation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#network_address_port_translation MobileNetworkAttachedDataNetwork#network_address_port_translation}
  */
  readonly networkAddressPortTranslation?: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#timeouts MobileNetworkAttachedDataNetwork#timeouts}
  */
  readonly timeouts?: MobileNetworkAttachedDataNetworkTimeouts;
}
export interface MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#maximum MobileNetworkAttachedDataNetwork#maximum}
  */
  readonly maximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#minimum MobileNetworkAttachedDataNetwork#minimum}
  */
  readonly minimum?: number;
}

export function mobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeToTerraform(struct?: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference | MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
  }
}


export function mobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeToHclTerraform(struct?: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference | MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximum = undefined;
      this._minimum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
    }
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }
}
export interface MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#icmp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#icmp_pinhole_timeout_in_seconds}
  */
  readonly icmpPinholeTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#pinhole_maximum_number MobileNetworkAttachedDataNetwork#pinhole_maximum_number}
  */
  readonly pinholeMaximumNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#tcp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#tcp_pinhole_timeout_in_seconds}
  */
  readonly tcpPinholeTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#tcp_port_reuse_minimum_hold_time_in_seconds MobileNetworkAttachedDataNetwork#tcp_port_reuse_minimum_hold_time_in_seconds}
  */
  readonly tcpPortReuseMinimumHoldTimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#udp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#udp_pinhole_timeout_in_seconds}
  */
  readonly udpPinholeTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#udp_port_reuse_minimum_hold_time_in_seconds MobileNetworkAttachedDataNetwork#udp_port_reuse_minimum_hold_time_in_seconds}
  */
  readonly udpPortReuseMinimumHoldTimeInSeconds?: number;
  /**
  * port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#port_range MobileNetworkAttachedDataNetwork#port_range}
  */
  readonly portRange?: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange;
}

export function mobileNetworkAttachedDataNetworkNetworkAddressPortTranslationToTerraform(struct?: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference | MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_pinhole_timeout_in_seconds: cdktf.numberToTerraform(struct!.icmpPinholeTimeoutInSeconds),
    pinhole_maximum_number: cdktf.numberToTerraform(struct!.pinholeMaximumNumber),
    tcp_pinhole_timeout_in_seconds: cdktf.numberToTerraform(struct!.tcpPinholeTimeoutInSeconds),
    tcp_port_reuse_minimum_hold_time_in_seconds: cdktf.numberToTerraform(struct!.tcpPortReuseMinimumHoldTimeInSeconds),
    udp_pinhole_timeout_in_seconds: cdktf.numberToTerraform(struct!.udpPinholeTimeoutInSeconds),
    udp_port_reuse_minimum_hold_time_in_seconds: cdktf.numberToTerraform(struct!.udpPortReuseMinimumHoldTimeInSeconds),
    port_range: mobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeToTerraform(struct!.portRange),
  }
}


export function mobileNetworkAttachedDataNetworkNetworkAddressPortTranslationToHclTerraform(struct?: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference | MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_pinhole_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.icmpPinholeTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pinhole_maximum_number: {
      value: cdktf.numberToHclTerraform(struct!.pinholeMaximumNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_pinhole_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tcpPinholeTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_reuse_minimum_hold_time_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortReuseMinimumHoldTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_pinhole_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.udpPinholeTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_reuse_minimum_hold_time_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.udpPortReuseMinimumHoldTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_range: {
      value: mobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeToHclTerraform(struct!.portRange),
      isBlock: true,
      type: "list",
      storageClassType: "MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpPinholeTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpPinholeTimeoutInSeconds = this._icmpPinholeTimeoutInSeconds;
    }
    if (this._pinholeMaximumNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinholeMaximumNumber = this._pinholeMaximumNumber;
    }
    if (this._tcpPinholeTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPinholeTimeoutInSeconds = this._tcpPinholeTimeoutInSeconds;
    }
    if (this._tcpPortReuseMinimumHoldTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortReuseMinimumHoldTimeInSeconds = this._tcpPortReuseMinimumHoldTimeInSeconds;
    }
    if (this._udpPinholeTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPinholeTimeoutInSeconds = this._udpPinholeTimeoutInSeconds;
    }
    if (this._udpPortReuseMinimumHoldTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortReuseMinimumHoldTimeInSeconds = this._udpPortReuseMinimumHoldTimeInSeconds;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmpPinholeTimeoutInSeconds = undefined;
      this._pinholeMaximumNumber = undefined;
      this._tcpPinholeTimeoutInSeconds = undefined;
      this._tcpPortReuseMinimumHoldTimeInSeconds = undefined;
      this._udpPinholeTimeoutInSeconds = undefined;
      this._udpPortReuseMinimumHoldTimeInSeconds = undefined;
      this._portRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmpPinholeTimeoutInSeconds = value.icmpPinholeTimeoutInSeconds;
      this._pinholeMaximumNumber = value.pinholeMaximumNumber;
      this._tcpPinholeTimeoutInSeconds = value.tcpPinholeTimeoutInSeconds;
      this._tcpPortReuseMinimumHoldTimeInSeconds = value.tcpPortReuseMinimumHoldTimeInSeconds;
      this._udpPinholeTimeoutInSeconds = value.udpPinholeTimeoutInSeconds;
      this._udpPortReuseMinimumHoldTimeInSeconds = value.udpPortReuseMinimumHoldTimeInSeconds;
      this._portRange.internalValue = value.portRange;
    }
  }

  // icmp_pinhole_timeout_in_seconds - computed: false, optional: true, required: false
  private _icmpPinholeTimeoutInSeconds?: number; 
  public get icmpPinholeTimeoutInSeconds() {
    return this.getNumberAttribute('icmp_pinhole_timeout_in_seconds');
  }
  public set icmpPinholeTimeoutInSeconds(value: number) {
    this._icmpPinholeTimeoutInSeconds = value;
  }
  public resetIcmpPinholeTimeoutInSeconds() {
    this._icmpPinholeTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpPinholeTimeoutInSecondsInput() {
    return this._icmpPinholeTimeoutInSeconds;
  }

  // pinhole_maximum_number - computed: false, optional: true, required: false
  private _pinholeMaximumNumber?: number; 
  public get pinholeMaximumNumber() {
    return this.getNumberAttribute('pinhole_maximum_number');
  }
  public set pinholeMaximumNumber(value: number) {
    this._pinholeMaximumNumber = value;
  }
  public resetPinholeMaximumNumber() {
    this._pinholeMaximumNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinholeMaximumNumberInput() {
    return this._pinholeMaximumNumber;
  }

  // tcp_pinhole_timeout_in_seconds - computed: false, optional: true, required: false
  private _tcpPinholeTimeoutInSeconds?: number; 
  public get tcpPinholeTimeoutInSeconds() {
    return this.getNumberAttribute('tcp_pinhole_timeout_in_seconds');
  }
  public set tcpPinholeTimeoutInSeconds(value: number) {
    this._tcpPinholeTimeoutInSeconds = value;
  }
  public resetTcpPinholeTimeoutInSeconds() {
    this._tcpPinholeTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPinholeTimeoutInSecondsInput() {
    return this._tcpPinholeTimeoutInSeconds;
  }

  // tcp_port_reuse_minimum_hold_time_in_seconds - computed: false, optional: true, required: false
  private _tcpPortReuseMinimumHoldTimeInSeconds?: number; 
  public get tcpPortReuseMinimumHoldTimeInSeconds() {
    return this.getNumberAttribute('tcp_port_reuse_minimum_hold_time_in_seconds');
  }
  public set tcpPortReuseMinimumHoldTimeInSeconds(value: number) {
    this._tcpPortReuseMinimumHoldTimeInSeconds = value;
  }
  public resetTcpPortReuseMinimumHoldTimeInSeconds() {
    this._tcpPortReuseMinimumHoldTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortReuseMinimumHoldTimeInSecondsInput() {
    return this._tcpPortReuseMinimumHoldTimeInSeconds;
  }

  // udp_pinhole_timeout_in_seconds - computed: false, optional: true, required: false
  private _udpPinholeTimeoutInSeconds?: number; 
  public get udpPinholeTimeoutInSeconds() {
    return this.getNumberAttribute('udp_pinhole_timeout_in_seconds');
  }
  public set udpPinholeTimeoutInSeconds(value: number) {
    this._udpPinholeTimeoutInSeconds = value;
  }
  public resetUdpPinholeTimeoutInSeconds() {
    this._udpPinholeTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPinholeTimeoutInSecondsInput() {
    return this._udpPinholeTimeoutInSeconds;
  }

  // udp_port_reuse_minimum_hold_time_in_seconds - computed: false, optional: true, required: false
  private _udpPortReuseMinimumHoldTimeInSeconds?: number; 
  public get udpPortReuseMinimumHoldTimeInSeconds() {
    return this.getNumberAttribute('udp_port_reuse_minimum_hold_time_in_seconds');
  }
  public set udpPortReuseMinimumHoldTimeInSeconds(value: number) {
    this._udpPortReuseMinimumHoldTimeInSeconds = value;
  }
  public resetUdpPortReuseMinimumHoldTimeInSeconds() {
    this._udpPortReuseMinimumHoldTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortReuseMinimumHoldTimeInSecondsInput() {
    return this._udpPortReuseMinimumHoldTimeInSeconds;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange = new MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }
}
export interface MobileNetworkAttachedDataNetworkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#create MobileNetworkAttachedDataNetwork#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#delete MobileNetworkAttachedDataNetwork#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#read MobileNetworkAttachedDataNetwork#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#update MobileNetworkAttachedDataNetwork#update}
  */
  readonly update?: string;
}

export function mobileNetworkAttachedDataNetworkTimeoutsToTerraform(struct?: MobileNetworkAttachedDataNetworkTimeouts | cdktf.IResolvable): any {
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


export function mobileNetworkAttachedDataNetworkTimeoutsToHclTerraform(struct?: MobileNetworkAttachedDataNetworkTimeouts | cdktf.IResolvable): any {
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

export class MobileNetworkAttachedDataNetworkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MobileNetworkAttachedDataNetworkTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MobileNetworkAttachedDataNetworkTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network azurerm_mobile_network_attached_data_network}
*/
export class MobileNetworkAttachedDataNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mobile_network_attached_data_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MobileNetworkAttachedDataNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MobileNetworkAttachedDataNetwork to import
  * @param importFromId The id of the existing MobileNetworkAttachedDataNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MobileNetworkAttachedDataNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mobile_network_attached_data_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_attached_data_network azurerm_mobile_network_attached_data_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MobileNetworkAttachedDataNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: MobileNetworkAttachedDataNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mobile_network_attached_data_network',
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
    this._dnsAddresses = config.dnsAddresses;
    this._id = config.id;
    this._location = config.location;
    this._mobileNetworkDataNetworkName = config.mobileNetworkDataNetworkName;
    this._mobileNetworkPacketCoreDataPlaneId = config.mobileNetworkPacketCoreDataPlaneId;
    this._tags = config.tags;
    this._userEquipmentAddressPoolPrefixes = config.userEquipmentAddressPoolPrefixes;
    this._userEquipmentStaticAddressPoolPrefixes = config.userEquipmentStaticAddressPoolPrefixes;
    this._userPlaneAccessIpv4Address = config.userPlaneAccessIpv4Address;
    this._userPlaneAccessIpv4Gateway = config.userPlaneAccessIpv4Gateway;
    this._userPlaneAccessIpv4Subnet = config.userPlaneAccessIpv4Subnet;
    this._userPlaneAccessName = config.userPlaneAccessName;
    this._networkAddressPortTranslation.internalValue = config.networkAddressPortTranslation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_addresses - computed: false, optional: false, required: true
  private _dnsAddresses?: string[]; 
  public get dnsAddresses() {
    return this.getListAttribute('dns_addresses');
  }
  public set dnsAddresses(value: string[]) {
    this._dnsAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAddressesInput() {
    return this._dnsAddresses;
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

  // mobile_network_data_network_name - computed: false, optional: false, required: true
  private _mobileNetworkDataNetworkName?: string; 
  public get mobileNetworkDataNetworkName() {
    return this.getStringAttribute('mobile_network_data_network_name');
  }
  public set mobileNetworkDataNetworkName(value: string) {
    this._mobileNetworkDataNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileNetworkDataNetworkNameInput() {
    return this._mobileNetworkDataNetworkName;
  }

  // mobile_network_packet_core_data_plane_id - computed: false, optional: false, required: true
  private _mobileNetworkPacketCoreDataPlaneId?: string; 
  public get mobileNetworkPacketCoreDataPlaneId() {
    return this.getStringAttribute('mobile_network_packet_core_data_plane_id');
  }
  public set mobileNetworkPacketCoreDataPlaneId(value: string) {
    this._mobileNetworkPacketCoreDataPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileNetworkPacketCoreDataPlaneIdInput() {
    return this._mobileNetworkPacketCoreDataPlaneId;
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

  // user_equipment_address_pool_prefixes - computed: false, optional: true, required: false
  private _userEquipmentAddressPoolPrefixes?: string[]; 
  public get userEquipmentAddressPoolPrefixes() {
    return this.getListAttribute('user_equipment_address_pool_prefixes');
  }
  public set userEquipmentAddressPoolPrefixes(value: string[]) {
    this._userEquipmentAddressPoolPrefixes = value;
  }
  public resetUserEquipmentAddressPoolPrefixes() {
    this._userEquipmentAddressPoolPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEquipmentAddressPoolPrefixesInput() {
    return this._userEquipmentAddressPoolPrefixes;
  }

  // user_equipment_static_address_pool_prefixes - computed: false, optional: true, required: false
  private _userEquipmentStaticAddressPoolPrefixes?: string[]; 
  public get userEquipmentStaticAddressPoolPrefixes() {
    return this.getListAttribute('user_equipment_static_address_pool_prefixes');
  }
  public set userEquipmentStaticAddressPoolPrefixes(value: string[]) {
    this._userEquipmentStaticAddressPoolPrefixes = value;
  }
  public resetUserEquipmentStaticAddressPoolPrefixes() {
    this._userEquipmentStaticAddressPoolPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEquipmentStaticAddressPoolPrefixesInput() {
    return this._userEquipmentStaticAddressPoolPrefixes;
  }

  // user_plane_access_ipv4_address - computed: false, optional: true, required: false
  private _userPlaneAccessIpv4Address?: string; 
  public get userPlaneAccessIpv4Address() {
    return this.getStringAttribute('user_plane_access_ipv4_address');
  }
  public set userPlaneAccessIpv4Address(value: string) {
    this._userPlaneAccessIpv4Address = value;
  }
  public resetUserPlaneAccessIpv4Address() {
    this._userPlaneAccessIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPlaneAccessIpv4AddressInput() {
    return this._userPlaneAccessIpv4Address;
  }

  // user_plane_access_ipv4_gateway - computed: false, optional: true, required: false
  private _userPlaneAccessIpv4Gateway?: string; 
  public get userPlaneAccessIpv4Gateway() {
    return this.getStringAttribute('user_plane_access_ipv4_gateway');
  }
  public set userPlaneAccessIpv4Gateway(value: string) {
    this._userPlaneAccessIpv4Gateway = value;
  }
  public resetUserPlaneAccessIpv4Gateway() {
    this._userPlaneAccessIpv4Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPlaneAccessIpv4GatewayInput() {
    return this._userPlaneAccessIpv4Gateway;
  }

  // user_plane_access_ipv4_subnet - computed: false, optional: true, required: false
  private _userPlaneAccessIpv4Subnet?: string; 
  public get userPlaneAccessIpv4Subnet() {
    return this.getStringAttribute('user_plane_access_ipv4_subnet');
  }
  public set userPlaneAccessIpv4Subnet(value: string) {
    this._userPlaneAccessIpv4Subnet = value;
  }
  public resetUserPlaneAccessIpv4Subnet() {
    this._userPlaneAccessIpv4Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPlaneAccessIpv4SubnetInput() {
    return this._userPlaneAccessIpv4Subnet;
  }

  // user_plane_access_name - computed: false, optional: true, required: false
  private _userPlaneAccessName?: string; 
  public get userPlaneAccessName() {
    return this.getStringAttribute('user_plane_access_name');
  }
  public set userPlaneAccessName(value: string) {
    this._userPlaneAccessName = value;
  }
  public resetUserPlaneAccessName() {
    this._userPlaneAccessName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPlaneAccessNameInput() {
    return this._userPlaneAccessName;
  }

  // network_address_port_translation - computed: false, optional: true, required: false
  private _networkAddressPortTranslation = new MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference(this, "network_address_port_translation");
  public get networkAddressPortTranslation() {
    return this._networkAddressPortTranslation;
  }
  public putNetworkAddressPortTranslation(value: MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation) {
    this._networkAddressPortTranslation.internalValue = value;
  }
  public resetNetworkAddressPortTranslation() {
    this._networkAddressPortTranslation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressPortTranslationInput() {
    return this._networkAddressPortTranslation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MobileNetworkAttachedDataNetworkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MobileNetworkAttachedDataNetworkTimeouts) {
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
      dns_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsAddresses),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      mobile_network_data_network_name: cdktf.stringToTerraform(this._mobileNetworkDataNetworkName),
      mobile_network_packet_core_data_plane_id: cdktf.stringToTerraform(this._mobileNetworkPacketCoreDataPlaneId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_equipment_address_pool_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userEquipmentAddressPoolPrefixes),
      user_equipment_static_address_pool_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userEquipmentStaticAddressPoolPrefixes),
      user_plane_access_ipv4_address: cdktf.stringToTerraform(this._userPlaneAccessIpv4Address),
      user_plane_access_ipv4_gateway: cdktf.stringToTerraform(this._userPlaneAccessIpv4Gateway),
      user_plane_access_ipv4_subnet: cdktf.stringToTerraform(this._userPlaneAccessIpv4Subnet),
      user_plane_access_name: cdktf.stringToTerraform(this._userPlaneAccessName),
      network_address_port_translation: mobileNetworkAttachedDataNetworkNetworkAddressPortTranslationToTerraform(this._networkAddressPortTranslation.internalValue),
      timeouts: mobileNetworkAttachedDataNetworkTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      mobile_network_data_network_name: {
        value: cdktf.stringToHclTerraform(this._mobileNetworkDataNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mobile_network_packet_core_data_plane_id: {
        value: cdktf.stringToHclTerraform(this._mobileNetworkPacketCoreDataPlaneId),
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
      user_equipment_address_pool_prefixes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userEquipmentAddressPoolPrefixes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_equipment_static_address_pool_prefixes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userEquipmentStaticAddressPoolPrefixes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_plane_access_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._userPlaneAccessIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_plane_access_ipv4_gateway: {
        value: cdktf.stringToHclTerraform(this._userPlaneAccessIpv4Gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_plane_access_ipv4_subnet: {
        value: cdktf.stringToHclTerraform(this._userPlaneAccessIpv4Subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_plane_access_name: {
        value: cdktf.stringToHclTerraform(this._userPlaneAccessName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_address_port_translation: {
        value: mobileNetworkAttachedDataNetworkNetworkAddressPortTranslationToHclTerraform(this._networkAddressPortTranslation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList",
      },
      timeouts: {
        value: mobileNetworkAttachedDataNetworkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MobileNetworkAttachedDataNetworkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
