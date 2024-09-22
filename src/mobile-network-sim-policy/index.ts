// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MobileNetworkSimPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#default_slice_id MobileNetworkSimPolicy#default_slice_id}
  */
  readonly defaultSliceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#id MobileNetworkSimPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#location MobileNetworkSimPolicy#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#mobile_network_id MobileNetworkSimPolicy#mobile_network_id}
  */
  readonly mobileNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#name MobileNetworkSimPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#rat_frequency_selection_priority_index MobileNetworkSimPolicy#rat_frequency_selection_priority_index}
  */
  readonly ratFrequencySelectionPriorityIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#registration_timer_in_seconds MobileNetworkSimPolicy#registration_timer_in_seconds}
  */
  readonly registrationTimerInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#tags MobileNetworkSimPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * slice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#slice MobileNetworkSimPolicy#slice}
  */
  readonly slice: MobileNetworkSimPolicySlice[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#timeouts MobileNetworkSimPolicy#timeouts}
  */
  readonly timeouts?: MobileNetworkSimPolicyTimeouts;
  /**
  * user_equipment_aggregate_maximum_bit_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#user_equipment_aggregate_maximum_bit_rate MobileNetworkSimPolicy#user_equipment_aggregate_maximum_bit_rate}
  */
  readonly userEquipmentAggregateMaximumBitRate: MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate;
}
export interface MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#downlink MobileNetworkSimPolicy#downlink}
  */
  readonly downlink: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#uplink MobileNetworkSimPolicy#uplink}
  */
  readonly uplink: string;
}

export function mobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateToTerraform(struct?: MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference | MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    downlink: cdktf.stringToTerraform(struct!.downlink),
    uplink: cdktf.stringToTerraform(struct!.uplink),
  }
}


export function mobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateToHclTerraform(struct?: MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference | MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    downlink: {
      value: cdktf.stringToHclTerraform(struct!.downlink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uplink: {
      value: cdktf.stringToHclTerraform(struct!.uplink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downlink !== undefined) {
      hasAnyValues = true;
      internalValueResult.downlink = this._downlink;
    }
    if (this._uplink !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplink = this._uplink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._downlink = undefined;
      this._uplink = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._downlink = value.downlink;
      this._uplink = value.uplink;
    }
  }

  // downlink - computed: false, optional: false, required: true
  private _downlink?: string; 
  public get downlink() {
    return this.getStringAttribute('downlink');
  }
  public set downlink(value: string) {
    this._downlink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkInput() {
    return this._downlink;
  }

  // uplink - computed: false, optional: false, required: true
  private _uplink?: string; 
  public get uplink() {
    return this.getStringAttribute('uplink');
  }
  public set uplink(value: string) {
    this._uplink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkInput() {
    return this._uplink;
  }
}
export interface MobileNetworkSimPolicySliceDataNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#additional_allowed_session_types MobileNetworkSimPolicy#additional_allowed_session_types}
  */
  readonly additionalAllowedSessionTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#allocation_and_retention_priority_level MobileNetworkSimPolicy#allocation_and_retention_priority_level}
  */
  readonly allocationAndRetentionPriorityLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#allowed_services_ids MobileNetworkSimPolicy#allowed_services_ids}
  */
  readonly allowedServicesIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#data_network_id MobileNetworkSimPolicy#data_network_id}
  */
  readonly dataNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#default_session_type MobileNetworkSimPolicy#default_session_type}
  */
  readonly defaultSessionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#max_buffered_packets MobileNetworkSimPolicy#max_buffered_packets}
  */
  readonly maxBufferedPackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#preemption_capability MobileNetworkSimPolicy#preemption_capability}
  */
  readonly preemptionCapability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#preemption_vulnerability MobileNetworkSimPolicy#preemption_vulnerability}
  */
  readonly preemptionVulnerability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#qos_indicator MobileNetworkSimPolicy#qos_indicator}
  */
  readonly qosIndicator: number;
  /**
  * session_aggregate_maximum_bit_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#session_aggregate_maximum_bit_rate MobileNetworkSimPolicy#session_aggregate_maximum_bit_rate}
  */
  readonly sessionAggregateMaximumBitRate: MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate;
}

export function mobileNetworkSimPolicySliceDataNetworkToTerraform(struct?: MobileNetworkSimPolicySliceDataNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_allowed_session_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalAllowedSessionTypes),
    allocation_and_retention_priority_level: cdktf.numberToTerraform(struct!.allocationAndRetentionPriorityLevel),
    allowed_services_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedServicesIds),
    data_network_id: cdktf.stringToTerraform(struct!.dataNetworkId),
    default_session_type: cdktf.stringToTerraform(struct!.defaultSessionType),
    max_buffered_packets: cdktf.numberToTerraform(struct!.maxBufferedPackets),
    preemption_capability: cdktf.stringToTerraform(struct!.preemptionCapability),
    preemption_vulnerability: cdktf.stringToTerraform(struct!.preemptionVulnerability),
    qos_indicator: cdktf.numberToTerraform(struct!.qosIndicator),
    session_aggregate_maximum_bit_rate: mobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateToTerraform(struct!.sessionAggregateMaximumBitRate),
  }
}


export function mobileNetworkSimPolicySliceDataNetworkToHclTerraform(struct?: MobileNetworkSimPolicySliceDataNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_allowed_session_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalAllowedSessionTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allocation_and_retention_priority_level: {
      value: cdktf.numberToHclTerraform(struct!.allocationAndRetentionPriorityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowed_services_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedServicesIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_network_id: {
      value: cdktf.stringToHclTerraform(struct!.dataNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_session_type: {
      value: cdktf.stringToHclTerraform(struct!.defaultSessionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_buffered_packets: {
      value: cdktf.numberToHclTerraform(struct!.maxBufferedPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preemption_capability: {
      value: cdktf.stringToHclTerraform(struct!.preemptionCapability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preemption_vulnerability: {
      value: cdktf.stringToHclTerraform(struct!.preemptionVulnerability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_indicator: {
      value: cdktf.numberToHclTerraform(struct!.qosIndicator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_aggregate_maximum_bit_rate: {
      value: mobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateToHclTerraform(struct!.sessionAggregateMaximumBitRate),
      isBlock: true,
      type: "list",
      storageClassType: "MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileNetworkSimPolicySliceDataNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MobileNetworkSimPolicySliceDataNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalAllowedSessionTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalAllowedSessionTypes = this._additionalAllowedSessionTypes;
    }
    if (this._allocationAndRetentionPriorityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationAndRetentionPriorityLevel = this._allocationAndRetentionPriorityLevel;
    }
    if (this._allowedServicesIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedServicesIds = this._allowedServicesIds;
    }
    if (this._dataNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataNetworkId = this._dataNetworkId;
    }
    if (this._defaultSessionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSessionType = this._defaultSessionType;
    }
    if (this._maxBufferedPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBufferedPackets = this._maxBufferedPackets;
    }
    if (this._preemptionCapability !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptionCapability = this._preemptionCapability;
    }
    if (this._preemptionVulnerability !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptionVulnerability = this._preemptionVulnerability;
    }
    if (this._qosIndicator !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosIndicator = this._qosIndicator;
    }
    if (this._sessionAggregateMaximumBitRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAggregateMaximumBitRate = this._sessionAggregateMaximumBitRate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileNetworkSimPolicySliceDataNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalAllowedSessionTypes = undefined;
      this._allocationAndRetentionPriorityLevel = undefined;
      this._allowedServicesIds = undefined;
      this._dataNetworkId = undefined;
      this._defaultSessionType = undefined;
      this._maxBufferedPackets = undefined;
      this._preemptionCapability = undefined;
      this._preemptionVulnerability = undefined;
      this._qosIndicator = undefined;
      this._sessionAggregateMaximumBitRate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalAllowedSessionTypes = value.additionalAllowedSessionTypes;
      this._allocationAndRetentionPriorityLevel = value.allocationAndRetentionPriorityLevel;
      this._allowedServicesIds = value.allowedServicesIds;
      this._dataNetworkId = value.dataNetworkId;
      this._defaultSessionType = value.defaultSessionType;
      this._maxBufferedPackets = value.maxBufferedPackets;
      this._preemptionCapability = value.preemptionCapability;
      this._preemptionVulnerability = value.preemptionVulnerability;
      this._qosIndicator = value.qosIndicator;
      this._sessionAggregateMaximumBitRate.internalValue = value.sessionAggregateMaximumBitRate;
    }
  }

  // additional_allowed_session_types - computed: false, optional: true, required: false
  private _additionalAllowedSessionTypes?: string[]; 
  public get additionalAllowedSessionTypes() {
    return this.getListAttribute('additional_allowed_session_types');
  }
  public set additionalAllowedSessionTypes(value: string[]) {
    this._additionalAllowedSessionTypes = value;
  }
  public resetAdditionalAllowedSessionTypes() {
    this._additionalAllowedSessionTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAllowedSessionTypesInput() {
    return this._additionalAllowedSessionTypes;
  }

  // allocation_and_retention_priority_level - computed: false, optional: true, required: false
  private _allocationAndRetentionPriorityLevel?: number; 
  public get allocationAndRetentionPriorityLevel() {
    return this.getNumberAttribute('allocation_and_retention_priority_level');
  }
  public set allocationAndRetentionPriorityLevel(value: number) {
    this._allocationAndRetentionPriorityLevel = value;
  }
  public resetAllocationAndRetentionPriorityLevel() {
    this._allocationAndRetentionPriorityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationAndRetentionPriorityLevelInput() {
    return this._allocationAndRetentionPriorityLevel;
  }

  // allowed_services_ids - computed: false, optional: false, required: true
  private _allowedServicesIds?: string[]; 
  public get allowedServicesIds() {
    return this.getListAttribute('allowed_services_ids');
  }
  public set allowedServicesIds(value: string[]) {
    this._allowedServicesIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServicesIdsInput() {
    return this._allowedServicesIds;
  }

  // data_network_id - computed: false, optional: false, required: true
  private _dataNetworkId?: string; 
  public get dataNetworkId() {
    return this.getStringAttribute('data_network_id');
  }
  public set dataNetworkId(value: string) {
    this._dataNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNetworkIdInput() {
    return this._dataNetworkId;
  }

  // default_session_type - computed: false, optional: true, required: false
  private _defaultSessionType?: string; 
  public get defaultSessionType() {
    return this.getStringAttribute('default_session_type');
  }
  public set defaultSessionType(value: string) {
    this._defaultSessionType = value;
  }
  public resetDefaultSessionType() {
    this._defaultSessionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSessionTypeInput() {
    return this._defaultSessionType;
  }

  // max_buffered_packets - computed: false, optional: true, required: false
  private _maxBufferedPackets?: number; 
  public get maxBufferedPackets() {
    return this.getNumberAttribute('max_buffered_packets');
  }
  public set maxBufferedPackets(value: number) {
    this._maxBufferedPackets = value;
  }
  public resetMaxBufferedPackets() {
    this._maxBufferedPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBufferedPacketsInput() {
    return this._maxBufferedPackets;
  }

  // preemption_capability - computed: false, optional: true, required: false
  private _preemptionCapability?: string; 
  public get preemptionCapability() {
    return this.getStringAttribute('preemption_capability');
  }
  public set preemptionCapability(value: string) {
    this._preemptionCapability = value;
  }
  public resetPreemptionCapability() {
    this._preemptionCapability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionCapabilityInput() {
    return this._preemptionCapability;
  }

  // preemption_vulnerability - computed: false, optional: true, required: false
  private _preemptionVulnerability?: string; 
  public get preemptionVulnerability() {
    return this.getStringAttribute('preemption_vulnerability');
  }
  public set preemptionVulnerability(value: string) {
    this._preemptionVulnerability = value;
  }
  public resetPreemptionVulnerability() {
    this._preemptionVulnerability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionVulnerabilityInput() {
    return this._preemptionVulnerability;
  }

  // qos_indicator - computed: false, optional: false, required: true
  private _qosIndicator?: number; 
  public get qosIndicator() {
    return this.getNumberAttribute('qos_indicator');
  }
  public set qosIndicator(value: number) {
    this._qosIndicator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qosIndicatorInput() {
    return this._qosIndicator;
  }

  // session_aggregate_maximum_bit_rate - computed: false, optional: false, required: true
  private _sessionAggregateMaximumBitRate = new MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference(this, "session_aggregate_maximum_bit_rate");
  public get sessionAggregateMaximumBitRate() {
    return this._sessionAggregateMaximumBitRate;
  }
  public putSessionAggregateMaximumBitRate(value: MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate) {
    this._sessionAggregateMaximumBitRate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAggregateMaximumBitRateInput() {
    return this._sessionAggregateMaximumBitRate.internalValue;
  }
}

export class MobileNetworkSimPolicySliceDataNetworkList extends cdktf.ComplexList {
  public internalValue? : MobileNetworkSimPolicySliceDataNetwork[] | cdktf.IResolvable

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
  public get(index: number): MobileNetworkSimPolicySliceDataNetworkOutputReference {
    return new MobileNetworkSimPolicySliceDataNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MobileNetworkSimPolicySlice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#default_data_network_id MobileNetworkSimPolicy#default_data_network_id}
  */
  readonly defaultDataNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#slice_id MobileNetworkSimPolicy#slice_id}
  */
  readonly sliceId: string;
  /**
  * data_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#data_network MobileNetworkSimPolicy#data_network}
  */
  readonly dataNetwork: MobileNetworkSimPolicySliceDataNetwork[] | cdktf.IResolvable;
}

export function mobileNetworkSimPolicySliceToTerraform(struct?: MobileNetworkSimPolicySlice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_data_network_id: cdktf.stringToTerraform(struct!.defaultDataNetworkId),
    slice_id: cdktf.stringToTerraform(struct!.sliceId),
    data_network: cdktf.listMapper(mobileNetworkSimPolicySliceDataNetworkToTerraform, true)(struct!.dataNetwork),
  }
}


export function mobileNetworkSimPolicySliceToHclTerraform(struct?: MobileNetworkSimPolicySlice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_data_network_id: {
      value: cdktf.stringToHclTerraform(struct!.defaultDataNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slice_id: {
      value: cdktf.stringToHclTerraform(struct!.sliceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_network: {
      value: cdktf.listMapperHcl(mobileNetworkSimPolicySliceDataNetworkToHclTerraform, true)(struct!.dataNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "MobileNetworkSimPolicySliceDataNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileNetworkSimPolicySliceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MobileNetworkSimPolicySlice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultDataNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDataNetworkId = this._defaultDataNetworkId;
    }
    if (this._sliceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sliceId = this._sliceId;
    }
    if (this._dataNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataNetwork = this._dataNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileNetworkSimPolicySlice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultDataNetworkId = undefined;
      this._sliceId = undefined;
      this._dataNetwork.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultDataNetworkId = value.defaultDataNetworkId;
      this._sliceId = value.sliceId;
      this._dataNetwork.internalValue = value.dataNetwork;
    }
  }

  // default_data_network_id - computed: false, optional: false, required: true
  private _defaultDataNetworkId?: string; 
  public get defaultDataNetworkId() {
    return this.getStringAttribute('default_data_network_id');
  }
  public set defaultDataNetworkId(value: string) {
    this._defaultDataNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDataNetworkIdInput() {
    return this._defaultDataNetworkId;
  }

  // slice_id - computed: false, optional: false, required: true
  private _sliceId?: string; 
  public get sliceId() {
    return this.getStringAttribute('slice_id');
  }
  public set sliceId(value: string) {
    this._sliceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sliceIdInput() {
    return this._sliceId;
  }

  // data_network - computed: false, optional: false, required: true
  private _dataNetwork = new MobileNetworkSimPolicySliceDataNetworkList(this, "data_network", false);
  public get dataNetwork() {
    return this._dataNetwork;
  }
  public putDataNetwork(value: MobileNetworkSimPolicySliceDataNetwork[] | cdktf.IResolvable) {
    this._dataNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNetworkInput() {
    return this._dataNetwork.internalValue;
  }
}

export class MobileNetworkSimPolicySliceList extends cdktf.ComplexList {
  public internalValue? : MobileNetworkSimPolicySlice[] | cdktf.IResolvable

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
  public get(index: number): MobileNetworkSimPolicySliceOutputReference {
    return new MobileNetworkSimPolicySliceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MobileNetworkSimPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#create MobileNetworkSimPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#delete MobileNetworkSimPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#read MobileNetworkSimPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#update MobileNetworkSimPolicy#update}
  */
  readonly update?: string;
}

export function mobileNetworkSimPolicyTimeoutsToTerraform(struct?: MobileNetworkSimPolicyTimeouts | cdktf.IResolvable): any {
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


export function mobileNetworkSimPolicyTimeoutsToHclTerraform(struct?: MobileNetworkSimPolicyTimeouts | cdktf.IResolvable): any {
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

export class MobileNetworkSimPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MobileNetworkSimPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MobileNetworkSimPolicyTimeouts | cdktf.IResolvable | undefined) {
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
export interface MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#downlink MobileNetworkSimPolicy#downlink}
  */
  readonly downlink: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#uplink MobileNetworkSimPolicy#uplink}
  */
  readonly uplink: string;
}

export function mobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateToTerraform(struct?: MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference | MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    downlink: cdktf.stringToTerraform(struct!.downlink),
    uplink: cdktf.stringToTerraform(struct!.uplink),
  }
}


export function mobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateToHclTerraform(struct?: MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference | MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    downlink: {
      value: cdktf.stringToHclTerraform(struct!.downlink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uplink: {
      value: cdktf.stringToHclTerraform(struct!.uplink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downlink !== undefined) {
      hasAnyValues = true;
      internalValueResult.downlink = this._downlink;
    }
    if (this._uplink !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplink = this._uplink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._downlink = undefined;
      this._uplink = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._downlink = value.downlink;
      this._uplink = value.uplink;
    }
  }

  // downlink - computed: false, optional: false, required: true
  private _downlink?: string; 
  public get downlink() {
    return this.getStringAttribute('downlink');
  }
  public set downlink(value: string) {
    this._downlink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkInput() {
    return this._downlink;
  }

  // uplink - computed: false, optional: false, required: true
  private _uplink?: string; 
  public get uplink() {
    return this.getStringAttribute('uplink');
  }
  public set uplink(value: string) {
    this._uplink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkInput() {
    return this._uplink;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy azurerm_mobile_network_sim_policy}
*/
export class MobileNetworkSimPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mobile_network_sim_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MobileNetworkSimPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MobileNetworkSimPolicy to import
  * @param importFromId The id of the existing MobileNetworkSimPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MobileNetworkSimPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mobile_network_sim_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_sim_policy azurerm_mobile_network_sim_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MobileNetworkSimPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MobileNetworkSimPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mobile_network_sim_policy',
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
    this._defaultSliceId = config.defaultSliceId;
    this._id = config.id;
    this._location = config.location;
    this._mobileNetworkId = config.mobileNetworkId;
    this._name = config.name;
    this._ratFrequencySelectionPriorityIndex = config.ratFrequencySelectionPriorityIndex;
    this._registrationTimerInSeconds = config.registrationTimerInSeconds;
    this._tags = config.tags;
    this._slice.internalValue = config.slice;
    this._timeouts.internalValue = config.timeouts;
    this._userEquipmentAggregateMaximumBitRate.internalValue = config.userEquipmentAggregateMaximumBitRate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_slice_id - computed: false, optional: false, required: true
  private _defaultSliceId?: string; 
  public get defaultSliceId() {
    return this.getStringAttribute('default_slice_id');
  }
  public set defaultSliceId(value: string) {
    this._defaultSliceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSliceIdInput() {
    return this._defaultSliceId;
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

  // mobile_network_id - computed: false, optional: false, required: true
  private _mobileNetworkId?: string; 
  public get mobileNetworkId() {
    return this.getStringAttribute('mobile_network_id');
  }
  public set mobileNetworkId(value: string) {
    this._mobileNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileNetworkIdInput() {
    return this._mobileNetworkId;
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

  // rat_frequency_selection_priority_index - computed: false, optional: true, required: false
  private _ratFrequencySelectionPriorityIndex?: number; 
  public get ratFrequencySelectionPriorityIndex() {
    return this.getNumberAttribute('rat_frequency_selection_priority_index');
  }
  public set ratFrequencySelectionPriorityIndex(value: number) {
    this._ratFrequencySelectionPriorityIndex = value;
  }
  public resetRatFrequencySelectionPriorityIndex() {
    this._ratFrequencySelectionPriorityIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratFrequencySelectionPriorityIndexInput() {
    return this._ratFrequencySelectionPriorityIndex;
  }

  // registration_timer_in_seconds - computed: false, optional: true, required: false
  private _registrationTimerInSeconds?: number; 
  public get registrationTimerInSeconds() {
    return this.getNumberAttribute('registration_timer_in_seconds');
  }
  public set registrationTimerInSeconds(value: number) {
    this._registrationTimerInSeconds = value;
  }
  public resetRegistrationTimerInSeconds() {
    this._registrationTimerInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationTimerInSecondsInput() {
    return this._registrationTimerInSeconds;
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

  // slice - computed: false, optional: false, required: true
  private _slice = new MobileNetworkSimPolicySliceList(this, "slice", false);
  public get slice() {
    return this._slice;
  }
  public putSlice(value: MobileNetworkSimPolicySlice[] | cdktf.IResolvable) {
    this._slice.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sliceInput() {
    return this._slice.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MobileNetworkSimPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MobileNetworkSimPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_equipment_aggregate_maximum_bit_rate - computed: false, optional: false, required: true
  private _userEquipmentAggregateMaximumBitRate = new MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference(this, "user_equipment_aggregate_maximum_bit_rate");
  public get userEquipmentAggregateMaximumBitRate() {
    return this._userEquipmentAggregateMaximumBitRate;
  }
  public putUserEquipmentAggregateMaximumBitRate(value: MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate) {
    this._userEquipmentAggregateMaximumBitRate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userEquipmentAggregateMaximumBitRateInput() {
    return this._userEquipmentAggregateMaximumBitRate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_slice_id: cdktf.stringToTerraform(this._defaultSliceId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      mobile_network_id: cdktf.stringToTerraform(this._mobileNetworkId),
      name: cdktf.stringToTerraform(this._name),
      rat_frequency_selection_priority_index: cdktf.numberToTerraform(this._ratFrequencySelectionPriorityIndex),
      registration_timer_in_seconds: cdktf.numberToTerraform(this._registrationTimerInSeconds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      slice: cdktf.listMapper(mobileNetworkSimPolicySliceToTerraform, true)(this._slice.internalValue),
      timeouts: mobileNetworkSimPolicyTimeoutsToTerraform(this._timeouts.internalValue),
      user_equipment_aggregate_maximum_bit_rate: mobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateToTerraform(this._userEquipmentAggregateMaximumBitRate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_slice_id: {
        value: cdktf.stringToHclTerraform(this._defaultSliceId),
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
      mobile_network_id: {
        value: cdktf.stringToHclTerraform(this._mobileNetworkId),
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
      rat_frequency_selection_priority_index: {
        value: cdktf.numberToHclTerraform(this._ratFrequencySelectionPriorityIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      registration_timer_in_seconds: {
        value: cdktf.numberToHclTerraform(this._registrationTimerInSeconds),
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
      slice: {
        value: cdktf.listMapperHcl(mobileNetworkSimPolicySliceToHclTerraform, true)(this._slice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MobileNetworkSimPolicySliceList",
      },
      timeouts: {
        value: mobileNetworkSimPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MobileNetworkSimPolicyTimeouts",
      },
      user_equipment_aggregate_maximum_bit_rate: {
        value: mobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateToHclTerraform(this._userEquipmentAggregateMaximumBitRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
