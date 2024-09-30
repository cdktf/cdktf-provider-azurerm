// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MobileNetworkServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#id MobileNetworkService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#location MobileNetworkService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#mobile_network_id MobileNetworkService#mobile_network_id}
  */
  readonly mobileNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#name MobileNetworkService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#service_precedence MobileNetworkService#service_precedence}
  */
  readonly servicePrecedence: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#tags MobileNetworkService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * pcc_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#pcc_rule MobileNetworkService#pcc_rule}
  */
  readonly pccRule: MobileNetworkServicePccRule[] | cdktf.IResolvable;
  /**
  * service_qos_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#service_qos_policy MobileNetworkService#service_qos_policy}
  */
  readonly serviceQosPolicy?: MobileNetworkServiceServiceQosPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#timeouts MobileNetworkService#timeouts}
  */
  readonly timeouts?: MobileNetworkServiceTimeouts;
}
export interface MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#downlink MobileNetworkService#downlink}
  */
  readonly downlink: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#uplink MobileNetworkService#uplink}
  */
  readonly uplink: string;
}

export function mobileNetworkServicePccRuleQosPolicyGuaranteedBitRateToTerraform(struct?: MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference | MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    downlink: cdktf.stringToTerraform(struct!.downlink),
    uplink: cdktf.stringToTerraform(struct!.uplink),
  }
}


export function mobileNetworkServicePccRuleQosPolicyGuaranteedBitRateToHclTerraform(struct?: MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference | MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate): any {
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

export class MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate | undefined {
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

  public set internalValue(value: MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate | undefined) {
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
export interface MobileNetworkServicePccRuleQosPolicyMaximumBitRate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#downlink MobileNetworkService#downlink}
  */
  readonly downlink: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#uplink MobileNetworkService#uplink}
  */
  readonly uplink: string;
}

export function mobileNetworkServicePccRuleQosPolicyMaximumBitRateToTerraform(struct?: MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference | MobileNetworkServicePccRuleQosPolicyMaximumBitRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    downlink: cdktf.stringToTerraform(struct!.downlink),
    uplink: cdktf.stringToTerraform(struct!.uplink),
  }
}


export function mobileNetworkServicePccRuleQosPolicyMaximumBitRateToHclTerraform(struct?: MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference | MobileNetworkServicePccRuleQosPolicyMaximumBitRate): any {
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

export class MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileNetworkServicePccRuleQosPolicyMaximumBitRate | undefined {
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

  public set internalValue(value: MobileNetworkServicePccRuleQosPolicyMaximumBitRate | undefined) {
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
export interface MobileNetworkServicePccRuleQosPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#allocation_and_retention_priority_level MobileNetworkService#allocation_and_retention_priority_level}
  */
  readonly allocationAndRetentionPriorityLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#preemption_capability MobileNetworkService#preemption_capability}
  */
  readonly preemptionCapability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#preemption_vulnerability MobileNetworkService#preemption_vulnerability}
  */
  readonly preemptionVulnerability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#qos_indicator MobileNetworkService#qos_indicator}
  */
  readonly qosIndicator: number;
  /**
  * guaranteed_bit_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#guaranteed_bit_rate MobileNetworkService#guaranteed_bit_rate}
  */
  readonly guaranteedBitRate?: MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate;
  /**
  * maximum_bit_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#maximum_bit_rate MobileNetworkService#maximum_bit_rate}
  */
  readonly maximumBitRate: MobileNetworkServicePccRuleQosPolicyMaximumBitRate;
}

export function mobileNetworkServicePccRuleQosPolicyToTerraform(struct?: MobileNetworkServicePccRuleQosPolicyOutputReference | MobileNetworkServicePccRuleQosPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_and_retention_priority_level: cdktf.numberToTerraform(struct!.allocationAndRetentionPriorityLevel),
    preemption_capability: cdktf.stringToTerraform(struct!.preemptionCapability),
    preemption_vulnerability: cdktf.stringToTerraform(struct!.preemptionVulnerability),
    qos_indicator: cdktf.numberToTerraform(struct!.qosIndicator),
    guaranteed_bit_rate: mobileNetworkServicePccRuleQosPolicyGuaranteedBitRateToTerraform(struct!.guaranteedBitRate),
    maximum_bit_rate: mobileNetworkServicePccRuleQosPolicyMaximumBitRateToTerraform(struct!.maximumBitRate),
  }
}


export function mobileNetworkServicePccRuleQosPolicyToHclTerraform(struct?: MobileNetworkServicePccRuleQosPolicyOutputReference | MobileNetworkServicePccRuleQosPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocation_and_retention_priority_level: {
      value: cdktf.numberToHclTerraform(struct!.allocationAndRetentionPriorityLevel),
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
    guaranteed_bit_rate: {
      value: mobileNetworkServicePccRuleQosPolicyGuaranteedBitRateToHclTerraform(struct!.guaranteedBitRate),
      isBlock: true,
      type: "list",
      storageClassType: "MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateList",
    },
    maximum_bit_rate: {
      value: mobileNetworkServicePccRuleQosPolicyMaximumBitRateToHclTerraform(struct!.maximumBitRate),
      isBlock: true,
      type: "list",
      storageClassType: "MobileNetworkServicePccRuleQosPolicyMaximumBitRateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileNetworkServicePccRuleQosPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileNetworkServicePccRuleQosPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationAndRetentionPriorityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationAndRetentionPriorityLevel = this._allocationAndRetentionPriorityLevel;
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
    if (this._guaranteedBitRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guaranteedBitRate = this._guaranteedBitRate?.internalValue;
    }
    if (this._maximumBitRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBitRate = this._maximumBitRate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileNetworkServicePccRuleQosPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocationAndRetentionPriorityLevel = undefined;
      this._preemptionCapability = undefined;
      this._preemptionVulnerability = undefined;
      this._qosIndicator = undefined;
      this._guaranteedBitRate.internalValue = undefined;
      this._maximumBitRate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocationAndRetentionPriorityLevel = value.allocationAndRetentionPriorityLevel;
      this._preemptionCapability = value.preemptionCapability;
      this._preemptionVulnerability = value.preemptionVulnerability;
      this._qosIndicator = value.qosIndicator;
      this._guaranteedBitRate.internalValue = value.guaranteedBitRate;
      this._maximumBitRate.internalValue = value.maximumBitRate;
    }
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

  // guaranteed_bit_rate - computed: false, optional: true, required: false
  private _guaranteedBitRate = new MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference(this, "guaranteed_bit_rate");
  public get guaranteedBitRate() {
    return this._guaranteedBitRate;
  }
  public putGuaranteedBitRate(value: MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate) {
    this._guaranteedBitRate.internalValue = value;
  }
  public resetGuaranteedBitRate() {
    this._guaranteedBitRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedBitRateInput() {
    return this._guaranteedBitRate.internalValue;
  }

  // maximum_bit_rate - computed: false, optional: false, required: true
  private _maximumBitRate = new MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference(this, "maximum_bit_rate");
  public get maximumBitRate() {
    return this._maximumBitRate;
  }
  public putMaximumBitRate(value: MobileNetworkServicePccRuleQosPolicyMaximumBitRate) {
    this._maximumBitRate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBitRateInput() {
    return this._maximumBitRate.internalValue;
  }
}
export interface MobileNetworkServicePccRuleServiceDataFlowTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#direction MobileNetworkService#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#name MobileNetworkService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#ports MobileNetworkService#ports}
  */
  readonly ports?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#protocol MobileNetworkService#protocol}
  */
  readonly protocol: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#remote_ip_list MobileNetworkService#remote_ip_list}
  */
  readonly remoteIpList: string[];
}

export function mobileNetworkServicePccRuleServiceDataFlowTemplateToTerraform(struct?: MobileNetworkServicePccRuleServiceDataFlowTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
    protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocol),
    remote_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteIpList),
  }
}


export function mobileNetworkServicePccRuleServiceDataFlowTemplateToHclTerraform(struct?: MobileNetworkServicePccRuleServiceDataFlowTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
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
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocol),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    remote_ip_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteIpList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MobileNetworkServicePccRuleServiceDataFlowTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._remoteIpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpList = this._remoteIpList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileNetworkServicePccRuleServiceDataFlowTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._name = undefined;
      this._ports = undefined;
      this._protocol = undefined;
      this._remoteIpList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._name = value.name;
      this._ports = value.ports;
      this._protocol = value.protocol;
      this._remoteIpList = value.remoteIpList;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string[]; 
  public get protocol() {
    return this.getListAttribute('protocol');
  }
  public set protocol(value: string[]) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // remote_ip_list - computed: false, optional: false, required: true
  private _remoteIpList?: string[]; 
  public get remoteIpList() {
    return this.getListAttribute('remote_ip_list');
  }
  public set remoteIpList(value: string[]) {
    this._remoteIpList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpListInput() {
    return this._remoteIpList;
  }
}

export class MobileNetworkServicePccRuleServiceDataFlowTemplateList extends cdktf.ComplexList {
  public internalValue? : MobileNetworkServicePccRuleServiceDataFlowTemplate[] | cdktf.IResolvable

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
  public get(index: number): MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference {
    return new MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MobileNetworkServicePccRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#name MobileNetworkService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#precedence MobileNetworkService#precedence}
  */
  readonly precedence: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#traffic_control_enabled MobileNetworkService#traffic_control_enabled}
  */
  readonly trafficControlEnabled?: boolean | cdktf.IResolvable;
  /**
  * qos_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#qos_policy MobileNetworkService#qos_policy}
  */
  readonly qosPolicy?: MobileNetworkServicePccRuleQosPolicy;
  /**
  * service_data_flow_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#service_data_flow_template MobileNetworkService#service_data_flow_template}
  */
  readonly serviceDataFlowTemplate: MobileNetworkServicePccRuleServiceDataFlowTemplate[] | cdktf.IResolvable;
}

export function mobileNetworkServicePccRuleToTerraform(struct?: MobileNetworkServicePccRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    precedence: cdktf.numberToTerraform(struct!.precedence),
    traffic_control_enabled: cdktf.booleanToTerraform(struct!.trafficControlEnabled),
    qos_policy: mobileNetworkServicePccRuleQosPolicyToTerraform(struct!.qosPolicy),
    service_data_flow_template: cdktf.listMapper(mobileNetworkServicePccRuleServiceDataFlowTemplateToTerraform, true)(struct!.serviceDataFlowTemplate),
  }
}


export function mobileNetworkServicePccRuleToHclTerraform(struct?: MobileNetworkServicePccRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precedence: {
      value: cdktf.numberToHclTerraform(struct!.precedence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_control_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.trafficControlEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    qos_policy: {
      value: mobileNetworkServicePccRuleQosPolicyToHclTerraform(struct!.qosPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "MobileNetworkServicePccRuleQosPolicyList",
    },
    service_data_flow_template: {
      value: cdktf.listMapperHcl(mobileNetworkServicePccRuleServiceDataFlowTemplateToHclTerraform, true)(struct!.serviceDataFlowTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MobileNetworkServicePccRuleServiceDataFlowTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileNetworkServicePccRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MobileNetworkServicePccRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._precedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.precedence = this._precedence;
    }
    if (this._trafficControlEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficControlEnabled = this._trafficControlEnabled;
    }
    if (this._qosPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosPolicy = this._qosPolicy?.internalValue;
    }
    if (this._serviceDataFlowTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDataFlowTemplate = this._serviceDataFlowTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileNetworkServicePccRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._precedence = undefined;
      this._trafficControlEnabled = undefined;
      this._qosPolicy.internalValue = undefined;
      this._serviceDataFlowTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._precedence = value.precedence;
      this._trafficControlEnabled = value.trafficControlEnabled;
      this._qosPolicy.internalValue = value.qosPolicy;
      this._serviceDataFlowTemplate.internalValue = value.serviceDataFlowTemplate;
    }
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

  // precedence - computed: false, optional: false, required: true
  private _precedence?: number; 
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }
  public set precedence(value: number) {
    this._precedence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
  }

  // traffic_control_enabled - computed: false, optional: true, required: false
  private _trafficControlEnabled?: boolean | cdktf.IResolvable; 
  public get trafficControlEnabled() {
    return this.getBooleanAttribute('traffic_control_enabled');
  }
  public set trafficControlEnabled(value: boolean | cdktf.IResolvable) {
    this._trafficControlEnabled = value;
  }
  public resetTrafficControlEnabled() {
    this._trafficControlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficControlEnabledInput() {
    return this._trafficControlEnabled;
  }

  // qos_policy - computed: false, optional: true, required: false
  private _qosPolicy = new MobileNetworkServicePccRuleQosPolicyOutputReference(this, "qos_policy");
  public get qosPolicy() {
    return this._qosPolicy;
  }
  public putQosPolicy(value: MobileNetworkServicePccRuleQosPolicy) {
    this._qosPolicy.internalValue = value;
  }
  public resetQosPolicy() {
    this._qosPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyInput() {
    return this._qosPolicy.internalValue;
  }

  // service_data_flow_template - computed: false, optional: false, required: true
  private _serviceDataFlowTemplate = new MobileNetworkServicePccRuleServiceDataFlowTemplateList(this, "service_data_flow_template", false);
  public get serviceDataFlowTemplate() {
    return this._serviceDataFlowTemplate;
  }
  public putServiceDataFlowTemplate(value: MobileNetworkServicePccRuleServiceDataFlowTemplate[] | cdktf.IResolvable) {
    this._serviceDataFlowTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDataFlowTemplateInput() {
    return this._serviceDataFlowTemplate.internalValue;
  }
}

export class MobileNetworkServicePccRuleList extends cdktf.ComplexList {
  public internalValue? : MobileNetworkServicePccRule[] | cdktf.IResolvable

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
  public get(index: number): MobileNetworkServicePccRuleOutputReference {
    return new MobileNetworkServicePccRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MobileNetworkServiceServiceQosPolicyMaximumBitRate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#downlink MobileNetworkService#downlink}
  */
  readonly downlink: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#uplink MobileNetworkService#uplink}
  */
  readonly uplink: string;
}

export function mobileNetworkServiceServiceQosPolicyMaximumBitRateToTerraform(struct?: MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference | MobileNetworkServiceServiceQosPolicyMaximumBitRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    downlink: cdktf.stringToTerraform(struct!.downlink),
    uplink: cdktf.stringToTerraform(struct!.uplink),
  }
}


export function mobileNetworkServiceServiceQosPolicyMaximumBitRateToHclTerraform(struct?: MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference | MobileNetworkServiceServiceQosPolicyMaximumBitRate): any {
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

export class MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileNetworkServiceServiceQosPolicyMaximumBitRate | undefined {
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

  public set internalValue(value: MobileNetworkServiceServiceQosPolicyMaximumBitRate | undefined) {
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
export interface MobileNetworkServiceServiceQosPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#allocation_and_retention_priority_level MobileNetworkService#allocation_and_retention_priority_level}
  */
  readonly allocationAndRetentionPriorityLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#preemption_capability MobileNetworkService#preemption_capability}
  */
  readonly preemptionCapability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#preemption_vulnerability MobileNetworkService#preemption_vulnerability}
  */
  readonly preemptionVulnerability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#qos_indicator MobileNetworkService#qos_indicator}
  */
  readonly qosIndicator?: number;
  /**
  * maximum_bit_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#maximum_bit_rate MobileNetworkService#maximum_bit_rate}
  */
  readonly maximumBitRate: MobileNetworkServiceServiceQosPolicyMaximumBitRate;
}

export function mobileNetworkServiceServiceQosPolicyToTerraform(struct?: MobileNetworkServiceServiceQosPolicyOutputReference | MobileNetworkServiceServiceQosPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_and_retention_priority_level: cdktf.numberToTerraform(struct!.allocationAndRetentionPriorityLevel),
    preemption_capability: cdktf.stringToTerraform(struct!.preemptionCapability),
    preemption_vulnerability: cdktf.stringToTerraform(struct!.preemptionVulnerability),
    qos_indicator: cdktf.numberToTerraform(struct!.qosIndicator),
    maximum_bit_rate: mobileNetworkServiceServiceQosPolicyMaximumBitRateToTerraform(struct!.maximumBitRate),
  }
}


export function mobileNetworkServiceServiceQosPolicyToHclTerraform(struct?: MobileNetworkServiceServiceQosPolicyOutputReference | MobileNetworkServiceServiceQosPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocation_and_retention_priority_level: {
      value: cdktf.numberToHclTerraform(struct!.allocationAndRetentionPriorityLevel),
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
    maximum_bit_rate: {
      value: mobileNetworkServiceServiceQosPolicyMaximumBitRateToHclTerraform(struct!.maximumBitRate),
      isBlock: true,
      type: "list",
      storageClassType: "MobileNetworkServiceServiceQosPolicyMaximumBitRateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileNetworkServiceServiceQosPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileNetworkServiceServiceQosPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationAndRetentionPriorityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationAndRetentionPriorityLevel = this._allocationAndRetentionPriorityLevel;
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
    if (this._maximumBitRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBitRate = this._maximumBitRate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileNetworkServiceServiceQosPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocationAndRetentionPriorityLevel = undefined;
      this._preemptionCapability = undefined;
      this._preemptionVulnerability = undefined;
      this._qosIndicator = undefined;
      this._maximumBitRate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocationAndRetentionPriorityLevel = value.allocationAndRetentionPriorityLevel;
      this._preemptionCapability = value.preemptionCapability;
      this._preemptionVulnerability = value.preemptionVulnerability;
      this._qosIndicator = value.qosIndicator;
      this._maximumBitRate.internalValue = value.maximumBitRate;
    }
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

  // qos_indicator - computed: false, optional: true, required: false
  private _qosIndicator?: number; 
  public get qosIndicator() {
    return this.getNumberAttribute('qos_indicator');
  }
  public set qosIndicator(value: number) {
    this._qosIndicator = value;
  }
  public resetQosIndicator() {
    this._qosIndicator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosIndicatorInput() {
    return this._qosIndicator;
  }

  // maximum_bit_rate - computed: false, optional: false, required: true
  private _maximumBitRate = new MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference(this, "maximum_bit_rate");
  public get maximumBitRate() {
    return this._maximumBitRate;
  }
  public putMaximumBitRate(value: MobileNetworkServiceServiceQosPolicyMaximumBitRate) {
    this._maximumBitRate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBitRateInput() {
    return this._maximumBitRate.internalValue;
  }
}
export interface MobileNetworkServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#create MobileNetworkService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#delete MobileNetworkService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#read MobileNetworkService#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#update MobileNetworkService#update}
  */
  readonly update?: string;
}

export function mobileNetworkServiceTimeoutsToTerraform(struct?: MobileNetworkServiceTimeouts | cdktf.IResolvable): any {
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


export function mobileNetworkServiceTimeoutsToHclTerraform(struct?: MobileNetworkServiceTimeouts | cdktf.IResolvable): any {
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

export class MobileNetworkServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MobileNetworkServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MobileNetworkServiceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service azurerm_mobile_network_service}
*/
export class MobileNetworkService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mobile_network_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MobileNetworkService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MobileNetworkService to import
  * @param importFromId The id of the existing MobileNetworkService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MobileNetworkService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mobile_network_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mobile_network_service azurerm_mobile_network_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MobileNetworkServiceConfig
  */
  public constructor(scope: Construct, id: string, config: MobileNetworkServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mobile_network_service',
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
    this._id = config.id;
    this._location = config.location;
    this._mobileNetworkId = config.mobileNetworkId;
    this._name = config.name;
    this._servicePrecedence = config.servicePrecedence;
    this._tags = config.tags;
    this._pccRule.internalValue = config.pccRule;
    this._serviceQosPolicy.internalValue = config.serviceQosPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // service_precedence - computed: false, optional: false, required: true
  private _servicePrecedence?: number; 
  public get servicePrecedence() {
    return this.getNumberAttribute('service_precedence');
  }
  public set servicePrecedence(value: number) {
    this._servicePrecedence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrecedenceInput() {
    return this._servicePrecedence;
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

  // pcc_rule - computed: false, optional: false, required: true
  private _pccRule = new MobileNetworkServicePccRuleList(this, "pcc_rule", false);
  public get pccRule() {
    return this._pccRule;
  }
  public putPccRule(value: MobileNetworkServicePccRule[] | cdktf.IResolvable) {
    this._pccRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pccRuleInput() {
    return this._pccRule.internalValue;
  }

  // service_qos_policy - computed: false, optional: true, required: false
  private _serviceQosPolicy = new MobileNetworkServiceServiceQosPolicyOutputReference(this, "service_qos_policy");
  public get serviceQosPolicy() {
    return this._serviceQosPolicy;
  }
  public putServiceQosPolicy(value: MobileNetworkServiceServiceQosPolicy) {
    this._serviceQosPolicy.internalValue = value;
  }
  public resetServiceQosPolicy() {
    this._serviceQosPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceQosPolicyInput() {
    return this._serviceQosPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MobileNetworkServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MobileNetworkServiceTimeouts) {
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
      location: cdktf.stringToTerraform(this._location),
      mobile_network_id: cdktf.stringToTerraform(this._mobileNetworkId),
      name: cdktf.stringToTerraform(this._name),
      service_precedence: cdktf.numberToTerraform(this._servicePrecedence),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      pcc_rule: cdktf.listMapper(mobileNetworkServicePccRuleToTerraform, true)(this._pccRule.internalValue),
      service_qos_policy: mobileNetworkServiceServiceQosPolicyToTerraform(this._serviceQosPolicy.internalValue),
      timeouts: mobileNetworkServiceTimeoutsToTerraform(this._timeouts.internalValue),
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
      service_precedence: {
        value: cdktf.numberToHclTerraform(this._servicePrecedence),
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
      pcc_rule: {
        value: cdktf.listMapperHcl(mobileNetworkServicePccRuleToHclTerraform, true)(this._pccRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MobileNetworkServicePccRuleList",
      },
      service_qos_policy: {
        value: mobileNetworkServiceServiceQosPolicyToHclTerraform(this._serviceQosPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MobileNetworkServiceServiceQosPolicyList",
      },
      timeouts: {
        value: mobileNetworkServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MobileNetworkServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
