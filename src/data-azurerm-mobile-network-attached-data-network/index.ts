/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_attached_data_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermMobileNetworkAttachedDataNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_attached_data_network#id DataAzurermMobileNetworkAttachedDataNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_attached_data_network#mobile_network_data_network_name DataAzurermMobileNetworkAttachedDataNetwork#mobile_network_data_network_name}
  */
  readonly mobileNetworkDataNetworkName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_attached_data_network#mobile_network_packet_core_data_plane_id DataAzurermMobileNetworkAttachedDataNetwork#mobile_network_packet_core_data_plane_id}
  */
  readonly mobileNetworkPacketCoreDataPlaneId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_attached_data_network#timeouts DataAzurermMobileNetworkAttachedDataNetwork#timeouts}
  */
  readonly timeouts?: DataAzurermMobileNetworkAttachedDataNetworkTimeouts;
}
export interface DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange {
}

export function dataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeToTerraform(struct?: DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeToHclTerraform(struct?: DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
}

export class DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference {
    return new DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation {
}

export function dataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationToTerraform(struct?: DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationToHclTerraform(struct?: DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // icmp_pinhole_timeout_in_seconds - computed: true, optional: false, required: false
  public get icmpPinholeTimeoutInSeconds() {
    return this.getNumberAttribute('icmp_pinhole_timeout_in_seconds');
  }

  // pinhole_maximum_number - computed: true, optional: false, required: false
  public get pinholeMaximumNumber() {
    return this.getNumberAttribute('pinhole_maximum_number');
  }

  // port_range - computed: true, optional: false, required: false
  private _portRange = new DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeList(this, "port_range", false);
  public get portRange() {
    return this._portRange;
  }

  // tcp_pinhole_timeout_in_seconds - computed: true, optional: false, required: false
  public get tcpPinholeTimeoutInSeconds() {
    return this.getNumberAttribute('tcp_pinhole_timeout_in_seconds');
  }

  // tcp_port_reuse_minimum_hold_time_in_seconds - computed: true, optional: false, required: false
  public get tcpPortReuseMinimumHoldTimeInSeconds() {
    return this.getNumberAttribute('tcp_port_reuse_minimum_hold_time_in_seconds');
  }

  // udp_pinhole_timeout_in_seconds - computed: true, optional: false, required: false
  public get udpPinholeTimeoutInSeconds() {
    return this.getNumberAttribute('udp_pinhole_timeout_in_seconds');
  }

  // udp_port_reuse_minimum_hold_time_in_seconds - computed: true, optional: false, required: false
  public get udpPortReuseMinimumHoldTimeInSeconds() {
    return this.getNumberAttribute('udp_port_reuse_minimum_hold_time_in_seconds');
  }
}

export class DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference {
    return new DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermMobileNetworkAttachedDataNetworkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_attached_data_network#read DataAzurermMobileNetworkAttachedDataNetwork#read}
  */
  readonly read?: string;
}

export function dataAzurermMobileNetworkAttachedDataNetworkTimeoutsToTerraform(struct?: DataAzurermMobileNetworkAttachedDataNetworkTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermMobileNetworkAttachedDataNetworkTimeoutsToHclTerraform(struct?: DataAzurermMobileNetworkAttachedDataNetworkTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermMobileNetworkAttachedDataNetworkTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermMobileNetworkAttachedDataNetworkTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_attached_data_network azurerm_mobile_network_attached_data_network}
*/
export class DataAzurermMobileNetworkAttachedDataNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mobile_network_attached_data_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermMobileNetworkAttachedDataNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermMobileNetworkAttachedDataNetwork to import
  * @param importFromId The id of the existing DataAzurermMobileNetworkAttachedDataNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_attached_data_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermMobileNetworkAttachedDataNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mobile_network_attached_data_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/mobile_network_attached_data_network azurerm_mobile_network_attached_data_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermMobileNetworkAttachedDataNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermMobileNetworkAttachedDataNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mobile_network_attached_data_network',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.37.0',
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
    this._id = config.id;
    this._mobileNetworkDataNetworkName = config.mobileNetworkDataNetworkName;
    this._mobileNetworkPacketCoreDataPlaneId = config.mobileNetworkPacketCoreDataPlaneId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_addresses - computed: true, optional: false, required: false
  public get dnsAddresses() {
    return this.getListAttribute('dns_addresses');
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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // network_address_port_translation - computed: true, optional: false, required: false
  private _networkAddressPortTranslation = new DataAzurermMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationList(this, "network_address_port_translation", false);
  public get networkAddressPortTranslation() {
    return this._networkAddressPortTranslation;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // user_equipment_address_pool_prefixes - computed: true, optional: false, required: false
  public get userEquipmentAddressPoolPrefixes() {
    return this.getListAttribute('user_equipment_address_pool_prefixes');
  }

  // user_equipment_static_address_pool_prefixes - computed: true, optional: false, required: false
  public get userEquipmentStaticAddressPoolPrefixes() {
    return this.getListAttribute('user_equipment_static_address_pool_prefixes');
  }

  // user_plane_access_ipv4_address - computed: true, optional: false, required: false
  public get userPlaneAccessIpv4Address() {
    return this.getStringAttribute('user_plane_access_ipv4_address');
  }

  // user_plane_access_ipv4_gateway - computed: true, optional: false, required: false
  public get userPlaneAccessIpv4Gateway() {
    return this.getStringAttribute('user_plane_access_ipv4_gateway');
  }

  // user_plane_access_ipv4_subnet - computed: true, optional: false, required: false
  public get userPlaneAccessIpv4Subnet() {
    return this.getStringAttribute('user_plane_access_ipv4_subnet');
  }

  // user_plane_access_name - computed: true, optional: false, required: false
  public get userPlaneAccessName() {
    return this.getStringAttribute('user_plane_access_name');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermMobileNetworkAttachedDataNetworkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermMobileNetworkAttachedDataNetworkTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      mobile_network_data_network_name: cdktf.stringToTerraform(this._mobileNetworkDataNetworkName),
      mobile_network_packet_core_data_plane_id: cdktf.stringToTerraform(this._mobileNetworkPacketCoreDataPlaneId),
      timeouts: dataAzurermMobileNetworkAttachedDataNetworkTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      timeouts: {
        value: dataAzurermMobileNetworkAttachedDataNetworkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermMobileNetworkAttachedDataNetworkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
