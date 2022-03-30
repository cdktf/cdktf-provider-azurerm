// https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualDesktopScalingPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#description VirtualDesktopScalingPlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#exclusion_tag VirtualDesktopScalingPlan#exclusion_tag}
  */
  readonly exclusionTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#friendly_name VirtualDesktopScalingPlan#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#location VirtualDesktopScalingPlan#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#name VirtualDesktopScalingPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#resource_group_name VirtualDesktopScalingPlan#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#tags VirtualDesktopScalingPlan#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#time_zone VirtualDesktopScalingPlan#time_zone}
  */
  readonly timeZone: string;
  /**
  * host_pool block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#host_pool VirtualDesktopScalingPlan#host_pool}
  */
  readonly hostPool?: VirtualDesktopScalingPlanHostPool[] | cdktf.IResolvable;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#schedule VirtualDesktopScalingPlan#schedule}
  */
  readonly schedule: VirtualDesktopScalingPlanSchedule[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#timeouts VirtualDesktopScalingPlan#timeouts}
  */
  readonly timeouts?: VirtualDesktopScalingPlanTimeouts;
}
export interface VirtualDesktopScalingPlanHostPool {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#hostpool_id VirtualDesktopScalingPlan#hostpool_id}
  */
  readonly hostpoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#scaling_plan_enabled VirtualDesktopScalingPlan#scaling_plan_enabled}
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

export interface VirtualDesktopScalingPlanSchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#days_of_week VirtualDesktopScalingPlan#days_of_week}
  */
  readonly daysOfWeek: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#name VirtualDesktopScalingPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#off_peak_load_balancing_algorithm VirtualDesktopScalingPlan#off_peak_load_balancing_algorithm}
  */
  readonly offPeakLoadBalancingAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#off_peak_start_time VirtualDesktopScalingPlan#off_peak_start_time}
  */
  readonly offPeakStartTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#peak_load_balancing_algorithm VirtualDesktopScalingPlan#peak_load_balancing_algorithm}
  */
  readonly peakLoadBalancingAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#peak_start_time VirtualDesktopScalingPlan#peak_start_time}
  */
  readonly peakStartTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#ramp_down_capacity_threshold_percent VirtualDesktopScalingPlan#ramp_down_capacity_threshold_percent}
  */
  readonly rampDownCapacityThresholdPercent: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#ramp_down_force_logoff_users VirtualDesktopScalingPlan#ramp_down_force_logoff_users}
  */
  readonly rampDownForceLogoffUsers: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#ramp_down_load_balancing_algorithm VirtualDesktopScalingPlan#ramp_down_load_balancing_algorithm}
  */
  readonly rampDownLoadBalancingAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#ramp_down_minimum_hosts_percent VirtualDesktopScalingPlan#ramp_down_minimum_hosts_percent}
  */
  readonly rampDownMinimumHostsPercent: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#ramp_down_notification_message VirtualDesktopScalingPlan#ramp_down_notification_message}
  */
  readonly rampDownNotificationMessage: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#ramp_down_start_time VirtualDesktopScalingPlan#ramp_down_start_time}
  */
  readonly rampDownStartTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#ramp_down_stop_hosts_when VirtualDesktopScalingPlan#ramp_down_stop_hosts_when}
  */
  readonly rampDownStopHostsWhen: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#ramp_down_wait_time_minutes VirtualDesktopScalingPlan#ramp_down_wait_time_minutes}
  */
  readonly rampDownWaitTimeMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#ramp_up_capacity_threshold_percent VirtualDesktopScalingPlan#ramp_up_capacity_threshold_percent}
  */
  readonly rampUpCapacityThresholdPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#ramp_up_load_balancing_algorithm VirtualDesktopScalingPlan#ramp_up_load_balancing_algorithm}
  */
  readonly rampUpLoadBalancingAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#ramp_up_minimum_hosts_percent VirtualDesktopScalingPlan#ramp_up_minimum_hosts_percent}
  */
  readonly rampUpMinimumHostsPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#ramp_up_start_time VirtualDesktopScalingPlan#ramp_up_start_time}
  */
  readonly rampUpStartTime: string;
}

export function virtualDesktopScalingPlanScheduleToTerraform(struct?: VirtualDesktopScalingPlanSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform)(struct!.daysOfWeek),
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

export interface VirtualDesktopScalingPlanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#create VirtualDesktopScalingPlan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#delete VirtualDesktopScalingPlan#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#read VirtualDesktopScalingPlan#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan#update VirtualDesktopScalingPlan#update}
  */
  readonly update?: string;
}

export function virtualDesktopScalingPlanTimeoutsToTerraform(struct?: VirtualDesktopScalingPlanTimeoutsOutputReference | VirtualDesktopScalingPlanTimeouts | cdktf.IResolvable): any {
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

export class VirtualDesktopScalingPlanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualDesktopScalingPlanTimeouts | undefined {
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

  public set internalValue(value: VirtualDesktopScalingPlanTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan azurerm_virtual_desktop_scaling_plan}
*/
export class VirtualDesktopScalingPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_virtual_desktop_scaling_plan";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_desktop_scaling_plan azurerm_virtual_desktop_scaling_plan} Resource
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
        providerVersion: '2.99.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._exclusionTag = config.exclusionTag;
    this._friendlyName = config.friendlyName;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._timeZone = config.timeZone;
    this._hostPool = config.hostPool;
    this._schedule = config.schedule;
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
  private _hostPool?: VirtualDesktopScalingPlanHostPool[] | cdktf.IResolvable; 
  public get hostPool() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('host_pool');
  }
  public set hostPool(value: VirtualDesktopScalingPlanHostPool[] | cdktf.IResolvable) {
    this._hostPool = value;
  }
  public resetHostPool() {
    this._hostPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPoolInput() {
    return this._hostPool;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: VirtualDesktopScalingPlanSchedule[] | cdktf.IResolvable; 
  public get schedule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('schedule');
  }
  public set schedule(value: VirtualDesktopScalingPlanSchedule[] | cdktf.IResolvable) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      host_pool: cdktf.listMapper(virtualDesktopScalingPlanHostPoolToTerraform)(this._hostPool),
      schedule: cdktf.listMapper(virtualDesktopScalingPlanScheduleToTerraform)(this._schedule),
      timeouts: virtualDesktopScalingPlanTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
