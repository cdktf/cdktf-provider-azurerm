// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualDesktopHostPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#custom_rdp_properties VirtualDesktopHostPool#custom_rdp_properties}
  */
  readonly customRdpProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#description VirtualDesktopHostPool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#friendly_name VirtualDesktopHostPool#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#id VirtualDesktopHostPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#load_balancer_type VirtualDesktopHostPool#load_balancer_type}
  */
  readonly loadBalancerType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#location VirtualDesktopHostPool#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#maximum_sessions_allowed VirtualDesktopHostPool#maximum_sessions_allowed}
  */
  readonly maximumSessionsAllowed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#name VirtualDesktopHostPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#personal_desktop_assignment_type VirtualDesktopHostPool#personal_desktop_assignment_type}
  */
  readonly personalDesktopAssignmentType?: string;
  /**
  * Preferred App Group type to display
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#preferred_app_group_type VirtualDesktopHostPool#preferred_app_group_type}
  */
  readonly preferredAppGroupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#public_network_access VirtualDesktopHostPool#public_network_access}
  */
  readonly publicNetworkAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#resource_group_name VirtualDesktopHostPool#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#start_vm_on_connect VirtualDesktopHostPool#start_vm_on_connect}
  */
  readonly startVmOnConnect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#tags VirtualDesktopHostPool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#type VirtualDesktopHostPool#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#validate_environment VirtualDesktopHostPool#validate_environment}
  */
  readonly validateEnvironment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#vm_template VirtualDesktopHostPool#vm_template}
  */
  readonly vmTemplate?: string;
  /**
  * scheduled_agent_updates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#scheduled_agent_updates VirtualDesktopHostPool#scheduled_agent_updates}
  */
  readonly scheduledAgentUpdates?: VirtualDesktopHostPoolScheduledAgentUpdates;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#timeouts VirtualDesktopHostPool#timeouts}
  */
  readonly timeouts?: VirtualDesktopHostPoolTimeouts;
}
export interface VirtualDesktopHostPoolScheduledAgentUpdatesSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#day_of_week VirtualDesktopHostPool#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#hour_of_day VirtualDesktopHostPool#hour_of_day}
  */
  readonly hourOfDay: number;
}

export function virtualDesktopHostPoolScheduledAgentUpdatesScheduleToTerraform(struct?: VirtualDesktopHostPoolScheduledAgentUpdatesSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
  }
}


export function virtualDesktopHostPoolScheduledAgentUpdatesScheduleToHclTerraform(struct?: VirtualDesktopHostPoolScheduledAgentUpdatesSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualDesktopHostPoolScheduledAgentUpdatesSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualDesktopHostPoolScheduledAgentUpdatesSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfWeek = undefined;
      this._hourOfDay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfWeek = value.dayOfWeek;
      this._hourOfDay = value.hourOfDay;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // hour_of_day - computed: false, optional: false, required: true
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }
}

export class VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList extends cdktf.ComplexList {
  public internalValue? : VirtualDesktopHostPoolScheduledAgentUpdatesSchedule[] | cdktf.IResolvable

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
  public get(index: number): VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference {
    return new VirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualDesktopHostPoolScheduledAgentUpdates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#enabled VirtualDesktopHostPool#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#timezone VirtualDesktopHostPool#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#use_session_host_timezone VirtualDesktopHostPool#use_session_host_timezone}
  */
  readonly useSessionHostTimezone?: boolean | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#schedule VirtualDesktopHostPool#schedule}
  */
  readonly schedule?: VirtualDesktopHostPoolScheduledAgentUpdatesSchedule[] | cdktf.IResolvable;
}

export function virtualDesktopHostPoolScheduledAgentUpdatesToTerraform(struct?: VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference | VirtualDesktopHostPoolScheduledAgentUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    use_session_host_timezone: cdktf.booleanToTerraform(struct!.useSessionHostTimezone),
    schedule: cdktf.listMapper(virtualDesktopHostPoolScheduledAgentUpdatesScheduleToTerraform, true)(struct!.schedule),
  }
}


export function virtualDesktopHostPoolScheduledAgentUpdatesToHclTerraform(struct?: VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference | VirtualDesktopHostPoolScheduledAgentUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_session_host_timezone: {
      value: cdktf.booleanToHclTerraform(struct!.useSessionHostTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schedule: {
      value: cdktf.listMapperHcl(virtualDesktopHostPoolScheduledAgentUpdatesScheduleToHclTerraform, true)(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualDesktopHostPoolScheduledAgentUpdates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._useSessionHostTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSessionHostTimezone = this._useSessionHostTimezone;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualDesktopHostPoolScheduledAgentUpdates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._timezone = undefined;
      this._useSessionHostTimezone = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._timezone = value.timezone;
      this._useSessionHostTimezone = value.useSessionHostTimezone;
      this._schedule.internalValue = value.schedule;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // use_session_host_timezone - computed: false, optional: true, required: false
  private _useSessionHostTimezone?: boolean | cdktf.IResolvable; 
  public get useSessionHostTimezone() {
    return this.getBooleanAttribute('use_session_host_timezone');
  }
  public set useSessionHostTimezone(value: boolean | cdktf.IResolvable) {
    this._useSessionHostTimezone = value;
  }
  public resetUseSessionHostTimezone() {
    this._useSessionHostTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSessionHostTimezoneInput() {
    return this._useSessionHostTimezone;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new VirtualDesktopHostPoolScheduledAgentUpdatesScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: VirtualDesktopHostPoolScheduledAgentUpdatesSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface VirtualDesktopHostPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#create VirtualDesktopHostPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#delete VirtualDesktopHostPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#read VirtualDesktopHostPool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#update VirtualDesktopHostPool#update}
  */
  readonly update?: string;
}

export function virtualDesktopHostPoolTimeoutsToTerraform(struct?: VirtualDesktopHostPoolTimeouts | cdktf.IResolvable): any {
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


export function virtualDesktopHostPoolTimeoutsToHclTerraform(struct?: VirtualDesktopHostPoolTimeouts | cdktf.IResolvable): any {
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

export class VirtualDesktopHostPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualDesktopHostPoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualDesktopHostPoolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool azurerm_virtual_desktop_host_pool}
*/
export class VirtualDesktopHostPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_virtual_desktop_host_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualDesktopHostPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualDesktopHostPool to import
  * @param importFromId The id of the existing VirtualDesktopHostPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualDesktopHostPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_virtual_desktop_host_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/virtual_desktop_host_pool azurerm_virtual_desktop_host_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualDesktopHostPoolConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualDesktopHostPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_desktop_host_pool',
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
    this._customRdpProperties = config.customRdpProperties;
    this._description = config.description;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._loadBalancerType = config.loadBalancerType;
    this._location = config.location;
    this._maximumSessionsAllowed = config.maximumSessionsAllowed;
    this._name = config.name;
    this._personalDesktopAssignmentType = config.personalDesktopAssignmentType;
    this._preferredAppGroupType = config.preferredAppGroupType;
    this._publicNetworkAccess = config.publicNetworkAccess;
    this._resourceGroupName = config.resourceGroupName;
    this._startVmOnConnect = config.startVmOnConnect;
    this._tags = config.tags;
    this._type = config.type;
    this._validateEnvironment = config.validateEnvironment;
    this._vmTemplate = config.vmTemplate;
    this._scheduledAgentUpdates.internalValue = config.scheduledAgentUpdates;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_rdp_properties - computed: false, optional: true, required: false
  private _customRdpProperties?: string; 
  public get customRdpProperties() {
    return this.getStringAttribute('custom_rdp_properties');
  }
  public set customRdpProperties(value: string) {
    this._customRdpProperties = value;
  }
  public resetCustomRdpProperties() {
    this._customRdpProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRdpPropertiesInput() {
    return this._customRdpProperties;
  }

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

  // load_balancer_type - computed: false, optional: false, required: true
  private _loadBalancerType?: string; 
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string) {
    this._loadBalancerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType;
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

  // maximum_sessions_allowed - computed: false, optional: true, required: false
  private _maximumSessionsAllowed?: number; 
  public get maximumSessionsAllowed() {
    return this.getNumberAttribute('maximum_sessions_allowed');
  }
  public set maximumSessionsAllowed(value: number) {
    this._maximumSessionsAllowed = value;
  }
  public resetMaximumSessionsAllowed() {
    this._maximumSessionsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumSessionsAllowedInput() {
    return this._maximumSessionsAllowed;
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

  // personal_desktop_assignment_type - computed: false, optional: true, required: false
  private _personalDesktopAssignmentType?: string; 
  public get personalDesktopAssignmentType() {
    return this.getStringAttribute('personal_desktop_assignment_type');
  }
  public set personalDesktopAssignmentType(value: string) {
    this._personalDesktopAssignmentType = value;
  }
  public resetPersonalDesktopAssignmentType() {
    this._personalDesktopAssignmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalDesktopAssignmentTypeInput() {
    return this._personalDesktopAssignmentType;
  }

  // preferred_app_group_type - computed: false, optional: true, required: false
  private _preferredAppGroupType?: string; 
  public get preferredAppGroupType() {
    return this.getStringAttribute('preferred_app_group_type');
  }
  public set preferredAppGroupType(value: string) {
    this._preferredAppGroupType = value;
  }
  public resetPreferredAppGroupType() {
    this._preferredAppGroupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredAppGroupTypeInput() {
    return this._preferredAppGroupType;
  }

  // public_network_access - computed: false, optional: true, required: false
  private _publicNetworkAccess?: string; 
  public get publicNetworkAccess() {
    return this.getStringAttribute('public_network_access');
  }
  public set publicNetworkAccess(value: string) {
    this._publicNetworkAccess = value;
  }
  public resetPublicNetworkAccess() {
    this._publicNetworkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessInput() {
    return this._publicNetworkAccess;
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

  // start_vm_on_connect - computed: false, optional: true, required: false
  private _startVmOnConnect?: boolean | cdktf.IResolvable; 
  public get startVmOnConnect() {
    return this.getBooleanAttribute('start_vm_on_connect');
  }
  public set startVmOnConnect(value: boolean | cdktf.IResolvable) {
    this._startVmOnConnect = value;
  }
  public resetStartVmOnConnect() {
    this._startVmOnConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startVmOnConnectInput() {
    return this._startVmOnConnect;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // validate_environment - computed: false, optional: true, required: false
  private _validateEnvironment?: boolean | cdktf.IResolvable; 
  public get validateEnvironment() {
    return this.getBooleanAttribute('validate_environment');
  }
  public set validateEnvironment(value: boolean | cdktf.IResolvable) {
    this._validateEnvironment = value;
  }
  public resetValidateEnvironment() {
    this._validateEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateEnvironmentInput() {
    return this._validateEnvironment;
  }

  // vm_template - computed: false, optional: true, required: false
  private _vmTemplate?: string; 
  public get vmTemplate() {
    return this.getStringAttribute('vm_template');
  }
  public set vmTemplate(value: string) {
    this._vmTemplate = value;
  }
  public resetVmTemplate() {
    this._vmTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmTemplateInput() {
    return this._vmTemplate;
  }

  // scheduled_agent_updates - computed: false, optional: true, required: false
  private _scheduledAgentUpdates = new VirtualDesktopHostPoolScheduledAgentUpdatesOutputReference(this, "scheduled_agent_updates");
  public get scheduledAgentUpdates() {
    return this._scheduledAgentUpdates;
  }
  public putScheduledAgentUpdates(value: VirtualDesktopHostPoolScheduledAgentUpdates) {
    this._scheduledAgentUpdates.internalValue = value;
  }
  public resetScheduledAgentUpdates() {
    this._scheduledAgentUpdates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledAgentUpdatesInput() {
    return this._scheduledAgentUpdates.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualDesktopHostPoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualDesktopHostPoolTimeouts) {
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
      custom_rdp_properties: cdktf.stringToTerraform(this._customRdpProperties),
      description: cdktf.stringToTerraform(this._description),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      load_balancer_type: cdktf.stringToTerraform(this._loadBalancerType),
      location: cdktf.stringToTerraform(this._location),
      maximum_sessions_allowed: cdktf.numberToTerraform(this._maximumSessionsAllowed),
      name: cdktf.stringToTerraform(this._name),
      personal_desktop_assignment_type: cdktf.stringToTerraform(this._personalDesktopAssignmentType),
      preferred_app_group_type: cdktf.stringToTerraform(this._preferredAppGroupType),
      public_network_access: cdktf.stringToTerraform(this._publicNetworkAccess),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      start_vm_on_connect: cdktf.booleanToTerraform(this._startVmOnConnect),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      validate_environment: cdktf.booleanToTerraform(this._validateEnvironment),
      vm_template: cdktf.stringToTerraform(this._vmTemplate),
      scheduled_agent_updates: virtualDesktopHostPoolScheduledAgentUpdatesToTerraform(this._scheduledAgentUpdates.internalValue),
      timeouts: virtualDesktopHostPoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_rdp_properties: {
        value: cdktf.stringToHclTerraform(this._customRdpProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      load_balancer_type: {
        value: cdktf.stringToHclTerraform(this._loadBalancerType),
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
      maximum_sessions_allowed: {
        value: cdktf.numberToHclTerraform(this._maximumSessionsAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      personal_desktop_assignment_type: {
        value: cdktf.stringToHclTerraform(this._personalDesktopAssignmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_app_group_type: {
        value: cdktf.stringToHclTerraform(this._preferredAppGroupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network_access: {
        value: cdktf.stringToHclTerraform(this._publicNetworkAccess),
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
      start_vm_on_connect: {
        value: cdktf.booleanToHclTerraform(this._startVmOnConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_environment: {
        value: cdktf.booleanToHclTerraform(this._validateEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vm_template: {
        value: cdktf.stringToHclTerraform(this._vmTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_agent_updates: {
        value: virtualDesktopHostPoolScheduledAgentUpdatesToHclTerraform(this._scheduledAgentUpdates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualDesktopHostPoolScheduledAgentUpdatesList",
      },
      timeouts: {
        value: virtualDesktopHostPoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualDesktopHostPoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
