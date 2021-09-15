// https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevTestGlobalVmShutdownScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#daily_recurrence_time DevTestGlobalVmShutdownSchedule#daily_recurrence_time}
  */
  readonly dailyRecurrenceTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#enabled DevTestGlobalVmShutdownSchedule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#location DevTestGlobalVmShutdownSchedule#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#tags DevTestGlobalVmShutdownSchedule#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#timezone DevTestGlobalVmShutdownSchedule#timezone}
  */
  readonly timezone: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#virtual_machine_id DevTestGlobalVmShutdownSchedule#virtual_machine_id}
  */
  readonly virtualMachineId: string;
  /**
  * notification_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#notification_settings DevTestGlobalVmShutdownSchedule#notification_settings}
  */
  readonly notificationSettings: DevTestGlobalVmShutdownScheduleNotificationSettings[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#timeouts DevTestGlobalVmShutdownSchedule#timeouts}
  */
  readonly timeouts?: DevTestGlobalVmShutdownScheduleTimeouts;
}
export interface DevTestGlobalVmShutdownScheduleNotificationSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#email DevTestGlobalVmShutdownSchedule#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#enabled DevTestGlobalVmShutdownSchedule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#time_in_minutes DevTestGlobalVmShutdownSchedule#time_in_minutes}
  */
  readonly timeInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#webhook_url DevTestGlobalVmShutdownSchedule#webhook_url}
  */
  readonly webhookUrl?: string;
}

function devTestGlobalVmShutdownScheduleNotificationSettingsToTerraform(struct?: DevTestGlobalVmShutdownScheduleNotificationSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    time_in_minutes: cdktf.numberToTerraform(struct!.timeInMinutes),
    webhook_url: cdktf.stringToTerraform(struct!.webhookUrl),
  }
}

export interface DevTestGlobalVmShutdownScheduleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#create DevTestGlobalVmShutdownSchedule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#delete DevTestGlobalVmShutdownSchedule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#read DevTestGlobalVmShutdownSchedule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html#update DevTestGlobalVmShutdownSchedule#update}
  */
  readonly update?: string;
}

function devTestGlobalVmShutdownScheduleTimeoutsToTerraform(struct?: DevTestGlobalVmShutdownScheduleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html azurerm_dev_test_global_vm_shutdown_schedule}
*/
export class DevTestGlobalVmShutdownSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_dev_test_global_vm_shutdown_schedule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/dev_test_global_vm_shutdown_schedule.html azurerm_dev_test_global_vm_shutdown_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevTestGlobalVmShutdownScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DevTestGlobalVmShutdownScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dev_test_global_vm_shutdown_schedule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dailyRecurrenceTime = config.dailyRecurrenceTime;
    this._enabled = config.enabled;
    this._location = config.location;
    this._tags = config.tags;
    this._timezone = config.timezone;
    this._virtualMachineId = config.virtualMachineId;
    this._notificationSettings = config.notificationSettings;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // daily_recurrence_time - computed: false, optional: false, required: true
  private _dailyRecurrenceTime: string;
  public get dailyRecurrenceTime() {
    return this.getStringAttribute('daily_recurrence_time');
  }
  public set dailyRecurrenceTime(value: string) {
    this._dailyRecurrenceTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyRecurrenceTimeInput() {
    return this._dailyRecurrenceTime
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone: string;
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone
  }

  // virtual_machine_id - computed: false, optional: false, required: true
  private _virtualMachineId: string;
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }
  public set virtualMachineId(value: string) {
    this._virtualMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdInput() {
    return this._virtualMachineId
  }

  // notification_settings - computed: false, optional: false, required: true
  private _notificationSettings: DevTestGlobalVmShutdownScheduleNotificationSettings[];
  public get notificationSettings() {
    return this.interpolationForAttribute('notification_settings') as any;
  }
  public set notificationSettings(value: DevTestGlobalVmShutdownScheduleNotificationSettings[]) {
    this._notificationSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DevTestGlobalVmShutdownScheduleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DevTestGlobalVmShutdownScheduleTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      daily_recurrence_time: cdktf.stringToTerraform(this._dailyRecurrenceTime),
      enabled: cdktf.booleanToTerraform(this._enabled),
      location: cdktf.stringToTerraform(this._location),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timezone: cdktf.stringToTerraform(this._timezone),
      virtual_machine_id: cdktf.stringToTerraform(this._virtualMachineId),
      notification_settings: cdktf.listMapper(devTestGlobalVmShutdownScheduleNotificationSettingsToTerraform)(this._notificationSettings),
      timeouts: devTestGlobalVmShutdownScheduleTimeoutsToTerraform(this._timeouts),
    };
  }
}
