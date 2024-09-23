// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualDesktopScalingPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#description VirtualDesktopScalingPlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#exclusion_tag VirtualDesktopScalingPlan#exclusion_tag}
  */
  readonly exclusionTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#friendly_name VirtualDesktopScalingPlan#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#id VirtualDesktopScalingPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#location VirtualDesktopScalingPlan#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#name VirtualDesktopScalingPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#resource_group_name VirtualDesktopScalingPlan#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#tags VirtualDesktopScalingPlan#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#time_zone VirtualDesktopScalingPlan#time_zone}
  */
  readonly timeZone: string;
  /**
  * host_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#host_pool VirtualDesktopScalingPlan#host_pool}
  */
  readonly hostPool?: VirtualDesktopScalingPlanHostPool[] | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#schedule VirtualDesktopScalingPlan#schedule}
  */
  readonly schedule: VirtualDesktopScalingPlanSchedule[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#timeouts VirtualDesktopScalingPlan#timeouts}
  */
  readonly timeouts?: VirtualDesktopScalingPlanTimeouts;
}
export interface VirtualDesktopScalingPlanHostPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#hostpool_id VirtualDesktopScalingPlan#hostpool_id}
  */
  readonly hostpoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#scaling_plan_enabled VirtualDesktopScalingPlan#scaling_plan_enabled}
  */
  readonly scalingPlanEnabled: boolean | cdktf.IResolvable;
}

export function virtualDesktopScalingPlanHostPoolToTerraform(struct?: VirtualDesktopScalingPlanHostPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostpool_id: cdktf.stringToTerraform(struct!.hostpoolId),
    scaling_plan_enabled: cdktf.booleanToTerraform(struct!.scalingPlanEnabled),
  }
}


export function virtualDesktopScalingPlanHostPoolToHclTerraform(struct?: VirtualDesktopScalingPlanHostPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostpool_id: {
      value: cdktf.stringToHclTerraform(struct!.hostpoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaling_plan_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.scalingPlanEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualDesktopScalingPlanHostPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualDesktopScalingPlanHostPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostpoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostpoolId = this._hostpoolId;
    }
    if (this._scalingPlanEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingPlanEnabled = this._scalingPlanEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualDesktopScalingPlanHostPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostpoolId = undefined;
      this._scalingPlanEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostpoolId = value.hostpoolId;
      this._scalingPlanEnabled = value.scalingPlanEnabled;
    }
  }

  // hostpool_id - computed: false, optional: false, required: true
  private _hostpoolId?: string; 
  public get hostpoolId() {
    return this.getStringAttribute('hostpool_id');
  }
  public set hostpoolId(value: string) {
    this._hostpoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostpoolIdInput() {
    return this._hostpoolId;
  }

  // scaling_plan_enabled - computed: false, optional: false, required: true
  private _scalingPlanEnabled?: boolean | cdktf.IResolvable; 
  public get scalingPlanEnabled() {
    return this.getBooleanAttribute('scaling_plan_enabled');
  }
  public set scalingPlanEnabled(value: boolean | cdktf.IResolvable) {
    this._scalingPlanEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPlanEnabledInput() {
    return this._scalingPlanEnabled;
  }
}

export class VirtualDesktopScalingPlanHostPoolList extends cdktf.ComplexList {
  public internalValue? : VirtualDesktopScalingPlanHostPool[] | cdktf.IResolvable

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
  public get(index: number): VirtualDesktopScalingPlanHostPoolOutputReference {
    return new VirtualDesktopScalingPlanHostPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualDesktopScalingPlanSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#days_of_week VirtualDesktopScalingPlan#days_of_week}
  */
  readonly daysOfWeek: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#name VirtualDesktopScalingPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#off_peak_load_balancing_algorithm VirtualDesktopScalingPlan#off_peak_load_balancing_algorithm}
  */
  readonly offPeakLoadBalancingAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#off_peak_start_time VirtualDesktopScalingPlan#off_peak_start_time}
  */
  readonly offPeakStartTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#peak_load_balancing_algorithm VirtualDesktopScalingPlan#peak_load_balancing_algorithm}
  */
  readonly peakLoadBalancingAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#peak_start_time VirtualDesktopScalingPlan#peak_start_time}
  */
  readonly peakStartTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_capacity_threshold_percent VirtualDesktopScalingPlan#ramp_down_capacity_threshold_percent}
  */
  readonly rampDownCapacityThresholdPercent: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_force_logoff_users VirtualDesktopScalingPlan#ramp_down_force_logoff_users}
  */
  readonly rampDownForceLogoffUsers: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_load_balancing_algorithm VirtualDesktopScalingPlan#ramp_down_load_balancing_algorithm}
  */
  readonly rampDownLoadBalancingAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_minimum_hosts_percent VirtualDesktopScalingPlan#ramp_down_minimum_hosts_percent}
  */
  readonly rampDownMinimumHostsPercent: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_notification_message VirtualDesktopScalingPlan#ramp_down_notification_message}
  */
  readonly rampDownNotificationMessage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_start_time VirtualDesktopScalingPlan#ramp_down_start_time}
  */
  readonly rampDownStartTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_stop_hosts_when VirtualDesktopScalingPlan#ramp_down_stop_hosts_when}
  */
  readonly rampDownStopHostsWhen: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_wait_time_minutes VirtualDesktopScalingPlan#ramp_down_wait_time_minutes}
  */
  readonly rampDownWaitTimeMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_capacity_threshold_percent VirtualDesktopScalingPlan#ramp_up_capacity_threshold_percent}
  */
  readonly rampUpCapacityThresholdPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_load_balancing_algorithm VirtualDesktopScalingPlan#ramp_up_load_balancing_algorithm}
  */
  readonly rampUpLoadBalancingAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_minimum_hosts_percent VirtualDesktopScalingPlan#ramp_up_minimum_hosts_percent}
  */
  readonly rampUpMinimumHostsPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_start_time VirtualDesktopScalingPlan#ramp_up_start_time}
  */
  readonly rampUpStartTime: string;
}

export function virtualDesktopScalingPlanScheduleToTerraform(struct?: VirtualDesktopScalingPlanSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    name: cdktf.stringToTerraform(struct!.name),
    off_peak_load_balancing_algorithm: cdktf.stringToTerraform(struct!.offPeakLoadBalancingAlgorithm),
    off_peak_start_time: cdktf.stringToTerraform(struct!.offPeakStartTime),
    peak_load_balancing_algorithm: cdktf.stringToTerraform(struct!.peakLoadBalancingAlgorithm),
    peak_start_time: cdktf.stringToTerraform(struct!.peakStartTime),
    ramp_down_capacity_threshold_percent: cdktf.numberToTerraform(struct!.rampDownCapacityThresholdPercent),
    ramp_down_force_logoff_users: cdktf.booleanToTerraform(struct!.rampDownForceLogoffUsers),
    ramp_down_load_balancing_algorithm: cdktf.stringToTerraform(struct!.rampDownLoadBalancingAlgorithm),
    ramp_down_minimum_hosts_percent: cdktf.numberToTerraform(struct!.rampDownMinimumHostsPercent),
    ramp_down_notification_message: cdktf.stringToTerraform(struct!.rampDownNotificationMessage),
    ramp_down_start_time: cdktf.stringToTerraform(struct!.rampDownStartTime),
    ramp_down_stop_hosts_when: cdktf.stringToTerraform(struct!.rampDownStopHostsWhen),
    ramp_down_wait_time_minutes: cdktf.numberToTerraform(struct!.rampDownWaitTimeMinutes),
    ramp_up_capacity_threshold_percent: cdktf.numberToTerraform(struct!.rampUpCapacityThresholdPercent),
    ramp_up_load_balancing_algorithm: cdktf.stringToTerraform(struct!.rampUpLoadBalancingAlgorithm),
    ramp_up_minimum_hosts_percent: cdktf.numberToTerraform(struct!.rampUpMinimumHostsPercent),
    ramp_up_start_time: cdktf.stringToTerraform(struct!.rampUpStartTime),
  }
}


export function virtualDesktopScalingPlanScheduleToHclTerraform(struct?: VirtualDesktopScalingPlanSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    off_peak_load_balancing_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.offPeakLoadBalancingAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    off_peak_start_time: {
      value: cdktf.stringToHclTerraform(struct!.offPeakStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peak_load_balancing_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.peakLoadBalancingAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peak_start_time: {
      value: cdktf.stringToHclTerraform(struct!.peakStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ramp_down_capacity_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.rampDownCapacityThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ramp_down_force_logoff_users: {
      value: cdktf.booleanToHclTerraform(struct!.rampDownForceLogoffUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ramp_down_load_balancing_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.rampDownLoadBalancingAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ramp_down_minimum_hosts_percent: {
      value: cdktf.numberToHclTerraform(struct!.rampDownMinimumHostsPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ramp_down_notification_message: {
      value: cdktf.stringToHclTerraform(struct!.rampDownNotificationMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ramp_down_start_time: {
      value: cdktf.stringToHclTerraform(struct!.rampDownStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ramp_down_stop_hosts_when: {
      value: cdktf.stringToHclTerraform(struct!.rampDownStopHostsWhen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ramp_down_wait_time_minutes: {
      value: cdktf.numberToHclTerraform(struct!.rampDownWaitTimeMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ramp_up_capacity_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.rampUpCapacityThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ramp_up_load_balancing_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.rampUpLoadBalancingAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ramp_up_minimum_hosts_percent: {
      value: cdktf.numberToHclTerraform(struct!.rampUpMinimumHostsPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ramp_up_start_time: {
      value: cdktf.stringToHclTerraform(struct!.rampUpStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualDesktopScalingPlanScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualDesktopScalingPlanSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._offPeakLoadBalancingAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakLoadBalancingAlgorithm = this._offPeakLoadBalancingAlgorithm;
    }
    if (this._offPeakStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakStartTime = this._offPeakStartTime;
    }
    if (this._peakLoadBalancingAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakLoadBalancingAlgorithm = this._peakLoadBalancingAlgorithm;
    }
    if (this._peakStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakStartTime = this._peakStartTime;
    }
    if (this._rampDownCapacityThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.rampDownCapacityThresholdPercent = this._rampDownCapacityThresholdPercent;
    }
    if (this._rampDownForceLogoffUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.rampDownForceLogoffUsers = this._rampDownForceLogoffUsers;
    }
    if (this._rampDownLoadBalancingAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.rampDownLoadBalancingAlgorithm = this._rampDownLoadBalancingAlgorithm;
    }
    if (this._rampDownMinimumHostsPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.rampDownMinimumHostsPercent = this._rampDownMinimumHostsPercent;
    }
    if (this._rampDownNotificationMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.rampDownNotificationMessage = this._rampDownNotificationMessage;
    }
    if (this._rampDownStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.rampDownStartTime = this._rampDownStartTime;
    }
    if (this._rampDownStopHostsWhen !== undefined) {
      hasAnyValues = true;
      internalValueResult.rampDownStopHostsWhen = this._rampDownStopHostsWhen;
    }
    if (this._rampDownWaitTimeMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.rampDownWaitTimeMinutes = this._rampDownWaitTimeMinutes;
    }
    if (this._rampUpCapacityThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.rampUpCapacityThresholdPercent = this._rampUpCapacityThresholdPercent;
    }
    if (this._rampUpLoadBalancingAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.rampUpLoadBalancingAlgorithm = this._rampUpLoadBalancingAlgorithm;
    }
    if (this._rampUpMinimumHostsPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.rampUpMinimumHostsPercent = this._rampUpMinimumHostsPercent;
    }
    if (this._rampUpStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.rampUpStartTime = this._rampUpStartTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualDesktopScalingPlanSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysOfWeek = undefined;
      this._name = undefined;
      this._offPeakLoadBalancingAlgorithm = undefined;
      this._offPeakStartTime = undefined;
      this._peakLoadBalancingAlgorithm = undefined;
      this._peakStartTime = undefined;
      this._rampDownCapacityThresholdPercent = undefined;
      this._rampDownForceLogoffUsers = undefined;
      this._rampDownLoadBalancingAlgorithm = undefined;
      this._rampDownMinimumHostsPercent = undefined;
      this._rampDownNotificationMessage = undefined;
      this._rampDownStartTime = undefined;
      this._rampDownStopHostsWhen = undefined;
      this._rampDownWaitTimeMinutes = undefined;
      this._rampUpCapacityThresholdPercent = undefined;
      this._rampUpLoadBalancingAlgorithm = undefined;
      this._rampUpMinimumHostsPercent = undefined;
      this._rampUpStartTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysOfWeek = value.daysOfWeek;
      this._name = value.name;
      this._offPeakLoadBalancingAlgorithm = value.offPeakLoadBalancingAlgorithm;
      this._offPeakStartTime = value.offPeakStartTime;
      this._peakLoadBalancingAlgorithm = value.peakLoadBalancingAlgorithm;
      this._peakStartTime = value.peakStartTime;
      this._rampDownCapacityThresholdPercent = value.rampDownCapacityThresholdPercent;
      this._rampDownForceLogoffUsers = value.rampDownForceLogoffUsers;
      this._rampDownLoadBalancingAlgorithm = value.rampDownLoadBalancingAlgorithm;
      this._rampDownMinimumHostsPercent = value.rampDownMinimumHostsPercent;
      this._rampDownNotificationMessage = value.rampDownNotificationMessage;
      this._rampDownStartTime = value.rampDownStartTime;
      this._rampDownStopHostsWhen = value.rampDownStopHostsWhen;
      this._rampDownWaitTimeMinutes = value.rampDownWaitTimeMinutes;
      this._rampUpCapacityThresholdPercent = value.rampUpCapacityThresholdPercent;
      this._rampUpLoadBalancingAlgorithm = value.rampUpLoadBalancingAlgorithm;
      this._rampUpMinimumHostsPercent = value.rampUpMinimumHostsPercent;
      this._rampUpStartTime = value.rampUpStartTime;
    }
  }

  // days_of_week - computed: false, optional: false, required: true
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('days_of_week'));
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
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

  // off_peak_load_balancing_algorithm - computed: false, optional: false, required: true
  private _offPeakLoadBalancingAlgorithm?: string; 
  public get offPeakLoadBalancingAlgorithm() {
    return this.getStringAttribute('off_peak_load_balancing_algorithm');
  }
  public set offPeakLoadBalancingAlgorithm(value: string) {
    this._offPeakLoadBalancingAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakLoadBalancingAlgorithmInput() {
    return this._offPeakLoadBalancingAlgorithm;
  }

  // off_peak_start_time - computed: false, optional: false, required: true
  private _offPeakStartTime?: string; 
  public get offPeakStartTime() {
    return this.getStringAttribute('off_peak_start_time');
  }
  public set offPeakStartTime(value: string) {
    this._offPeakStartTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakStartTimeInput() {
    return this._offPeakStartTime;
  }

  // peak_load_balancing_algorithm - computed: false, optional: false, required: true
  private _peakLoadBalancingAlgorithm?: string; 
  public get peakLoadBalancingAlgorithm() {
    return this.getStringAttribute('peak_load_balancing_algorithm');
  }
  public set peakLoadBalancingAlgorithm(value: string) {
    this._peakLoadBalancingAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peakLoadBalancingAlgorithmInput() {
    return this._peakLoadBalancingAlgorithm;
  }

  // peak_start_time - computed: false, optional: false, required: true
  private _peakStartTime?: string; 
  public get peakStartTime() {
    return this.getStringAttribute('peak_start_time');
  }
  public set peakStartTime(value: string) {
    this._peakStartTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peakStartTimeInput() {
    return this._peakStartTime;
  }

  // ramp_down_capacity_threshold_percent - computed: false, optional: false, required: true
  private _rampDownCapacityThresholdPercent?: number; 
  public get rampDownCapacityThresholdPercent() {
    return this.getNumberAttribute('ramp_down_capacity_threshold_percent');
  }
  public set rampDownCapacityThresholdPercent(value: number) {
    this._rampDownCapacityThresholdPercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rampDownCapacityThresholdPercentInput() {
    return this._rampDownCapacityThresholdPercent;
  }

  // ramp_down_force_logoff_users - computed: false, optional: false, required: true
  private _rampDownForceLogoffUsers?: boolean | cdktf.IResolvable; 
  public get rampDownForceLogoffUsers() {
    return this.getBooleanAttribute('ramp_down_force_logoff_users');
  }
  public set rampDownForceLogoffUsers(value: boolean | cdktf.IResolvable) {
    this._rampDownForceLogoffUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rampDownForceLogoffUsersInput() {
    return this._rampDownForceLogoffUsers;
  }

  // ramp_down_load_balancing_algorithm - computed: false, optional: false, required: true
  private _rampDownLoadBalancingAlgorithm?: string; 
  public get rampDownLoadBalancingAlgorithm() {
    return this.getStringAttribute('ramp_down_load_balancing_algorithm');
  }
  public set rampDownLoadBalancingAlgorithm(value: string) {
    this._rampDownLoadBalancingAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rampDownLoadBalancingAlgorithmInput() {
    return this._rampDownLoadBalancingAlgorithm;
  }

  // ramp_down_minimum_hosts_percent - computed: false, optional: false, required: true
  private _rampDownMinimumHostsPercent?: number; 
  public get rampDownMinimumHostsPercent() {
    return this.getNumberAttribute('ramp_down_minimum_hosts_percent');
  }
  public set rampDownMinimumHostsPercent(value: number) {
    this._rampDownMinimumHostsPercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rampDownMinimumHostsPercentInput() {
    return this._rampDownMinimumHostsPercent;
  }

  // ramp_down_notification_message - computed: false, optional: false, required: true
  private _rampDownNotificationMessage?: string; 
  public get rampDownNotificationMessage() {
    return this.getStringAttribute('ramp_down_notification_message');
  }
  public set rampDownNotificationMessage(value: string) {
    this._rampDownNotificationMessage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rampDownNotificationMessageInput() {
    return this._rampDownNotificationMessage;
  }

  // ramp_down_start_time - computed: false, optional: false, required: true
  private _rampDownStartTime?: string; 
  public get rampDownStartTime() {
    return this.getStringAttribute('ramp_down_start_time');
  }
  public set rampDownStartTime(value: string) {
    this._rampDownStartTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rampDownStartTimeInput() {
    return this._rampDownStartTime;
  }

  // ramp_down_stop_hosts_when - computed: false, optional: false, required: true
  private _rampDownStopHostsWhen?: string; 
  public get rampDownStopHostsWhen() {
    return this.getStringAttribute('ramp_down_stop_hosts_when');
  }
  public set rampDownStopHostsWhen(value: string) {
    this._rampDownStopHostsWhen = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rampDownStopHostsWhenInput() {
    return this._rampDownStopHostsWhen;
  }

  // ramp_down_wait_time_minutes - computed: false, optional: false, required: true
  private _rampDownWaitTimeMinutes?: number; 
  public get rampDownWaitTimeMinutes() {
    return this.getNumberAttribute('ramp_down_wait_time_minutes');
  }
  public set rampDownWaitTimeMinutes(value: number) {
    this._rampDownWaitTimeMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rampDownWaitTimeMinutesInput() {
    return this._rampDownWaitTimeMinutes;
  }

  // ramp_up_capacity_threshold_percent - computed: false, optional: true, required: false
  private _rampUpCapacityThresholdPercent?: number; 
  public get rampUpCapacityThresholdPercent() {
    return this.getNumberAttribute('ramp_up_capacity_threshold_percent');
  }
  public set rampUpCapacityThresholdPercent(value: number) {
    this._rampUpCapacityThresholdPercent = value;
  }
  public resetRampUpCapacityThresholdPercent() {
    this._rampUpCapacityThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rampUpCapacityThresholdPercentInput() {
    return this._rampUpCapacityThresholdPercent;
  }

  // ramp_up_load_balancing_algorithm - computed: false, optional: false, required: true
  private _rampUpLoadBalancingAlgorithm?: string; 
  public get rampUpLoadBalancingAlgorithm() {
    return this.getStringAttribute('ramp_up_load_balancing_algorithm');
  }
  public set rampUpLoadBalancingAlgorithm(value: string) {
    this._rampUpLoadBalancingAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rampUpLoadBalancingAlgorithmInput() {
    return this._rampUpLoadBalancingAlgorithm;
  }

  // ramp_up_minimum_hosts_percent - computed: false, optional: true, required: false
  private _rampUpMinimumHostsPercent?: number; 
  public get rampUpMinimumHostsPercent() {
    return this.getNumberAttribute('ramp_up_minimum_hosts_percent');
  }
  public set rampUpMinimumHostsPercent(value: number) {
    this._rampUpMinimumHostsPercent = value;
  }
  public resetRampUpMinimumHostsPercent() {
    this._rampUpMinimumHostsPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rampUpMinimumHostsPercentInput() {
    return this._rampUpMinimumHostsPercent;
  }

  // ramp_up_start_time - computed: false, optional: false, required: true
  private _rampUpStartTime?: string; 
  public get rampUpStartTime() {
    return this.getStringAttribute('ramp_up_start_time');
  }
  public set rampUpStartTime(value: string) {
    this._rampUpStartTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rampUpStartTimeInput() {
    return this._rampUpStartTime;
  }
}

export class VirtualDesktopScalingPlanScheduleList extends cdktf.ComplexList {
  public internalValue? : VirtualDesktopScalingPlanSchedule[] | cdktf.IResolvable

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
  public get(index: number): VirtualDesktopScalingPlanScheduleOutputReference {
    return new VirtualDesktopScalingPlanScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualDesktopScalingPlanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#create VirtualDesktopScalingPlan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#delete VirtualDesktopScalingPlan#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#read VirtualDesktopScalingPlan#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#update VirtualDesktopScalingPlan#update}
  */
  readonly update?: string;
}

export function virtualDesktopScalingPlanTimeoutsToTerraform(struct?: VirtualDesktopScalingPlanTimeouts | cdktf.IResolvable): any {
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


export function virtualDesktopScalingPlanTimeoutsToHclTerraform(struct?: VirtualDesktopScalingPlanTimeouts | cdktf.IResolvable): any {
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

export class VirtualDesktopScalingPlanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualDesktopScalingPlanTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualDesktopScalingPlanTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan azurerm_virtual_desktop_scaling_plan}
*/
export class VirtualDesktopScalingPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_virtual_desktop_scaling_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualDesktopScalingPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualDesktopScalingPlan to import
  * @param importFromId The id of the existing VirtualDesktopScalingPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualDesktopScalingPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_virtual_desktop_scaling_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_scaling_plan azurerm_virtual_desktop_scaling_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualDesktopScalingPlanConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualDesktopScalingPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_desktop_scaling_plan',
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
    this._description = config.description;
    this._exclusionTag = config.exclusionTag;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._timeZone = config.timeZone;
    this._hostPool.internalValue = config.hostPool;
    this._schedule.internalValue = config.schedule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // exclusion_tag - computed: false, optional: true, required: false
  private _exclusionTag?: string; 
  public get exclusionTag() {
    return this.getStringAttribute('exclusion_tag');
  }
  public set exclusionTag(value: string) {
    this._exclusionTag = value;
  }
  public resetExclusionTag() {
    this._exclusionTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionTagInput() {
    return this._exclusionTag;
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // host_pool - computed: false, optional: true, required: false
  private _hostPool = new VirtualDesktopScalingPlanHostPoolList(this, "host_pool", false);
  public get hostPool() {
    return this._hostPool;
  }
  public putHostPool(value: VirtualDesktopScalingPlanHostPool[] | cdktf.IResolvable) {
    this._hostPool.internalValue = value;
  }
  public resetHostPool() {
    this._hostPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPoolInput() {
    return this._hostPool.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new VirtualDesktopScalingPlanScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: VirtualDesktopScalingPlanSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualDesktopScalingPlanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualDesktopScalingPlanTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      exclusion_tag: cdktf.stringToTerraform(this._exclusionTag),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      host_pool: cdktf.listMapper(virtualDesktopScalingPlanHostPoolToTerraform, true)(this._hostPool.internalValue),
      schedule: cdktf.listMapper(virtualDesktopScalingPlanScheduleToTerraform, true)(this._schedule.internalValue),
      timeouts: virtualDesktopScalingPlanTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclusion_tag: {
        value: cdktf.stringToHclTerraform(this._exclusionTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_pool: {
        value: cdktf.listMapperHcl(virtualDesktopScalingPlanHostPoolToHclTerraform, true)(this._hostPool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualDesktopScalingPlanHostPoolList",
      },
      schedule: {
        value: cdktf.listMapperHcl(virtualDesktopScalingPlanScheduleToHclTerraform, true)(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualDesktopScalingPlanScheduleList",
      },
      timeouts: {
        value: virtualDesktopScalingPlanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualDesktopScalingPlanTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
