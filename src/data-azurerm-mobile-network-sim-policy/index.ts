// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/mobile_network_sim_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermMobileNetworkSimPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/mobile_network_sim_policy#id DataAzurermMobileNetworkSimPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/mobile_network_sim_policy#mobile_network_id DataAzurermMobileNetworkSimPolicy#mobile_network_id}
  */
  readonly mobileNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/mobile_network_sim_policy#name DataAzurermMobileNetworkSimPolicy#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/mobile_network_sim_policy#timeouts DataAzurermMobileNetworkSimPolicy#timeouts}
  */
  readonly timeouts?: DataAzurermMobileNetworkSimPolicyTimeouts;
}
export interface DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate {
}

export function dataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateToTerraform(struct?: DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateToHclTerraform(struct?: DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // downlink - computed: true, optional: false, required: false
  public get downlink() {
    return this.getStringAttribute('downlink');
  }

  // uplink - computed: true, optional: false, required: false
  public get uplink() {
    return this.getStringAttribute('uplink');
  }
}

export class DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference {
    return new DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermMobileNetworkSimPolicySliceDataNetwork {
}

export function dataAzurermMobileNetworkSimPolicySliceDataNetworkToTerraform(struct?: DataAzurermMobileNetworkSimPolicySliceDataNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermMobileNetworkSimPolicySliceDataNetworkToHclTerraform(struct?: DataAzurermMobileNetworkSimPolicySliceDataNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermMobileNetworkSimPolicySliceDataNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermMobileNetworkSimPolicySliceDataNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_allowed_session_types - computed: true, optional: false, required: false
  public get additionalAllowedSessionTypes() {
    return this.getListAttribute('additional_allowed_session_types');
  }

  // allocation_and_retention_priority_level - computed: true, optional: false, required: false
  public get allocationAndRetentionPriorityLevel() {
    return this.getNumberAttribute('allocation_and_retention_priority_level');
  }

  // allowed_services_ids - computed: true, optional: false, required: false
  public get allowedServicesIds() {
    return this.getListAttribute('allowed_services_ids');
  }

  // data_network_id - computed: true, optional: false, required: false
  public get dataNetworkId() {
    return this.getStringAttribute('data_network_id');
  }

  // default_session_type - computed: true, optional: false, required: false
  public get defaultSessionType() {
    return this.getStringAttribute('default_session_type');
  }

  // max_buffered_packets - computed: true, optional: false, required: false
  public get maxBufferedPackets() {
    return this.getNumberAttribute('max_buffered_packets');
  }

  // preemption_capability - computed: true, optional: false, required: false
  public get preemptionCapability() {
    return this.getStringAttribute('preemption_capability');
  }

  // preemption_vulnerability - computed: true, optional: false, required: false
  public get preemptionVulnerability() {
    return this.getStringAttribute('preemption_vulnerability');
  }

  // qos_indicator - computed: true, optional: false, required: false
  public get qosIndicator() {
    return this.getNumberAttribute('qos_indicator');
  }

  // session_aggregate_maximum_bit_rate - computed: true, optional: false, required: false
  private _sessionAggregateMaximumBitRate = new DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList(this, "session_aggregate_maximum_bit_rate", false);
  public get sessionAggregateMaximumBitRate() {
    return this._sessionAggregateMaximumBitRate;
  }
}

export class DataAzurermMobileNetworkSimPolicySliceDataNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference {
    return new DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermMobileNetworkSimPolicySlice {
}

export function dataAzurermMobileNetworkSimPolicySliceToTerraform(struct?: DataAzurermMobileNetworkSimPolicySlice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermMobileNetworkSimPolicySliceToHclTerraform(struct?: DataAzurermMobileNetworkSimPolicySlice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermMobileNetworkSimPolicySliceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermMobileNetworkSimPolicySlice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermMobileNetworkSimPolicySlice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_network - computed: true, optional: false, required: false
  private _dataNetwork = new DataAzurermMobileNetworkSimPolicySliceDataNetworkList(this, "data_network", false);
  public get dataNetwork() {
    return this._dataNetwork;
  }

  // default_data_network_id - computed: true, optional: false, required: false
  public get defaultDataNetworkId() {
    return this.getStringAttribute('default_data_network_id');
  }

  // slice_id - computed: true, optional: false, required: false
  public get sliceId() {
    return this.getStringAttribute('slice_id');
  }
}

export class DataAzurermMobileNetworkSimPolicySliceList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermMobileNetworkSimPolicySliceOutputReference {
    return new DataAzurermMobileNetworkSimPolicySliceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate {
}

export function dataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateToTerraform(struct?: DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateToHclTerraform(struct?: DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // downlink - computed: true, optional: false, required: false
  public get downlink() {
    return this.getStringAttribute('downlink');
  }

  // uplink - computed: true, optional: false, required: false
  public get uplink() {
    return this.getStringAttribute('uplink');
  }
}

export class DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList extends cdktf.ComplexList {

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
  public get(index: number): DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference {
    return new DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermMobileNetworkSimPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/mobile_network_sim_policy#read DataAzurermMobileNetworkSimPolicy#read}
  */
  readonly read?: string;
}

export function dataAzurermMobileNetworkSimPolicyTimeoutsToTerraform(struct?: DataAzurermMobileNetworkSimPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermMobileNetworkSimPolicyTimeoutsToHclTerraform(struct?: DataAzurermMobileNetworkSimPolicyTimeouts | cdktf.IResolvable): any {
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

export class DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermMobileNetworkSimPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAzurermMobileNetworkSimPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/mobile_network_sim_policy azurerm_mobile_network_sim_policy}
*/
export class DataAzurermMobileNetworkSimPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mobile_network_sim_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermMobileNetworkSimPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermMobileNetworkSimPolicy to import
  * @param importFromId The id of the existing DataAzurermMobileNetworkSimPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/mobile_network_sim_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermMobileNetworkSimPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mobile_network_sim_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/mobile_network_sim_policy azurerm_mobile_network_sim_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermMobileNetworkSimPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermMobileNetworkSimPolicyConfig) {
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
    this._id = config.id;
    this._mobileNetworkId = config.mobileNetworkId;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_slice_id - computed: true, optional: false, required: false
  public get defaultSliceId() {
    return this.getStringAttribute('default_slice_id');
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

  // rat_frequency_selection_priority_index - computed: true, optional: false, required: false
  public get ratFrequencySelectionPriorityIndex() {
    return this.getNumberAttribute('rat_frequency_selection_priority_index');
  }

  // registration_timer_in_seconds - computed: true, optional: false, required: false
  public get registrationTimerInSeconds() {
    return this.getNumberAttribute('registration_timer_in_seconds');
  }

  // slice - computed: true, optional: false, required: false
  private _slice = new DataAzurermMobileNetworkSimPolicySliceList(this, "slice", false);
  public get slice() {
    return this._slice;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // user_equipment_aggregate_maximum_bit_rate - computed: true, optional: false, required: false
  private _userEquipmentAggregateMaximumBitRate = new DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList(this, "user_equipment_aggregate_maximum_bit_rate", false);
  public get userEquipmentAggregateMaximumBitRate() {
    return this._userEquipmentAggregateMaximumBitRate;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermMobileNetworkSimPolicyTimeouts) {
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
      mobile_network_id: cdktf.stringToTerraform(this._mobileNetworkId),
      name: cdktf.stringToTerraform(this._name),
      timeouts: dataAzurermMobileNetworkSimPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      timeouts: {
        value: dataAzurermMobileNetworkSimPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermMobileNetworkSimPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
